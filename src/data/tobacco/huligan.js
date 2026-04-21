import image1 from "../../img/huligan/old.png";
import image2 from "../../img/huligan/bar.png";
import image3 from "../../img/huligan/healthy.png";
import image4 from "../../img/huligan/turbo.png";

const huligan = [
    {
        id: 1,
        name: "OLD",
        taste: "Лимона и мята",
        price: '900.000',
        previewImage: image1,
        fullImage: image1,
        description: "Лимона и мята — освежающий цитрусовый вкус с прохладной мятной ноткой.",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 200, price: '1.400.000' }
        ]
    },{
        id: 2,
        name: "BAR",
        taste: "Барбарисовая конфета",
        price: '900.000',
        previewImage: image2,
        fullImage: image2,
        description: "Барбарисовая конфета — сладкий вкус барбариса с лёгкой кислинкой."
    },{
        id: 3,
        name: "HEALTHY",
        taste: "Лимон + имбирь",
        price: '900.000',
        previewImage: image3,
        fullImage: image3,
        description: "Лимон + имбирь — бодрящий лимонный вкус с пряной имбирной остротой."
    },{
        id: 4,
        name: "TURBO",
        taste: "Арбузно-дынная жвачка",
        price: '900.000',
        previewImage: image4,
        fullImage: image4,
        description: "Арбузно-дынная жвачка — сладкий микс арбуза и дыни с жвачкой."
    },
];

export default huligan;