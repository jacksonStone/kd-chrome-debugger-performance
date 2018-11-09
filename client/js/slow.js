let currentTime = Date.now()

function grandparent(){
    parent()
}
function parent(){
    reallyLogRunningFunction()
    reallyLogRunningFunction()
}

function reallyLogRunningFunction(){
    while(Date.now() < currentTime + 1000) {
        //waiting
    }
    currentTime = Date.now()
}
grandparent()

console.log("WE FINISHED Woooo")