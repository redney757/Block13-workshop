//set a constant of userInput to prompt the user for input
const userInput = prompt("Please enter comma-separated FroYo flavors:");
//confvert the user input into an array by splitting on commas
let array = userInput.split(",");
//create a function to display the order of flavors and their respective counts
function displayOrder(array) {
    //create an empty object to store the counts of each flavor
    let emptyArray = {};
    //create a for loop that goes through each flavor in the array
    for (let i = 0; i < array.length; i++) {
        //set a variable to equal to the current flavor, in the array
        let flavor = array[i]; // Trim whitespace

        //check if the empty array currently has the flavor as a key if it does add 1 to the current number, if the flavor does not exist in the empty array, set the key to 1
        if (emptyArray[flavor]) {
            emptyArray[flavor] += 1;
        } else {
            emptyArray[flavor] = 1;
        }
    }
    //console.log empty array with the counts to the console
    console.log(emptyArray);



    //did this part for fun
    // Format the object into a string
    let result = Object.entries(emptyArray)
        .map(([flavor, count]) => `${flavor}: ${count}`)
        .join(", ");
    // Display the result in an alert
    alert(result);
    //return the new value of the empty array
    return emptyArray
}

displayOrder(array);