
async function bubbleSort(brr)
 {
    for(let i=n-1;i>=0;i--)
    {
    
        for(let j=0;j<i;j++)
        {
            if(brr[j]>brr[j+1])
            {
                let temp=brr[j];
                brr[j]=brr[j+1];
                brr[j+1]=temp;
                let a=document.querySelector("#elem"+j);
                let t=j+1;
                let b=document.querySelector("#elem"+t);
                a.style.backgroundColor="yellow";
                b.style.backgroundColor="red";
                await sleep();
                a.style.backgroundColor="blue"
                b.style.backgroundColor="blue";
                changeStyle(j,j+1);
            }
        }
        let last=document.querySelector("#"+"elem"+i);
        last.classList.add("last");
    }
 }