$(document).ready(function () {


    $("#stream1_btn").on(function () { //can use .click also
        $(".stream1").slideDown();
        $(".stream1").slideDown(1000);
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").fadeTO(1000, 0.5);
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });


});

// $(document).ready(function () {


//     $("#stream1_btn").mouseEnter(function () { //can use .click also
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream1").addClass('highlight_stream');
//     });
//     $("#stream2_btn").on("click", function () {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream2").addClass('highlight_stream');
//     });
//     $("#stream3_btn").on("click", function () {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream3").addClass('highlight_stream');
//     });


// });