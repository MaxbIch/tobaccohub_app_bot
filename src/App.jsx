import { useState, useEffect } from "react";
import "./App.css";
import mustHave from "./data/musthave";
import darkside from "./data/darkside";

const tobaccoData = {
  Darkside: darkside,
  MustHave: mustHave
};

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.expand();
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

    const order = {
      user: {
        id: user?.id,
        name: user?.first_name,
        username: user?.username
      },
      items: cart,
      total: getTotal()
    };

    tg.sendData(JSON.stringify(order));
  };

  return (
      <div className="container">
        <h1 className="title">🔥 Tobacco Hub</h1>

        {/* HOME */}
        {screen === "home" && (
            <div className="grid">
              <div className="card big" onClick={() => setScreen("tobacco")}>
                💨 Табак
              </div>
            </div>
        )}

        {/* CATEGORIES */}
        {screen === "tobacco" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

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

        {/* PRODUCTS */}
        {screen === "products" && (
            <>
              <button className="back" onClick={() => setScreen("tobacco")}>
                ⬅ Назад
              </button>

              <h2>{selectedBrand}</h2>

              <div className="grid products">
                {tobaccoData[selectedBrand].map((p) => (
                    <div
                        key={p.id}
                        className="card product"
                        onClick={() => {
                          setSelectedProduct(p);
                          setScreen("product");
                        }}
                    >
                      <img src={p.image} />
                      <div className="info">
                        <p>{p.name}</p>
                        <span>{p.price} ₽</span>
                      </div>
                    </div>
                ))}
              </div>
            </>
        )}

        {/* PRODUCT PAGE */}
        {screen === "product" && selectedProduct && (
            <>
              <button className="back" onClick={() => setScreen("products")}>
                ⬅ Назад
              </button>

              <div className="product-page">
                <img src={selectedProduct.image} className="big-img" />

                <h2>{selectedProduct.name}</h2>
                <p className="price">{selectedProduct.price} ₽</p>
                <p className="desc">{selectedProduct.description}</p>

                <button
                    className="add"
                    onClick={() =>
                        addToCart({ ...selectedProduct, brand: selectedBrand })
                    }
                >
                  Добавить в корзину
                </button>
              </div>
            </>
        )}

        {/* CART */}
        {cart.length > 0 && (
            <div className="cart-bar">
              <span>🛒 {cart.length} товаров — {getTotal()} ₽</span>
              <button onClick={sendOrder}>Оформить</button>
            </div>
        )}
      </div>
  );
}

export default App;