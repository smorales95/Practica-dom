window.onload = function loadFn() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let select = document.getElementById("mySelect");
	let opt = document.getElementById("#opt");

	let btn = document.getElementById("#btn");
	let conte = document.getElementById("container");
	cargar();

	function cargar() {
		for (var i = 0; i < countries.length; i++) {
			//  select.options[i] = new Option(countries[i]);
			var elemp = document.createElement("option");
			elemp.innerHTML = countries[i];
			elemp.value = countries[i];
			document.querySelector("#mySelect").appendChild(elemp);
		}
	}
	select.addEventListener("change", function(event) {
		//let val = this.options[select.selectedIndex];
		var selectedOption = this.options[select.selectedIndex];

		alert(selectedOption.value);
	});
};
