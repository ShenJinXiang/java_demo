(function() {
    var drawer = {
        option: {
            baseRadius: 100,
            num: 36
        },
        init: function() {
            this.c = this.canvas = document.getElementById('canvas');
            this.w = this.c.width = window.innerWidth;
            this.h = this.c.height = window.innerHeight;
            this.ctx = this.c.getContext('2d');
            this.elements = [];
            this.initElements();
            console.log(this.elements);
            this.draw();
        },
        draw: function() {
            this.elements.forEach(function(item) {
                item.draw(drawer.ctx);
            });
        },
        initElements: function() {
            this.elements = [];
            var r = drawer.w / 10;
            var roStep = Math.PI / drawer.option.num;
            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < drawer.option.num; j++){
                    this.elements.push(new drawer.Element(2 * i * r, 0.6 * drawer.h, r, Math.PI + j * roStep, drawer.h));
                }
            }
        },
        Element: function(x, y, r, ro, len) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.ro = ro;
            this.len = len;
            this.draw = function(ctx) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.ro);
                ctx.beginPath();
                ctx.strokeStyle = '#fff';
                ctx.moveTo(r, -0.5 * len);
                ctx.lineTo(r, 0.5 * len);
                ctx.stroke();
                ctx.restore();
            }
        }
    };

    drawer.init();
})();
