$(function () {
    var shadows = document.getElementsByClassName("shadow");
    for(var x = 0 ; x < shadows.length ; x++) {
        var returned_list = null;
        returned_list = parse_letters(shadows[x].innerHTML.trim());
        shadows[x].innerHTML = "";                              //reset the inner text
        for(var div = 0; div < returned_list.length ; div++) {  //add each returned div into the element
            shadows[x].appendChild(returned_list[div])
        }
    }
})

function parse_letters(text) {
    var div_list = []
    for(var letter = 0; letter < text.length ; letter++) {    //iter over each letter and put it inside a div
        var div = document.createElement('span');
        div.appendChild(document.createTextNode(text[letter]));
        div_list.push(div);
    }
    return div_list;
}

/*$(document).mousemove(function (event) {
    //console.log("mouse moved");
    $(".shadow").css("text-shadow",String(event.pageX) + 'px ' + String(event.pageY) + 'px');
})
*/