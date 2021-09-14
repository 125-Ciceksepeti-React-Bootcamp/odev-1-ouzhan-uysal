/* HTTP Request / Fetch API */



/* Search Bar Actions */
$(document).ready(function () {
    $("#toSearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".grid-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});


/* Modals */
let modal = document.getElementById("modal");
let openModal = document.getElementById("submit-btn");
let closeModal = document.getElementsByClassName("close-modal")[0];


openModal.onclick = function () {
    const company = document.getElementById("company").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const title = document.getElementById("title").value;
    const phone = document.getElementById("phone").value;
    const cancel = document.getElementById("cancel").value;
    const trainingSession = document.getElementById("trainingSession").value;
    const jobFunc = document.getElementById("jobFunc").value;
    const dietary = document.getElementById("dietary").value;
    const expec = document.getElementById("expec").value;
    const msg = `xxx`;
    // DOM Manipulation
    // document.getElementById("modal-body").innerHTML = msg;

    // Show Modal
    modal.style.display = "block";

}
closeModal.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Navbar Link Actions */



/* Read More Buttons */
// alert("Süsüm ben :))")


