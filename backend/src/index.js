import express from "express";
import mysql from "mysql2";
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 5174;

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Cambia esto según tu configuración
  password: "", // Cambia esto según tu configuración
  database: "mentorias-proyecto",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos: " + err.stack);
    return;
  }
  console.log(
    "Conexión exitosa a la base de datos MySQL con ID: " + db.threadId
  );
});

app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
      if (err) {
        console.error('Error al obtener usuarios: ' + err.stack);
        return res.status(500).send('Error al obtener usuarios');
      }
      res.json(results);  // Retorna los datos en formato JSON
    });
  });

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Backend conectado a la base de datos!");
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});


  