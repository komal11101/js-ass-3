function Print_odd(N)
{
    let sum=0;
    for(let i=0;i<=N;i++)
    {
        if(i%2!==0)
            {
               console.log(i);

            }
    }
    return sum;

}
console.log(Print_odd(10));