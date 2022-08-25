const cursors = document.querySelectorAll(".cursor");

document.addEventListener("mousemove", (e) => {
	cursors.forEach((cursor) => {
		cursor.style.left = `${e.clientX}px`;
		cursor.style.top = `${e.clientY}px`;
	});
});
