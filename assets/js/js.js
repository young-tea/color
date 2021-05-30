function colorx() {
	var color = document.getElementById("colorPick").value;

	document.body.style.backgroundColor = color;

	document.getElementById('lab').innerHTML = color;
}

function randomx() {
	var col = '#' + Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = col;

	document.getElementById('lab').innerHTML = col;
}