
async function bubbleSort(brr)
 {
    for(let i=n-1;i>=0;i--)
    {
        
        for(let j=0;j<i;j++)
         {
             let obj_curr=document.querySelector("#elem"+j);
             obj_curr.style.backgroundColor="yellow";
             await sleep();
             obj_curr.style.backgroundColor="blue";
            if(brr[j]>brr[j+1])
            {
                let temp=brr[j];
                brr[j]=brr[j+1];
                brr[j+1]=temp;
                let a=document.querySelector("#elem"+j);
                let t=j+1;
                let b=document.querySelector("#elem"+t);
                a.style.backgroundColor="red";
                b.style.backgroundColor="red";
                await sleep();
                a.style.height=(5*brr[j])+"px";
                b.style.height=(5*brr[t])+"px";
                await sleep();
                a.style.backgroundColor="blue"
                b.style.backgroundColor="blue";
            }
        }
        let last=document.querySelector("#"+"elem"+i);
        last.classList.add("last");
    }
 }