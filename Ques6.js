function Pattern_print(N)
{
    for(let i=1;i<=N;i++)
    {
        console.log('*'.repeat(i));
    }
}
const num=5;
Pattern_print(num);

function Print_Reverse_Pattern(N) 
{
    for (let i=N;i>=1;i--) {
      console.log('*'.repeat(i));
    }
}
const input = 5;
Print_Reverse_Pattern(input);
  