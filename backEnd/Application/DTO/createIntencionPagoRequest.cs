namespace backEnd.Application.DTO
{
    public class createIntencionPagoRequest
    {
         public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public decimal MontoPropuesto { get; set; }
        public string Telefono { get; set; }
        public DateTime Fecha { get; set; }
    }
}
