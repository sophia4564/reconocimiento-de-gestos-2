nosex = 0
nosey = 0
diference = 0
rightwristx = 0
leftwristx = 0
 
function setup() {
video = createcapture(video)
 video.size(550 , 500)  
  
canvas = createcanvas(550,500) 
canvas.position(560,150)
Posenet =ml5.Posenet(video , modelloaded)
Posenet.on('pose' ,gotposes)
}

function modelloaded()
{
console.log('posenet is initialized')
}


function gotposes(results)
{
if(results.length >0)
{
console.log(results)
nosex =results[0].pose.nosex
nosey =results[0].pose.nosey
console.log("nosex ="+ nosex+"nosey"+ nosey)
rightwristx = results[0].pose.nosex
leftwristx  = results[0].pose.nosey
diference = floor(rightwristx - leftwristx )
console.log("leftwristx"+ leftwristx +"rightwristx"+ rightwristx )
}        
}