using backEnd.Application.DTO;
using backEnd.Domain.Entities;

namespace backEnd.Application.Services
{
    public class IntentoPagoService : IIntentoPagoService

    {
        private static List<intencionPago> _data = new();

        public void Create(createIntencionPagoRequest dto)
        {
            var intent = new intencionPago
            {
                Identificacion = dto.Identificacion,
                Nombre=dto.Nombre,
                MontoPropuesto = dto.MontoPropuesto,
                Telefono=dto.Telefono,
                Fecha=dto.Fecha
            };
            _data.Add(intent);
        }

        public List<intencionPago> GetAll() {
            return _data;
        } 
    }
}
