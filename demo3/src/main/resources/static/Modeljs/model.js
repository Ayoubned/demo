
// model.js
// Example class definitions for Equipments and Reservations

class Equipment {
    constructor(id, name, description, lender, rating, photo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.lender = lender;
        this.rating = rating;
        this.photo = photo;
    }
}

class Reservation {
    constructor(userId, equipmentId) {
        this.userId = userId;
        this.equipmentId = equipmentId;
    }
}
