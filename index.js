console.log("hola mundo")

let turno = false;
const handleClick =(event)=>{
    const {id}= event.target;

    const div=document.getElementById(id);
if(div.innerText===""){
    div.innerText=turno ? "O":"X";
    veridicarVictoria();
    turno = !turno;
}
};



const veridicarVictoria=() =>{
    const div1=document.getElementById(1);
    const div2=document.getElementById(2);
    const div3=document.getElementById(3);
    const div4=document.getElementById(4);
    const div5=document.getElementById(5);
    const div6=document.getElementById(6);
    const div7=document.getElementById(7);
    const div8=document.getElementById(8);
    const div9=document.getElementById(9);
 const forma1 =
  div1.innerText === div2.innerText &&
   div1.innerText === div3.innerText &&
    div1.innerText !== "";

    if(forma1){
        alert("gano alguien")
    }

};

