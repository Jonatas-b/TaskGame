let user = {
  nome: "",
  email: "",
  senha: "",
  nivel: 1,
  xp: 0,
  tarefasAtivas: [],
};

// Captura o botão e adiciona evento de clique
document.getElementById("botaoLogin").addEventListener("click", function () {
  // Captura o valor do input
  const nomeValor = document.getElementById("nome").value.trim();
  const emailValor = document.getElementById("email").value.trim();
  const senhaValor = document.getElementById("password").value.trim();

  // Validação simples
  if (nomeValor === "") {
    alert("Por favor, digite um nome.");
    return;
  }
  if (emailValor === "") {
    alert("Por favor, digite um email.");
    return;
  }
  if (senhaValor === "") {
    alert("Por favor, digite uma senha.");
    return;
  }

  // Salva no objeto
  user.nome = nomeValor;
  user.email = emailValor;
  user.senha = senhaValor;

  // salvarUsuario(); Será usado para salvar no localStorage

  // Mostra no console para conferência
  console.log("Objeto atualizado:", user);

  // Muda a página com atraso após salvar o usuário
  setTimeout(function () {
    window.location.href = "./apresentacao1.html";
  }, 3000);
});

// LISTA
const tarefasBase = [
// Fácil
  { id: 1, nome: "Escovar os dentes", xp: 20, dificuldade: "Fácil", categoria: "saude"},
  { id: 2, nome: "Tomar banho", xp: 20, dificuldade: "Fácil", categoria: "saude"},
  { id: 3, nome: "Lavar o rosto", xp: 20, dificuldade: "Fácil", categoria: "saude"},
  { id: 4, nome: "Beber 1 copo de água", xp: 20, dificuldade: "Fácil", categoria: "saude"},
  { id: 5, nome: "Arrumar a cama", xp: 20, dificuldade: "Fácil", categoria: "casa"},
  { id: 6, nome: "Jogar o lixo fora", xp: 20, dificuldade: "Fácil", categoria: "casa"},
  { id: 7, nome: "Checar agenda do dia", xp: 20, dificuldade: "Fácil", categoria: "organizacao"},
  { id: 8, nome: "Atualizar lista de tarefas", xp: 20, dificuldade: "Fácil", categoria: "organizacao"},
  { id: 9, nome: "Alongar por 5 minutos", xp: 20, dificuldade: "Fácil", categoria: "saude"},
  { id: 10, nome: "Caminhar 10 minutos", xp: 20, dificuldade: "Fácil", categoria: "saude"},
// Médio
  { id: 11, nome: "Lavar a louça", xp: 50, dificuldade: "Médio", categoria: "casa"},
  { id: 12, nome: "Varrer um cômodo", xp: 50, dificuldade: "Médio", categoria: "casa"},
  { id: 13, nome: "Lavar roupas", xp: 50, dificuldade: "Médio", categoria: "casa"},
  { id: 14, nome: "Guardar roupas dobradas", xp: 50, dificuldade: "Médio", categoria: "casa"},
  { id: 15, nome: "Limpar o banheiro", xp: 50, dificuldade: "Médio", categoria: "casa"},
  { id: 16, nome: "Estudar por 30 minutos", xp: 50, dificuldade: "Médio", categoria: "estudo"},
  { id: 17, nome: "Ler 10 páginas", xp: 50, dificuldade: "Médio", categoria: "estudo"},
  { id: 18, nome: "Caminhar por 30 minutos", xp: 50, dificuldade: "Médio", categoria: "saude"},
  { id: 19, nome: "Treinar em casa", xp: 50, dificuldade: "Médio", categoria: "saude"},
  { id: 20, nome: "Cuidar da postura por 1 hora", xp: 50, dificuldade: "Médio", categoria: "saude"},
  { id: 21, nome: "Limpar e-mails antigos", xp: 50, dificuldade: "Médio", categoria: "organizacao"},
  { id: 22, nome: "Fazer backup do celular", xp: 50, dificuldade: "Médio", categoria: "organizacao"},
  { id: 23, nome: "Organizar as pastas no PC", xp: 50, dificuldade: "Médio", categoria: "organizacao"},
  { id: 24, nome: "Reduzir uso de redes por 1 hora", xp: 50, dificuldade: "Médio", categoria: "saude"},
// Difícil
  { id: 25, nome: "Limpar a casa inteira", xp: 80, dificuldade: "Difícil", categoria: "casa"},
  { id: 26, nome: "Organizar guarda-roupa", xp: 80, dificuldade: "Difícil", categoria: "casa"},
  { id: 27, nome: "Fazer compra do mês", xp: 80, dificuldade: "Difícil", categoria: "casa"},
  { id: 28, nome: "Preparar refeições do dia", xp: 80, dificuldade: "Difícil", categoria: "casa"},
  { id: 29, nome: "Estudar 2 horas focado", xp: 80, dificuldade: "Difícil", categoria: "estudo"},
  { id: 30, nome: "Revisar estudo do dia", xp: 80, dificuldade: "Difícil", categoria: "estudo"},
  { id: 31, nome: "Caminhar 1 hora", xp: 80, dificuldade: "Difícil", categoria: "saude"},
  { id: 32, nome: "Ficar 24 horas sem redes sociais", xp: 80, dificuldade: "Difícil", categoria: "saude"},
  { id: 33, nome: "Organizar finanças do mês", xp: 80, dificuldade: "Difícil", categoria: "organizacao"},
  { id: 34, nome: "Organizar agenda inteira", xp: 80, dificuldade: "Difícil", categoria: "organizacao"},
]

const listaEl = document.getElementById("taskList");

function renderizarTarefas(lista) {
  listaEl.innerHTML = "";

  lista.forEach(tarefa => {
    const item = document.createElement("div");
    item.classList.add("tarefas");

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

// function getTarefasSelecionadas() {
//   const checkboxes = document.querySelectorAll(
//     '#taskList input[type="checkbox"]:checked'
//   );

//   return Array.from(checkboxes).map(cb =>
//     Number(cb.dataset.id)
//   );
// }

// function salvarTarefasSelecionadas() {
//   const idsSelecionados = getTarefasSelecionadas();

//   if (idsSelecionados.length === 0) {
//     alert("Selecione pelo menos uma tarefa");
//     return;
//   }

//   user.tarefasAtivas = tarefasBase.filter(tarefa =>
//     idsSelecionados.includes(tarefa.id)
//   );

//   salvarUsuario(user);
//   window.location.href = "apresentacao2.html";
// }

// function atualizarPerfil(user) {
//   document.getElementById("userName").textContent = user.nome;
//   document.getElementById("nivel").textContent = user.nivel;
//   document.getElementById("score").textContent = user.xp;
// }

// user = carregarUsuario();
// if (user) atualizarPerfil(user);