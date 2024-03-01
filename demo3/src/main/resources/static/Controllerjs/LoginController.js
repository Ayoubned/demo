class LoginController {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service;

        this.view.bindLogin(this.handleLogin.bind(this));
    }

    handleLogin() {
        const credentials = this.view.getCredentials();
        this.model.setUsername(credentials.username);
        this.model.setPassword(credentials.password);

        if (this.model.validateCredentials()) {
            this.service.login(credentials)
                .then(data => {
                    if (data.message === "Login successful") {
                        sessionStorage.setItem('username', credentials.username);
                        sessionStorage.setItem('userId', data.userId);
                        sessionStorage.setItem('isLoggedIn', true);
                        this.view.redirectToHomePage();
                    } else {
                        this.view.showAlert('Login failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.view.reloadPage();
                    this.view.showAlert('Login failed');
                });
        } else {
            this.view.showAlert('Please enter both username and password');
        }
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
    const model = new LoginModel();
    const view = new LoginView();
    const service = new LoginService();
    new LoginController(model, view, service); // You don't need to assign this to a variable
});

