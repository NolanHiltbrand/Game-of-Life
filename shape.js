//export function selectShape(shapeName){
    var tableHeight = 115;
    var tableWidth = 210;
function setShape(shapeName, index){
    if (shapeName == "blinker"){
        return index >= 12074 && index <= 12076;
    }
    if (shapeName == "toad"){
        return index >= 11865 && index <= 11867 || index >= 12074 && index <= 12076;
    }
    if(shapeName == "beacon"){
        return index == 11864 || index == 11865 || index == 12074 || index == 12287 || index == 12496 || index == 12497;
    }
    if(shapeName == "pulsar"){
        return index >= 10811 && index <= 10813 || index >= 10817 &&  index <= 10819
        || index == 11229 || index == 11234 || index == 11236 || index == 11241
        || index == 11439 || index == 11444 || index == 11446 || index == 11451
        || index == 11649 || index == 11654 || index == 11656 || index == 11661
        || index >= 11861 && index <= 11863 || index >= 11867 && index <= 11869
        || index >= 12281 && index <= 12283 || index >= 12287 && index <= 12289
        || index == 12489 || index == 12494 || index == 12496 || index == 12501
        || index == 12699 || index == 12704 || index == 12706 || index == 12711
        || index == 12909 || index == 12914 || index == 12916 || index == 12921
        || index >= 13331 && index <= 13333 || index >= 13337 && index <= 13339;
    }
    if(shapeName == "penta"){
        return index >= 12070 && index < 12080;
    }
    if (shapeName == "glider"){
        return index == 11865 || index == 12076 || index >= 12284 && index <= 12286; 
    }
    if (shapeName == "lwss"){
        return index == 11864 || index == 12075 || index == 12281 || index == 12285
        || index >= 12492 && index <= 12495;
    }
    if (shapeName == "mwss"){
        return index == 11864 || index == 12075 || index == 12280 || index == 12285
        || index >= 12491 && index <= 12495;
    }
    if (shapeName == "hwss"){
        return index == 11864 || index == 12075 || index == 12279 || index == 12285
        || index >= 12490 && index <= 12495;
    }
    if (shapeName == "usr"){
            let col = index%40;
            let row = (index-col)/40;
            let top = (tableHeight-25)/2;
            let left = (tableWidth-40)/2;
            let drow = row + top;
            let dcol = col + left;
            let idx = drow * tableWidth + dcol;
            
            return index == idx;
    }
};

