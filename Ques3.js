function findSum(N)
{
    let sum=0;
    
    for(let i=1;i<=N;i++)
    {
        if(i%2===0)
        {
            sum=sum+i;
        }
    }
    return sum;
}
console.log(findSum(6));