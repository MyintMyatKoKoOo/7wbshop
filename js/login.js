$(document).ready(function() {
    scrollchg();
    loginregister();
    search();
});

function scrollchg() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#header").addClass("sticky");
            $("#header_list li a").addClass("text-dark");
            $("#header #logo_text").addClass("text-dark");
            $("#header i").addClass("text-dark");
        } else {
            $("#header").removeClass("sticky");
            $("#header_list li a").removeClass("text-dark");
            $("#header #logo_text").removeClass("text-dark");
            $("#header i").removeClass("text-dark");
        }
    });
}

function search() {
    $("#search").click(function() {

        if ($("#search_wraper").length) {
            $("#search_wraper").remove();
        } else {
            let div = $("<div>", {
                "id": "search_wraper"
            });

            let input = $("<input>", {
                "class": "form-control",
                "id": "search_input",
                "placeholder": "Search"
            }).keydown(function(e) {
                if (e.which == 13) $("#search_btn").click();
            });
            let searchbtn = $("<input>", {
                "type": "submit",
                "id": "search_btn"
            }).css({
                display: "none"
            }).click(function() {
                alert("Searching.....");
            });
            let close = $("<span>", {
                "id": "search_close"
            }).html("&times;").click(function() {
                $(this).parent().remove();
            });
            div.append(searchbtn);
            div.append(input);
            div.append(close);

            $(header).append(div);
        }

    });
}

function loginregister() {
    if ($("#lrsys_btn").length) {
        $("#lrsys_btn").click(function() {
            if ($("#lrsys_btn").text() == "Sing In") {
                $("#lrsys__wrap").css({
                    "margin-left": "568px"
                });
                $("#lrsys_btn").text("Create Account");
            } else {
                $("#lrsys__wrap").css({
                    "margin-left": "0px"
                });
                $("#lrsys_btn").text("Sing In");
            }

        });
    }
    if ($("#mb-signin").length && $("#mb-createaccount").length) {
        $("#mb-signin").click(function() {
            $("#mb-signinpage").show();
            $("#mb-createaccountpage").hide();
            $("#mb-signin").css({
                "background": "#ecec"
            });
            $("#mb-createaccount").css({
                "background": "#ffffff"
            });
        });
        $("#mb-createaccount").click(function() {
            $("#mb-signinpage").hide();
            $("#mb-createaccountpage").show();
            $("#mb-signin").css({
                "background": "#ffffff"
            });
            $("#mb-createaccount").css({
                "background": "#ecec"
            });
        });
    }
}