
let forca = document.querySelector('#butF');
forca.addEventListener('click', forca1);
forca.addEventListener('click', loadImage1);
forca.addEventListener('click', instantiateBubble1);
let peso = document.querySelector("#butP");
peso.addEventListener('click', peso1);
peso.addEventListener('click', loadImage);
peso.addEventListener('click', instantiateBubble);


//FORÇA
//FORÇA
function forca1(){
  let m = document.querySelector('#massa').value;
  let a = document.querySelector('#aceleracao').value;

  if(a==0){
    window.alert('A aceleração é igual a zero, portanto não tem uma força..')
  }
  else{
  let force = (m * a);
  let forcaEl = document.querySelector('#Newtinho');
  forcaEl.value = force;
}
}

function loadImage1(path) {
    var img = new Image();
    img.src = path;
    return img;

}
var bubble = loadImage1('http://clipart.coolclips.com/480/vectors/tf05218/CoolClips_vc026016.png');
function instantiateBubble1() {
    var newBubble = bubble.cloneNode();
    newBubble.style.bottom= '0px';
    newBubble.style.width = '300px';
    newBubble.style.position = 'fixed';
    newBubble.style.transition = 'all 5s linear';
    newBubble.style.left = '-50px';
    newBubble.style.opacity = 1;
	newBubble.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';
    newBubble.style.zIndex = 10000;

    document.body.appendChild(newBubble);
    window.setTimeout(function() {
        newBubble.style.opacity = .5;
        newBubble.style.left = window.innerHeight + 'px';
    }, 100);
    (function(oldBubble) {
    	function removeElement() {
    		oldBubble.removeEventListener('transitionend', removeElement);
    		document.body.removeChild(oldBubble);
    	}
		oldBubble.addEventListener('transitionend', removeElement);
  }(newBubble));
}









//PESO
function peso1(){
  let m = document.querySelector('#massa').value;
  let a = document.querySelector('#aceleracao').value;

  if(a==0){
    window.alert('A aceleração da  gravidade é igual a zero, portanto não tem uma força peso..')
  }
  else{
  let pes = (m * a);
  let pesoEl = document.querySelector('#peso');
  pesoEl.value = pes;
}
}

function loadImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}
var bubbleEl = loadImage('https://s-media-cache-ak0.pinimg.com/originals/a1/ee/97/a1ee9796415e11f066f081f238a3a184.png');
function instantiateBubble() {
    var newBubbleEl = bubbleEl.cloneNode();
    newBubbleEl.style.left = '10px';
    newBubbleEl.style.width = '50px';
    newBubbleEl.style.position = 'fixed';
    newBubbleEl.style.transition = 'all 5s linear';
    newBubbleEl.style.top = '-50px';
    newBubbleEl.style.opacity = 1;
	newBubbleEl.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';
    newBubbleEl.style.zIndex = 10000;

    document.body.appendChild(newBubbleEl);
    window.setTimeout(function() {
        newBubbleEl.style.opacity = .5;
        newBubbleEl.style.top = window.innerHeight + 'px';
    }, 100);
    (function(oldBubbleEl) {
    	function removeElement() {
    		oldBubbleEl.removeEventListener('transitionend', removeElement);
    		document.body.removeChild(oldBubbleEl);
    	}
		oldBubbleEl.addEventListener('transitionend', removeElement);
  }(newBubbleEl));
}
