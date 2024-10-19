import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-d9456-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const ShoppintListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
let List = document.getElementById("shopping-list")

function getInput() {
    let inputValue = inputFieldEl.value
    return inputValue
}

function pushToDB(inputValue)
{
    push(ShoppintListInDB, inputValue)
}

function cleanInputField() {
    inputFieldEl.value = ""
}

function appendToList(item) {
    List.innerHTML += `<li>${item}</li>`
}

addButtonEl.addEventListener("click", function() {
    
    let inputValue = getInput()
    pushToDB(inputValue)
    appendToList(inputValue)
    cleanInputField()
})