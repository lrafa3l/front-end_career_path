let valueEl = document.getElementById("value")
let converBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let meterEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

converBtn.addEventListener("click", function () {

    if (valueEl.value === "") {
        return
    }
    else if (valueEl.value !== "") {
        lengthEl.innerHTML = "";
        meterEl.innerHTML = "";
        massEl.innerHTML = "";
        lengthEl.innerHTML = "<h2>Length (Meter/Feet)</h2>";
        meterEl.innerHTML = "<h2>Volume (Liter/Gallons)</h2>";
        massEl.innerHTML = "<h2>Mass (kilograms/Pounds)</h2>";
        lengthEl.innerHTML += `<p>${Number(valueEl.value)} meters = ${(Number(valueEl.value) * 3.281).toFixed(3)} feet
                            | ${Number(valueEl.value)} feet = ${(Number(valueEl.value) / 3.281).toFixed(3)} meters
                            </p>`

        meterEl.innerHTML += `<p>${Number(valueEl.value)} liters = ${(Number(valueEl.value) * 0.264).toFixed(3)} gallons
                            | ${Number(valueEl.value)} gallons = ${(Number(valueEl.value) / 0.264).toFixed(3)} liters
                            </p>`

        massEl.innerHTML += `<p>${Number(valueEl.value)} kilograms = ${(Number(valueEl.value) * 2.205).toFixed(3)} pounds
                            | ${Number(valueEl.value)} pounds = ${(Number(valueEl.value) / 2.205).toFixed(3)} kilograms
                         </p>`
    }
})