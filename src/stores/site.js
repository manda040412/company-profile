import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    company: {
      name:      'PT Timur Raya Anugerah Damai',
      shortName: 'TRAD',
      tagline:   'Official Distributor of Japanese Automotive Spare Parts',
      founded:   '1975',
      iso:       'ISO 9001:2015',
      phone:     '+6221-2265-5929',
      whatsapp:  '+6281298155372',
      waLink:    'https://wa.me/6281298155372',
      email:     'tranugerahsales1@gmail.com',
      address: {
        street:   'Jalan Danau Sunter Barat Blok A4 No.3',
        district: 'Sunter Agung',
        city:     'Jakarta Utara',
        zip:      '14350',
        country:  'Indonesia',
        mapsLink: 'https://maps.app.goo.gl/JqS5vwPMSgkBT2rY8',
      },
      hours: 'Monday – Friday: 09.00 – 17.30 WIB',
      instagram: 'https://www.instagram.com/tranugerah/',
      tokopedia: [
        { label: 'Tokopedia (Store 1)', url: 'https://tokopedia.link/FvNr5qU45Xb' },
        { label: 'Tokopedia (Store 2)', url: 'https://tokopedia.link/gplfvC945Xb' },
      ],
      shopee: 'https://shopee.co.id/timurrayaanugerahdamai',
      workshop: 'https://anugerahauto.tranugerah.com/',
    },

    stats: [
      { icon: '🏅', num: 'ISO 9001', plus: '',   label: 'Quality Certified',  deco: '★' },
      { icon: '👥', num: '1,600',    plus: '+',   label: 'Satisfied Clients',  deco: '★' },
      { icon: '📦', num: '5,000',    plus: '+',   label: 'Premium Products',   deco: '★' },
      { icon: '📅', num: '50',       plus: '+',   label: 'Years Experience',   deco: '★' },
    ],

    brands: [
      'SEIKEN','SANKEI','NSK','NWB','MITSUBOSHI',
      'KYB','DENSO','NGK','AISIN','BANDO','EXEDY','KAYABA',
    ],

    vehicles: [
      { icon: '🚗', name: 'Sedan',            desc: 'High-quality parts for sedans, hatchbacks, and family cars.' },
      { icon: '🚐', name: 'MPV',              desc: 'Reliable components for the versatility of MPVs.' },
      { icon: '🚙', name: 'SUV',              desc: 'Durable parts built for the strength and capability of SUVs.' },
      { icon: '🚌', name: 'Van',              desc: 'Heavy-duty components for commercial vehicles.' },
      { icon: '🚛', name: 'Commercial Trucks',desc: 'Industrial-grade parts for light to heavy-duty trucks.' },
    ],

    services: [
      {
        icon: '🚛', title: 'Fleet & Enterprise',
        desc: 'Strategic spare parts partner for large-scale operations, logistics fleets, and dealer networks across Indonesia.',
        tags: ['Genuine Parts','Dealer Supply','Fleet Mgmt','Legal Docs'],
      },
      {
        icon: '🏪', title: 'Retail & Workshop',
        desc: 'Trusted supplier for independent retailers and workshops — high-demand certified parts with fast dispatch.',
        tags: ['Stock Ready','Same-Day','Partner Program'],
      },
      {
        icon: '🔧', title: 'Installation Service',
        desc: 'Anugerah Auto Workshop — certified technicians install our parts with warranty on suspension, brakes, battery & more.',
        tags: ['Suspension','Brakes','Battery','Tune Up'],
      },
    ],

    products: [
      { icon: '🛑', brand: 'SEIKEN',    name: 'Brake Pad Set',     desc: 'Superior stopping power, certified for all Japanese vehicles.',    cat: 'Brakes',       badge: 'BESTSELLER', img: null },
      { icon: '💥', brand: 'KYB',       name: 'Shock Absorber',    desc: 'OEM-grade gas shocks for smooth ride and vehicle stability.',       cat: 'Suspension',   badge: '',           img: null },
      { icon: '🔧', brand: 'NSK',       name: 'Wheel Bearing',     desc: '100% original NSK quality for long-lasting performance.',           cat: 'Suspension',   badge: '',           img: null },
      { icon: '🔋', brand: 'DENSO',     name: 'Ignition Coil',     desc: 'Genuine Denso coils for reliable engine start and fuel efficiency.', cat: 'Electrical',   badge: 'NEW',        img: null },
      { icon: '🛢️', brand: 'AISIN',     name: 'Oil Filter',        desc: 'Premium filters for optimal engine protection.',                    cat: 'Filters',      badge: '',           img: null },
      { icon: '⚙️', brand: 'MITSUBOSHI',name: 'Timing Belt',       desc: 'High-strength belts for Japanese engine compatibility.',            cat: 'Engine',       badge: '',           img: null },
      { icon: '💡', brand: 'NGK',       name: 'Spark Plug',        desc: 'NGK iridium plugs for superior ignition performance.',              cat: 'Electrical',   badge: '',           img: null },
      { icon: '🔴', brand: 'SEIKEN',    name: 'Brake Disc Rotor',  desc: 'Ventilated rotors for consistent stopping power.',                  cat: 'Brakes',       badge: 'GENUINE',    img: null },
      { icon: '🔩', brand: 'SANKEI',    name: 'Stabilizer Link',   desc: 'Genuine links for improved handling and cornering.',                cat: 'Suspension',   badge: '',           img: null },
      { icon: '🌀', brand: 'EXEDY',     name: 'Clutch Kit',        desc: 'Complete OEM kits for smooth gear engagement.',                     cat: 'Transmission', badge: '',           img: null },
      { icon: '🔌', brand: 'DENSO',     name: 'O2 Sensor',         desc: 'Genuine sensors for optimal fuel mixture and efficiency.',          cat: 'Electrical',   badge: '',           img: null },
      { icon: '🧹', brand: 'NWB',       name: 'Wiper Blade',       desc: 'Premium silicone blades for streak-free visibility.',               cat: 'Filters',      badge: '',           img: null },
    ],

    productCats: ['All','Brakes','Suspension','Engine','Electrical','Filters','Transmission'],

    articles: [
      { icon: '🔧', cat: 'Maintenance', tag: 'Maintenance', date: 'Des 2025', title: 'How to Choose the Right Brake Pads for Your Japanese Vehicle', excerpt: 'Selecting the correct brake pads involves understanding your driving style, vehicle type, and operating conditions. We break down the key differences between OEM and aftermarket options.', img: null },
      { icon: '⚙️', cat: 'Tips',        tag: 'Tips',        date: 'Nov 2025', title: '5 Signs Your Shock Absorbers Need Replacement',                excerpt: "Don't ignore these early warning signs that could affect your vehicle's safety and comfort on the road.",                                                                img: null },
      { icon: '📦', cat: 'Industry',    tag: 'Industry',    date: 'Nov 2025', title: 'Why Genuine Parts Matter for Your Vehicle\'s Longevity',       excerpt: 'Using certified genuine parts ensures optimal performance and protects your manufacturer warranty.',                                                                   img: null },
      { icon: '🏭', cat: 'News',        tag: 'News',        date: 'Okt 2025', title: 'TRAD Expands Distribution Network Across Eastern Indonesia',    excerpt: 'New regional partnerships signed to strengthen distribution reach in Kalimantan and Sulawesi.',                                                               img: null },
      { icon: '🛑', cat: 'Maintenance', tag: 'Maintenance', date: 'Okt 2025', title: 'Brake System Maintenance Guide for Fleet Operators',            excerpt: "Fleet vehicles demand more from their brake systems. Here's how to maintain them properly.",                                                                  img: null },
      { icon: '🔋', cat: 'Tips',        tag: 'Tips',        date: 'Sep 2025', title: 'Electrical Component Tips: Keep Your Car Running Reliably',     excerpt: 'Modern Japanese vehicles rely heavily on electrical systems. Here\'s what to watch for.',                                                                    img: null },
    ],

    articleTags: ['All','Maintenance','Industry','Tips','News'],

    capabilities: [
      { icon: '💬', title: 'Chat Support',          desc: 'Consultation to answer your questions and tips about our products.' },
      { icon: '🔍', title: 'Product Know-How',       desc: 'We guarantee our products fit your vehicle requirements.' },
      { icon: '✅', title: 'Guaranteed Original',    desc: 'As an authorized distributor, 100% original from the manufacturer.' },
      { icon: '🏬', title: 'Buy & Pickup In Store',  desc: 'Hassle-free option — confirm product fitment before buying.' },
      { icon: '🚚', title: 'Delivery Options',       desc: 'On-time delivery reaching your location anywhere in Indonesia.' },
      { icon: '📋', title: 'Legal Documentation',    desc: 'Complete tax documents and official distribution certificates.' },
    ],

    certificates: [
      { name: 'SEIKEN' }, { name: 'SANKEI' }, { name: 'NSK' }, { name: 'NWB' },
      { name: 'MITSUBOSHI' }, { name: 'AISIN' }, { name: 'KYB' }, { name: 'DENSO' },
    ],

    workshopServices: [
      { icon: '🔧', name: 'Suspension' },
      { icon: '🛑', name: 'Brake' },
      { icon: '💥', name: 'Shock Absorber' },
      { icon: '🔋', name: 'Battery' },
      { icon: '🛢️', name: 'Oil Change' },
      { icon: '⚙️', name: 'Tune Up' },
    ],

    fleetServices: [
      { icon: '📦', title: 'Genuine Vast Parts',       desc: 'Thousands of genuine SKUs from top Japanese brands — always in stock.' },
      { icon: '🏢', title: 'Dealer Network Supply',     desc: 'Reliable supply chain connecting manufacturers to your dealer network.' },
      { icon: '📊', title: 'Tailored Management',       desc: 'Customized procurement plans for predictable costs and streamlined operations.' },
      { icon: '🤝', title: 'Personal Care Assistance',  desc: 'Dedicated account managers ensuring personal attention to your needs.' },
      { icon: '📄', title: 'Legal Documentation',       desc: 'Complete legal docs, tax invoices, and official distribution certificates.' },
      { icon: '⚡', title: 'Priority Stock Access',     desc: 'Fleet partners receive priority stock allocation and expedited processing.' },
    ],
  }),
})
