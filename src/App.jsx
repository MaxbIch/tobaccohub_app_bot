import { useState, useEffect } from "react";
import "./App.css";

const tobaccoData = {
  Darkside: [
    { id: 1, name: "Supernova", price: 1800 },
    { id: 2, name: "Bananapapa", price: 1750 }
  ],
  MustHave: [
    { id: 3, name: "Pinkman", price: 1700 },
    { id: 4, name: "Space Flavor", price: 1690 }
  ]
};

const accessories = [
  { id: 10, name: "Чаша Oblako", price: 1200 },
  { id: 11, name: "Калауд", price: 900 }
];

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cart, setCart] = useState([]);

  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.expand();
      console.log("Telegram OK");
      console.log("USER:", tg.initDataUnsafe?.user);
    }
  }, []);

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
    const user = tg?.initDataUnsafe?.user;

    console.log("USER:", user); // 👈 добавили для проверки

    const order = {
      user: user
          ? {
            id: user.id,
            name: user.first_name,
            username: user.username
          }
          : null,
      items: cart,
      total: getTotal()
    };

    if (tg) {
      tg.sendData(JSON.stringify(order));
    }
  };

  return (
      <div className="container">
        <h1>🔥 Tobacco Hub</h1>

        {screen === "home" && (
            <>
              <h2>Категорииbbbb</h2>

              <div className="grid">
                <div className="card" onClick={() => setScreen("tobacco")}>
                  💨 Табак
                </div>

                <div className="card" onClick={() => setScreen("accessories")}>
                  🧰 Допы
                </div>
              </div>
            </>
        )}

        {screen === "tobacco" && (
            <>
              <button onClick={() => setScreen("home")}>Назад</button>

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
              <button onClick={() => setScreen("tobacco")}>Назад</button>

              <h2>{selectedBrand}</h2>

              <div className="grid">
                {tobaccoData[selectedBrand].map((p) => (
                    <div key={p.id} className="card">
                      <p>{p.name}</p>
                      <p>{p.price} ₽</p>

                      <button onClick={() => addToCart({ ...p, brand: selectedBrand })}>
                        Добавить
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        {screen === "accessories" && (
            <>
              <button onClick={() => setScreen("home")}>Назад</button>

              <div className="grid">
                {accessories.map((item) => (
                    <div key={item.id} className="card">
                      <p>{item.name}</p>
                      <p>{item.price} ₽</p>

                      <button onClick={() => addToCart({ ...item, brand: "Допы" })}>
                        Добавить
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        <div className="cart">
          <h3>Корзина ({cart.length})</h3>

          {cart.map((item, i) => (
              <div key={i} className="cart-item">
                {item.brand} {item.name}
                <button onClick={() => removeFromCart(i)}>❌</button>
              </div>
          ))}

          <p>Итого: {getTotal()} ₽</p>

          {cart.length > 0 && (
              <button onClick={sendOrder}>Оформить заказ</button>
          )}
        </div>
      </div>
  );
}

export default App;