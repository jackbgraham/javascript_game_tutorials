window.addEventListener('load', function(){
   const canvas = document.getElementById('canvas1');
   const ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   // canvas.height = window.innerHeight * .9; //use this when you make the slides at the bottom
    // canvas settings
   ctx.fillStyle = 'green';
   ctx.lineWidth = 10;
   ctx.lineCap = 'round';
   ctx.shadowColor = 'rgba(0,0,0,0.7)';
   ctx.shadowOffsetX = 10;
   ctx.shadowOffsetY = 5;
   ctx.shadowBlur = 10;

   //effect settings
    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3;
    const maxLevel = 4; //depth of the fractal/layers of fractalization
    const branches = 2; //branches per segment
    let sides = 5; //number of branches, must be an integer, or the decimals will create a branch

    let scale = 0.5; // size of the next level compared to parent branch
    let spread = 1; // angle in radians from parent branch

    let color = 'hsl('+ Math.random() * 360 + ', 100%, 50%)';
    let lineWidth = Math.floor(Math.random() * 20 + 10); // random integer between 10 and 20

    // controls
    const randomizeButton = document.getElementById('randomizeButton');
    const slider_spread = document.getElementById('spread');
    const label_spread = document.querySelector('[for="spread"]');
    slider_spread.addEventListener('change', function(e){
        spread = e.target.value;
        updateSliders();
        drawFractal();
    });
    // ctx.save();
         //this is a save point, using restore will call back to this save
    // ctx.translate(canvas.width/2, canvas.height/2);
         //this changes the origin point for object rotation
    // ctx.scale(1, 1);
         //scale
    // ctx.rotate(0);
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
            ctx.scale(scale, scale);

            ctx.save();
            ctx.rotate(spread);
            drawBranch(level + 1);
            ctx.restore();

            ctx.save();
            ctx.rotate(-spread);
            drawBranch(level + 1);
            ctx.restore();

            ctx.restore();
        }

    }
    //drawBranch(0);

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

    function drawFractal(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.translate(canvas.width/2,canvas.height/2);
        for (let i = 0; i < sides; i++){
            ctx.rotate((Math.PI * 2)/sides);
            drawBranch(0);
        }
        ctx.restore();
    }
    drawFractal();

    function randomizeFractal() {
        sides = Math.floor(Math.random() * 7 + 2);
        scale = Math.random() * 0.2 + 0.4;
        spread = (Math.random() * 2.9 + 0.1).toFixed(2);
        color = 'hsl('+ Math.random() * 360 + ', 100%, 50%)';
        lineWidth = Math.floor(Math.random() * 20 + 10);
        drawFractal()
    }
    randomizeButton.addEventListener('click', function(){
        randomizeFractal();
        updateSliders();
        drawFractal();
    });

    function updateSliders(){
        slider_spread.value = spread;
        label_spread.innerText = 'Spread: ' + spread;
    }
});
// load event fires after all assets on the page have been fully loaded
//canvas 2d API is a built in that holds all canvas drawing methods and settings
//canvas is based on a coordinate system starting at 0, 0 in the top left corner
//the y axis is vertical and increases, in pixels, towards the bottom, the x axis is horizontal
//canvas contains many methods and we can call them from the ctx variable
