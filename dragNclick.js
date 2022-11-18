function smallDragNClick(type){
    let right_down = false
    let left_down = false

    $(type).mousedown(function(event){
        switch (event.which){
            case 1:
                left_down = true
                right_down = false
                break;
        
            case 3:
                right_down = true
                left_down = false
                break;
        }
    }).mouseup(function(event){
        switch (event.which){
            case 1:
                left_down = false
                break;
        
            case 3:
                right_down = false
                break;
        }
    });


    $(type).mouseover(function () {
        if (left_down) {
            $(this).addClass("alive")
        }
    });

    $(type).mouseover(function () {
        if (right_down) {
            $(this).removeClass("alive")
        }
    });
    
    $(type).click(function(){
        $(this).addClass("alive")
    });
    $(type).contextmenu(function(){
        $(this).removeClass("alive")
    });
}
