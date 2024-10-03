import express from "express"; 
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
const app = express(); 
const PUERTO = 8080;

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON. 

//Rutas
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})