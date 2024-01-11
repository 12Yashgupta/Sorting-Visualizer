
async function Partition(brr, s, e)
{

    let pivot=brr[e];
    let ind=s-1;
    for(let i=s;i<=e-1;i++)
    {
        if(brr[i]<pivot)
        {
            ind++;
            
            let temp=brr[ind];
            brr[ind]=brr[i];
            brr[i]=temp;
            let brr_ind=document.querySelector("#elem"+ind);
            let brr_i=document.querySelector("#elem"+i);
            await sleep();
            brr_ind.style.height=(5*brr[ind])+"px";
            brr_i.style.height=(5*brr[i])+"px";
            brr_ind.style.backgroundColor="pink";
            brr_i.style.backgroundColor="orange";
        }
    }

      let temp=brr[ind+1];
      brr[ind+1]=brr[e];
      brr[e]=temp;
       
      let t=ind+1;
      let brr_indp_1=document.querySelector("#elem"+t);
      let brr_e=document.querySelector("#elem"+e)
      brr_indp_1.style.height=(5*brr[ind+1])+"px";
      brr_e.style.height=(5*brr[e])+"px";
     
      let final=document.querySelector("#elem"+t);
      final.style.backgroundColor="brown";
      await sleep();
      for(let i=s;i<=e-1;i++)
      {
        let obj=document.querySelector("#elem"+i);
        obj.style.backgroundColor="blue";
      }
     return ind+1;
}
async function QuickSort(brr,start,end)
{
    if(start>=end)
    return ;
   
    let p_obj=document.querySelector("#elem"+end);
    p_obj.style.backgroundColor="brown";
    let p=await Partition(brr,start,end);
    p_obj.style.backgroundColor="blue"
    let new_p_obj=document.querySelector("#elem"+p);
    new_p_obj.style.backgroundColor="black";

    await  QuickSort(brr,start,p-1);
    for(let i=start;i<=p-1;i++)
    {
     let a=document.querySelector("#elem"+i);
     a.style.backgroundColor="red";
    }   
    await QuickSort(brr,p+1,end); 
    if(i!=start){
    for(let i=p+1;i<=end;i++)
    {
    let a=document.querySelector("#elem"+i);
    a.style.backgroundColor="yellow";
    }    
}


    for(let i=start;i<=end;i++)
    {
        await sleep();
        let obj=document.querySelector("#elem"+i);
        obj.style.backgroundColor="green";
    }
}


