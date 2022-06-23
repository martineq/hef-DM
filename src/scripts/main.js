
////@ts-check // Ver uso de @ts-check para archivos JS, ya que da advertencias propias de TypeScript
"use strict";

// Agrego la cabecera a la tabla existente en el html
function addHeader() {
	const listHeader = document.querySelector("#list-header");				// Obtengo acceso a la cabecera de la tabla de datos (el thead)
	const headerTemplate = document.querySelector("#header-template");		// Obtengo acceso al template de la cabecera para la tabla de datos

	// Obtengo los datos preparados para cargar una cabecera
	const headerData = readHeaderFromSource();

	// Creo una copia de la cabecera a insertar 
	const documentHeader = headerTemplate.content.cloneNode(true);	// Devuelve un duplicado del nodo en el que este método fue llamado. Parámetros: externalNode -> "deep" (Opcional) true si los hijos del nodo también deben ser clonados, o false para clonar únicamente al nodo.

	// Cargo los datos de la cabecera obtenida
	// "for..in" está diseñado para iterar sobre las propiedades de un objeto, obteniendo la clave de cada propiedad. Usando esta clave en combinación con la sintaxis de corchetes del objeto se obtienen los valores del mismo.
	for(const hd in headerData) {
		updateInnerTextElementFromQuery(`#${hd}`,documentHeader.querySelector(`#${hd}`),headerData[hd]);
	}

	// Inserto la cabecera
	listHeader.appendChild(documentHeader);	// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}

// Agrego registros con datos a la tabla existente en el html
function addRows() {
	const documentList = document.querySelector("#document-list");			// Obtengo acceso a la tabla de datos (el tbody)
	const documentTemplate = document.querySelector("#document-template");	// Obtengo acceso al template de registro para la tabla de datos

	// Obtengo los datos preparados para cargar un registro
	const documentData = readRowFromSource();

	// Repito la secuencia para simular la lectura de varios registros
	for (let i = 0; i < 10; i++) {

		// Creo una copia de un registro a insertar
		const documentElement = documentTemplate.content.cloneNode(true);

		// Cargo los datos del registro obtenido
		for (const dd in documentData) {
			updateInnerTextElementFromQuery(`#${dd}`,documentElement.querySelector(`#${dd}`),documentData[dd]);
		}

		// Inserto el registro
		documentList.appendChild(documentElement);
	}
}

// Abstracción que representa la lectura de la cabecera de una tabla desde una fuente externa 
function readHeaderFromSource() {

	// Datos preparados para cargar un registro, simulan obtenerse desde una fuente
	const headerFromSource = {
		templateHeaderN1: "Agente",
		templateHeaderN2: "Fecha",
		templateHeaderN3: "Empresa",
		templateHeaderN4: "Numero Documentacion",
		templateHeaderN5: "Nro Comprobante A",
		templateHeaderN6: "NCA Duplicado",
		templateHeaderN7: "Nro Comprobante B",
		templateHeaderN8: "NCB Duplicado",
		templateHeaderN9: "Monto Comprobante B",
		templateHeaderN10: "Fecha Comprobante B"
	};

	return headerFromSource;
}

// Abstracción que representa la lectura de la fila de una tabla desde una fuente externa 
function readRowFromSource() {

	// Datos preparados para cargar un registro, simulan obtenerse desde una fuente
	const rowFromSource = {
		templateDocumentN1: "Wang",
		templateDocumentN2: "11/Nov/2021",
		templateDocumentN3: "Empresa XYZ",
		templateDocumentN4: "474747/2021",
		templateDocumentN5: "595959",
		templateDocumentN6: "",
		templateDocumentN7: "262626",
		templateDocumentN8: "",
		templateDocumentN9: "689.99",
		templateDocumentN10: "11/Nov/2021"
	};

	return rowFromSource;
}

// Actualizo el InnerText con el valor <text> para un elemento obtenido por <query> a partir de un <selector>
function updateInnerTextElementFromQuery(selector,query,text) {
	if(query!== null) { 
		query.innerText = text; 
	} else {
		console.error(`Elemento ${selector} no encontrado.`);
	}
}

// Agrego en una tabla, la cabecera y el cuerpo con los datos
function addTable() {
	// Verifica si el browser soporta la funcionalidad <template> de HTML, buscando la existencia del atributo 'content'
	if ('content' in document.createElement('template')) {
		addHeader();
		addRows();
	} else {
		console.error("El browser no soporta la funcionalidad <template> de HTML.");
	}
}

// Agrego un listener el cual se activará al cargar completamente el documento HTML 
document.addEventListener("DOMContentLoaded", event => addTable());
