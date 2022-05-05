const registryList = document.querySelector(".registry-list");
const registryTemplate = document.querySelector("#registry-template");

// Función para agregar registros
function addRegistry() {
  const registryElement = document.importNode(registryTemplate.content, true); // Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual. Parámetros: externalNode -> El nodo externo a ser importado, deep -> Un booleano que indica si los descendientes del nodo deben ser importados también.
	
  registryList.appendChild(registryElement);
 
}