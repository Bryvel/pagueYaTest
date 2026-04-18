using backEnd.Domain.Entities;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace backEnd.Application.Services
{
    public class UsuarioDeudorService:IUsuarioDeudorService
    {
        private static List<usuarioDeudor> _data = new();


        public List<usuarioDeudor> GetAll()
        {
{
                _data.Add(new usuarioDeudor { Identificacion = "1721111111", Nombre = "Carlos Ruiz", MontoDeuda = 8450, Telefono = "0981234567", Email = "carlos.ruiz@gmail.com", Empresa = "umbrella", DiasMora = 130 });
                _data.Add(new usuarioDeudor { Identificacion = "1722222222", Nombre = "Maria Lopez", MontoDeuda = 15400, Telefono = "0992345678", Email = "m.lopez@yahoo.com", Empresa = "umbrella", DiasMora = 180 });
                _data.Add(new usuarioDeudor { Identificacion = "1723333333", Nombre = "Luis Gomez", MontoDeuda = 9800, Telefono = "0973456789", Email = "luis.gomez@hotmail.com", Empresa = "umbrella", DiasMora = 95 });
                _data.Add(new usuarioDeudor { Identificacion = "1724444444", Nombre = "Ana Torres", MontoDeuda = 21000, Telefono = "0964567890", Email = "ana.torres@gmail.com", Empresa = "umbrella", DiasMora = 200 });
                _data.Add(new usuarioDeudor { Identificacion = "1725555555", Nombre = "Pedro Castillo", MontoDeuda = 6700, Telefono = "0955678901", Email = "pedro.castillo@yahoo.com", Empresa = "umbrella", DiasMora = 60 });
                _data.Add(new usuarioDeudor { Identificacion = "1726666666", Nombre = "Sofia Herrera", MontoDeuda = 13200, Telefono = "0946789012", Email = "sofia.h@gmail.com", Empresa = "umbrella", DiasMora = 145 });
                _data.Add(new usuarioDeudor { Identificacion = "1727777777", Nombre = "Diego Morales", MontoDeuda = 8900, Telefono = "0937890123", Email = "diego.m@hotmail.com", Empresa = "umbrella", DiasMora = 170 });
                _data.Add(new usuarioDeudor { Identificacion = "1728888888", Nombre = "Valeria Cruz", MontoDeuda = 17650, Telefono = "0928901234", Email = "valeria.cruz@yahoo.com", Empresa = "umbrella", DiasMora = 210 });
                _data.Add(new usuarioDeudor { Identificacion = "1729999999", Nombre = "Jorge Paredes", MontoDeuda = 5400, Telefono = "0919012345", Email = "jorge.p@gmail.com", Empresa = "umbrella", DiasMora = 45 });
                _data.Add(new usuarioDeudor { Identificacion = "1730000000", Nombre = "Daniela Rojas", MontoDeuda = 11900, Telefono = "0900123456", Email = "daniela.rojas@hotmail.com", Empresa = "umbrella", DiasMora = 125 });
                _data.Add(new usuarioDeudor { Identificacion = "1731111111", Nombre = "Ricardo Silva", MontoDeuda = 22200, Telefono = "0991122334", Email = "ricardo.silva@gmail.com", Empresa = "umbrella", DiasMora = 300 });
                _data.Add(new usuarioDeudor { Identificacion = "1732222222", Nombre = "Paola Mendez", MontoDeuda = 7600, Telefono = "0982233445", Email = "paola.m@yahoo.com", Empresa = "umbrella", DiasMora = 85 });
                _data.Add(new usuarioDeudor { Identificacion = "1733333333", Nombre = "Andres Vega", MontoDeuda = 14300, Telefono = "0973344556", Email = "andres.vega@gmail.com", Empresa = "umbrella", DiasMora = 160 });
                _data.Add(new usuarioDeudor { Identificacion = "1734444444", Nombre = "Gabriela Nunez", MontoDeuda = 9100, Telefono = "0964455667", Email = "gabriela.n@hotmail.com", Empresa = "umbrella", DiasMora = 110 });
                _data.Add(new usuarioDeudor { Identificacion = "1735555555", Nombre = "Fernando Ortiz", MontoDeuda = 18700, Telefono = "0955566778", Email = "fernando.ortiz@yahoo.com", Empresa = "umbrella", DiasMora = 190 });
};
            return _data;
        }
    }
}

