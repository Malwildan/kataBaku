const baku = ['akta', 'esai', 'frasa', 'kendaraan', 'masjid', 'saksama', 'sekadar', 'amendemen', 'aritmetika', 'kalender', 'kategori', 'meterai', 'metode', 'parlemen', 'antre', 'apotek', 'atlet', 'atmosfer', 'desain', 'deskripsi', 'kredit', 'personel', 'teoretis', 'hakikat', 'intelijen', 'monitor', 'nasihat', 'praktik', 'risiko', 'ritsleting', 'eksem', 'ekstrem', 'sistem', 'debit', 'dekret', 'komplet', 'konkret', 'objek', 'objektif', 'subjek', 'subjektif', 'anjlok', 'budek', 'gebuk', 'mandek', 'aktif', 'foto', 'hafal', 'konferensi', 'negatif', 'pasif', 'positif', 'sertifikat', 'tarif', 'transitif', 'paham', 'pikir', 'telepon', 'napas', 'permak', 'aktivis', 'kreativitas', 'konveksi', 'provinsi', 'universitas', 'asas', 'asasi', 'bus', 'guncang', 'gua', 'kumulatif', 'kolumnis', 'lubang', 'legislator', 'mabuk', 'mangkuk', 'surga', 'unta', 'roboh', 'pastor', 'pasteur', 'sirop', 'sopir', 'petai', 'tapai', 'frekuensi', 'konsekuensi', 'kuantitas', 'kuartal', 'kuitansi', 'kuintal', 'jadwal', 'proyek', 'izin', 'rezeki', 'zaman', 'zamrud', 'ijazah', 'hierarki', 'karier', 'cenderawasih', 'jenderal', 'menteri', 'kesatria', 'terampil', 'istri', 'prajurit', 'putra', 'putri', 'samudra', 'prancis', 'kafilah', 'khawatir', 'khotbah', 'makhluk', 'nakhoda', 'takhta', 'ahli', 'karisma', 'teknik', 'teknologi', 'ekspor', 'kompleks', 'taksi', 'batin', 'katolik', 'ortografi', 'patogen', 'teologi', 'analisis', 'diagnosis', 'sintesis', 'komoditas', 'komunitas', 'realitas', 'selebritas', 'mengubah', 'mencintai', 'pelepasan', 'penglihatan', 'penyewaan', 'doa', 'jumat', 'taat', 'andal', 'aneksasi', 'azan', 'embus', 'geladi', 'hadis', 'imbau', 'kanker', 'kongres', 'magrib', 'mi', 'peduli', 'ramadan', 'rapi', 'salat', 'silakan', 'standar', 'sumatra', 'telantar', 'telanjur', 'australia', 'bakso', 'ensiklopedia', 'karena', 'mukjizat', 'respons', 'seberang', 'standardisasi', 'lembap', 'masyhur', 'mazhab', 'mungkir', 'negosiasi', 'nekat', 'persen', 'sekretaris', 'sontek', 'menyontek', 'adapun', 'ataupun', 'bagaimanapun', 'biarpun', 'kalaupun', 'kendatipun', 'maupun', 'meskipun', 'sekalipun', 'sungguhpun', 'walaupun', 'adakalanya', 'bilamana', 'daripada', 'dukacita', 'belasungkawa', 'halalbihalal', 'kacamata', 'kasatmata', 'kosakata', 'olahraga', 'lokakarya', 'saputangan', 'segitiga', 'sukacita', 'sukarela', 'sukaria', 'tata bahasa', 'juru tulis', 'kerja sama', 'tepuk tangan', 'beri tahu', 'lipat ganda', 'tanda tangan', 'tanggung jawab', 'hancur lebur', 'sepak bola', 'acap kali', 'mara bahaya', 'sari pati', 'wali kota', 'inti sari', 'akhir', 'antarinstansi', 'baut', 'menyukseskan', 'mesti', 'motif', 'motivasi', 'dolar', 'film', 'hipotesis', 'ilmuwan', 'insaf', 'jenazah', 'kaidah', 'konduite', 'manajer', 'manajemen', 'memproklamasikan', 'menerapkan', 'menerjemahkan', 'produktivitas', 'serban', 'seriawan', 'stasiun', 'survei', 'sutra', 'syukur', 'telentang', 'mengesampingkan', 'mengkritik', 'memperhatikan', 'formal', 'ambulans', 'baterai', 'blangko', 'cedera', 'cengkih', 'cokelat', 'detail', 'detergen', 'elite', 'hektare', 'indra', 'jeriken', 'junior', 'kaus', 'legalisasi', 'lemari', 'memesona', 'mengapa', 'merek', 'miliar', 'mosaik', 'nafsu', 'negeri', 'nomor', 'omzet', 'perkedel', 'prangko', 'religius', 'ritme', 'saraf', 'sentimeter', 'telur', 'tenteram', 'tepercaya', 'terampil', 'tetapi', 'tradisional', 'transpor', 'triliun', 'utang', 'varietas', 'vila', 'video', 'takhayul', 'tampak', 'teladan', 'adhesi', 'afdal', 'akuatik', 'amfibi', 'amonia', 'astronaut', 'asyik', 'ateis', 'autentik', 'balig', 'balsam', 'berandal', 'berantas', 'berengsek', 'bolpoin', 'brankas', 'bujet', 'boling', 'cecak', 'cendera mata', 'cendekiawan', 'cengkerama', 'dasbor', 'debitur', 'digit', 'durian', 'ekspres', 'faksimile', 'fondasi', 'fotokopi', 'gaib', 'ganjal', 'genius', 'gereget', 'hangus', 'fotosintesis', 'intens', 'impor', 'isap', 'impit', 'intermeso', 'jagat', 'jasad', 'jemaah', 'katapel', 'kebun', 'kedaluwarsa', 'kiai', 'koboi', 'komersial', 'rapor', 'reaumur', 'reumatik', 'rezim', 'roh', 'sahih', 'sambal', 'seprai', 'setrika', 'syahid', 'tobat', 'tripleks', 'trofi', 'umrah', 'urgen', 'urine', 'ustaz', 'yogyakarta', 'zamrud', 'zamzam', 'rontgen', 'nahas', 'ikhlas', 'banderol', 'bazar', 'himne', 'filsuf', 'hidraulis', 'makin', 'neto', 'orisinal', 'pampat', 'pelesir', 'sediakala', 'spons', 'tekad', 'selawat', 'rida', 'zalim', 'takwa', 'dividen', 'etanol', 'familier', 'balans', 'kanguru', 'strok', 'berahi', 'berewok', 'diskotek', 'elektrode', 'feri', 'bumper', 'biseps', 'kreditur', 'tolok ukur', 'serdawa'];


const tidakBaku = [
    "aktifitas",
    "analisa",
    "atlit",
    "prakte",
    "kwalitas"
    // Add more words...
];

export { baku, tidakBaku };
