const users = [
  { name: 'Usuário1', module: 'Módulo X' },
  { name: 'Usuário2', module: 'Módulo Y' },
  { name: 'Usuário3', module: 'Módulo Z' },
];

const searchInput = document.getElementById('searchInput');

function filterUsers() {
    const searchValue = searchInput.value.toLowerCase();
    const userList = document.getElementById('userList');
    const body = document.body;

    // Controlar estados
    if(searchValue.length > 0) {
        body.classList.add('search-active');
    } else {
        body.classList.remove('search-active'); 
    }

    // Filtragem
    userList.innerHTML = '';
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchValue)
    );

    filteredUsers.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <div class="info">
                <span class="name">${user.name}</span>
                <span class="module">${user.module}</span>
            </div>
            <button onclick="goToNewScreen(${users.indexOf(user)})">Acessar</button>
        `;
        userList.appendChild(userCard);
    });
}

function goToNewScreen(userIndex) {
  const user = users[userIndex];
  localStorage.setItem('selectedUser', JSON.stringify(user));
  window.location.href = '../TelaPonto/TelaPonto.html';
}

// Eventos de focus/blur
searchInput.addEventListener('focus', () => {
    document.body.classList.add('search-active');
});

searchInput.addEventListener('blur', () => {
    if(!searchInput.value) {
        document.body.classList.remove('search-active');
    }
});