parentDiv=document.querySelector(".parentDiv");
const arr=[];
let btns=document.querySelector(".nav2-options");
let clickHere=document.querySelector("#clickHere");
let restart=document.querySelector("#restart");
let n=0;
let i=0;

let arrSize=document.querySelector("#arrSize");
let arrSpeed=document.querySelector("#arrSpeed");
let speed=101;
arrSpeed.addEventListener("change",function()
{

  speed=(102-(arrSpeed.value));
  console.log(speed);
});
let count=0;
arrSize.addEventListener("keypress",function(event)
{
   let x=(event.key)-'0';
   n=(n*10)+x;
});

restart.addEventListener("click",function(){
 window.location.reload();
});
clickHere.addEventListener("click",function()
{
   
   funStartClick(clickHere);
   console.log("clicked");
   for(let i=0;i<n;i++)
   {
        let rand=Math.floor(Math.random()*100)+1;
        arr.push(rand);
   }
   Start(arr);

});
function funStartClick(obj)
{
  obj.style.color="green";
  obj.style.backgroundColor="white"
}
function Start(arr){
arr.forEach((e)=>{
    let innerDiv=document.createElement("div")
    innerDiv.style.height=(e*5)+"px";
    innerDiv.style.width="5px";
    innerDiv.style.margin="0 2px 0 2px";
    innerDiv.setAttribute("id","elem"+i);
    innerDiv.style.backgroundColor="blue";
    innerDiv.classList.add("innerPro");
    parentDiv.append(innerDiv);
    i++;
    });
  }
function sleep()
{
    return new Promise((resolve)=>{
       setTimeout(() => {
       resolve();
       }, speed);
    });
}




 function changeStyle(id1,id2)
 {
    const a=document.querySelector("#"+"elem"+id1);
    const b=document.querySelector("#"+"elem"+id2);
    const a_height=a.style.height;
    const b_height=b.style.height;
    const a_bgColor=a.style.backgroundColor;
    const b_bgColor=b.style.backgroundColor;
    a.style.height=b_height;
    b.style.height=a_height;
    a.style.backgroundColor=b_bgColor;
    b.style.backgroundColor=a_bgColor;
 }



 const bubble=document.querySelector("#btn1");
 const select=document.querySelector("#btn2");
 const insert=document.querySelector("#btn3");
 const merge=document.querySelector("#btn4");
 const quick=document.querySelector("#btn5");
 const heap=document.querySelector("#btn6");

 bubble.addEventListener("click",function(){
  funClicked(bubble);
   bubbleSort(arr);
   
 });
 select.addEventListener("click",function(){
  funClicked(select);
    selectionSort(arr);
    
  });

  insert.addEventListener("click",function(){
    funClicked(insert);
    insertionSort(arr);
    
  });



  merge.addEventListener("click",function(){
    funClicked(merge);
    console.log("merge sort clicked");
    MergeSort(arr,0,n-1);
    
  });

function funClicked(obj)
{
   obj.style.backgroundColor="white"
   obj.style.color="blue";
   obj.style.borderRadius="20px";
  
}

