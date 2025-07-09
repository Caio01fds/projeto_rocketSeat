function toogleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/foto-perfil2.jpg')
    } else {
        img.setAttribute('src', './assets/foto-perfil2.jpg')
    }
        


}