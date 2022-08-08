function startModal(modalId) {
    const modal = document.getElementById(modalId)
    if (modal) {
        modal.classList.add('open')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalId || e.target.className == 'fechar') {
                modal.classList.remove('open')
            }
        })
    }
}

const contact = document.getElementById('contact')
contact.addEventListener('click', () => {
    startModal('modal-container')
})

const contactPrincipalNav = document.getElementById('contactp')
contactPrincipalNav.addEventListener('click', () => {
    startModal('modal-container')
})
