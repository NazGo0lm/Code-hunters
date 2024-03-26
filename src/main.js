let burger_menu = document.querySelector(".modal-menu");
let modal_btn = document.querySelector(".burger-menu");

modal_btn.onclick = function () {
    burger_menu.classList.toggle("is-open");
    

}
document.onclick = function (e) {
    if (burger_menu.contains(e.target)) {
    
    burger_menu.classList.remove("is-open");
    

}

}













