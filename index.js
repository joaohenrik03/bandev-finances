// Abrir e fechar modal
// Open and Close modal

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('show')  
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('show')
    }
}