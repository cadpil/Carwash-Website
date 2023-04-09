// $("#slider").on("input change", (e)=>{
//     //console.log(e)
//     const sliderPos = e.target.value;
//     // Update the width of the foreground image
//     //console.log('hi')
//     $('#before-image').css('width', `${sliderPos}%`)
//     // Update the position of the slider button
//     $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
// });

// $(".juxtapose").on('load', function() {
//     console.log('load')
//     $("#copied-iframe").empty().append($('.juxtapose').contents().find('body').html());
// });

// // $.ajax({
// //     url: 'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=9e465aa0-d6be-11ed-b5bd-6595d9b17862',
// //     success: function(data) {
// //         $('#source').html(data);
// //         $('#show').text(function(){
// //             if (data.indexOf('Text') != -1) {
// //                 return 'Can see text!';
// //             }
// //             else {
// //                 return "Can't see text!";
// //             }
// //         });
// //     },
// //     error: function(){
// //         console.log(error);
// //     }
// // });