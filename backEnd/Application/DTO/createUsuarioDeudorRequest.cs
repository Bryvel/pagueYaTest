namespace backEnd.Application.DTO
{
    public class createUsuarioDeudorRequest
    {
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public decimal  MontoDeuda { get; set; }
        public  string Telefono { get; set; }  
        public  string Email { get; set; }
        public string Empresa { get; set; }
        public decimal DiasMora { get; set; }
    }
}
