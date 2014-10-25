window.onload = function(){
	
	// 12:00:00 AM to 4:59:59 AM - 0 to 17999 seconds
	var punchInObscureGreeting = [
		"What in the world are you doing in here at this hour?",
		"Do you realize what time it is???",
		"I sure hope you have a lot of coffee!",
		"Wow, this must be some hot job!",
		"I don\'t even know what to say..."
	];
	
	// 5:00:00 AM to 6:00:00 AM - 18000 to 21600 seconds
	var punchInGreeting = [
		"Good morning, Thad. Are you ready for another one?",
		"Here we are. Another day to excel!",
		"Good morning, sunshine. Let\'s go make some chips!",
		"Can you believe that they pay you to come in here and play with machines all day? How cool is that?",
		"Here we go again. Grab a cup of coffee and let\'s get after it!"
	];
	
	// 6:00:01 AM to 11:59:59 PM - 21601 to 43199 seconds
	var punchInLateGreeting = [
		"Uh oh. Looks like someone forgot to set the alarm this morning.",
		"Let me guess, you hit the snooze button one too many times?",
		"Late night last night?",
		"It\'s not too late to make today a productive day!",
		"Got a late start today, huh?"
	];
	
	// 12:00:00 AM to 3:45:00 PM - 43200 to 56700 seconds
	var punchOutGreeting = [
		"Nothing like a good day at work!",
		"One day closer to retirement!",
		"See, that wasn\'t so bad. Now, go home and relax!",
		"Just think, you get to have this much fun again tomorrow!",
		"See ya tomorrow, kid."
	];
	
	// 3:45:01 PM to 4:59:59 AM - 56701 to 86399 seconds
	var punchOutLateGreeting = [
		"Burning the midnight oil, huh?",
		"Don\'t you love those last minute hot jobs?",
		"Getting out late, huh? At least you\'ll have a nice paycheck on Friday",
		"Just think, you\'re that much closer to having more fun here tomorrow!",
		"Now that\'s what I call dedication!"
	];
	

	var date = new Date("October 22, 2014 15:45:01");
	var day = date.getDay();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	var currentSeconds = (hour * 3600) + (minutes * 60) + seconds	
	
	if ((currentSeconds >= 0) && (currentSeconds <= 17999)) { // check for obscure punch in
		document.getElementById('greeting').innerHTML = punchInObscureGreeting[4];
	} else if ((currentSeconds >= 18000) && (currentSeconds <= 21600)) { // check for late punch in
		document.getElementById('greeting').innerHTML = punchInGreeting[0];
	} else if ((currentSeconds >= 21601) && (currentSeconds <= 43199)) { // check for late punch in
		document.getElementById('greeting').innerHTML = punchInLateGreeting[0];
	} else if ((currentSeconds >= 43200) && (currentSeconds <=56700)) { // check for punch out
		document.getElementById('greeting').innerHTML = punchOutGreeting[4];
	} else if ((currentSeconds >= 56701) && (currentSeconds <= 86399)) { // check for late punch out
		document.getElementById('greeting').innerHTML = punchOutLateGreeting[4];
	} else {
		document.getElementById('greeting').innerHTML = "wrong";
	}
	
	
}; //end function
