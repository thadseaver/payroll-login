(function(){
	
	// 12:00:00 AM to 4:59:59 AM - 0 to 17999 seconds
	var punchInObscureGreeting = [
		"What in the world are you doing in here at this hour?",
		"Do you realize what time it is???",
		"I sure hope you have a lot of coffee!",
		"Hang on a second, what time is it???",
		"I don\'t even know what to say..."
	];
	
	// 5:00:00 AM to 6:00:00 AM - 18000 to 21600 seconds
	var punchInGreeting = [
		"Good morning, Thad. Are you ready for another one?",
		"Here we are. Another day to excel!",
		"Good morning, sunshine. Let\'s go make some chips!",
		"Can you believe that they pay you to play with machines all day? How cool is that?",
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
	
	// 3:45:01 PM to 11:59:59 PM - 56701 to 86399 seconds
	var punchOutLateGreeting = [
		"Burning the midnight oil, huh?",
		"Don\'t you love those last minute hot jobs?",
		"Getting out late, huh? At least you\'ll have a nice paycheck on Friday!",
		"Just think, you\'re that much closer to having more fun here tomorrow!",
		"Now that\'s what I call dedication!"
	];
	
	// Saturday greeting
	var saturdayGreeting = "Working Saturday sucks!";
	
	//"October 22, 2014 15:45:01" date for for testing
	var date = new Date();
	var day = date.getDay();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();	
	var currentSeconds = (hour * 3600) + (minutes * 60) + seconds; // convert time to seconds
	var bg = document.getElementsByTagName('body')[0];
	var defaultMessage = "Good morning Thad. Let's go make some chips!";
	
	if (day == 6) { // check if today is Saturday
		
		var randomGreeting = saturdayGreeting; // no random greeting since everything about working Saturday sucks
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/morning.jpg);background-color:#323e4d;';
		
	} else if ((currentSeconds >= 0) && (currentSeconds <= 17999)) { // check for obscure punch in

		var randomGreeting = punchInObscureGreeting[Math.floor(Math.random() * punchInObscureGreeting.length)];
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/night.jpg);background-color:#131729;';
		
	} else if ((currentSeconds >= 18000) && (currentSeconds <= 21600)) { // check for normal punch in
	
		var randomGreeting = punchInGreeting[Math.floor(Math.random() * punchInGreeting.length)];
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/morning.jpg);background-color:#323e4d;';
		
	} else if ((currentSeconds >= 21601) && (currentSeconds <= 43199)) { // check for late punch in
	
		var randomGreeting = punchInLateGreeting[Math.floor(Math.random() * punchInLateGreeting.length)];
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/afternoon.jpg);background-color:#345a97;';
		
	} else if ((currentSeconds >= 43200) && (currentSeconds <=56700)) { // check for normal punch out
	
		var randomGreeting = punchOutGreeting[Math.floor(Math.random() * punchOutGreeting.length)];
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/evening.jpg);background-color:#757c8c;';
		
	} else if ((currentSeconds >= 56701) && (currentSeconds <= 86399)) { // check for late punch out
	
		var randomGreeting = punchOutLateGreeting[Math.floor(Math.random() * punchOutLateGreeting.length)];
		document.getElementById('greeting').innerHTML = randomGreeting;
		bg.style.cssText +=';background-image:url(images/night.jpg);background-color:#131729;';
		
	} else { // in case of failure
		document.getElementById('greeting').innerHTML = defaultMessage; //
	}
	
	// Use ZeroClipboard to copy text to clipboard on button click
	var clip = new ZeroClipboard( 
		document.getElementById('button'), {
		moviePath: "zeroclipboard-master/ZeroClipboard.swf"  
	});

})(); //end function
