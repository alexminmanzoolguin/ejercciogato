console.log("hola mundo")

let turno = false;// cualquier turno x /y 

let victoria = false;

let contador = 0;

const handleClick =(event)=>{//funcion de un evento
    const {id}= event.target;//es el elemento que disparo en el tablero

    const div=document.getElementById(id);// clave unica del disparo del evento
if(div.innerText==="" && victoria === false){
    div.innerText = turno ? "O" : "X";
    veridicarVictoria();
    turno = !turno;//cambio el valor de turno
}
};



const veridicarVictoria=() =>{
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);
 const forma1 =
  div1.innerText === div2.innerText &&
   div1.innerText === div3.innerText &&
    div1.innerText !== "";

 const forma2 =
  div4.innerText === div5.innerText &&
    div4.innerText === div6.innerText &&
        div4.innerText !== "";
  
 const forma3 =
  div7.innerText === div8.innerText &&
   div7.innerText === div9.innerText &&
    div7.innerText !== "";

 const forma4 =
  div1.innerText === div4.innerText &&
   div1.innerText === div7.innerText &&
    div1.innerText !== "";

 const forma5 =
  div2 .innerText === div5.innerText &&
   div2.innerText === div8.innerText &&
    div2.innerText !== "";

 const forma6 =
 div3.innerText === div6.innerText &&
  div3.innerText === div9.innerText &&
    div3.innerText !== "";

 const forma7 =
  div1.innerText === div5.innerText &&
   div1.innerText === div9.innerText &&
    div1.innerText !== "";

 const forma8 =
  div3.innerText === div5.innerText &&
   div3.innerText === div7.innerText &&
    div3.innerText !== "";


    if(
        forma1 || 
        forma2 || 
        forma3 || 
        forma4 || 
        forma5 || 
        forma6 || 
        forma7 || 
        forma8
        ){
            const linea=document.getElementById('linea');
            const diagonal=document.getElementById('diagonal');
            if(forma1){
                linea.style.height =`10px`;
                linea.style.width = `600px`;
                linea.style.top = `100px`;
                linea.style.left = `0px`; 
            }else if(forma2){
                linea.style.height =`10px`;
                linea.style.width = `600px`;
                linea.style.top = `285px`;
                linea.style.left = `0px`; 
            }else if(forma3){
                linea.style.height =`10px`;
                linea.style.width = `600px`;
                linea.style.top = `490px`;
                linea.style.left = `0px`; 
            }else if(forma4){
                linea.style.height =`600px`;
                linea.style.width = `10px`;
                linea.style.top = `0px`;
                linea.style.left = `90px`; 
            
            }else if(forma5){
                linea.style.height =`600px`;
                linea.style.width = `10px`;
                linea.style.top = `0px`;
                linea.style.left = `295px`; 

            }else if(forma6){
                linea.style.height =`600px`;
                linea.style.width = `10px`;
                linea.style.top = `0px`;
                linea.style.left = `500px`;

            }else if(forma7){
               
                diagonal.style.height =`10px`;
                diagonal.style.width = `650px`;
                diagonal.style.top=`420px`;
               diagonal.style.left = `565px`;
              // diagonal.style.borderRadius= `0px`;
               diagonal.style.transform= `rotate(46deg)`;

            }else if(forma8){
                diagonal.style.height =`650px`;
                diagonal.style.width = `10px`;
                diagonal.style.top=`85px`;
                diagonal.style.left = `900px`;
              // diagonal.style.borderRadius= `0px`;
               diagonal.style.transform= `rotate(45deg)`
            
            }

         
       victoria=true;
        alert(`LOS GANADORES SON LA, ${turno ? "O" :"X"}`);
    }else{
        if(contador === 9){
            alert("LA PARTIDA TERMINO EMPATE");
        }
    }

};


const reload =() =>{
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const linea=document.getElementById('linea');
            linea.style.height = `0px`;
            linea.style.width = `0px`;
            linea.style.top = `0px`;
            linea.style.left = `0px`; 
        const diagonal=document.getElementById('diagonal');

            diagonal.style.height =`0px`;
            diagonal.style.width = `0px`;
              diagonal.style.top = `0px`;
               diagonal.style.left = `0px`;
           diagonal.style.borderRadius= `0px`;
           diagonal.style.transform=`rotate(0deg)`;   

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";
    turno = false;
    victoria= false;
    contador = 0;
}
