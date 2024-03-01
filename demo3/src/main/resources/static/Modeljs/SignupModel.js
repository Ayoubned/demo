class SignupModel {
    constructor() {
        this.username = '';
        this.password = '';
        this.email = '';
    }

    setData(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    validateData() {
        // Basic validation for example; can be expanded as needed
        return this.username.length > 0 && this.email.includes('@') && this.password.length >= 6;
    }
}
