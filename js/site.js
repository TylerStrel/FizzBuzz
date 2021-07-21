// Get the values enter by the user
function getFizzBuzzValues() {

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // Parse into Ints
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Check if values are ints
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // Get the fizz buzz resluts
        let fizzBuzzResults = fizzBuzzIt(fizzValue, buzzValue);
        
        // Display the resluts in a table
        displayFizzBuzz(fizzBuzzResults);
    }
    else {

        // If valid int is not entered then alert the user
        alert("You must enter integers.");
    }

}

function fizzBuzzIt(fizzValue, buzzValue) {

    // Create an empty array to hold the results
    let fizzBuzzResults = [];

    // Loop 1 - 100
    for (let index = 1; index <= 100; index++) {
        
        // Create an empty string to hold the results to be added to the array
        let tempFizzBuzzResult = "";

        // Check for Fizz 
        if (index % fizzValue == 0) {

            tempFizzBuzzResult += "Fizz";
        }
        
        // Check for Buzz
        if (index % buzzValue == 0) {

            tempFizzBuzzResult += "Buzz";
        }
        
        // Check if Fizz or Buzz were added, if not then supply the number to the string instead
        if (tempFizzBuzzResult.length == 0) {

            tempFizzBuzzResult += index.toString();
        }

        // Push results to the array
        fizzBuzzResults.push(tempFizzBuzzResult);
    }

    // Return to calling location
    return fizzBuzzResults;
}

// Display reslults to the end user
function displayFizzBuzz(fizzBuzzResults) {

    // Get the location in HTML where to place the table
    let tableBody = document.getElementById("results");

    // Get the created table template
    let templateRow = document.getElementById("fbTemplate");

    // Clear the table
    tableBody.innerHTML = "";

    // Loop 
    for (let i = 0; i < fizzBuzzResults.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);
        
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fizzBuzzResults[i]);
        rowCols[0].textContent = fizzBuzzResults[i];
        
        rowCols[1].classList.add(fizzBuzzResults[i+1]);
        rowCols[1].textContent = fizzBuzzResults[i+1];
        
        rowCols[2].classList.add(fizzBuzzResults[i+2]);
        rowCols[2].textContent = fizzBuzzResults[i+2];
        
        rowCols[3].classList.add(fizzBuzzResults[i+3]);
        rowCols[3].textContent = fizzBuzzResults[i+3];
        
        rowCols[4].classList.add(fizzBuzzResults[i+4]);
        rowCols[4].textContent = fizzBuzzResults[i+4];

        tableBody.appendChild(tableRow);
    }

}