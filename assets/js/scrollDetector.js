$(window).scroll(function() {
    var $this = $(this);
    if ($this.scrollTop() >= 150) {
        $(".navbar").addClass("scrolled");
    } else {
        $(".navbar").removeClass("scrolled");
    };
});