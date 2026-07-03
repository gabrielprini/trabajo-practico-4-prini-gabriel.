import { Sequelize } from "sequelize";

// Inicializamos la constante limpiamente
export const sequelize = new Sequelize('movies', 'root', '', {
  host: "localhost",
  dialect: "mysql",
});

// Función para testear la conexión e inicializar
export const startDB = async () => {
    try {
        await sequelize.authenticate();
        // Usamos force: false para cuidar tus datos
        await sequelize.sync({ force: false });
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};