function getShadow(element, xPos, yPos) {
    var h_scale = -1/10;
    var v_scale = -1/10;
    
    var element_bounds = element.getBoundingClientRect();
    var current_left = element_bounds.left;
    //current_left = Number(current_left.slice(0, current_left.length - 2));      //slicing & converting "100px" to 100
    console.log("current_left : " + current_left);
    var current_top = element_bounds.top;
    //current_top = Number(current_top.slice(0, current_top.length - 2));
    console.log("current_right : " + current_top);
    
    var new_shh = h_scale * (xPos - current_left);
    var new_shv = v_scale * (yPos - current_top);
    
    var distance = calculate_distance(new_shh, new_shv);                //determines the blur effect of shadow
    console.log("new_shh : " + new_shh);
    console.log("new_shv : " + new_shv);
    console.log("distance : " + distance);
    
    renderShadow(element, new_shh, new_shv, distance);
}

function calculate_distance(left, top) {
    return Math.sqrt( 
        (Math.pow(left, 2))
        +
        (Math.pow(top, 2))
    );
}

function renderShadow(element, horizontal, vertical, blur) {
    //console.log("rendering element : " + element);
    element.style.textShadow = String(horizontal) + "px " + String(vertical) + "px " + String(blur) + "px";
    //console.log("rendered");
}