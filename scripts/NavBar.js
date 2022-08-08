function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {

        menuMobile.classList.remove('open');

        var iconeList = document.createElement('i')
        iconeList.className = "bi bi-list"
        iconeList.id = 'icon'
        var troca = document.getElementById('icon')
        var pai = troca.parentNode;
        pai.replaceChild(iconeList, troca)  
    }
    else {
        menuMobile.classList.add('open')

        var iconeClose = document.createElement('i')
        iconeClose.className = "bi bi-x" 
        iconeClose.id = 'icon'
        var trocar = document.getElementById('icon')
        var pai = trocar.parentNode;
        pai.replaceChild(iconeClose, trocar)

        menuMobile.style.marginLeft = '0'
        menuMobile.style.animationName = 'menuMobile'
    }
}
