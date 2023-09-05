let displayColor = document.getElementById('display-color');
let hexCode = document.getElementById('hex-code');
let rgbCode = document.getElementById('rgb-code');
let generateBtn = document.getElementById('btn');

let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

generateBtn.addEventListener("click", () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += colors[Math.floor(Math.random() * 16)];
    }
    displayColor.style.backgroundColor = color;
    hexCode.innerHTML = color;
    rgbCode.innerHTML = hexToRgb(color);
});
function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    return "rgb(" + r + "," + g + "," + b + ") ";
}