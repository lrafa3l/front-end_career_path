import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-d9456-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const ShoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
let List = document.getElementById("shopping-list")

function getInput() {
    let inputValue = inputFieldEl.value
    return inputValue
}

function pushToDB(inputValue) {
    push(ShoppingListInDB, inputValue)
}

function cleanInputField() {
    inputFieldEl.value = ""
}

function appendToList(item) {
    List.innerHTML += `<li>${item}</li>`
}

function clearShoppingEl() {
    List.innerHTML = ""
}

onValue(ShoppingListInDB, function (snapshot) {
    let ShoppingListArray = Object.values(snapshot.val())
    clearShoppingEl()
    for (let i = 0; i < ShoppingListArray.length; i++) {
        appendToList(ShoppingListArray[i])
        console.log(ShoppingListArray[i])
    }
})


addButtonEl.addEventListener("click", function () {

    let inputValue = getInput()
    pushToDB(inputValue)
    cleanInputField()
})