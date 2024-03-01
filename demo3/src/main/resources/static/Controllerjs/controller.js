
// controller.js
$(document).ready(function() {
    Controller.loadEquipments();
    document.getElementById("nameFilter").addEventListener("input", Controller.filterEquipments);
});

class Controller {
	static redirectToage() {
        window.location.href = 'editequipment.html';
    }
    static loadEquipments() {
        EquipmentService.getEquipments().then(Equipments => {
            Equipments.forEach(Equipment => {
                $('#productContainer').append(View.createProductCard(Equipment));
            });
        });
    }

    static makeReservation(equipmentId) {
        if (sessionStorage.getItem("isLoggedIn") == null) {
            window.location.href = '/login.html';
        } else {
            var userId = sessionStorage.getItem("userId");
            var data = {
                userId: userId,
                equipmentId: equipmentId
            };
            EquipmentService.makeReservation(data).then(response => {
                alert('Reservation made successfully');
                sessionStorage.setItem(equipmentId, equipmentId);
                $('#equipment-' + equipmentId).remove();
            }).catch(() => {
                alert('Failed to make a reservation');
            });
        }
    }
    static deleteEquipmentId(equipmentId) {
            EquipmentService.deleteEquipment(equipmentId).then(response => {
                alert('Equipment Deleted successfully');
                $('#equipment-' + equipmentId).remove();
            }).catch(() => {
                alert('Failed to Delete');
            });
        }
    

    static filterEquipments() {
        const searchValue = this.value.toLowerCase();
        const table = document.getElementById("productContainer");
        const rows = table.getElementsByTagName("div");

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName("h5");
            let rowVisible = false;

            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell.textContent.toLowerCase().includes(searchValue)) {
                    rowVisible = true;
                    break;
                }
            }

            row.style.display = rowVisible ? "" : "none";
        }
    }
}
