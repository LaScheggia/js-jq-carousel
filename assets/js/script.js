$(function(){





    $('.next').click(nextImage);
    $('.prev').click(prevImage);



    function nextImage(){
        //create a ref to active img & i
        var activeImg = $('.images img.active');
        var activeHeart = $('.nav i.active');
        var activeCar = $('.car-names div.active');

        //remove active class from active element
        activeImg.removeClass('active');
        activeHeart.removeClass('active');
        activeCar.removeClass('active');


        if(activeImg.hasClass('last')){
            //add active to first
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
            $('.car-names div.first').addClass('active')

        }else{
            //if last elem has not active, add to the next
            activeImg.next('img').addClass('active');
            activeHeart.next('i').addClass('active');
            activeCar.next('div').addClass('active');
        };
        
    }

    function prevImage(){
        //create a ref to active img & i
        var activeImg = $('.images img.active');
        var activeHeart = $('.nav i.active');
        var activeCar = $('.car-names div.active');
        
        //remove active class from active element
        activeImg.removeClass('active');
        activeHeart.removeClass('active');
        activeCar.removeClass('active');
        
        
        if(activeImg.hasClass('first')){
            //add active to last
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
            $('.car-names div.last').addClass('active');
        
        }else{
            //if last elem has not active, add to the next
            activeImg.prev('img').addClass('active');
            activeHeart.prev('i').addClass('active');
            activeCar.prev('div').addClass('active');
        };

    }


/*     //making the text go blink blink blink

     var blink = document.getElementById('scheggia');
      setInterval(function() {
        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
      }, 500);  */




    //ps. i did some searches online lol
    consoleText(['Nice to meet you', 'Enjoy your staying', 'Made with Love <3'], 'text', ['rgb(255,171,64)','rgb(239,108,0)','rgb(213,0,0)']);
    
    // dichiaro la funzione
    function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
        }, 1000)
        } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
        }
    }, 120)
    window.setInterval(function() {
        if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

        } else {
        con.className = 'console-underscore'

        visible = true;
        }
    }, 400)
    }


});
