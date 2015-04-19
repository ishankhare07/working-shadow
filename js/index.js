$(function () {
    var shadows = document.getElementsByClassName("shadow");
    var returned_list = null;
    for(var x = 0 ; x < shadows.length ; x++) {
        returned_list = parse_letters(shadows[x].innerHTML.trim());
        shadows[x].innerHTML = "";                              //reset the inner text
        for(var span = 0; span < returned_list.length ; span++) {  //add each returned div into the element
            shadows[x].appendChild(returned_list[span]);
        }
    }
})

function parse_letters(text) {
    var span_list = []
    for(var letter = 0; letter < text.length ; letter++) {    //iter over each letter and put it inside a span
        var span = document.createElement('span');
        span.setAttribute("class","letter");
        span.appendChild(document.createTextNode(text[letter]));
        span_list.push(span);
    }
    return span_list;
}

$(document).mousemove(function (event) {
    //console.log("mouse moved");
    $('html').css({                                                 //setting the gradient dynamically
        'height' : '100%',
        'background' : "radial-gradient(circle 200px at " + 
            String(parseInt(event.pageX)) + 
            "px " +
            String(parseInt(event.pageY)) +
            "px, rgba(255,255,255,0), black)" 
    });
    var letters = document.getElementsByClassName("letter");
    for(var letter = 0 ; letter < letters.length ; letter++) {
        getShadow(letters[letter], event.pageX, event.pageY);       //call shadow-renderer to render shadows
    }
})