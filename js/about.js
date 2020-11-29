$(document).ready(function() {
    counter();
    scrollreveal();
    search();
    scrollchg();
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

function counter() {
    let stnum = +$("#st__num").data("number");
    let tenum = +$("#te__num").data("number");
    let awnum = +$("#aw__num").data("number");
    let speed = 20;
    setInterval(function() {
        let stnum_html = +$("#st__num").text();
        if (stnum_html < stnum) {
            $("#st__num").text(Math.floor(stnum_html + (stnum / speed)));
        }
        let tenum_html = +$("#te__num").text();
        if (tenum_html < tenum) {
            $("#te__num").text(Math.floor(tenum_html + (tenum / speed)));
        }
        let awnum_html = +$("#aw__num").text();
        if (awnum_html < awnum) {
            $("#aw__num").text(Math.ceil(awnum_html + (awnum / speed)));
        }
    }, 100);
}

function scrollreveal() {
    let slideUp = {
        distance: "100px",
        origin: "bottom",
        delay: 100,
        duration: 800,
        reset: true
    };
    ScrollReveal().reveal('#scrollrev', slideUp);
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