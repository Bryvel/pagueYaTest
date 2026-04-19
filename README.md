# pagueYaTest
Prueba Fullstack Pague Ya

Front Puerto 4200 con Angular
Back puerto 5090 con .netCore

# Test de SQL

Ejercicio 1:

UPDATE Cliente c
SET c.tipoIdentificacion = cti.tipoIdentificacion
FROM Cliente c
INNER JOIN ClienteTipoIdentificacion cti
    ON c.codigoEmpresaCedente = cti.codigoEmpresaCedente

Ejercicio 2

SELECT 
    o.codigoCliente,
    MAX(o.Mora) AS tiempoMora,
    COUNT(*) AS numeroOperacionesTotales
FROM Operaciones o
GROUP BY o.codigoCliente;

Ejercicio 3 

UPDATE o
SET o.Estado = 'Inactivo'
FROM Operaciones o
INNER JOIN Cliente c
    ON o.codigoCliente = c.codigoCliente
WHERE o.Mora > 15
AND c.tipoIdentificacion = 'PA';