var paused_count =0;
var resumed_count = 0;
var launched_count = 0; //Declaring the variables

document.addEventListener("deviceready", onDeviceReady, false); //Event listener added to run app once the device is ready
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count); //A fucntion to update the display when an event happens
	
	document.getElementById ("pausedTest").innerHTML = "Application paused: " + paused_count;
}


// device APIs are available
//
    function onDeviceReady() { //Function which adds event listeners for when the app is paused and resumed
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay(); //Adds 1 to the launched count variable every time the app is launched and calls the function to update the display to show the new number count
	    
	alert("device ready");
    }


    function onPause() { //Adds 1 to the pause count every time the app is paused and updates the display to show the new number count
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() { //Adds 1 to the resume count every time the app is resumed and updates the display to show the new number count
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
