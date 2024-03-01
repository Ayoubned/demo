class LoginService {
    login({ username, password }) {
        return fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json());
    }
}
