$(function() {
    glider();
    scrollreveal();
    search();
    scrollchg();
    showdetail();
});
function showdetail(){
     $("#items__overlay #items__overlay-view").each(function(k,v){
       v.addEventListener("click",function(){
          window.location.href="detail.html";
       })
    });
}
function glider() {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots: "#dots",
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
}

function scrollreveal() {
    let slideUp = {
        distance: "100px",
        origin: "bottom",
        delay: 700,
        duration: 700,
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