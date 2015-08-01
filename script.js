var audiobox = document.querySelector('ul.player');
audiobox.addEventListener('click', function (e) {
	//get the data-source attribute of the element I have clicked on
	var songName = e.target.getAttribute('data-src');
	//i need to whether a song is playing or not
	var audioPlayer = document.querySelector('#player'); 

	if(audioPlayer) {

		//if any audio is playing which has been playing previously 
		if(songName === audioPlayer.getAttribute('src')) {

			if(audioPlayer.paused) {
			audioPlayer.play();
			e.target.id = 'playing';
			} else {
				audioPlayer.pause();
				e.target.id = 'paused';
			}

		} else { //we clicked on a song which different than the song I am playing
			audioPlayer.src = songName;
			audioPlayer.play();
			if (document.querySelector('#playing')) { //check to see if something has id of #playing
				//need to change the UI of the image of the media player, lets look for in the document has the id 'playing'
				document.querySelector('#playing').id = '';
				//now set the target what song I clicked on with the id of 'playing'
				e.target.id = 'playing';
			} else {
				document.querySelector('#paused').id = '';
				e.target.id = 'playing';
			}
			
		}

		

	} else {
		var audioPlayer = document.createElement('audio');
		audioPlayer.id = 'player';
		e.target.id = 'playing';
		audioPlayer.src = songName;
		document.body.appendChild(audioPlayer);
		audioPlayer.play();
		
		audioPlayer.addEventListener('ended', function () {
			audioPlayer.parentNode.removeChild(audioPlayer);
			e.target.id = '';
		}, false);
	}

	

}, false);