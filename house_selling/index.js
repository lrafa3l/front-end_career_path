import propertyForSaleArr from '/properties/propertyForSaleArr'
import placeholderPropertyObj from '/properties/placeholderPropertyObj'

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoomSizeM2} m&sup2;</h3>
                </div>
            </section>` 
    }).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml()