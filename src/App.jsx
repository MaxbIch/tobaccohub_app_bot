import { useState } from "react";
import "./App.css";

const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const tobaccoData = {
  Darkside: [
    { id: 1, name: "Supernova", price: 1800 },
    { id: 2, name: "Bananapapa", price: 1750 }
  ],
  MustHave: [
    { id: 3, name: "Pinkman", price: 1700 },
    { id: 4, name: "Space Flavor", price: 1650 }
  ],
  Tangiers: [
    { id: 5, name: "Cane Mint", price: 2000 }
  ]
};

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const sendOrder = () => {
    if (!tg) {
      alert("Открой через Telegram");
      return;
    }

    const order = {
      items: cart,
      total: getTotal()
    };

    tg.sendData(JSON.stringify(order));
  };

  return (
      <div className="container">
        <h1 className="title">🔥 Tobacco Hub</h1>

        {screen === "home" && (
            <>
              <h2 className="subtitle">Категории</h2>

              <div className="grid">
                <div className="card" onClick={() => setScreen("tobacco")}>
                  💨 Табак
                </div>

                <div className="card">
                  🧰 Допы
                </div>
              </div>
            </>
        )}

        {screen === "tobacco" && (
            <>
              <button className="button" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <h2 className="subtitle">Выберите бренд</h2>

              <div className="grid">
                {Object.keys(tobaccoData).map((brand) => (
                    <div
                        key={brand}
                        className="card"
                        onClick={() => {
                          setSelectedBrand(brand);
                          setScreen("products");
                        }}
                    >
                      {brand}
                    </div>
                ))}
              </div>
            </>
        )}

        {screen === "products" && (
            <>
              <button className="button" onClick={() => setScreen("tobacco")}>
                ⬅ Назад
              </button>

              <h2 className="subtitle">{selectedBrand}</h2>

              <div className="grid">
                {tobaccoData[selectedBrand].map((product) => (
                    <div key={product.id} className="card">
                      <div>{product.name}</div>
                      <div>{product.price} ₽</div>

                      <button
                          className="button"
                          onClick={() =>
                              addToCart({ ...product, brand: selectedBrand })
                          }
                      >
                        Добавить
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        <div className="cart">
          <h2>🛒 Корзина ({cart.length})</h2>

          {cart.map((item, index) => (
              <div key={index} className="cart-item">
            <span>
              {item.brand} {item.name} — {item.price} ₽
            </span>

                <button onClick={() => removeFromCart(index)}>❌</button>
              </div>
          ))}

          <div className="total">Итого: {getTotal()} ₽</div>

          {cart.length > 0 && (
              <button className="checkout" onClick={sendOrder}>
                Оформить заказ
              </button>
          )}
        </div>
      </div>
  );
}

export default App;