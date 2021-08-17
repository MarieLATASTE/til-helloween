function createFalls(){

    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);

}
setInterval(createFalls, 100);

const countDate = new Date('oct 31, 2021 00:01').getTime(); 

const timerFunction = setInterval(() =>{

    const currentDate = new Date().getTime();
    const gap = countDate - currentDate;

    if(gap > 0) {

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / (1000));

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }else{
        clearInterval(timerFunction);
        document.getElementById('timer').innerHTML = "This is Halloween !";
    }
}, 1000);


