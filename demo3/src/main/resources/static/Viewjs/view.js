
// view.js
class View {
    static createProductCard(Equipment) {
		var dnone='d-none';
		var onC='onclick="Controller.makeReservation(' + Equipment.id + ')"';
		if(sessionStorage.getItem("username")==Equipment.lender){
			dnone='';
			onC='';
		};
		if(sessionStorage.getItem(Equipment.id.toString())==null){
        return '<div class="w3-panel w3-border w3-hover-border-red col-md-3"  id="equipment-' + Equipment.id + '">' +
            '<div class="card" '+onC+' id="' + Equipment.id + '">' +
            '<img class="card-img-top" src="data:image/jpeg;base64,' + Equipment.photo + '" alt="' + Equipment.name + '">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + Equipment.name + '</h5>' +
            '<p class="card-text">' + Equipment.description + '</p>' +
            '<p class="card-text">Lender: ' + Equipment.lender + '</p>' +
            '<p class="card-text">Rating: ' + Equipment.rating + '</p>' +
            '</div>' +
            '</div>' +
            '<button type="button" class="btn btn-success Edit '+dnone+'" onclick="sessionStorage.setItem(\'-1\', \''+Equipment.id+'\'); window.location.href=\'editequipment.html\';" >Edit</button>'+
            '<button type="button" class="btn btn-danger Cancel '+dnone+'" onclick="Controller.deleteEquipmentId(' + Equipment.id + ')">Delete</button>'+
            '</div>';
    }}
static hideElementByIdUsingVisibility(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.style.visibility = "hidden";
  } else {
    console.log("Element with ID '" + elementId + "' not found.");
  }
}
}
