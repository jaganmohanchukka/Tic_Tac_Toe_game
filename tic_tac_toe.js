let box = document.querySelectorAll(".box");
let restart=document.querySelector(".button");
let msg = document.querySelector(".win");
let turno = true;
const reset =()=>{
    turno= true;
    for(let boxe of box){
        boxe.style.pointerEvents = "auto";
        boxe.innerText="";
    }
    msg.innerText="";
}
restart.addEventListener("click",reset);
box.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turno===true){
            val.innerText="X";
            turno=false;
        }
        else{
            val.innerText="O";
            turno=true;
        }
        val.style.pointerEvents = "none";
        winner();
    });
});
const winpatern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const winner=(()=>{
    for(let win of winpatern){
        let p1=box[win[0]].innerText;
        let p2=box[win[1]].innerText;
        let p3=box[win[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""){
            if(p1===p2&&p2===p3){
                for(let bo of box){
                    bo.style.pointerEvents = "none";
                }
                let winner=`Winner is ${p1}\nrestart to play again`;
                msg.innerText=winner;
            }
        }
    }
});
