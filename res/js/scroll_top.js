var scrollButton = document.getElementById("top_button");

window.onscroll = function() {
    this.buttonDisplay()
};

function buttonDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "flex";
    } else {
        scrollButton.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
