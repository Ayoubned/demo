
// Reservation View
class ReservationView {
    static displayReservations(reservations) {
        $('#productContainer1').html(''); // Clear the container
        reservations.forEach(reservation => {
            if (sessionStorage.userId == reservation.userId) {
                ReservationService.fetchEquipmentDetails(reservation.equipmentId).done(Equipment => {
                    $('#productContainer1').append(this.createProductCard(Equipment, reservation.id));
                });
            }
        });
    }

    static createProductCard(Equipment, reservationId) {
        return '<div class="col-md-3">' +
            '<div class="card" id="' + Equipment.id + '">' +
            '<img class="card-img-top" src="data:image/jpeg;base64,' + Equipment.photo + '" alt="' + Equipment.name + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + Equipment.name + '</h5>' +
            '<p class="card-text">' + Equipment.description + '</p>' +
            '<p class="card-text">Lender: ' + Equipment.lender + '</p>' +
            '<p class="card-text">Rating: ' + Equipment.rating + '</p>' +
            '<a href="#" class="btn btn-danger" onclick="ReservationController.cancelReservation(' + reservationId+','+Equipment.id + ')">Cancel reservation</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
}
