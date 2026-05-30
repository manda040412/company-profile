// ─────────────────────────────────────────────
//  ARTICLES DATA — Bilingual (EN / ID)
// ─────────────────────────────────────────────
import imgBrakes       from '@/assets/images/articles/about-brakes.webp'
import imgShock        from '@/assets/images/articles/shock-absorber.webp'
import imgWiper1       from '@/assets/images/articles/wiper1.webp'
import imgWiper2       from '@/assets/images/articles/wiper2.webp'
import imgWiperRubber  from '@/assets/images/articles/wiper-rubber.webp'
import imgGraType      from '@/assets/images/articles/gra-type.webp'
import imgGrbType      from '@/assets/images/articles/grb-type.webp'
import imgDesignRubber from '@/assets/images/articles/install-design-wiper-rubber-1.webp'

const articlesData = [

  // ─── 1. BRAKES ────────────────────────────────────────────────────────
  {
    slug: 'what-you-need-to-know-about-brakes',
    img: imgBrakes, icon: '🔧', date: 'Des 2025',
    EN: {
      title:   'What You Need to Know About Brakes',
      excerpt: 'The braking system is one of the most important systems in your car. For this reason, it is crucial to maintain and ensure its components function properly.',
      content: [
        { type: 'heading',    text: 'What you need to know about brakes' },
        { type: 'image',      src: imgBrakes, alt: 'Brake pad replacement', size: 'large' },
        { type: 'paragraph',  text: 'The braking system is one of the most important systems in your car. Therefore, it is crucial to maintain and ensure that its components function properly. Brake pads are among the components most prone to wear after two or three rotor replacements. The performance of the brake pads is essential to stopping your car, and the friction lining will also wear down over time. Considering driving safety and comfort, ceramic brake pads are one of the best options, especially in Indonesia.' },
        { type: 'subheading', text: 'Advantages and Disadvantages of Ceramic Brake Pads' },
        { type: 'paragraph',  text: 'Ceramic brake pads are made of ceramic combined with other materials such as copper, silicon, and carbon. Below are the characteristics of ceramic brake pads:' },
        { type: 'list', items: [
          'Produce much quieter noise compared to semi-metallic brake pads.',
          'More durable: ceramic brake pads last longer than semi-metallic ones due to their harder composition.',
          'Generate significantly less brake dust compared to semi-metallic materials.',
          'Reduce wear on the brake rotor.',
          'Higher price: depending on the type of vehicle, ceramic brake pads may be more expensive than semi-metallic ones.',
          'Not suitable for cold climates, but an excellent solution for use in hot or moderate climates.',
        ]},
        { type: 'subheading', text: 'When Is the Right Time to Replace Your Brake Pads?' },
        { type: 'paragraph',  text: 'Brake pads should be replaced immediately if the friction material thickness is less than 1/4 inch, or when you notice any of the following signs:' },
        { type: 'list', items: [
          'Squeaking or squealing noises',
          'Vibration in the steering wheel',
          'Brake warning light appears on the dashboard',
        ]},
      ],
    },
    ID: {
      title:   'Yang perlu Anda ketahui tentang pengereman',
      excerpt: 'Yang perlu Anda ketahui tentang pengereman Sistem pengereman merupakan salah satu sistem yang paling penting pada mobil Anda. Untuk itu, ....',
      content: [
        { type: 'heading',    text: 'Yang perlu Anda ketahui tentang pengereman' },
        { type: 'image',      src: imgBrakes, alt: 'Penggantian kampas rem', size: 'large' },
        { type: 'paragraph',  text: 'Sistem pengereman merupakan salah satu sistem yang paling penting pada mobil Anda. Untuk itu, sangat penting untuk merawat dan memastikan komponen tersebut agar berfungsi dengan sempurna. Kampas rem adalah salah satu komponen yang paling rentan aus setelah dua atau tiga kali penggantian rotor. Kinerja kampas rem sangat penting untuk menghentikan laju mobil Anda dan bantal gesekan juga aus seiring dengan lamanya pemakaian. Dengan mempertimbangkan keamanan dan kenyamanan berkendara, kampas rem berbahan keramik adalah salah satu pilihan terbaik, terutama di Indonesia.' },
        { type: 'subheading', text: 'KELEBIHAN DAN KEKURANGAN KAMPAS REM BERBAHAN KERAMIK' },
        { type: 'paragraph',  text: 'Kampas rem berbahan keramik terdiri dari keramik dan material lain seperti tembaga, silikon dan karbon. Berikut adalah karakteristik kampas rem berbahan keramik:' },
        { type: 'list', items: [
          'Suara yang dihasilkan sangat tenang dibanding kampas rem berbahan semi metalik.',
          'Lebih tahan lama: kampas rem berbahan keramik lebih tahan lama dari semi metalik karena komponennya lebih keras.',
          'Debu kampas sangat minim dibanding bahan semi metalik.',
          'Mengurangi keausan pada rotor rem.',
          'Harga yang lebih mahal: tergantung tipe mobil, kampas rem berbahan keramik bisa saja lebih mahal dibanding kampas rem berbahan semi metalik.',
          'Tidak sesuai untuk iklim dingin, namun solusi terbaik untuk penggunaan di iklim panas/sedang.',
        ]},
        { type: 'subheading', text: 'KAPAN WAKTU YANG TEPAT UNTUK MENGGANTI KAMPAS REM ANDA?' },
        { type: 'paragraph',  text: 'Kampas rem harus segera diganti jika tebal bantalan gesek kurang dari 1/4 inci, atau ketika muncul gejala seperti di bawah ini:' },
        { type: 'list', items: [
          '– Suara berdecit',
          '– Getaran pada kemudi/stiur mobil',
          '– Muncul lampu indikator rem pada dasbor.',
        ]},
      ],
    },
  },

  // ─── 2. NWB WIPER BLADE ───────────────────────────────────────────────
  {
    slug: 'how-to-change-nwb-wiper-blade',
    img: imgDesignRubber, icon: '🪟', date: 'Nov 2025',
    EN: {
      title:   'How to change your NWB wiper blade',
      excerpt: 'How to change your NWB Wiper Blade. Design hybrid wiper. Detach your old wiper 1. Lift the wiper arm up.',
      content: [
        { type: 'heading',    text: 'How to change your NWB wiper blade' },
        { type: 'image',      src: imgDesignRubber, alt: 'NWB Wiper blade installation', size: 'large' },
        { type: 'heading2',   text: 'How to change your NWB Wiper Blade' },
        { type: 'label',      text: 'Design hybrid wiper' },
        { type: 'subheading', text: 'Detach your old wiper' },
        { type: 'list', items: [
          'Lift the wiper arm away from the glass.',
          'Rotate the blade diagonally and push the stopper of the clip.',
          'Hold the stopper and pull the wiper away from the hook.',
        ]},
        { type: 'image', src: imgWiper1, alt: 'Design hybrid wiper blade diagram', size: 'small' },
        { type: 'note',       text: 'Caution: Do not detach with force.' },
        { type: 'subheading', text: 'Install your new wiper' },
        { type: 'list', items: [
          'Pull the clip (on the center of the blade) up, slide the blade into the "U" shape hook.',
          'Put the connector tab back to its place and clicks.',
          'Rotate the blade and check if it is installed properly, before you set back down the new installed wiper against the glass.',
        ]},
        { type: 'label',      text: 'Aqua type wiper' },
        { type: 'subheading', text: 'Detach your old wiper' },
        { type: 'list', items: [
          'Lift the wiper arm away from the glass.',
          'Rotate the blade diagonally and push the stopper of the clip.',
          'Hold the stopper and pull the wiper away from the hook.',
        ]},
        { type: 'image', src: imgWiper2, alt: 'Aqua type wiper blade diagram', size: 'small' },
        { type: 'note',       text: 'Caution: Do not detach with force.' },
        { type: 'subheading', text: 'Install your new wiper' },
        { type: 'list', items: [
          'Set the blade stopper (on the center of the blade) to a proper angle and slide the blade into the "U" shape hook.',
          'Pull up the wiper blade until it clicks.',
          'Rotate the blade and check if it is installed properly, before you set back down the new installed wiper against the glass.',
        ]},
      ],
    },
    ID: {
      title:   'Cara #pasangdirumahaja NWB wiper blade',
      excerpt: 'Cara #pasangdirumahaja NWB Wiper Blade Design hybrid wiper Lepas wiper lama 1. Tarik wiper arm ke atas. 2. Putar wiper ....',
      content: [
        { type: 'heading',    text: 'Cara #pasangdirumahaja NWB wiper blade' },
        { type: 'image',      src: imgDesignRubber, alt: 'Pemasangan NWB Wiper blade', size: 'large' },
        { type: 'heading2',   text: 'Cara #pasangdirumahaja NWB Wiper Blade' },
        { type: 'label',      text: 'Design hybrid wiper' },
        { type: 'subheading', text: 'Lepas wiper lama' },
        { type: 'list', items: [
          'Tarik wiper arm ke atas.',
          'Putar wiper blade secara diagonal dan tekan stopper klip.',
          'Tahan stopper dan lepas wiper dari hooknya.',
        ]},
        { type: 'image', src: imgWiper1, alt: 'Diagram wiper blade Design hybrid', size: 'small' },
        { type: 'note',       text: 'Perhatian: Hindari melepas secara paksa/kuat.' },
        { type: 'subheading', text: 'Pasang wiper baru' },
        { type: 'list', items: [
          'Buka klip (pada bagian tengah wiper) dan masukkan wiper blade ke hook bentuk "U".',
          'Tutup klip pada posisi semula hingga terdengar bunyi klik.',
          'Cek apakah wiper sudah terpasang dengan benar sebelum mengembalikan wiper ke posisi semula.',
        ]},
        { type: 'label',      text: 'Aqua type wiper' },
        { type: 'subheading', text: 'Lepas wiper lama' },
        { type: 'list', items: [
          'Tarik wiper arm ke atas.',
          'Putar wiper blade secara diagonal dan tekan stopper klip.',
          'Tahan stopper dan lepas wiper dari hooknya.',
        ]},
        { type: 'image', src: imgWiper2, alt: 'Diagram wiper blade Aqua type', size: 'small' },
        { type: 'note',       text: 'Perhatian: Hindari melepas secara paksa/kuat.' },
        { type: 'subheading', text: 'Pasang wiper baru' },
        { type: 'list', items: [
          'Posisikan blade stopper (pada bagian tengah wiper) dan masukkan wiper blade ke hook bentuk "U".',
          'Tarik wiper blade hingga terdengar bunyi klik.',
          'Cek apakah wiper sudah terpasang dengan benar sebelum mengembalikan wiper ke posisi semula.',
        ]},
      ],
    },
  },

  // ─── 3. SHOCK ABSORBERS ───────────────────────────────────────────────
  {
    slug: 'what-you-need-to-know-about-shock-absorbers',
    img: imgShock, icon: '⚙️', date: 'Nov 2025',
    EN: {
      title:   'What you need to know about shock absorbers',
      excerpt: 'As part of suspension system, the main function of shock absorber is to give the passengers a comfortable, smooth ride on road.',
      content: [
        { type: 'heading',    text: 'What you need to know about shock absorbers' },
        { type: 'image',      src: imgShock, alt: 'Shock absorbers', size: 'large' },
        { type: 'heading2',   text: 'What you need to know about shock absorbers?' },
        { type: 'paragraph',  text: 'As part of suspension system, the main function of shock absorber is to give the passengers a comfortable, smooth ride on road. It keeps the tires in as much contact as possible with the road under bumps, pulling the car side to side in cornering and front to back in stopping and acceleration. Cars with poor suspension systems can cause damage to other parts of the car and uncomfortable riding.' },
        { type: 'subheading', text: 'WHEN TO REPLACE SHOCK ABSORBERS?' },
        { type: 'paragraph',  text: 'As with any other component on your automobile, the actual requirements vary depending on the driving conditions and also the make and model of the vehicle itself. General thought is that most shocks will need replacing on a car when:' },
        { type: 'list', items: [
          'Distance traveled is over 50,000 km.',
          'Irregular wear on tires.',
          'The shock absorber is in irregular state, such as: oil leaks, severe damage on the outer part.',
        ]},
        { type: 'paragraph',  text: 'Particularly if you are driving on bumpy roads often, such as dirt roads, you may need to replace your shocks more often as compared to individuals who generally drive on smooth pavement or highway driving.' },
        { type: 'paragraph',  text: 'Getting your shock absorbers checked should be a part of yearly tune up done on your automobile. This helps you get a better sense of when these parts are wearing down and need to be replaced.' },
      ],
    },
    ID: {
      title:   'Yang perlu Anda ketahui tentang peredam kejut',
      excerpt: 'Yang perlu Anda ketahui tentang peredam kejut Sebagai bagian dari sistem suspensi mobil, fungsi utama dari peredam kejut adalah untuk ....',
      content: [
        { type: 'heading',    text: 'Yang perlu Anda ketahui tentang peredam kejut' },
        { type: 'image',      src: imgShock, alt: 'Peredam kejut', size: 'large' },
        { type: 'heading2',   text: 'Yang perlu Anda ketahui tentang peredam kejut' },
        { type: 'paragraph',  text: 'Sebagai bagian dari sistem suspensi mobil, fungsi utama dari peredam kejut adalah untuk memberikan kenyamanan berkendara bagi penumpang di perjalanan. Peredam kejut juga memastikan agar ban mobil stabil pada gundukan atau medan yang tidak rata. Mobil dengan sistem suspensi yang kurang baik akan mengakibatkan kerusakan pada komponen mobil lainnya dan ketidaknyamanan pada saat berkendara.' },
        { type: 'subheading', text: 'KAPAN SEBAIKNYA PEREDAM KEJUT DIGANTI?' },
        { type: 'paragraph',  text: 'Seperti komponen mobil lainnya, persyaratan yang tepat untuk mengganti peredam kejut beragam tergantung pada kondisi berkendara dan juga tipe mobil tersebut. Secara umum, peredam kejut perlu diganti saat:' },
        { type: 'list', items: [
          'Perjalanan yang ditempuh sudah lebih dari 50.000 km.',
          'Keausan pada ban mobil.',
          'Peredam kejut pada kondisi tidak normal, seperti: oli bocor, kerusakan parah pada bagian luar peredam kejut.',
        ]},
        { type: 'paragraph',  text: 'Ketika Anda berkendara khususnya pada medan yang tidak rata, seperti jalanan berlumpur, Anda mungkin perlu mengganti peredam kejut lebih sering daripada mobil yang umumnya berlaju pada medan/jalanan yang rata.' },
        { type: 'paragraph',  text: 'Pengecekan peredam kejut seharusnya dilakukan setahun sekali saat servis mobil. Dengan demikian, Anda dapat merasakan dan lebih peka jika komponen ini rusak atau butuh diganti.' },
      ],
    },
  },

  // ─── 4. NWB REAR WIPER ────────────────────────────────────────────────
  {
    slug: 'how-to-change-nwb-rear-wiper',
    img: imgDesignRubber, icon: '🪟', date: 'Okt 2025',
    EN: {
      title:   'How to change your NWB rear wiper',
      excerpt: 'How to change your NWB rear wiper. GRA type. Detach your old wiper 1. Lift the wiper arm. 2. Rotate...',
      content: [
        { type: 'heading',    text: 'How to change your NWB rear wiper' },
        { type: 'image',      src: imgDesignRubber, alt: 'NWB rear wiper installation', size: 'large' },
        { type: 'heading2',   text: 'How to change your NWB rear wiper' },
        { type: 'label',      text: 'GRA type' },
        { type: 'image',      src: imgGraType, alt: 'GRA type wiper diagram', size: 'small' },
        { type: 'subheading', text: 'Detach your old wiper' },
        { type: 'list', items: [
          'Lift the wiper arm.',
          'Rotate the blade and make proper angle to detach the blade.',
        ]},
        { type: 'note',       text: 'Caution: Do not detach with force.' },
        { type: 'subheading', text: 'Install your new wiper' },
        { type: 'list', items: [
          'Set the blade so that the stopper is located in the bottom of the center bar.',
          'Rotate the wiper blade and make proper angle, push the wiper blade into B, at the same time the stopper would fit into groove C.',
          'Rotate the blade and check if the blade is installed correctly with the wiper arm.',
        ]},
        { type: 'label',      text: 'GRB type' },
        { type: 'image',      src: imgGrbType, alt: 'GRB type wiper diagram', size: 'small' },
        { type: 'subheading', text: 'Detach your old wiper' },
        { type: 'list', items: [
          'Lift the wiper arm.',
          'Rotate the blade and make proper angle to detach the blade.',
        ]},
        { type: 'note',       text: 'Caution: Do not detach with force.' },
        { type: 'subheading', text: 'Install your new wiper' },
        { type: 'list', items: [
          'Insert the center bar into the tip of "B".',
          'Rotate the wiper blade and make proper angle, push the wiper blade to the wiper arm.',
          'Rotate the blade and check if the blade is installed correctly with the wiper arm.',
        ]},
      ],
    },
    ID: {
      title:   'Cara #pasangdirumahaja Wiper Belakang NWB',
      excerpt: 'Cara pasang Wiper Belakang NWB tipe GRA Lepas wiper lama 1. Wiper arm diangkat ke atas. 2. Wiper blade diposisikan ....',
      content: [
        { type: 'heading',    text: 'Cara #pasangdirumahaja Wiper Belakang NWB' },
        { type: 'image',      src: imgDesignRubber, alt: 'Pemasangan wiper belakang NWB', size: 'large' },
        { type: 'heading2',   text: 'Cara pasang Wiper Belakang NWB' },
        { type: 'label',      text: 'tipe GRA' },
        { type: 'image',      src: imgGraType, alt: 'Diagram wiper tipe GRA', size: 'small' },
        { type: 'subheading', text: 'Lepas wiper lama' },
        { type: 'list', items: [
          'Wiper arm diangkat ke atas.',
          'Wiper blade diposisikan pada posisi yang tepat untuk melepas wiper lama.',
        ]},
        { type: 'note',       text: 'Perhatian: Hindari melepas wiper dengan kuat/paksa.' },
        { type: 'subheading', text: 'Pasang wiper baru' },
        { type: 'list', items: [
          'Wiper blade diposisikan sehingga stopper berada di bawah "center bar".',
          'Sesuaikan wiper blade agar center bar dapat masuk dengan pas di B dan stopper masuk dengan pas di C.',
          'Cek apakah wiper blade sudah terpasang dengan baik di wiper arm dengan menggerakkan wiper ke kanan dan kiri.',
        ]},
        { type: 'label',      text: 'tipe GRB' },
        { type: 'image',      src: imgGrbType, alt: 'Diagram wiper tipe GRB', size: 'small' },
        { type: 'subheading', text: 'Lepas wiper lama' },
        { type: 'list', items: [
          'Wiper arm diangkat ke atas.',
          'Wiper blade diposisikan pada posisi yang tepat untuk melepas wiper lama.',
        ]},
        { type: 'note',       text: 'Perhatian: Hindari melepas wiper dengan kuat/paksa.' },
        { type: 'subheading', text: 'Pasang wiper baru' },
        { type: 'list', items: [
          'Masukkan center bar ke ujung wiper arm B.',
          'Wiper blade diposisikan dengan tepat agar center bar dapat masuk ke B dengan pas.',
          'Cek apakah wiper blade sudah terpasang dengan baik di wiper arm dengan menggerakkan wiper ke kanan dan kiri.',
        ]},
      ],
    },
  },

  // ─── 5. AERO SLIM WIPER RUBBER ────────────────────────────────────────
  {
    slug: 'how-to-change-aero-slim-wiper-rubber',
    img: imgDesignRubber, icon: '🪟', date: 'Sep 2025',
    EN: {
      title:   'How to change your Aero Slim Wiper Rubber',
      excerpt: 'How to install NWB Aero Slim wiper rubber. Detach your old wiper rubber 1. Hold the rubber of the rear end.',
      content: [
        { type: 'heading',  text: 'How to change your Aero Slim Wiper Rubber' },
        { type: 'image',    src: imgDesignRubber, alt: 'Aero Slim wiper rubber installation', size: 'large' },
        { type: 'heading2', text: 'How to install NWB Aero Slim wiper rubber' },
        { type: 'label',    text: 'Detach your old wiper rubber' },
        { type: 'list', items: [
          'Hold the rubber of the rear end and pull down the rubber until you see the slit.',
          'Pull out the rubber from the slit.',
        ]},
        { type: 'note',  text: 'Caution: When replacing the rubber, do not hold strongly or bend the wiper blade. In some case, wiping performance may be worse because the wiper blade deforms. Be sure to hold the clip.' },
        { type: 'label', text: 'Install your new wiper rubber' },
        { type: 'list', items: [
          'Insert the front end of the refill rubber into the slit part and pull the rubber until it is inserted entirely to the rear end.',
          'In case of the refill rubber is twisted, push the refill rubber back and forth.',
        ]},
      ],
    },
    ID: {
      title:   'Cara #pasangdirumahaja Karet Wiper Aero Slim',
      excerpt: 'Cara pasang karet wiper Aero Slim Lepas karet wiper lama 1. Pegang karet wiper pada ujung wiper (bagian belakang/ekor) dan tarik hingga ....',
      content: [
        { type: 'heading',  text: 'Cara #pasangdirumahaja Karet Wiper Aero Slim' },
        { type: 'image',    src: imgDesignRubber, alt: 'Pemasangan karet wiper Aero Slim', size: 'large' },
        { type: 'heading2', text: 'Cara pasang karet wiper Aero Slim' },
        { type: 'label',    text: 'Lepas karet wiper lama' },
        { type: 'list', items: [
          'Pegang karet wiper pada ujung wiper (bagian belakang/ekor) dan tarik hingga kelihatan celah penghubung.',
          'Tarik karet wiper lama dari celah penghubung tersebut.',
        ]},
        { type: 'note',  text: 'Perhatian: saat melepas karet wiper lama, hindari menekan wiper blade yang terlalu kuat atau membengkokkan wiper blade karena akan mengurangi performa wiper blade tersebut.' },
        { type: 'label', text: 'Pasang karet wiper baru' },
        { type: 'list', items: [
          'Masukkan karet wiper baru bagian depan/kepala ke celah penghubung tersebut dan tarik hingga bagian belakang/ekornya masuk secara keseluruhan.',
          'Jika karet wiper barunya kurang pas, tekan karet wipernya dengan perlahan agar masuk secara keseluruhan dengan pas.',
        ]},
      ],
    },
  },

  // ─── 6. DESIGN TYPE WIPER RUBBER ──────────────────────────────────────
  {
    slug: 'how-to-change-design-type-wiper-rubber',
    img: imgDesignRubber, icon: '🪟', date: 'Sep 2025',
    EN: {
      title:   'How to change your Design Type wiper rubber',
      excerpt: 'How to change your NWB Design Type wiper rubber. Detach your old wiper rubber 1. Check the stopper at the rear end.',
      content: [
        { type: 'heading',  text: 'How to change your Design Type wiper rubber' },
        { type: 'image',    src: imgDesignRubber, alt: 'Design Type wiper rubber installation', size: 'large' },
        { type: 'heading2', text: 'How to change your NWB Design Type wiper rubber' },
        { type: 'label',    text: 'Detach your old wiper rubber' },
        { type: 'list', items: [
          'Check the stopper at the rear end.',
          'Hold the wiper blade firmly and pull out the wiper rubber.',
          'Remove metal rail from pulled wiper rubber.',
        ]},
        { type: 'label', text: 'Install your new wiper rubber' },
        { type: 'list', items: [
          'Check the correct grooves position of the metal rails and refill rubber.',
          'Insert the metal rail into the grooves of the refill rubber.',
          'Make sure that the direction of the wiper rubber matches the wiper.',
          'Insert the end of the new rubber to the wiper blade claw and slide it into front.',
          'Push the wiper rubber until the wiper blade claws are firmly placed into the stopper. Finally, check the connection of the wiper rubber by pushing the wiper rubber back and forth.',
        ]},
        { type: 'image',  src: imgWiperRubber, alt: 'Design type wiper rubber diagram', size: 'small' },
        { type: 'notice', text: 'Notice: This wiper rubber only fits to NWB Design type wiper blade.' },
      ],
    },
    ID: {
      title:   'Cara #pasangdirumahaja karet wiper Design',
      excerpt: 'Cara pasang karet wiper tipe Design Lepas karet wiper lama 1. Cek stopper pada ujung wiper. 2. Pegang wiper blade dan tarik karet wiper lama....',
      content: [
        { type: 'heading',  text: 'Cara #pasangdirumahaja karet wiper Design' },
        { type: 'image',    src: imgDesignRubber, alt: 'Pemasangan karet wiper tipe Design', size: 'large' },
        { type: 'heading2', text: 'Cara pasang karet wiper tipe Design' },
        { type: 'label',    text: 'Lepas karet wiper lama' },
        { type: 'list', items: [
          'Cek stopper pada ujung wiper.',
          'Pegang wiper blade dan tarik karet wiper lama.',
          'Lepas kepingan kawat besi dari karet wiper lama.',
        ]},
        { type: 'label', text: 'Pasang karet wiper baru' },
        { type: 'list', items: [
          'Cek posisi karet wiper baru yang sesuai dengan bentuk kawat besi.',
          'Masukkan kawat besi ke karet wiper baru.',
          'Pastikan kepala dan ekor karet wiper sesuai dengan bentuk wiper blade agar tidak terbalik.',
          'Masukkan karet wiper baru ke wiper bladenya dimulai dari bagian ekor dan dorong hingga ke ujung.',
          'Dorong agar karet wiper masuk hingga ke bagian ujung/stopper wiper. Lalu, pastikan agar karet wiper sudah pas masuk dengan mendorong karet wiper pada ujung kiri dan kanan.',
        ]},
        { type: 'image',  src: imgWiperRubber, alt: 'Diagram karet wiper tipe Design', size: 'small' },
        { type: 'notice', text: 'Perhatian: Karet wiper ini hanya cocok untuk wiper blade merek NWB Design.' },
      ],
    },
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────
export function getArticles(lang = 'EN') {
  return articlesData.map(a => ({
    slug:    a.slug,
    img:     a.img,
    icon:    a.icon,
    date:    a.date,
    title:   (a[lang] || a['EN']).title,
    excerpt: (a[lang] || a['EN']).excerpt,
    content: (a[lang] || a['EN']).content,
  }))
}

export function getArticleBySlug(slug, lang = 'EN') {
  const a = articlesData.find(x => x.slug === slug)
  if (!a) return null
  return {
    slug:    a.slug,
    img:     a.img,
    icon:    a.icon,
    date:    a.date,
    title:   (a[lang] || a['EN']).title,
    excerpt: (a[lang] || a['EN']).excerpt,
    content: (a[lang] || a['EN']).content,
  }
}

// legacy — keeps any other import working
export const articles = getArticles('EN')
