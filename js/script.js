// Assets for Music
monogatari.assets ('music', {
    'rakha': 'mars-rakha.mp3',
});

// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'bg': 'masjid.jpg',
});

// Assets for Voices
monogatari.assets ('voice', {
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
		'wait 8000',
		'end'
	],
	'Start': [
		'nvl Prolog',
	],
});
