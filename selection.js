//Selection Sort
 async function selectionSort(brr)
 { 
    for(let i=0;i<n;i++)
    {
        let minIndex=i;
        for(let j=i+1;j<n;j++)
        {
    
               if(brr[j]<brr[minIndex])
               {
    
                   minIndex=j;

               }
           let a=document.querySelector("#elem"+j);
       
           a.style.backgroundColor="yellow";
           await sleep();
           a.style.backgroundColor="blue"
        }

        changeStyle(i,minIndex);

        let temp=brr[minIndex];
        brr[minIndex]=brr[i];
        brr[i]=temp;
       
        let last=document.querySelector("#"+"elem"+i);
        last.classList.add("last");
    }
        
 }

