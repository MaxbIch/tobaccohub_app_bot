import image1 from "../../img/blackburn/bb_ananas.jpeg";
import image2 from "../../img/blackburn/bb_barb.jpeg";
import image3 from "../../img/blackburn/bb_lemon.jpeg";
import image4 from "../../img/blackburn/bb_rasp.jpeg";
import image5 from "../../img/blackburn/bb_yogurt.jpeg";

const blackburn = [
    {
        id: 1,
        name: "Ananas Shock",
        taste: "Ананасовый шок",
        price: '600.000',
        previewImage: image1,
        fullImage: image1,
        description: "",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 200, price: '1.100.000' }
        ]
    },{
        id: 2,
        name: "Barberry Shock",
        taste: "Кислый барбарис",
        price: '600.000',
        previewImage: image2,
        fullImage: image2,
        description: "",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 200, price: '1.100.000' }
        ]
    },{
        id: 3,
        name: "Lemon Shock",
        taste: "Кислый лимон",
        price: '600.000',
        previewImage: image3,
        fullImage: image3,
        description: "",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 200, price: '1.100.000' }
        ]
    },{
        id: 3,
        name: "Raspberry Shock",
        taste: "Кислая малина",
        price: '600.000',
        previewImage: image4,
        fullImage: image4,
        description: "",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 200, price: '1.100.000' }
        ]
    },{
        id: 5,
        name: "Epic Yogurt",
        taste: "Черничный йогурт",
        price: '600.000',
        previewImage: image5,
        fullImage: image5,
        description: "",

        variants: [
            { weight: 30, price: '200.000' },
            { weight: 200, price: '1.100.000' }
        ]
    }
];

export default blackburn;