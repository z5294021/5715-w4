var pkWeAreUpTo = 1;
var listItems = [
	
];

/* function bodyDidLoad() {
	const inputElement = document.getElementById("fileUploader");
	inputElement.addEventListener("change", handleFiles, false);
	function handleFiles() {
		file0 =  this.files[0];
		var myFileReader = new FileReader();
		myFileReader.onload = function(fileLoadedEvent){
			var textFromFileLoaded = fileLoadedEvent.target.result;
			fileDidFinishGettingRead(textFromFileLoaded);
		};
		myFileReader.readAsText(file0);
	}
}

function fileDidFinishGettingRead(textFromFileLoaded) {
	console.log(textFromFileLoaded);
	myNewList = JSON.parse(textFromFileLoaded);
	redrawTableFromList(myNewList);
}

function redrawTableFromList(myNewList) {
	$("tbodyForTasks").html("");
	myNewList.forEach(element => addItemToTable(element));
} */

function userDidClickCreate() {
	var userEnteredText = captureUserData();
	var userEnteredText1 = captureUserData1();
	var userEnteredText2 = captureUserData2();
	var userEnteredText3 = captureUserData3();;
	var newItemDictionary = {
		"id": pkWeAreUpTo
		, "Date": userEnteredText
		, "Minimum_temperature": userEnteredText1
		, "Maximum_temperature": userEnteredText2
		, "Weather_condition": userEnteredText3
	};
	listItems.push(newItemDictionary);
	pkWeAreUpTo++;
	redrawTable(newItemDictionary);
}

function captureUserData() {
	var Date = document.getElementById("Date");
	var userEnteredText = Date.value

	return userEnteredText ;
}

function captureUserData1() {
	var Minimum_temperature = document.getElementById("Minimum_temperature");
	var userEnteredText1 = Minimum_temperature.value

	return userEnteredText1 ;
}

function captureUserData2() {
	var Maximum_temperature = document.getElementById("Maximum_temperature");
	var userEnteredText2 = Maximum_temperature.value

	return userEnteredText2 ;
}

function captureUserData3() {
	var Weather_condition = document.getElementById("Weather_condition");
	var userEnteredText3 = Weather_condition.value

	return userEnteredText3 ;
}

function redrawTable(newItemDictionary) {
	var tbodyForTasks = document.getElementById("tbodyForTasks");
	var myActions = "<a onclick='deleteItem(" + newItemDictionary["id"] + ")' href='#'>Delete This One</a>";

	var preparedRowHTML = "<tr id='rowForItem_" + newItemDictionary["id"] + "'>";
	preparedRowHTML += "<td class='subtleText'>" + newItemDictionary["id"] + "</td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Date"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Minimum_temperature"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Maximum_temperature"] + "</em></td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["Weather_condition"] + "</em></td>";
	preparedRowHTML += "<td>" + myActions + "</td>";
	preparedRowHTML+= "</tr>";

	tbodyForTasks.innerHTML += preparedRowHTML;
}

/* function addItemToTable(newItemDictionary) {
	var tbodyForTasks = document.getElementById("tbodyForTasks");
	var myActions = "<a onclick='deleteItem(" + newItemDictionary["id"] + ")' href='#'>Delete This One</a>";

	var preparedRowHTML = "<tr id='rowForItem_" + newItemDictionary["id"] + "'>";
	preparedRowHTML += "<td class='subtleText'>" + newItemDictionary["id"] + "</td>";
	preparedRowHTML += "<td><em>" + newItemDictionary["name"] + "</em></td>";
	preparedRowHTML += "<td>" + myActions + "</td>";
	preparedRowHTML+= "</tr>";

	tbodyForTasks.innerHTML += preparedRowHTML;
}
 */
function deleteItem(rowToDelete) {
	console.log("deleteItem triggered for row = " + rowToDelete);
	var itemToRemove = _.findWhere(listItems, {"id": rowToDelete});
	listItems = _.without(listItems, itemToRemove);
	// IMPLEMENT LATER

	// go to DOM and delete the row
	document.getElementById("rowForItem_" + rowToDelete).innerHTML = "";
}

function downloadJSON() {
	download("data.json", JSON.stringify(listItems, null, '\t'));
}

// Adapted from:
// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
  
	document.body.removeChild(element);
}

function userDidClickRobertButton() {
	console.log("Hello world and hi Robert");
}