/* burger menu */
let button = document.querySelector('.container-button');
let body = document.querySelector('body');

button.addEventListener('click', function() {
    body.classList.toggle('ouvert');
})


/* slider banner */
var slideImg = document.getElementById('slideImg');

        var images = new Array (
                 "img/banner-1.jpg",
                 "img/banner-2.jpg",
                 "img/banner-3.jpg"
        );

        var len = images.length;
        var i = 0;

        function slider() {
            if(i > len-1) {
                i = 0;
            }
            slideImg.src = images[i];
            i++;
            setTimeout('slider()',4000);
        }