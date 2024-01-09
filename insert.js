
 //Insertion Sort

 async function insertionSort(brr)
 {

    
   const ele0=document.querySelector("#elem"+0);
   ele0.style.backgroundColor="green";
    for(let i=1;i<n;i++)
    {
        let pivot=brr[i];
        let j=i-1;
       let pivot_obj=document.querySelector("#elem"+i);
       pivot_obj.style.backgroundColor="orange";
        while(brr[j]>pivot && j>=0)
        {
           brr[j+1]=brr[j];
           let t=j+1;
           let obj_j=document.querySelector("#elem"+j);
           obj_j.style.backgroundColor="red";
           let next=document.querySelector("#elem"+t);
           next.style.height=((brr[j]*5)+"px");
           j--;
           await sleep();

           for(let k = i-1; k >= 0; k--){
            let k_obj=document.querySelector("#elem"+k);
            k_obj.style.background = 'green';
            }
        }
        let t=j+1; 
        brr[t]=pivot;
        let curr=document.querySelector("#elem"+t);
        curr.style.height=((pivot*5)+"px");      
        curr.style.backgroundColor="green";
    }
    let x=n-1;
    document.querySelector("#elem"+x).style.backgroundColor="green";
 }