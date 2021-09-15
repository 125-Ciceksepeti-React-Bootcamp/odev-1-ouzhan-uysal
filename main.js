/* Fetch API */
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => {
        // console.log("Fetch Response: ", response);
        return response.json();
    }
).then(
    responseJson => {
        // console.log(responseJson);
        let gridElem = "";
        for (let i = 0; i < responseJson.length; i++) {
            if (i === 10) {
                break;
            }
            else {
                // console.log(responseJson[i]);
                gridElem += `
                        <div class="grid-item">
                        <img src="images/ops.png" alt="item${responseJson[i].id}">
                        <p class="title">${responseJson[i].title}</p>
                        <p class="description">${responseJson[i].body}</p>
                        <button class="readMore">Read More</button>
                        </div>
                        `;
            }
            document.getElementById("contents").innerHTML = gridElem;
        }
        // responseJson.forEach(element => {
        //     try {
        //         if(responseJson === responseJson[10]){
        //             break;
        //         }
        //         let gridElem = `
        //         <div class="grid-item">
        //         <img src="images/ops.png" alt="item${element.id}">
        //         <p class="title">${element.title}</p>
        //         <p class="description">${element.body}</p>
        //         <button class="readMore" id="readMore">Read More</button>
        //         </div>
        //         `;
        //         // document.getElementById("contents").innerHTML = gridElem;
        //         console.log(element);
        //     } catch (err) {
        //         console.log(err);
        //         throw "Bir elemanda hata aldın hacı."
        //     }
        // });
    }
).catch(err => console.log("Hata: ", err));


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
    const registration = document.querySelector('input[name="registration"]').checked;
    const trainingSession = document.getElementById("trainingSession").value;
    const jobFunc = document.querySelector('input[name="jobFunc"]').checked;
    const dietary = document.getElementById("dietary").value;
    const expec = document.getElementById("expec").value;
    let formInput = `
    <p><strong>Company:</strong>${company}</p>
    <p><strong>First Name:</strong>${fname}</p>
    <p><strong>Last Name:</strong>${lname}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Title:</strong>${title}</p>
    <p><strong>Phone:</strong>${phone}</p>
    <p><strong>Cancel Registration:</strong>${registration}</p>
    <p><strong>252 Training Session 2010:</strong>${trainingSession}</p>
    <p><strong>Job Function:</strong>${jobFunc}</p>
    <p><strong>Distery Requirements:</strong>${dietary}</p>
    <p><strong>Exceptations:</strong>${expec}</p>
    `;
    // DOM Manipulation
    document.getElementById("modal-b").innerHTML = formInput;

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
$(document).ready(function(){
    $(".navLink li").on("click", function(){
        var dataId = $(this).attr("data-id");
        const formTag = document.querySelector(".form-content");
        const gridTag = document.querySelector(".grid-content");
        if (dataId === "show"){
            formTag.style.display = "flex";
            gridTag.style.display = "flex";
        } else if (dataId === "showForm") {
            formTag.style.display = "flex";
            gridTag.style.display = "none";
        } else if (dataId === "showGrid") {
            gridTag.style.display = "flex";
            formTag.style.display = "none";
        } else if (dataId === "hide") {
            formTag.style.display = "none";
            gridTag.style.display = "none";
        } else {
            alert("Bi sıkıntı var haciii")
        }
    });
});



/* Read More Buttons */
document.body.addEventListener('click', function (evt) {
    if (evt.target.className === "readMore") {
        alert("Süsüm ben :))");
    }
}, false);
/*
const readMeBtns = document.querySelectorAll('.readMore');
readMeBtns.forEach(el => el.addEventListener('click', event => {
    console.log("Süsüm Ben :))");
}));
*/