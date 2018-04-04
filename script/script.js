

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
			lastOperator: "",
			lastNumber: "",
			result: 0,
			inputNr: "",
			tempCalc: "",
			counter: 0,
			squareRootVisible: false
		}, // data

		methods: {
			saveNumber: function(event) {
				let nr = Number(this.inputNr);
				this.lastNumber = nr;
				this.counter = this.counter + 1;
				
				if (this.lastOperator == "") {
					this.result = nr;
					this.tempCalc = nr;
					//this.resultFinal = nr;
				} else if (this.lastOperator == "add"){
					this.tempCalc += " " + nr;
					this.result = this.result + nr;
				} else if ( this.lastOperator == "subtract") {
					this.tempCalc += " " + nr;
					this.result = this.result - nr;
				} 
				else if ( this.lastOperator == "multiply") {
					this.tempCalc += " " + nr;
					this.result = this.result * nr;
				} 
				else if ( this.lastOperator == "divide") {
					this.tempCalc += " " + nr;
					this.result = this.result / nr;
				}

				this.inputNr = "";
			},
			clear: function(event) {
				this.lastInput = "";
				this.lastOperator = "";
				this.result = 0;
				this.inputNr = "";
				this.tempCalc = "";
				this.counter = 0;
				this.lastNumber = "";
				this.squareRootVisible = false;
			},
			add: function(event) {
				if (this.counter > 3) {
					this.calcTemp();
				}
				this.lastOperator = "add";
				this.tempCalc += " +";
				this.counter = this.counter + 1;
				
			},
			subtract: function(event) {
				if (this.counter > 3) {
					this.calcTemp();
				}
				this.lastOperator = "subtract";
				this.tempCalc += " -";
				this.counter = this.counter + 1;
				
			},
			multiply: function(event) {
				if (this.counter > 3) {
					this.calcTemp();
				}
				this.lastOperator = "multiply";
				this.tempCalc = "(" + this.tempCalc + ") x";
				this.counter = this.counter + 1;
				
			},
			divide: function(event) {
				if (this.counter > 3) {
					this.calcTemp();
				}
				this.lastOperator = "divide";
				this.tempCalc = "(" + this.tempCalc + ") ÷";
				this.counter = this.counter + 1;
				
			},
			square: function(event) {
				this.lastOperator = "square";
				this.tempCalc = "(" + this.tempCalc + ")²";
				this.counter = this.counter + 1;
				this.calcTemp();
				
			},
			calcFinal: function(event) {
				this.tempCalc += " = " + this.result;

				//Add calculation into db
				if (this.tempCalc != "") {
				      db.ref('calc/').push(this.tempCalc);
		    	} //end of if

			},
			calcTemp: function(event) {
				switch (this.lastOperator) {
					case "add":
						this.result = this.result + this.lastNumber;
					    break;
					case "subtract":
					    this.result = this.result - this.lastNumber;
					    break;
					case "multiply":
					    this.result = this.result * this.lastNumber;
					    break;
					case "divide":
					    this.result = this.result / this.lastNumber;
					    break;
					case "square":
					    this.result = this.result * this.result;
					    break;
				} //switch
			},
			getCalcFromDb: function(event) {
			}
		}  // methods
	});  // Vue
});  // window load
