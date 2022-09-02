window.addEventListener('load', function(){
   const canvas = document.getElementById('canvas1');
   const ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth * 0.8;
   canvas.height = window.innerHeight * 0.8;
    // canvas settings
   ctx.fillStyle = 'green';
   ctx.strokeStyle = 'yellow';
   ctx.lineWidth = 30;
   ctx.lineCap = 'round';

   //effect settings
    let size = 200;
    ctx.save();
        //this is a save point, using restore will call back to this save
    ctx.translate(100, 100);
        //this changes the origin point for object rotation
    ctx.scale(0.5, 0.5);
        //scale
    ctx.rotate(5);
        //this rotates from the origin point
        //these transform methods only affect the things which come after
        //javascript is top to bottom
        //addition uses of ctx.translate/scale/rotate are additive
    ctx.fillRect(0, 0, canvas.width, canvas.height);
        //this creates a quad
    ctx.restore();
        //calls the save state, which means the transforms will affect only the shape called before this point
    ctx.beginPath();
        //this draws a line and closes any previously open paths
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo(size, canvas.height/2);
    ctx.stroke();
});
// load event fires after all assets on the page have been fully loaded
//canvas 2d API is a built in that holds all canvas drawing methods and settings
//canvas is based on a coordinate system starting at 0, 0 in the top left corner
//the y axis is vertical and increases, in pixels, towards the bottom, the x axis is horizontal
//canvas contains many methods and we can call them from the ctx variable
