
let edits;

function addListensToButton() {
    edits = document.querySelectorAll('.edit-icon');
    edits.forEach((edit) => {
        edit.addEventListener('click', () => {
            console.log('edit');
        });
    });
}

addListensToButton();

function openEditPopup() {
    console.log('open edit popup');
}