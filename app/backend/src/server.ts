import 'dotenv/config';
import app from './app';

const PORT = process.env.BE_PORT;

const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

export default server;
