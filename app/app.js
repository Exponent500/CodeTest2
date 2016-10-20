// $(document).ready(function(){
    
    //variables used to generate the date and time output string
    var d = new Date(),
    seconds = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+ d.getMinutes() : d.getMinutes(),
    hours = d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    //displays hours from 1-12 only
    if (hours > 12){
    	hours -= 12;
    }

	//array for bubble sort
    var array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

    // initial values for single and double click exercise
    var delay = 400;
    var clicks = 0;
    var timer = 0;
    
    

    // logic to display the current date and time in the following format: Today is Sunday. The current time is 9AM : 50 : 22
    displayCurrentDateAndTime = 'Today is ' + days[d.getDay()] + '. The current time is '+ hours + '' + ampm + ' : ' + minutes + ' : ' + seconds;
    document.getElementById("currentdateandtime").innerHTML = displayCurrentDateAndTime;
    

  	// calling function to scroll Origin Code Academy Rocks! from left to right
	setInterval("scrollStringFromLeftToRight()", 100);

    // calling function to bubble sort the "array" array
    bubbleSort(array);

    // function to highlight the first word within the elements tagged with a class of listofbeachitems
	$('.listofbeachitems').each(function(){
		var data = $(this); //converts DOM element returned by "this", into a jQuery object that we can use jQuery on
		data.html(data.text().replace( /(^\w+)/, '<b>$1</b>' ) ); //replaces first word of text with a bolded version. The \w+ targets a word. The $1 targets the first word.
	});

	// function to handle the single and double click events
	$("#click").on("click", function (){

		$('#clickoutput').remove(); // erases last single or double click message that was outputted

		clicks++; //count # of times clicked

		if (clicks === 1) { //logic to execute if only one click was registered

			timer = setTimeout(function(){

				$('#click').append('<p id="clickoutput">Single Click</p>'); // performs the single click action
				//alert("Single Click"); // performs the single click action
				clicks = 0; //after the action is performed, reset the counter
			
			}, delay); // delay to determine how long to wait after a single click, before deeming it to be a single click.

		} else { // logic to execute if more than one click was registered

			clearTimeout(timer); //prevents the single-click action
			$('#click').append('<p id="clickoutput">Double Click</p>'); // performs the double click action
			// alert("Double Click"); //performs double-click action
			clicks = 0; // after the action is performed, reset the counter
		}
	});

    // function to change the "changebackgroundstyle" div's background color to green when the button is clicked
    $('button').on("click", function(){
    	$('#changebackgroundstyle').css('background-color', 'green');
    });

	// function that bubble sorts an array
    function bubbleSort(array){
    	var i, j;
    	for (i = array.length - 1; i >= 0; i--){
    		for (j = 0; j <= i; j++){
    			if (array[j + 1] > array[j]){
    				var temp = array[j];
    				array[j] = array[j + 1];
    				array[j + 1] = temp;
    			}
    		}
    	}
    	console.log(array);
    	document.getElementById("bubblesort").innerHTML = array;
    }

    // function that scrolls a string from left to right
  	function scrollStringFromLeftToRight(){
		var stringToAnimate = document.getElementById("scrolltext").innerHTML; //grab string to animate from HTML page
		stringToAnimate = stringToAnimate[stringToAnimate.length - 1] + stringToAnimate.substring(0, stringToAnimate.length - 1); // scroll string one position to the right
		document.getElementById("scrolltext").innerHTML = stringToAnimate; // display string that was shifted to the right by one position
	}

// });