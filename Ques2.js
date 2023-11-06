function find_Five(N)
{
    var a=N.toString();
    var count =0;
    for(var i=0;i<a.length;i++)
    {
            if(a[i]=='5')
            {
                count++;
            }
    }
   return count;

}
console.log(find_Five(345654));