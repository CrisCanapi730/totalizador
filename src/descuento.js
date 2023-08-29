
function descuento(total)
{
    if(total>=30000)
    {
        return (total*15)/100;
    }
    else if(total>=10000)
    {
        return (total*10)/100;
    }
    else if(total>=7000)
    {
        return (total*7)/100;
    }
    else if(total>=3000)
    {
        return (total*5)/100;
    }
    else if(total>=1000)
    {
        return (total*3)/100;
    }
    else
    {
        return 0;
    }
}

export default descuento;