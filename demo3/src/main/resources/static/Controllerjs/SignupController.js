class SignupController {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service;

        this.view.bindSignup(this.handleSignup.bind(this));
    }

    handleSignup() {
        const formData = this.view.getFormData();
        this.model.setData(formData.username, formData.password, formData.email);
        this.service.signup(formData)
                .then(() => this.view.redirectToLoginPage())
                .catch(error => this.view.displayError(error));
        
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const model = new SignupModel();
    const view = new SignupView();
    const service = new SignupService();
    new SignupController(model, view, service);
});
