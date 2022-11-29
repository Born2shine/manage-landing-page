let menuBtn = document.querySelector("#menu-btn")
let mobileMenu = document.querySelector(".mobile-menu")

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle('-translate-x-full')
})

const toggleMenu = () =>  mobileMenu.classList.toggle('-translate-x-full')

