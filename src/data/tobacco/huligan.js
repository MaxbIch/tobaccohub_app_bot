import image1 from "../../img/huligan/old.png";
import image2 from "../../img/huligan/bar.png";
import image3 from "../../img/huligan/healthy.png";
import image4 from "../../img/huligan/turbo.png";

const huligan = [
    {
        id: 1,
        name: "OLD",
        taste: "Лимона и мята",
        
        previewImage: image1,
        fullImage: image1,
        description: "Лимона и мята — освежающий цитрусовый вкус с прохладной мятной ноткой.",

        variants: [
            { weight: 30, price: '220.000' },
            { weight: 100, price: '650.000' },
            { weight: 200, price: '1.200.000' }
        ]
    },{
        id: 2,
        name: "BAR",
        taste: "Барбарисовая конфета",
        
        previewImage: image2,
        fullImage: image2,
        description: "Барбарисовая конфета — сладкий вкус барбариса с лёгкой кислинкой.",

        variants: [
            { weight: 30, price: '220.000' },
            { weight: 100, price: '650.000' },
            { weight: 200, price: '1.200.000' }
        ]
    },{
        id: 3,
        name: "HEALTHY",
        taste: "Лимон + имбирь",
        
        previewImage: image3,
        fullImage: image3,
        description: "Лимон + имбирь — бодрящий лимонный вкус с пряной имбирной остротой.",
        variants: [
            { weight: 30, price: '220.000' },
            { weight: 100, price: '650.000' },
            { weight: 200, price: '1.200.000' }
        ]
    },{
        id: 4,
        name: "TURBO",
        taste: "Арбузно-дынная жвачка",
        previewImage: image4,
        fullImage: image4,
        description: "Арбузно-дынная жвачка — сладкий микс арбуза и дыни с жвачкой.",

        variants: [
            { weight: 30, price: '220.000' },
            { weight: 100, price: '650.000' },
            { weight: 200, price: '1.200.000' }
        ]
    },
];

export default huligan;