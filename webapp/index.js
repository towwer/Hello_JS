<!-- Habilita el uso de las clases sap.m. -->
sap.ui.define([
	"sap/m/Button",           //clase sap.m.Button
	"sap/m/MessageToast",     //clase sap.m.MessageToast
	"sap/m/MessageBox",        //clase sap/m/MessageBox
	"sap/m/Image"
], function (Button1, MessageToast, MessageBox) {   //Declaración de función con las clases sap.m
	"use strict";

<!-- Funciones de acceso al core -->
		    sap.ui.getCore().attachInit(function(){
<!-- Muestra una Alerta -->
			MessageToast.show("Bienvenido Arthur!!!"); //Mensaje en Pantalla
			var oImage = new sap.m.Image({
				src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Logo_SAP.jpg",
				height: "400px"
			});
			oImage.placeAt("content");                           //Coloca la Imagen dentro de la página HTML
		    });
		    
<!-- sap-icon://[collection-name]/[icon-name] -->
<!-- https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons -->
	new Button1({                                   //Declaración de un botón
		text: "Ready1",                             //Texto del botón
        icon : sap.ui.core.IconPool.getIconURI("sap-ui5"),     //Retorna el URI del icono en el pool el cual tiene el collectionName y el iconName.
		press: function () {                        //Evento ejecutado al presionarse el Botón
			MessageToast.show("Hello Mr. Arthur!"); //Mensaje en Pantalla
		}
	}).placeAt("content");                          //Donde el botón SAPUI5 será desplegado

		    
	new Button1({                                   //Declaración de un botón
		text: "Ready2",                             //Texto del botón
        icon : sap.ui.core.IconPool.getIconURI("sap-ui5"),     //Retorna el URI del icono en el pool el cual tiene el collectionName y el iconName.
		press: function () {                        //Evento ejecutado al presionarse el Botón
		    //Despliega una alerta tipo dialogo con un mensaje y un Botón OK (no icons)
			 sap.m.MessageBox.alert("Hola Mr. Arthur", {
             title: "Mensaje Tipo Alerta",          //Título Ventana
             onClose: null,                         // default
             styleClass: "",                        // default
             initialFocus: null,                    // default
             textDirection: sap.ui.core.TextDirection.Inherit // default
             });

		}
	}).placeAt("content");                          //Donde el botón SAPUI5 será desplegado
}
);