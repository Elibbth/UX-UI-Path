const socials = document.querySelector(".social-links")
const shareBtn = document.getElementById("#share")

shareBtn.addEventListener("click", () => {
    socials.classList.add("clicked")
})