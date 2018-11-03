document.addEventListener('DOMContentLoaded', function(){
////             Hover                ////

    var submenuGaleria = document.querySelector('#main_navigation > li:nth-of-type(2) > ul');
    var galeriaItem = document.querySelector('#main_navigation > li:nth-of-type(2)');

    galeriaItem.addEventListener('mouseover', function(ev) {
        submenuGaleria.style.display = 'block';
    });
    galeriaItem.addEventListener('mouseout', function(ev) {
        submenuGaleria.style.display = 'none';
    });
////             to hide                ////

    var img = document.querySelectorAll('.toHide');

    for (var i=0; i<img.length; i++) {
        img[i].addEventListener('mouseover', function(event) {
            var fotoDescription = document.querySelectorAll('.absoluteBox');
            for (var j=0; j<fotoDescription.length; j++) {
                fotoDescription[j].style.display = 'none';
            }
        })
    };

    for (var i=0; i<img.length; i++) {
        img[i].addEventListener('mouseout', function(event) {
            var fotoDescription = document.querySelectorAll('.absoluteBox');
            for (var j=0; j<fotoDescription.length; j++) {
                fotoDescription[j].style.display = 'flex';
            }
        })
    };
    ////             SLAJDER                     ////

    var arrowLeft = document.querySelector('.slider_arrow.left');
    var arrowRight = document.querySelector('.slider_arrow.right');
    var chairImages = document.querySelectorAll('figure.slider_img li');
    //console.log(chairImages);
    var currentImage = 0;

    chairImages[currentImage].classList.add('visible');

    arrowRight.addEventListener('click', function(ev) {
      console.log('dzialam');
      chairImages[currentImage].classList.remove('visible');
      if(currentImage >= chairImages.length - 1) {
          currentImage = -1;
      }
        currentImage++;
        chairImages[currentImage].classList.add('visible');
    });

        arrowLeft.addEventListener('click', function(ev) {
          chairImages[currentImage].classList.remove('visible');
          currentImage--;
          if(currentImage < 0) {
            currentImage = chairImages.length -1;
          }
          chairImages[currentImage].classList.add('visible');
        });

});
