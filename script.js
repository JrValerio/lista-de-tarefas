const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasks) {
  const ul = document.querySelector(".tasks__list");

  for (let i = 0; i < tasks.length; i++) {
    const list = tasks[i];
    const textList = createTaskItem(list);
    ul.appendChild(textList);
  }
}

function createTaskItem(task) {
  const listItem = document.createElement("li");
  const infoContainer = document.createElement("div");
  const typeSpan = document.createElement("span");
  const taskTitle = document.createElement("p");
  const removeButton = document.createElement("button");
  const taskType = task.type.toLowerCase()

  listItem.classList.add("task__item");
  infoContainer.classList.add("task-info__container");
  typeSpan.classList.add("task-type");
  removeButton.classList.add("task__button--remove-task");

  taskTitle.innerText = task.title;

  if (taskType == "urgente") {
    typeSpan.classList.add("span-urgent");
  } else if (taskType == "importante") {
    typeSpan.classList.add("span-important");
  } else {
    typeSpan.classList.add("span-normal");
  }

  listItem.appendChild(infoContainer);
  infoContainer.appendChild(typeSpan);
  infoContainer.appendChild(taskTitle);
  listItem.appendChild(removeButton);

  return listItem;
}

renderElements(tasks);
