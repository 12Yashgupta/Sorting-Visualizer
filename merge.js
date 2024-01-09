


 async function Merge(brr,s1, e1, s2, e2)
{
    let i=s1;
    let j=s2;
    let temp=[];
    while(i<=e1 && j<=e2)
    {
        if(brr[i]<brr[j])
        {
             temp.push(brr[i]);
             i++;
        }
        else
        {
            temp.push(brr[j]);
            j++;
        }
    }
    while(i<=e1)
    {
        temp.push(brr[i]);
        i++;
    }
    while(j<=e2)
    {
        temp.push(brr[j]);
        j++;
    }
             let t=0;
   
              for(let k=s1;k<=e2;k++)
              {
                 brr[k]=temp[t];
                 let a=document.querySelector("#elem"+k);
                 a.style.height=(temp[t]*5)+"px";
                 a.style.backgroundColor="green";
                 await sleep();
                t++;
               }
   

}
async function MergeSort(arr,start,end)
{
    if(start>=end)
    return;
   
    let mid=Math.ceil((start+end)/2);
   await MergeSort(arr,start,mid-1);
   for(let i=start;i<=mid-1;i++)
   {
    let a=document.querySelector("#elem"+i);
    a.style.backgroundColor="red";
   }
   await MergeSort(arr,mid,end);
   for(let i=mid;i<=end;i++)
   {
    let a=document.querySelector("#elem"+i);
    a.style.backgroundColor="yellow";
   }
   await Merge(arr,start,mid-1,mid,end);
}
