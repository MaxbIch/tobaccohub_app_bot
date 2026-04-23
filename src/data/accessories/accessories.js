import image1 from "../../img/accessories/d-killer.png";
import image2 from "../../img/accessories/image2.png";

const accessories = [
    {
        id: "1",
        name: "Чаша D-Killer",
        price: '550.000',
        previewImage: image1,
        description: "D—KILLER отлично подходит и для домашних покуров. Оптимальный расход — на одну забивку нужно примерно 18 г табака DARKSIDE CORE."
    }, {
        id: "2",
        name: "Угли 25мм",
        previewImage: image2,
        description: "",
        taste: "Узнать подробнее",
        variants: [
            { label: "1шт", price: "5.000" },
            { label: "20шт", price: "50.000" },
            { label: "1кг", price: "100.000" }
        ]
    }
];

export default accessories;