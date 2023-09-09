function countDown(x) {
    let intervalID = setInterval(function(){
        x--;
        console.log(x);
        if( x == 0) {
            console.log("DONE");
            clearInterval(intervalID); 
        }
    }, 1000); 
}

function randomGame() {
    let count = 1;
    let intervalID = setInterval(function(){
        let randomNum = Math.random();
 //       console.log(randomNum);        
        if(randomNum > .75) {
            console.log(count);
            clearInterval(intervalID);            
        } else {
            count++;
        }
    }, 1000)
}
