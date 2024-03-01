class EventView {
    constructor() {
        this.eventsTableBody = document.getElementById("eventsTableBody");
    }

    renderEvents(events) {
        let eventsHtml = events.map(event => `
            <tr>
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.time}</td>
                <td>${event.location}</td>
                <td>
                    <button type="button" class="btn btn-success join-event" data-eventid="${event.id}">Join</button>
                    <button type="button" class="btn btn-danger decline-event" data-eventid="${event.id}">Decline</button>
                </td>
            </tr>
        `).join("");
        this.eventsTableBody.innerHTML = eventsHtml;
    }

    bindJoinEvent(handler) {
        this.eventsTableBody.addEventListener('click', event => {
            if (event.target.classList.contains('join-event')) {
                const id = event.target.getAttribute('data-eventid');
                handler(id);
            }
        });
    }

    bindDeclineEvent(handler) {
        this.eventsTableBody.addEventListener('click', event => {
            if (event.target.classList.contains('decline-event')) {
                const id = event.target.getAttribute('data-eventid');
                handler(id);
            }
        });
    }

    showAlert(message) {
        alert(message);
    }
}
