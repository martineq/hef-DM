const newTask = document.querySelector("#new-task-input");  // document.querySelector() Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores.
const addTaskBtn = document.querySelector(".add-task-btn");
const removeCompleteBtn = document.querySelector(".remove-complete-btn");
const taskList = document.querySelector(".task-list");
const taskTemplate = document.querySelector("#task-template");
let id = 1;

// Agrego linstener de evento "enter" (keyCode === 13) para agregar la tarea
newTask.addEventListener("keyup", (e) => {  // addEventListener() Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo  documento , una ventana o un  XMLHttpRequest. Parámetros (*tipo*: Una cadena representando el  tipo de evento a escuchar. , *listener*: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre. Debe ser un objeto implementando la interfaz EventListener o solo una function en JavaScript.)
  if (e.keyCode === 13 && inputValid()) {  //  (keyCode === 13): Tecla Enter
    addTask();
  }
});

// Agrego linstener de evento "click" para agregar la tarea
addTaskBtn.addEventListener("click", () => { // "() => {}" Arrow Functions (Fucnión flecha)
  if (inputValid()) {
    addTask();
  }
});

// Agrego linstener de evento "click" para borrar las tareas marcadas como completadas
removeCompleteBtn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");			// querySelectorAll() Devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
  tasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) {
      task.remove();
    }
  });
});

// Función para agregar tareas al listado
function addTask() {
  const taskElement = document.importNode(taskTemplate.content, true); // Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual. Parámetros: externalNode -> El nodo externo a ser importado, deep -> Un booleano que indica si los descendientes del nodo deben ser importados también.
  const checkbox = taskElement.querySelector("input");
  checkbox.id = id;
  const label = taskElement.querySelector("label");
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = "";
  id++;
}

// Función para verificar que el valor de tarea no se encuentre vacío
function inputValid() {
  return newTask.value !== "";
}
