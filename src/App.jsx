import { useState, useEffect } from "react";
import "./App.css";

// 🔥 Табак
import darkside from "./data/tobacco/darkside";
import mustHave from "./data/tobacco/musthave";
import blackburn from "./data/tobacco/blackburn";
import bonche from "./data/tobacco/bonche";
import starline from "./data/tobacco/starline";
import satyr from "./data/tobacco/satyr";
import huligan from "./data/tobacco/huligan";
import endorfin from "./data/tobacco/endorfin";

// 👄 Жевательный табак
import chew1 from "./data/chew/chew1";
import chew2 from "./data/chew/chew2";

// 🧰 Допы
import accessories from "./data/accessories/accessories";

// 🖼 Картинки табаков
import darksideImg from "./img/tobaccologo/darkside.png";
import mustHaveImg from "./img/tobaccologo/musthave.png";
import blackburnImg from "./img/tobaccologo/blackburn.png";
import boncheImg from "./img/tobaccologo/bonche.png";
import starlineImg from "./img/tobaccologo/starline.png";
import satyrImg from "./img/tobaccologo/satyr.png";
import huliganImg from "./img/tobaccologo/huligan.png";
import endorfinImg from "./img/tobaccologo/endorf.png";

// 🖼 Жевательный
import chew1Img from "./img/chewlogo/turbo.jpg";
import chew2Img from "./img/chewlogo/turbo.jpg";

// 📦 ДАННЫЕ
const tobaccoData = {
  Darkside: darkside,
  MustHave: mustHave,
  Blackburn: blackburn,
  Endorfin: endorfin,
  Bonche: bonche,
  Starline: starline,
  Satyr: satyr,
  Huligan: huligan
};

const tobaccoImages = {
  Darkside: darksideImg,
  MustHave: mustHaveImg,
  Bonche: boncheImg,
  Starline: starlineImg,
  Satyr: satyrImg,
  Blackburn: blackburnImg,
  Huligan: huliganImg,
  Endorfin: endorfinImg,
};

const chewData = {
  Chew1: chew1,
  Chew2: chew2,
};

const chewImages = {
  Chew1: chew1Img,
  Chew2: chew2Img,
};

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    tg?.ready();
    tg?.expand();
  }, []);

  // 🔥 ПАРС ЦЕНЫ (из "600.000" → 600000)
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(price.replace(/\./g, ""));
  };

  // 💰 ФОРМАТ ОБРАТНО (600000 → "600.000")
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      return sum + parsePrice(item.price);
    }, 0);
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

  const handleBackFromProduct = () => {
    if (chewData[selectedBrand]) {
      setScreen("chew_products");
    } else if (tobaccoData[selectedBrand]) {
      setScreen("products");
    } else {
      setScreen("accessories");
    }
  };

  return (
      <div className="container">
        <h1 className="title">🔥 Tobacco Hub</h1>

        {/* HOME */}
        {screen === "home" && (
            <div className="grid">
              <div className="card" onClick={() => setScreen("tobacco")}>
                💨 Табак
              </div>

              <div className="card" onClick={() => setScreen("chew")}>
                👄 Жевательный табак
              </div>

              <div className="card" onClick={() => setScreen("accessories")}>
                🧰 Допы
              </div>
            </div>
        )}

        {/* TOBACCO */}
        {screen === "tobacco" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <div className="grid brands-grid">
                {Object.keys(tobaccoData).map((brand) => (
                    <div
                        key={brand}
                        className="card"
                        onClick={() => {
                          setSelectedBrand(brand);
                          setScreen("products");
                        }}
                    >
                      <img src={tobaccoImages[brand]} alt={brand} />
                    </div>
                ))}
              </div>
            </>
        )}

        {/* CHEW */}
        {screen === "chew" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <div className="grid brands-grid">
                {Object.keys(chewData).map((brand) => (
                    <div
                        key={brand}
                        className="card"
                        onClick={() => {
                          setSelectedBrand(brand);
                          setScreen("chew_products");
                        }}
                    >
                      <img src={chewImages[brand]} alt={brand} />
                    </div>
                ))}
              </div>
            </>
        )}

        {/* PRODUCTS (ТАБАК) */}
        {screen === "products" && (
            <>
              <button className="back" onClick={() => setScreen("tobacco")}>
                ⬅ Назад
              </button>

              <div className="grid products">
                {[...tobaccoData[selectedBrand]]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((p) => (
                        <div
                            key={p.id}
                            className="card product"
                            onClick={() => {
                              setSelectedProduct(p);
                              setScreen("product");
                            }}
                        >
                          <img src={p.previewImage} />

                          <div className="info">
                            <p>{p.name}</p>
                            <div className="stock">{p.taste}</div>
                            <div className="price">
                              {formatPrice(parsePrice(p.price))} VND
                            </div>
                          </div>

                          <button
                              className="add-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart({ ...p, brand: selectedBrand });
                              }}
                          >
                            +
                          </button>
                        </div>
                    ))}
              </div>
            </>
        )}

        {/* PRODUCTS (ЖЕВАТЕЛЬНЫЙ) */}
        {screen === "chew_products" && (
            <>
              <button className="back" onClick={() => setScreen("chew")}>
                ⬅ Назад
              </button>

              <div className="grid products">
                {[...chewData[selectedBrand]]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((p) => (
                        <div
                            key={p.id}
                            className="card product"
                            onClick={() => {
                              setSelectedProduct(p);
                              setScreen("product");
                            }}
                        >
                          <img src={p.previewImage} />

                          <div className="info">
                            <p>{p.name}</p>
                            <div className="stock">{p.taste}</div>
                            <div className="price">
                              {formatPrice(parsePrice(p.price))} VND
                            </div>
                          </div>

                          <button
                              className="add-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart({ ...p, brand: selectedBrand });
                              }}
                          >
                            +
                          </button>
                        </div>
                    ))}
              </div>
            </>
        )}

        {/* ACCESSORIES */}
        {screen === "accessories" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <div className="grid products">
                {accessories.map((p) => (
                    <div
                        key={p.id}
                        className="card product"
                        onClick={() => {
                          setSelectedProduct(p);
                          setScreen("product");
                        }}
                    >
                      <img src={p.previewImage} />

                      <div className="info">
                        <p>{p.name}</p>
                        <div className="stock">{p.taste}</div>
                        <div className="price">
                          {formatPrice(parsePrice(p.price))} VND
                        </div>
                      </div>

                      <button
                          className="add-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(p);
                          }}
                      >
                        +
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        {/* PRODUCT PAGE */}
        {screen === "product" && selectedProduct && (
            <>
              <button className="back" onClick={handleBackFromProduct}>
                ⬅ Назад
              </button>

              <div className="product-page">
                <img src={selectedProduct.previewImage} className="big-img" />

                <h2>{selectedProduct.name}</h2>
                <p className="price">
                  {formatPrice(parsePrice(selectedProduct.price))} VND
                </p>
                <p className="desc">{selectedProduct.description}</p>

                <button
                    className="add-main"
                    onClick={() =>
                        addToCart({
                          ...selectedProduct,
                          brand: selectedBrand || "Допы"
                        })
                    }
                >
                  Добавить в корзину
                </button>
              </div>
            </>
        )}

        {/* CART */}
        {cart.length > 0 && (
            <div className="cart-bar" onClick={() => setCartOpen(true)}>
              🛒 {cart.length} товаров — {formatPrice(getTotal())} VND
            </div>
        )}

        <div className={`cart-modal ${cartOpen ? "open" : ""}`}>
          <div className="cart-header">
            <h2>Корзина</h2>
            <button onClick={() => setCartOpen(false)}>✖</button>
          </div>

          {cart.map((item, i) => (
              <div key={i} className="cart-item">
            <span>
              {item.name} — {formatPrice(parsePrice(item.price))} VND
            </span>
                <button onClick={() => removeFromCart(i)}>❌</button>
              </div>
          ))}

          <h3>Итого: {formatPrice(getTotal())} VND</h3>

          <button className="checkout" onClick={sendOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
  );
}

export default App;