/*!
 * Router v0.0.1
 * (c) 2018 Leandro Santos.
 * Released under the MIT License.
 */

"use strict";

export class Router {

	/**
	 * Construtor da classe.
	 */
	constructor() {	

		//console.log('class router core');

	    this._routes = [];
		this._route = [];

		this.mode = null;
		this.root = '/';
		this.host = window.location.hostname;		

		//this.templates = [];
		//this.view = document.querySelector("#view-router");
		//this.range = document.createRange();			
	}

	/**
	 * Configuração.	 
	 */	
	config (options) {		

        this.mode = options && options.mode && options.mode == 'history' 
                    && !!(history.pushState) ? 'history' : 'hash';
        this.root = options && options.root ? '/' + this.clearSlashes(options.root) + '/' : '/';

		return this;
    }

	/**
	 * Obtendo o URL atual.
	 *	Loop do Router. 	*   
		Na versão do modo "histórico", se não houver hash ou search location precisamos remover a parte da raiz do URL.
		Devemos também excluir todos os parâmetros GET e isso é feito com um regex (/\?(.*)$/).
		A obtenção do valor de hash é um pouco mais fácil. Observe o uso da função clearSlashes .
		Sua tarefa é remover as barras desde o início e a partir do final da string.
		Isso é necessário, porque não queremos forçar o uso de um formato específico das URLs.
		Tudo o que ele passa é traduzido para um mesmo valor. assim podemos dividir / em modulos 
	 */	
    getFragment () {

        let fragment = '';

        if(this.mode === 'history') {			

			if(location.search){

				fragment = this.clearSlashes(decodeURI(location.pathname + location.search));

			}
			else if(location.hash){

				fragment = this.clearSlashes(decodeURI(location.pathname + location.hash));

			}else{

				// console.log("=> getFragment 1: ", location.pathname);
				!this._route[fragment] && fragment != "" ? fragment = "/404/" :	fragment = this.clearSlashes(decodeURI(location.pathname));
				          		
			}

			fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
						

        } else {
            let match = window.location.href.match(/#(.*)$/);
            fragment = match ? match[1] : '';
			
        }
			
		// console.log("=> getFragment 2: ", location.pathname);	
        return this.clearSlashes(fragment);
    }


	/**
	 * Remover a parte da raiz do URL.	 
	 */	
    clearSlashes (path) {
		// console.log("=> clearSlashes: ", path);
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

	/**
	 * Adicionando rotas.	 
	 */	
    //add (re, template, handler) {
	add (re, handler) {

        if(typeof re == 'function') {
            handler = re;
            re = '';
        }	

		//let tmpName = this.clearSlashes(re);		
		//this.templates[tmpName] = template;			
        this._routes.push({ re: re, handler: handler});
		let _re = this.clearSlashes(re);
		this._route[_re] = _re;		

        return this;
    }

	/**
	 * Removendo rotas.	 
	 */	
    remove (param) {

        for(let i=0, r; i<this._routes.length, r = this._routes[i]; i++) {
            if(r.handler === param || r.re.toString() === param.toString()) {
                this._routes.splice(i, 1);
				this._route.splice(i, 1); 
                return this;
            }
        }

        return this;
    }

	/**
	 * Reinicializar.	 
	 */	
    flush () {

        this._routes = [];
        this.mode = null;
        this.root = '/';
        return this;
    }


	/**
	 * Check-in.	 
	 */	
    check (f) {

		const self = this;

        let fragment = f || this.getFragment();				

        for(let i=0; i<this._routes.length; i++) {
            let match = fragment.match(this._routes[i].re);			

            if(match) {
                match.shift();
                this._routes[i].handler.apply({}, match);				
                return this;
            }          
        }

        return this;
    }

	/**
	 * Monitorando para mudanças.
     * Loop do Router => getFragment()	 
	 */	
    listen () {


        const self = this;

        let current = self.getFragment();       

        let fn = function() {
            if(current !== self.getFragment()) {
                current = self.getFragment();
                self.check(current);
            }
        }

        clearInterval(this.interval);		
        this.interval = setInterval(fn, 50);
		
		//this.render(this.templates[current]);
        return this;
    }


	/**
	 * Alterando o URL.	 
	 */	
    navigate (path) {	

        path = path ? path : '';

        if(this.mode === 'history') {
            //history.pushState(null, null, this.root + this.clearSlashes(path));			
            history.pushState(path, null, this.clearSlashes(path));			

        } else {
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
        }

        return this;
    }

	

}