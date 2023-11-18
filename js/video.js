var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log ('auto play is set to ' + video.autoplay)
	console.log ('auto play is set to ' + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.loop = true;
	volumeSlider = document.querySelector("#slider");
	volumeDisplay = document.querySelector("#volume");
	volume = volumeSlider.value / 100;
	video.volume = volume;
	volumeDisplay.textContent = volumeSlider.value + "%";
})

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video")
	video.pause();
	video.loop = false;
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.9;
	console.log("New playback rate: " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.1111;
	console.log("New playback rate: " + video.playbackRate.toFixed(5));
})

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime +=10;
	}
	console.log("Current video time: " + video.currentTime.toFixed(2));
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	volumeDisplay = document.querySelector("#volume");
	video.volume = 0;
	volumeDisplay.textContent = "0%";
})

document.querySelector("#slider").addEventListener("input", function(){
	video = document.querySelector("#player1");
	volumeSlider = document.querySelector("#slider");
	volumeDisplay = document.querySelector("#volume");
	volume = volumeSlider.value / 100;
	video.volume = volume;
	volumeDisplay.textContent = volumeSlider.value + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})

