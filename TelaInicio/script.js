const users = [
  { name: 'Usuário1', module: 'Módulo X' },
  { name: 'Usuário2', module: 'Módulo Y' },
  { name: 'Usuário3', module: 'Módulo Z' },
];

function filterUsers() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const userList = document.getElementById('userList');

  // Limpa a lista de usuários
  userList.innerHTML = '';

  // Filtra os usuários com base no texto pesquisado
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchInput)
  );

  // Renderiza os usuários filtrados
  filteredUsers.forEach((user, index) => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <div class="info">
        <span class="name">${user.name}</span>
        <span class="module">${user.module}</span>
      </div>
      <button onclick="goToNewScreen(${index})">Acessar</button>
    `;
    userList.appendChild(userCard);
  });
}

function goToNewScreen(userIndex) {
  const user = users[userIndex];

  // Salva o usuário selecionado no localStorage
  localStorage.setItem('selectedUser', JSON.stringify(user));

  // Redireciona para outra tela
  window.location.href = './'; // Modifique a URL para a tela desejada
}
