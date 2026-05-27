const toggleButton = document.getElementById("toggle")
toggleButton.addEventListener("click",() =>
{
    document.body.classList.toggle("light-mode");
})

let x = 0;
function increment() {
    document.getElementById("count").innerHTML = x++
}
increment()