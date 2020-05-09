$(function() {
    bindEvent();

    function bindEvent() {
        $("#addBtn").click(function() {
            window.open('/books/addPage', "_self");
        });
    }
});