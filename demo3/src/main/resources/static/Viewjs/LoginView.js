class LoginView {
    constructor() {
        this.loginForm = document.getElementById('loginForm');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
    }

    getCredentials() {
        return {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        };
    }

    bindLogin(handler) {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault();
            handler();
        });
    }

    showAlert(message) {
        alert(message);
    }

    redirectToHomePage() {
        window.location.href = '/index.html';
    }

    reloadPage() {
        location.reload();
    }
}
