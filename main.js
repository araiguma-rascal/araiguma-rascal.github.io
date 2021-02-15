function header() {
    $.ajax({
        url: "include/header.html",
        cache: false,
        success: function (html) {
            document.write(html);
        }
    });
}