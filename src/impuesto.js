
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
}

export function totalConImpuesto(estado, cantidad)
{
    if(estado === "TX")
    {
        const impu = calcularImpuesto("TX", cantidad);
        const total = impu + cantidad;
        return total;
    }
}
