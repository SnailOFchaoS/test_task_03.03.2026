export interface ProductTableRow {
	id: number
	selected: boolean
	name: string
	category: string
	vendor: string
	article: string
	rating: number
	price: number
}

export const productsTableMock: ProductTableRow[] = [
	{ id: 1, selected: false, name: 'USB Флэшкарта 16GB', category: 'Аксессуары', vendor: 'Samsung', article: 'RCH45Q1A', rating: 4.3, price: 48652 },
	{ id: 2, selected: false, name: 'Утюг Braun TexStyle 9', category: 'Бытовая техника', vendor: 'Braun', article: 'DFCHQ1A', rating: 4.9, price: 4233 },
	{ id: 3, selected: true, name: 'Смартфон Apple iPhone 17', category: 'Телефоны', vendor: 'Apple', article: 'GUYHD2-X4', rating: 4.7, price: 88652 },
	{ id: 4, selected: false, name: 'Игровая консоль PlayStation 6', category: 'Игровые приставки', vendor: 'Sony', article: 'HT45Q21', rating: 4.1, price: 56236 },
	{ id: 5, selected: false, name: 'Фен Dyson Supersonic Nural', category: 'Электроника', vendor: 'Dyson', article: 'FJHHGF-CR4', rating: 3.3, price: 48652 },
	{ id: 6, selected: false, name: 'Наушники Sony WH-1000XM6', category: 'Аксессуары', vendor: 'Sony', article: 'SN-XM6-2025', rating: 4.8, price: 32990 },
	{ id: 7, selected: false, name: 'Ноутбук Lenovo ThinkPad X1', category: 'Компьютеры', vendor: 'Lenovo', article: 'TP-X1-9GEN', rating: 4.5, price: 124500 },
	{ id: 8, selected: false, name: 'Кофемашина DeLonghi Magnifica', category: 'Бытовая техника', vendor: 'DeLonghi', article: 'DL-MAG-EVO', rating: 4.6, price: 45900 },
	{ id: 9, selected: false, name: 'Умные часы Samsung Galaxy Watch 7', category: 'Электроника', vendor: 'Samsung', article: 'GW7-46-BT', rating: 4.2, price: 28900 },
	{ id: 10, selected: false, name: 'Планшет iPad Pro 13"', category: 'Планшеты', vendor: 'Apple', article: 'IPD-PRO-13', rating: 4.9, price: 112000 },
	{ id: 11, selected: false, name: 'Монитор LG UltraWide 34"', category: 'Мониторы', vendor: 'LG', article: 'LG-34WN80C', rating: 4.4, price: 38900 },
	{ id: 12, selected: false, name: 'Клавиатура Logitech MX Keys', category: 'Аксессуары', vendor: 'Logitech', article: 'LOG-MX-K-B', rating: 4.7, price: 12990 },
	{ id: 13, selected: false, name: 'Робот-пылесос iRobot Roomba i5', category: 'Бытовая техника', vendor: 'iRobot', article: 'RMB-I5-PLUS', rating: 3.8, price: 54900 },
	{ id: 14, selected: false, name: 'Внешний SSD Samsung T9 2TB', category: 'Накопители', vendor: 'Samsung', article: 'T9-2TB-EXT', rating: 4.6, price: 18900 },
	{ id: 15, selected: false, name: 'Микрофон Blue Yeti X', category: 'Аудио', vendor: 'Blue', article: 'BL-YETI-X', rating: 4.0, price: 15900 },
	{ id: 16, selected: false, name: 'Веб-камера Logitech C1000e', category: 'Аксессуары', vendor: 'Logitech', article: 'LOG-C1000E', rating: 3.5, price: 24900 },
	{ id: 17, selected: false, name: 'Электросамокат Xiaomi Pro 3', category: 'Транспорт', vendor: 'Xiaomi', article: 'XMI-PRO3-45', rating: 4.3, price: 42900 },
	{ id: 18, selected: false, name: 'Умная колонка Amazon Echo Dot', category: 'Умный дом', vendor: 'Amazon', article: 'ECHO-DOT-5', rating: 4.1, price: 4990 },
	{ id: 19, selected: false, name: 'Электрическая зубная щётка Oral-B iO', category: 'Бытовая техника', vendor: 'Oral-B', article: 'OB-IO-9S', rating: 4.8, price: 14900 },
	{ id: 20, selected: false, name: 'Игровая мышь Razer DeathAdder V3', category: 'Аксессуары', vendor: 'Razer', article: 'RZ-DAV3-PRO', rating: 4.7, price: 8990 },
]