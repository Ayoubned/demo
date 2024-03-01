class EventController {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service;
        this.view.bindJoinEvent(this.handleJoinEvent.bind(this));
        this.view.bindDeclineEvent(this.handleDeclineEvent.bind(this));
        this.init();
    }

    async init() {
        try {
            const events = await this.service.fetchEvents();
            this.view.renderEvents(events);
        } catch (error) {
            this.view.showAlert(error.message);
        }
    }

    async handleJoinEvent(eventId) {
        const userId = sessionStorage.getItem("userId");
        try {
            await this.service.joinEvent(eventId, userId);
            this.view.showAlert('Joined event successfully');
        } catch (error) {
            this.view.showAlert(error.message);
        }
    }

    async handleDeclineEvent(eventId) {
        const userId = sessionStorage.getItem("userId");
        try {
            await this.service.declineEvent(eventId, userId);
            this.view.showAlert('Declined event successfully');
        } catch (error) {
            this.view.showAlert(error.message);
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const model = new EventModel();
    const view = new EventView();
    const service = new EventService();
    new EventController(model, view, service);
});