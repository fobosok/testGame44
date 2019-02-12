$(document).ready(() => {
    let difficulty = 0;
    let arrParents = $.makeArray($('.btn-secondary'));
    $('input').on('click',()=>{
        $(event.target).parent().addClass('active');
        alert($(event.target).attr('id'));
        for(let i = 0; i < arrParents.length;i++)
        {
            if($(event.target).parent().attr('id') !== arrParents[i].id)
            {
                $(arrParents[i]).removeClass('active');
            }
        }
    });
    alert('test');
    // function shuffle(array) {
    //     let currentIndex = array.length, temporaryValue, randomIndex;
    //
    //     while (0 !== currentIndex) {
    //
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;
    //
    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }
    //     return array;
    // }
    //
    // let arr = [];
    // for (let i = 0; i < 36; i++) {
    //     arr.push(i);
    // }
    // shuffle(arr);
    // for (let i = 0; i < 36; i++) {
    //     $('body>.container').append(`<button id = "${arr[i]}" type="button" class="btn btn-dark btn-circle">${arr[i]}</button>`);
    // }
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