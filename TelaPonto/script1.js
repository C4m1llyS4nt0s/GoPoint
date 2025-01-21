function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  document.getElementById('horas').textContent = hours[0];
  document.getElementById('horas1').textContent = hours[1];
  document.getElementById('minutos').textContent = minutes[0];
  document.getElementById('minutos1').textContent = minutes[1];
}

setInterval(updateTime, 1000);
updateTime();

let isOn = false;

  function toggleSwitch() {
    const dragButton = document.querySelector(".dragButton");
    const label = document.querySelector(".label");

    if (isOn) {
      dragButton.style.transform = "translateX(0)";
      label.textContent = "Bater ponto"; // Volta ao estado inicial
    } else {
      dragButton.style.transform = "translateX(80px)";
      label.textContent = ""; // Atualiza para o estado alternativo
    }

    isOn = !isOn;
  }

function showMessage() {
      message.style.display = 'block';
}

function hideMessage() {
      message.style.display = 'none';
}
const nameMenu = document.querySelector("nameMenu")
const endpoint = ""
fetch(endpoint)
.then(res=> res.json())
.then(dados=> {
 console.log(dados)
 ola.innerHTML = dados.nome
})