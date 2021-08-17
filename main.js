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