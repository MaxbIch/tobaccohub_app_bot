import image1 from "../../img/endorphin/ananas.png";
import image2 from "../../img/endorphin/blackberry.png";
import image3 from "../../img/endorphin/blackcurrant.png";
import image4 from "../../img/endorphin/blueberry.png";
import image5 from "../../img/endorphin/cacao.png";
import image6 from "../../img/endorphin/cranberry.png";
import image7 from "../../img/endorphin/darkpassion.png";
import image8 from "../../img/endorphin/granate.png";
import image9 from "../../img/endorphin/grapefruit.png";
import image10 from "../../img/endorphin/lemon.png";
import image11 from "../../img/endorphin/mango.png";
import image12 from "../../img/endorphin/orange.png";
import image13 from "../../img/endorphin/peach.png";
import image14 from "../../img/endorphin/pear.png";
import image15 from "../../img/endorphin/quince.png";
import image16 from "../../img/endorphin/raspberry.png";


const endorfin = [
    {
        id: 1,
        name: "Pineapple",
        taste: "Ананас",
        price: '500.000',
        previewImage: image1,
        fullImage: image1,
        description: "Ананас — сочный тропический вкус с лёгкой кислинкой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 2,
        name: "Blackberry",
        taste: "Ежевика",
        price: '500.000',
        previewImage: image2,
        fullImage: image2,
        description: "Ежевика — насыщенный ягодный аромат с мягкой сладостью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 3,
        name: "Blackcurrant",
        taste: "Темный смородина",
        price: '500.000',
        previewImage: image3,
        fullImage: image3,
        description: "Темный смородина — глубокий терпкий вкус с выраженной кислинкой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 4,
        name: "Blueberry",
        taste: "Голубика",
        price: '500.000',
        previewImage: image4,
        fullImage: image4,
        description: "Голубика — нежный сладкий вкус с лёгкой свежестью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 5,
        name: "Cacao",
        taste: "Какао",
        price: '500.000',
        previewImage: image5,
        fullImage: image5,
        description: "Какао — бархатистый шоколадный вкус с лёгкой горчинкой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 6,
        name: "Cranberry",
        taste: "Клюква",
        price: '500.000',
        previewImage: image6,
        fullImage: image6,
        description: "Клюква — яркий кислый вкус с освежающим послевкусием.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 7,
        name: "Dark passion",
        taste: "Маракуйя",
        price: '500.000',
        previewImage: image7,
        fullImage: image7,
        description: "Маракуйя — экзотический сладко-кислый вкус с ароматной свежестью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 8,
        name: "Pomegranate",
        taste: "Гранта",
        price: '500.000',
        previewImage: image8,
        fullImage: image8,
        description: "Гранта — сладкий гранатовый вкус с лёгкой терпкостью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 9,
        name: "Grapefruit",
        taste: "Грейпфрут",
        price: '500.000',
        previewImage: image9,
        fullImage: image9,
        description: "Грейпфрут — освежающий цитрусовый вкус с характерной горчинкой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 10,
        name: "Lemon",
        taste: "Лимон",
        price: '500.000',
        previewImage: image10,
        fullImage: image10,
        description: "Лимон — яркий кислый вкус с бодрящей свежестью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 11,
        name: "Mango",
        taste: "Манго",
        price: '500.000',
        previewImage: image11,
        fullImage: image11,
        description: "Манго — сладкий тропический вкус с мягкой кремовой ноткой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 12,
        name: "Orange",
        taste: "Апельсин",
        price: '500.000',
        previewImage: image12,
        fullImage: image12,
        description: "Апельсин — сочный цитрусовый вкус с приятной сладостью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 13,
        name: "Peach",
        taste: "Персик",
        price: '500.000',
        previewImage: image13,
        fullImage: image13,
        description: "Персик — мягкий сладкий вкус с нежным фруктовым ароматом.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 14,
        name: "Pear",
        taste: "Груша",
        price: '500.000',
        previewImage: image14,
        fullImage: image14,
        description: "Груша — деликатный сладкий вкус с лёгкой медовой ноткой.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 15,
        name: "Quince",
        taste: "Айва",
        price: '500.000',
        previewImage: image15,
        fullImage: image15,
        description: "Айва — терпкий фруктовый вкус с лёгкой сладостью.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    },{
        id: 16,
        name: "Raspberry",
        taste: "Малина",
        price: '500.000',
        previewImage: image16,
        fullImage: image16,
        description: "Малина — яркий сладко-кислый вкус с насыщенным ароматом.",

        variants: [
            { weight: 30, price: '120.000' },
            { weight: 60, price: '240.000' },
        ]
    }

];

export default endorfin;