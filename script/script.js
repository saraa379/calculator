

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
			result: ""
		}, // data

		methods: {
			show: function(event) {
				this.displayStatus = true;
			},
			hide: function(event) {
				this.displayStatus = false;
			}
		}  // methods
	});  // Vue

});  // window load
