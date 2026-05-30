import { ref, computed } from 'vue'

// Global reactive language state
export const currentLang = ref('EN')

export function useI18n() {
  const t = computed(() => translations[currentLang.value] || translations['EN'])

  function setLang(lang) {
    currentLang.value = lang
  }

  return { t, currentLang, setLang }
}

const translations = {
  EN: {
    nav: {
      home:     'Home',
      about:    'About Us',
      services: 'Services',
      products: 'Products',
      articles: 'Articles',
      contact:  'Contact Us',
    },

    footer: {
      salesInquiry: 'Sales Inquiry',
      contactUs:    'CONTACT US',
      shopHere:     'Shop Here',
      rights:       'All rights reserved.',
    },

    aboutTeaser: {
      link:    'About Us',
      heading: 'Industry Leadership',
      sub:     'Trusted by automotive professionals in Indonesia for excellence in quality and service.',
      stats: [
        { title: 'ISO 9001:2015 Certified',  desc: 'Certified to guarantee consistent quality and reliability.' },
        { title: '1,600+ Satisfied Clients', desc: 'Trusted by over 1,600 clients for our exceptional service.' },
        { title: '5,000+ Premium Products',  desc: 'Vast catalog of premium parts. Find exactly what you need.' },
        { title: '50+ Years Experience',     desc: 'Over 50 years of industry expertise.' },
      ],
    },

    vehicles: {
      eyebrow: 'What We Offer',
      heading: 'Automotive Solutions',
      items: [
        { name: 'Sedan',             desc: 'High-quality parts for your sedan, hatchback, and family car.' },
        { name: 'MPV',               desc: 'Reliable components for the versatility of MPVs.' },
        { name: 'SUV',               desc: 'Durable parts built for the strength and capability of SUVs.' },
        { name: 'Van',               desc: 'Heavy-duty components for commercial vehicles and freight.' },
        { name: 'Commercial Trucks', desc: 'Industrial-grade components for light to heavy duty trucks.' },
      ],
    },

    featured: {
      eyebrow: 'Our Products',
      heading: 'Our Featured Galleries',
    },

    cta: {
      line1: 'Serving diverse customer base in transportation & logistic industry, we offer high quality spare parts to support your vehicle operational needs.',
      line2: 'Contact us for more information.',
    },

    aboutHero: {
      eyebrow: 'Who We Are',
      p1: 'is an importer and distribution company for automotive spare parts mainly from Japan and other parts of the world. We pride ourselves on reliability, quality and speed when providing our products and services to our customers.',
      p2: 'Following the dynamic change in business environment, we implement modern warehousing and operational system with the purpose of providing greater services to our customers more efficiently. We also equip ourselves with experienced dedicated team, specialized in handling automotive spare parts with commitment to maintain long-term business partnerships. In addition to quality products and greater customer services, maintaining a reliable/trustworthy business is among our highest priority.',
    },

    visionMission: {
      visionTitle:  'Our Vision',
      visionText:   'To be the leading distributor of automotive parts, recognized for providing guaranteed product quality and easy access for customers throughout Indonesia.',
      missionTitle: 'Our Mission',
      missionText:  'To implement innovative ideas and optimization to enhance ourselves in providing our customers the best service, product quality and compliance with legal regulations.',
    },

    capabilities: {
      heading: 'WHAT WE OFFER',
      items: [
        { title: 'Support',                          desc: 'Chat consultation services to answer your questions and tips about our products.' },
        { title: 'Product Know-How',                 desc: 'Equipped with product know-how, we guarantee our products fit to your vehicle requirements through chat consultation.' },
        { title: 'Guaranteed Original Product',      desc: 'As an authorized distributor, we guarantee our products are 100% original from the manufacturer.' },
        { title: 'Buy and Pickup in Store',          desc: 'Hassle free option. Confirm product fitment before buying.' },
        { title: 'Delivery Options at Your Choices', desc: 'On time delivery services to reach your ends.' },
      ],
    },

    distMap: {
      heading:  'Our Distribution Channel',
      lead:     'We distribute our products to dealers, retailers, workshops and end-users throughout Indonesia. With thousands of SKUs, our products fit ideally to your vehicle needs, from passenger cars, vans, commercial trucks, etc.',
      ctaTitle: 'OUR PRODUCTS ARE WITHIN YOUR REACH!',
      ctaSub:   'Find our products at the nearest store in your area.',
      ctaBtn:   'CONTACT US',
    },

    certificates: {
      heading:  'Certificates',
      lead:     'Some of the Authorized Distributor Certificates as proofs to ensure your comfort in dealing with us.',
      viewMore: 'View More',
      viewLess: 'View Less',
    },

    servicesHero: {
      heading: 'Our Services',
      sub:     'We ensure our high-quality products are accessible and readily available to various market segments throughout the country, meeting their diverse needs.',
    },

    fleet: {
      label:   'Fleet & Enterprise Solutions',
      title1:  'Keep Your Fleets',
      title2:  'Moving on Road',
      desc:    'We power the mobility of Indonesia. We are the strategic automotive spare parts partner for large-scale operations, including logistics & expedition fleets, dealer networks.',
      howHelp: 'How Can We Help ?',
      cards: [
        { line1: 'Genuine, vast',  line2: 'parts' },
        { line1: 'Dealer Network', line2: 'Supply' },
        { line1: 'Tailored',       line2: 'Management,', line3: 'Predictable Cost' },
        { line1: 'Personal Care',  line2: 'Assistance' },
        { line1: 'Legal docs for', line2: 'tax report' },
      ],
    },

    fleetPartner: {
      heading: 'Our Fleet Partners',
    },

    retail: {
      label:    'Supporting Local Business',
      title1:   'Your Partner in Automotive',
      title2:   'Retail Success',
      desc:     'We empower local businesses to thrive. We are the trusted supplier for independent retailers and workshops across the region. We focus on providing high-demand, certified spare parts and the logistical support you need to ensure customer satisfaction and long-term business.',
      floating: 'Delivering Quality and Customer Loyalty.',
      features: [
        { label: 'Parts\nAvailability' },
        { label: 'Next / Same\nDay Dispatch' },
        { label: 'Partner\nRetention' },
      ],
    },

    workshop: {
      label:    'Integrated Service Pledge',
      title1:   'Installation Services:',
      title2:   'Need It Installed?',
      desc:     'The Complete Service Solution. As a seamless extension of our supply chain, Anugerah Auto Workshop is the ultimate fulfillment of our quality promise. Here, our certified spare parts are installed by our own expert technicians, ensuring peak performance, guaranteed reliability, and ultimate vehicle longevity. We offer suspensions, brakes, shock absorbers, car battery, oil change and tune up services with warranty available.',
      findOut:  'Find Out More',
      services: ['Suspension', 'Brake', 'Shock Absorber', 'Battery', 'Oil', 'Tune Up'],
    },

    productsHero: {
      eyebrow: 'Our Brands, Your Road',
      heading: 'Trusted Parts From Leading Manufactures',
      desc:    'Our brands are carefully selected and trusted to keep your car on the road, so you can shop with confidence. Our product range includes:',
      items: [
        'Bearings', 'Oil Seals',
        'Suspensions (bushing, tie rod, ball joint, etc) drive shaft, cv joints', 'Fan Belt',
        'Shock Absorbers Strut Mounts', 'Wiper',
        'Brake Parts Disc Brake', 'Electrical Parts',
        'Water Pump', 'Car Battery', 'List Item',
      ],
    },

    catalog: {
      filterLabel:         'Filter By Category:',
      categoryPlaceholder: 'Select Category',
      searchPlaceholder:   'Search Brand Name ...',
      viewDetails:         'View Details →',
      noProducts:          'No products found.',
    },

    brands: {
      assistHeading:  'Need assistance? We are here to assist in identifying the solutions you need',
      callChat:       'Give us a call or chat',
      storeDesc:      'Selected items are available for retail purchase. Click below link to find the latest promotions & discounts at our online store.',
      marqueeEyebrow: 'Our Partners',
      marqueeHeading: 'Trusted Automotive Brands Worldwide',
      viewMore:       'View More',
      fitTo:          'Fit to most car brands in Indonesia:',
    },

    articles: {
      heading:     'Articles & Guidelines',
      sub:         'Looking for some advices on how to do the job right? Follow our guidelines and browse on specific topics.',
      searchLabel: 'Search',
      placeholder: 'Search ...',
      searchBtn:   'Search',
      readMore:    'Read more',
      noResults:   'No articles found.',
    },

    articleDetail: {
      notFound: 'Article not found.',
      back:     '← Back to Articles',
      backBtn:  'Back to Articles',
    },

    contact: {
      heroTitle:          'How can we help you?',
      heroSub:            'Send us a message through the contact form below or click the chat box.',
      formTitle:          'Your Message',
      nameLabel:          'Name',
      namePlaceholder:    'Enter Your Name',
      phoneLabel:         'Telephone/HP',
      phonePlaceholder:   'Enter Your Phone Number',
      emailLabel:         'Email',
      emailPlaceholder:   'Enter Your Email',
      subjectLabel:       'Subject',
      subjectPlaceholder: 'Enter Message Subject',
      messageLabel:       'Your Message',
      messagePlaceholder: 'Enter Your Message',
      submitBtn:          'SEND',
      sentBtn:            '✓ Sent!',
      infoTitle:          'Contact us',
      addressLabel:       'Address',
      hoursLabel:         'Operational Hours',
      hoursValue:         'Mon–Fri: 09.00–17.30 WIB',
    },

    notFound: {
      message: "The page you're looking for doesn't exist or has been moved.",
      back:    '← Back to Home',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  ID: {
    nav: {
      home:     'Beranda',
      about:    'Tentang Kami',
      services: 'Layanan',
      products: 'Produk',
      articles: 'Artikel',
      contact:  'Hubungi Kami',
    },

    footer: {
      salesInquiry: 'Pertanyaan Penjualan',
      contactUs:    'HUBUNGI KAMI',
      shopHere:     'Belanja Di Sini',
      rights:       'Hak cipta dilindungi.',
    },

    aboutTeaser: {
      link:    'Tentang Kami',
      heading: 'Keunggulan di Industri Otomotif',
      sub:     'Dipercaya oleh para profesional otomotif di Indonesia untuk produk dan pelayanan yang berkualitas unggul.',
      stats: [
        { title: 'Bersertifikasi ISO 9001:2015', desc: 'Sertifikasi sistem manajemen mutu demi meningkatkan efisiensi, efektivitas dan kepuasan pelanggan.' },
        { title: '1.600+ Klien',                 desc: 'Melayani lebih dari 1600 klien di seluruh Indonesia.' },
        { title: '5.000+ Produk Premium',        desc: 'Lebih dari 5.000 varian produk pilihan dari brand berskala internasional.' },
        { title: '50+ Tahun Pengalaman',         desc: 'Lebih dari satu dekade dalam membangun kepercayaan di industri suku cadang otomotif.' },
      ],
    },

    vehicles: {
      eyebrow: 'Yang Kami Tawarkan',
      heading: 'Solusi Otomotif Terlengkap',
      items: [
        { name: 'Sedan',          desc: 'Suku cadang berkualitas tinggi untuk mobil sedan Anda.' },
        { name: 'MPV',            desc: 'Penyegaran untuk MPV yang sempurna memerlukan suku cadang berkualitas yang kami sediakan khusus untuk Anda.' },
        { name: 'SUV',            desc: 'Suku cadang berkualitas terbaik untuk kendaraan SUV. Maksimalkan daya dan performa mobil Anda dengan produk kami.' },
        { name: 'Van',            desc: 'Kendaraan jenis van memerlukan suku cadang yang dapat diandalkan sesuai kebutuhan mobilitas armada Anda.' },
        { name: 'Truk Komersial', desc: 'Komponen berstandar industri untuk armada truk komersial Anda. Performa truk maksimal dengan suku cadang kami.' },
      ],
    },

    featured: {
      eyebrow: 'Produk Kami',
      heading: 'Galeri Produk Unggulan Kami',
    },

    cta: {
      line1: 'Bersama ratusan mitra di industri transportasi & logistik, kami menawarkan suku cadang terpercaya yang memastikan operasional kendaraan Anda terus berjalan lancar.',
      line2: 'Hubungi kami untuk informasi lebih lanjut.',
    },

    // Image 1 — AboutHero (video background section)
    aboutHero: {
      eyebrow: 'Siapa Kami',
      p1: 'Kami adalah importir dan distributor suku cadang otomotif terkemuka di Indonesia. Produk kami umumnya berasal dari Jepang dan juga negara lainnya di seluruh dunia. Kami menjunjung tinggi kepercayaan, kualitas dan kecepatan pengiriman dalam menyediakan produk dan layanan terbaik bagi para pelanggan kami.',
      p2: 'Seiring dengan perkembangan bisnis secara dinamis, kami menerapkan sistem pergudangan dan operasional yang modern dengan tujuan memberikan pelayanan yang lebih baik, efektif dan efisien kepada pelanggan kami. Dengan komitmen menjalin hubungan bisnis jangka panjang, kami juga memiliki tim yang berpengalaman dalam penanganan suku cadang otomitif. Selain produk dan pelayanan yang berkualitas, menjadi keberlangsungan hubungan bisnis jangka panjang yang terpercaya merupakan prioritas utama kami.',
    },

    // Image 2 — VisionMission
    visionMission: {
      visionTitle:  'Visi Kami',
      visionText:   'Menjadi distributor suku cadang otomotif terkemuka yang dikenal dengan kualitas produk yang terjamin serta kemudahan akses bagi pelanggan kami di seluruh Indonesia.',
      missionTitle: 'Misi Kami',
      missionText:  'Menerapkan ide-ide inovatif dan optimalisasi untuk meningkatkan diri kami dalam menyediakan layanan terbaik, jaminan kualitas produk yang sesuai dengan regulasi hukum yang berlaku di Indonesia kepada pelanggan kami.',
    },

    // Image 3 — CapabilitiesSection
    capabilities: {
      heading: 'Apa yang Kami Tawarkan?',
      items: [
        { title: 'Support',               desc: 'Konsultasi chat untuk menjawab pertanyaan dan info seputar produk kami.' },
        { title: 'Pengetahuan Produk',    desc: 'Dilengkapi dengan pengetahuan produk, kami menjamin produk kami sesuai untuk kendaraan Anda.' },
        { title: 'Garansi Produk Original', desc: 'Sebagai distributor resmi, kami menjamin produk kami 100% original langsung dari pabrik.' },
        { title: 'Beli dan Ambil langsung', desc: 'Pilihan tanpa ribet! Datang dan konfirmasi kesesuaian produk sebelum membeli.' },
        { title: 'Pengiriman',            desc: 'Layanan pengiriman tepat waktu untuk memastikan produk Anda sampai tujuan.' },
      ],
    },

    // Image 5 — DistributionMap
    distMap: {
      heading:  'Jaringan Kami',
      lead:     'Kami mendistribusikan produk kami ke dealer, toko eceran, bengkel di seluruh Indonesia. Dengan ribuan SKU, produk kami cocok untuk kebutuhan kendaraan Anda, mulai dari mobil, van, truk komersial, dll.',
      ctaTitle: 'PRODUK KAMI DALAM JANGKAUAN ANDA!',
      ctaSub:   'Dapatkan produk kami di toko terdekat di kota Anda.',
      ctaBtn:   'HUBUNGI KAMI',
    },

    // Image 4 — CertificatesSection
    certificates: {
      heading:  'Sertifikat',
      lead:     'Beberapa Sertifikat Distributor Resmi sebagai bukti untuk memastikan kenyamanan Anda dalam berbisnis dengan kami.',
      viewMore: 'Lihat Lebih',
      viewLess: 'Lihat Lebih Sedikit',
    },

    // Image 6 — ServicesHero
    servicesHero: {
      heading: 'Layanan Kami',
      sub:     'Distribusi produk kami menjangkau seluruh Indonesia. Jaringan ekstensif kami memastikan bahwa produk kami dapat diakses dan tersedia untuk berbagai segmen kebutuhan otomotif di seluruh Indonesia.',
    },

    // Image 6 — FleetSection
    fleet: {
      label:   'Solusi Armada & Perusahaan Logistik',
      title1:  'Pilihan Terpercaya untuk',
      title2:  'Mobilitas Armada Anda',
      desc:    'Kami bangga menjadi mitra terpercaya bagi industri otomotif Indonesia. Sebagai mitra strategis Anda, kami melayani kebutuhan operasional dari skala kecil hingga besar, di antaranya perusahaan logistik, transportasi, armada ekspedisi, mobil rental, dan berbagai jaringan dealer.',
      howHelp: 'Bagaimana kami dapat membantu?',
      cards: [
        { line1: 'Suku Cadang',  line2: 'Lengkap' },
        { line1: 'Jaringan',     line2: 'Distribusi Luas' },
        { line1: 'Manajemen Stok dan Biaya', line2: 'Operasional', line3: 'Terkontrol' },
        { line1: 'Support Tanya', line2: 'Jawab' },
        { line1: 'Faktur Pajak', line2: 'dan Dokumen Legal' },
      ],
    },

    // Image 7 — FleetPartner
    fleetPartner: {
      heading: 'Beberapa Mitra Kami',
    },

    // Image 7 — RetailSection
    retail: {
      label:    'Mitra UMKM dan Bisnis Lokal',
      title1:   'Mitra Anda untuk',
      title2:   'Pengembangan Bisnis Ritel',
      desc:     'Dengan mendukung keberlangsungan bisnis lokal dan UMKM, kami adalah distributor terpercaya untuk toko ritel dan bengkel. Rangkaian produk yang lengkap, suku cadang bersertifikat, dan pengiriman tepat waktu kami terapkan untuk menjamin kepuasan pelanggan dan hubungan bisnis jangka panjang.',
      floating: 'Jaminan Kualitas untuk Loyalitas Pelanggan.',
      features: [
        { label: 'Ketersediaan\nSuku Cadang' },
        { label: 'Pengiriman\nTepat Waktu' },
        { label: 'Tersebar di\nBerbagai wilayah' },
      ],
    },

    // Image 8 — WorkshopSection
    workshop: {
      label:    'Layanan Instalasi Terintegrasi',
      title1:   'Pasang Langsung di Bengkel',
      title2:   'Authorized Kami',
      desc:     'Bingung cari bengkel terpercaya yang menerima pemasangan produk sparepart kami? Bengkel Anugerah Auto solusinya! Bengkel kami melayani servis pergantian komponen suspensi, kaki-kaki, shock absorber, rem, aki, ganti oli dan tune up. Pergantian spareparts dilakukan oleh teknisi ahli kami yang terlatih dan didukung dengan peralatan bengkel modern yang terbaik dan transparan dengan garansi pemasangan berlaku.',
      findOut:  'Info Selengkapnya',
      services: ['Suspensi/Kaki-kaki', 'Rem', 'Shock Absorber', 'Baterai', 'Oil', 'Tune Up'],
    },

    // Image 9 — ProductsHero
    productsHero: {
      eyebrow: 'Produk Kami',
      heading: 'Suku Cadang Terpercaya dari Pabrikan Terkemuka',
      desc:    'Produk kami dipilih secara selektif dan telah terpercaya secara internasional untuk menjaga mobil Anda tetap prima di jalan.',
      items: [
        'Bearing', 'Oil Seal',
        'Suspensi (bushing, tie rod, ball joint, dll) drive shaft, cv joint', 'Fan Belt',
        'Shock Absorber & Strut Mount', 'Wiper',
        'Komponen Rem & Disc Brake', 'Komponen Elektrikal',
        'Water Pump', 'Aki Mobil', 'Lainnya',
      ],
    },

    // Image 10 — ProductCatalog & BrandsSection
    catalog: {
      filterLabel:         'Filter Berdasarkan Kategori:',
      categoryPlaceholder: 'Pilih Kategori',
      searchPlaceholder:   'Cari Nama Merek ...',
      viewDetails:         'Lihat Detail →',
      noProducts:          'Produk tidak ditemukan.',
    },

    brands: {
      assistHeading:  'Perlu bantuan? Kami siap membantu mengidentifikasi produk yang sesuai dengan kebutuhan Anda.',
      callChat:       'Hubungi Kami atau Chat',
      storeDesc:      'Beberapa produk tersedia untuk pembelian eceran. Temukan promo dan diskon terbaru di toko online kami di bawah ini.',
      marqueeEyebrow: 'Brand Kami',
      marqueeHeading: 'Brand Skala Internasional yang Terpercaya',
      viewMore:       'Lihat Selengkapnya',
      fitTo:          'Cocok untuk merek mobil di Indonesia pada umumnya:',
    },

    // Images 11–12 — ArticlesView
    articles: {
      heading:     'Artikel & Panduan',
      sub:         'Sedang mencari saran tentang cara melakukan pekerjaan dengan benar? Ikuti panduan kami dan jelajahi topik-topik tertentu.',
      searchLabel: 'Search',
      placeholder: 'Search ...',
      searchBtn:   'Search',
      readMore:    'Read more',
      noResults:   'Artikel tidak ditemukan.',
    },

    // Images 13–19 — ArticleDetailView
    articleDetail: {
      notFound: 'Artikel tidak ditemukan.',
      back:     '← Kembali ke Artikel',
      backBtn:  'Kembali ke Artikel',
    },

    contact: {
      heroTitle:          'Apa yang dapat kami bantu?',
      heroSub:            'Kirimkan pesan melalui formulir di bawah atau klik chat box kami.',
      formTitle:          'Pesan Anda',
      nameLabel:          'Nama',
      namePlaceholder:    'Masukkan Nama Anda',
      phoneLabel:         'Telepon/HP',
      phonePlaceholder:   'Masukkan Nomor Telepon/HP',
      emailLabel:         'Email',
      emailPlaceholder:   'Masukkan Email Anda',
      subjectLabel:       'Judul',
      subjectPlaceholder: 'Masukkan Judul Pesan',
      messageLabel:       'Pesan Anda',
      messagePlaceholder: 'Masukkan Pesan Anda',
      submitBtn:          'KIRIM',
      sentBtn:            '✓ Terkirim!',
      infoTitle:          'Hubungi kami',
      addressLabel:       'Alamat',
      hoursLabel:         'Jam operasional',
      hoursValue:         'Senin–Jumat: 09.00–17.30 WIB',
    },

    notFound: {
      message: 'Halaman yang Anda cari tidak ada atau telah dipindahkan.',
      back:    '← Kembali ke Beranda',
    },
  },
}
