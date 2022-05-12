"use strict";

// Función para agregar la cabecera a la tabla
function addHeader() {
	const listHeader = document.querySelector(".list-header");				// Obtengo acceso a la cabecera de la tabla de datos (el thead)
	const headerTemplate = document.querySelector("#header-template");		// Obtengo acceso al template de la cabecera para la tabla de datos
	
	// Datos preparados para cargar una cabecera genérica
	const headerData = {	templateHeaderN1:"Agente",
							templateHeaderN2:"Fecha",
							templateHeaderN3:"Empresa",
							templateHeaderN4:"Numero Documentacion",
							templateHeaderN5:"Nro Comprobante A",
							templateHeaderN6:"NCA Duplicado",
							templateHeaderN7:"Nro Comprobante B",
							templateHeaderN8:"NCB Duplicado",
							templateHeaderN9:"Monto Comprobante B",
							templateHeaderN10:"Fecha Comprobante B"};

	// Creo una copia de la cabecera a insertar
	const documentHeader = document.importNode(headerTemplate.content, true); // Crea una copia de un nodo desde un documento externo para ser insertado en el documento actual. Parámetros: externalNode -> El nodo externo a ser importado, deep -> Un booleano que indica si los descendientes del nodo deben ser importados también.
	
	// Cargo los datos de la cabecera genérica
	for(const hd in headerData) { 
		documentHeader.querySelector("#"+hd).innerText = headerData[hd];
	}

	// Inserto la cabecera
	listHeader.appendChild(documentHeader);	// Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}

// Función para agregar registros
function addDocument() {
	const documentList = document.querySelector(".document-list");			// Obtengo acceso a la tabla de datos (el tbody)
	const documentTemplate = document.querySelector("#document-template");	// Obtengo acceso al template de registro para la tabla de datos
	
	// Datos preparados para cargar un registro genérico
	const documentData = {	templateDocumentN1:"Wang",
							templateDocumentN2:"11/Nov/2021",
							templateDocumentN3:"Empresa XYZ",
							templateDocumentN4:"474747/2021",
							templateDocumentN5:"595959",
							templateDocumentN6:"",
							templateDocumentN7:"262626",
							templateDocumentN8:"",
							templateDocumentN9:"689.99",
							templateDocumentN10:"11/Nov/2021"};
	
	// Repito la secuencia para varios registros
	for (let i = 0; i < 10; i++) {
		// Creo una copia de un registro a insertar
		const documentElement = document.importNode(documentTemplate.content, true); 
		
		// Cargo los datos del registro genérico
		for(const dd in documentData) { 
			documentElement.querySelector("#"+dd).innerText = documentData[dd];
		}
		
		// Inserto el registro
		documentList.appendChild(documentElement);
	} 	
}

// Agrego un listener para que se active al cargar completamente el docummento HTML 
document.addEventListener("DOMContentLoaded", function(event) { addHeader(); addDocument(); } );
