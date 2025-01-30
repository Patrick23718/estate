import { Piece } from "../enums/piece"

export interface ICard {
    id: string,
    images: string[],
    title: string,
    location: string,
    price: number,
    pieces: {
        quantity: number
        piece: Piece
    }[]
    superficie: number
}
