

let main = document.getElementsByClassName("main")[0];
let all_div = document.getElementsByTagName("div");
let div;
let img;


let audioRight = new Audio('pictures/okay.wav');
let audioWrong = new Audio('pictures/no.wav');


let rArray = ['pictures/1.PNG', 'pictures/2.PNG', 'pictures/3.PNG', 'pictures/4.PNG', 'pictures/5.PNG', 'pictures/6.PNG', 
'pictures/7.PNG', 'pictures/8.PNG', 'pictures/9.PNG', 'pictures/1.PNG', 'pictures/2.PNG', 'pictures/3.PNG', 'pictures/4.PNG'
, 'pictures/5.PNG', 'pictures/6.PNG', 'pictures/7.PNG', 'pictures/8.PNG', 'pictures/9.PNG'];

let strBtn = document.getElementById("start-btn");
let resBtn = document.getElementById("reset-btn");

let looseBar = document.getElementById("looseload");
let winBar = document.getElementById("winload");

let flaga = true; 
let n = 0 ;
let m = 0 ;

let winn = document.getElementById("win");
let lose = document.getElementById("loose");


function clickStart (){
        
     strBtn.addEventListener('click', cardFunction);
     resBtn.disabled=true;
     resBtn.addEventListener('click', remooveFunction);
        
}

clickStart ();



rArray.sort(()=>0.5 - Math.random());

function cardFunction() {
    strBtn.disabled=true;
    resBtn.disabled=false;
    for (let i = 0; i <= 17; i ++) {
    div = document.createElement("div");
    main.appendChild(div);
    img = document.createElement("img");
    img.setAttribute("src", rArray[i]);
    img.setAttribute("id", rArray[i]);
    div.appendChild(img);
    }

    let x = [],
    
    feu = true;

    

    for (let i = 0; i < all_div.length; i++) {
    
    all_div[i].onclick = function () {
    
    if (!feu) return;
    
    this.firstChild.style.opacity = "1";
    if (x.length == 0 && !this.classList.contains('clicked')) {
        x[0] = this;
        this.classList.add('clicked')
    } else if (x.length == 1 && !this.classList.contains('clicked')) {
        x[1] = this;
        this.classList.add('clicked')

    }

    if (x.length == 2) {
        feu = false;
        setTimeout(check, 500);

    }

 
    
    

    function check() {
        if (x[0].firstChild.id === x[1].firstChild.id) {
        audioRight.play();
        n++;
        //console.log(n, winn);
        winn.innerHTML=`${n}`;
        //console.log(Number(winBar.style.height));
        winBar.style.height = `${(n*56)+1}px`;
        //x[0].firstChild.style.opacity = "1";
        //x[1].firstChild.style.opacity = "1";
        //x[0].classList.add('clicked')
        //x[1].classList.add('clicked')
        //alert("Okay");
        } else {
        audioWrong.play();
        m++;
        lose.innerHTML=`${m}`;
        //console.log(Number(looseBar.style.height));
        looseBar.style.height = `${(m*14)+1}px`;
        //alert("Sorry");         
        x[0].firstChild.style.opacity = "0";
        x[1].firstChild.style.opacity = "0";
        x[0].classList.remove('clicked'); 
        x[1].classList.remove('clicked');
    }
        x = [];
        feu = true;
        endGame ();
        
    }

    

    };

}

}

function remooveFunction (){
    rArray.sort(()=>0.5 - Math.random());
    main.innerHTML = '';
    strBtn.disabled=false;
    resBtn.disabled=true;
    winn.innerHTML=`0`;
    lose.innerHTML=`0`;
    winBar.style.height = `10px`;
    looseBar.style.height = `10px`;
    n = 0 ;
    m = 0 ;

}

function endGame (){
    console.log(Number(winBar.style.height.slice(0, -2)));
  if (Number(looseBar.style.height.slice(0, -2)) > 500){
      //console.log(Number(looseBar.style.height.slice(0, -2)));
    main.innerHTML = '';
    alert('you loose')
  } 

  if (Number(winBar.style.height.slice(0, -2)) > 500){
    
    main.innerHTML = '';
     alert('you win')
  } 

}






