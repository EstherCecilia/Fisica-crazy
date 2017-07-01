window.alert('Vc tem 10 tentativas!');
      let audio = document.getElementById('audio');

let contador = 0,
        contadorEl = document.querySelector('#Sheldon');
        contadores = document.querySelector('#contador');

      contadorEl.addEventListener('click', function() {
        contador++;
        contadores.innerHTML = contador;

        let bazinga2 = document.querySelector('.bazinga2');
        if(contadores.innerHTML==10){
          window.alert('Você perdeu!');
          window.alert('Suas tentativas acabaram');
          let colocou = bazinga2.classList.add('perdeu');
        }

        if(contadores.innerHTML>=10){
          contador = 0 - 1;

        }
        if(contadores.innerHTML==0){
          let colocou = bazinga2.classList.remove('perdeu');
        }
      });

    function loadImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}
var bubbleEl = loadImage('https://vignette1.wikia.nocookie.net/mugen/images/a/a5/SheldonCooper.png/revision/latest?cb=20130609055738');

function instantiateBubble() {
    var newBubbleEl = bubbleEl.cloneNode();
    newBubbleEl.style.position = 'fixed';
    newBubbleEl.style.transition = 'all 0.8s linear';
    newBubbleEl.style.width = '100px';
    newBubbleEl.style.top = '50%';
    newBubbleEl.style.bottom = '50%';
    newBubbleEl.style.opacity = 1;
	newBubbleEl.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';
    newBubbleEl.style.zIndex = 10000;

    contEl = newBubbleEl;
    contEl.addEventListener('click', function() {
      window.alert('Parabéns você VENCEU!');
      let bazinga1 = document.querySelector('.bazinga1');
      let colocou = bazinga1.classList.add('venceu');
      window.alert('Reinicie a pagina para jogar de novo..');


    });

    audio.play();
    document.body.appendChild(newBubbleEl);
    window.setTimeout(function() {
        newBubbleEl.style.bottom = window.innerHeight + 'px';
        newBubbleEl.style.left = Math.random() * window.innerWidth + 'px';
    }, 100);
    (function(oldBubbleEl) {
    	function removeElement() {
    		oldBubbleEl.removeEventListener('transitionend', removeElement);
    		document.body.removeChild(oldBubbleEl);
    	}
		oldBubbleEl.addEventListener('transitionend', removeElement);
    }(newBubbleEl));

    window.setTimeout(instantiateBubble, 5000 + Math.random()*3000)

    return newBubbleEl;
}


instantiateBubble();
