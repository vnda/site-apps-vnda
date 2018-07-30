
"use strict";

export class Firebase {
	
	constructor () {
	
		this.user = "";
		this.logged = false;

	}

	init () {

		// Initialize Firebase
		let config = {
		    apiKey: "AIzaSyBxu_kan9PJhfXXifdtm-zBAnnFswdCRtY",
		    authDomain: "codropsbase.firebaseapp.com",
		    databaseURL: "https://codropsbase.firebaseio.com",
		    projectId: "codropsbase",
		    storageBucket: "codropsbase.appspot.com",
		    messagingSenderId: "155262815115"
		  };

		firebase.initializeApp(config);		
	}
}
