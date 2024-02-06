// CIRCUMFERNCE CALCULATION
// const PI=3.124;
// let Radius;
// let circumference;


// document.getElementById("submit").onclick=function(){
//     Radius=document.getElementById("input").value;
//     circumference=2 * PI * Radius;
//     document.getElementById("h2").textContent=(`the circumference value is ${circumference}`)
//     console.log(circumference);
// }
// checkbox let count=0;
// let checkbox=document.getElementById("checkbox");
// function myfunction(){
    
//     document.getElementById("decreasebt").onclick=function(){
//  if(checkbox.checked){
//     count--;
//  }      
// else if(!checkbox.checked&&count==0){
//     count=0;
// }
// else if(!checkbox.checked&&count>0){
//     count--;
// }
       
//           document.getElementById("label").textContent=(`${count}`)}
//     document.getElementById("increasebt").onclick=function(){
//          count++;
//          document.getElementById("label").textContent=(`${count}`)}
//     document.getElementById("resetbt").onclick=function(){
//             count=0;    
//             document.getElementById("label").textContent=(`${count}`)}
// }
// myfunction();
        
// number guessinglet number;
// let max=10;
// let min=1;
// number=Math.floor(Math.random()*(max)+min);
// let guess;
// let attempt=0;
// let running=true;
// const h1= document.getElementById("h1");
// while(running){
// if(attempt>3){
//     window.alert("your attempts are over")
//     break;
// }

//     guess=window.prompt(`enter your number between ${min} and ${max}`);
//     guess=Number(guess);
//     console.log(number);
//  if(!guess){
   
//      window.alert("enter a number");
// }
// else if((guess<min)||(guess>max)){
    
//  window.alert("please enter valid number");
// }
// else if(guess!=number){
    
//     attempt++;

//      window.alert("wrong guess try again");
// }
// else{
    
//      window.alert(`the ${number} you entered is coorect and you did ${attempt} attempts `);
//     running=false;

// }
// }
// temperature convertor const radio=document.getElementById("radio");
// const radio1=document.getElementById("radio1");
// const h2=document.getElementById("h2");
// let userinput;
// document.getElementById("submit").onclick=
// function convertor(){
//    userinput  =Number(input.value);
// if(radio.checked){
//     userinput=userinput+273;
//     h2.textContent=(`The kelvin is ${userinput}K`);

//     }
// else if(radio1.checked){
//     userinput=userinput+2;
//     h2.textContent=(`the fahrenheit is ${userinput}`)

// }
// else{
//     h2.textContent=(`select one method`)
// }
// }

// dice image document.getElementById("submit").onclick=function dice(){
//     const userinput=document.getElementById("input").value;
//     let dicevalues =[];
//     let images=[];
//     const diceresult=document.getElementById("diceresult");
//     const diceimages=document.getElementById("diceimages");
   
//   for(let i=0;i<userinput;i++){

//  let dicevalue=Math.floor(Math.random()*6)+1;
//   dicevalues.push(dicevalue);
//   images.push(`<img src="img${dicevalue}.png">`)
  
//     }
 
//   document.getElementById("h1").textContent=(`the dice numbers are ${dicevalues.join(",")}`)
//   diceimages.innerHTML=(`${images.join(" ")}`);
// }

// password generatorlet allowedchar="";
// let password="";
// let lowercaseletters="abcdefghijklmnopqrstuvwxyz";
// let uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numbers="1234567890";
// let symbols="!@#$%^&*";
// let result= document.getElementById("h2");
// function generator(){
//     const length=document.getElementById("length").value;
//     result.innerText=" ";
//     if (length < 5){
//         result.innerText="Please enter a valid number";
//     }
//     else{
//         result.innerText=" ";

//         allowedchar+= radio1.checked? lowercaseletters:"";
//         allowedchar+= radio2.checked? uppercaseletters:"";
//         allowedchar+= radio3.checked? numbers:"";
//         allowedchar+= radio4.checked? symbols:"";
//          for(let i=0;i<length;i++){
//             let generated=Math.floor(Math.random()*allowedchar.length);
//             password+=allowedchar[generated];

//         }
//         result.textContent=(`your password is ${password}`)
//         password="";


        
//     }

// }


// function agecalculator(){
// let userinput=document.getElementById("birthday").value;
// const birthday = new Date(userinput);


// let birthdate=birthday.getDate();
// let birthmonth=birthday.getMonth();
// let birthyear=birthday.getFullYear()

// const current=new Date();
// let date=current.getDate();
// let month=current.getMonth();
// let year=current.getFullYear();

// let currentdate=date>birthdate? date-birthdate:birthdate -date;
// let currentmonth=month>birthmonth? month-birthmonth:birthmonth -month;
// let currentyear=year>birthyear? year-birthyear:birthyear-year;
//  document.getElementById("h1").textContent=(`You are ${currentyear}years ${currentmonth}month and ${currentdate}days old`)
// }
// map()  let fruits=["apple","banana"];
//  const abc=fruits.map(uppercase);
// const updated = fruits.map(display);
// console.log(abc);
// console.log(updated);
// function uppercase(element,index,array){
//     array[index]=element.toUpperCase();
//     return array[index];
// }
// function display(element){
//    return element;
// }

// class square{
//     constructor(sides){
//         this.sides=sides;
//     }
//     set sides(newsides){
//         if(newsides>0){
//             this._sides=newsides;
//         }
//         else{
//             console.log(`enter a correct number`)
//         }
//     }
//     get sides(){
//         return this._sides;
//     }
//     get area(){
//         return `the area is ${this._sides **2 }`;
//     }

// }
// const Square=new square(1243)
// console.log(Square.sides)
// console.log(Square.area)

//  let fruits=[{name:"apple",color:"red",calories:95},
// {name:"orange",color:"orange",calories:96},
// {name:"mango",color:"yellow",calories:97},


// ]
// fruits.sort((a,b)=>b.name.localeCompare(a.name))
// console.log(fruits)


//  shuffle let cards=["a","b","c"];
// shuffle(cards)

// function shuffle(array){
//     for(i=0;i<array.length;i++){
//         let random=Math.floor(Math.random()*(i+1));
//         [array[i],array[random]]=[array[random],array[i]];
//     }
// }
// console.log(cards);

// function settimer(){
//     timeoutid=setTimeout(()=>window.alert('hi'),3000);
// }
// function offtimer(){
//     clearTimeout(timeoutid);
// }
// settimer()
// // offtimer()


// digitalclock function clock(){
//     const now=new Date();
//     let hour=now.getHours();
//     let meridian=hour<=12?"am":"pm"
//     hour=hour%12||12;
//     hour=hour.toString().padStart(2,0);
//     const minute=now.getMinutes().toString().padStart(2,0);
//     const second=now.getSeconds().toString().padStart(2,0);
//     document.getElementById("h1").textContent=`${hour}:${minute}:${second} ${meridian}`

// }

// setInterval(clock,1000)

// stopwatch let count1=0;
// let count2=0;
// let count3=0;
// let count4=0;
// let timer;
// function start(){
    

   
        
//     count4++;
//     if(count4==100){
//         count3++;
//         if(count3==60){
//             count2++;
           
//         }
//         if(count2==59){
//             count1++;
//         } 
        
//     }
           
        
    

       
    
//     count4=count4%100||0;
//     count3=count3>0?count3%60||0:0;
//     count2=count2==0?0:count2%60||0;
   
// document.getElementById("h2").textContent=`${count1.toString().padStart(2,0)}:${count2.toString().padStart(2,0)}:${count3.toString().padStart(2,0)}:${count4.toString().padStart(2,0)}`
//     }

// function start1(){

//    timer = setInterval(start,10)
    
// }
// function stop(){
//     clearInterval(timer)

// }
// function reset(){
    
//   clearInterval(timer)
//     count1=0;
//     count2=0;
//     count3=0;
//     count4=0;
    
    
//     document.getElementById("h2").textContent=`${count1.toString().padStart(2,0)}:${count2.toString().padStart(2,0)}:${count3.toString().padStart(2,0)}:${count4.toString().padStart(2,0)}`
// }


// let display=document.getElementById("display")
// let answer;
// function calculate(input){
   
// display.value+=input;
// }
// function final(){
//     try{
//     answer=display.value=eval(display.value)
//     }
// catch{
//     display.value="syntax error"
//     console.error("enter a number")
// }
// }
// function cleardis(){
    

//     display.value=" ";
// }
// function previous(){
//    display.value+=answer;
 

// }

// keys let box=document.getElementById("box");
// let movement=10;
// let x=0;
// let y=0;

// document.addEventListener("keydown",event=>{
//   event.preventDefault();
//   if(event.key.startsWith("Arrow")){
//     document.getElementById("box").textContent="Bye" ;
//     switch(event.key){
//         case "ArrowUp":
//             y-=movement;
//             break;
//         case "ArrowDown":
//              y+=movement;
//              break;    
//         case "ArrowLeft":
//             x-=movement;
//             break;
//         case "ArrowRight":
//             x+=movement;
//             break; 

         
//         }
//         box.style.marginTop=`${y}px` ;
//         box.style.marginLeft=`${x}px` ;
//     }
//   }
// );
// document.addEventListener("keyup",event=>{
//   document.getElementById("box").textContent="hi 😊";
// });

// image=document.getElementById("image");
// button=document.getElementById("button");

// button.addEventListener("click",event=>{



// if(image.style.visibility==="hidden"){
// image.style.visibility="visible";
//   button.textContent="hide" ;


// }
// else{
//   image.style.visibility="hidden";
//   button.textContent="show" ;
// }
// })


// rock paper scissor let computers=["rock","paper","scissor"];
// let playerchoice;
// let playercount=0;
// let computercount=0;
// let player=document.getElementById("player");
// let computerpoint=document.getElementById("computer");
// let button=document.getElementById("button");
// let statement=document.getElementById("h2");
// let answer=document.getElementById("answer");
// let image=document.getElementById("image")

// button.addEventListener("click",async function (event){
//     image.style.display="block";
//     await sleep(2);
//     image.style.display="none"
//     let computerchoice=computers[Math.floor(Math.random()*3+0)]
//     playerchoice=event.target.id;
//     if(playerchoice===computerchoice){
//         (player.textContent=`playerpoint=${playercount}`,
//         computerpoint.textContent=`computerpoint=${computercount}`)
//         answer.textContent=`the opponent choice is ${computerchoice}` ,
//         statement.textContent="matchdraw" 
//     }
//     else{
//     switch(playerchoice){
//         case "rock":
//             computerchoice==="scissor"? (player.textContent=`playerpoint=${playercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="playerwins" ) :(computerpoint.textContent=`computerpoint=${computercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="computerwins" )
//         break;
//         case "paper":
//             computerchoice==="rock"? (player.textContent=`playerpoint=${playercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="playerwins" ) :(computerpoint.textContent=`computerpoint=${computercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="computerwins" )
//         break;

//         case "scissor":
//             computerchoice==="paper"? (player.textContent=`playerpoint=${playercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="playerwins" ) :(computerpoint.textContent=`computerpoint=${computercount+=1}`,
//             answer.textContent=`the opponent choice is ${computerchoice}` ,
//             statement.textContent="computerwins" )
//         break;
//     }
//     }
// })
// async function sleep(){
//     return new Promise((resolve)=> setTimeout(resolve,2000))

// }


// image slider let count=1;
// let previous=document.getElementById("previous");
// let next=document.getElementById("next");
// let images =document.getElementById("images");

// next.addEventListener("click",event=>{
// if(count<6)    

// count+=1;
// images.innerHTML=`<img src="img${count}.png">`;
// })

// previous.addEventListener("click",event=>{
//     if(count>1)    
    
//     count-=1;
//     images.innerHTML=`<img src="img${count}.png">`;
//     })



//  pokemon async function pokemon(){
//     try{
//     let inputname=document.getElementById("input").value.toLowerCase();
//     let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${inputname}`);
//     if(!response.ok){
//         throw new Error("there is no resources found");
//     }
//     let images=document.getElementById("images");
//     let data=await response.json();
//     let imagedata=data.sprites.front_default;
//     images.src=imagedata;
//     images.style.display="block";
// }  
//     catch(error){
//     console.log(error)
//     }
// }

function getting(){
    let pincode=document.getElementById("input").value;
    let final=document.getElementById("h2")
    let result="";
    console.log(pincode)
if(checkbox1.checked)
{getting1()
    async function getting1(){
    try{
        let districtinput=await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        console.log(districtinput)
        if(!districtinput.ok){
throw new Error("Please enter correct input");
        }
let answer =await districtinput.json();
let ans=""
answer[0].PostOffice.forEach(element=>{
    ans+=element.Name+"\n"
    let textnode = document.createElement("li");
    textnode.textContent+=element.Name
    final.appendChild(textnode)
    console.log(element.Name)})

// let areaname=json.stringify(answer);
// let place=areaname.Name;
// result+=place;
// final.textContent=result;
console.log(ans)
// final.textContent=ans
    }
    catch(error){
        result.textContent=error;
    }
}}
if(checkbox2.checked)
{getting2()
    async function getting2(){
    try{
        let districtinput=await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        console.log(districtinput)
        if(!districtinput.ok){
throw new Error("Please enter correct input");
        }
let answer1 =await districtinput.json();
answer1[0].PostOffice.forEach(element=>{
    
    let textnode = document.createElement("li");
    textnode.textContent+=element.Description
    final.appendChild(textnode)
    console.log(element.Description)})

// let areadescription=JSON.stringify(answer1);
// answer1[0].PostOffice.forEach(element=>{
//     console.log(element.Description)})
// // let descrip=areadescription.Name;
// result+=descrip;
// final.textContent+=result;
// console.log(final)

    }

    catch(error){
        result.textContent=error;
    }
}}
if(checkbox3.checked)
{getting3()
    async function getting3(){
    try{
        let districtinput=await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        console.log(districtinput)
        if(!districtinput.ok){
throw new Error("Please enter correct input");
        }
let answer2 =await districtinput.json();
answer2[0].PostOffice.forEach(element=>{
    // ans+=element.Name+"\n"
    let textnode = document.createElement("li");
    textnode.textContent+=element.BranchType
    final.appendChild(textnode)
    console.log(element.BranchType)})

// let branch=JSON.stringify(answer2);
// answer2[0].PostOffice.forEach(element=>{

//     console.log(element.BranchType)
// })
// let type=branch.PostOffice.Name;
// result+=type;
// final.textContent+=result;
// console.log(answer2[0])

    }
    catch(error){
        result.textContent=error;
    }
}}
}
