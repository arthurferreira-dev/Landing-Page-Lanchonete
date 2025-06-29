function MenuOpen() {
    let icon = document.getElementById('icon-menu')
    let menu = document.getElementById('itens')

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icon.className = 'fa-solid fa-bars'
        console.log('Console JS: sumiu')
    } else if (menu.style.display == 'none') {
        menu.style.display = 'block'
        icon.className = 'fa-solid fa-caret-down'
        console.log('Console JS: apareceu')
    }
}

function High() {
    let menu = document.getElementById('itens')

    if (window.innerWidth >= 760) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    }
}