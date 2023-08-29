
function descuento(total)
{
    if(total>=1000)
    {
        return (total*3)/100;
    }
    else
    {
        return 0;
    }
}
export default descuento;