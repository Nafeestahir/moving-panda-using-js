const element = document.getElementById("panda");
retryFunction()
function startAnimation() {
    panda.style.animationPlayState = "running";
    element.classList.add("panda");
}
function stopAnimation() {
    panda.style.animationPlayState = "paused";
}
function retryFunction() {
    element.classList.remove("panda");
}
