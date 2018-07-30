"use strict";

export class Forms {

	/* accept only 1 checkbox and 1 radio select */
	constructor(form, checkLabel, radioLabel, inputs) {	
		
		this.form = form;
		this.formId = form.id;
		this.checkLabel = checkLabel;
		this.radioLabel = radioLabel;
		this.countCheck = 0;
		this.countRadio = 0;
		this.inputs = inputs;
	}


	// databind inputs
	bindInputData () {

		const self = this;	

		Array.from(this.form).forEach(function(el){			
			var error = document.getElementById(el.name);				
			
			if(el.type === "checkbox"){	
			
				el.addEventListener("change", function() {

					if(el.checked){	
						self.countCheck += 1;
						el.setAttribute("checked", true);
					}else{
						self.countCheck -= 1;
						el.setAttribute("checked", false);
					}

					if(self.checkLabel != null){						
						error = self.checkLabel;
						self.countCheck == 0 ? error.className = "error active" : error.className = "error";
					}
										
				});

			}else if(el.type === "radio" ){	
			
				el.addEventListener("change", function() {
	
					el.checked ? self.countRadio += 1 : self.countRadio -= 1;;
					
					if(self.radioLabel != null){						
						error = self.radioLabel;
						self.countRadio == 0 ? error.className = "error active" : error.className = "error";
					}
										
				});

			}else if(el.type === "select" || el.type === "select-one"){	
			
				el.addEventListener("change", function() {									
					for (var i = 0; i < el.options.length; i++) {
						var option = el.options[i];
						if (option.selected)							
							option.index == 0 ? error.classList.add("active") : error.classList.remove("active");
					}
				});

			}else{		
				
				el.addEventListener("input", function (event) { 					
					var error = document.getElementById(el.name);
				  	el.validity.valid ? error.className = "error" : error.className = "error active";

				}, false);	
			}
	
		});
	}	
	
	setInputData () {
		const self = this;
		Array.from(this.form).forEach(function(el){	
			var error = document.getElementById(el.name);

			for(var key in self.inputs){					
			
				if(el.type === "checkbox"){						
					el.name == self.inputs[self.checkLabel.id] ? el.checked = true : el.checked = false;
					self.countCheck = 1;					 								

				}else if(el.type === "radio" ){	
					el.value == self.inputs[self.radioLabel.id] ? el.checked = true : el.checked = false;
					self.countRadio = 1;					

				}else if(el.type === "select" || el.type === "select-one"){	
					if(el.name === key){
						for (var i = 0; i < el.options.length; i++) {
							var option = el.options[i];						
							option.value == self.inputs[el.name] ? option.selected = true :  option.selected = false;	
						}				 					
					}	
				}else{											
					if(el.name === key){
						el.value = self.inputs[el.name];
					}
				}				
			}	
		});
	}

	// get input values
	getInputData () {
		const self = this;	
		Array.from(this.form).forEach(function(el){	
			var error = document.getElementById(el.name);		

			if(el.type === "checkbox") {	
			
				if(el.checked) self.inputs[self.checkLabel.id] = el.name;
				
				if(self.countCheck == 0 && self.checkLabel != null){
					error = self.checkLabel;
					error.className = "error active";
				}

			}else if(el.type === "radio"){	
				
				if(el.checked) self.inputs[self.radioLabel.id] = el.value; 

				if(self.countRadio == 0 && self.radioLabel != null){
					error = self.radioLabel
					error.className = "error active";
				}

			}else if(el.type === "select"  || el.type === "select-one"){	
		
				for (var i = 0; i < el.options.length; i++) {
					var option = el.options[i];
					if (option.selected)	
						option.index == 0 ? error.className = "error active" : self.inputs[el.name] = option.value;	 					 					
				}

			}else{								
				if(el.type != ""){
				  	if (!el.validity.valid || el.value == "" && error != null) {					
				    	error.className = "error active";										
				  	}else{						
						self.inputs[el.name] = el.value;						
					}
				}		    	
			}															

		}, false);					
		
		return this.inputs;	
	}
	
	//target => name attribute value
	getFormElement(target) {		
		var element;
		Array.from(this.form).forEach(function(el){
			if(el.name === target)element = el;			
		});
		return element;			
	}

}