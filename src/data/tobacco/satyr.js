import image1 from "../../img/satyr/ananas.jpeg";
import image2 from "../../img/satyr/angels.png";
import image3 from "../../img/satyr/bom_byao.png";
import image4 from "../../img/satyr/burley.png";
import image5 from "../../img/satyr/dedushka.png";
import image6 from "../../img/satyr/energy.png";
import image7 from "../../img/satyr/gogo.png";
import image8 from "../../img/satyr/good_lemon.png";
import image9 from "../../img/satyr/grap.png";
import image10 from "../../img/satyr/jager.png";
import image11 from "../../img/satyr/lastochka.png";
import image12 from "../../img/satyr/nezhnost.png";
import image13 from "../../img/satyr/queen.png";
import image14 from "../../img/satyr/tochkag.png";
import image15 from "../../img/satyr/turbo.jpeg";

const satyr = [
    {
        id: 1,
        name: "Ananas",
        taste: "Ананас",
        
        previewImage: image1,
        fullImage: image1,
        description: "Сочный тропический вкус с яркой сладкой кислинкой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 2,
        name: "Angels tits",
        taste: "Коктейльная вишня",
        
        previewImage: image2,
        fullImage: image2,
        description: "Сладкий вишнёвый вкус с лёгкой коктейльной ноткой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 3,
        name: "Bom Byao",
        taste: "Виноградная газировка",
        
        previewImage: image3,
        fullImage: image3,
        description: "Сладкий вкус виноградной газировки с лёгкой свежестью",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 4,
        name: "Burley cointreau",
        taste: "Берли на цитрусах",
        
        previewImage: image4,
        fullImage: image4,
        description: "Табачный вкус с яркими цитрусовыми нотками",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 5,
        name: "Dedushka",
        taste: "Лесная земляника",
        
        previewImage: image5,
        fullImage: image5,
        description: "Нежный ягодный вкус с лёгкой лесной сладостью",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 6,
        name: "Energy",
        taste: "Энергетик",
        
        previewImage: image6,
        fullImage: image6,
        description: "Яркий вкус энергетика с бодрящей сладостью",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 7,
        name: "GO! GO!",
        taste: "Ананас, малина",
        
        previewImage: image7,
        fullImage: image7,
        description: "Фруктовый микс ананаса и малины с кислинкой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 8,
        name: "Good Lemon",
        taste: "Лимон",
        
        previewImage: image8,
        fullImage: image8,
        description: "Яркий лимонный вкус с освежающей кислинкой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 9,
        name: "Jah Grapefruit",
        taste: "Грейпфрут",
        
        previewImage: image9,
        fullImage: image9,
        description: "Освежающий цитрус с лёгкой горькой ноткой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 10,
        name: "Duebreck jagermeister",
        taste: "Ориентал на травах",
        
        previewImage: image10,
        fullImage: image10,
        description: "Пряный травяной вкус с насыщенными восточными нотами",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 11,
        name: "Lastochka",
        taste: "Сирень, крыжовник",
        
        previewImage: image11,
        fullImage: image11,
        description: "Ягодно-цветочный вкус с лёгкой свежей кислинкой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 12,
        name: "Нежность",
        taste: "Обвивающая любовь",
        
        previewImage: image12,
        fullImage: image12,
        description: "Мягкий сладкий вкус с нежным обволакивающим ароматом",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 13,
        name: "Queen Anne's Revenge",
        taste: "Индийский берли",
        
        previewImage: image13,
        fullImage: image13,
        description: "Насыщенный табачный вкус с пряными древесными нотами",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 14,
        name: "Точка G",
        taste: "Клубничный малибу",
        
        previewImage: image14,
        fullImage: image14,
        description: "Сладкий клубничный вкус с кокосовой коктейльной ноткой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },{
        id: 15,
        name: "Turbo",
        taste: "Апельсиновая шипучка",
        
        previewImage: image15,
        fullImage: image15,
        description: "Газированный апельсиновый вкус с яркой сладкой кислинкой",

        variants: [
            { weight: 30, price: '250.000' },
            { weight: 100, price: '750.000' },
            { weight: 250, price: '1.400.000' }
        ]
    },
];

export default satyr;