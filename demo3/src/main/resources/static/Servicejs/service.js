
// service.js
class EquipmentService {
    static getEquipments() {
        return $.ajax({
            url: '/api/Equipment',
            type: 'GET'
        });
    }

    static makeReservation(data) {
        return $.ajax({
            url: '/api/reservations',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }
        static deleteEquipment(id) {
        return $.ajax({
            url: '/api/Equipment/'+id,
            type: 'DELETE',
            contentType: 'application/json',
        });
    }
}
