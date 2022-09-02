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
    let sides = 21;
    let maxLevel = 3;
    let spread = 0.5;
    let branches = 2;
    let scale = 0.5;
    ctx.save();
        //this is a save point, using restore will call back to this save
    ctx.translate(canvas.width/2, canvas.height/2);
        //this changes the origin point for object rotation
    ctx.scale(1, 1);
        //scale
    ctx.rotate(0);
        //this rotates from the origin point
        //these transform methods only affect the things which come after
        //javascript is top to bottom
        //addition uses of ctx.translate/scale/rotate are additive
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
        //this creates a quad
    //ctx.restore();
        //calls the save state, which means the transforms will affect only the shape called before this point
    function drawBranch(level){
        if (level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size, 0);
        ctx.stroke();
        for (let i = 0; i < branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches) * i, 0);
            ctx.rotate(spread);
            ctx.scale(scale, scale);
            drawBranch(level + 1);
            ctx.restore();

            ctx.save();
            ctx.translate(size - (size/branches) * i, 0);
            ctx.rotate(-spread);
            ctx.scale(scale, scale);
            drawBranch(level + 1);
            ctx.restore();
        }

    }
    drawBranch(0);

    // for (let i = 0; i < sides; i++){
    //
    //     ctx.beginPath();
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(size, 0);
    //     ctx.stroke();
    //     ctx.rotate((Math.PI * 2)/sides);
    // }

    // ctx.restore();
    //ctx.beginPath();
        //this draws a line and closes any previously open paths
});
// load event fires after all assets on the page have been fully loaded
//canvas 2d API is a built in that holds all canvas drawing methods and settings
//canvas is based on a coordinate system starting at 0, 0 in the top left corner
//the y axis is vertical and increases, in pixels, towards the bottom, the x axis is horizontal
//canvas contains many methods and we can call them from the ctx variable
