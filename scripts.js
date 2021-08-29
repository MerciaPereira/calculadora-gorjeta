function calculateTip(event){
	event.preventDefault();
	let bill = document.getElementById('bill').value;
	let serviceQuality = document.getElementById('serviceQuality').value;
	let people = document.getElementById('people').value;
			
	if (bill == '' | serviceQuality == '' | people == ''){
		alert("Por favor, informe os valores nos campos.");
		return;
	}
	if (bill <= 0 | people <= 0){
		alert("A conta e quantidade de pessoas devem ser maior que zero.");
		return;
	}
	if (people > 1){
		document.getElementById('each').style.display = "inline";
	} else {
		document.getElementById('each').style.display = "none";
	}
	
	let total = (bill * serviceQuality) / people;
	total = total.toFixed(2);
	document.getElementById('tip').innerHTML = total;
	document.getElementById('tip').style.display = "inline";
}

document.getElementById('tip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
