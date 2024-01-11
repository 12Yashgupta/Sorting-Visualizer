#include<iostream>
#include<bits/stdc++.h>
using namespace std;

// void Merge(vector<int>&arr,int s1,int e1,int s2,int e2)
// {
//     int i=s1;
//     int j=s2;
//     vector<int> temp;
//     while(i<=e1 && j<=e2)
//     {
//         if(arr[i]<arr[j])
//         {
//              temp.push_back(arr[i]);
//              i++;
//         }
//         else
//         {
//             temp.push_back(arr[j]);
//             j++;
//         }
//     }
//     while(i<=e1)
//     {
//         temp.push_back(arr[i]);
//         i++;
//     }
//     while(j<=e2)
//     {
//         temp.push_back(arr[j]);
//         j++;
//     }
//     int t=0;
//     for(int k=s1;k<=e2;k++)
//     arr[k]=temp[t++];
// }
// void MergeSort(vector<int>&arr,int start,int end)
// {
//     if(start>=end)
//     return;

//     int mid=(start+end)/2;
//     MergeSort(arr,start,mid);
//     MergeSort(arr,mid+1,end);
//     Merge(arr,start,mid,mid+1,end);
// }
int Partition(vector<int> &arr,int s,int e)
{
    int pivot=arr[e];
    int ind=s-1;
    for(int i=s;i<=e-1;i++)
    {
        if(arr[i]<pivot)
        {
            ind++;
            swap(arr[ind],arr[i]);
        }
    }
    swap(arr[ind+1],arr[e]);
    return ind+1;
}
void QuickSort(vector<int>&arr,int start,int end)
{
    if(start>=end)
    return ;

    int p=Partition(arr,start,end);
    QuickSort(arr,start,p-1);
    QuickSort(arr,p+1,end);
}
int main()
{
    int n;
    cin>>n;
    vector<int> arr(n);
    for(int i=0;i<n;i++)
    cin>>arr[i];
    QuickSort(arr,0,n-1);
    for(int i=0;i<n;i++)
    cout<<arr[i]<<" ";
    return 0;
}