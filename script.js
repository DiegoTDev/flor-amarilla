const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;

let angle = 0;
function drawFlower() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(150, 200);
    
    // Tallo
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -100);
    ctx.stroke();
    
    // Pétalos
    for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate((Math.PI / 3) * i + angle);
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.ellipse(0, -40, 25, 40, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    
    // Centro de la flor
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
    angle += 0.02;
    requestAnimationFrame(drawFlower);
}

drawFlower();