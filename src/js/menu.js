const toggleMenu = document.getElementById('toggle-menu')
const menu = document.getElementById('main-menu')
const body = document.getElementById('body')

toggleMenu && toggleMenu.addEventListener('click', (e) => {
  if(e.target.id == 'toggle-menu' || e.target.parentElement.id == 'toggle-menu'){
    menu.classList.toggle('main-menu--show')
    html.classList.toggle('no-scroll')
  }
})


