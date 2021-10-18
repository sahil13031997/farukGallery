var link;




function iframeCall(a) {
  link = a;

  document.getElementById('viewItemButton').style.display = 'flex';
}

function hideBox() {
  document.getElementById('instruction').style.display = 'none';
}

function openInNewWindow() {
  window.open(link);
}

function onCancelClicked()
{	
	document.getElementById('viewItemButton').style.display = 'none';
}

function onCancelClicked()
{	
	document.getElementById('viewItemButton').style.display = 'none';
}

function play(message)
{
	
	var x = document.getElementById("myAudio"); 
	x.src=window.location+'/../'+'StreamingAssets'+'/'+'markotsFarukAudio'+'/'+message+'.mp3';
	x.play();
}

function pause()
{
	console.log("sa");
	var x = document.getElementById("myAudio"); 
	
	x.pause();
}

function stop()
{
	console.log("ssa");
	var x = document.getElementById("myAudio"); 
	
	x.pause();
	x.currentTime = 0;
}