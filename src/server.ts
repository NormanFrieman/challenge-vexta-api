import express from 'express';
import { citiesRoute, clientsRoute, usersRoute } from './routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(citiesRoute);
app.use(clientsRoute);
app.use(usersRoute);

app.listen(PORT, () => {
    console.log(`[SERVER] Listening port ${PORT}`);
});