(function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');

    var r = 80;
    var l = 200;
    var a = 2 * r * r / l;
    var b = Math.sqrt(a * (0.5 * l - a));
    var x = 0.5 * l - a;
    var y = b;
    var j = Math.acos(2 * r / l);
    console.log(x, y);


    /*
    ctx.beginPath();
    ctx.arc(0.5 * l, 0, r, Math.PI - j, Math.PI + j, true);
    //ctx.stroke();
    //ctx.beginPath();
    ctx.arc(-0.5 * l, 0, r, j, 2 * Math.PI - j, false);
    ctx.stroke();
    //ctx.beginPath();
    //ctx.moveTo(x, y);
    //ctx.lineTo(-x, -y);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.moveTo(-x, y);
    //ctx.lineTo(x, -y);
    //ctx.stroke();

    */
    
    var dl = 1;
    var nodes = [];
    var dlen = r * (Math.PI - j);
    for (var i = 0; i <= dlen; i += dl) {
        var de = i / r;
        nodes.push({
            x: 0.5 * l + r * Math.cos(de),
            y: Math.sin(de) * r
        });
    }
    console.log(nodes);

    var xl = 0.5 * l * Math.sin(j);
    console.log(xl);
    var xxl = Math.sqrt(0.25 * l * l - r * r);
    console.log(xxl);
    for (var i = 0; i <= xl; i+= dl) {
        nodes.push({
            x: Math.cos(0.5 * Math.PI - j) * (xl - i),
            y: Math.sin(0.5 * Math.PI - j) * (xl - i)
        });
    }
    console.log(nodes);
    var arr = []
    for (var i = 0 ; i < nodes.length; i++) {
        arr.push({
            x: nodes[i].x,
            y: nodes[i].y
        });
    }
    for (var i = 0 ; i < nodes.length; i++) {
        arr.push({
            x: -nodes[nodes.length - i - 1].x,
            y: -nodes[nodes.length - i - 1].y
        });
    }
    for (var i = 0 ; i < nodes.length; i++) {
        arr.push({
            x: -nodes[i].x,
            y: nodes[i].y
        });
    }
    for (var i = 0 ; i < nodes.length; i++) {
        arr.push({
            x: nodes[nodes.length - i - 1].x,
            y: -nodes[nodes.length - i - 1].y
        });
    }
    console.log(arr);

    /*
    arr.forEach(function(item) {
        ctx.beginPath();
        ctx.arc(item.x, item.y, 3, 0, 2 * Math.PI, false);
        ctx.fill();
    });

    */
    var nodes = [];
    var num = arr.length / 2;
    var current = 0;
    var step = 2;
    function update() {
        current -= step;
        if (current < 0) {
            current = arr.length - 1;
        }
        nodes = [];
        for (var i = 0 ; i < num; i++) {
            nodes.push(arr[(current + i) % arr.length]);
        }
    }

    function draw() {
        //console.log(nodes);
        nodes.forEach(function(item) {
            ctx.beginPath();
            ctx.arc(item.x, item.y, 3, 0, 2 * Math.PI, false);
            ctx.fill();
        });
    }

    animate();
    function animate() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
        update();
        draw();
        requestAnimationFrame(animate);
    }

})();
