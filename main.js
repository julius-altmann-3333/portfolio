function openModal(url) {
		document.getElementById("modal").style.display = "flex";
		document.getElementById("modal-iframe").src = url;
	}

	function closeModal() {
		document.getElementById("modal").style.display = "none";
		document.getElementById("modal-iframe").src = "";
	}
