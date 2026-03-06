"use client";
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './style.css'

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim().length < 2) {
        setSearchResults([])
        setShowDropdown(false)
        return
      }

      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:3003/products?search=${encodeURIComponent(query.trim())}`)
        const allProducts = await res.json()

        const filtered = allProducts.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5) 

        setSearchResults(filtered)
        setShowDropdown(true)
      } catch (error) {
        console.error('Error searching products:', error)
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    debouncedSearch(searchQuery)
  }, [searchQuery, debouncedSearch])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowDropdown(false)
      router.push(`/Catalog?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleResultClick = () => {
    setShowDropdown(false)
    setSearchQuery('')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.search-container')) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Что хотите найти?"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => searchQuery.length >= 2 && setShowDropdown(true)}
        />
        <button
          className="search-button"
          aria-label="Что хотите найти?"
          onClick={handleSearch}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        
        {showDropdown && (
          <div className="search-dropdown">
            {isLoading ? (
              <div className="search-loading">Поиск...</div>
            ) : searchResults.length > 0 ? (
              <>
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="search-result-item"
                    onClick={handleResultClick}
                  >
                    <img src={product.image} alt={product.title} className="search-result-image" />
                    <div className="search-result-info">
                      <div className="search-result-title">{product.title}</div>
                      <div className="search-result-description">{product.description}</div>
                      <div className="search-result-price">{product.price}</div>
                    </div>
                  </Link>
                ))}
                <div className="search-see-all">
                  <button
                    className="search-see-all-button"
                    onClick={handleSearch}
                  >
                    Посмотреть все результаты
                  </button>
                </div>
              </>
            ) : searchQuery.length >= 2 ? (
              <div className="search-no-results">Ничего не найдено</div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
