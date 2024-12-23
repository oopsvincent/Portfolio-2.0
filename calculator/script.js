const display = document.querySelector('#display');
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        calculate();
    }
    // else if (e.key === Alpha) {
    //     return;
    // }
    else if (e.key === 'Delete') {
        clearDisplay();
    }
    else if( e.key === 'Tab' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'F1' || e.key === 'F2' || e.key === 'F3' || e.key === 'F4' || e.key === 'F5' || e.key === 'F6' || e.key === 'F7' || e.key === 'F8' || e.key === 'F9' || e.key === 'F10' || e.key === 'F11' || e.key === 'F12' || e.key === 'CapsLock' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'AltGraph' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'End' || e.key === 'Home' || e.key === 'Insert' || e.key === 'Delete' || e.key === 'ScrollLock' || e.key === 'Pause' || e.key === 'PrintScreen' || e.key === 'ContextMenu' || e.key === 'Escape' || e.key === 'Tab' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Enter' || e.key === 'CapsLock' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Meta' || e.key === 'ArrowUp' || e.key === 'End' || e.key === 'Home' || e.key === 'Insert' || e.key === 'Delete' || e.key === 'ScrollLock' || e.key === 'Escape' || e.key === 'Tab' || e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt'){
        return;
    }
    else if (e.key === 'Escape') {
        clearDisplay();
    }
    else if (e.key === 'Backspace') {
        backSpace();
    }
    else {
        appendToDisplay(e.key);
    }
})

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}

function backSpace(){
    display.value = display.value.slice(0, -1);
}