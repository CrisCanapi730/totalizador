
function calcularImpuesto(estado, cantidad)
{
    if(estado==="CA")
    {
        return (cantidad*8.25)/100;
    }
}
export default calcularImpuesto;