$("#slider").on("input change", (e)=>{
    //console.log(e)
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    //console.log('hi')
    $('#before-image').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});