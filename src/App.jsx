import {useState, useEffect} from "react";
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
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedVariants, setSelectedVariants] = useState({});

    const tg = window.Telegram?.WebApp;

    useEffect(() => {
        tg?.ready();
        tg?.expand();
    }, []);

    const parsePrice = (price) => {
        if (typeof price === "number") return price;
        return Number(price.replace(/\./g, ""));
    };

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

    const selectVariant = (productId, variant) => {
        setSelectedVariants((prev) => ({
            ...prev,
            [productId]: variant
        }));
    };

    return (
        <>
            {/* 🔝 NAVBAR */}
            <div className="navbar">
                <div className="nav-inner">
                    <div className="logo">🔥 Tobacco Hub</div>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <div className="dropdown">
                        <div onClick={() => {
                            setScreen("tobacco");
                            setMenuOpen(false);
                        }}>
                            💨 Табак
                        </div>
                        <div onClick={() => {
                            setScreen("chew");
                            setMenuOpen(false);
                        }}>
                            👄 Жевательный
                        </div>
                        <div onClick={() => {
                            setScreen("accessories");
                            setMenuOpen(false);
                        }}>
                            🧰 Допы
                        </div>
                    </div>
                )}
            </div>

            <div className="container with-nav">

                {/* HOME */}
                {screen === "home" && (
                    <>
                        {/* 🔥 HERO */}
                        <div className="hero">
                            <h1>🔥 Tobacco Hub</h1>
                            <p>Лучшие табаки и аксессуары во Вьетнаме</p>
                        </div>

                        {/* 🔥 КАТЕГОРИИ */}
                        <div className="categories-grid">
                            <div className="category-card tobacco" onClick={() => setScreen("tobacco")}>
                                <div className="cat-icon">💨</div>
                                <h3>Табак</h3>
                                <p>Darkside, MustHave и др.</p>
                            </div>

                            <div className="category-card chew" onClick={() => setScreen("chew")}>
                                <div className="cat-icon">👄</div>
                                <h3>Жевательный</h3>
                                <p>Сильный никотин</p>
                            </div>

                            <div className="category-card acc" onClick={() => setScreen("accessories")}>
                                <div className="cat-icon">🧰</div>
                                <h3>Аксессуары</h3>
                                <p>Чаши, угли, девайсы</p>
                            </div>
                        </div>

                        {/* 🔥 О МАГАЗИНЕ */}
                        <div className="about">
                            <h2>О магазине</h2>

                            <div className="about-card">
                                <p>
                                    Мы — Telegram-магазин с быстрой доставкой по Вьетнаму.
                                    Только оригинальный табак и проверенные бренды.
                                </p>

                                <div className="about-features">
                                    <div>⚡ Быстрая доставка</div>
                                    <div>🔥 Топ бренды</div>
                                    <div>💬 Поддержка 24/7</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* TOBACCO */}
                {screen === "tobacco" && (
                    <>
                        <div className="back-wrapper">
                            <button className="back" onClick={() => setScreen("home")}>
                                ⬅ Назад
                            </button>
                        </div>

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
                                    <img src={tobaccoImages[brand]} alt={brand}/>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* CHEW */}
                {screen === "chew" && (
                    <>
                        <div className="back-wrapper">
                            <button className="back" onClick={() => setScreen("home")}>
                                ⬅ Назад
                            </button>
                        </div>

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
                                    <img src={chewImages[brand]} alt={brand}/>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* PRODUCTS */}
                {screen === "products" && (
                    <>
                        <div className="back-wrapper">
                            <button className="back" onClick={() => setScreen("tobacco")}>
                                ⬅ Назад
                            </button>
                        </div>

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
                                        <img src={p.previewImage}/>

                                        <div className="info">
                                            <p>{p.name}</p>
                                            <div className="stock">{p.taste}</div>
                                        </div>

                                    </div>
                                ))}
                        </div>
                    </>
                )}

                {/* CHEW PRODUCTS */}
                {screen === "chew_products" && (
                    <>
                        <div className="back-wrapper">
                            <button className="back" onClick={() => setScreen("chew")}>
                                ⬅ Назад
                            </button>
                        </div>

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
                                        <img src={p.previewImage}/>

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
                                                addToCart({...p, brand: selectedBrand});
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
                        <div className="back-wrapper">
                            <button className="back" onClick={() => setScreen("home")}>
                                ⬅ Назад
                            </button>
                        </div>

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
                                    <img src={p.previewImage}/>

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
                {screen === "product" && selectedProduct && (() => {
                    const selected = selectedVariants[selectedProduct.id] || selectedProduct.variants?.[0];

                    return (
                        <>
                            <div className="back-wrapper">
                                <button className="back" onClick={handleBackFromProduct}>
                                    ⬅ Назад
                                </button>
                            </div>

                            <div className="product-page">
                                <img src={selectedProduct.previewImage} className="big-img"/>

                                <h2>{selectedProduct.name}</h2>

                                {/* ГРАММОВКИ */}
                                <div className="variants big">
                                    {selectedProduct.variants?.map((v, i) => {
                                        const active = selected?.weight === v.weight;

                                        return (
                                            <button
                                                key={i}
                                                className={`variant-btn ${active ? "active" : ""}`}
                                                onClick={() => selectVariant(selectedProduct.id, v)}
                                            >
                                                {v.weight}г
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* ЦЕНА */}
                                <p className="price">
                                    {formatPrice(parsePrice(selected?.price || selectedProduct.price))} VND
                                </p>

                                <p className="desc">{selectedProduct.description}</p>

                                <button
                                    className="add-main"
                                    onClick={() => {
                                        // безопасный выбор
                                        const chosen =
                                            selected ||
                                            selectedVariants[selectedProduct.id] ||
                                            selectedProduct.variants?.[0] ||
                                            {
                                                weight: null,
                                                price: selectedProduct.price
                                            };

                                        addToCart({
                                            ...selectedProduct,
                                            weight: chosen.weight,
                                            price: chosen.price,
                                            brand: selectedBrand || "Допы"
                                        });
                                    }}
                                >
                                    Добавить в корзину
                                </button>
                            </div>
                        </>
                    );
                })()}

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
                            {item.name}
                              {item.weight ? ` (${item.weight}г)` : ""}
                              {" — "}
                              {formatPrice(parsePrice(item.price || 0))} VND
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
        </>
    );
}

export default App;