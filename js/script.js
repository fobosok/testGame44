$(document).ready(() => {
    let difficulty = 0;
    let centerContent = $('#centerContent');
    let arrParents = $.makeArray($('.btn-secondary'));
    let array = [];
    let timer = null;
    let timeCounter = null;
    let temp = 0;
    let leftCounter=0;
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
    function lock(locked)
    {
        $('#centerContent :button').prop('disabled',locked);
    }
    function initializationFunction(numb, vhVal)
    {
        for (let i = 0; i < numb; i++)
        {
            array.push(i);
        }
        shuffle(array);
        centerContent.css('margin-top',vhVal);
        $('#playDiv').css('display','none');
        $('#buttonsGroup').css('display','none');
        for (let i = 0; i < numb; i++)
        {
            setTimeout(()=>{
                $('body>#content>#centerContent').append(`<button id = "${array[i]}" type="button" disabled class="btn btn-dark btn-circle grid-btn">${array[i]}</button>`);
                if(i===numb-1)
                {
                    setTimeout(()=>{
                        lock(false);
                        centerContent.find('.grid-btn').on('click',func);
                        $('#leftContent').css('visibility','visible');
                        timer=setInterval(()=>{
                            $('#Time').text(++timeCounter);
                        },1000);
                    },500);
                }
            },i*100);
        }
    }
    $('#play').on('click',()=>{

        switch(difficulty)
        {
            case(1):
                centerContent.addClass('difficultyLow');
                initializationFunction(16,'10vh');
                break;
            case(2):
                centerContent.addClass('difficultyMedium');
                initializationFunction(25,'2vh');
                break;
            case(3):
                centerContent.addClass('difficultyHard');
                initializationFunction(36,'2vh');
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
    $('#restartBtn').on('click',()=>{
        centerContent.find('.grid-btn').remove();
        $('#leftContent').css('visibility','hidden');
        difficulty = 0;
        array = [];
        clearInterval(timer);
        timeCounter=0;
        temp = 0;
        centerContent.removeClass('difficultyLow');
        centerContent.removeClass('difficultyMedium');
        centerContent.removeClass('difficultyHard');
        centerContent.css('margin-top','25vh');
        $('#playDiv').css('display','flex');
        $('#buttonsGroup').css('display','flex');
        $('#Time').text(0);
        $('#Errors').text(0);
        $('.btn-group>label').removeClass('active');
    });
    function func ()
    {
        let diffTemp = null;
        if (difficulty === 1) {
            diffTemp = 15;
        } else if (difficulty === 2) {
            diffTemp = 24;
        } else if (difficulty === 3) {
            diffTemp = 36;
        }
        let block = $(event.target);
        if (temp.toString() === block.attr('id')) {
            block.css('background', 'green');
            block.addClass('greenBlock');
            temp++;
            if (temp === diffTemp+1) {
                clearInterval(timer);
                setTimeout(()=>{
                    $('#restartBtn').trigger('click');
                },1000);
            }
        } else {
            let defColor = block.css('background-color');
            if (block.hasClass('greenBlock')) {
            } else {
                $('#Errors').text(++leftCounter);
                block.css('background', 'red');
                block.prop('disabled', true);
                setTimeout(() => {
                    block.css('background-color', defColor);
                    block.prop('disabled', false);
                }, 1000);
            }
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