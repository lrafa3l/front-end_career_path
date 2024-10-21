import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://champions-10740-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endors = ref(database, "endorsements")

const backToTopButton = document.getElementById("back-to-top")
const pubBtn = document.getElementById("pub-btn")
const inputField = document.getElementById("endors-el")
const endorsementsContainer = document.getElementById("endors")

let divEl = document.createElement("div")
endorsementsContainer.append(divEl)

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

pubBtn.addEventListener("click", function() {
    let inputValue = getInput()
    pushToDB(inputValue)
    clearInputField()
})

onValue(endors, function(snapshot){
    if (snapshot.exists() === true) {
        let endorsArray = Object.entries(snapshot.val())
        clearEndors()
        for (let i = 0; i < endorsArray.length; i++) {
            let currEndor = endorsArray[i]
            appendEndor(currEndor)
        }
    } else {
        divEl.innerHTML = ""
    }
})

function getInput() {
    let inputValue = inputField.value
    return inputValue
}

function pushToDB(inputValue) {
    push(endors, inputValue)
}

function clearInputField() {
    inputField.value = ""
}

function clearEndors() {
    divEl.innerHTML = ""
}

function appendEndor(endor) {
    let endorID = endor[0]
    let endorValue = endor[1]
    let newEndor = document.createElement("p")
    newEndor.textContent = endorValue
    newEndor.addEventListener("dblclick", function() {
        let exactLocationOfEndorInDB = ref(database, `endorsements/${endorID}`)
        remove(exactLocationOfEndorInDB)
    })
    divEl.append(newEndor) // Use appendChild instead of append
}
