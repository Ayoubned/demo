class EquipmentView {
    constructor() {
        this.nameInput = document.getElementById("name");
        this.ratingInput = document.getElementById("rating");
        this.descriptionInput = document.getElementById("description");
        this.photoInput = document.getElementById("photo");
        this.form = document.getElementById('editing');
    }

    getFormData() {
        return {
            name: this.nameInput.value,
            lender: sessionStorage.getItem("username"),
            rating: this.ratingInput.value,
            description: this.descriptionInput.value,
            photo: this.photoInput.files[0]
        };
    }

    bindEditEquipment(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            handler();
        });
    }
    showAlert(message) {
        alert(message);
    }
    redirectToLoginPage() {
        window.location.href = '/service1.html';
    }
    displayError(error) {
        console.error(error); // Can be replaced with more user-friendly error handling
    }
}
