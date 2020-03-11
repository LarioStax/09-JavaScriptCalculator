let operation = "";
let clicked = "";
let result = 0;
let decimal = false;

init();

$("#zero").on("click", function() {
	if (operation !== "0") {
		clicked = "0";
		operation += clicked; 
		$("#display").html(operation);
	}
});

$("#one").on("click", function() {
	clicked = "1";
	operation += clicked; 
	$("#display").html(operation);
});

$("#two").on("click", function() {
	clicked = "2";
	operation += clicked; 
	$("#display").html(operation);
});

$("#three").on("click", function() {
	clicked = "3";
	operation += clicked; 
	$("#display").html(operation);
});

$("#four").on("click", function() {
	clicked = "4";
	operation += clicked; 
	$("#display").html(operation);
});

$("#five").on("click", function() {
	clicked = "5";
	operation += clicked; 
	$("#display").html(operation);
});

$("#six").on("click", function() {
	clicked = "6";
	operation += clicked; 
	$("#display").html(operation);
});

$("#seven").on("click", function() {
	clicked = "7";
	operation += clicked; 
	$("#display").html(operation);
});

$("#eight").on("click", function() {
	clicked = "8";
	operation += clicked; 
	$("#display").html(operation);
});

$("#nine").on("click", function() {
	clicked = "9";
	operation += clicked; 
	$("#display").html(operation);
});

$("#decimal").on("click", function() {
	let arr = operation.split(/[^0-9.]+/);
	if (!arr[arr.length-1].match(/\./)) {
		clicked = ".";
		operation += clicked; 
		$("#display").html(operation);
	}
});

$("#add").on("click", function() {
	checkIfOperator();
	clicked = "+";
	operation += clicked; 
	$("#display").html(operation);
});

$("#subtract").on("click", function() {
	checkIfOperator();
	clicked = "-";
	operation += clicked; 
	$("#display").html(operation);
});

$("#multiply").on("click", function() {
	checkIfOperator();
	clicked = "*";
	operation += clicked; 
	$("#display").html(operation);
});

$("#divide").on("click", function() {
	checkIfOperator();
	clicked = "/";
	operation += clicked; 
	$("#display").html(operation);
});

$("#open").on("click", function() {
	let arr = operation.split("");
	if (arr[arr.length-1] === ")" || arr[arr.length-1].match(/[0-9]/)) {
		operation += "*";
		$("#display").html(operation);
	};
	clicked = "(";
	operation += clicked; 
	$("#display").html(operation);
});

$("#closed").on("click", function() {
	if (operation !== "") {
		let arr = operation.split("");
		if (arr[arr.length-1] !== "(") {
			clicked = ")";
			operation += clicked; 
			$("#display").html(operation);
		};
	}
});

$("#back").on("click", function() {
	let arr = operation.split("");
	if (arr.length === 1 || arr.length === 0) {
		init();
	} else {
		arr.pop();
		operation = arr.join("");
		$("#display").html(operation);
	}
});

$("#clear").on("click", function() {
	init();
});

$("#equals").on("click", function() {
	result = eval(operation);
	operation = String(result);
	console.log(operation);
	$("#display").html(result);
});

function checkIfOperator() {
	let arr = operation.split("");
	console.log(arr);
	if (arr[arr.length-1].match(/[-+/*]/)) {
		console.log(arr);
		arr.pop();
		console.log(arr);
		operation = arr.join("");
	};
}

function init() {
	operation = "";
	clicked = "";
	result = 0;
	decimal = false;
	$("#display").html(result);
}