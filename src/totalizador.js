
function porcentaje(estado)
{
    if(estado === "UT")
    {
        return 6.65;
    }
    if(estado === "NV")
    {
        return 8;
    }
    if(estado === "TX")
    {
        return 6.25;
    }
    if(estado === "AL")
    {
        return 4;
    }
    if(estado === "CA")
    {
        return 8.25;
    }
}
export default porcentaje;