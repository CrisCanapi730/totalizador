
export function calcularImpuesto(estado, cantidad)
{
    if(estado==="CA")
    {
        return (cantidad*8.25)/100;
    }
    if(estado==="TX")
    {
        return (cantidad*6.25)/100;
    }
    if(estado==="AL")
    {
        return (cantidad*4)/100;
    }
    if(estado==="NV")
    {
        return (cantidad*8)/100;
    }
    if(estado==="UT")
    {
        return (cantidad*6.65)/100;
    }
}

export function totalConImpuesto(estado, cantidad)
{
    if(estado === "TX")
    {
        const impu = calcularImpuesto("TX", cantidad);
        const total = impu + cantidad;
        return total;
    }
    if(estado === "AL")
    {
        const impu = calcularImpuesto("AL", cantidad);
        const total = impu + cantidad;
        return total;
    }
    if(estado === "CA")
    {
        const impu = calcularImpuesto("CA", cantidad);
        const total = impu + cantidad;
        return total;
    }
    if(estado === "NV")
    {
        const impu = calcularImpuesto("NV", cantidad);
        const total = impu + cantidad;
        return total;
    }
    if(estado === "UT")
    {
        const impu = calcularImpuesto("UT", cantidad);
        const total = impu + cantidad;
        return total;
    }
}
