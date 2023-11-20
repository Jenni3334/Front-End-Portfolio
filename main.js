// main.js

function addNewEntry() {
    // Get form input values
    const cookieName = document.getElementById('cookieName').value;
    const flavor = document.getElementById('flavor').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;

    // Create a new cookie entry
    const newCookieEntry = document.createElement('div');
    newCookieEntry.className = 'cookie';

    newCookieEntry.innerHTML = `
        <img src="${image}" alt="${cookieName}">
        <div class="flavors">
            <h2 class="flavor">${cookieName}</h2>
            <p class="price">$${price}</p>
            <p class="status">${stock}</p>
            <td><button class="remove-button" onclick="removeItem(this)">Remove</button></td>
        </div>
    `;

    // Append the new entry to the store
    const store = document.querySelector('.store');
    store.appendChild(newCookieEntry);

    // Reset the form
    document.querySelector('form').reset();
}

function removeItem(button) {
    // Remove the parent element of the button (which is the cookie entry)
    const cookieEntry = button.parentNode.parentNode;
    cookieEntry.remove();
}

//api
const apiURL = 'https://api-ninjas.com/api/emoji'
fetch(apiURL)
.then(response =>{
    if(!response.ok){
        throw new Error('Newtork response was not ok: ${Response.status}');
    }
    return main.js()
})
.then(data =>{
    console.log(data);
})
.catch(error => {
    console.error("Error fetching data:")
});