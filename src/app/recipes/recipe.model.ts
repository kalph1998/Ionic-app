export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
    description: string;
    price: number;
    rating: number;
}