// Buradaki metinler portföyün içeriğidir. Kendi bilgilerini buradan düzenleyebilirsin.
const windows = {
  about: {
    title: 'Hakkımda.txt', path: 'Hakkımda.txt', status: '1 metin dosyası',
    content: `<p class="mini">01 / BEN KİMİM?</p><h2>Merhaba, ben Selin 👋</h2>
      <p class="lead">Pamukkale Üniversitesi Yönetim Bilişim Sistemleri mezunuyum. İş süreçlerinin teknolojiyle nasıl daha iyi çalışabileceğiyle ilgileniyorum.</p>
      <p>Ecogreen Enerji Holding'de SAP IT stajım sırasında MM, PP, PM ve QM süreçlerini tanıdım. Yazılım tarafında .NET ile bir B2B e-ticaret uygulaması geliştirdim; bitirme çalışmamda ise müşteri yorumlarını veri analizi ve makine öğrenmesiyle inceledim.</p>
      <p>Şu anda SAP/ERP, iş analizi, yazılım ve veri alanlarında junior fırsatları değerlendiriyorum.</p>
      <div class="pills"><span class="pill">SAP / ERP</span><span class="pill">Yazılım geliştirme</span><span class="pill">Veri analizi</span></div>`
  },
  experience: {
    title: 'Deneyimler', path: 'Deneyimler', status: '3 kayıt',
    content: `<p class="mini">02 / DENEYİM</p><h2>Öğrendiklerimi uyguladığım yerler</h2><div class="cards">
      <article class="card wide"><p class="mini">HAZİRAN–AĞUSTOS 2026 · STAJ 2 </p><h3>Ecogreen Enerji Holding A.Ş. — SAP IT Intern</h3><p>SAP MM, PP, PM ve QM süreçlerini çok lokasyonlu enerji operasyonları bağlamında gözlemledim. DEV/QAS/PRD ortamları, test, kontrollü değişiklik ve veri doğruluğu üzerine çalıştım.</p></article>
      <article class="card wide"><p class="mini">HAZİRAN–TEMMUZ 2025 · STAJ 1 </p><h3>Datakod Yazılım A.Ş. — .NET / Blazor</h3><p>.NET 8, Blazor Server, EF Core ve SQL Server ile ürün, sipariş, stok ve kullanıcı modülleri olan bir B2B e-ticaret uygulaması geliştirdim. CRUD, rol bazlı yetki ve doğrulama üzerinde çalıştım.</p></article>
     
      </div>`
  },
  projects: {
    title: 'Projeler', path: 'Projeler', status: '4 seçili proje',
    content: `<p class="mini">03 / SEÇİLİ PROJELER</p><h2>Üzerinde çalıştıklarım</h2><div class="cards">
      <article class="card"><p class="mini">.NET 8 · BLAZOR · SQL SERVER</p><h3>PetSas B2B E-Ticaret</h3><p>Ürün, sipariş, stok ve kullanıcı yönetimi; veritabanı ve rol bazlı yetkilendirme.</p><a href="https://github.com/selinpir/Petsas-B2B-E-ticaret" target="_blank" rel="noopener noreferrer">GitHub'da incele ↗</a></article>
      <article class="card"><p class="mini">JAVASCRIPT · CHROME MV3 · API</p><h3>ZoonLogos</h3><p>Bağlama duyarlı altyazı çevirisi için tarayıcı eklentisi; istemci ve sunucu bileşenleri.</p><a href="https://github.com/selinpir/zoonlogos" target="_blank" rel="noopener noreferrer">GitHub'da incele ↗</a></article>
      <article class="card"><p class="mini">NLP · ML · VERİ ANALİZİ</p><h3>Müşteri Yorumlarında Duygu Analizi</h3><p>12.463 Türkçe müşteri yorumuyla duygu sınıflandırması ve model karşılaştırması.</p><a href="https://github.com/selinpir/mockingjay-thesis" target="_blank" rel="noopener noreferrer">GitHub'da incele ↗</a></article>
      <article class="card"><p class="mini">SQL · VERİTABANI TASARIMI</p><h3>Satranç Turnuvası Veritabanı</h3><p>Turnuva verilerini düzenlemek ve sorgulamak için ilişkisel veritabanı çalışması.</p><a href="https://github.com/selinpir/SQL-chess-tournament" target="_blank" rel="noopener noreferrer">GitHub'da incele ↗</a></article>
      </div>`
  },
  skills: {
    title: 'Yetenekler', path: 'Yetenekler', status: '3 kategori',
    content: `<p class="mini">04 / ARAÇ KUTUSU</p><h2>Çalıştığım teknolojiler</h2>
      <div class="skill-group"><h3>İş süreçleri ve SAP</h3><div class="pills"><span class="pill">SAP MM / P2P</span><span class="pill">SAP PP / PM / QM</span><span class="pill">SAP GUI</span><span class="pill">Gereksinim analizi</span><span class="pill">Test ve dokümantasyon</span></div></div>
      <div class="skill-group"><h3>Yazılım</h3><div class="pills"><span class="pill">C# / .NET 8</span><span class="pill">Blazor</span><span class="pill">EF Core</span><span class="pill">JavaScript</span><span class="pill">REST API</span><span class="pill">Git</span></div></div>
      <div class="skill-group"><h3>Veri</h3><div class="pills"><span class="pill">SQL Server / SQL</span><span class="pill">Python</span><span class="pill">Pandas</span><span class="pill">Power BI</span><span class="pill">Makine öğrenmesi</span></div></div>`
  },
  thesis: {
    title: 'Tez_Projesi', path: 'Tez_Projesi', status: '1 araştırma projesi',
    content: `<p class="mini">05 / BİTİRME ÇALIŞMASI</p><h2>12.463 müşteri yorumu bize ne anlatabilir?</h2>
      <p class="lead">Decathlon ürün yorumları üzerinden Türkçe duygu analizi ve makine öğrenmesi çalışması.</p>
      <div class="stat-row"><div class="stat"><strong>12.463</strong><small>temiz yorum</small></div><div class="stat"><strong>16</strong><small>spor dalı</small></div><div class="stat"><strong>9</strong><small>karşılaştırılan algoritma</small></div></div>
      <p>Selenium ile 214 üründen yorum topladım. Türkçe duygu etiketleri oluşturdum; Orange Data Mining ile modelleri 10 katlı çapraz doğrulamada karşılaştırdım. En yüksek AUC değeri Gradient Boosting için 0,773 oldu. Yorum uzunluğunun duygu tahminindeki rolünü SHAP ile inceledim.</p>
      <div class="window-actions"><a class="action-link" href="https://github.com/selinpir/mockingjay-thesis" target="_blank" rel="noopener noreferrer">Proje deposu ↗</a></div>`
  },
  resume: {
  title: 'Özgeçmiş',
  path: 'Ozgecmis',
  status: 'CV',
  content: `
    <h2>Selin Pir — Özgeçmiş</h2>
    <p>CV’mi görüntüleyebilir veya indirebilirsiniz.</p>

    <div class="window-actions">
      <a
        class="action-link"
        href="assets/images/selin-pir-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV’mi görüntüle
      </a>

      <a
        class="action-link"
        href="assets/images/selin-pir-cv.pdf"
        download="Selin_Pir_CV.pdf"
      >
        CV’mi indir
      </a>
    </div>
  `
},
  contact: {
    title: 'İletişim', path: 'Iletisim', status: '3 bağlantı',
    content: `<p class="mini">07 / İLETİŞİM</p><h2>Birlikte konuşalım</h2><p>SAP/ERP, yazılım geliştirme ve veri alanlarındaki junior fırsatlar için benimle bağlantı kurabilirsin.</p>
      <div class="external-list"><a href="https://www.linkedin.com/in/selin-pir/" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a><a href="https://github.com/selinpir" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a><a href="https://medium.com/@selinpir6" target="_blank" rel="noopener noreferrer">Medium <span>↗</span></a></div>`
  }
};

