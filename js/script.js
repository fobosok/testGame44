$(document).ready(() => {
    let difficulty = 0;
    let arrParents = $.makeArray($('.btn-secondary'));
    let centerContent = $('#centerContent');
    let array = [];
    $('input').on('click',()=>{
        $(event.target).parent().addClass('active');
        $('#play').removeAttr('disabled');
        for(let i = 0; i < arrParents.length;i++)
        {
            if($(event.target).parent().attr('id') !== arrParents[i].id)
            {
                $(arrParents[i]).removeClass('active');
            }
            else
            {
                difficulty = i+1;
            }
        }
    });
    $('#play').on('click',()=>{
        switch(difficulty)
        {
            case(1):
                centerContent.addClass('difficultyLow');
                initializationFunction(16);
                break;
            case(2):
                centerContent.addClass('difficultyMedium');
                initializationFunction(25);
                break;
            case(3):
                centerContent.addClass('difficultyHard');
                initializationFunction(36);
                break;
        }
    });
    function shuffle(array)
    {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex)
        {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function initializationFunction(numb)
    {
        for (let i = 0; i < numb; i++)
        {
            array.push(i);
        }
        shuffle(array);
        centerContent.css('margin-top',0);
        $('#playDiv').remove();
        $('#buttonsGroup').remove();
        for (let i = 0; i < numb; i++)
        {
            // alert(numb);
            $('body>#content>#centerContent').append(`<button id = "${array[i]}" type="button" class="btn btn-dark btn-circle">${array[i]}</button>`);
        }
    }


    // let counter = 4;
    // let timerId;
    // $('.container :input').prop('disabled',true);
    //
    // let timerId2 = setInterval(function() {
    //     $('.control>.count').text(counter--);
    // }, 1000);
    // let leftCouner = 0;
    // setTimeout(function() {
    //     clearInterval(timerId2);
    //     setTimeout(()=>{
    //         $('.container :input').prop('disabled',false);
    //         $('.control>.countLeft').text(leftCouner);
    //     },1000);
    //     timerId = setInterval(()=> {
    //         $('.control>.count').text(counter++);
    //     }, 1000);
    // }, 4000);
    //
    // let temp = 0;
    //
    // $('.container > .btn').on('click', () => {
    //     let block = $(event.target);
    //     if (temp.toString() === block.attr('id'))
    //     {
    //         block.css('background', 'green');
    //         block.addClass('greenBlock');
    //         temp++;
    //         if(temp===35)
    //         {
    //             clearInterval(timerId);
    //         }
    //     }
    //     else
    //     {
    //         let defColor = block.css('background-color');
    //         if(block.hasClass('greenBlock'))
    //         {
    //         }
    //         else
    //         {
    //             $('.control>.countLeft').text(++leftCouner);
    //             block.css('background','red');
    //             block.prop('disabled',true);
    //             setTimeout(()=>{
    //                 block.css('background-color',defColor);
    //                 block.prop('disabled',false);
    //             }, 1000);
    //         }
    //     }
    // })
});