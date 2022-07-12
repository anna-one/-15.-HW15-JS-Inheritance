const timeInP = document.getElementById('time');
let currentClock;

function Clock() {
    this.getDataTime = function () {
        const date = new Date();
        return date.toString();
    };
};

Clock.prototype.render = function() {
    timeInP.innerText = currentClock.getDataTime()
}

let clock = new Clock();

timeInP.addEventListener('click', () => {
    if (currentClock === shortClock) {
        currentClock = fullClock;
    } else {
        currentClock = shortClock
    }
    clock.render()
});

setInterval(() => { clock.render() }, 1000);

function ShortClock() {
    Clock.call(this);
    this.getDataTime = function() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();

        const format = `${hour} : ${minute}`;
        return format;
    }
};

let shortClock = new ShortClock();


function FullClock() {
    Clock.call(this);

    this.getDataTime = function() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const format = `${hour} : ${minute} : ${second}`;
        return format;
    };
};

let fullClock = new FullClock();

currentClock = shortClock;