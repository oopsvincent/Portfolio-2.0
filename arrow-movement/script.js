const os = detectOS();
console.log(os); // "Windows", "MacOS", "Linux", "Android", "iOS", or "Unknown"

const box = document.getElementById('myBox');
let movementSpeed = 10;
let x = 0;
let y = 0;
const buttons = document.querySelector('.buttons');

document.addEventListener('keydown', event => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();
        switch (event.key) {
            case 'ArrowUp':
                y -= movementSpeed;
                break;
            case 'ArrowDown':
                y += movementSpeed;
                break;
            case 'ArrowLeft':
                x -= movementSpeed;
                break;
            case 'ArrowRight':
                x += movementSpeed;
                break;
        }
        updateBoxPosition();
    }
});

function updateBoxPosition() {
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
}

function detectOS() {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Windows") !== -1) {
        return "Windows";
    } else if (userAgent.indexOf("Macintosh") !== -1) {
        return "MacOS";
    } else if (userAgent.indexOf("Linux") !== -1) {
        return "Linux";
    } else if (userAgent.indexOf("Android") !== -1) {
        return "Android";
    } else if (
        userAgent.indexOf("iPhone") !== -1 ||
        userAgent.indexOf("iPad") !== -1 ||
        userAgent.indexOf("iPod") !== -1
    ) {
        buttons.style.display = 'flex';
        return "iOS";
    } else {
        return "Unknown";
    }
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

btn1.addEventListener('click', () => {
    y -= movementSpeed;
    console.log('Button 1 clicked');
    updateBoxPosition();
});
btn2.addEventListener('click', () => {
    y += movementSpeed;
    console.log('Button 2 clicked');
    updateBoxPosition();
});
btn3.addEventListener('click', () => {
    x -= movementSpeed;
    console.log('Button 3 clicked');
    updateBoxPosition();
});
btn4.addEventListener('click', () => {
    x += movementSpeed;
    console.log('Button 4 clicked');
    updateBoxPosition();
});
