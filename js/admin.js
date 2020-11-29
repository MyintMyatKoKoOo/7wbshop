$(document).ready(function() {
    scrollchg();
    search();
    chart();
    chart1();
    chart2();
    chart3();
    successview();
    sidemenu();

});
function sidemenu(){
    if($("#adminside__btn").length){
        $("#adminside__btn").click(function(){
            $("#adminside").toggleClass("show");
        });
    }
}
function successview(){
    if($("#successpay_view").length){
        $("#successpay_view").click(function(){
            $("#myModalpayView").modal("show");
        });
         $("#successpay_view1").click(function(){
            $("#myModalpayView").modal("show");
        });
    }
}
function chart() {
    if ($("#myChart").length) {
        let ctx = document.getElementById('myChart');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                datasets: [{
                    label: 'Sales',
                    data: [40, 339, 23, 245, 332, 123, 456, 22, 567, 321, 724],
                    backgroundColor: [
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec",
                        "#ecec"
                    ],
                    borderColor: [
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000",
                        "#000"
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
}
function chart1() {
    if ($("#myChart1").length) {
        let ctx = document.getElementById('myChart1');
        let myChart = new Chart(ctx, {
            type: 'polarArea',
            labels: "Sales",
            data: {
                datasets: [{
                    data: [380, 660],
                    backgroundColor: [
                        "#000000",
                        "#ecec"
                    ]
                }],
                labels: [
                    'Onlineshop',
                    'Offlineshop'
                ]

            }
        });
    }
}
function chart2(){
    if($("#myChart2").length){
        let ctx=document.getElementById("myChart2").getContext("2d");
        let chart=new Chart(ctx,{
            type:'line',
            data:{
                labels:['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
                datasets:[{
                    backgroundColor:"#ecec",
                    label:"Viewers",
                    data:[
                    432,355,323,67,326,337,467,32,678,443,897,
                    ],
                    pointBackgroundColor:"#000",
                    borderWidth:1,
                    fill:true,
                    lineTension:0.1,
                    borderCapStyle:"butt"
                }]
            }
        });
    }
}
function chart3(){
    if($("#myChart3").length){
        let ctx=document.getElementById("myChart3").getContext("2d");
        let chart=new Chart(ctx,{
            type:'line',
            data:{
                labels:['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
                datasets:[{
                    backgroundColor:"#000000",
                    label:"Expense",
                    data:[
                    132,155,36,97,126,37,67,132,78,83,197,
                    ],
                    pointBackgroundColor:"#000000",
                    borderWidth:1,
                    fill:false,
                    borderColor:"#000000",
                    lineTension:0.1,
                    borderCapStyle:"butt"
                }]
            }
        }); 
    }
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