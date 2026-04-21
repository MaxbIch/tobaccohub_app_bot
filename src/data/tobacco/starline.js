import image1 from "../../img/starline/ananas.png";
import image2 from "../../img/starline/belgianwaffles.png";
import image3 from "../../img/starline/berrypopcorn.png";
import image4 from "../../img/starline/cherry.png";
import image5 from "../../img/starline/coconutmilk.png";
import image6 from "../../img/starline/cranberry.png";
import image7 from "../../img/starline/energy.png";
import image8 from "../../img/starline/kiwi.png";
import image9 from "../../img/starline/lemon.png";
import image10 from "../../img/starline/lemongrass.png";
import image11 from "../../img/starline/melon.png";
import image12 from "../../img/starline/pear.png";
import image13 from "../../img/starline/pina.png";
import image14 from "../../img/starline/raspberry.png";
import image15 from "../../img/starline/raspberrywaffles.png";
import image16 from "../../img/starline/strawberry.png";

const starline = [
    {
        id: 1,
        name: "Ананас",
        taste: "Ананас",

        previewImage: image1,
        fullImage: image1,
        description: "Сочный тропический вкус с яркой кисло-сладкой свежестью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 2,
        name: "Бельгийские вафли",
        taste: "Бельгийские вафли",

        previewImage: image2,
        fullImage: image2,
        description: "Тёплый десертный вкус с мягкой сливочной сладостью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 3,
        name: "Ягодный попкорн",
        taste: "Ягодный попкорн",

        previewImage: image3,
        fullImage: image3,
        description: "Сладкий попкорн с насыщенным ягодным ароматом",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 4,
        name: "Вишня",
        taste: "Вишня",

        previewImage: image4,
        fullImage: image4,
        description: "Сочный вишнёвый вкус с приятной кислинкой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 5,
        name: "Кокосовое молоко",
        taste: "Кокосовое молоко",

        previewImage: image5,
        fullImage: image5,
        description: "Нежный кокосовый вкус с кремовой сладостью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 6,
        name: "Клюква",
        taste: "Клюква",

        previewImage: image6,
        fullImage: image6,
        description: "Яркий кислый вкус с освежающим ягодным послевкусием",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 7,
        name: "Энергетик",
        taste: "Энергетик",

        previewImage: image7,
        fullImage: image7,
        description: "Бодрящий сладкий вкус с характерной напиточной ноткой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 8,
        name: "Киви",
        taste: "Киви",

        previewImage: image8,
        fullImage: image8,
        description: "Свежий кисло-сладкий вкус с яркой фруктовой ноткой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 9,
        name: "Лимон",
        taste: "Лимон",

        previewImage: image9,
        fullImage: image9,
        description: "Яркий цитрусовый вкус с освежающей кислинкой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 10,
        name: "Лимонграсс",
        taste: "Лимонграсс",

        previewImage: image10,
        fullImage: image10,
        description: "Травяной вкус с лёгкой цитрусовой свежестью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 11,
        name: "Дыня",
        taste: "Дыня",

        previewImage: image11,
        fullImage: image11,
        description: "Сладкий сочный вкус с мягкой фруктовой свежестью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 12,
        name: "Груша",
        taste: "Груша",

        previewImage: image12,
        fullImage: image12,
        description: "Нежный сладкий вкус с лёгкой медовой ноткой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 13,
        name: "Пина Колада",
        taste: "Пина Колада",

        previewImage: image13,
        fullImage: image13,
        description: "Тропический коктейль с кокосом и ананасовой сладостью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 14,
        name: "Малина",
        taste: "Малина",

        previewImage: image14,
        fullImage: image14,
        description: "Яркий ягодный вкус с приятной сладкой кислинкой",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 15,
        name: "Малиновые вафли",
        taste: "Малиновые вафли",

        previewImage: image15,
        fullImage: image15,
        description: "Десертный вкус вафель с нежной малиновой сладостью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }, {
        id: 16,
        name: "Земляника",
        taste: "Земляника",

        previewImage: image16,
        fullImage: image16,
        description: "Нежный лесной вкус с мягкой ягодной сладостью",

        variants: [
            {weight: 30, price: '190.000'},
            {weight: 100, price: '490.000'},
            {weight: 250, price: '1100.000'}
        ]
    }
];

export default starline;