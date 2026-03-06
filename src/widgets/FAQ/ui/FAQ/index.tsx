"use client";

import { useState } from "react";
import "./style.css";

const faqData = [
  {
    question: "Как H&M удается поддерживать такие низкие цены?",
    answer:
      "Мы оптимизируем процессы производства, логистики и продаж, чтобы предлагать лучшие цены без потери качества.",
  },
  {
    question: "Проводит ли H&M конкурсы для своих покупателей?",
    answer:
      "Информацию обо всех кампаниях H&M вы можете найти на официальном сайте в разделе Акции. Будьте внимательны к мошенникам.",
  },
  {
    question:
      "В Facebook и Instagram предлагают подарочные карты H&M. Это правда?",
    answer:
      "H&M не раздает подарочные карты через личные сообщения в соцсетях. Это мошенничество.",
  },
  {
    question: "Где можно купить подарочные карты H&M?",
    answer:
      "Подарочные карты можно приобрести в официальных магазинах H&M и на сайте.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>
        <p className="faq-subtitle">
          Скорее всего тут уже есть ответ и на ваш
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
