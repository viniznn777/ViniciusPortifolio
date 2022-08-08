const saudation = document.getElementById('saudation')
const title = document.getElementById('title')
const title1 = document.getElementById('title1')
const cargo = document.getElementById('cargo')

function typingSaudation(id) {
    const Textlist = id.innerHTML.split('')
    id.innerHTML = ''
    Textlist.forEach((letter, i) => {
        setTimeout(function() {
            id.innerHTML += letter
        }, 65 * i)
    })
}

function typingTitle(id) {
    const Textlist = id.innerHTML.split('')
    id.innerHTML = ''
    Textlist.forEach((letter, i) => {
        setTimeout(function() {
            id.innerHTML += letter
        }, 120 * i)
    })
}



function AboutText(id) {
    const Textlist = id.innerHTML.split('')
    id.innerHTML = ''
    Textlist.forEach((letter, i) => {
        setTimeout(function() {
            id.innerHTML += letter
        }, 20 * i)
    })
}