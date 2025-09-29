const express = require('express');
const { tambah, kali } = require('./utils/math');
const profileRouter = require('./routes/profile');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Nama: Muhammad Daffa Dzaki Ahnaf<br>NIM: F1D022142");
});

app.get('/hitung', (req, res) => {
  const a = 10, b = 5;
  const hasilTambah = tambah(a, b);
  const hasilKali = kali(a, b);

  res.send(`
    Hasil penjumlahan ${a} + ${b} = ${hasilTambah} <br>
    Hasil perkalian ${a} × ${b} = ${hasilKali}
  `);
});

app.use('/profile', profileRouter);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
