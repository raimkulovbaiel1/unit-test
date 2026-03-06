"use client";

import {FC} from "react";
import "./style.css";

import tg from "@/shared/assets/icons/OurHelp/telegram.svg";
import dzen from "@/shared/assets/icons/OurHelp/dzen.svg";
import vk from "@/shared/assets/icons/OurHelp/vk.svg";

const OurHelp : FC = () => {
    return (
        <section className="our-help">
            <div className="container">
                <div className="content-text">
                    <h2>Не нашли ответ на свой вопрос?</h2>
                    <p>Мы всегда готовы ответить на любые вопросы</p>
                </div>

                <div className="help-grid">
                    <div className="help-card">
                        <a
                            href="https://t.me/your_channel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                        >
                            <img src={tg.src} className="link" alt="Telegram" />
                        </a>
                        <h3>Задайте его нам</h3>
                        <p>Ответим на любые вопросы и поможем с выбором</p>
                    </div>

                    <div className="help-card">
                        <a
                            href="https://dzen.ru/your_page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                        >
                            <img src={dzen.src} className="link" alt="Dzen" />
                        </a>
                        <h3>Наши статьи в Дзен</h3>
                        <p>Мы на связи и готовы помочь вам в любое время</p>
                    </div>

                    <div className="help-card">
                        <a
                            href="https://vk.com/your_group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-link"
                        >
                            <img src={vk.src} className="link" alt="VK" />
                        </a>
                        <h3>Присоединяйтесь</h3>
                        <p>Оставьте заявку и мы свяжемся с вами</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurHelp;
