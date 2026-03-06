import "./style.css";

export default function CheckoutPage() {
  return (
    <section className="checkout">
      <div className="checkout-container">

        <h1 className="checkout-title">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

        <div className="checkout-grid">

          {/* LEFT */}
          <div className="checkout-left">

            {/* ADDRESS */}
            <div className="checkout-card">
              <div className="address-item active">
                <input type="radio" checked readOnly />
                <div>
                  <strong>Сидоров Иван Петрович</strong>
                 
                </div>
              </div>

              <div className="address-item">
                <input type="radio" readOnly />
                <span>Другой адрес</span>
              </div>
            </div>

            {/* USER DATA */}
            <div className="checkout-card">
              <div className="section-title">Ваши данные</div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Ваше имя</label>
                  <input type="text" defaultValue="Иванов" />
                </div>

                <div className="input-group">
                  <label>Ваша фамилия *</label>
                  <input type="text" className="error" />
                  <span className="error-text">Это поле обязательно</span>
                </div>

                <div className="input-group">
                  <label>Ваше отчество</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Номер телефона</label>
                  <input type="tel" placeholder="+7 (XXX) XXX XX XX" />
                </div>
              </div>
            </div>

            {/* DELIVERY */}
            <div className="checkout-card">
              <div className="section-title">Адрес доставки</div>

              <div className="form-grid">
                <div className="input-group">
                  <label>Область</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Город</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Улица</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-grid three">
                <div className="input-group">
                  <label>Корпус</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Дом</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Квартира</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="checkout-card">
              <div className="section-title">Способ оплаты</div>

              <div className="payment-method">
                <label>
                  <input type="radio" checked readOnly />
                  Картами российских банков 
                  <img src=""  alt="logo" />
                </label>
                
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <aside className="checkout-summary">
            <div className="summary-row">
              <span>Ваша скидка</span>
              <strong className="summary-discount">15 300 ₽</strong>
            </div>

            <div className="summary-row total">
              <span>Итого</span>
              <strong className="summary-total">162 765 ₽</strong>
              <small>12 товаров</small>
            </div>

            <button className="pay-btn">Оплатить</button>
          </aside>

        </div>
      </div>
    </section>
  );
}
