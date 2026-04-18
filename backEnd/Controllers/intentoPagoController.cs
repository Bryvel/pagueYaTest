using backEnd.Application.DTO;
using backEnd.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class intentoPagoController:ControllerBase
    {
        private readonly IIntentoPagoService _service;

        public intentoPagoController(IIntentoPagoService service)
        {
            _service = service;
        }
        [HttpPost]
        public IActionResult Create(createIntencionPagoRequest dto)
        {
            _service.Create(dto);
            return Ok(new { message = "Intención de pago registrada correctamente" });
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_service.GetAll());
        }

    }
}
