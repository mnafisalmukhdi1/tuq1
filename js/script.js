// Assets for Music
monogatari.assets ('music', {
	'rakha': 'mars-rakha.mp3',
});

// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'bg': 'masjid.jpg',
	'rakha': 'rakha.png',
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
		'centered &nbsp;',
		'wait 3000',
		'end'
	],
	'Start': [
		'show background bg',
		'nvl Prolog',
		'jump Prolog'
	],
	'Prolog': [
		'Qiraat banyak macamnya.',
		'Dari segi kuantitas, ada <b><i>Qiraat Sab’ah, Qiraat Asyarah</i>,</b> dan <b><i>Qiraat Arba’ah Asyarah</i></b>.',
		'Dari segi kualitas, ada <b><i>Qiraat Mutawatir, Qiraat Masyhur, Qiraat Ahad, Qiraat Syadz,</i></b> dan <b><i>Qiraat</i> yang menyerupai <i>hadis mudraj</i> (sisipan)</b>.',
		'jump Intro00'
	],
	'Intro00': [
		'nvl Pembahasan',
		'jump Intro01'
	],
	'Intro01': [
		'nvl Pembahasan Pertama',
		'nvl Latar Belakang Historis',
		'jump Pembahasan01'
	],
	Pembahasan01: [
		'Qiraat telah muncul sejak masa Nabi saw. walau bukan disiplin ilmu, karena perbedaan para sahabat melafazkan Al-Qur’an dapat ditanyakan langsung kepada Nabi saw., sedangkan Nabi tidak pernah menyalahkan para sahabat yang berbeda itu, sehingga tidak fanatik terhadap lafaz yang digunakan atau yang pernah didengar Nabi.',
		'Riwayat yang menguatkan pendapat tersebut adalah Hadits Sunan An-Nasa`i No. 927 - Kitab Iftitah (Pembukaan), Hadits Jami` At-Tirmidzi No. 2867 - Kitab Qira`at, dan Hadits Jami` At-Tirmidzi No. 2868 - Kitab Qira`at.',
		'Ketiga riwayat tersebut membuktikan meski sahabat mengucapkan lafaz al-Quran secara berbeda, Nabi saw. tidak menyalahkan dan memberi jawaban bahwa al-Quran diturunkan tujuh huruf.',
		'Ulama berbeda pendapat dalam menafsirkan <i>tujuh huruf</i>.',
		'Sebagian besar ulama berpendapat tujuh huruf adalah tujuh macam bahasa dari bahasa-bahasa Arab mengenai satu makna. Ketujuh bahasa yang dimaksud adalah bahasa Quraisy, Huzail, Tsaqif, Hawazin, Kinanah, Tamim, dan Yaman. Menurut Abu Hatim al- Sijistani, ketujuh bahasa tersebut yaitu Quraisy, Huzail, Tamim, Azad, Rabi‟ah, Hawazin, dan Sa`ad bin Bakr.',
		'Ada yang berpendapat tujuh huruf adalah tujuh macam bahasa dari bahasa-bahasa Arab dimana al-Qur`an diturunkan. Misalnya kata فطر artinya menurut selain bahasa Quraisy adalah ابتدأ dan ini terdapat dalam al-Qur`an.',
		'Ada yang berpendapat tujuh huruf adalah tujuh bentuk yaitu <b><i>amr, nahyu, halâl, harâm, muhkam, mutasyâbih,</i> dan <i>amtsâl,</i></b> atau <b><i>wa‟ad, wa‟îd, halâl, harâm, mawâ‟idh, amtsâl,</i> dan </i>ikhtijâj</i></b>.',
		'Ada sekelompok ulama yang berpendapat: tujuh huruf adalah tujuh macam hal yang terjadi perbedaan (ikhtilâf) di dalamnya yaitu perbedaan: dalam al-Asmâ` (kata benda); dari segi i’râb (harakat akhir kata); dari segi tashrîf al-Fi’li (perubahan bentuk kata kerja); dalam taqdîm (mendahulukan) dan ta`khîr (mengakhirkan); dari segi ibdâl (penggantian); dari segi ziyâdah (penambahan); lahjah (dialek).',
		'Sebagian ulama berpendapat bilangan tujuh itu tidak diartikan secara harfiyah. Hanya sebagai lambang kesempurnaan menurut kebiasaan orang Arab. Sebab lafaz sab‟ah dipergunakan pula untuk menunjukkan jumlah banyak dan sempurna dalam bilangan satuan. Tetapi kata-kata itu tidak dimaksudkan untuk menunjukkan bilangan tertentu.',
		'Qiraat bisa diketahui benar atau tidaknya asal memenuhi tiga syarat. Pertama, sesuai dengan kaidah bahasa Arab. Kedua, sesuai dengan mushaf Usmani. Ketiga, sanadnya shahih. Apabila qiraat tidak memenuhi syarat meski hanya salah satu, qiraat dianggap tidak sah atau lemah.',
		'Abu Ubaid al-Qasim bin Salam adalah orang pertama yang menyusun qiraat, disusul ulama lain. Mereka berbeda dalam menetapkan jumlah syarat-syarat qira’at yang benar.',
		'jump Intro02'
	],
	'Intro02': [
		'nvl Pembahasan Kedua',
		'nvl Latar Belakang Cara Penyampaian',
		'jump Pembahasan02'
	],
	'Pembahasan02': [
		'Setelah para sahabat tersebar, mereka membacakan qira’at Al-Qur’an kepada murid-muridnya secara turun temurun. Akhirnya, para murid lebih suka  mengemukakan qira’at gurunya dari pada mengikuti qira’at imam yang lain.',
		'Berikut adalah rangkuman beberapa bentuk perbedaan cara melafazkan Al-Qur’an menurut ulama.',
		'Perbedaan dalam <i>I’rab</i> atau harakat kalimat tanpa perubahan makna dan bentuk kalimat. Misalnya dapat dilihat dalam Qs. an-Nisa[4]:37 (kata <i>bil-bukhli</i> yang berarti kikir dapat dibaca fathah pada huruf <i>ba</i>-nya, sehingga dapat dibaca <i>bil-bakhli</i> tanpa perubahan makna).',
		'Perubahan pada <i>I’rab</i> dan harakat, sehingga dapat merubah maknanya. Misalnya dalam Qs. Saba’[34]:19 (Kata <i>baa’id</i> artinya jauhkanlah, yang kedudukannya sebagai <i>fi’il amr</i>, boleh juga dibaca <i>ba’ada</i> yang kedudukannya menjadi <i>fi’il madhi</i>, sehingga maknanya berubah “telah jauh”).',
		'Perbedaan pada perubahan huruf tanpa perubahan <i>I’rab</i> dan bentuk tulisan, sedangkan makna berubah. Misalnya dalam QS. al-Baqarah[2]:259 (Kata <i>nunsyizuha</i> “Kami menyusun kembali” ditulis dengan huruf zay diganti dengan huruf ra, sehingga berubah bunyi menjadi <i>nunsyiruha</i> yang berarti “Kami hidupkan kembali”).',
		'Perubahan pada kalimat dengan perubahan pada bentuk tulisan, tapi makna tidak berubah. Misalnya dalam Qs. al-Qari’ah[101]:5 (Kata <i>ka-al-‘ihni</i> “bulu-bulu” kadang dibaca <i>ka-ash-shufi</i> “bulu-bulu domba”. Perubahan ini berdasarkan ijmak ulama, namun tidak dibenarkan karena bertentangan dengan mushaf Usmani).',
		'Demikian, menyebarnya imam qiraat ke berbagai daerah mengajarkan <i>lahjah</i> (dialek) mereka masing-masing, hal itu melahirkan hal-hal yang tidak diinginkan yaitu timbulnya qira’at yang beraneka ragam, maka para ulama mengambil inisiatif untuk meneliti qira’at dari berbagai penyimpangan.',
		'end'
	]
});
