// Sons
const somTaskConcluida = new Audio("sons/somLevelUp.mp3");
const somLevel = new Audio("sons/somTaskConcluida.mp3");

function tocarSom(som) {
  som.volume = 0.4;
  som.currentTime = 0;
  som.play();
}

// Usuário
let user = {
  nome: "",
  email: "",
  senha: "",
  nivel: 1,
  xp: 0,
  tarefasAtivas: [],
};

// Modal
const modal = document.getElementById("modal");

let msgModal = document.getElementById("msgModal");

function abrirModal(msg) {
  msgModal.textContent = msg;
  modal.style.display = "block";
}

// Confirm
// const confirmModal = document.getElementById("confirm");
// const confirmMsg = document.getElementById("confirm-msg");

// let confirmCallback = null;

// function confirmCustom(msg, callback) {
//   confirmMsg.textContent = msg;
//   confirmModal.style.display = "block";
//   confirmCallback = callback;
// }

// function confirmar() {
//   confirmModal.style.display = "none";
//   confirmCallback(true);
// }

// function cancelar() {
//   confirmModal.style.display = "none";
//   confirmCallback(false);
// }

function fecharModal() {
  modal.style.display = "none";
}

// Salvar / carregar usuário no LocalStorage
function salvarUsuario() {
  localStorage.setItem("taskgame_user", JSON.stringify(user));
}
function carregarUsuario() {
  let data = localStorage.getItem("taskgame_user");
  if (data) {
    user = JSON.parse(data);
    // Garante propriedades padrão caso não existam
    user.nome = user.nome || "";
    user.email = user.email || "";
    user.senha = user.senha || "";
    user.nivel = user.nivel || 1;
    user.xp = user.xp !== undefined ? user.xp : 0;
    user.tarefasAtivas = Array.isArray(user.tarefasAtivas)
      ? user.tarefasAtivas
      : [];

    return user;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "load") {
    initLoad();
  }

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

function initLoad() {
  carregarUsuario(user);

  if (user.tarefasAtivas.length === 0 && user.nome === "") {
    setTimeout(() => {
      window.location.href = "boasvindas.html";
    }, 3500);
  } else {
    setTimeout(() => {
      window.location.href = "home.html";
    }, 3500);
  }
}

function initLogin() {
  // Captura o botão e adiciona evento de clique
  document.getElementById("botaoLogin").addEventListener("click", function () {
    // Captura os valores dos inputs
    let nomeValor = document.getElementById("nome").value.trim();
    let emailValor = document.getElementById("email").value.trim();
    let senhaValor = document.getElementById("password").value.trim();

    // Validações
    if (!nomeValor) {
      abrirModal("Por favor, preencha o nome.");
      return;
    }

    if (nomeValor.length < 4) {
      abrirModal("O nome deve ter no mínimo 4 caracteres.");
      return;
    }

    if (!emailValor) {
      abrirModal("Por favor, preencha o email.");
      return;
    }

    // Validação de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailValor)) {
      abrirModal("Por favor, insira um email válido.");
      return;
    }

    if (!senhaValor) {
      abrirModal("Por favor, preencha a senha.");
      return;
    }

    if (senhaValor.length < 6) {
      abrirModal("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    // Se passou em todas as validações, salva os dados
    user.nome = nomeValor;
    user.email = emailValor;
    user.senha = senhaValor;

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
      <p><span style="color: #0d9488">Tarefa: </span>${tarefa.nome}</p>
      <br />
      <p style="color: #1e293b" ><span style="color: #0d9488";>Nível: </span>${tarefa.dificuldade}</p>
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
      let idsSelecionados = getTarefasSelecionadas();

      // Validação: precisa selecionar pelo menos 5 tarefas
      if (idsSelecionados.length < 5) {
        abrirModal("Selecione pelo menos 5 tarefas.");
        return false; // indica falha
      }

      user.tarefasAtivas = tarefasBase
        .filter((tarefa) => idsSelecionados.includes(tarefa.id))
        .map((t) => ({ ...t, concluida: false }));

      return true; // indica sucesso
    }

    // Executa validação e só segue em frente se tiver sucesso
    const validaOk = salvarTarefasSelecionadas();
    if (!validaOk) return; // não salva nem navega

    salvarUsuario();

    console.log("Objeto atualizado:", user.tarefasAtivas);

    setTimeout(function () {
      window.location.href = "./apresentacao2.html";
    }, 1000);
  });
}

function initHome() {
  carregarUsuario(user);

  if (user.xp === null) {
    user.xp = 0;
  }

  console.log(localStorage.taskgame_user);

  // <i class="fa-solid fa-user"></i>
  const profile = document.getElementById("profile");
  profile.innerHTML = `<div class="perfil">
  <h1 id="userName">${user.nome}</h1>
  <h2 id="nivel">Nível ${user.nivel}</h2>
    </div>
    <div class="level">
      <div class="text">
        <p id="score">${user.xp} / ${calcularXPRequisito(user.nivel)}</p>
        <p style="color: #1e293b">XP</p>
      </div>
      <div class="progress" id="progressBar">
        <div class="markup" id="markup"></div>
      </div>
    </div>`;

  const selectList = document.getElementById("taskSelect");

  function renderizarTarefasSelecionadas(lista) {
    selectList.innerHTML = "";

    lista.forEach((tarefa) => {
      const itemSelect = document.createElement("div");

      itemSelect.innerHTML = `
      <div class="bar">
      <input type="checkbox" data-id="${tarefa.id}">
      <p><span style="color: #0d9488">Tarefa: </span>${tarefa.nome}</p>
      <br />
      <p style="color: #1e293b" ><span style="color: #0d9488">Nível: </span>${tarefa.dificuldade}</p>
      <p id="xp">+${tarefa.xp} XP</p>
      </div>
      `;

      selectList.appendChild(itemSelect);
    });
  }
  renderizarTarefasSelecionadas(user.tarefasAtivas);

  // Marca checkboxes já concluídas e adiciona listener para conclusão
  function inicializarEventosTarefas() {
    // marca as já concluídas (caso existam)
    user.tarefasAtivas.forEach((tarefa) => {
      if (tarefa.concluida) {
        const cb = selectList.querySelector(`input[data-id="${tarefa.id}"]`);
        if (cb) {
          cb.checked = true;
          cb.disabled = true;
          cb.closest(".bar")?.classList.add("completed");
        }
      }
    });

    // Delegation: confirmar antes de marcar concluída
    selectList.addEventListener("change", function (e) {
      const target = e.target;
      if (!target.matches('input[type="checkbox"]')) return;

      const id = Number(target.dataset.id);
      const tarefa = user.tarefasAtivas.find((t) => t.id === id);
      if (!tarefa) return;

      // Só processa quando marcado (não permitir desmarcar)
      if (target.checked) {
        const confirmar = confirm(
          `Confirmar conclusão da tarefa:\n${tarefa.nome}?`,
        );
        if (!confirmar) {
          target.checked = false;
          return;
        }

        tocarSom(somTaskConcluida);

        // Marca como concluída e impede desmarcar
        target.checked = true;
        target.disabled = true;
        const bar = target.closest(".bar");
        if (bar) bar.classList.add("completed");

        // Atualiza estado e concede XP
        tarefa.concluida = true;
        const adicionou = adicionarXP(tarefa.xp);
        salvarUsuario();

        // Atualiza UI imediata: score e nível
        const scoreEl = document.getElementById("score");
        const nivelEl = document.getElementById("nivel");
        if (scoreEl) {
          scoreEl.textContent = `${user.xp} / ${calcularXPRequisito(user.nivel)}`;
        }
        if (nivelEl) {
          nivelEl.textContent = `Nível ${user.nivel}`;
        }

        // Atualiza barra de progresso
        porcentagem = (user.xp / calcularXPRequisito(user.nivel)) * 100;
        encherBarra();
      } else {
        // Se por algum motivo tentou desmarcar, restaura para disabled
        target.checked = true;
        target.disabled = true;
      }
    });
  }

  inicializarEventosTarefas();

  // Sistema de Níveis
  function calcularXPRequisito(nivel) {
    // Nível 1: 180 XP, Nível 2: 240 XP, Nível 3: 300 XP, etc.
    return 180 + (nivel - 1) * 60;
  }

  function adicionarXP(quantidade) {
    if (
      typeof quantidade !== "number" ||
      isNaN(quantidade) ||
      quantidade <= 0
    ) {
      console.warn("adicionarXP: quantidade inválida", quantidade);
      return false;
    }

    user.xp = (user.xp || 0) + quantidade;

    // Verifica se o usuário subiu de nível
    while (user.xp >= calcularXPRequisito(user.nivel)) {
      user.xp -= calcularXPRequisito(user.nivel);
      user.nivel++;
      abrirModal(`Você subiu para o nível ${user.nivel}!`);
     
      tocarSom(somLevelUp);
    }

    salvarUsuario();
    return true;
  }

  function obterXPAtual() {
    return user.xp;
  }

  function obterXPRequisito() {
    return calcularXPRequisito(user.nivel);
  }

  let porcentagem = (user.xp / calcularXPRequisito(user.nivel)) * 100;
  function encherBarra() {
    document.getElementById("progressBar").style.background =
      `linear-gradient(90deg, #0d9488 ${porcentagem}%, #1e293b 0)`;
    if (porcentagem === 0) {
      document.getElementById("markup").style.left = `0%`;
    } else {
      document.getElementById("markup").style.left =
        `calc(${porcentagem}% - 0.5rem)`;
    }
  }
  adicionarXP();
  encherBarra();
}
