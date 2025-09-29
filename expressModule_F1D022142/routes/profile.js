// rute profile.js
const express = require('express');
const router = express.Router();

const profiles = [
  { nim: "F1D022142", nama: "Muhammad Daffa Dzaki Ahnaf", jurusan: "Informatika", usia: "21" },
  { nim: "F1D022087", nama: "Putra Heryan Gagah Perkasa", jurusan: "Informatika", usia: "21" },
  { nim: "F1D022035", nama: "Apta Mahogra Bhamakerti", jurusan: "Informatika", usia: "?" }
];


router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:nim', (req, res) => {
  const { nim } = req.params;
  const profile = profiles.find(p => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
