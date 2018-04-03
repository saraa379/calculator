

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




window.addEventListener('load', () => {

	let vm = new Vue({
		el: '#root',
		data: {
			lastInput: "",
			lastOperator: "",
			lastNumber: "",
			result: 0,
			inputNr: "",
			tempCalc: ""
		}, // data

		methods: {
			saveNumber: function(event) {
				let nr = Number(this.inputNr);
				this.lastInput = nr;
				this.lastNumber = nr;

				if (this.lastOperator == "") {
					this.tempCalc = nr;
					this.result = nr;
				}

				this.inputNr = "";
			},
			hide: function(event) {
				this.displayStatus = false;
			}
		}  // methods
	});  // Vue

});  // window load
