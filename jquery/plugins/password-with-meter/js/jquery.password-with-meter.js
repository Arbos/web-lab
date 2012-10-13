(function($) {
    $.fn.passwordWithMeter = function(passwordMeter) {
        $(passwordMeter).addClass("password-meter").append("<div class='password-meter-bar'><div></div></div><div>&nbsp;</div>");

        return this.each(function() {
            $(this).bind("keyup", function() { 
                var score = zxcvbn($(this).val()).score;
                var bar_div = $(".password-meter-bar div", $(passwordMeter));
                bar_div.removeClass();
                var text_div = $("> :nth-child(2)", $(passwordMeter));
                text_div.removeClass();
     
                if($(this).val() == "") {
                    text_div.html("&nbsp;");
                }
                else if(score == 0) {
                    text_div.text("Very weak"); 
                }
                else if(score == 1) {
                    text_div.text("Weak"); 
                    text_div.addClass("weak-password");
                    bar_div.addClass("weak-password");
                }
                else if(score == 2) {
                    text_div.text("Acceptable"); 
                    text_div.addClass("acceptable-password");
                    bar_div.addClass("acceptable-password");
                }
                else if(score == 3) {
                    text_div.text("Good"); 
                    text_div.addClass("good-password");
                    bar_div.addClass("good-password");
                }
                else if(score >= 4) {
                    text_div.text("Excellent!");
                    text_div.addClass("excellent-password");
                    bar_div.addClass("excellent-password");
                }
            });
        });
    }
})(jQuery);
