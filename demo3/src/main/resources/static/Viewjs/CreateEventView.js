class EventView {
    constructor() {
        this.eventForm = $('#eventForm');
        this.eventName = $('#eventName');
        this.eventDate = $('#eventDate');
        this.eventTime = $('#eventTime');
        this.eventLocation = $('#eventLocation');
        this.inviteForm = $('#inviteForm');
    }

    getFormData() {
        return {
            name: this.eventName.val(),
            date: this.eventDate.val(),
            time: this.eventTime.val(),
            location: this.eventLocation.val()
        };
    }

    bindSaveEvent(handler) {
        this.eventForm.on('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }

    bindSendInvitations(handler) {
        this.inviteForm.on('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }

    showAlert(message, type = "success") {
        // Type can be "success" or "error"
        alert(`${type.toUpperCase()}: ${message}`);
    }

    clearForm() {
        this.eventName.val('');
        this.eventDate.val('');
        this.eventTime.val('');
        this.eventLocation.val('');
        // Reset other form elements as needed
    }
}
