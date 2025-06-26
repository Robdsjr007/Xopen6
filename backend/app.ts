import express, { Express } from 'express';
import userRoutes from './src/routes/UserRoutes';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);

try {
    app.listen(PORT, () => {
        console.log(`The server is Running in port: ${PORT}!`);
    });
} catch (error) {
    console.error(error);
}

