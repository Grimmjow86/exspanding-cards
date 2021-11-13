const panels = document.querySelectorAll(".panel");

for (let i = 0; i < panels.length; i++) {
	panels[i].addEventListener("click", () => {
		for (let j = 0; j < panels.length; j++) {
			panels[j].classList.remove("active");
		}
		panels[i].classList.add("active");
	});
}
