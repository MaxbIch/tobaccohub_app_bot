import mh_alova from "../../img/musthave/mh_alova.jpeg";
import mh_baikal from "../../img/musthave/mh_baikal.jpeg";
import mh_blackCurrant from "../../img/musthave/mh_blackCurrant.jpeg";
import mh_candyCow from "../../img/musthave/mh_candyCow.jpeg";
import mh_cheryJuice from "../../img/musthave/mh_cheryJuice.jpeg";
import mh_cookie from "../../img/musthave/mh_cookie.jpeg";
import mh_jumango from "../../img/musthave/mh_jumango.jpeg";
import mh_mandarin from "../../img/musthave/mh_mandarin.jpeg";
import mh_manggoSling from "../../img/musthave/mh_manggoSling.jpeg";
import mh_mapplePecan from "../../img/musthave/mh_mapplePecan.jpeg";
import mh_marula from "../../img/musthave/mh_marula.jpeg";
import mh_milkyRice from "../../img/musthave/mh_milkyRice.jpeg";
import mh_orangeTeam from "../../img/musthave/mh_orangeTeam.jpeg";
import mh_peach from "../../img/musthave/mh_peach.jpeg";
import mh_pineaooleRings from "../../img/musthave/mh_pineaooleRings.jpeg";
import mh_sourTropic from "../../img/musthave/mh_sourTropic.jpeg";
import mh_strawberryLychee from "../../img/musthave/mh_strawberryLychee.jpeg";
import mh_tipsy from "../../img/musthave/mh_tipsy.jpeg";

const mustHave = [
    {
        id: 1,
        name: "Alova",
        taste: "Алоэ и розовая гуава",
        
        previewImage: mh_alova,
        description: "Алоэ и розовая гуава — свежий травяной вкус с нежной фруктовой сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 2,
        name: "Baikal",
        
        previewImage: mh_baikal,
        taste: "Лесные травы и хвоя",
        description: "Лесные травы и хвоя — насыщенный хвойный аромат с прохладной травяной ноткой.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 3,
        name: "Black currant",
        
        previewImage: mh_blackCurrant,
        taste: "Черная смородина",
        description: "Черная смородина — глубокий ягодный вкус с яркой кислинкой.\n",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 4,
        name: "Candy cow",
        
        previewImage: mh_candyCow,
        taste: "Карамель и сгущенное молоко",
        description: "Карамель и сгущенное молоко — сладкий сливочный вкус с карамельной мягкостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 5,
        name: "Cherry juice",
        
        previewImage: mh_cheryJuice,
        taste: "Вишнёвый сок",
        description: "Вишнёвый сок — сочный ягодный вкус с лёгкой кислинкой.\n",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 6,
        name: "Cookie",
        
        previewImage: mh_cookie,
        taste: "Печенье",
        description: "Печенье — тёплый сладкий вкус свежей выпечки.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 7,
        name: "Jumango",
        
        previewImage: mh_jumango,
        taste: "Манго, малина, мёд",
        description: "Манго, малина, мёд — сладкий фруктовый микс с медовой мягкостью.\n",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 8,
        name: "Mandarin",
        
        previewImage: mh_mandarin,
        taste: "Мандарин",
        description: "Мандарин — сочный цитрусовый вкус с лёгкой сладостью.\n",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 9,
        name: "Mango sling",
        
        previewImage: mh_manggoSling,
        taste: "Напиток манго слинг",
        description: "Напиток манго слинг — тропический коктейль с яркой фруктовой сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 10,
        name: "Maple pecan",
        
        previewImage: mh_mapplePecan,
        taste: "Выпечка и клюквенный сироп",
        description: "Выпечка и клюквенный сироп — сладкий десертный вкус с кислинкой ягод.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 11,
        name: "Marula",
        
        previewImage: mh_marula,
        taste: "Фрукт марула",
        description: "Фрукт марула — экзотический мягкий вкус с кремовой сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 12,
        name: "Milky rice",
        
        previewImage: mh_milkyRice,
        taste: "Молочная каша",
        description: "Молочная каша — нежный сливочный вкус с лёгкой сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 13,
        name: "Orange Team",
        
        previewImage: mh_orangeTeam,
        taste: "Мандарин + апельсин",
        description: "Мандарин апельсин — яркий цитрусовый микс с освежающей сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 14,
        name: "Sweet peach",
        
        previewImage: mh_peach,
        taste: "Сладкий персик",
        description: "Сладкий персик — мягкий фруктовый вкус с насыщенной сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 15,
        name: "Pineapple rings",
        
        previewImage: mh_pineaooleRings,
        taste: "Ананасовые колечки",
        description: "Ананасовые колечки — сочный тропический вкус с карамельной ноткой.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 16,
        name: "Sour tropic",
        
        previewImage: mh_sourTropic,
        taste: "Тропические фрукты",
        description: "Тропические фрукты — яркий сладко-кислый микс экзотических фруктов.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 17,
        name: "Strawberry-Lychee",
        
        previewImage: mh_strawberryLychee,
        taste: "Земляника и личи",
        description: "Земляника и личи — нежный ягодный вкус с цветочной сладостью.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    },{
        id: 18,
        name: "Tipsy",
        
        previewImage: mh_tipsy,
        taste: "Ягодный коктейль",
        description: "Ягодный коктейль — насыщенный микс ягод с лёгкой кислинкой.",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 125, price: '600.000' },
            { weight: 250, price: '1.100.000' },
        ]
    }
];

export default mustHave;