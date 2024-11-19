import { ITrending } from "../interfaces/ITrending";
import { images, icons } from "../imports/images";
import { IItem } from "../interfaces/IItem";
import { generateStyleNo } from "./baseFunctions";

export const dummyTrendingData: ITrending[] = [
    { key: '1', imageSrc: images.trending1, name: 'Winter Fashion' },
    { key: '2', imageSrc: images.trending2, name: 'Boots' },
    { key: '3', imageSrc: images.trending3, name: 'Night Out' },
    { key: '4', imageSrc: images.trending4, name: 'Holidays' },
    { key: '5', imageSrc: images.trending5, name: 'Outerwear' },
    { key: '6', imageSrc: images.trending6, name: 'White Dresses' },
    { key: '7', imageSrc: images.trending7, name: 'Sweaters' },
    { key: '8', imageSrc: images.trending8, name: 'Party' },
];

export const dummyTrendingHashtagData: ITrending[] = [
    { key: '1', imageSrc: "", name: '#Thanksgiving' },
    { key: '2', imageSrc: "", name: '#NewYears' },
    { key: '3', imageSrc: "", name: '#Knitted' },
    { key: '4', imageSrc: "", name: '#Pajamas' },
    { key: '5', imageSrc: "", name: '#WFH' },
    { key: '6', imageSrc: "", name: '#FallFashion' },
];

export const dummyRecenltyBoughtData: IItem[] = [
    { id: 1, imageSrc: images.recentlyBought1, styleNo: generateStyleNo(), name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit', origPrice: 38, price: null, quantity: 0 },
    { id: 2, imageSrc: images.recentlyBought2, styleNo: generateStyleNo(), name: 'Chevron Flap Crossbody Bag', origPrice: 7.34, price: 5.77, quantity: 1 },
    { id: 3, imageSrc: images.recentlyBought3, styleNo: generateStyleNo(), name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf', origPrice: 39, price: 29, quantity: 0 },
    { id: 4, imageSrc: images.recentlyBought4, styleNo: generateStyleNo(), name: 'Diamante Puff Sleeve Dress - Black', origPrice: 45.99, price: null, quantity: 0 },
    { id: 5, imageSrc: images.recentlyBought5, styleNo: generateStyleNo(), name: 'Banneth Open Front Formal Dress in Black', origPrice: 99.05, price: 69, quantity: 0 },
];

export const dummyInspoData: IItem[] = [
    { id: 1, imageSrc: images.recentlyBought1, styleNo: generateStyleNo(), name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit', origPrice: 38, price: null, quantity: 0 },
    { id: 2, imageSrc: images.recentlyBought2, styleNo: generateStyleNo(), name: 'Chevron Flap Crossbody Bag', origPrice: 7.34, price: 5.77, quantity: 1 },
    { id: 3, imageSrc: images.recentlyBought3, styleNo: generateStyleNo(), name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf', origPrice: 39, price: 29, quantity: 0 },
    { id: 4, imageSrc: images.recentlyBought4, styleNo: generateStyleNo(), name: 'Diamante Puff Sleeve Dress - Black', origPrice: 45.99, price: null, quantity: 0 },
    { id: 5, imageSrc: images.recentlyBought5, styleNo: generateStyleNo(), name: 'Banneth Open Front Formal Dress in Black', origPrice: 99.05, price: 69, quantity: 0 },
];


export const dummyContactUSData: any[] = [
    { key: '1', imageSrc: icons.facebook },
    { key: '2', imageSrc: icons.instagram },
    { key: '3', imageSrc: icons.twitter },
    { key: '4', imageSrc: icons.youtube },
    { key: '5', imageSrc: icons.pinterest },
    { key: '6', imageSrc: icons.tiktok },
];

export const dummyPaymentData: any[] = [
    { key: '1', imageSrc: images.visa },
    { key: '2', imageSrc: images.mastercard },
    { key: '3', imageSrc: images.maestro },
    { key: '4', imageSrc: images.americanExpress },
    { key: '5', imageSrc: images.paypal }
];

