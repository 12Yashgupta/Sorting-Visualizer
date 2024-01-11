
 //Insertion Sort

 async function insertionSort(brr)
 {
     const ele0=document.querySelector("#elem"+0);
     ele0.style.backgroundColor="yellow";
    for(let i=0;i<n;i++)
    {
        let pivot=brr[i];
        let j=i-1;
        let pivot_obj=document.querySelector("#elem"+i);
        pivot_obj.style.backgroundColor="yellow";
        while(brr[j]>pivot && j>=0)
        {
            let obj_j=document.querySelector("#elem"+j);
            obj_j.style.backgroundColor="red";
            brr[j+1]=brr[j];
           let t=j+1;
           let next=document.querySelector("#elem"+t);
           next.style.backgroundColor="red";
           await sleep();
           next.style.height=((brr[j+1]*5)+"px");
           await sleep();
           obj_j.style.backgroundColor="blue";
           if(j==i-1)
           next.style.backgroundColor="yellow";
          else
          next.style.backgroundColor="blue";
           j--; 
           for(let k = 0; k <= i-1; k++){
            let k_obj=document.querySelector("#elem"+k);
            k_obj.style.background = 'green';
            }
        }
        let t=j+1; 
        brr[t]=pivot;
        let curr=document.querySelector("#elem"+t);
        curr.style.height=((pivot*5)+"px");      
    }
    let x=n-1;
    document.querySelector("#elem"+x).style.backgroundColor="green";
 }
