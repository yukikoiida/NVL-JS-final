    function inputText() {

    	if (document.querySelector(".send")) {
    		return false ;
    	}

        var divObjectivo = document.querySelector('#formJS')
        var createInputText = document.createElement("input");
        createInputText.style.width = '98%';
        createInputText.style.margin = "5px 0 5px 0";

        // elegir el tipo de caracteres
        var caracteresText ="";
        while (caracteresText =="") {
        	caracteresText = prompt("Elige el tipo de campo, escribe 'texto o numeros'","texto");
        }
        
        if (caracteresText.toLowerCase() == "texto") {
        	createInputText.type = "text";
        } else if (caracteresText.toLowerCase() == "numeros") {
        	createInputText.type = "number";
        	createInputText.onkeyup = "if(this.value > 5) this.value = null;"
        }

        var idTextfield = "";
        while(idTextfield==""){
          	idTextfield = prompt("¿Nombre del id?");
        }

        if (!idTextfield) {
            return false;
        }
        createInputText.name= idTextfield;

        var LabelTextfield = "";
        while(LabelTextfield==""){
        	LabelTextfield = prompt("¿Nombre del label?");
        }

        if (!LabelTextfield) {
                return false;
        }

        var addLabel = document.createElement("label");
        addLabel.textContent = LabelTextfield;
        addLabel.style.font = "15px arial, sans-serif";
        addLabel.style.color = "#808080";

        var requiredText = "";
        while(requiredText==""){
            requiredText = prompt("¿Quieres que sea obligatorio? contesta 'si o no'","no");
        }

        if (requiredText.toLowerCase() == "si") {
            createInputText.required = true;
        } else {
            createInputText.required = false;
        }

        if (idTextfield !== null && LabelTextfield !== null && requiredText !== null) {

        divObjectivo.appendChild(addLabel);
        divObjectivo.appendChild(createInputText);

        }
    }

    function textAreaAdd () {

    	if (document.querySelector(".send")) {
    		return false ;
    	}

    	 var divObjectivo = document.querySelector("#formJS");
    	 var createTextArea = document.createElement("textarea");
    	 createTextArea.style.width = "98%"
    	 createTextArea.style.height = "150px";
    	 createTextArea.style.margin = "5px 0 5px 0";
         createTextArea.style.font = "15px arial, sans-serif";
         createTextArea.style.color = "#808080";

    	 var idTextArea = "";
    	 while (idTextArea == "") {
    	 	idTextArea = prompt("¿Nombre del id?");
    	 }

    	 if (!idTextArea) {
 				return false;
			}

    	 createTextArea.name = idTextArea;

    	 placeholderTextArea = prompt("Añade un placeholder (opcional)");

    	 if (!placeholderTextArea) {
 				createTextArea.placeholder = "";
			} else {
				createTextArea.placeholder = placeholderTextArea;
			}

    	 if (idTextArea !== null) {
    	 	divObjectivo.appendChild(createTextArea)
    	 }

    }

    function createButtonSend (){

    	if (!document.querySelector(".send")) {

	    	var divObjectivo = document.querySelector("#formJS");
	    	var createButton = document.createElement("input");
	    	createButton.type = "submit";

            var ButtonValue = "";
            while (ButtonValue == "") { 
                ButtonValue = prompt("Valor del botón");
            }

            if (!ButtonValue) {
 				return false;
			}	

            var envioData = "";
            while (envioData == "") { 
                envioData = prompt("Destino del formulario. Escribe la ruta del fichero con su extensión");
            }
            var etiquetaForm = document.querySelector('form');
            etiquetaForm.action =envioData;
            etiquetaForm.method = "POST";

            if (!etiquetaForm) {
 				return false;
			}

	    	createButton.value = ButtonValue;
	    	createButton.classList ="send";

            if (ButtonValue !== null && envioData !== null){
                divObjectivo.appendChild(createButton);
            }
    	}
    }

    function select() {

    	if (document.querySelector(".send")) {
    		return false ;
    	}

    	var divObjectivo = document.querySelector("#formJS");
    	var createSelect = document.createElement("select");

    	var idSelect = "";
    	while (idSelect == "") {
    		idSelect = prompt("¿Nombre del id?");
    	}

    	if (!idSelect) {
 				return false;
		}

    	createSelect.name = idSelect;

    	var label ="";
    	while (label =="") {
    		label = prompt("¿Nombre del label?");
    	}

    	if (!label) {
 				return false;
			}

    	var addLabel = document.createElement("label");
    	addLabel.textContent = label;

    	var NumOption ="";
    	while (NumOption =="" || isNaN(NumOption)) {
    		NumOption = prompt("¿Cuantas opciones quieres?, usa numeros");
    	}

    	if (!NumOption) {
 				return false;
		}

    	divObjectivo.appendChild(addLabel);
    	divObjectivo.appendChild(createSelect);

        //recoger los option en array segun el numero requerido
    	var values= [];
		var option;
    	for (i = 0; i < NumOption; i++) {

    		values.push(prompt("Añade valor nº " + [i+1]));
    		option= document.createElement("option");
    		createSelect.appendChild(option);
    		option.value = omitirAcentos(values[i]);
    		option.textContent = values[i];
    	}

    	//css
    	addLabel.style.display = "block";
    	addLabel.style.font = "15px arial, sans-serif";
        addLabel.style.color = "#808080";
        addLabel.style.margin = "5px 0 5px 0";
    	createSelect.style.width = "200px";
    	createSelect.style.display = 'block';
    }

    function omitirAcentos(text) {

	    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
	    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";

	    for (var i=0; i<acentos.length; i++) {
	        text = text.replace(new RegExp(acentos.charAt(i), 'g'), original.charAt(i));
	    }
    return text;
    }

    function checkBox (){

        if (document.querySelector(".send")) {
            return false ;
        }

        divObjectivo = document.querySelector("#formJS");

        idcheckBox = "";
        while (idcheckBox =="") {
            idcheckBox = prompt("¿Nombre del id?");
        }

        if (!idcheckBox) {
            return false;
        };

        createLabelInicial = document.createElement("label");
        labelcheckInicial ="";
        while (labelcheckInicial =="") {
            labelcheckInicial = prompt("¿Nombre del titulo que engloba este checkbox?");
        }

        createLabelInicial.textContent = labelcheckInicial;
        createLabelInicial.style.display = 'block';
        createLabelInicial.style.font = "15px arial, sans-serif";
        createLabelInicial.style.color = "#808080";
        createLabelInicial.style.margin = "5px 0 5px 0";
        divObjectivo.appendChild(createLabelInicial);	

        var NumOption ="";
    	while (NumOption =="" || isNaN(NumOption)) {
    		NumOption = prompt("¿Cuantas opciones quieres?, usa numeros");
    	}

		var values= [];
    	for (i = 0; i < NumOption; i++) {

    	createcheckBox = document.createElement("input");
        createcheckBox.type = "checkbox";
        createcheckBox.name = idcheckBox;

        createLabel = document.createElement("label");
        values.push(prompt("Label que acompaña al checkbox " + [i+1]));	
        createLabel.textContent = values[i];

        //usamos el label como value quitando acentos y espacios
        createcheckBox.value = omitirAcentos(values[i]).replace(/ /g, "");

        createLabel.style.display = 'block';
        divObjectivo.appendChild(createLabel);
        createLabel.appendChild(createcheckBox)
    	}
    }