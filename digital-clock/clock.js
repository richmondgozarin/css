
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const curr_time = document.querySelector('h1');


function setDate(){
    let now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angle of hr, min, sec hands --> https://en.wikipedia.org/wiki/Clock_angle_problem
    // Keep in mind css angle (0deg) starts from horizontal orientation while that of a clock starts
    // from vertical orientation (-90deg in css terms)
    let hoursT = hours > 12 ? (hours-12) : 12;
    let ampm =  hours < 12 ? 'am' : 'pm';
    let hoursAngle = (0.5 * (60 * hours + minutes)) - 90;
    let minutesAngle = (6 * minutes) - 90
    let secondsAngle = (6 * seconds) - 90
    
    curr_time.innerHTML = `${hoursT} : ${minutes} : ${seconds} ${ampm} `;
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}

setInterval(setDate, 1000);
