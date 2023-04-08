function moveSlider(e) {
    //console.log(e)
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    //console.log('hi')
    $('#before-image').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
}

$("#slider").on("input change", (e)=>{
    moveSlider(e);
});

document.querySelector('#slider').addEventListener('touchstart', (e)=>{
    moveSlider(e);
})
document.querySelector('#slider').addEventListener('touchmove', (e)=>{
    moveSlider(e);
})
document.querySelector('#slider').addEventListener('touchend', (e)=>{
    moveSlider(e);
})