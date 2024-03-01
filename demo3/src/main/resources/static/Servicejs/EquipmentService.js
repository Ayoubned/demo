class EquipmentService {
    async addEquipment(equipment, photo) {
        var data = new FormData();
        data.append("equipment", JSON.stringify(equipment));
        data.append("photo", photo);

        try {
            const response = await fetch("api/Equipment", {
                method: 'POST', body: data
            });

            if (!response.ok) {
                throw new Error("Server responded with a non-OK status: " + response.status);
            }

            EquipmentView.showAlert("Equipment added");
        } catch (error) {
            console.log("Error adding equipment: " + error);
        }
    }
    async editEquipment(id,equipment,photo) {
        var data = new FormData();
        data.append("equipment", JSON.stringify(equipment));
        data.append("photo", photo);
        for (let [key, value] of data.entries()) {
    	console.log(key, value);
		}
        try {
            const response = await fetch("api/Equipment/"+id, {
                method: 'PUT', body: data
            });
            

            if (!response.ok) {
                throw new Error("Server responded with a non-OK status: " + response.status);
            }

            EquipmentView.showAlert("Equipment edited");
        } catch (error) {
            console.log("Error editting equipment: " + error);
        }
    }
}
