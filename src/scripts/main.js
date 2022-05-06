"use strict";

// Función para agregar la cabecera a la tabla
function addHeader() {
	const listHeader = document.querySelector(".list-header");								// Obtengo acceso a la cabecera de la tabla de datos (el thead)
	const headerTemplate = document.querySelector("#header-template");				// Obtengo acceso al template de la cabecera para la tabla de datos
	
	// Creo una copia del header a insertar
	const documentHeader = document.importNode(headerTemplate.content, true); // Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual. Parámetros: externalNode -> El nodo externo a ser importado, deep -> Un booleano que indica si los descendientes del nodo deben ser importados también.
	
	// Inserto el registro
	listHeader.appendChild(documentHeader);	// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}

// Función para agregar registros
function addDocument() {
	const documentList = document.querySelector(".document-list");						// Obtengo acceso a la tabla de datos (el tbody)
	const documentTemplate = document.querySelector("#document-template");		// Obtengo acceso al template de registro para la tabla de datos
	
	// Repito la secuencia para varios registros
	for (let i = 0; i < 10; i++) {
		// Creo una copia de un registro a insertar
		const documentElement = document.importNode(documentTemplate.content, true); 
		
		// Inserto el registro
		documentList.appendChild(documentElement);	// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
	} 
}

// Agrego un listener para que se active al cargar completamente el docummento HTML 
document.addEventListener("DOMContentLoaded", function(event) { addHeader(); addDocument(); } );
