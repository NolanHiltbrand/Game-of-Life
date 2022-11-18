$(function (){
    var table = [];
    var interval;
    var nbGeneration = 0;
    var aliveCell;

    var tableHeight = 115;
    var tableWidth = 210;

    // Création du tableau 115x210
    for (let i = 0; i < tableHeight; i++){
        $("table#main").append("<tr class='row'></tr>");
    }
    for (let j = 0; j < tableWidth; j++){
        $("tr.row").append("<td class='cell'></td>");
    }

    //Génération du tableau de création de formes
    for (let i = 0; i < 25; i++){
        $("table#creationTable").append("<tr class='creationRow'></tr>");
    }
    for (let j = 0; j < 40; j++){
        $("tr.creationRow").append("<td class='creationCell'></td>");
    }

    // Drag and Click
    smallDragNClick("td.creationCell")


    //Génération des cellules
    // Génération random
    {
    $("input[name ='random']").click(function (){
        $("td.cell").each(function (index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            function getRandom(){
                return Math.floor(Math.random()*100);
            }
            let rnd = getRandom();
            if (rnd > 50){
                $(elem).addClass("alive");
                table[index] = true;
            }else {
                table[index] = false;
            }
        });
        
    });

    // Génération Blinker
    $("input[name='blinker']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("blinker", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });

        
    });

    // Génération Toad
    $("input[name='toad']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("toad", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
        
    });

    // Génération Beacon
    $("input[name='beacon']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("beacon", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
    });

    // Génération Pulsar
    $("input[name='pulsar']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("pulsar", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
        
    });

    // Génération Penta-decathlon
    $("input[name='penta']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("penta", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
        
    });

    // Génération Glider
    $("input[name='glider']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("glider", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
    });

    // Génération Light-weight spaceship
    $("input[name='lwss']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("lwss", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
        
    });

    // Génération Middle-weight spaceship
    $("input[name='mwss']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("mwss", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
    });

    // Génération High-weight spaceship
    $("input[name='hwss']").click(function(){
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
            if (setShape("hwss", index) == true){
                $(elem).addClass("alive");
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
        
    });
    }
    // Génération usr Creation
    $("input[name = 'generate_usrShape']").click(function(){
        $("td.cell").each(function(mainIndex, mainElem){
                if ($(mainElem).hasClass("alive")){
                    $(mainElem).removeClass("alive");
                    table[mainIndex] = false;
                }
            });


        $("td.creationCell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                let col = index%40;
                let row = (index-col)/40;
                let top = (tableHeight-25)/2;
                let left = (tableWidth-40)/2;
                let drow = row + top;
                let dcol = col + left;
                let idx = drow * tableWidth + dcol;

                $("td.cell").eq(idx).addClass("alive");
                table[idx] = true;
            }
        });
    });


    function getRules(){
        nbGeneration++;
        $("h3#nbGeneration").html("Génération : " + nbGeneration);

        $("td.cell").each(function (index, elem){

            var neighbor = countNeighbor(index);

            if ($(elem).hasClass("alive")) {
                if (neighbor < 2 || neighbor > 3) {
                    $(elem).removeClass("alive");
                }
            }else {
                if (neighbor == 3){
                    $(elem).addClass("alive");
                }
            }
        });
        $("td.cell").each(function (index){
            if ($(this).hasClass("alive")){
                table[index] = true;
            }else {
                table[index] = false;
            }
        });
    }

    function countNeighbor(cellIndex){
        var nbNeighbor = 0;
        for (let i = 0; i < 3; i++){
            if (cellIndex > 210){
                if (table[cellIndex - 211 + i] == true){
                    nbNeighbor++;
                }
            }
            if (table[cellIndex - 1 + i] == true){
                nbNeighbor++;
            }
            if (table[cellIndex + 209 + i] == true){
                nbNeighbor++;
            }
        }

        if (table[cellIndex] == true){
            return nbNeighbor - 1;
        }

        return nbNeighbor;
    }

    function startLoop(){
        getRules();
        interval = setInterval(getRules, 50);
    }

    function endLoop(){
        interval = clearInterval(interval);
    }

    // USR Creation Button
    $("input#clearUsr").click(function(){
        $("td.creationCell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
            }
        });
    });


    $("form").on("submit", function (e){
        e.preventDefault();
    });
    let test = false;

    // Main Buttons
    $("input#start").click(function() {
        test = !test;
        if (test){
            startLoop();            
            $("#start").attr("value", "Stop");
        }else {
            endLoop();
            $("#start").attr("value", "Start");
        }
        $("td.cell").each(function(index, elem){
            if ($(elem).hasClass("alive")){
                table[index] = true;
            }else{
                table[index] = false;
            }
        });
    });

    $("input#clear").click(function(){
        $("td.cell").each(function (index, elem){
            if ($(elem).hasClass("alive")){
                $(elem).removeClass("alive");
                table[index] = false;
            }
        });
        nbGeneration = 0;
        $("h3#nbGeneration").html("Génération : " + nbGeneration);
        endLoop();
        $("#start").attr("value", "Start");
    });


    // Définir les bordures du tableau
    $('td.cell').each(function (index) {
        let nb_cell_alive = 0
        for (let x = -1; x <= 1; x++) {
            for (let y = -tableHeight; y <= tableHeight; y += tableHeight) {
                if (index % tableHeight == 0 && x == -1){
                    x++
                }
                else if (index % tableHeight == tableHeight - 1 && x == 1){
                    x += tableHeight * tableHeight + 1
                }

                if (table[index + x + y] == 1) {

                    nb_cell_alive++
                }

            }
        }
        for (let x = -1; x <= 1; x++){
            for(let y = -tableWidth; y <= tableWidth; y += tableWidth){

                if ($(this).hasClass("left_column") && x == -1){
                    x++
                }
                if ($(this).hasClass("right_column") && x == 1){
                    x--
                }

            }
        }
    });
});