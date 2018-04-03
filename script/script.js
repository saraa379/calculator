

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUfKURsHdbqih790yx1mtiRbDCxoqZ2Tc",
    authDomain: "calculator-lab4.firebaseapp.com",
    databaseURL: "https://calculator-lab4.firebaseio.com",
    projectId: "calculator-lab4",
    storageBucket: "",
    messagingSenderId: "902565878040"
  };
  firebase.initializeApp(config);
  const db = firebase.database();




window.addEventListener('load', () => {

	let vm = new Vue({
		el: '#root',
		data: {
			lastInput: "",
			lastOperator: "",
			lastNumber: "",
			result: 0,
			resultFinal: 0,
			inputNr: "",
			tempCalc: "",
			counter: 0
		}, // data

		methods: {
			saveNumber: function(event) {
				let nr = Number(this.inputNr);
				this.lastInput = "number";
				this.lastNumber = nr;
				this.counter = this.counter + 1;
				this.result = nr;

				if (this.lastOperator == "") {
					this.tempCalc = nr;
					this.resultFinal = nr;
					this.lastNumber = nr;
				} else if (this.lastOperator == "add") {
					this.tempCalc += " " + nr;
				}

				this.inputNr = "";
			},
			clear: function(event) {
				this.lastInput = "";
				this.lastOperator = "";
				this.result = 0;
				this.resultFinal = 0;
				this.inputNr = "";
				this.tempCalc = "";
				this.counter = 0;
				this.lastNumber = "";
			},
			add: function(event) {
				this.lastOperator = "add";
				this.tempCalc += " +";
				this.lastInput = "operator";
				this.counter = this.counter + 1;
				if (this.counter > 3) {
					this.resultFinal = this.resultFinal + this.lastNumber;
					this.result = this.resultFinal;
				}
			},
			calcFinal: function(event) {
				switch (this.lastOperator) {
					case "add":
						this.resultFinal = this.resultFinal + this.lastNumber;
						this.tempCalc += " = " + this.resultFinal; 
					    break;
					case "minus":
					    console.log("minus");
					    break;
					} //switch
				//Add calculation into db
				if (this.tempCalc != "") {
				      db.ref('calc/').push(this.tempCalc);
		    	} //end of if

				//clear the field
				this.clear();
			}
		}  // methods
	});  // Vue

});  // window load
