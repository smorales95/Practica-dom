let btn = document.getElementById("superDuperButton");

btn.addEventListener("click", function() {
	var elemp = document.createElement("li");
	elemp.innerHTML = "<li>" + "Fourt Element" + "</li>";
	document.querySelector("#myList").appendChild(elemp);
});
