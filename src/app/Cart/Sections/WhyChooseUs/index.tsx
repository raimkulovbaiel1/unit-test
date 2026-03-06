"use client";

import "./style.css";
import img1 from "@/shared/assets/img/WhyChooseUs/right.png";

export default function WhyChooseUs() {
    return (
        <section className="why-section">
            <div className="title-block">
                <h2 className="main-title">ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
                <p className="subtitle">НАШИ ПРЕИМУЩЕСТВА</p>
            </div>
            <div className="why-container">
                {/* Декоративные картинки */}
                <img src={img1.src} className="right" alt="logo" />
                {/* Верхняя часть: Заголовок и Лого */}
                <header className="why-header">

                    <div className="header-decoration">
                        {/* Сюда можно вставить img с гербом */}
                        <div className="logo-placeholder"></div>
                    </div>
                </header>

                {/* Сетка основных преимуществ */}
                <div className="features-grid">
                    <div className="feature-item border-right">
                        <h3>100% Оригинальный ТОВАР</h3>
                        <p>Предоставляем чеки о покупке</p>
                    </div>
                    <div className="feature-item">
                        <h3>Удобная оплата</h3>
                        <p>
                            Работаем через платежный терминал от Тинькофф.
                            Принимаем карты российских банков
                        </p>
                    </div>
                </div>

                {/* Секция отзывов */}
                <div className="reviews-section">
                    <h3 className="reviews-title">О НАС ГОВОРЯТ</h3>
                    <p className="team-description">
                        Наша команда всегда заботится о каждом клиенте и старается предоставить
                        высококачественный сервис и максимально удобные условия сотрудничества
                    </p>

                    <div className="stats-row">
                        <div className="stat-box">
                            <span className="stat-number">200+</span>
                            <span className="stat-text">Доставок в этом году</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">600</span>
                            <span className="stat-text">Отзывов на Отзовик.ru</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">71%</span>
                            <span className="stat-text">Клиентов нас рекомендуют</span>
                        </div>
                    </div>

                    <div className="reviews-footer">
                        <div className="stars">☆☆☆☆☆</div>
                        <a href="#" className="reviews-link">
                            <span className="icon">💬</span> Смотреть все отзывы
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}