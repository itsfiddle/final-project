		// List of prompts for the user
	var prompts = [
			'Type an animal',
			'Type a food',
			'Type a noun',
			'Type the previous noun again',
			'Type a verb',
			'Type another verb',
			'Type another verb',
			'Type another verb',
			'Type a noun',
			'Type a location',
			'Type a noun',
			'Type another noun',
			'Type a location',
			'Type a verb',
			'Type a food',
			'Type a game',
			'Type a verb',
			'Type a noun',
			'Type another noun',
			'Type a plural noun',
			'Type the previous plural noun again',
			'Type a verb ending in -ing',
			'Type a verb',
			'Type a plural noun',
			'Type a verb'
		   ];

		
		var answers=[];
		// Keep track of current prompt we're on
		var currentPrompt = 0;

		// A function that will call the next prompt
		var nextPrompt = function() {
		  //if there's no answer in the form
		  if (currentPrompt != 0){
			answers.push($('input').val());
		  }
			// if there is a npext prompt
			if (currentPrompt < prompts.length) {
				// put first prompt in all html elements with class 
				$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
				// move the next prompt into variable currentPrompt 
				currentPrompt = currentPrompt + 1;
			}
			//or else if we're at the end of the array
			else {
				// put a new message into the html.
				showFinal();
			}
		}

		//puts user answers into HTML
		var showFinal = function() {
		  $('.prompt').html('If you give a<span class="fill">'+answers[0]+'</span> a <span class="fill">'+answers[1]+'</span>. They are going to ask for a <span class="fill">'+answers[2]+'</span>. When you five them the <span class="fill">'+answers[3]+'</span>. They will want to <span class="fill">'+answers[4]+'</span>. When they are finished, they will <span class="fill">'+answers[5]+'</span>. Then they will <span class="fill">'+answers[6]+'</span> and <span class="fill">'+answers[7]+'</span> to the <span class="fill">'+answers[8]+'</span>. Since that does not work, they will want to go to </span class="fill">'+answers[9]+'</span>. On the way, they will see a <span class="fill">'+answers[10]+'</span> and will want to <span class="fill">'+answers[11]+'</span>. Then you will have to take them to the <span class="fill">'+answers[12]+'</span>. They will <span class="fill">'+answers[13]+'</span>. When they are done, they will ask you for some <span class="fill">'+answers[14]+'</span>. On the way home they will start a game of <span class="fill">'+answers[15]+'</span>. When you finally get home you will have to <span class="fill">'+answers[16]+'</span>. Then they will want a <span class="fill">'+answers[17]+'</span>. You will have to find a <span class="fill">'+answers[18]+'</span> and <span class="fill">'+answers[19]+'</span>. When they see the <span class="fill">'+answers[20]+'</span>, they will start <span class="fill">'+answers[21]+'</span>. Then they will <span class="fill">'+answers[22]+'</span> out of <span class="fill">'+answers[23]+'</span>. Of course, when they are finished they will want to <span class="fill">'+answers[24]+'</span>.');
		  $('button').hide();
		}
		// run nextPrompt function when button is clicked
		$('button').click(function() {
			nextPrompt();


		

		});

		// Show the first prompt as soon as js loads
		nextPrompt();