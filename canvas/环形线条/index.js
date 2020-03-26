(function() {
    var canvas = document.getElementById('canvas');
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    R = 300;
    r = 150;
    num = 100;

    ctx.save();
    ctx.translate(w / 2, h / 2);

    var step = 2 * Math.PI / num;
    console.log(step);
    console.log(step * 180 / Math.PI);
    ctx.strokeStyle = '#084';
    for (var i = 0 ; i < num; i++) {
        ctx.rotate(step);
        ctx.beginPath();
        ctx.moveTo(r, -Math.sqrt(R * R - r * r));
        ctx.lineTo(r, Math.sqrt(R * R - r * r));
        ctx.stroke();
    }
    ctx.restore();
})();
