let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	const div = document.createElement("div");
	div.innerHTML = "Hello World";
	div.style.background = "yellow";
	document.body.appendChild(div);
});
