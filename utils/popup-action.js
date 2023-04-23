
// open modal by id and set content do div with class jw-modal
function openModal(id, element) {
    document.getElementById(id).classList.add('open');   
    renderTemplatePopup(element);
    init_collapsible();
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});

