"use strict";
class Property {
    constructor(idProperty, status, rentalPrice, squareMeters, numberBathrooms, zipCode, numberRooms, typeProperty, address, city, state, country, picture1, picture2, picture3, picture4, picture5) {
        this.idProperty = idProperty;
        this.typeProperty = typeProperty;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
        this.numberBathrooms = numberBathrooms;
        this.numberRooms = numberRooms;
        this.squareMeters = squareMeters;
        this.rentalPrice = rentalPrice;
        this.status = status;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.picture3 = picture3;
        this.picture4 = picture4;
        this.picture5 = picture5;
    }
}
