const express = require("express")
app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.sendFile('/home/hades66/zzaingt-home/tecnico-programacion-de-software/II Lenguajes de Programacion/Taller 1/public/index.html')
})
app.post('/registro', (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        const datos = new URLSearchParams(body);
        const nombre = datos.get('nombre');
        const edad = datos.get('edad');
        const correo = datos.get('correo');
        const curso = datos.get('curso');

        // Validar los datos
        if (!nombre || !edad || !correo || !curso) {
            return res.status(400).send('Todos los campos son obligatorios.');
        }
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Confirmación de Registro</title>
            </head>
            <body>
                <h1>Registro Exitoso</h1>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Edad:</strong> ${edad}</p>
                <p><strong>Correo Electrónico:</strong> ${correo}</p>
                <p><strong>Curso:</strong> ${curso}</p>
            </body>
            </html>
        `);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});