"use strict";

// TODO: Problem 1 done in CSS****

// TODO: Problem 2 When the element with an id of dark-mode-btn is clicked, the class of dark-mode should be toggled on the body element.



document.addEventListener('DOMContentLoaded', () =>{
    const body = document.body;
    const darkModeToggle = document.querySelector('#dark-mode-btn');

    darkModeToggle.addEventListener('click', () =>{
        body.classList.toggle('dark-mode');
    });
});

// TODO: Problem 3 When the element with an id of to-mdn is clicked, change the browser location to this address: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model.

// click event listener on id, changes browser location

document.addEventListener('DOMContentLoaded', () =>{
    const changeLocation = document.querySelector('#to-mdn');


    changeLocation.addEventListener('click', e=> {
        e.preventDefault();

        window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
    });
});


// TODO: Problem 4 After three seconds, the class of hide should be removed from the element with a class of popup. The setTimeout function can be used for this.
document.addEventListener('DOMContentLoaded', () => {
    const popupElement = document.querySelector('.popup');

    // Wait for three seconds and then remove the "hide" class
    setTimeout(() => {
        popupElement.classList.remove('hide');
    }, 3000);
});

// TODO: Problem 5 When the element with an id of dismiss-btn is clicked, the element with a class of popup should be given a class of hide.

document.addEventListener('DOMContentLoaded', () => {
    const dismissButton = document.getElementById('dismiss-btn');
    const popupElement = document.querySelector('.popup');

    // Add click event listener to the dismiss button
    dismissButton.addEventListener('click', () => {
        // Add the "hide" class to the popup element
        popupElement.classList.add('hide');
    });

    // Wait for three seconds and then remove the "hide" class from the popup element
    // setTimeout(() => {
    //     popupElement.classList.remove('hide');
    // }, 3000);
});

// TODO: Problem 6 The class of link-hover should be added to any anchor tag elements in the navbar when hovering into the element and removed when hovering out.
// cannot run node methods in an array

const hovers = document.querySelectorAll('nav a');
for (let hover of hovers) {
    hover.addEventListener('mouseenter', e=>{
        hover.classList.add('link-hover');
    });
    hover.addEventListener('mouseleave', e=> {
        hover.classList.remove('link-hover');
    });
}

// TODO: Problem 7 When the button with an id of add-btn is clicked, any text inside the text input with an id of new-data should be appended to the element with an id of data. Div elements should wrap all new text appended to the #data element.
//
// document.addEventListener('DOMContentLoaded', () => {
//     const addButton = document.getElementById('add-btn');
//     const newDataInput = document.getElementById('new-data');
//     const dataContainer = document.getElementById('data');
//
//     addButton.addEventListener('click', () => {
//         // Get the text from the input
//         const newText = newDataInput.value.trim();
//
//         if (newText) {
//             // Create a new div element
//             const newDiv = document.createElement('div');
//             newDiv.textContent = newText;
//
//             // Append the new div to the data container
//             dataContainer.appendChild(newDiv);
//
//             // Clear the input field
//             newDataInput.value = '';
//         }
//     });
// });

const addButton = document.querySelector('#add-btn');
const newDataInput = document.querySelector('#new-data');
const dataContainer = document.querySelector('#data');

addButton.addEventListener('click', e =>{
    const newText = newDataInput.value;
    const newDiv = document.createElement('div');
    newDiv.innerHTML = newText;

    dataContainer.appendChild(newDiv);
});


// TODO: Problem 8 When the element with an id of clean-data-btn is clicked, the text of each div inside the element with an id of data should be changed to the text clean.
//
// document.addEventListener('DOMContentLoaded', () => {
//     const cleanDataButton = document.getElementById('clean-data-btn');
//     const dataContainer = document.getElementById('data');
//
//     cleanDataButton.addEventListener('click', () => {
//         // Select all div elements inside the data container
//         const dataDivs = dataContainer.querySelectorAll('div');
//
//         // Change the text of each div to "clean"
//         dataDivs.forEach((div) => {
//             div.textContent = 'clean';
//         });
//     });
// });

const cleanDataBtn = document.querySelector('#clean-data-btn');
const childDivs = document.querySelector('#data').children;
cleanDataBtn.addEventListener('click', e=>{
    for(let childDiv of childDivs) {
        childDiv.innerText = "Clean";
    }
});

// TODO: Problem 9 The login button should remain disabled until the user types text inside the text input with an id of username. A keyup event listener can be used to check if the text input has a non-empty value. The disabled attribute can be set using the jQuery attr() method or the disabled property with vanilla JavaScript.

// document.addEventListener('DOMContentLoaded', () => {
//     const usernameInput = document.getElementById('username');
//     const loginButton = document.getElementById('login-btn');
//
//     // Add keyup event listener to the username input
//     usernameInput.addEventListener('keyup', () => {
//         // Check if the input has a non-empty value
//         const isInputNotEmpty = usernameInput.value.trim() !== '';
//
//         // Set the disabled property of the login button based on the input value
//         loginButton.disabled = !isInputNotEmpty;
//     });
// });

const logInBtn = document.querySelector('#login-btn');
const userName = document.querySelector('#username');
userName.addEventListener('keyup', e=>{
    //check if user input is empty, if empty add disabled attribute to button, else remove disabled attribute button
    if(!userName.value) {
        logInBtn.setAttribute('disabled','');
    } else {
        //remove disabled attribute
        logInBtn.removeAttribute('disabled');
    }
});

// TODO: Problem 10 When the button with an id of search-btn is clicked, all divs with matching inner text to the search input (#search-btn) should be styled to have a darkorange background. Any divs that do not have matching text to the search input should be set to a background of #999. If you are using vanilla JavaScript, the querySelectorAll method and a loop will be helpful to use. If you are using jQuery, the each method will be helpful to use.

// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.getElementById('search-btn');
//     const searchInput = document.getElementById('search');
//     const dataDivs = document.querySelectorAll('#data div');
//
//     searchButton.addEventListener('click', () => {
//         const searchText = searchInput.value.trim().toLowerCase();
//
//         dataDivs.forEach((div) => {
//             const divText = div.textContent.trim().toLowerCase();
//             if (divText.includes(searchText)) {
//                 // Matching text, set background to darkorange
//                 div.style.backgroundColor = 'darkorange';
//             } else {
//                 // Non-matching text, set background to #999
//                 div.style.backgroundColor = '#999';
//             }
//         });
//     });
// });

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-btn');
searchBtn.addEventListener('click', e=>{
    const searchInputValue = searchInput.value;
    const childDivs = document.querySelector('#data div');
    for(let childDiv of childDivs) {
        // if the inner text is equal to input value
        if (childDiv.innerText.toLowerCase() === searchInputValue.toLowerCase()) {
            childDiv.style.backgroundColor = 'darkorange';
        } else {
            childDiv.style.backgroundColor = '#999';
        }
    }
});

// MAIN
(() =>{

})();