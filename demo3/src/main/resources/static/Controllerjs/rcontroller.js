
// Reservation Controller
class ReservationController {
    static init() {
        ReservationService.fetchReservations().done(reservations => {
            ReservationView.displayReservations(reservations);
        });
    }

    static cancelReservation(reservationId,equipmentId) {
        ReservationService.cancelReservation(reservationId).done(response => {
            alert('Reservation cancelled successfully');
            this.init(); // Refresh the reservations list
            sessionStorage.removeItem(equipmentId.toString());
        }).fail(() => {
            alert('Failed to cancel the reservation');
        });
    }
}

$(document).ready(function() {
    ReservationController.init();
});
