const open_modal = document.getElementById('open-modal');
const modal_container = document.getElementById('modal-container');
const close_modal = document.getElementById('close-modal');

open_modal.addEventListener('click', function(){
    modal_container.classList.add("show-modal")
});

close_modal.addEventListener('click', function(){
    modal_container.classList.remove("show-modal")
});