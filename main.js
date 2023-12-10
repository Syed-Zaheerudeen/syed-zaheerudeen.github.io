let board = document.querySelector(".board");
let temp_board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

let score = 0;
let emptyCells = 16;
let r,c;

for(let i = 0; i < temp_board.length; i++) {
    for(let j = 0; j < temp_board[0].length; j++) {
        let tile = document.createElement("div");
        tile.classList = "tile";
        tile.id = i.toString() + "-" + j.toString();
        board.appendChild(tile);
    }
} 

//disabling scroll event using arrowKeys
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);



function randomIdx(end) {
    return  Math.floor(Math.random() * end);
}

function basePoint(end) {
    let nums = [2,2,2,4];
    let i = randomIdx(end);
    r = randomIdx(4);
    c = randomIdx(4);    
   
    while(temp_board[r][c] != 0) {
        r = randomIdx(4);
        c = randomIdx(4);    
    }

    temp_board[r][c] = nums[i];

    let idx = r.toString() + "-" + c.toString();
    let curr = document.getElementById(idx);
    curr.textContent = nums[i];
    curr.classList += " x" +nums[i];   

    return nums[i];
}

function initial() {
   let val = basePoint(4);
   if(val == 4) basePoint(3);
   else basePoint(4);
   emptyCells -= 2;
}

function isZero(value) {
    return value != 0;
}

function updateTile() {
    for(let i = 0; i < temp_board.length; i++) {
        for(let j = 0; j < temp_board[0].length; j++) {
            let id =  i.toString() + "-" + j.toString();
            let tile = document.getElementById(id);
            tile.classList = "tile";
            
            if(temp_board[i][j] != 0) {
                tile.textContent = temp_board[i][j];

                if(temp_board[i][j] <= 4096) {
                    tile.classList += " x" + temp_board[i][j];
                } else {
                    tile.classList += " x8192";
                }
            } else {
                tile.textContent = "";
            }

        }
     }

     let s = document.getElementById("score");
     s.textContent = score;
}

function updateRow(temp_arr) {
    temp_arr = temp_arr.filter(isZero);
    let st = 0, end = 1;

    while(end < temp_arr.length) {

        if(temp_arr[st] == temp_arr[end]) {
            temp_arr[st] *=2;
            score += temp_arr[st];
            temp_arr.splice(end,1);
        }

        st++; 
        end++;
    }

    return temp_arr;
}

function compareArrays (a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
    
}

function slideLeft() {
    emptyCells = 0;
    let change = false;
    
    for(r = 0; r < temp_board.length; r++) {
        let temp_arr = [...temp_board[r]];
        let prev = [...temp_board[r]];
        temp_arr = updateRow(temp_arr);

        let i = temp_arr.length;
        while(i < 4) {
            temp_arr.push(0);
            i++;
            emptyCells++;
        }

        if(change === false) change = (!compareArrays(prev,temp_arr));
        temp_board[r] = temp_arr;
    }

    updateTile();
    return change;
}

function slideRight() {
    emptyCells = 0;
    let change = false;

    for(r = 0; r < temp_board.length; r++) {
        let temp_arr = [...temp_board[r]];
        let prev = [...temp_board[r]];

        temp_arr.reverse();
        temp_arr = updateRow(temp_arr);

        let i = temp_arr.length;
        while(i < 4) {
            temp_arr.push(0);
            i++;
            emptyCells++;
        }

        temp_arr.reverse();
        if(change === false) change = (!compareArrays(prev,temp_arr));
        temp_board[r] = temp_arr;
    }

    updateTile();
    return change;
}

function slideUp() {
    emptyCells = 0;
    let change = false;

    for(c = 0; c <temp_board[0].length; c++) {

        let temp_arr = [];
        let prev = [];
        for(r = 0; r < temp_board.length; r++) {
            temp_arr.push(temp_board[r][c]);
            prev.push(temp_board[r][c]);
        }

        temp_arr = updateRow(temp_arr);

        let i = temp_arr.length;
        while(i < 4) {
            temp_arr.push(0);
            i++;
            emptyCells++;
        }

        if(change === false) change = (!compareArrays(prev,temp_arr));
        for(r = 0; r < temp_board.length; r++) {
            temp_board[r][c] = temp_arr[r];
        }
    }

    updateTile();
    return change;
}

function slideDown() {
    emptyCells = 0;
    let change = false;

    for(c = 0; c <temp_board[0].length; c++) {

        let temp_arr = [];
        let prev = [];
        for(r = temp_board.length-1; r >= 0 ; r--) {
            temp_arr.push(temp_board[r][c]);
            prev.push(temp_board[r][c]);
        }

        temp_arr = updateRow(temp_arr);

        let i = temp_arr.length;
        while(i < 4) {
            temp_arr.push(0);
            i++;
            emptyCells++;
        }

        if(change === false) change = (!compareArrays(prev,temp_arr));
        let j = 0;
        for(r = temp_board.length-1; r >= 0 ; r--) {
            temp_board[r][c] = temp_arr[j];
            j++;
        }
    }

    updateTile();
    return change;
}

function gameOver() {
    let splMsg = document.getElementById("game-over");
    splMsg.style.display = "flex";
}

function refresh() {
    for(let i = 0; i < temp_board.length; i++) {
        for(let j = 0; j < temp_board[0].length; j++) {
            temp_board[i][j] = 0;
        }
    }

    updateTile();
    initial();

    score = 0;
    let s = document.getElementById("score");
    s.textContent = score;

    let splMsg = document.getElementById("game-over");
    splMsg.style.display = "none";
}

function checkOver() {
    let found = false;
    for(let i = 0; i < temp_board.length; i++) {
        for(let j = 0; j < temp_board[0].length; j++) {

            if(temp_board[i][j] == 0) {
                found = true;
            }
           
            //up
            if(i-1 >= 0) {
                if(temp_board[i][j] == temp_board[i-1][j] || temp_board[i-1][j] == 0) {
                    found = true;
                }
            }

            //down
            if(i+1 < 4) {
                if(temp_board[i][j] == temp_board[i+1][j] || temp_board[i+1][j] == 0) {
                    found = true;
                }
            }

            //left 
            if(j-1 >= 0) {
                if(temp_board[i][j] == temp_board[i][j-1] || temp_board[i][j-1] == 0) {
                    found = true;
                }
            }

            //right
            if(j+1 < 4) {
                if(temp_board[i][j] == temp_board[i][j+1] || temp_board[i][j+1] == 0) {
                    found = true;
                }
            }

            if(found) {
                break;
            }

        }
    }

    return (!found);
}

initial();

document.addEventListener("keydown",(e) => {


    if(e.code == "ArrowLeft") {
       let change = slideLeft();
    
          if(change === true) {
            basePoint(4);
            emptyCells -= 1;
          } 
    }
     
    if(e.code == "ArrowRight") {
        let change = slideRight();
    
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            }
    }
     
    if(e.code == "ArrowUp") {
        let change = slideUp();
       
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            } 
        
    }
     
    if(e.code == "ArrowDown") {
        let change = slideDown();
        
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            }
       
    }
    
    if(checkOver()) {
        gameOver();
    }
  
})

let newGame = document.getElementById("new-game");
newGame.addEventListener("click",refresh); 

let tryAgain = document.getElementById("try-again");
tryAgain.addEventListener("click",refresh); 



board.addEventListener('touchstart', handleTouchStart, false);        
board.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    evt.preventDefault();   
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                             
};                                                
                                                                         
function handleTouchMove(evt) {
    evt.preventDefault();   
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            let change = slideLeft();
    
            if(change === true) {
              basePoint(4);
              emptyCells -= 1;
            } 

        } else {
            /* right swipe */
            let change = slideRight();
    
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
            let change = slideUp();
       
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            } 
        } else { 
            /* down swipe */
            let change = slideDown();
        
            if(change === true) {
                basePoint(4);
                emptyCells -= 1;
            }
        } 
    }
    /* reset values */
    xDown = null;
    yDown = null; 
    
    if(checkOver()) {
        gameOver();
    }
                                            
};






