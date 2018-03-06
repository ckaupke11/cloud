//Declare a variable called currentTurn and set it equal to "O"

//Declare a variable called spaces and set it equal to a selector that targets the "td" tag

//Write the beginning of the FOR loop from 0 to spaces.length
	spaces[i].addEventListener("click", function() {
		if (this.innerHTML === "") {
			if (currentTurn === "X") {
				//Change currentTurn to "O"
			} else {
				//Change currentTurn to "X"
			}

			this.innerHTML = currentTurn;

			//Call the function checkWin
		} else {
			return false;
		}
	});
}

function checkWin() {
	function getPlace(selector) {
		return document.getElementById(selector).innerHTML;
	}

	var rowA = [getPlace("a1"), getPlace("a2"), getPlace("a3")];
	var rowB = [getPlace("b1"), getPlace("b2"), getPlace("b3")];
	var rowC = [getPlace("c1"), getPlace("c2"), getPlace("c3")];

	var colA = [getPlace("a1"), getPlace("b1"), getPlace("c1")];
	var colB = [getPlace("a2"), getPlace("b2"), getPlace("c2")];
	var colC = [getPlace("a3"), getPlace("b3"), getPlace("c3")];

	var diagA = [getPlace("a1"), getPlace("b2"), getPlace("c3")];
	var diagB = [getPlace("a3"), getPlace("b2"), getPlace("c1")];

	//Declare a variable called fullSet which will be an array of each of the above variables (rowA, rowB, etc.)

	//Write the beginning of a FOR loop from 0 to 7 inclusive
		if (fullSet[i][0] !== "" && fullSet[i][1] !== "" && fullSet[i][2] !== "" && fullSet[i][0] === fullSet[i][1] && fullSet[i][0] === fullSet[i][2]) {
			//Create an alert here with the currentTurn + "Wins!". An example may be "X Wins!" or "O Wins!"
		}
	}
}