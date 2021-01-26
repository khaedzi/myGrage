/////////////////////////////////////////////////////
/////////////////////////declaring///////////////////
/////////////////////////////////////////////////////
var submit=document.getElementById("submit");
var myTable=document.getElementById("myTable");
var myCars=["BMW",
    "Lexus"
    , "Toyota"
    ,"Tesla"
    ,"Chevrolet"
    ," Hyundai"
    ,"KIA"]

    var myimage=["bmw.png","chevrolet.png","hyundai.png","kia.png","lexus.png","tesla.png","toyota.png"];
var carArray=[];
var clear=document.getElementById("clear");
/////////////////////////////////////////////////////
/////////////////////////function///////////////////
/////////////////////////////////////////////////////
submit.addEventListener("submit",handle)

function handle(event)
{
    
    event.preventDefault();
    var mycarName=event.target.carName.value;
    var type=event.target.slect.value;
    var year=event.target.slesctYear.value;
var newone=new NewCAr(mycarName,type,year)

newone.rendering();



localStorage.setItem("Mycar",JSON.stringify(carArray));
}

NewCAr.prototype.rendering=function(){
var myTr=document.createElement("tr");
var mycarNmaeTd=document.createElement("td");

mycarNmaeTd.textContent=this.mycarName;

myTr.appendChild(mycarNmaeTd);

/////////
var myTdtow=document.createElement("td");
var img=document.createElement("img");
var res = this.type.toLowerCase();
var myimgees="img/"+res+".png";
img.setAttribute("src",myimgees)
myTdtow.appendChild(img);
myTr.appendChild(myTdtow);


////

var mycaryear=document.createElement("td");

mycaryear.textContent=this.year;
myTr.appendChild(mycaryear);
myTable.appendChild(myTr);
}



function NewCAr(mycarName,type,year){

    this.mycarName=mycarName;
    this.type=type;
    this.year=year;
    carArray.push(this);


}
function render(){


for (let index = 0; index < myCars.length; index++) {
    var Mytr=document.createElement("tr");
    
   
     
     var myTdtow=document.createElement("td");
     var img=document.createElement("img");
     var myimgees="img/"+myimage[index];
     img.setAttribute("src",myimgees)
     myTdtow.appendChild(img);
     Mytr.appendChild(myTdtow);
     var myTd=document.createElement("td");
     
     
     myTd.textContent= myCars[index];
     Mytr.appendChild(myTd)  
     
     myTable.appendChild(Mytr);


        

}

}
function check(){


    if(localStorage.getItem("Mycar")){

        carArray=JSON.parse(localStorage.getItem("Mycar"))
        last();
    }
}

function last(){
    var myTr=document.createElement("tr");
    myTable.appendChild(myTr);
    for (let index= 0; index < carArray.length; index++) {
      
var mycarNmaeTd=document.createElement("td");

mycarNmaeTd.textContent=carArray[index].mycarName;

myTr.appendChild(mycarNmaeTd);

/////////
/*var myTdtow=document.createElement("td");
var img=document.createElement("img");
var res = carArray[index].type.toLowerCase();
var myimgees="img/"+res+".png";
console.log(myimgee)
;img.setAttribute("src",myimgees)
myTdtow.appendChild(img);
*/


////

var mycaryear=document.createElement("td");

mycaryear.textContent=carArray[index].year;
myTr.appendChild(mycaryear);
myTable.appendChild(myTr);
}



}

clear.onclick=function(){

    localStorage.removeItem("Mycar");
    location.reload();
}
render();

check();