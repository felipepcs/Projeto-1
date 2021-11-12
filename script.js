const btnCalculate = document.getElementById('calculate');

function calculateCorrida() {

  const name = document.getElementById('name').value;
  const weight = document.getElementById('weight').value;
  const distance = document.getElementById('distance').value;
  const time = document.getElementById('time').value;

  const result = document.getElementById('resultado');
  const resultName = document.getElementById('resultName');
  const resultText = document.getElementById('resultText');

  if (name !== '' && weight !== '' && distance !== '' && time !== '') {

    const timeSplitted = time.split(':');

    const hour = parseInt(timeSplitted[0]);
    const minutes = parseInt(timeSplitted[1]);
    const seconds = parseInt(timeSplitted[2]);

    const allHours = hour + (minutes/60) + (seconds/3600);
    const allMinutes = allHours*60;

    const speed = (distance/(allHours)).toFixed(2);
    const pace = (60 / speed).toFixed(2);
    const calories = (speed * weight * 0.0175 * (allMinutes)).toFixed(2)

    resultName.textContent = `Olá, ${name}!`;
    resultText.textContent = `Você percorreu ${distance}km em ${hour}h, ${minutes}min e ${seconds}s. 
    Isso quer dizer que a sua velocidade média foi de ${speed} km/h, o que o corresponde a um pace de ${pace}min/km.
    Com ${weight}kg, você gastou cerca de ${calories} cal`;
  } else {

    result.textContent = 'Atenção! Você precisa preencher todos os campos.';

    resultName.textContent = '';
    resultText.textContent = '';
  }
}

btnCalculate.addEventListener('click', calculateCorrida);