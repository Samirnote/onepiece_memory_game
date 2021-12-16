let imags = ['name="Luffy"><img src="./pictures/1.PNG','name="Nami"><img src="./pictures/2.PNG','name="Franki"><img src="./pictures/3.PNG',
'name="Sanji"><img src="./pictures/4.PNG','name="Usopp"><img src="./pictures/5.PNG','name="Zoro"><img src="./pictures/6.PNG','name="Robin"><img src="./pictures/7.PNG'
,'name="Jinbe"><img src="./pictures/8.PNG','name="Sabo"><img src="./pictures/9.PNG'];

let center = document.getElementById('center');
let strBtn = document.getElementById("start-btn");

function clickStart (){
    
    strBtn.disabled = false; 
    
    let arr = [];
    console.log(strBtn);
    
   
    if (!arr.length) {
        
        strBtn.addEventListener('click', doubleCards);
        arr [0] = this;
       console.log(arr.length);
    }else {strBtn.disabled = true}
        
}

clickStart ();



function doubleCards (){

    imags.sort(()=>0.5 - Math.random());
    console.log(this);
    let i = 0;
    imags.forEach(element => {
       center.innerHTML += `<div class="memory-pic" "${element}"></div>`;
       i++;
    });

    imags.sort(()=>0.5 - Math.random());

    imags.forEach(element => {
        center.innerHTML += `<div class="memory-pic" "${element}"></div>`;
        i++;
     });

    clickPlay ()
}



function clickPlay (){
    let imgDiv = document.getElementsByTagName("div");
    console.log(imgDiv.length);
    for(let i =0; i<imgDiv.length; i++){

        imgDiv[i].addEventListener('click', opacityFunc);

    }
}

let compte = [];
let feu = true; 

function opacityFunc (){ 
    if(feu){
         this.firstChild.style.opacity='1';
         console.log(this);
    
         if (compte.length == 0){
             compte[0]=this;
          }else if (compte.length == 1){
        compte[1]=this;
         }if (compte.length == 2){
        feu = false; 
        
          }
       if (compte[0].firstChild.name === compte[1].firstChild.name){
           alert('ok');
        }else{
            compte[0].firstChild.style.opacity='0';
            compte[1].firstChild.style.opacity='0';
        }

        compte = [];
        feu = true;


    }else{
        return;
         }

}


