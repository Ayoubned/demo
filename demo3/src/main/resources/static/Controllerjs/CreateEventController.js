class EventController {
    constructor(view) {
        this.view = view;
        this.view.bindSaveEvent(this.handleSaveEvent.bind(this));
        this.view.bindSendInvitations(this.handleSendInvitations.bind(this));
    }

handleSaveEvent() {
    const eventData = this.view.getFormData();
    this.service.createEvent(eventData)
        .then(() => {
            this.view.showAlert('Event created successfully!');
            this.view.clearForm();
            // Redirect or update UI as needed
        })
        .catch(() => {
            this.view.showAlert('Error creating event', 'error');
        });
}
    handleSendInvitations() {
        // Implement sending invitations logic
        this.view.showAlert('Invitations sent successfully!');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const view = new EventView();
    new EventController(view);
});
