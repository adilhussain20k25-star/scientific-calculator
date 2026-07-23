// Display aur scientific grid ko select karein
const display = document.querySelector('.display');
const sciGrid = document.getElementById("scientific-grid");

// Har button par click event listener lagayein
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Scientific toggle ka button (keyboard icon)
        if (value === '⌨') {
            sciGrid.style.display = (sciGrid.style.display === "none" || sciGrid.style.display === "") ? "grid" : "none";
        } 
        // AC button: Sab clear karne ke liye
        else if (value === 'AC') {
            display.innerText = '0';
        } 
        // = button: Calculation karne ke liye
        else if (value === '=') {
            try {
                // × aur ÷ ko computer friendly symbols mein badalna
                let expression = display.innerText.replace('×', '*').replace('÷', '/');
                display.innerText = eval(expression);
            } catch {
                display.innerText = 'Error';
            }
        } 
        // Numbers aur baki operators
        else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});
function calculateScientific(operation) {
    let display = document.querySelector('.display');
    let value = parseFloat(display.innerText);

    switch(operation) {
        case 'sin': display.innerText = Math.sin(value * Math.PI / 180).toFixed(4); break;
        case 'cos': display.innerText = Math.cos(value * Math.PI / 180).toFixed(4); break;
        case 'tan': display.innerText = Math.tan(value * Math.PI / 180).toFixed(4); break;
        case 'log': display.innerText = Math.log10(value).toFixed(4); break;
        case 'square': display.innerText = Math.pow(value, 2); break;
        case 'sqrt': display.innerText = Math.sqrt(value).toFixed(4); break;
        case 'pi': display.innerText = Math.PI.toFixed(4); break;
        case 'exp': display.innerText = Math.E.toFixed(4); break;
    }
}
