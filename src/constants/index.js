import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";

  import image1 from '../../public/assets/images/latest_products/store-card1.jpg';
import image2 from '../../public/assets/images/latest_products/store-card2.jpg';
import image3 from '../../public/assets/images/latest_products/store-card3.jpg';
import image4 from '../../public/assets/images/latest_products/store-card4.jpg';
import image5 from '../../public/assets/images/latest_products/store-card5.jpg';
import image6 from '../../public/assets/images/latest_products/store-card6.jpg';
import image7 from '../../public/assets/images/latest_products/store-card7.jpg';
import image8 from '../../public/assets/images/latest_products/store-card8.jpg';
import image9 from '../../public/assets/images/latest_products/store-card9.jpg';
import image10 from '../../public/assets/images/latest_products/store-card10.jpg';
import image11 from '../../public/assets/images/latest_products/store-card11.jpg';


export const cards = [
  { id: 1, title: 'Item 1', description: 'Thinpossible', price: '$100', image: image1 },
  { id: 2, title: 'Item 2', description: 'Titanium', price: '$100', image: image2 },
  { id: 3, title: 'Item 3', description: 'Fresh Air', price: '$100', image: image3 },
  { id: 4, title: 'Item 4', description: 'Short description 4', price: '$100', image: image4 },
  { id: 5, title: 'Item 5', description: 'Short description 2', price: '$100', image: image5 },
  { id: 6, title: 'Item 6', description: 'Short description 2', price: '$100', image: image6 },
  { id: 7, title: 'Item 7', description: 'Short description 2', price: '$100', image: image7 },
  { id: 8, title: 'Item 8', description: 'Short description 2', price: '$100', image: image8 },
  { id: 9, title: 'Item 9', description: 'Short description 2', price: '$100', image: image9 },
  { id: 10, title: 'Item 10', description: 'Short description 2', price: '$100', image: image10 },
  { id: 11, title: 'Item 11', description: 'Short description 2', price: '$100', image: image11 },
 
  // Add more cards as needed
];
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];