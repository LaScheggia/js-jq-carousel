$(function(){


    $('.next').click(nextImage);
    $('.prev').click(prevImage);



    function nextImage(){
        //create a ref to active img & i
        var activeImg = $('.images img.active');
        var activeHeart = $('.nav i.active');

        //remove active class from active element
        activeImg.removeClass('active');
        activeHeart.removeClass('active');


        if(activeImg.hasClass('last')){
            //add active to first
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');

        }else{
            //if last elem has not active, add to the next
            activeImg.next('img').addClass('active');
            activeHeart.next('i').addClass('active');
        };
        
    }

    function prevImage(){
        //create a ref to active img & i
        var activeImg = $('.images img.active');
        var activeHeart = $('.nav i.active');
        
        //remove active class from active element
        activeImg.removeClass('active');
        activeHeart.removeClass('active');
        
        
        if(activeImg.hasClass('first')){
            //add active to last
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        
        }else{
            //if last elem has not active, add to the next
            activeImg.prev('img').addClass('active');
            activeHeart.prev('i').addClass('active');
        };

    }













    function prevImage(){
        console.log('prev');
    }










































});
