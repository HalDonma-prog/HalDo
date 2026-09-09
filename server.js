// server.js - HalDo AI OS
const express = require('express');
const app = express();
const port = 3000;

// Erlaubt allen Geräten im gleichen WLAN, auf den Server zuzugreifen
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Test-Seite: Wenn du im Browser http://localhost:3000 öffnest, siehst du das
app.get('/', (req, res) => {
    res.send('HalDo AI OS Server läuft! Bruder, wir sind online!');
});

// Starte den Server
app.listen(port, () => {
    console.log(`HalDo AI OS Server läuft auf http://localhost:3000`);
});
