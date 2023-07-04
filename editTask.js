
function openEditPopup() {
    console.log('open edit popup');
}



function addListensToButton() {
    let editButtons = document.querySelectorAll('.edit-icon');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', openEditPopup);
    } 
}

addListensToButton();