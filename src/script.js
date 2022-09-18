let btn = document.querySelector(".arrow-up");

window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};

document.querySelector(".barre").addEventListener('click', () => {
    document.querySelector(".nav-items").classList.toggle("active");
})
