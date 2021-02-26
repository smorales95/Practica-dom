let btn = document.getElementById("superDuperButton");

btn.addEventListener("click", function() {
	var elemp = document.createElement("li");
	elemp.innerHTML = "<li>" + "Fourt Element" + "</li>";
	elemp = document.querySelector("#myList").appendChild(elemp);
	//document.body.appendChild(elemp);
});
