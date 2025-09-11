/* ===== CONFIG ===== */
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwfWmVMSnFCKWbL2Lz76xjl2jQgDP4gWUmt4kdx9EyLuomKSrndpi96UUSSMxaI9bOPyg/exec"; // optional: untuk submit ke Google Sheets
const E_PEROLEHAN_RATE = 0.15;

/* ===== PRICE PER METER by material family (Ready Stock) ===== */
const MATERIAL_PRICE_PER_METER = {
  ITALIAN_CREPE: 16,
  TWILLY_VELVET: 12,
  SWISS_SATIN: 20,
  FRENCH_CREPE: 18,
  ROYAL_SATIN: 22,
  MICRO_COTTON: 14,   // POLYCOT
  MARIA_COTTON: 14,   // POLYCOT
  PARIS_CREPE: 29,
  DUBAI_CREPE: 30,
  PERSIAN_CREPE: 24
};

/* ===== READYMADES: Harga per Meter (ANDA TETAPKAN DI SINI) ===== */
const READYMADES_PRICE_PER_METER = {
  "IRIS SATIN SALUNA": 50,     // ubah ikut harga semasa
  "BELLE MICRO KOTOEN": 60     // ubah ikut harga semasa
};

/* ===== Readymade dataset (fallback tempatan) ===== */
const READYMADES_LOCAL = [
  { material: 'IRIS SATIN SALUNA',  code: 'IR00', name: 'Iris 00',  pricepm: 50, meter: 4 },
  { material: 'IRIS SATIN SALUNA', code: 'IR01', name: 'Iris 01' },
  { material: 'IRIS SATIN SALUNA', code: 'IR02', name: 'Iris 02' },
  { material: 'IRIS SATIN SALUNA', code: 'IR03', name: 'Iris 03' },
  { material: 'IRIS SATIN SALUNA', code: 'IR04', name: 'Iris 04' },
  { material: 'IRIS SATIN SALUNA', code: 'IR05', name: 'Iris 05' },
  { material: 'IRIS SATIN SALUNA', code: 'IR06', name: 'Iris 06' },
  { material: 'IRIS SATIN SALUNA', code: 'IR07', name: 'Iris 07' },
  { material: 'IRIS SATIN SALUNA', code: 'IR08', name: 'Iris 08' },
  { material: 'IRIS SATIN SALUNA', code: 'IR09', name: 'Iris 09' },
  { material: 'IRIS SATIN SALUNA', code: 'IR10', name: 'Iris 10' },
  { material: 'IRIS SATIN SALUNA', code: 'IR11', name: 'Iris 11' },
  { material: 'IRIS SATIN SALUNA', code: 'IR12', name: 'Iris 12' },
  { material: 'IRIS SATIN SALUNA', code: 'IR13', name: 'Iris 13' },
  { material: 'IRIS SATIN SALUNA', code: 'IR14', name: 'Iris 14' },
  { material: 'IRIS SATIN SALUNA', code: 'IR15', name: 'Iris 15' },
  { material: 'IRIS SATIN SALUNA', code: 'IR16', name: 'Iris 16' },
  { material: 'IRIS SATIN SATUNA', code: 'IR17', name: 'Iris 17' }, // typo? biar ikut dataset
  { material: 'IRIS SATIN SALUNA', code: 'IR18', name: 'Iris 18' },
  { material: 'IRIS SATIN SALUNA', code: 'IR19', name: 'Iris 19' },
  { material: 'IRIS SATIN SALUNA', code: 'IR20', name: 'Iris 20' },
  { material: 'IRIS SATIN SALUNA', code: 'IR21', name: 'Iris 21' },
  { material: 'IRIS SATIN SALUNA', code: 'IR22', name: 'Iris 22' },
  { material: 'IRIS SATIN SALUNA', code: 'IR23', name: 'Iris 23' },
  { material: 'IRIS SATIN SALUNA', code: 'IR24', name: 'Iris 24' },
  { material: 'IRIS SATIN SALUNA', code: 'IR25', name: 'Iris 25' },
  { material: 'IRIS SATIN SALUNA', code: 'IR26', name: 'Iris 26' },
  { material: 'IRIS SATIN SALUNA', code: 'IR27', name: 'Iris 27' },
  { material: 'IRIS SATIN SALUNA', code: 'IR28', name: 'Iris 28' },
  { material: 'IRIS SATIN SALUNA', code: 'IR29', name: 'Iris 29' },
  { material: 'IRIS SATIN SALUNA', code: 'IR30', name: 'Iris 30' },
  { material: 'IRIS SATIN SALUNA', code: 'IR31', name: 'Iris 31' },
  { material: 'IRIS SATIN SALUNA', code: 'IR32', name: 'Iris 32' },
  { material: 'IRIS SATIN SALUNA', code: 'IR33', name: 'Iris 33' },
  { material: 'IRIS SATIN SALUNA', code: 'IR34', name: 'Iris 34' },
  { material: 'IRIS SATIN SALUNA', code: 'IR35', name: 'Iris 35' },
  { material: 'IRIS SATIN SALUNA', code: 'IR36', name: 'Iris 36' },
  { material: 'IRIS SATIN SALUNA', code: 'IR37', name: 'Iris 37' },
  { material: 'IRIS SATIN SALUNA', code: 'IR38', name: 'Iris 38' },
  { material: 'IRIS SATIN SALUNA', code: 'IR39', name: 'Iris 39' },
  { material: 'IRIS SATIN SALUNA', code: 'IR40', name: 'Iris 40' },
  { material: 'IRIS SATIN SALUNA', code: 'IR41', name: 'Iris 41' },
  { material: 'IRIS SATIN SALUNA', code: 'IR42', name: 'Iris 42' },
  { material: 'IRIS SATIN SALUNA', code: 'IR43', name: 'Iris 43' },
  { material: 'IRIS SATIN SALUNA', code: 'IR44', name: 'Iris 44' },
  { material: 'IRIS SATIN SALUNA', code: 'IR45', name: 'Iris 45' },
  { material: 'IRIS SATIN SALUNA', code: 'IR46', name: 'Iris 46' },
  { material: 'IRIS SATIN SALUNA', code: 'IR47', name: 'Iris 47' },
  { material: 'IRIS SATIN SALUNA', code: 'IR48', name: 'Iris 48' },
  { material: 'IRIS SATIN SALUNA', code: 'IR49', name: 'Iris 49' },
  { material: 'IRIS SATIN SALUNA', code: 'IR50', name: 'Iris 50' },
  { material: 'IRIS SATIN SALUNA', code: 'IR51', name: 'Iris 51' },
  { material: 'IRIS SATIN SALUNA', code: 'IR52', name: 'Iris 52' },
  { material: 'IRIS SATIN SALUNA', code: 'IR53', name: 'Iris 53' },
  { material: 'IRIS SATIN SALUNA', code: 'IR54', name: 'Iris 54' },
  { material: 'IRIS SATIN SALUNA', code: 'IR55', name: 'Iris 55' },
  { material: 'IRIS SATIN SALUNA', code: 'IR56', name: 'Iris 56' },
  { material: 'IRIS SATIN SALUNA', code: 'IR57', name: 'Iris 57' },
  { material: 'IRIS SATIN SALUNA', code: 'IR58', name: 'Iris 58' },
  { material: 'IRIS SATIN SALUNA', code: 'IR59', name: 'Iris 59' },
  { material: 'IRIS SATIN SALUNA', code: 'IR60', name: 'Iris 60' },
  { material: 'IRIS SATIN SALUNA', code: 'IR61', name: 'Iris 61' },
  { material: 'IRIS SATIN SALUNA', code: 'IR62', name: 'Iris 62' },
  { material: 'IRIS SATIN SALUNA', code: 'IR63', name: 'Iris 63' },
  { material: 'IRIS SATIN SALUNA', code: 'IR64', name: 'Iris 64' },
  { material: 'IRIS SATIN SALUNA', code: 'IR65', name: 'Iris 65' },
  { material: 'IRIS SATIN SALUNA', code: 'IR66', name: 'Iris 66' },
  { material: 'IRIS SATIN SALUNA', code: 'IR67', name: 'Iris 67' },
  { material: 'IRIS SATIN SALUNA', code: 'IR68', name: 'Iris 68' },
  { material: 'IRIS SATIN SALUNA', code: 'IR69', name: 'Iris 69' },
  { material: 'IRIS SATIN SALUNA', code: 'IR70', name: 'Iris 70' },
  { material: 'IRIS SATIN SALUNA', code: 'IR71', name: 'Iris 71' },
  { material: 'IRIS SATIN SALUNA', code: 'IR72', name: 'Iris 72' },
  { material: 'IRIS SATIN SALUNA', code: 'IR73', name: 'Iris 73' },
  { material: 'IRIS SATIN SALUNA', code: 'IR74', name: 'Iris 74' },
  { material: 'IRIS SATIN SALUNA', code: 'IR75', name: 'Iris 75' },
  { material: 'IRIS SATIN SALUNA', code: 'IR76', name: 'Iris 76' },
  { material: 'IRIS SATIN SALUNA', code: 'IR77', name: 'Iris 77' },
  { material: 'IRIS SATIN SALUNA', code: 'IR78', name: 'Iris 78' },
  { material: 'IRIS SATIN SALUNA', code: 'IR79', name: 'Iris 79' },
  { material: 'IRIS SATIN SALUNA', code: 'IR80', name: 'Iris 80' },
  { material: 'IRIS SATIN SALUNA', code: 'IR81', name: 'Iris 81' },
  { material: 'IRIS SATIN SALUNA', code: 'IR82', name: 'Iris 82' },
  { material: 'IRIS SATIN SALUNA', code: 'IR83', name: 'Iris 83' },
  { material: 'IRIS SATIN SALUNA', code: 'IR84', name: 'Iris 84' },
  { material: 'IRIS SATIN SALUNA', code: 'IR85', name: 'Iris 85' },
  { material: 'IRIS SATIN SALUNA', code: 'IR86', name: 'Iris 86' },
  { material: 'IRIS SATIN SALUNA', code: 'IR87', name: 'Iris 87' },
  { material: 'IRIS SATIN SALUNA', code: 'IR88', name: 'Iris 88' },
  { material: 'IRIS SATIN SALUNA', code: 'IR89', name: 'Iris 89' },
  { material: 'IRIS SATIN SALUNA', code: 'IR90', name: 'Iris 90' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK00', name: 'Belle 00', pricepm: 60, meter: 4 },
  { material: 'BELLE MICRO KOTOEN', code: 'BK01', name: 'Belle 01' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK02', name: 'Belle 02' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK03', name: 'Belle 03' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK04', name: 'Belle 04' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK05', name: 'Belle 05' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK06', name: 'Belle 06' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK07', name: 'Belle 07' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK08', name: 'Belle 08' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK09', name: 'Belle 09' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK10', name: 'Belle 10' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK11', name: 'Belle 11' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK12', name: 'Belle 12' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK13', name: 'Belle 13' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK14', name: 'Belle 14' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK15', name: 'Belle 15' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK16', name: 'Belle 16' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK17', name: 'Belle 17' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK18', name: 'Belle 18' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK19', name: 'Belle 19' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK20', name: 'Belle 20' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK21', name: 'Belle 21' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK22', name: 'Belle 22' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK23', name: 'Belle 23' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK24', name: 'Belle 24' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK25', name: 'Belle 25' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK26', name: 'Belle 26' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK27', name: 'Belle 27' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK28', name: 'Belle 28' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK29', name: 'Belle 29' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK30', name: 'Belle 3O' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK31', name: 'Belle 31' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK32', name: 'Belle 32' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK33', name: 'Belle 33' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK34', name: 'Belle 34' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK35', name: 'Belle 35' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK36', name: 'Belle 36' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK37', name: 'Belle 37' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK38', name: 'Belle 38' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK39', name: 'Belle 39' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK40', name: 'Belle 40' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK41', name: 'Belle 41' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK42', name: 'Belle 42' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK43', name: 'Belle 43' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK44', name: 'Belle 44' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK45', name: 'Belle 45' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK46', name: 'Belle 46' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK47', name: 'Belle 47' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK48', name: 'Belle 48' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK49', name: 'Belle 49' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK50', name: 'Belle 50' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK51', name: 'Belle 51' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK52', name: 'Belle 52' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK53', name: 'Belle 53' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK54', name: 'Belle 54' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK55', name: 'Belle 55' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK56', name: 'Belle 56' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK57', name: 'Belle 57' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK58', name: 'Belle 58' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK59', name: 'Belle 59' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK60', name: 'Belle 60' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK61', name: 'Belle 61' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK62', name: 'Belle 62' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK63', name: 'Belle 63' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK64', name: 'Belle 64' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK65', name: 'Belle 65' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK66', name: 'Belle 66' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK67', name: 'Belle 67' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK68', name: 'Belle 68' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK69', name: 'Belle 69' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK70', name: 'Belle 70' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK71', name: 'Belle 71' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK72', name: 'Belle 72' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK73', name: 'Belle 73' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK74', name: 'Belle 74' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK75', name: 'Belle 75' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK76', name: 'Belle 76' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK77', name: 'Belle 77' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK78', name: 'Belle 78' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK79', name: 'Belle 79' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK80', name: 'Belle 80' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK81', name: 'Belle 81' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK82', name: 'Belle 82' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK83', name: 'Belle 83' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK84', name: 'Belle 84' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK85', name: 'Belle 85' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK86', name: 'Belle 86' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK87', name: 'Belle 87' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK88', name: 'Belle 88' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK89', name: 'Belle 89' },
  { material: 'BELLE MICRO KOTOEN', code: 'BK90', name: 'Belle 90' }

];

/* ===== Catalog Ready by PRODUCT (nama + warna) ===== */
const READY_PRODUCTS = [
  { name:"BATIK AYUNI (DUBAI CREPE)", colors:["Grey","Green","Pink","Royal Blue","Brick Red"] },
  { name:"BATIK NURA (DUBAI CREPE)", colors:["Grey","Lavender","Pink","Olive Green","Navy Blue"] },
  { name:"BATIK AFIYA (DUBAI CREPE)", colors:["Grey","Burgundy","Plum","Olive Green","Navy Blue"] },
  { name:"BATIK MARSYA (DUBAI CREPE)", colors:["Moss Green","Red","Violet Purple","Royal Blue","Grey"] },
  { name:"KAIN PASANG NONEE (ROYAL SATIN)", colors:["Emerald Green","Royal Blue"] },
  { name:"KAIN PASANG NURISHA (ROYAL SATIN)", colors:["Black"] },
  { name:"KAIN PASANG MICRO COTTON - 4M BIDANG 60", colors:["Royal Blue"] },
  { name:"KAIN PASANG MARIA POLY COTTON - 4M BIDANG 59", colors:["Black"] },
  { name:"KAIN PASANG PERSIAN CREPE - 4M BIDANG 60", colors:["Chili Red"] },
  { name:"KAIN PASANG PARIS CREPE BATIK SARA - 4M BIDANG 60", colors:["Maroon","Black"] },
  { name:"KAIN PASANG HANIFARA (TWILLY VELVET) - 4M BIDANG 55", colors:["Light Pink","Matcha","Light Peach","Soft Grey","Sky Blue","Yellow","Butter Yellow","Peach Pink","Lilac","Orange"] },
  { name:"KAIN PASANG AIRA/ALYA/DHIA (ITALIAN CREPE) - 4M BIDANG 60", colors:["Maroon","Purple","Blue","Black","Greenish Yellow","Deep Blue","Green","Mustard"] },
  { name:"KAIN PASANG SWISS SATIN - 4M BIDANG 60", colors:["Royal Blue","Maroon","Emerald Green","Black","Soft Brown"] },
  { name:"KAIN PASANG LILY (FRENCH CREPE) - 4M BIDANG 60", colors:["Black","Maroon","Olive Green","Purple Violet","Rose Pink"] }
];

/* ===== SKU MAP (Ready Stock) ===== */
const READY_SKU_MAP = {
  "BATIK AYUNI (DUBAI CREPE)":{"Grey":"ZJ10831","Green":"ZJ10811","Pink":"ZJ10841","Royal Blue":"ZJ10851","Brick Red":"ZJ10821"},
  "BATIK NURA (DUBAI CREPE)":{"Grey":"ZJ10941","Lavender":"ZJ10921","Pink":"ZJ10951","Olive Green":"ZJ10931","Navy Blue":"ZJ10911"},
  "BATIK AFIYA (DUBAI CREPE)":{"Grey":"ZJ11041","Burgundy":"ZJ11031","Plum":"ZJ11011","Olive Green":"ZJ11021","Navy Blue":"ZJ11051"},
  "BATIK MARSYA (DUBAI CREPE)":{"Moss Green":"ZJ10751","Red":"ZJ10731","Violet Purple":"ZJ10741","Royal Blue":"ZJ10711","Grey":"ZJ10721"},
  "KAIN PASANG NONEE (ROYAL SATIN)":{"Emerald Green":"ZJ10121","Royal Blue":"ZJ10111"},
  "KAIN PASANG NURISHA (ROYAL SATIN)":{"Black":"ZJ8101"},
  "KAIN PASANG MICRO COTTON - 4M BIDANG 60":{"Royal Blue":"ZJ5701"},
  "KAIN PASANG MARIA POLY COTTON - 4M BIDANG 59":{"Black":"ZJ8201"},
  "KAIN PASANG PERSIAN CREPE - 4M BIDANG 60":{"Chili Red":"ZJ5801"},
  "KAIN PASANG PARIS CREPE BATIK SARA - 4M BIDANG 60":{"Maroon":"ZJ9611","Black":"ZJ9621"},
  "KAIN PASANG HANIFARA (TWILLY VELVET) - 4M BIDANG 55":{"Light Pink":"ZJ6111","Matcha":"ZJ6121","Light Peach":"ZJ6131","Soft Grey":"ZJ6141","Sky Blue":"ZJ6151","Yellow":"ZJ6161","Butter Yellow":"ZJ6171","Peach Pink":"ZJ6181","Lilac":"ZJ6191","Orange":"ZJ61101"},
  "KAIN PASANG AIRA/ALYA/DHIA (ITALIAN CREPE) - 4M BIDANG 60":{"Maroon":"ZJ6211","Purple":"ZJ6231","Blue":"ZJ6221","Black":"ZJ6241","Greenish Yellow":"ZJ6251","Deep Blue":"ZJ6411","Green":"ZJ6421","Mustard":"ZJ6331"},
  "KAIN PASANG SWISS SATIN - 4M BIDANG 60":{"Royal Blue":"ZJ5611","Maroon":"ZJ5621","Emerald Green":"ZJ5631","Black":"ZJ5641","Soft Brown":"ZJ5651"},
  "KAIN PASANG LILY (FRENCH CREPE) - 4M BIDANG 60":{"Black":"ZJ7411","Maroon":"ZJ7421","Olive Green":"ZJ7451","Purple Violet":"ZJ7431","Rose Pink":"ZJ7441"}
};

/* ===== CUSTOM PRICE ===== */
const CUSTOM_MATERIAL_PRICE = {
  "Paris Crepe": 125,
  "Dubai Polycot/Cotton Dubai": 125,
  "Luxe Satin/Satin Saluna": 140,
  "Royal Satin": 200
};
const CUSTOM_SKU_MAP = { /* optional map custom */ };

/* ===== Family resolver ===== */
const FAMILY_FROM_NAME = [
  {key:'DUBAI CREPE', fam:'DUBAI_CREPE'},
  {key:'ROYAL SATIN', fam:'ROYAL_SATIN'},
  {key:'PERSIAN CREPE', fam:'PERSIAN_CREPE'},
  {key:'PARIS CREPE', fam:'PARIS_CREPE'},
  {key:'ITALIAN CREPE', fam:'ITALIAN_CREPE'},
  {key:'SWISS SATIN', fam:'SWISS_SATIN'},
  {key:'FRENCH CREPE', fam:'FRENCH_CREPE'},
  {key:'MICRO COTTON', fam:'MICRO_COTTON'},
  {key:'POLY COTTON', fam:'MICRO_COTTON'},
  {key:'TWILLY VELVET', fam:'TWILLY_VELVET'},
  {key:'POLYCOT', fam:'MICRO_COTTON'},
  {key:'LUXE SATIN', fam:'ROYAL_SATIN'},
  {key:'SALUNA', fam:'SATIN_SALUNA'},
  {key:'IRIS SATIN SALUNA', fam:'SATIN_SALUNA'},
  {key:'BELLE MICRO KOTOEN', fam:'MICRO_KOTOEN'}
];
function detectFamilyFromName(name){
  const up=(name||'').toUpperCase();
  for(const m of FAMILY_FROM_NAME){ if(up.includes(m.key)) return m.fam; }
  return 'PARIS_CREPE';
}

/* ===== SEWING MAP ===== */
const SEWING_MAP = {
  "ZW1501": { name:"Upah Jahit Kemeja L/PDK – S", prices:{ SATIN_CREPE:[109,75,60,55],  COTTON:[90,60,45,30]}},
  "ZW1502": { name:"Upah Jahit Kemeja L/PDK – M", prices:{ SATIN_CREPE:[109,75,60,55],  COTTON:[90,60,45,30]}},
  "ZW1503": { name:"Upah Jahit Kemeja L/PDK – L", prices:{ SATIN_CREPE:[109,75,60,55],  COTTON:[90,60,45,30]}},
  "ZW1504": { name:"Upah Jahit Kemeja L/PDK – XL", prices:{ SATIN_CREPE:[109,75,60,55],  COTTON:[90,60,45,30]}},
  "ZW1505": { name:"Upah Jahit Kemeja L/PDK – 2XL", prices:{ SATIN_CREPE:[119,85,70,65],  COTTON:[100,70,55,40]}},
  "ZW1506": { name:"Upah Jahit Kemeja L/PDK – 3XL", prices:{ SATIN_CREPE:[119,85,70,65],  COTTON:[100,70,55,40]}},
  "ZW1507": { name:"Upah Jahit Kemeja L/PDK – 4XL", prices:{ SATIN_CREPE:[119,85,70,65],  COTTON:[100,70,55,40]}},
  "ZW1508": { name:"Upah Jahit Kemeja L/PDK – 5XL", prices:{ SATIN_CREPE:[119,85,70,65],  COTTON:[100,70,55,40]}},
  "ZW1601": { name:"Upah Jahit Kemeja L/PJG – S", prices:{ SATIN_CREPE:[119,85,70,45],  COTTON:[100,70,55,40]}},
  "ZW1602": { name:"Upah Jahit Kemeja L/PJG – M", prices:{ SATIN_CREPE:[119,85,70,45],  COTTON:[100,70,55,40]}},
  "ZW1603": { name:"Upah Jahit Kemeja L/PJG – L", prices:{ SATIN_CREPE:[119,85,70,45],  COTTON:[100,70,55,40]}},
  "ZW1604": { name:"Upah Jahit Kemeja L/PJG – XL", prices:{ SATIN_CREPE:[119,85,70,45],  COTTON:[100,70,55,40]}},
  "ZW1605": { name:"Upah Jahit Kemeja L/PJG – 2XL", prices:{ SATIN_CREPE:[129,95,80,55],  COTTON:[110,80,65,50]}},
  "ZW1606": { name:"Upah Jahit Kemeja L/PJG – 3XL", prices:{ SATIN_CREPE:[129,95,80,55],  COTTON:[110,80,65,50]}},
  "ZW1607": { name:"Upah Jahit Kemeja L/PJG – 4XL", prices:{ SATIN_CREPE:[129,95,80,55],  COTTON:[110,80,65,50]}},
  "ZW1701": { name:"Upah Jahit Baju Kurung (Pahang) – S", prices:{ SATIN_CREPE:[85,60,50,45],  COTTON:[75,55,45,40]}},
  "ZW1702": { name:"Upah Jahit Baju Kurung (Pahang) – M", prices:{ SATIN_CREPE:[85,60,50,45],  COTTON:[75,55,45,40]}},
  "ZW1703": { name:"Upah Jahit Baju Kurung (Pahang) – L", prices:{ SATIN_CREPE:[85,60,50,45],  COTTON:[75,55,45,40]}},
  "ZW1704": { name:"Upah Jahit Baju Kurung (Pahang) – XL", prices:{ SATIN_CREPE:[85,60,50,45],  COTTON:[75,55,45,40]}},
  "ZW1705": { name:"Upah Jahit Baju Kurung (Pahang) – 2XL", prices:{ SATIN_CREPE:[95,70,60,55],  COTTON:[85,65,55,50]}},
  "ZW1706": { name:"Upah Jahit Baju Kurung (Pahang) – 3XL", prices:{ SATIN_CREPE:[95,70,60,55],  COTTON:[85,65,55,50]}},
  "ZW1707": { name:"Upah Jahit Baju Kurung (Pahang) – 4XL", prices:{ SATIN_CREPE:[95,70,60,55],  COTTON:[85,65,55,50]}},
  "ZW1708": { name:"Upah Jahit Baju Kurung (Pahang) – 5XL", prices:{ SATIN_CREPE:[95,70,60,55],  COTTON:[85,65,55,50]}},
  "ZW1801": { name:"Upah Jahit Baju Kurung (Modern) – S", prices:{ SATIN_CREPE:[85,60,50,45], COTTON:[75,55,45,40]}},
  "ZW1802": { name:"Upah Jahit Baju Kurung (Modern) – M", prices:{ SATIN_CREPE:[85,60,50,45], COTTON:[75,55,45,40]}},
  "ZW1803": { name:"Upah Jahit Baju Kurung (Modern) – L", prices:{ SATIN_CREPE:[85,60,50,45], COTTON:[75,55,45,40]}},
  "ZW1804": { name:"Upah Jahit Baju Kurung (Modern) – XL", prices:{ SATIN_CREPE:[85,60,50,45], COTTON:[75,55,45,40]}},
  "ZW1805": { name:"Upah Jahit Baju Kurung (Modern) – 2XL", prices:{ SATIN_CREPE:[95,70,60,55], COTTON:[85,65,55,50]}},
  "ZW1806": { name:"Upah Jahit Baju Kurung (Modern) – 3XL", prices:{ SATIN_CREPE:[95,70,60,55], COTTON:[85,65,55,50]}},
  "ZW1807": { name:"Upah Jahit Baju Kurung (Modern) – 4XL", prices:{ SATIN_CREPE:[95,70,60,55], COTTON:[85,65,55,50]}}
};

/* ===== DOM refs ===== */
const modeReady = document.getElementById('modeReady');
const modeCustom = document.getElementById('modeCustom');
const modeReadymade = document.getElementById('modeReadymade');
const readySection = document.getElementById('readySection');
const customSection = document.getElementById('customSection');
const readymadeSection = document.getElementById('readymadeSection');

const readySearch = document.getElementById('readySearch');
const readyList = document.getElementById('readyList');
const readyItemsWrap = document.getElementById('readyItemsWrap');
const readyItemsBody = document.getElementById('readyItemsBody');

const btnTotal = document.getElementById('btnTotal');
const btnRFQ = document.getElementById('btnRFQ');

const breakdownWrap = document.getElementById('breakdownWrap');
const breakdownBody = document.getElementById('breakdownBody');
const bdPayment = document.getElementById('bdPayment');
const bdShipTxt = document.getElementById('bdShipTxt');
const bdSubtotal = document.getElementById('bdSubtotal');
const bdFee = document.getElementById('bdFee');
const bdFeeLabel = document.getElementById('bdFeeLabel');
const bdShipping = document.getElementById('bdShipping');
const bdGrand = document.getElementById('bdGrand');

const quotationSection = document.getElementById('quotationSection');
const qBody = document.getElementById('qBody');
const qInvNo = document.getElementById('qInvNo');
const qDate = document.getElementById('qDate');
const qRef = document.getElementById('qRef');
const qTerm = document.getElementById('qTerm');
const qSales = document.getElementById('qSales');
const qInWords = document.getElementById('qInWords');
const qGrand = document.getElementById('qGrand');
const btnSubmitOrder = document.getElementById('btnSubmitOrder');

/* READY sew */
const sewSearchReady = document.getElementById('sewSearchReady');
const sewSuggestReady = document.getElementById('sewSuggestReady');
const sewMaterialReady = document.getElementById('sewMaterialReady');
const sewQtyReady = document.getElementById('sewQtyReady');
const btnAddSewReady = document.getElementById('btnAddSewReady');
const warnSewReady = document.getElementById('warnSewReady');
const sewListWrapReady = document.getElementById('sewListWrapReady');
const sewBodyReady = document.getElementById('sewBodyReady');

/* CUSTOM */
const c_material = document.getElementById('c_material');
const c_pattern  = document.getElementById('c_pattern');
const c_color    = document.getElementById('c_color');
const c_meter    = document.getElementById('c_meter');
const c_qty      = document.getElementById('c_qty');
const c_variant  = document.getElementById('c_variant');
const c_add_logo = document.getElementById('c_add_logo');
const c_pricepm  = document.getElementById('c_pricepm');
const c_sku      = document.getElementById('c_sku');

const btnAddCustom = document.getElementById('btnAddCustom');
const btnTotalCustom = document.getElementById('btnTotalCustom');
const btnRFQCustom = document.getElementById('btnRFQCustom');
const customListWrap = document.getElementById('customListWrap');
const customListBody = document.getElementById('customListBody');
const cbdPayment = document.getElementById('cbdPayment');
const cbdSubtotal = document.getElementById('cbdSubtotal');
const cbdFee = document.getElementById('cbdFee');
const cbdFeeLabel = document.getElementById('cbdFeeLabel');
const cbdShippingTxt = document.getElementById('cbdShippingTxt');
const cbdShippingCost = document.getElementById('cbdShippingCost');
const cbdGrand = document.getElementById('cbdGrand');

const sewSearchCustom = document.getElementById('sewSearchCustom');
const sewSuggestCustom = document.getElementById('sewSuggestCustom');
const sewMaterialCustom = document.getElementById('sewMaterialCustom');
const sewQtyCustom = document.getElementById('sewQtyCustom');
const btnAddSewCustom = document.getElementById('btnAddSewCustom');
const warnSewCustom = document.getElementById('warnSewCustom');
const sewListWrapCustom = document.getElementById('sewListWrapCustom');
const sewBodyCustom = document.getElementById('sewBodyCustom');

/* READYMADE (per meter) */
const r_material = document.getElementById('r_material');
const r_variant = document.getElementById('r_variant');
const r_add_logo = document.getElementById('r_add_logo');

const r_pricepm = document.getElementById('r_pricepm');
const r_meter   = document.getElementById('r_meter');
const r_qty     = document.getElementById('r_qty');
const r_code    = document.getElementById('r_code');
const r_sku     = document.getElementById('r_sku');

const btnAddReadymade = document.getElementById('btnAddReadymade');
const btnTotalRM = document.getElementById('btnTotalRM');
const btnRFQRM = document.getElementById('btnRFQRM');
const readymadeListWrap = document.getElementById('readymadeListWrap');
const readymadeListBody = document.getElementById('readymadeListBody');
const rbdPayment = document.getElementById('rbdPayment');
const rbdSubtotal = document.getElementById('rbdSubtotal');
const rbdFee = document.getElementById('rbdFee');
const rbdFeeLabel = document.getElementById('rbdFeeLabel');
const rbdShippingTxt = document.getElementById('rbdShippingTxt');
const rbdShippingCost = document.getElementById('rbdShippingCost');
const rbdGrand = document.getElementById('rbdGrand');

const sewSearchRM = document.getElementById('sewSearchRM');
const sewSuggestRM = document.getElementById('sewSuggestRM');
const sewMaterialRM = document.getElementById('sewMaterialRM');
const sewQtyRM = document.getElementById('sewQtyRM');
const btnAddSewRM = document.getElementById('btnAddSewRM');
const warnSewRM = document.getElementById('warnSewRM');
const sewListWrapRM = document.getElementById('sewListWrapRM');
const sewBodyRM = document.getElementById('sewBodyRM');

/* SHIPPING blocks */
const shipBlockReady = document.getElementById('shipBlockReady');
const shipBlockCustom = document.getElementById('shipBlockCustom');
const shipBlockRM = document.getElementById('shipBlockRM');

/* ===== Helpers & state ===== */
const fmtRM = n => 'RM' + Number(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function toWordsEN(num){
  const a=["","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN","NINETEEN"];
  const b=["","","TWENTY","THIRTY","FORTY","FIFTY","SIXTY","SEVENTY","EIGHTY","NINETY"]; const g=[""," THOUSAND"," MILLION"," BILLION"];
  if(num===0) return "ZERO"; let words="", i=0;
  while(num>0){ let c=num%1000; if(c){ let s=""; if(c>99){ s+=a[Math.floor(c/100)]+" HUNDRED "; c%=100; } if(c>19){ s+=b[Math.floor(c/10)]+" "; c%=10; } if(c>0){ s+=a[c]+" "; } words = s.trim()+g[i]+" "+words; }
    num=Math.floor(num/1000); i++; }
  return words.trim();
}
function fmtNowForInv(){
  const n=new Date(), p=x=>String(x).padStart(2,'0');
  return { inv:`IV-NAE${n.getFullYear()}${p(n.getMonth()+1)}${p(n.getDate())}${p(n.getHours())}${p(n.getMinutes())}`,
           dateText:`${p(n.getDate())}/${p(n.getMonth()+1)}/${n.getFullYear()} ${p(n.getHours())}:${p(n.getMinutes())}` };
}

let LAST_ORDER_PAYLOAD = null;
const readyProductItems = [];
const sewReadyItems = [];
const customItems = [];
const sewCustomItems = [];
const readymadeItems = [];
const sewRMItems = [];

/* Toggle sections */
function toggleSections() {
  const mode = document.querySelector('input[name="productMode"]:checked')?.value;
  readySection.classList.toggle('hidden', mode !== 'ready');
  customSection.classList.toggle('hidden', mode !== 'custom');
  readymadeSection.classList.toggle('hidden', mode !== 'readymade');
}
modeReady.addEventListener('change', toggleSections);
modeCustom.addEventListener('change', toggleSections);
modeReadymade.addEventListener('change', toggleSections);

/* ===== Shipping UI ===== */
function buildShippingGroup(groupName){
  const OPTS = [
    ['Poslaju','ZT0212'], ['Shopee','ZT0313'], ['J&T Express','ZT0111'],
    ['DHL','ZT0611'], ['KEX Express','ZT0711'], ['Local Pickup','ZT1011'],
  ];
  return OPTS.map(([nm,code])=>`
    <label data-ship class="flex items-center justify-between border rounded-xl px-3 py-2 bg-white shadow-sm hover:shadow transition">
      <div class="flex items-center gap-2">
        <input type="radio" name="${groupName}">
        <span class="shipName text-sm">${nm}</span>
        <span class="shipCode hidden">${code}</span>
      </div>
      <input type="number" class="shipPrice w-28 border rounded-lg px-2 py-1 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-amber-300/30 focus:border-amber-500" placeholder="RM">
    </label>
  `).join('');
}
shipBlockReady.innerHTML  = buildShippingGroup('shipReady');
shipBlockCustom.innerHTML = buildShippingGroup('shipCustom');
shipBlockRM.innerHTML     = buildShippingGroup('shipRM');

function getSelectedShipping(groupName){
  const radio = document.querySelector(`input[name="${groupName}"]:checked`);
  if (!radio) return {name:'', code:'', cost:0};
  const wrap = radio.closest('[data-ship]');
  const name = wrap.querySelector('.shipName')?.textContent || '';
  const code = wrap.querySelector('.shipCode')?.textContent || '';
  const cost = Number(wrap.querySelector('.shipPrice')?.value || 0);
  return {name, code, cost};
}

function computeTotalsWithShipping(itemsSubtotal, payment, shipSel){
  const subtotal = Number(itemsSubtotal || 0);
  const shipping = Number(shipSel?.cost || 0);
  const fee = payment === 'E-Perolehan' ? subtotal * E_PEROLEHAN_RATE : 0;
  const grand = subtotal + fee + shipping;
  return { subtotal, fee, shipping, grand, shipName: shipSel?.name||'', shipCode: shipSel?.code||'' };
}

/* ===== SEWING helpers ===== */
function familyGroup(fam){ return (['TWILLY_VELVET','MICRO_COTTON','MARIA_COTTON','MICRO_KOTOEN'].includes(fam)) ? 'COTTON' : 'SATIN_CREPE'; }
function tierIndex(q){ if (q>=500) return 3; if (q>=100) return 2; if (q>=20) return 1; if (q>=5) return 0; return -1; }
function priceSew(code, fabricFam, qty){
  const row = SEWING_MAP[code]; if (!row) return {ok:false, reason:'NOT_FOUND'};
  const arr = row.prices[familyGroup(fabricFam)] || []; const ti = tierIndex(qty);
  if (ti<0) return {ok:false, reason:'MIN_QTY'}; if (!arr.length || arr[ti]==null) return {ok:false, reason:'NOT_LISTING'};
  return {ok:true, unit: Number(arr[ti])};
}
function searchSew(keyword){
  const k = (keyword||'').trim().toUpperCase(); if (!k) return [];
  const out = []; for (const [code, meta] of Object.entries(SEWING_MAP)) if (code.includes(k) || meta.name.toUpperCase().includes(k)) out.push({code, ...meta});
  return out.slice(0,30);
}
function renderSewSuggest(dom, list){
  if (!list.length){ dom.classList.add('hidden'); dom.innerHTML=''; return; }
  dom.classList.remove('hidden');
  dom.innerHTML = list.map(it=>`
    <button type="button" data-code="${it.code}" class="w-full text-left px-3 py-2 hover:bg-slate-50 border-b">
      <span class="font-medium">${it.code}</span> — ${it.name}
    </button>`).join('');
}

/* ===== READY: build product cards ===== */
function buildReadyProductCard(prod){
  const fam = detectFamilyFromName(prod.name);
  const price = MATERIAL_PRICE_PER_METER[fam] ?? 0;
  const el = document.createElement('div');
  el.className = "border rounded-2xl p-4 bg-white ring-1 ring-slate-200/70 shadow-sm hover:shadow transition space-y-3";
  el.dataset.name = prod.name;
  el.dataset.fam = fam;
  el.innerHTML = `
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="font-semibold text-slate-900">${prod.name}</p>
        <p class="text-xs text-slate-500">Material: <span class="font-medium">${fam.replaceAll('_',' ')}</span></p>
      </div>
      <span class="text-[13px] px-2 py-0.5 rounded bg-amber-50 ring-1 ring-amber-200 whitespace-nowrap">Harga/Mtr: <b>RM${price.toFixed(2)}</b></span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div>
        <label class="lbl !text-xs">Warna</label>
        <select class="inp ready-color">
          ${prod.colors.map(c=>`<option>${c}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="lbl !text-xs">Meter / item</label>
        <input type="number" min="1" step="0.5" class="inp ready-meters" placeholder="cth 4">
      </div>
      <div>
        <label class="lbl !text-xs">Quantity</label>
        <input type="number" min="1" class="inp ready-qty" placeholder="cth 10">
      </div>
    </div>
    <button type="button" class="btn-subtle w-full">Tambah Item</button>
  `;
  return el;
}
function renderReadyProducts(list=READY_PRODUCTS){
  readyList.innerHTML = '';
  list.forEach(p => readyList.appendChild(buildReadyProductCard(p)));
}
renderReadyProducts();
readySearch.addEventListener('input',()=>{
  const q = readySearch.value.toLowerCase();
  renderReadyProducts(READY_PRODUCTS.filter(p => p.name.toLowerCase().includes(q)));
});

readyList.addEventListener('click', (e)=>{
  if (!e.target.classList.contains('btn-subtle')) return;
  const card = e.target.closest('[data-name]');
  const name = card.dataset.name;
  const fam = card.dataset.fam;
  const color = card.querySelector('.ready-color').value;
  const meters = Number(card.querySelector('.ready-meters').value || 0);
  const qty = Number(card.querySelector('.ready-qty').value || 0);
  const pricePerM = MATERIAL_PRICE_PER_METER[fam] ?? 0;

  if (!meters || meters<=0 || !qty || qty<=0){
    alert('Sila isi Meter & Quantity (>0).'); return;
  }
  const sku = (READY_SKU_MAP[name] && READY_SKU_MAP[name][color]) ? READY_SKU_MAP[name][color] : makeFallbackSKU(name, color);
  const amount = pricePerM * meters * qty;

  readyProductItems.push({ name, color, sku, meters, qty, pricePerM, amount, fam });
  card.querySelector('.ready-meters').value = '';
  card.querySelector('.ready-qty').value = '';
  renderReadyItemsTable();
});

function renderReadyItemsTable(){
  readyItemsBody.innerHTML = readyProductItems.map((it,idx)=>`
    <tr>
      <td class="px-3 py-2">${it.sku}</td>
      <td class="px-3 py-2">${it.name}</td>
      <td class="px-3 py-2">${it.color}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.pricePerM)}</td>
      <td class="px-3 py-2 text-right">${it.meters}</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.amount)}</td>
      <td class="px-3 py-2 text-right"><button class="text-rose-600 underline" data-del-ready="${idx}">Delete</button></td>
    </tr>
  `).join('');
  readyItemsWrap.classList.toggle('hidden', readyProductItems.length===0);
}
readyItemsBody.addEventListener('click',(e)=>{
  const idx = e.target?.dataset?.delReady;
  if (idx===undefined) return;
  readyProductItems.splice(Number(idx),1);
  renderReadyItemsTable();
});

function makeFallbackSKU(productName, color){
  const p = (productName||'').replace(/[^A-Z0-9]+/gi,' ').trim().split(/\s+/).map(w=>w[0]).join('').toUpperCase();
  const c = (color||'').replace(/\s+/g,'').replace(/[^A-Za-z0-9]/g,'').toUpperCase();
  return (p? p : 'SKU') + '-' + (c? c : 'NA');
}

/* ===== READY: sewing ===== */
function detectFamFromReadyItems(){
  let best = null, q = 0;
  for (const it of readyProductItems){
    const t = it.qty;
    if (t > q){ q = t; best = it.fam; }
  }
  return best || 'DUBAI_CREPE';
}
sewSearchReady.addEventListener('input',()=>renderSewSuggest(sewSuggestReady,searchSew(sewSearchReady.value)));
sewSuggestReady.addEventListener('click',(e)=>{
  const code = e.target?.closest('button')?.dataset?.code;
  if(!code) return;
  sewSearchReady.value = code;
  sewSuggestReady.innerHTML = '';
  sewSuggestReady.classList.add('hidden');
});
function renderSewTable(tbody,list,wrap,tag){
  tbody.innerHTML=list.map((it,idx)=>`
    <tr>
      <td class="px-3 py-2">${it.code}</td>
      <td class="px-3 py-2">${it.name}</td>
      <td class="px-3 py-2">${it.fam}</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.unit)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.amount)}</td>
      <td class="px-3 py-2 text-right"><button class="text-rose-600 underline" data-del="${tag}:${idx}">Delete</button></td>
    </tr>`).join('');
  wrap.classList.toggle('hidden', list.length===0);
}
btnAddSewReady.addEventListener('click',()=>{
  const code = (sewSearchReady.value||'').trim().toUpperCase();
  const qty = Number(sewQtyReady.value||0);
  let fam = sewMaterialReady.value;
  if (fam==='AUTO') fam = detectFamFromReadyItems();
  const ok = priceSew(code, fam, qty);
  if (!ok.ok){ warnSewReady.classList.remove('hidden'); return; }
  warnSewReady.classList.add('hidden');
  const meta = SEWING_MAP[code];
  const amount = ok.unit * qty;
  sewReadyItems.push({code, name: meta.name, fam, qty, unit: ok.unit, amount});
  renderSewTable(sewBodyReady, sewReadyItems, sewListWrapReady, 'ready');
});
sewBodyReady.addEventListener('click',(e)=>{
  const d = e.target?.dataset?.del; if(!d) return;
  const [tag, idx] = d.split(':'); const i = Number(idx);
  if (tag==='ready'){ sewReadyItems.splice(i,1); renderSewTable(sewBodyReady, sewReadyItems, sewListWrapReady, 'ready'); }
});

/* ===== READY: totals + RFQ ===== */
function currentPaymentReady(){ return document.querySelector('input[name="paymentMethodReady"]:checked')?.value || null; }

function updateBreakdownUI(productItems,sewItems,totals,payment,shipSel){
  const prodRows = productItems.map(it=>`
    <tr>
      <td class="px-3 py-2">${it.name} (${it.color}) — ${it.meters}m × ${it.qty}</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${fmtRM(Number(it.pricePerM) * Number(it.meters))}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.amount)}</td>
    </tr>`).join('');
  const sewRows = sewItems.map(it=>`
    <tr>
      <td class="px-3 py-2">[KOS JAHIT] ${it.name} (${it.code})</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.unit)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.amount)}</td>
    </tr>`).join('');
  breakdownBody.innerHTML = prodRows + sewRows;
  bdPayment.textContent = payment || '—';
  bdShipTxt.textContent = shipSel?.name ? `${shipSel.name} (${shipSel.code||'-'})` : '—';
  bdSubtotal.textContent = fmtRM(totals.subtotal);
  bdFee.textContent = fmtRM(totals.fee);
  bdShipping.textContent = fmtRM(totals.shipping);
  bdGrand.textContent = fmtRM(totals.grand);
  breakdownWrap.classList.toggle('hidden', productItems.length + sewItems.length === 0);
  btnRFQ.disabled = (productItems.length + sewItems.length === 0);
}

btnTotal.addEventListener('click', ()=>{
  const pay = currentPaymentReady();
  const ship = getSelectedShipping('shipReady');
  const itemsSubtotal = [...readyProductItems, ...sewReadyItems].reduce((s,i)=> s + Number(i.amount||0), 0);
  if (!itemsSubtotal){ alert('Sila tambah item.'); return; }
  const totals = computeTotalsWithShipping(itemsSubtotal, pay, ship);
  updateBreakdownUI(readyProductItems, sewReadyItems, totals, pay, ship);
  breakdownWrap.scrollIntoView({behavior:'smooth'});
});

btnRFQ.addEventListener('click', ()=>{
  const pay = currentPaymentReady();
  const ship = getSelectedShipping('shipReady');
  if (!(readyProductItems.length + sewReadyItems.length)){ alert('Sila tambah item.'); return; }
  const itemsSubtotal = [...readyProductItems, ...sewReadyItems].reduce((s,i)=> s + Number(i.amount||0), 0);
  const totals = computeTotalsWithShipping(itemsSubtotal, pay, ship);

  const itemsForInvoice = [
    ...readyProductItems.map(it => {
      const perItem = Number(it.pricePerM || 0) * Number(it.meters || 0);
      return {
        code: it.sku,
        desc: `${it.name} (${it.color}) — ${it.meters}m × ${it.qty}`,
        qty: it.qty,
        unit: perItem,           // ← unit harga per ITEM
        amount: it.amount
      };
    }),
    ...sewReadyItems.map(s => ({ code: s.code, desc: `[KOS JAHIT] ${s.name} (${s.fam})`, qty: s.qty, unit: s.unit, amount: s.amount })),
    ...(totals.shipping ? [{ code: ship.code || '', desc: `SHIPPING – ${ship.name||'N/A'}`, qty: 1, unit: totals.shipping, amount: totals.shipping }] : [])
  ];

  const customer = collectCustomerForPayload();
  LAST_ORDER_PAYLOAD = {
    source: "noorarfa-rfq",
    mode: "ready",
    payment_method: pay || "Cash",
    shipping_method: ship.name || '',
    shipping_code: ship.code || '',
    shipping_cost: totals.shipping,
    items: [
      ...readyProductItems.map(it => {
        const perItem = Number(it.pricePerM || 0) * Number(it.meters || 0);
        return {
          sku: it.sku,
          name: `${it.name} (${it.color}) — ${it.meters}m × ${it.qty}`,
          qty: it.qty,
          unit_price: perItem,  // ← unit harga per ITEM
          amount: it.amount
        };
      }),
      ...sewReadyItems.map(s => ({ sku: s.code, name: `[KOS JAHIT] ${s.name} (${s.fam})`, qty: s.qty, unit_price: s.unit, amount: s.amount })),
      ...(totals.shipping ? [{ sku: ship.code || '', name: `SHIPPING – ${ship.name||'N/A'}`, qty: 1, unit_price: totals.shipping, amount: totals.shipping }] : [])
    ],
    totals,
    customer
  };

  populateQuotation(itemsForInvoice, totals, pay);
  btnSubmitOrder.disabled = false;
});

/* ===== VARIASI DESIGN PRICES ===== */
const VARIANT_PRICE = { new:500, edit:150, recolor:50, free:0 };

/* ===== CUSTOM Logic ===== */
c_material.addEventListener('change', ()=>{
  const v = CUSTOM_MATERIAL_PRICE[c_material.value] ?? 0;
  if (c_pricepm) c_pricepm.value = v;
});

function addCustomItem(){
  const qty   = Number(c_qty.value||0);
  const meter = Number(c_meter.value||0);

  if(!c_material.value || !c_pattern.value || !c_color.value || !qty || qty<=0){
    alert('Sila lengkapkan Material, Corak, Warna dan Quantity (>0).'); 
    return;
  }

  const base    = VARIANT_PRICE[c_variant.value] || 0;
  const addLogo = c_add_logo.checked ? 100 : 0;
  const vp      = base + addLogo;                   
  const pricePM = Number((c_pricepm?.value) || (CUSTOM_MATERIAL_PRICE[c_material.value] ?? 0)) || 0;
  const fabricCost   = pricePM * (meter||0) * qty;  
  const designCharge = base / qty;

  const totalCash = base + addLogo + fabricCost;

  const key = `${c_material.value} – ${c_pattern.value} (${c_color.value})`;
  let sku   = (c_sku?.value || '').trim();
  if (!sku) sku = CUSTOM_SKU_MAP[key] || makeCustomSKU(c_material.value, c_pattern.value, c_color.value);

  customItems.push({
    sku,
    material: c_material.value,
    pattern : c_pattern.value,
    color   : c_color.value,
    meter, qty, 
    pricePM, fabricCost,
    variant: c_variant.value,
    variantText : c_variant.options[c_variant.selectedIndex].text + (c_add_logo.checked ? ' + Logo (RM100)' : ''),
    variantPrice: vp,
    designCharge,
    totalCash
  });

  c_meter.value = '';
  c_qty.value   = '';
  if (c_sku) c_sku.value = '';
  renderCustomList();
}
function renderCustomList(){
  customListBody.innerHTML=customItems.map((it,idx)=>`
    <tr>
      <td class="px-3 py-2">${idx+1}</td>
      <td class="px-3 py-2">
        <div class="font-medium">${it.material} — ${it.pattern} (${it.color})</div>
        <div class="text-xs text-slate-500">Meter: ${it.meter||0} | Variasi: ${it.variantText}</div>
      </td>
      <td class="px-3 py-2">${it.sku||'—'}</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.variantPrice)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.designCharge)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.fabricCost)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.totalCash)}</td>
      <td class="px-3 py-2 text-right"><button class="text-rose-600 underline" data-del-custom="${idx}">Delete</button></td>
    </tr>`).join('');
  customListWrap.classList.toggle('hidden',customItems.length===0); 
  btnRFQCustom.disabled=(customItems.length===0 && sewCustomItems.length===0);
}
customListBody.addEventListener('click',(e)=>{ 
  const idx=e.target?.dataset?.delCustom; 
  if(idx!==undefined){ customItems.splice(Number(idx),1); renderCustomList(); } 
});
btnAddCustom.addEventListener('click',addCustomItem);

function computeTotalsCustomUI(){
  const pay=document.querySelector('input[name="paymentMethodCustom"]:checked')?.value||null; 
  if(!pay){ alert('Sila pilih Payment Method (Cash atau E-Perolehan).'); return null; }
  const shipSel=getSelectedShipping('shipCustom'); 
  const itemsSubtotal=[...customItems.map(ci=>ci.totalCash), ...sewCustomItems.map(s=>s.amount)].reduce((s,x)=>s+Number(x||0),0);
  return { pay, shipSel, totals: computeTotalsWithShipping(itemsSubtotal,pay,shipSel) };
}
btnTotalCustom.addEventListener('click',()=>{ 
  const ctx=computeTotalsCustomUI(); if(!ctx) return; 
  const {pay,shipSel,totals}=ctx;
  cbdPayment.textContent=pay; 
  cbdSubtotal.textContent=fmtRM(totals.subtotal); 
  cbdFee.textContent=fmtRM(totals.fee); 
  cbdShippingTxt.textContent=shipSel?.name?`${shipSel.name} (${shipSel.code||'-'})`:'—'; 
  cbdShippingCost.textContent=fmtRM(totals.shipping); 
  cbdGrand.textContent=fmtRM(totals.grand);
  if(customItems.length||sewCustomItems.length){ customListWrap.classList.remove('hidden'); customListWrap.scrollIntoView({behavior:'smooth'}); } 
});

/* ===== CUSTOM: sewing ===== */
function materialToFamily(materialStr){
  const s=(materialStr||'').toUpperCase();
  for(const m of FAMILY_FROM_NAME) if(s.includes(m.key)) return m.fam;
  return s || 'PARIS_CREPE';
}
sewSearchCustom.addEventListener('input',()=>renderSewSuggest(sewSuggestCustom,searchSew(sewSearchCustom.value)));
sewSuggestCustom.addEventListener('click',(e)=>{ const code=e.target?.closest('button')?.dataset?.code; if(!code) return; sewSearchCustom.value=code; sewSuggestCustom.innerHTML=''; sewSuggestCustom.classList.add('hidden'); });
btnAddSewCustom.addEventListener('click',()=>{ 
  const code=(sewSearchCustom.value||'').trim().toUpperCase(); 
  const qty=Number(sewQtyCustom.value||0); 
  let fam=sewMaterialCustom.value; if(fam==='AUTO') fam=materialToFamily(c_material.value)||'PARIS_CREPE';
  const ok=priceSew(code,fam,qty); if(!ok.ok){ warnSewCustom.classList.remove('hidden'); return; } 
  warnSewCustom.classList.add('hidden'); 
  const meta=SEWING_MAP[code]; const amount=ok.unit*qty;
  sewCustomItems.push({code,name:meta.name,fam,qty,unit:ok.unit,amount}); 
  renderSewTable(sewBodyCustom,sewCustomItems,sewListWrapCustom,'custom'); 
  btnRFQCustom.disabled=(customItems.length===0&&sewCustomItems.length===0); 
});
sewBodyCustom.addEventListener('click',(e)=>{ 
  const d=e.target?.dataset?.del; if(!d) return; 
  const [tag,idx]=d.split(':'); 
  if(tag==='custom'){ sewCustomItems.splice(Number(idx),1); renderSewTable(sewBodyCustom,sewCustomItems,sewListWrapCustom,'custom'); } 
  btnRFQCustom.disabled=(customItems.length===0&&sewCustomItems.length===0); 
});

btnRFQCustom.addEventListener('click',()=>{ 
  const ctx=computeTotalsCustomUI(); if(!ctx) return; 
  const {pay,shipSel,totals}=ctx; 
  if(!customItems.length&&!sewCustomItems.length){ alert('Sila tambah item custom atau kos jahit.'); return; }

  const itemsForInvoice=[ 
    ...customItems.map(ci=>({ 
      code: ci.sku || '',
      desc:`${ci.material} – ${ci.pattern} (${ci.color}) [${ci.variantText}]`, 
      qty:ci.qty, 
      unit:(ci.designCharge + ((ci.fabricCost/ci.qty)||0)), 
      amount:ci.totalCash 
    })),
    ...sewCustomItems.map(s=>({ code:s.code, desc:`[KOS JAHIT] ${s.name} (${s.fam})`, qty:s.qty, unit:s.unit, amount:s.amount })), 
    ...(totals.shipping?[{ code:shipSel.code||'', desc:`SHIPPING – ${shipSel.name||'N/A'}`, qty:1, unit:totals.shipping, amount:totals.shipping }]:[]) 
  ];
  const customer=collectCustomerForPayload();

  LAST_ORDER_PAYLOAD={ 
    source:"noorarfa-rfq", 
    mode:"custom", 
    payment_method:pay||"Cash", 
    shipping_method:shipSel.name||'', 
    shipping_code:shipSel.code||'', 
    shipping_cost:totals.shipping,
    items:[ 
      ...customItems.map(ci=>({ 
        sku: ci.sku || '',
        name:`${ci.material} – ${ci.pattern} (${ci.color}) [${ci.variantText}]`, 
        qty:ci.qty, 
        unit_price:(ci.designCharge + ((ci.fabricCost/ci.qty)||0)), 
        amount:ci.totalCash 
      })),
      ...sewCustomItems.map(s=>({ sku:s.code, name:`[KOS JAHIT] ${s.name} (${s.fam})`, qty:s.qty, unit_price:s.unit, amount:s.amount })),
      ...(totals.shipping?[{ sku:shipSel.code||'', name:`SHIPPING – ${shipSel.name||'N/A'}`, qty:1, unit_price:totals.shipping, amount:totals.shipping }]:[]) 
    ],
    totals, customer 
  };
  populateQuotation(itemsForInvoice,totals,pay); 
  btnSubmitOrder.disabled=false; 
});

/* ===== READYMADE: AUTOCOMPLETE Kod + Backend (opsyenal) ===== */
const READYMADES_API_URL = ""; // ← letak URL backend anda (jika ada). Biarkan kosong jika tidak guna backend.
let READYMADES_DATA = Array.isArray(READYMADES_LOCAL) ? [...READYMADES_LOCAL] : [];

const r_codeSuggest = document.getElementById('r_codeSuggest');
const r_codeWrap = document.getElementById('r_codeWrap');

function normalizeRM(row){
  return {
    code: String(row?.code || '').toUpperCase(),
    material: row?.material || '',
    name: row?.name || '',
    pricepm: Number(row?.pricepm ?? row?.price_per_meter ?? 0) || 0,
    meter: Number(row?.meter ?? row?.meter_per_item ?? 0) || 0,
    qty: Number(row?.qty ?? row?.default_qty ?? 0) || 0
  };
}
function mergeReadymades(newList){
  const map = new Map(READYMADES_DATA.map(x => [String(x.code).toUpperCase(), normalizeRM(x)]));
  for(const raw of newList){
    const it = normalizeRM(raw);
    if(!it.code) continue;
    map.set(it.code, it); // backend overwrite local
  }
  READYMADES_DATA = Array.from(map.values());
}
async function loadReadymadesFromBackend(){
  if(!READYMADES_API_URL) return;
  try{
    const res = await fetch(READYMADES_API_URL, {headers:{'Accept':'application/json'}});
    if(!res.ok) throw new Error('Bad status: '+res.status);
    const arr = await res.json();
    if(Array.isArray(arr)) mergeReadymades(arr);
  }catch(err){
    console.warn('Readymades backend fetch failed:', err);
  }
}
loadReadymadesFromBackend();

function escapeHTML(s){ return String(s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function debounce(fn, ms=120){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; }

function setReadymadeMaterial(val){
  if(!val) return;
  const exists = Array.from(r_material.options).some(o => o.value === val);
  if(!exists){
    const opt = new Option(val, val);
    r_material.add(opt);
  }
  r_material.value = val;
  r_material.dispatchEvent(new Event('change')); // trigger auto set harga/meter jika ada
}
function fillFromReadymadeSelection(item){
  if(!item) return;
  r_code.value = item.code || '';
  if(item.material) setReadymadeMaterial(item.material);
  const pm = Number(item.pricepm || READYMADES_PRICE_PER_METER[item.material] || 0);
  if(pm > 0) r_pricepm.value = pm;
  if(item.meter && (!r_meter.value || Number(r_meter.value) <= 0)) r_meter.value = item.meter;
  if(item.qty   && (!r_qty.value   || Number(r_qty.value)   <= 0)) r_qty.value   = item.qty;
}
function searchReadymadeCodes(q, limit=12){
  const s = String(q||'').trim().toUpperCase();
  if(!s) return [];
  const res = READYMADES_DATA.filter(x=>{
    const code = String(x.code||'').toUpperCase();
    const name = String(x.name||'').toUpperCase();
    const mat  = String(x.material||'').toUpperCase();
    return code.includes(s) || name.includes(s) || mat.includes(s);
  }).sort((a,b)=>{
    const aSW = String(a.code||'').toUpperCase().startsWith(s) ? -1 : 0;
    const bSW = String(b.code||'').toUpperCase().startsWith(s) ? -1 : 0;
    if(aSW !== bSW) return aSW - bSW;
    return String(a.code||'').localeCompare(String(b.code||''));
  });
  return res.slice(0, limit);
}
let _rActiveIndex = -1;
let _rCurrentList = [];

function renderRCodeSuggest(list){
  _rCurrentList = list;
  _rActiveIndex = list.length ? 0 : -1;

  if(!list.length){
    r_codeSuggest.innerHTML = `<div class="suggest-empty">Tiada padanan.</div>`;
    r_codeSuggest.classList.remove('hidden');
    return;
  }
  r_codeSuggest.innerHTML = list.map((it, idx)=>`
    <button type="button" class="suggest-item ${idx===_rActiveIndex?'is-active':''}" data-idx="${idx}">
      <div class="line1">${escapeHTML(it.code)}${it.name ? ' — ' + escapeHTML(it.name) : ''}</div>
      <div class="line2">${escapeHTML(it.material || '')}${it.pricepm ? ' · RM'+Number(it.pricepm).toFixed(2)+'/m' : ''}</div>
    </button>
  `).join('');
  r_codeSuggest.classList.remove('hidden');
}
function hideRCodeSuggest(){ r_codeSuggest.classList.add('hidden'); }
function moveActive(delta){
  if(!_rCurrentList.length) return;
  _rActiveIndex = Math.min(_rCurrentList.length-1, Math.max(0, _rActiveIndex + delta));
  Array.from(r_codeSuggest.querySelectorAll('.suggest-item')).forEach((el,i)=>{
    el.classList.toggle('is-active', i===_rActiveIndex);
  });
  const activeEl = r_codeSuggest.querySelector('.suggest-item.is-active');
  if(activeEl){
    const cTop = r_codeSuggest.scrollTop;
    const cBot = cTop + r_codeSuggest.clientHeight;
    const eTop = activeEl.offsetTop;
    const eBot = eTop + activeEl.offsetHeight;
    if(eBot > cBot) r_codeSuggest.scrollTop = eBot - r_codeSuggest.clientHeight;
    if(eTop < cTop) r_codeSuggest.scrollTop = eTop;
  }
}
function selectActive(){
  if(_rActiveIndex<0 || _rActiveIndex>=_rCurrentList.length) return;
  const it = _rCurrentList[_rActiveIndex];
  fillFromReadymadeSelection(it);
  hideRCodeSuggest();
}
const onRCodeInput = debounce(()=> {
  const q = r_code.value;
  if(!q){ hideRCodeSuggest(); return; }
  renderRCodeSuggest(searchReadymadeCodes(q));
}, 120);
r_code.addEventListener('input', onRCodeInput);
r_code.addEventListener('focus', ()=> {
  const q = r_code.value;
  if(q){ renderRCodeSuggest(searchReadymadeCodes(q)); }
});
r_code.addEventListener('keydown', (e)=>{
  if(r_codeSuggest.classList.contains('hidden')) return;
  if(e.key === 'ArrowDown'){ e.preventDefault(); moveActive(+1); }
  else if(e.key === 'ArrowUp'){ e.preventDefault(); moveActive(-1); }
  else if(e.key === 'Enter'){ e.preventDefault(); selectActive(); }
  else if(e.key === 'Escape'){ hideRCodeSuggest(); }
});
r_codeSuggest.addEventListener('click', (e)=>{
  const btn = e.target.closest('.suggest-item');
  if(!btn) return;
  const idx = Number(btn.dataset.idx);
  _rActiveIndex = idx;
  selectActive();
});
document.addEventListener('click', (e)=>{
  if(!r_codeWrap.contains(e.target)) hideRCodeSuggest();
});

/* ===== READYMADE: per meter (ikut gaya Custom) ===== */
r_material.addEventListener('change', ()=>{
  const pm = READYMADES_PRICE_PER_METER[r_material.value];
  r_pricepm.value = (pm != null && pm>0) ? pm : '';
});

function makeCustomSKU(material, pattern, color){
  const m = (material||'').match(/\b[A-Z]/gi)?.join('') || 'CM';
  const p = (pattern||'').replace(/[^A-Za-z0-9]/g,'').slice(0,3).toUpperCase() || 'X';
  const c = (color||'').replace(/[^A-Za-z0-9]/g,'').slice(0,3).toUpperCase() || 'NA';
  const r = Math.floor(Math.random()*900+100);
  return `ZC-${m}${p}${c}${r}`;
}
function makeReadymadeSKU(material, code){
  const m=(material||'').match(/\b[A-Z]/gi)?.join('')||'RM';
  const k=(code||'').replace(/[^A-Za-z0-9]/g,'').toUpperCase().slice(-4)||'0000';
  const r=Math.floor(Math.random()*900+100);
  return `ZR-${m}${k}${r}`;
}

btnAddReadymade.addEventListener('click', ()=>{ 
  const material=r_material.value; 
  const pricePM  = Number(r_pricepm.value || 0);
  const meter    = Number(r_meter.value || 0);
  const qty      = Number(r_qty.value || 0);
  const code     = (r_code.value || '').trim().toUpperCase();

  if(!material){ alert('Sila pilih Material.'); return; }
  if(!pricePM || pricePM<=0){ alert('Sila tetapkan Harga/Meter (>0).'); return; }
  if(!meter || meter<=0){ alert('Sila isi Meter per item (>0).'); return; }
  if(!qty || qty<=0){ alert('Sila isi Quantity (>0).'); return; }
  if(!code){ alert('Sila isi Kod Readymade (taip & pilih dari senarai).'); return; }

  const base=VARIANT_PRICE[r_variant.value]||0; 
  const addLogo=r_add_logo.checked?100:0; 
  const variationTotal=base+addLogo; 
  const designPerItem=variationTotal/qty; 

  const fabricCost = pricePM * meter * qty;
  const totalCash  = fabricCost + variationTotal;

  const skuInput = (r_sku?.value || '').trim();
  const sku = skuInput || code || makeReadymadeSKU(material, code||'RM');

  readymadeItems.push({ 
    material, code, sku,
    pricePM, meter, qty,
    variant:r_variant.value, 
    variantText:r_variant.options[r_variant.selectedIndex].text+(r_add_logo.checked?' + Logo (RM100)':''), 
    variantPrice:variationTotal, 
    designCharge:designPerItem, 
    fabricCost,
    totalCash 
  });

  r_meter.value=''; r_qty.value=''; if (r_sku) r_sku.value='';
  renderReadymadeList(); 
});

function renderReadymadeList(){
  readymadeListBody.innerHTML=readymadeItems.map((it,idx)=>`
    <tr>
      <td class="px-3 py-2">${idx+1}</td>
      <td class="px-3 py-2">
        <div class="font-medium">${it.material}${it.code ? ' — Kod: ' + it.code : ''}</div>
        <div class="text-xs text-slate-500">Variasi: ${it.variantText}</div>
      </td>
      <td class="px-3 py-2">${it.sku||'—'}</td>
      <td class="px-3 py-2 text-right">${it.qty}</td>
      <td class="px-3 py-2 text-right">${it.meter}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.pricePM)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.fabricCost)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.variantPrice)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.designCharge)}</td>
      <td class="px-3 py-2 text-right">${fmtRM(it.totalCash)}</td>
      <td class="px-3 py-2 text-right"><button class="text-rose-600 underline" data-del-rm="${idx}">Delete</button></td>
    </tr>`).join('');
  readymadeListWrap.classList.toggle('hidden',readymadeItems.length===0); 
  btnRFQRM.disabled=(readymadeItems.length===0&&sewRMItems.length===0);
}
readymadeListBody.addEventListener('click',(e)=>{ const idx=e.target?.dataset?.delRm; if(idx!==undefined){ readymadeItems.splice(Number(idx),1); renderReadymadeList(); } });

function computeTotalsRM_UI(){ 
  const pay=document.querySelector('input[name="paymentMethodRM"]:checked')?.value||null; 
  if(!pay){ alert('Sila pilih Payment Method (Cash atau E-Perolehan).'); return null; }
  const shipSel=getSelectedShipping('shipRM'); 
  const itemsSubtotal=[...readymadeItems.map(i=>i.totalCash), ...sewRMItems.map(s=>s.amount)].reduce((s,x)=>s+Number(x||0),0); 
  return { pay, shipSel, totals: computeTotalsWithShipping(itemsSubtotal,pay,shipSel) }; 
}
btnTotalRM.addEventListener('click',()=>{ 
  const ctx=computeTotalsRM_UI(); if(!ctx) return; 
  const {pay,shipSel,totals}=ctx;
  rbdPayment.textContent=pay; 
  rbdSubtotal.textContent=fmtRM(totals.subtotal); 
  rbdFee.textContent=fmtRM(totals.fee); 
  rbdShippingTxt.textContent=fmtRM(totals.shipping)+' — '+(shipSel?.name?`${shipSel.name} (${shipSel.code||'-'})`:'—'); 
  rbdShippingCost.textContent=fmtRM(totals.shipping); 
  rbdGrand.textContent=fmtRM(totals.grand);
  if(readymadeItems.length||sewRMItems.length){ readymadeListWrap.classList.remove('hidden'); readymadeListWrap.scrollIntoView({behavior:'smooth'}); } 
});

btnRFQRM.addEventListener('click',()=>{ 
  const ctx=computeTotalsRM_UI(); if(!ctx) return; 
  const {pay,shipSel,totals}=ctx; 
  if(!readymadeItems.length&&!sewRMItems.length){ alert('Sila tambah item readymade atau kos jahit.'); return; }
  const itemsForInvoice=[ 
    ...readymadeItems.map(it=>({ 
      code: it.sku || it.code, 
      desc: `[READYMADE PRE-ORDER] ${it.material}${it.code ? ' – Kod ' + it.code : ''} [${it.variantText}] — ${it.meter}m × ${it.qty}`, 
      qty: it.qty, 
      unit: (it.pricePM * it.meter) + it.designCharge,                  
      amount: ((it.pricePM * it.meter) + it.designCharge) * it.qty     
    })),
    ...sewRMItems.map(s=>({ code:s.code, desc:`[KOS JAHIT] ${s.name} (${s.fam})`, qty:s.qty, unit:s.unit, amount:s.amount })), 
    ...(totals.shipping?[{ code:shipSel.code||'', desc:`SHIPPING – ${shipSel.name||'N/A'}`, qty:1, unit:totals.shipping, amount:totals.shipping }]:[]) 
  ];
  const customer=collectCustomerForPayload();
  LAST_ORDER_PAYLOAD={ 
    source:"noorarfa-rfq", 
    mode:"readymade", 
    payment_method:pay||"Cash", 
    shipping_method:shipSel.name||'', 
    shipping_code:shipSel.code||'', 
    shipping_cost:totals.shipping,
    items:[ 
      ...readymadeItems.map(it=>({ 
        sku: it.sku || it.code, 
        name:`[READYMADE PRE-ORDER] ${it.material}${it.code ? ' – Kod ' + it.code : ''} [${it.variantText}] — ${it.meter}m × ${it.qty}`, 
        qty: it.qty, 
        unit_price: (it.pricePM * it.meter) + it.designCharge, 
        amount: ((it.pricePM * it.meter) + it.designCharge) * it.qty 
      })),
      ...sewRMItems.map(s=>({ sku:s.code, name:`[KOS JAHIT] ${s.name} (${s.fam})`, qty:s.qty, unit_price:s.unit, amount:s.amount })),
      ...(totals.shipping?[{ sku:shipSel.code||'', name:`SHIPPING – ${shipSel.name||'N/A'}`, qty:1, unit_price:totals.shipping, amount:totals.shipping }]:[]) 
    ],
    totals, customer 
  };
  populateQuotation(itemsForInvoice,totals,pay); 
  btnSubmitOrder.disabled=false; 
});

/* ===== RM sewing ===== */
sewSearchRM.addEventListener('input',()=>renderSewSuggest(sewSuggestRM,searchSew(sewSearchRM.value)));
sewSuggestRM.addEventListener('click',(e)=>{ const code=e.target?.closest('button')?.dataset?.code; if(!code) return; sewSearchRM.value=code; sewSuggestRM.innerHTML=''; sewSuggestRM.classList.add('hidden'); });
btnAddSewRM.addEventListener('click',()=>{ 
  const code=(sewSearchRM.value||'').trim().toUpperCase(); 
  const qty=Number(sewQtyRM.value||0); 
  let fam=sewMaterialRM.value; if(fam==='AUTO') fam=materialToFamily(r_material.value)||'PARIS_CREPE';
  const ok=priceSew(code,fam,qty); if(!ok.ok){ warnSewRM.classList.remove('hidden'); return; } 
  warnSewRM.classList.add('hidden'); const meta=SEWING_MAP[code]; const amount=ok.unit*qty; 
  sewRMItems.push({code,name:meta.name,fam,qty,unit:ok.unit,amount}); 
  renderSewTable(sewBodyRM,sewRMItems,sewListWrapRM,'rm'); 
  btnRFQRM.disabled=(readymadeItems.length===0&&sewRMItems.length===0); 
});
sewBodyRM.addEventListener('click',(e)=>{ const d=e.target?.dataset?.del; if(!d) return; const [tag,idx]=d.split(':'); if(tag==='rm'){ sewRMItems.splice(Number(idx),1); renderSewTable(sewBodyRM,sewRMItems,sewListWrapRM,'rm'); } btnRFQRM.disabled=(readymadeItems.length===0&&sewRMItems.length===0); });

/* ===== Quotation builder & submit ===== */
function collectCustomerForPayload(){
  const addr=(document.getElementById('address').value||'').split('\n');
  return { fullName:document.getElementById('fullName').value||'', email:document.getElementById('email').value||'', phone:document.getElementById('phone').value||'',
    company:document.getElementById('company').value||'', address_line1:addr[0]||'', address_line2:addr[1]||'', address_line3:addr.length>2?addr.slice(2).join(' '):'' };
}
function populateQuotation(items, totals, payment){
  const name=document.getElementById('fullName').value||'', company=document.getElementById('company').value||'';
  const address=(document.getElementById('address').value||'').split('\n'); const email=document.getElementById('email').value||''; const phone=document.getElementById('phone').value||'';
  const picName=document.getElementById('picName')?.value||''; const picRole=document.getElementById('picRole')?.value||'';
  document.getElementById('qCustLine1').textContent=company||name||'—'; document.getElementById('qCustLine2').textContent=address[0]||'—';
  document.getElementById('qCustLine3').textContent=address[1]||(email?email:'—'); document.getElementById('qCustLine4').textContent=phone?phone:(address[2]||'—');
  const dt=fmtNowForInv(); qInvNo.textContent=dt.inv; qDate.textContent=dt.dateText; qRef.textContent=payment||'CASH'; qTerm.textContent='30 DAYS'; qSales.textContent='CA';
  qBody.innerHTML=items.map((it,idx)=>`<tr><td>${idx+1}</td><td>${it.sku||it.code||'—'}</td><td>${it.desc}</td><td class="text-right">${it.qty}</td><td>UNIT</td><td class="text-right">${fmtRM(it.unit)}</td><td class="text-right">${fmtRM(it.amount)}</td></tr>`).join('');
  qInWords.textContent=totals.grand>0?(toWordsEN(Math.round(totals.grand))+' RINGGIT ONLY'):'—'; qGrand.textContent=fmtRM(totals.grand); document.getElementById('qDiscount').textContent='0.00';
  document.getElementById('qStaff').textContent=(picName&&picRole)?`${picName.toUpperCase()} (${picRole.toUpperCase()})`:'ANIS SOLEHAH (PEGAWAI WEBSITE)';
  quotationSection.classList.remove('hidden'); quotationSection.scrollIntoView({behavior:'smooth'});
}
async function sendToSheets(payload){
  try{ const res=await fetch(SHEETS_WEBAPP_URL,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify(payload)});
    let msg='Order dihantar ke Google Sheets.'; try{const d=await res.json(); if(d?.ok&&d?.orderId) msg=`Order dihantar! Order ID: ${d.orderId}`;}catch(_){}
    alert(msg);}catch(e){console.error(e); alert('Maaf, gagal hantar ke Google Sheets. Cuba lagi.');}
}
btnSubmitOrder.addEventListener('click', async ()=>{
  if (!LAST_ORDER_PAYLOAD){ alert('Sila jana quotation dahulu.'); return; }
  const ok = confirm('Hantar order ini ke Noor Arfa (Google Sheets)?');
  if (!ok) return;
  await sendToSheets(LAST_ORDER_PAYLOAD);
});

/* default tab */
modeReady.checked = true;
toggleSections();

/* ============================================================================
 * ============================  EDIT ORDER PATCH  =============================
 * ============================================================================ */

/* 1) Auto tambah butang EDIT ORDER di sebelah SUBMIT ORDER */
(function ensureEditOrderButton(){
  if (!btnSubmitOrder) return;
  let btnEdit = document.getElementById('btnEditOrder');
  if (!btnEdit){
    btnEdit = document.createElement('button');
    btnEdit.id = 'btnEditOrder';
    btnEdit.type = 'button';
    btnEdit.className = 'px-4 py-2 rounded-xl bg-indigo-600 text-white shadow-sm';
    btnEdit.textContent = 'EDIT ORDER';
    const parent = btnSubmitOrder.parentElement || document.body;
    if (parent) parent.insertBefore(btnEdit, btnSubmitOrder.nextSibling);
  }
})();

/* 2) Helper kecil */
function setRadioByName(name, value){
  const el = document.querySelector(`input[name="${name}"][value="${CSS.escape(String(value))}"]`);
  if (el) el.checked = true;
}
function selectShipping(groupName, shipName, shipCode, cost){
  const radios = Array.from(document.querySelectorAll(`input[name="${groupName}"]`));
  let picked = false;
  for (const r of radios){
    const wrap = r.closest('[data-ship]');
    if (!wrap) continue;
    const nm = (wrap.querySelector('.shipName')?.textContent || '').trim();
    const cd = (wrap.querySelector('.shipCode')?.textContent || '').trim();
    if ((shipCode && cd === shipCode) || (shipName && nm === shipName)){
      r.checked = true;
      const price = wrap.querySelector('.shipPrice');
      if (price) price.value = Number(cost || 0);
      picked = true;
      break;
    }
  }
  if (!picked && radios[0]){
    const wrap = radios[0].closest('[data-ship]');
    radios[0].checked = true;
    const price = wrap?.querySelector('.shipPrice');
    if (price) price.value = Number(cost || 0);
  }
}
function resetAllLists(){
  try{
    readyProductItems.length = 0; sewReadyItems.length = 0;
    customItems.length = 0;      sewCustomItems.length = 0;
    readymadeItems.length = 0;   sewRMItems.length = 0;

    renderReadyItemsTable?.();
    renderSewTable?.(sewBodyReady,  sewReadyItems,  sewListWrapReady,  'ready');
    renderCustomList?.();
    renderSewTable?.(sewBodyCustom, sewCustomItems, sewListWrapCustom, 'custom');
    renderReadymadeList?.();
    renderSewTable?.(sewBodyRM,     sewRMItems,     sewListWrapRM,     'rm');
  }catch(_){}
}

/* 3) Fallback parser (jika payload tidak mengandungi `raw`) */
function parseItemsIntoLists(payload){
  const its = Array.isArray(payload.items) ? payload.items : [];
  const mode = payload.mode || 'ready';
  const num = v => Number(v||0);

  if (mode === 'ready'){
    for (const it of its){
      const name = it.name || it.desc || '';
      if (/^\[KOS JAHIT\]/i.test(name)){
        const fam = (name.match(/\(([^)]+)\)/)?.[1] || '').toUpperCase();
        sewReadyItems.push({ code: it.sku||it.code||'', name: name.replace(/^\[KOS JAHIT\]\s*/i,''), fam, qty: num(it.qty), unit: num(it.unit_price||it.unit), amount: num(it.amount) });
      } else if (!/^SHIPPING/i.test(name)){
        const meters = num(name.match(/—\s*([\d.]+)\s*m/i)?.[1]);
        const qty    = num(name.match(/×\s*(\d+)/)?.[1] || it.qty);
        const color  = name.match(/\(([^)]+)\)/)?.[1] || '';
        const prod   = name.split('(')[0].split('—')[0].trim();
        const fam    = detectFamilyFromName(prod);
        const unit   = num(it.unit_price||it.unit);
        const amount = num(it.amount);

        // Detect payload lama (/m) vs baru (/item)
        let pricePerM = unit;
        if (meters > 0) {
          const near = (a,b) => Math.abs(a-b) < 0.01;
          const oldAmt = unit * meters * qty;
          const newAmt = unit * qty;
          if (near(amount, oldAmt)) pricePerM = unit;
          else if (near(amount, newAmt)) pricePerM = unit / meters;
          else pricePerM = unit / meters;
        }

        readyProductItems.push({ name: prod, color, sku: it.sku||it.code||'', meters, qty, pricePerM, amount, fam });
      }
    }
    renderReadyItemsTable?.();
    renderSewTable?.(sewBodyReady, sewReadyItems, sewListWrapReady, 'ready');
  }

  if (mode === 'custom'){
    for (const it of its){
      const name = it.name || it.desc || '';
      if (/^\[KOS JAHIT\]/i.test(name)){
        const fam = (name.match(/\(([^)]+)\)/)?.[1] || '').toUpperCase();
        sewCustomItems.push({ code: it.sku||it.code||'', name: name.replace(/^\[KOS JAHIT\]\s*/i,''), fam, qty: num(it.qty), unit: num(it.unit_price||it.unit), amount: num(it.amount) });
      } else if (!/^SHIPPING/i.test(name)){
        const m = name.match(/^(.+?)\s+–\s+(.+?)\s+\((.+?)\)/);
        const material = m?.[1] || '';
        const pattern  = m?.[2] || '';
        const color    = m?.[3] || '';
        const qty      = num(it.qty);
        const totalCash= num(it.amount);
        const unit     = num(it.unit_price||it.unit);
        customItems.push({
          sku: it.sku||it.code||'',
          material, pattern, color,
          meter: 0, qty,
          pricePM: 0, fabricCost: 0,
          variant: 'free', variantText: (name.match(/\[(.+?)\]/)?.[1] || 'FREE (RM0)'),
          variantPrice: 0,
          designCharge: unit,
          totalCash
        });
      }
    }
    renderCustomList?.();
    renderSewTable?.(sewBodyCustom, sewCustomItems, sewListWrapCustom, 'custom');
  }

  if (mode === 'readymade'){
    for (const it of its){
      const name = it.name || it.desc || '';
      if (/^\[KOS JAHIT\]/i.test(name)){
        const fam = (name.match(/\(([^)]+)\)/)?.[1] || '').toUpperCase();
        sewRMItems.push({ code: it.sku||it.code||'', name: name.replace(/^\[KOS JAHIT\]\s*/i,''), fam, qty: num(it.qty), unit: num(it.unit_price||it.unit), amount: num(it.amount) });
      } else if (!/^SHIPPING/i.test(name)){
        const mat  = name.replace(/^\[READYMADE PRE-ORDER\]\s*/,'').split('—')[0].trim();
        const meter= num(name.match(/—\s*([\d.]+)\s*m/i)?.[1]);
        const qty  = num(name.match(/×\s*(\d+)/)?.[1] || it.qty);
        const variantText = (name.match(/\[(.+?)\]/)?.[1] || 'FREE (RM0)');
        const amount = num(it.amount);
        const unit   = num(it.unit_price||it.unit);
        readymadeItems.push({
          material: mat, code: it.code || '', sku: it.sku || it.code || '',
          pricePM: 0, meter, qty,
          variant: 'free', variantText, variantPrice: 0,
          designCharge: Math.max(0, unit),
          fabricCost: 0,
          totalCash: amount
        });
      }
    }
    renderReadymadeList?.();
    renderSewTable?.(sewBodyRM, sewRMItems, sewListWrapRM, 'rm');
  }
}

/* 4) Apply payload ke UI + invoice */
function applyPayloadToForm(p, orderId){
  // Customer
  try{
    const c = p.customer || {};
    const set = (id,val)=>{ const el = document.getElementById(id); if (el) el.value = val || ''; };
    set('fullName', c.fullName);
    set('email',    c.email);
    set('phone',    c.phone);
    set('company',  c.company);
    const addr = [c.address_line1, c.address_line2, c.address_line3].filter(Boolean).join('\n');
    set('address',  addr);
  }catch(_){}

  // Mode
  try{
    if (p.mode === 'custom') modeCustom.checked = true;
    else if (p.mode === 'readymade') modeReadymade.checked = true;
    else modeReady.checked = true;
    toggleSections();
  }catch(_){}

  // Reset senarai
  resetAllLists();

  // Isi items
  if (p.raw && (
    (p.mode==='ready'     && (Array.isArray(p.raw.readyProductItems) || Array.isArray(p.raw.sewReadyItems))) ||
    (p.mode==='custom'    && (Array.isArray(p.raw.customItems)      || Array.isArray(p.raw.sewCustomItems))) ||
    (p.mode==='readymade' && (Array.isArray(p.raw.readymadeItems)   || Array.isArray(p.raw.sewRMItems)))
  )){
    try{
      if (Array.isArray(p.raw.readyProductItems)) { readyProductItems.push(...p.raw.readyProductItems); renderReadyItemsTable?.(); }
      if (Array.isArray(p.raw.sewReadyItems))     { sewReadyItems.push(...p.raw.sewReadyItems); renderSewTable?.(sewBodyReady, sewReadyItems, sewListWrapReady, 'ready'); }
      if (Array.isArray(p.raw.customItems))       { customItems.push(...p.raw.customItems); renderCustomList?.(); }
      if (Array.isArray(p.raw.sewCustomItems))    { sewCustomItems.push(...p.raw.sewCustomItems); renderSewTable?.(sewBodyCustom, sewCustomItems, sewListWrapCustom, 'custom'); }
      if (Array.isArray(p.raw.readymadeItems))    { readymadeItems.push(...p.raw.readymadeItems); renderReadymadeList?.(); }
      if (Array.isArray(p.raw.sewRMItems))        { sewRMItems.push(...p.raw.sewRMItems); renderSewTable?.(sewBodyRM, sewRMItems, sewListWrapRM, 'rm'); }
    }catch(_){}
  } else {
    parseItemsIntoLists(p);
  }

  // Payment radio
  try{
    if (p.mode==='ready')     setRadioByName('paymentMethodReady',  p.payment_method||'Cash');
    if (p.mode==='custom')    setRadioByName('paymentMethodCustom', p.payment_method||'Cash');
    if (p.mode==='readymade') setRadioByName('paymentMethodRM',     p.payment_method||'Cash');
  }catch(_){}

  // Shipping pilihan
  try{
    const grp = p.mode==='custom' ? 'shipCustom' : (p.mode==='readymade' ? 'shipRM' : 'shipReady');
    const shipCost = (p.totals && Number(p.totals.shipping||0)) || Number(p.shipping_cost||0) || 0;
    selectShipping(grp, p.shipping_method||'', p.shipping_code||'', shipCost);
  }catch(_){}

  // Simpan & populate quotation
  try{
    LAST_ORDER_PAYLOAD = p;
    if (orderId) LAST_ORDER_PAYLOAD.order_id = orderId;

    const itemsForInvoice = (p.items || []).map(x => ({
      code: x.sku || x.code || '',
      desc: x.name || x.desc || '',
      qty:  Number(x.qty || 0),
      unit: Number(x.unit_price || x.unit || 0),
      amount: Number(x.amount || 0)
    }));
    const totals = p.totals || {subtotal:0, fee:0, shipping: Number(p.shipping_cost||0), grand: 0};
    populateQuotation(itemsForInvoice, totals, p.payment_method || 'Cash');
    if (btnSubmitOrder) btnSubmitOrder.disabled = false;
  }catch(_){}
}

/* 5) Tarik order ikut order_id dari Apps Script */
async function fetchOrderById(orderId){
  const url = new URL(SHEETS_WEBAPP_URL);
  url.searchParams.set('action','get_order');
  url.searchParams.set('order_id', orderId);
  url.searchParams.set('latest','1');
  const res = await fetch(url.toString(), { headers:{ 'Accept':'application/json' } });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json().catch(()=> ({}));
  const raw = data?.payload ?? data;
  const payload = (typeof raw === 'string') ? JSON.parse(raw) : raw;
  if (!payload || typeof payload !== 'object') throw new Error('Payload not found');
  return { payload, orderId: data?.orderId || orderId };
}

/* 6) Pastikan setiap kali populateQuotation dipanggil, kita tambah extra field dalam payload */
(function reinforcePayloadExtras(){
  if (typeof populateQuotation !== 'function') return;
  const __origPopulateQuotation = populateQuotation;
  populateQuotation = function(items, totals, payment){
    __origPopulateQuotation(items, totals, payment);
    if (LAST_ORDER_PAYLOAD){
      LAST_ORDER_PAYLOAD.raw = { 
        readyProductItems, sewReadyItems,
        customItems,      sewCustomItems,
        readymadeItems,   sewRMItems
      };
      LAST_ORDER_PAYLOAD.invoice_no = (qInvNo && qInvNo.textContent) || '';
      LAST_ORDER_PAYLOAD.client_ref = (qInvNo && qInvNo.textContent) || '';
    }
  };
})();

/* 7) Tambah listener untuk butang EDIT ORDER */
(function attachEditHandler(){
  const btn = document.getElementById('btnEditOrder');
  if (!btn) return;
  btn.addEventListener('click', async ()=>{
    const orderId = prompt('Masukkan ORDER ID yang ingin diedit:');
    if (!orderId) return;
    try{
      const { payload, orderId: oid } = await fetchOrderById(orderId.trim());
      applyPayloadToForm(payload, oid);
      alert('Order berjaya dimuatkan. Anda boleh edit & submit semula.');
      try{ history.replaceState(null,'', location.pathname + '#edit=' + encodeURIComponent(oid)); }catch(_){}
    }catch(err){
      console.error(err);
      alert('Maaf, order tidak ditemui atau API tidak memulangkan data yang lengkap.');
    }
  });
})();

/* 8) Tambah safeguard: pastikan extras diset tepat sebelum submit juga */
(function patchSendToSheets(){
  if (typeof sendToSheets !== 'function') return;
  const __origSend = sendToSheets;
  // eslint-disable-next-line no-global-assign
  sendToSheets = async function(payload){
    if (payload){
      payload.raw = { 
        readyProductItems, sewReadyItems,
        customItems,      sewCustomItems,
        readymadeItems,   sewRMItems
      };
      payload.invoice_no = (qInvNo && qInvNo.textContent) || payload.invoice_no || '';
      payload.client_ref = (qInvNo && qInvNo.textContent) || payload.client_ref || '';
    }
    return __origSend(payload);
  };
})();
