function ambilDataProduk(idProduk, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataProduk = {
          id: idProduk,
          nama: 'Produk A',
          harga: 100000,
        };
        resolve(dataProduk); // Resolve data produk
      }, 1000);
    });
  }
  
  // beli produk
  function beliProduk(idProduk, jumlah, callback) {
    ambilDataProduk(idProduk)
      .then((dataProduk) => {
        const totalHarga = dataProduk.harga * jumlah;
        callback(null, totalHarga);
      })
      .catch((err) => {
        callback(err, null);
      });
  }
  
  // callback dan promise
  beliProduk(1, 2, (err, totalHarga) => {
    if (err) {
      console.error('Terjadi kesalahan:', err);
      return;
    }
  
    console.log('Total harga belanja (menggunakan callback):', totalHarga);
  
    // Menggunakan promise untuk operasi belanja lainnya
    beliProduk(2, 3)
      .then((totalHarga) => {
        console.log('Total harga belanja (menggunakan promise):', totalHarga);
      })
      .catch((err) => {
        console.error('Terjadi kesalahan:', err);
      });
  });
  