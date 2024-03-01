
// Reservation Service
class ReservationService {
    static fetchReservations() {
        return $.ajax({
            url: '/api/reservations',
            type: 'GET'
        });
    }

    static fetchEquipmentDetails(equipmentId) {
        return $.ajax({
            url: '/api/Equipment/' + equipmentId,
            type: 'GET'
        });
    }

    static cancelReservation(reservationId) {
        return $.ajax({
            url: '/api/reservations/' + reservationId,
            type: 'DELETE'
        });
    }
}
