console.log("Hello world");
const op =<HTMLInputElement> document.getElementById("op");
const input =<HTMLInputElement> document.getElementById("text-box");

document.querySelectorAll(".calc-btn").forEach(function (element: Element) {
    element.addEventListener("click", function (): void {
        if (input) {
            input.value += element.innerHTML;
        }
    });
});

document.getElementById("equal")?.addEventListener("click", function (): void {
    if (input) {
        input.value = `${eval(input.value)}`;
    }
});