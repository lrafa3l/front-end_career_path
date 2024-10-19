import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    let itemID = item[0]
    let itemValue = item[1]
    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("click", function (){
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
    List.append(newEl)
}

function clearShoppingEl() {
    List.innerHTML = ""
}

onValue(ShoppingListInDB, function (snapshot) {
    if (snapshot.exists() === true)
    {

        let ShoppingListArray = Object.entries(snapshot.val())
        clearShoppingEl()
        for (let i = 0; i < ShoppingListArray.length; i++) {
            let currItem = ShoppingListArray[i]
            let currItemID = currItem[0]
            let currItemValue = currItem[1]
            
            appendToList(currItem)
        }
    }
    else
    {
        List.innerHTML = "No items here... yet"
    }
})


addButtonEl.addEventListener("click", function () {

    let inputValue = getInput()
    pushToDB(inputValue)
    cleanInputField()
})