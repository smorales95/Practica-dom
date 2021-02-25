window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let select = document.getElementById("#mySelect");
	let opt = document.getElementById("#opt");

	let btn = document.getElementById("#btn");
	cargar();
	function cargar() {
		for (var i = 0; i < countries.length; i++) {
			//  select.options[i] = new Option(countries[i]);
			var elemp = document.createElement("option");
			elemp.innerHTML = countries[i];
			document.querySelector("#mySelect").appendChild(elemp);
		}
	}

	select.addEventListener("change", function() {
		alert(select.getElementsByTagName);

		console.log("hola");
	});
};
