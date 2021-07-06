var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add()  {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image(); 
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;


}

function uploadBackground () {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover () {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);


}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPreassed = e.keyCode;
    console.log(keyPreassed);

    if(keyPreassed == '38')
    {
        up();
        console.log("up");

    }

    if(keyPreassed == '40')
    {
        down();
        console.log("down");
        
    }

    if(keyPreassed == '37')
    {
        left();
        console.log("left");
        
    }

    if(keyPreassed == '39')
    {
        right();
        console.log("right");
        
    }
}
