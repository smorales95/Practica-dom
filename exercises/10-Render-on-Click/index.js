let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var elemp = document.createElement("div");
	elemp.innerHTML = "Hello World";
	elemp.style.background = "yellow";

	document.querySelector("#Div1").appendChild(elemp);
});
