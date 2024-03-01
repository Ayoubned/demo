class EventService {
    async createEvent(eventData) {
        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData),
            });
            if (!response.ok) {
                throw new Error('Error creating event');
            }
            return await response.json(); // Assuming the server responds with the created event data
        } catch (error) {
            console.error('Error creating event:', error);
            throw error;
        }
    }
}
