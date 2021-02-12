// Assets for Music
monogatari.assets ('music', {
    'rakha': 'mars-rakha.mp3',
});

// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'bg': 'masjid.jpg',
	'rakha': 'rakha.png',
});

// Assets for Voices
monogatari.assets ('voice', {
	'dialog_001': 'dialog_001.mp3',
	'dialog_002': 'dialog_002.mp3',
	'dialog_003': 'dialog_003.mp3',
	'dialog_004': 'dialog_004.mp3',
	'dialog_005': 'dialog_005.mp3',
	'dialog_006_a': 'dialog_006_a.mp3',
	'dialog_006_b': 'dialog_006_b.mp3',
	'dialog_007': 'dialog_007.mp3',
	'dialog_008': 'dialog_008.mp3',
	'dialog_009': 'dialog_009.mp3',
	'dialog_010': 'dialog_010.mp3',
	'dialog_011': 'dialog_011.mp3',
	'dialog_012': 'dialog_012.mp3',
	'dialog_013': 'dialog_013.mp3',
	'dialog_014': 'dialog_014.mp3',
	'dialog_015': 'dialog_015.mp3',
	'dialog_016': 'dialog_016.mp3',
	'dialog_017': 'dialog_017.mp3',
	'dialog_018_a': 'dialog_018_a.mp3',
	'dialog_018_b': 'dialog_018_b.mp3',
	'dialog_019': 'dialog_019.mp3',
	'dialog_020': 'dialog_020.mp3',
	'dialog_021': 'dialog_021.mp3',
	'dialog_022': 'dialog_022.mp3',
	'dialog_023': 'dialog_023.mp3',
	'dialog_024': 'dialog_024.mp3',
	'dialog_025': 'dialog_025.mp3',
});

// Component: Main Screen
monogatari.component ('main-screen').template (() => {
    return `
        <h1>LATAR BELAKANG PERBEDAAN QIRAAT</h1>
        <main-menu></main-menu>
    `;
});

// Configuration for Credits
monogatari.configuration ('credits', {
	"Terima Kasih Kepada": {
		"Tuhan Yang Maha Esa": "Allah SWT.", 
		"Rasul-Nya, terutama": "Muhammad SAW.",
	},
	"Ulumul Quran": {
		"STAI RAKHA Amuntai": "Prodi PAI",
		"Dosen Pengampu": "Syahrani, S.Pd.I., M.M.",
		"Pembuat Presentasi": "M. Nafis Al-Mukhdi",
	},
	"Gambar": {
		"Opened Qur'an800x600x300.jpg": "el7bara (Flickr.com)",
		"Mihrab Masjid Raya Al-Aqsha Merauke.jpg": "Marwan Mohammad",
	},
});

// Script
monogatari.script ({
	'_SplashScreen': [
		'play music rakha',
		'show scene rakha with fadeIn duration 3s',
		'clear',
		'wait 5000',
		'end'
	],
	'Start': [
		'play voice dialog_001',
		'nvl Prolog',
		'jump Prolog'
	],
	'Prolog': [
		'show background bg',
		'play voice dialog_002',
		'Qiraat banyak macamnya.',
		'play voice dialog_003',
		'Dari segi kuantitas, ada <b><i>Qiraat Sab’ah, Qiraat Asyarah</i>,</b> dan <b><i>Qiraat Arba’ah Asyarah</i></b>.',
		'play voice dialog_004',
		'Dari segi kualitas, ada <b><i>Qiraat Mutawatir, Qiraat Masyhur, Qiraat Ahad, Qiraat Syadz,</i></b> dan <b><i>Qiraat</i> yang menyerupai <i>hadis mudraj</i> (sisipan)</b>.',
		'jump Intro00'
	],
	'Intro00': [
		'play voice dialog_005',
		'nvl Pembahasan',
		'jump Intro01'
	],
	'Intro01': [
		'play voice dialog_006_a',
		'nvl Pembahasan Pertama',
		'play voice dialog_006_b',
		'nvl Latar Belakang Historis',
		'jump Pembahasan01'
	],
	Pembahasan01: [
		'show background bg',
		'play voice dialog_007',
		'Qiraat telah muncul sejak masa Nabi saw. walau bukan disiplin ilmu, karena perbedaan para sahabat melafazkan Al-Qur’an dapat ditanyakan langsung kepada Nabi saw., sedangkan Nabi tidak pernah menyalahkan para sahabat yang berbeda itu, sehingga tidak fanatik terhadap lafaz yang digunakan atau yang pernah didengar Nabi.',
		'play voice dialog_008',
		'Riwayat yang menguatkan pendapat tersebut adalah Hadits Sunan An-Nasa`i No. 927 - Kitab Iftitah (Pembukaan), Hadits Jami` At-Tirmidzi No. 2867 - Kitab Qira`at, dan Hadits Jami` At-Tirmidzi No. 2868 - Kitab Qira`at.',
		'play voice dialog_009',
		'Ketiga riwayat tersebut membuktikan meski sahabat mengucapkan lafaz al-Quran secara berbeda, Nabi saw. tidak menyalahkan dan memberi jawaban bahwa al-Quran diturunkan tujuh huruf.',
		'play voice dialog_010',
		'Ulama berbeda pendapat dalam menafsirkan <i>tujuh huruf</i>.',
		'play voice dialog_011',
		'Sebagian besar ulama berpendapat tujuh huruf adalah tujuh macam bahasa dari bahasa-bahasa Arab mengenai satu makna. Ketujuh bahasa yang dimaksud adalah bahasa Quraisy, Huzail, Tsaqif, Hawazin, Kinanah, Tamim, dan Yaman. Menurut Abu Hatim al- Sijistani, ketujuh bahasa tersebut yaitu Quraisy, Huzail, Tamim, Azad, Rabi‟ah, Hawazin, dan Sa`ad bin Bakr.',
		'play voice dialog_012',
		'Ada yang berpendapat tujuh huruf adalah tujuh macam bahasa dari bahasa-bahasa Arab dimana al-Qur`an diturunkan. Misalnya kata فطر artinya menurut selain bahasa Quraisy adalah ابتدأ dan ini terdapat dalam al-Qur`an.',
		'play voice dialog_013',
		'Ada yang berpendapat tujuh huruf adalah tujuh bentuk yaitu <b><i>amr, nahyu, halâl, harâm, muhkam, mutasyâbih,</i> dan <i>amtsâl,</i></b> atau <b><i>wa‟ad, wa‟îd, halâl, harâm, mawâ‟idh, amtsâl,</i> dan </i>ikhtijâj</i></b>.',
		'play voice dialog_014',
		'Ada sekelompok ulama yang berpendapat: tujuh huruf adalah tujuh macam hal yang terjadi perbedaan (ikhtilâf) di dalamnya yaitu perbedaan: dalam al-Asmâ` (kata benda); dari segi i’râb (harakat akhir kata); dari segi tashrîf al-Fi’li (perubahan bentuk kata kerja); dalam taqdîm (mendahulukan) dan ta`khîr (mengakhirkan); dari segi ibdâl (penggantian); dari segi ziyâdah (penambahan); lahjah (dialek).',
		'play voice dialog_015',
		'Sebagian ulama berpendapat bilangan tujuh itu tidak diartikan secara harfiyah. Hanya sebagai lambang kesempurnaan menurut kebiasaan orang Arab. Sebab lafaz sab‟ah dipergunakan pula untuk menunjukkan jumlah banyak dan sempurna dalam bilangan satuan. Tetapi kata-kata itu tidak dimaksudkan untuk menunjukkan bilangan tertentu.',
		'play voice dialog_016',
		'Qiraat bisa diketahui benar atau tidaknya asal memenuhi tiga syarat. Pertama, sesuai dengan kaidah bahasa Arab. Kedua, sesuai dengan mushaf Usmani. Ketiga, sanadnya shahih. Apabila qiraat tidak memenuhi syarat meski hanya salah satu, qiraat dianggap tidak sah atau lemah.',
		'play voice dialog_017',
		'Abu Ubaid al-Qasim bin Salam adalah orang pertama yang menyusun qiraat, disusul ulama lain. Mereka berbeda dalam menetapkan jumlah syarat-syarat qira’at yang benar.',
		'jump Intro02'
	],
	'Intro02': [
		'play voice dialog_018_a',
		'nvl Pembahasan Kedua',
		'play voice dialog_018_b',
		'nvl Latar Belakang Cara Penyampaian',
		'jump Pembahasan02'
	],
	'Pembahasan02': [
		'play voice dialog_019',
		'Setelah para sahabat tersebar, mereka membacakan qira’at Al-Qur’an kepada murid-muridnya secara turun temurun. Akhirnya, para murid lebih suka  mengemukakan qira’at gurunya dari pada mengikuti qira’at imam yang lain.',
		'play voice dialog_020',
		'Berikut adalah rangkuman beberapa bentuk perbedaan cara melafazkan Al-Qur’an menurut ulama.',
		'play voice dialog_021',
		'Perbedaan dalam <i>I’rab</i> atau harakat kalimat tanpa perubahan makna dan bentuk kalimat. Misalnya dapat dilihat dalam Qs. an-Nisa[4]:37 (kata <i>bil-bukhli</i> yang berarti kikir dapat dibaca fathah pada huruf <i>ba</i>-nya, sehingga dapat dibaca <i>bil-bakhli</i> tanpa perubahan makna).',
		'play voice dialog_022',
		'Perubahan pada <i>I’rab</i> dan harakat, sehingga dapat merubah maknanya. Misalnya dalam Qs. Saba’[34]:19 (Kata <i>baa’id</i> artinya jauhkanlah, yang kedudukannya sebagai <i>fi’il amr</i>, boleh juga dibaca <i>ba’ada</i> yang kedudukannya menjadi <i>fi’il madhi</i>, sehingga maknanya berubah “telah jauh”).',
		'play voice dialog_023',
		'Perbedaan pada perubahan huruf tanpa perubahan <i>I’rab</i> dan bentuk tulisan, sedangkan makna berubah. Misalnya dalam QS. al-Baqarah[2]:259 (Kata <i>nunsyizuha</i> “Kami menyusun kembali” ditulis dengan huruf zay diganti dengan huruf ra, sehingga berubah bunyi menjadi <i>nunsyiruha</i> yang berarti “Kami hidupkan kembali”).',
		'play voice dialog_024',
		'Perubahan pada kalimat dengan perubahan pada bentuk tulisan, tapi makna tidak berubah. Misalnya dalam Qs. al-Qari’ah[101]:5 (Kata <i>ka-al-‘ihni</i> “bulu-bulu” kadang dibaca <i>ka-ash-shufi</i> “bulu-bulu domba”. Perubahan ini berdasarkan ijmak ulama, namun tidak dibenarkan karena bertentangan dengan mushaf Usmani).',
		'play voice dialog_025',
		'Demikian, menyebarnya imam qiraat ke berbagai daerah mengajarkan <i>lahjah</i> (dialek) mereka masing-masing, hal itu melahirkan hal-hal yang tidak diinginkan yaitu timbulnya qira’at yang beraneka ragam, maka para ulama mengambil inisiatif untuk meneliti qira’at dari berbagai penyimpangan.',
		'end'
	]
});
