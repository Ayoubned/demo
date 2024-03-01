class SignupService {
    signup(formData) {
        return fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to sign up');
            }
            return response.text();
        });
    }
}
