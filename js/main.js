// MENU

const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overley=document.querySelector("#overley")

menuButton.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overley.classList.toggle("show")

})


overley.addEventListener('click',()=>{
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overley.classList.toggle("show")
})
// overley
