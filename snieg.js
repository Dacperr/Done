function czas()
{
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    if (miesiac=1) miesiac = "Styczeń";
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if (godzina<10) godzina = "0" + godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta = "0" + minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda<10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML = 
      godzina + ":" + minuta + ":" + sekunda;

    setTimeout("czas()",1000);
}


function renderSnowContainer() {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';

    document.body.appendChild(snowContainer);

    return snowContainer;
}

const flakeImages = [
    'img/flake.png',
    'img/flake2.png',
    'img/flake3.png',
];
renderSnowContainer();

function renderFlake(snowContainer) {
    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake-container');

    flakeContainer.style.left= `${Math.random() * 100}%`;
    flakeContainer.style.transform = `scale(${Math.random()})`;

    const img = document.createElement('img');
    img.src = flakeImages[Math.floor(Math.random() * flakeImages.length)];

    flakeContainer.appendChild(img);

    snowContainer.appendChild(flakeContainer);

    setTimeout(renderFlake, 500, snowContainer);
}

const snowContainer = renderSnowContainer();
renderFlake(snowContainer);


