import express from 'express';
import { geralRoute } from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(geralRoute);

app.listen(PORT, () => {
    console.log(`[SERVER] Listening port ${PORT}`);
});