$(document).ready(function() {
    shopcart();
    orderbtn();
    search();
    scrollchg();
});

function orderbtn() {
    if ($("#order__btn").length) {
        uploadimg();
        $("#order__btn").click(function() {
            $("#payment").css({
                "visibility": "visible"
            });
        });
        $("#payment__btn").click(function(){
           location.reload();
        });
    }
}

function shopcart() {
    $("#carttable__quantity-plus1").click(function() {
        let num = +$("#carttable__quantity-num1").text();
        num++;
        $("#carttable__quantity-num1").text(num);
    });
    $("#carttable__quantity-minus1").click(function() {
        let num = +$("#carttable__quantity-num1").text();
        if (num > 0) num--;
        $("#carttable__quantity-num1").text(num);
    });
    $("#carttable__quantity-plus2").click(function() {
        let num = +$("#carttable__quantity-num2").text();
        num++;
        $("#carttable__quantity-num2").text(num);
    });
    $("#carttable__quantity-minus2").click(function() {
        let num = +$("#carttable__quantity-num2").text();
        if (num > 0) num--;
        $("#carttable__quantity-num2").text(num);
    });
}

function uploadimg() {
    if ($("#upload__btn").length) {
        $("#upload__btn").click(function() {
            $("#payment__input").click();
        });

        $("#payment__input").change(function() {
            let file = this.files[0];
            if (file) {
                let reader = new FileReader();
                reader.addEventListener("load", function() {
                    $("#payment__img2").attr("src", this.result);
                });
                reader.readAsDataURL(file);
            }
        });
    }
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