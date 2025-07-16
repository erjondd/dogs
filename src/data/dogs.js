import breed1 from "../../public/images/dog1.png";
import dog2 from "../../public/images/dog2.png";
import dog3 from "../../public/images/dog3.png";
import dog4 from "../../public/images/dog4.png";
import dog5 from "../../public/images/dog5.png";
import dog6 from "../../public/images/dog6.png";
import dog7 from "../../public/images/dog7.png";
import dog8 from "../../public/images/dog8.png";
import dog9 from "../../public/images/dog9.png";
import dog10 from "../../public/images/dog10.png";
import dog11 from "../../public/images/dog11.png";
import breed2 from "../../public/images/breed2.png";
import breed3 from "../../public/images/breed3.png";
import breed4 from "../../public/images/breed4.png";
import breed5 from "../../public/images/breed5.png";
import breed6 from "../../public/images/breed6.jpg";
import breed7 from "../../public/images/breed7.png";
import breed8 from "../../public/images/breed8.png";
import breed9 from "../../public/images/breed9.png";

const galleryImages = [dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, dog10, dog11];

const dogs = [
    {
        id: 1,
        image: breed1,
        gallery: galleryImages,
        breed: "Bulldog",
        gender: "Female",
        age: "2 months",
        price: "3.000,00 €",
        name: "Black & Rust",
        size: "Large",
        color: "Black & Rust",
        vaccinated: true,
        description:
            "Black & Rust is an energetic Bulldog from Andreades Kennel, known for her unique Merle pattern and loving nature. She enjoys swimming and is very social with both people and pets.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Berlin, Germany",
        publishedDate: "2023-10-01",
        SKU: "#1000078",
    },
    {
        id: 2,
        image: breed2,
        gallery: galleryImages,
        breed: "Doberman",
        gender: "Male",
        age: "3 months",
        price: "2.500,00 €",
        name: "Zeus",
        size: "Large",
        color: "Black & Tan",
        vaccinated: true,
        description:
            "Zeus is a brave and loyal Doberman with great protective instincts. He’s highly intelligent and responds well to training, making him a great guard dog and companion.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Munich, Germany",
        publishedDate: "2023-09-15",
        SKU: "#1000079",
    },
    {
        id: 3,
        image: breed3,
        gallery: galleryImages,
        breed: "Poodle",
        gender: "Female",
        age: "4 months",
        price: "2.800,00 €",
        name: "Luna",
        size: "Medium",
        color: "White",
        vaccinated: true,
        description:
            "Luna is a graceful Poodle who loves attention and learning new tricks. She’s hypoallergenic and ideal for families with kids.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Hamburg, Germany",
        publishedDate: "2023-09-05",
        SKU: "#1000080",
    },
    {
        id: 4,
        image: breed4,
        gallery: galleryImages,
        breed: "Golden Retriever",
        gender: "Male",
        age: "5 months",
        price: "2.900,00 €",
        name: "Max",
        size: "Large",
        color: "Golden",
        vaccinated: true,
        description:
            "Max is a friendly Golden Retriever who enjoys long walks and playing fetch. He’s calm, very obedient, and loves children.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Frankfurt, Germany",
        publishedDate: "2023-08-25",
        SKU: "#1000081",
    },
    {
        id: 5,
        image: breed5,
        gallery: galleryImages,
        breed: "Shih Tzu",
        gender: "Female",
        age: "3.5 months",
        price: "2.600,00 €",
        name: "Bella",
        size: "Small",
        color: "White & Brown",
        vaccinated: true,
        description:
            "Bella is a sweet Shih Tzu with a loving personality. She prefers indoor cuddles and makes a perfect lap dog.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Stuttgart, Germany",
        publishedDate: "2023-07-30",
        SKU: "#1000082",
    },
    {
        id: 6,
        image: breed6,
        gallery: galleryImages,
        breed: "French Bulldog",
        gender: "Male",
        age: "6 months",
        price: "3.200,00 €",
        name: "Rocky",
        size: "Small",
        color: "Brindle",
        vaccinated: true,
        description:
            "Rocky is a curious and playful French Bulldog. He’s compact, low-energy, and perfect for apartments.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Düsseldorf, Germany",
        publishedDate: "2023-06-20",
        SKU: "#1000083",
    },
    {
        id: 7,
        image: breed7,
        gallery: galleryImages,
        breed: "Beagle",
        gender: "Female",
        age: "4 months",
        price: "2.400,00 €",
        name: "Daisy",
        size: "Medium",
        color: "Tri-color",
        vaccinated: true,
        description:
            "Daisy is a lively Beagle that loves the outdoors. She is gentle with children and has a great nose for fun.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Cologne, Germany",
        publishedDate: "2023-06-10",
        SKU: "#1000084",
    },
    {
        id: 8,
        image: breed8,
        gallery: galleryImages,
        breed: "Labrador",
        gender: "Male",
        age: "5 months",
        price: "2.700,00 €",
        name: "Charlie",
        size: "Large",
        color: "Chocolate",
        vaccinated: true,
        description:
            "Charlie is a cheerful Labrador with boundless energy. He’s affectionate, highly trainable, and loves the water.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Leipzig, Germany",
        publishedDate: "2023-05-15",
        SKU: "#1000085",
    },
    {
        id: 9,
        image: breed9,
        gallery: galleryImages,
        breed: "Cocker Spaniel",
        gender: "Female",
        age: "3 months",
        price: "2.500,00 €",
        name: "Coco",
        size: "Medium",
        color: "Black",
        vaccinated: true,
        description:
            "Coco is a gentle and affectionate Cocker Spaniel. She loves being pampered and is easy to train.",
        dewormed: true,
        cert: true,
        microchip: true,
        location: "Bremen, Germany",
        publishedDate: "2023-05-01",
        SKU: "#1000086",
    },
];

export default dogs;
