const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
const port = 3000;
dotenv.config();

const login = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;
const dbhost = process.env.MONGO_HOST;
const dbport = process.env.MONGO_PORT;

const url = `mongodb://${login}:${password}@${dbhost}:${dbport}/${database}?authSource=admin`;

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));

async function main() {
    console.log('Connecting to MongoDB...');
    console.log(url);
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // create a schema
    const clientSchema = new mongoose.Schema({
        name: String,
        email: String
    });

    // create an express app
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/clients', async (req, res) => {
        const Client = mongoose.model('Client', clientSchema);
        const clients = await Client.find();
        res.send(clients);
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}
