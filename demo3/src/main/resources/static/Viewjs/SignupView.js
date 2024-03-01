class SignupView {
    constructor() {
        this.form = document.getElementById('signup-form');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('signupPassword');
        this.emailInput = document.getElementById('signupEmail');
    }

    getFormData() {
        return {
            username: this.usernameInput.value,
            password: this.passwordInput.value,
            email: this.emailInput.value
        };
    }

    bindSignup(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            handler();
        });
    }

    redirectToLoginPage() {
        window.location.href = '/login.html';
    }

    displayError(error) {
        console.error(error); // Can be replaced with more user-friendly error handling
    }
}
