
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    let day = now.getDay();
    switch (day) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            break;
    }
    const timestring = `${hours}:${minutes}:${seconds}`;
    const daystring = `${day}`
    const datestring = `${month+1}/${date}/${year}`;
    document.getElementById('time').textContent = timestring;
    document.getElementById('day').textContent = daystring;
    document.getElementById('date').textContent = datestring;
}

setInterval(updateClock, 1000);