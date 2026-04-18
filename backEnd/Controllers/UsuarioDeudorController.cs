using backEnd.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioDeudorController:ControllerBase
    {
        private readonly IUsuarioDeudorService _service;
        public UsuarioDeudorController(IUsuarioDeudorService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_service.GetAll());
        }

    }
}
