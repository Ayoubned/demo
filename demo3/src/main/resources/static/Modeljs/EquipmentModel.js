class EquipmentModel {
    constructor() {
        this.name = "";
        this.lender = "";
        this.rating = 0;
        this.description = "";
    }
        setData(name, lender, rating, description) {
        this.name = name;
        this.lender = lender;
        this.rating = rating;
        this.description = description;
    }
}
