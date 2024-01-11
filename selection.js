//Selection Sort
 async function selectionSort(brr)
 { 
    for(let i=0;i<n;i++)
    {
        let minIndex=i;
        let minIndexObj=document.querySelector("#elem"+minIndex);
        minIndexObj.style.backgroundColor="red";
        for(let j=i+1;j<n;j++)
        {
            let a=document.querySelector("#elem"+j);
            a.style.backgroundColor="yellow";
            await sleep();
         
            a.style.backgroundColor="blue"
               
               if(brr[j]<brr[minIndex])
               {
                   if(i!=minIndex){
                   let obj_j=document.querySelector("#elem"+minIndex);
                   obj_j.style.backgroundColor="blue";}
                   minIndex=j;
                   let obj_k=document.querySelector("#elem"+j);
                   obj_k.style.backgroundColor="red";
                }
        }
        let temp=brr[minIndex];
        brr[minIndex]=brr[i];
           brr[i]=temp;
           let obj_min=document.querySelector("#elem"+minIndex);
            await sleep();
             minIndexObj.style.height=(5*brr[i])+"px";
             obj_min.style.height=(5*brr[minIndex])+"px";
              await sleep();
              obj_min.style.backgroundColor="blue";
               minIndexObj.style.backgroundColor="blue";
        let last=document.querySelector("#"+"elem"+i);
        last.classList.add("last");
    }
        
 }

