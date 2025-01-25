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
    const toggleButton = document.querySelector(".toggle-button");
    const label = document.querySelector(".label");
    const message = document.getElementById("message");

    if (isOn) {
        dragButton.style.transform = "translateX(0px)";
        label.textContent = "Bater ponto";
        toggleButton.classList.remove("active");
        dragButton.classList.remove("active");
        message.style.opacity = "0"; // Esconde a mensagem
    } else {
        dragButton.style.transform = "translateX(142px)";
        label.textContent = ""; // Remove o texto do botão
        toggleButton.classList.add("active"); // Muda a cor do botão
        dragButton.classList.add("active"); // Muda a cor do botão de arrastar
        message.textContent = "Você bateu o ponto!"; // Exibe a mensagem
        message.style.opacity = "1"; // Mostra a mensagem

        // Redireciona para outra tela após 2 segundos
        setTimeout(() => {
            window.location.href = "../TelaIntro/TelaIntro.html"; // Substitua pelo link da próxima tela
        }, 2000); // 2000ms = 2 segundos
    }

    isOn = !isOn;
}