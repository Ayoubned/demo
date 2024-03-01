class LoginModel {
    constructor() {
        this.username = '';
        this.password = '';
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    validateCredentials() {
        // Here, you could add more complex validation if needed
        return this.username.length > 0 && this.password.length > 0;
    }
}
