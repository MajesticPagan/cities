export type CountryName = {
	common: string;
	official: string;
};

export type CountryMedia = {
	png: string;
	svg: string;
};

export type Country = {
	altSpellings: string[];
	area: number;
	borders: string[];
	capital: string[];
	capitalInfo: {
		latlng: string[];
	};
	car: {
		side: string;
		signs: any;
	};
	cca2: string;
	cca3: string;
	ccn3: string;
	cioc: string;
	coatOfArms: CountryMedia;
	continents: string[];
	currencies: {
		[key: string]: object;
	};
	demonyms: {
		[key: string]: object;
	};
	fifa: string;
	flag: string;
	flags: {
		alt: string;
	} & CountryMedia;
	gini: {
		[key: string]: number;
	};
	idd: {
		root: string;
		suffixes: string[];
	};
	independent: boolean;
	landlocked: true;
	languages: {
		[key: string]: string;
	};
	latlng: number[];
	maps: {
		googleMaps: string;
		openStreetMaps: string;
	};
	name: {
		nativeName: CountryName;
	} & CountryName;
	population: number;
	postalCode: {
		format: string;
		regex: string;
	};
	region: string;
	startOfWeek: string;
	status: string;
	subregion: string;
	timezones: string[];
	tld: string[];
	translations: {
		[key: string]: object;
	};
	unMember: boolean;
};
