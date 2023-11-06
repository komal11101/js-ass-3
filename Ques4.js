function Number_Sum(N)
{
let sum=0;
var sm=N.toString();

    for(let i=0;i<=sm.length;i++)
    {
        sum+=parseInt(sm[i]);
    }
    return sum;
    
}
console.log(Number_Sum(1234));

// firstly convert number to string to add individual character, its becomes easy to add this character by tostring(), then iterate upto length and then convert to interger with sum variable.