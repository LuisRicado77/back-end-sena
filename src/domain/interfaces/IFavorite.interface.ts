export interface IFavorite{
    idFavorite:string,
    image: string,
    titleProperty: string,
    price?:number,
    priceRented?:number
    
}

export interface IFavoriteCreate extends Omit<IFavorite,'idFavorite'>{}