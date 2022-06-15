
////@ts-check // TODO: Ver uso de @ts-check para archivos JS, ya que da advertencias propias de TypeScript
"use strict";

// Función para agregar la cabecera a la tabla
function addHeader() {
	const listHeader = document.querySelector(".list-header");				// Obtengo acceso a la cabecera de la tabla de datos (el thead)
	const headerTemplate = document.querySelector("#header-template");		// Obtengo acceso al template de la cabecera para la tabla de datos

	// Datos preparados para cargar una cabecera genérica
	const headerData = {
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

	// Creo una copia de la cabecera a insertar 
	const documentHeader = headerTemplate.content.cloneNode(true);	// Devuelve un duplicado del nodo en el que este método fue llamado. Parámetros: externalNode -> "deep" (Opcional) true si los hijos del nodo también deben ser clonados, o false para clonar únicamente al nodo.

	// Cargo los datos de la cabecera genérica
	for (const hd in headerData) {
		documentHeader.querySelector(`#${hd}`).innerText = headerData[hd];
	}

	// Inserto la cabecera
	listHeader.appendChild(documentHeader);	// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}

// Función para agregar registros con datos en la tabla
function addRows() {
	const documentList = document.querySelector(".document-list");			// Obtengo acceso a la tabla de datos (el tbody)
	const documentTemplate = document.querySelector("#document-template");	// Obtengo acceso al template de registro para la tabla de datos

	// Datos preparados para cargar un registro genérico
	const documentData = {
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

	// Repito la secuencia para varios registros
	for (let i = 0; i < 10; i++) {
		// Creo una copia de un registro a insertar
		const documentElement = documentTemplate.content.cloneNode(true);

		// Cargo los datos del registro genérico
		for (const dd in documentData) {
			documentElement.querySelector(`#${dd}`).innerText = documentData[dd];
		}

		// Inserto el registro
		documentList.appendChild(documentElement);
	}
}

// Función para agregar en una tabla, la cabecera y el cuerpo con los datos
function addTable() {
	// Verifica si el browser soporta la funcionalidad <template> de HTML, buscando la existencia del atributo 'content'
	if ('content' in document.createElement('template')) {
		addHeader();
		addRows();
	} else {
		console.error("El browser no soporta la funcionalidad <template> de HTML.");
	}
}

// Agrego un listener el cual se activará al cargar completamente el docummento HTML 
document.addEventListener("DOMContentLoaded", event => addTable());  // TODO: ¿Se puede poner directamente la función?
