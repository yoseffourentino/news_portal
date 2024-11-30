# news_portal

untuk menjalankan website news portal utama:
1. cd news_portal_project/
2. npm run dev

untuk menjalankan website CMS harus menjalankan backend juga:
1. masuk ke folder backend "cd backend/"
2. jalankan server dengan caara "nodemon server.js"
3. lalu pindah ke folder cms_news "cd cms_news/"
4. lalu "npm run dev"
5. jika server backend belum jalan maka kegiatan crud belum bisa berjalan

*API backend belum terhubung karena data2 dari backend masih belum ada, jika perusahaan sudah mempunyai data-data berita bisa langsung diinput pada website cms dan API pada website utama pada news_portal_project bisa diganti dengan API yang sudah saya buat yaitu "api/article/"