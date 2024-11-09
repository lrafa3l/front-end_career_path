import { menuArray } from "./data.js"
import { noMenu } from "./no_data.js"


function getPropertyHtml(menuArray = [noMenu]) {
    return menuArray.map(property => {
        const {
            name,
            ingredients,
            price,
            image,
            id
        } = property
        return `
            <section class="card">
                <div class="card-image" style="background-image:url('./assets/images/${image}')" ></div> 
                <div class="card-right">
                    <h2 class="name">${name}</h2>
                    <p>${ingredients}</p>
                    <h3 class="price">${price} AOA</h3>
                </div>
                <i id="${id}" class="fa-solid fa-plus icon" data-name="${name}" data-price="${price}"></i>
            </section>` 
    }).join('')
}

let totalPrice = 0;
const orderItems = {}; // Object to keep track of items and their quantities

// // Function to update the order summary
function updateOrder(name, price, id) {
    const orderDiv = document.querySelector('.to-buy');
    const totalElement = document.querySelector('.total');

    // Check if the item is already in the order
    if (orderItems[id]) {
        // Increase quantity
        orderItems[id].quantity += 1;
    } else {
        // Add new item
        orderItems[id] = {
            name: name,
            quantity: 1,
            price: parseFloat(price) // Store the original price
        };
    }
}

//     // Clear the order display and rebuild it
//     orderDiv.innerHTML = ''; // Clear current display
//     for (const item of Object.values(orderItems)) {
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('order-item');

//         // Create separate elements for name, quantity, and price
//         const nameElement = document.createElement('span');
//         nameElement.classList.add('item-name');
//         nameElement.textContent = `${item.name} (x${item.quantity})`;

//         const priceElement = document.createElement('span');
//         priceElement.classList.add('item-price');
//         priceElement.textContent = `${(item.price * item.quantity).toFixed(2)} AOA`;

//         const removeButton = document.createElement('button');
//         removeButton.classList.add('remove-btn');
//         removeButton.textContent = 'Remove';
//         removeButton.onclick = () => removeItem(id);

//         // Append elements to the itemDiv
//         itemDiv.appendChild(nameElement);
//         itemDiv.appendChild(priceElement);
//         itemDiv.appendChild(removeButton);
//         orderDiv.appendChild(itemDiv);
//     }

//     // Update the total price
//     totalPrice = Object.values(orderItems).reduce((sum, item) => sum + (item.price * item.quantity), 0);
//     totalElement.textContent = `${totalPrice.toFixed(2)} AOA`;
// }

// // Function to remove an item from the order
// function removeItem(id) {
//     if (orderItems[id]) {
//         delete orderItems[id]; // Remove the item from the order
//         update}OrderDisplay(); // Update the order display
//     }
// }

// // Function to update the order display after removing an item
// function updateOrderDisplay() {
//     const orderDiv = document.querySelector('.to-buy');
//     const totalElement = document.querySelector('.total');
//     orderDiv.innerHTML = ''; // Clear current display

//     for (const item of Object.values(orderItems)) {
//         const itemDiv = document.createElement('div');
//         itemDiv.classList.add('order-item');

//         const nameElement = document.createElement('span');
//         nameElement.classList.add('item-name');
//         nameEl}v.appendChild(nameElement);
//         itemDiv.appendChild(priceElement);
//         itemDiv.appendChild(removeButton);
//         orderDiv.appendChild(itemDiv);
//     }

//     // Update the total price
//     totalPrice = Object.values(orderItems).reduce((sum, item) => sum + (item.price * item.quantity), 0);
//     totalElement.textContent = `${totalPrice.toFixed(2)} AOA`;
// }

// // Event delegation for dynamically added icons
// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains('fa-plus')) {
//         const name = e.target.getAttribute('data-name');
//         const price = e.target.getAttribute('data-price');
//         const id = e.target.id; // Get the id of the item
//         updateOrder(name, price, id);
//     }
// });

document.getElementById('main').innerHTML = getPropertyHtml(menuArray)
console.log(menuArray)