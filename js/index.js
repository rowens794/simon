systemOn = false;
strictMoveOn = false;
moveArray = [];
currentMoves = [];
currentUserMoveIndex = 0;
gameButtons = ["green", "red", "yellow", "blue"];
gameButtonColors = ["#679436", "#a30000", "#faa916", "#2274a5"];
litGameButtonColors = ["#81E814", "#FF0000", "#FFD800", "#0092E8"];
redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
sounds = [redSound, greenSound, blueSound, yellowSound];


$( "#switch" ).click(function() {
    var audio = new Audio('http://soundbible.com/mp3/Click-SoundBible.com-1387633738.mp3');
    audio.play();
    //when the on/off switch is clicked adjust variables and css to identify the system as "on" or "off"
    if (systemOn){
        $( "#switch" ).addClass("switchToggleOff");
        $( "#switch" ).removeClass("switchToggleOn");
        $( "#strictLight" ).removeClass("strictLightOn");
        $( "#strictLight" ).removeClass("strictLightOff");
        $( "#strictLight" ).addClass("strictLightSystemOff");
        $( "#counter" ).html("");
        systemOn = false;
    }
    else{
        $( "#switch" ).removeClass("switchToggleOff");
        $( "#switch" ).addClass("switchToggleOn");
        $( "#strictLight" ).removeClass("strictLightSystemOff");
        $( "#strictLight" ).addClass("strictLightOff");
        $( "#counter" ).html("00");
        moveArray = [];
        currentMoves = [];
        systemOn = true;
        strictMoveOn = false;
    }
  });


$( "#strict" ).click(function() {
var audio = new Audio('http://soundbible.com/mp3/Click-SoundBible.com-1387633738.mp3');

//enable/disable strict mode variable only if system is on
if (systemOn){
    audio.play();

    if (strictMoveOn){
        $( "#strictLight" ).addClass("strictLightOff");
        $( "#strictLight" ).removeClass("strictLightOn");
        strictMoveOn = false;
    }
    else{
        $( "#strictLight" ).removeClass("strictLightOff");
        $( "#strictLight" ).addClass("strictLightOn");
        strictMoveOn = true;
    }
}
});

$( "#start" ).click(function(){
    if(systemOn){
        moveArray = []; //reenable after testing
        currentMoves = [];
        generateMove();
        lightBoard(moveArray);
    }
});


$( "#green" ).click(function(){
    if(systemOn){  //don't process input unless switch is on
        if(moveArray.length > 0){ //don't process input unless a move is ready for entry
            
            currentMoves.push(0); //add to user moves list

            if (currentMoves[currentUserMoveIndex] == moveArray[currentUserMoveIndex]){//if currentMove is equal to game move
                
                //if user input all moves correctly then add new move
                if (currentMoves.length == moveArray.length){
                    generateMove();
                    lightBoard(moveArray);
                    counterValue = parseInt($( "#counter" ).html);
                    $( "#counter" ).html(counterValue);
                    console.log("step 1");
                }
                //else continue to wait for more inputs
            }
            else{
                counterValue = parseInt($( "#counter" ).html);
                console.log("step 2");

                setTimeout(function() {
                    $( "#counter" ).html("||"); //temporarily show II 
                  setTimeout(function() {
                    $( "#counter" ).html(counterValue);
                  }, 700);
                }, 700)
                
            }
        }
    }
});


$( "#red" ).click(function(){
    if(systemOn){  //don't process input unless switch is on
        if(moveArray.length > 0){ //don't process input unless a move is ready for entry

            currentMoves.push(1);

            if (currentMoves[currentUserMoveIndex] == moveArray[currentUserMoveIndex]){//if currentMove is equal to game move
                
                //if user input all moves correctly then add new move
                if (currentMoves.length == moveArray.length){
                    generateMove();
                    lightBoard(moveArray);
                    counterValue = parseInt($( "#counter" ).html);
                    $( "#counter" ).html(counterValue);
                }
                //else continue to wait for more inputs
            }
            else{
                counterValue = parseInt($( "#counter" ).html);

                setTimeout(function() {
                    $( "#counter" ).html("||"); //temporarily show II 
                  setTimeout(function() {
                    $( "#counter" ).html(counterValue);
                  }, 700);
                }, 700)
                
            }
        }
    }
});


$( "#yellow" ).click(function(){
    if(systemOn){  //don't process input unless switch is on
        if(moveArray.length > 0){ //don't process input unless a move is ready for entry

            currentMoves.push(2);

            if (currentMoves[currentUserMoveIndex] == moveArray[currentUserMoveIndex]){//if currentMove is equal to game move
                
                //if user input all moves correctly then add new move
                if (currentMoves.length == moveArray.length){
                    generateMove();
                    lightBoard(moveArray);
                    counterValue = parseInt($( "#counter" ).html);
                    $( "#counter" ).html(counterValue);
                }
                //else continue to wait for more inputs
            }
            else{
                counterValue = parseInt($( "#counter" ).html);

                setTimeout(function() {
                    $( "#counter" ).html("||"); //temporarily show II 
                  setTimeout(function() {
                    $( "#counter" ).html(counterValue);
                  }, 700);
                }, 700)
                
            }
        }
    }
});


$( "#blue" ).click(function(){
    if(systemOn){  //don't process input unless switch is on
        if(moveArray.length > 0){ //don't process input unless a move is ready for entry
            
            currentMoves.push(3);

            if (currentMoves[currentUserMoveIndex] == moveArray[currentUserMoveIndex]){//if currentMove is equal to game move
                
                //if user input all moves correctly then add new move
                if (currentMoves.length == moveArray.length){
                    generateMove();
                    lightBoard(moveArray);
                    counterValue = parseInt($( "#counter" ).html);
                    $( "#counter" ).html(counterValue);
                }
                //else continue to wait for more inputs
            }
            else{
                counterValue = parseInt($( "#counter" ).html);

                setTimeout(function() {
                    $( "#counter" ).html("||"); //temporarily show II 
                  setTimeout(function() {
                    $( "#counter" ).html(counterValue);
                  }, 700);
                }, 700)
                
            }
        }
    }
});


function generateMove(){
    nextMove = Math.floor(Math.random() * 4);
    moveArray.push(nextMove);
}


function lightBoard(arr, num) {
  if(!num) {
    num = 0;
  }

  if(num < arr.length) {
    button = $('#'+gameButtons[arr[num]]); //get the ID of the gameButton associated with moveArray[number]
    button.css("background-color", litGameButtonColors[arr[num]]); //set button to lit up color;

    setTimeout(function() {
        button.css("background-color", gameButtonColors[arr[num]]); //reset game button to original colors 
      setTimeout(function() {
        lightBoard(arr, ++num);
      }, 700);
    }, 700)
  } else {
    return;
  }
}
