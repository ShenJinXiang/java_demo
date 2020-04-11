$(function() {
    var timer;
    backImages = [
        './images/00001.jpeg',
        './images/00002.jpg',
        './images/00003.jpg',
        './images/00004.jpg',
        './images/00005.jpeg',
        './images/00006.jpeg',
        './images/00007.jpeg',
        './images/00008.jpeg'
    ];
    initBackImage();
    refreshTime();

    function initBackImage() {
        var index = Math.floor(Math.random() * backImages.length);
        $("#backDiv").css({
            "backgroundImage": "url(" + backImages[index] + ")"
        });
    }

    function refreshTime() {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var str = (hour > 9 ? '' + hour : '0' + hour) + ":" + (minute > 9 ? '' + minute : '0' + minute);
        $("#time").text(str);
        setTimeout(refreshTime, 1000 * 5);
    }
});
