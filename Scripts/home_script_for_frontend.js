document.addEventListener('DOMContentLoaded', function() {
    const wrapperList = document.querySelectorAll('.wrapper');

    for (let i = 0; i < wrapperList.length; i++) {
        const wrapper = wrapperList[i];
        var sliderIndex = parseInt(getComputedStyle(wrapper).getPropertyValue('--slider-index'));

        const leftHandle = wrapper.previousElementSibling;
        const rightHandle = wrapper.nextElementSibling;

        leftHandle.addEventListener('click', function() {
            if(sliderIndex != 0) {
                sliderIndex = sliderIndex - 0.9;
            }
            wrapper.style.setProperty('--slider-index', sliderIndex);
        });

        rightHandle.addEventListener('click', function() {
            if(sliderIndex < 2) {
                sliderIndex = sliderIndex + 0.9;
            }
            else {
                sliderIndex = 0;
            }
            wrapper.style.setProperty('--slider-index', sliderIndex);
        });
    }
});

$(document).ready(function(){
    //hide all pop ups in start
    $('.form').hide();    
    $('.overlay').hide();
    $('.main').prop('disabled', false);
    
    $('.login-btn').click(function(){   //if login button is clicked

        $('.overlay').show(50);         //show the overlay filter
        $('.register-form').hide(50);   //hide previous register form if visible
        $('.login-form').show(50);      //show login form

        $('.main').on('wheel', function(event) {    //disable the scroll on the background page,
            event.preventDefault();                 //buttons are automatically disabled by the overlay filter
          });
    });

    $('.register-btn').click(function(){

        $('.overlay').show(50);         //show the overlay filter
        $('.login-form').hide(50);      //hide previous login form if visible
        $('.register-form').show(50);   //show registeration form
        
        $('.main').on('wheel', function(event) {     //disable the scroll on the background page,
            event.preventDefault();                  //buttons are automatically disabled by the overlay filter
          });
    });

    $('.icon-close').click(function(){
        $('.form').hide(50);
        $('.overlay').hide(20);
        $('.main').off('wheel');
    })

});

