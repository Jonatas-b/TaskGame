let user = {
  nome: "",
  email: "",
  senha: "",
  nivel: 1,
  xp: 0,
  tarefasAtivas: [],
};

function salvarUsuario() {
  localStorage.setItem("taskgame_user", JSON.stringify(user));
}
function carregarUsuario() {
  let data = localStorage.getItem("taskgame_user");
  if (data) {
    user = JSON.parse(data);
    return user;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "login") {
    initLogin();
  }

  if (page === "lista") {
    initLista();
  }

  if (page === "home") {
    initHome();
  }
});

function initLogin() {
  // Captura o botão e adiciona evento de clique
  document.getElementById("botaoLogin").addEventListener("click", function () {
    
    function getInputs() {
      // Captura o valor do input
      let nomeValor = document.getElementById("nome").value.trim();
      let emailValor = document.getElementById("email").value.trim();
      let senhaValor = document.getElementById("password").value.trim();
      
      // Validação simples
      if (!nomeValor || !emailValor || !senhaValor) {
      alert("Preencha todos os campos.");
      return;
    }

    // Salva no objeto
      user.nome = nomeValor;
      user.email = emailValor;
      user.senha = senhaValor;
    }

    getInputs();

    salvarUsuario(user); // Salva no localStorage

    // Mostra no console para conferência
    console.log("Objeto atualizado:", user);

    // Muda a página com atraso após salvar o usuário
    setTimeout(function () {
      window.location.href = "./apresentacao1.html";
    }, 3000);
  });
}

function initLista() {
  // LISTA
  const tarefasBase = [
    // Fácil
    {
      id: 1,
      nome: "Escovar os dentes",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    {
      id: 2,
      nome: "Tomar banho",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    {
      id: 3,
      nome: "Lavar o rosto",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    {
      id: 4,
      nome: "Beber 1 copo de água",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    {
      id: 5,
      nome: "Arrumar a cama",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "casa",
    },
    {
      id: 6,
      nome: "Jogar o lixo fora",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "casa",
    },
    {
      id: 7,
      nome: "Checar agenda do dia",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "organizacao",
    },
    {
      id: 8,
      nome: "Atualizar lista de tarefas",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "organizacao",
    },
    {
      id: 9,
      nome: "Alongar por 5 minutos",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    {
      id: 10,
      nome: "Caminhar 10 minutos",
      xp: 20,
      dificuldade: "Fácil",
      categoria: "saude",
    },
    // Médio
    {
      id: 11,
      nome: "Lavar a louça",
      xp: 50,
      dificuldade: "Médio",
      categoria: "casa",
    },
    {
      id: 12,
      nome: "Varrer um cômodo",
      xp: 50,
      dificuldade: "Médio",
      categoria: "casa",
    },
    {
      id: 13,
      nome: "Lavar roupas",
      xp: 50,
      dificuldade: "Médio",
      categoria: "casa",
    },
    {
      id: 14,
      nome: "Guardar roupas dobradas",
      xp: 50,
      dificuldade: "Médio",
      categoria: "casa",
    },
    {
      id: 15,
      nome: "Limpar o banheiro",
      xp: 50,
      dificuldade: "Médio",
      categoria: "casa",
    },
    {
      id: 16,
      nome: "Estudar por 30 minutos",
      xp: 50,
      dificuldade: "Médio",
      categoria: "estudo",
    },
    {
      id: 17,
      nome: "Ler 10 páginas",
      xp: 50,
      dificuldade: "Médio",
      categoria: "estudo",
    },
    {
      id: 18,
      nome: "Caminhar por 30 minutos",
      xp: 50,
      dificuldade: "Médio",
      categoria: "saude",
    },
    {
      id: 19,
      nome: "Treinar em casa",
      xp: 50,
      dificuldade: "Médio",
      categoria: "saude",
    },
    {
      id: 20,
      nome: "Cuidar da postura por 1h",
      xp: 50,
      dificuldade: "Médio",
      categoria: "saude",
    },
    {
      id: 21,
      nome: "Limpar e-mails antigos",
      xp: 50,
      dificuldade: "Médio",
      categoria: "organizacao",
    },
    {
      id: 22,
      nome: "Fazer backup do celular",
      xp: 50,
      dificuldade: "Médio",
      categoria: "organizacao",
    },
    {
      id: 23,
      nome: "Organizar as pastas no PC",
      xp: 50,
      dificuldade: "Médio",
      categoria: "organizacao",
    },
    {
      id: 24,
      nome: "1h sem redes sociais",
      xp: 50,
      dificuldade: "Médio",
      categoria: "saude",
    },
    // Difícil
    {
      id: 25,
      nome: "Limpar a casa inteira",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "casa",
    },
    {
      id: 26,
      nome: "Organizar guarda-roupa",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "casa",
    },
    {
      id: 27,
      nome: "Fazer compra do mês",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "casa",
    },
    {
      id: 28,
      nome: "Preparar refeições do dia",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "casa",
    },
    {
      id: 29,
      nome: "Estudar 2 horas focado",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "estudo",
    },
    {
      id: 30,
      nome: "Revisar estudo do dia",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "estudo",
    },
    {
      id: 31,
      nome: "Caminhar 1 hora",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "saude",
    },
    {
      id: 32,
      nome: "24h sem redes sociais",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "saude",
    },
    {
      id: 33,
      nome: "Organizar finanças do mês",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "organizacao",
    },
    {
      id: 34,
      nome: "Organizar agenda inteira",
      xp: 80,
      dificuldade: "Difícil",
      categoria: "organizacao",
    },
  ];

  const listaEl = document.getElementById("taskList");

  function renderizarTarefas(lista) {
    listaEl.innerHTML = "";

    lista.forEach((tarefa) => {
      const item = document.createElement("div");
      // item.classList.add("tarefas");

      item.innerHTML = `
      <div class="bar">
      <input type="checkbox" data-id="${tarefa.id}">
      <p><span>Tarefa: </span>${tarefa.nome}</p>
      <br />
      <p style="color: #1e293b" ><span>Nível: </span>${tarefa.dificuldade}</p>
      </div>
      `;

      listaEl.appendChild(item);
    });
  }
  renderizarTarefas(tarefasBase);


  // Eventos após clique no botão
  document.getElementById("botaoLista").addEventListener("click", function () {
    carregarUsuario();

    // Filtra tarefas selecionadas
  function getTarefasSelecionadas() {
    const checkboxes = document.querySelectorAll(
      '#taskList input[type="checkbox"]:checked',
    );

    return Array.from(checkboxes).map((cb) => Number(cb.dataset.id));
  }

    // Salva tarefas selecionadas no objeto
    function salvarTarefasSelecionadas() {
      const idsSelecionados = getTarefasSelecionadas();

      if (idsSelecionados.length <= 4) {
        alert("Selecione pelo menos 5 tarefas");
        return;
      }

      user.tarefasAtivas = tarefasBase.filter((tarefa) =>
        idsSelecionados.includes(tarefa.id),
      );
    }

    salvarTarefasSelecionadas();
    salvarUsuario();

    console.log("Objeto atualizado:", user.tarefasAtivas);

    setTimeout(function () {
      window.location.href = "./apresentacao2.html";
    }, 3000);
  });
}

function initHome() {
  carregarUsuario(user);
  console.log(localStorage.taskgame_user)

  const profile = document.getElementById("profile");
  profile.innerHTML = `<div class="perfil">
      <h1 id="userName">${user.nome}</h1>
      <h2 id="nivel">Nível ${user.nivel}</h2>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="level">
      <div class="text">
        <p id="score">${user.xp}  / 1000</p>
        <p style="color: #1e293b">XP</p>
      </div>
      <div class="progress" id="progressBar">
        <div class="markup"></div>
      </div>
    </div>`
}
