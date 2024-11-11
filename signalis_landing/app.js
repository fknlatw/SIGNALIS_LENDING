const header = document.querySelector(".header");
const scrollToTopElement = document.querySelector(".header_scroll_top");

document.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        header.classList.add("active_header");
        scrollToTopElement.style.display = "block";
    } else {
        header.classList.remove("active_header");
        scrollToTopElement.style.display = "none";
    }
})

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}