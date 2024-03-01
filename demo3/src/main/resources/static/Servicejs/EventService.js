class EventService {
    async fetchEvents() {
        const response = await fetch('/api/events');
        if (!response.ok) {
            throw new Error('Error fetching events');
        }
        return response.json();
    }

    async joinEvent(eventId, userId) {
        const response = await fetch('/api/eventJoining', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, eventId })
        });
        if (!response.ok) {
            throw new Error('Error joining event');
        }
        return response.json();
    }
        async createEvent(event) {
        const response = await fetch('/api/eventJoining', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        });
        if (!response.ok) {
            throw new Error('Error joining event');
        }
        return response.json();
    }

    async declineEvent(eventId, userId) {
        const response = await fetch(`/api/eventJoining/delete?userId=${userId}&eventId=${eventId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Error declining event');
        }
        return response.json();
    }
}
