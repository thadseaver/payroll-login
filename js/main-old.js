window.onload = function(){
	
	// 5:00:00 AM to 6:00:00 AM
	var punchInGreeting = [
		"Good morning, Thad. Are you ready for another one?",
		"Here we are. Another day to excel!",
		"Good morning, sunshine. Let\'s go make some chips!",
		"Can you believe that they pay you to come in here and play with machines all day? How cool is that?",
		"Here we go again. Grab a cup of coffee and let\'s get after it!"
	];
	
	// 6:00:01 AM to 11:59:59 PM
	var punchInLateGreeting = [
		"Uh oh. Looks like someone forgot to set the alarm this morning.",
		"Let me guess, you hit the snooze button one too many times?",
		"Late night last night?",
		"It\'s not too late to make today a productive day!",
		"Got a late start today, huh?"
	];
	
	// 12:00:00 PM to 3:45:00 PM
	var punchOutGreeting = [
		"Nothing like a good day at work!",
		"One day closer to retirement!",
		"See, that wasn\'t so bad. Now, go home and relax!",
		"Just think, you get to have this much fun again tomorrow!",
		"See ya tomorrow, kid."
	];
	
	// 3:45:01 PM to 4:59:59 AM
	var punchOutLateGreeting = [
		"Burning the midnight oil, huh?",
		"Don\'t you love those last minute hot jobs?",
		"Getting out late, huh? At least you\'ll have a nice paycheck on Friday",
		"Just think, you\'re that much closer to having more fun here tomorrow!",
		"Now that\'s what I call dedication!"
	];
	
//"October 22, 2014 05:19:00"
	var date = new Date("October 22, 2014 11:59:00");
	var day = date.getDay();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (hour >= 5 && hour <= 6) { // check for punch in
		document.getElementById('greeting').innerHTML = punchInGreeting[4];
	} else if ((hour >= 6 && minutes >= 0 && seconds >= 1) && (hour <= 11 && minutes <= 59 && seconds <= 59)) { // check for late punch in
		document.getElementById('greeting').innerHTML = punchInLateGreeting[0];
	} else if ((hour >= 12 && minutes >=0 && seconds >=0) && (hour <= 15 && minutes <= 45 && seconds <= 59)) { // check for punch out
		document.getElementById('greeting').innerHTML = punchOutGreeting[4];
	} else if ((hour >= 15 && minutes >= 46 && seconds >= 0) && (hour <= 23 && minutes <= 59 && seconds <= 59)) { // check for late punch out
		document.getElementById('greeting').innerHTML = punchOutLateGreeting[4];
	} else {
		document.getElementById('greeting').innerHTML = "wrong";
	}
	
	
}; //end function

