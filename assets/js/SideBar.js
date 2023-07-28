function showMenu() {
    document.getElementById('showMenu').classList.toggle('fa-bars');
}

window.onclick = (event) => {
    let menu = document.getElementsByClassName('fa-bars');
    
    if(event.targe == menu) {
        menu.style.display = none;
    }
}