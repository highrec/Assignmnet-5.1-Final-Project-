function superFly()
{
    mySong = new sound("Curtis_Mayfield_Think.mp3");
    //The above function sets aside a memory for a new sound
    mySong.play();
    // My function sets up wich file i want to be played it plays by using the helper function.
    // The superFly function can be changed to my sound by changing the music file name.
}

function sound(src)
// the above funtion is a sound function it is also called a helper function. Do not change it
{
    this.sound = document.createElement("audio");
    // the above function creates an audio
    this.sound.src = src;
    //this above function is for what we sent in to be played. For example, Curtis_Mayfield_Think.mp3
    this.play = function()
    //
    {
        this.sound.play();
    }
}
// The whole above helper function is what accesses the library to create the video, play the video and the audio. It also eliminates user control
function terminateSong()
{
    window.location.reload();
    //reloading the webpage the song will stop
}