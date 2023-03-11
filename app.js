const card = document.querySelector('.card');

document.body.addEventListener('mousemove', ({ pageX, pageY }) => {
  const middlePageX = window.innerWidth / 2;
  const middlePageY = window.innerHeight / 2;

  const coordX = ((pageX - middlePageX) / middlePageX) * 45;
  const coordY = (((pageY - middlePageY) / middlePageY) * 45) * -1;

  card.animate({
    transform: `rotateX(${coordY}deg) rotateY(${coordX}deg)`,
  }, { fill: "forwards" });
});