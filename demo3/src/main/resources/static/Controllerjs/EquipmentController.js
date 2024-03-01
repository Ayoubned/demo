class EquipmentController {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service;
        
        this.view.bindAddEquipment(this.handleAddEquipment.bind(this));
    }

handleAddEquipment() {
        const formData = this.view.getFormData();
        const equipmentModel = new EquipmentModel();
        equipmentModel.setData(formData.name, sessionStorage.username, formData.rating, formData.description);
        this.service.addEquipment(equipmentModel,formData.photo )
                .then(() => this.view.redirectToLoginPage())
                .catch(error => this.view.displayError(error));
        
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    const view = new EquipmentView();
    const service = new EquipmentService();
    const model = new EquipmentModel();
    new EquipmentController(model, view, service);
});
