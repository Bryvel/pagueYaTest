using backEnd.Application.DTO;
using backEnd.Domain.Entities;

namespace backEnd.Application.Services
{
    public interface IIntentoPagoService
    {
        void Create(createIntencionPagoRequest dto);
        List<intencionPago> GetAll();
    }
}
