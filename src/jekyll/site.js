$(document).ready(function() {
    var animEndEv = "webkitAnimationEnd animationend";
    var animatedElements = $(this).find(".animated");
    // var hamburgerBtn = $(".hamburger-js");

    // hamburgerBtn.click(function() {
    //     $(this).toggleClass("is-active");
    // });

    animatedElements.each(function() {
        var $this = $(this);

        if (!$this.hasClass("animation-ended")) {
            var animationInType = $this.data("animation-in");
            var animationOutType = $this.data("animation-out");
            var animationDelay = $this.data("animation-delay");

            setTimeout(function() {
                $this.addClass("animation-ended " + animationInType, 100).on(animEndEv, function() {
                    $this.removeClass(animationInType);
                });
            }, animationDelay);
        }
    });
});
