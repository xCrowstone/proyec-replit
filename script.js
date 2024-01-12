document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('h5').forEach(function (h5) {
        h5.addEventListener('click', function () {
            h5.style.color = ['green', 'blue', 'red'][Math.floor(Math.random() * 3)];
        });
    });
});
