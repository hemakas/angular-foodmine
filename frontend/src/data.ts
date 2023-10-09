import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'vegitable pizza',
        price: 9,
        favorite: true,
        stars: 3,
        imageUrl: 'assets/veg-pizza.jpg',
        origins: ['India', 'asia'],
        cookTime: '40-30'
    },
    {
        id: '2',
        name: 'cheese pasta',
        price: 12,
        favorite: false,
        stars: 4,
        imageUrl: 'assets/cheese-pasta.jpg',
        origins: ['Germany', 'europe'],
        cookTime: '10-20'
    }
]