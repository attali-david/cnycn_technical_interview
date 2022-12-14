export interface IHeaderProps {
  setSelectedCity: (arg: ICity) => void;
  setUnit: (arg: boolean) => void;
  unit: boolean;
}

export interface INavProps extends IColorModeProps, IFormProps {}

export interface IFormProps extends IColorModeProps {
  unit: boolean;
  setUnit: (arg: boolean) => void;
  search: string;
  setSearch: (arg: string) => void;
  onCitySelect: (arg: ICity) => void;
  submitHandler: (arg: Event) => void;
  isDropdownOpen: boolean;
  cities: ICity[];
}

export interface IColorModeProps {
  toggler: () => void;
  color: string;
}

export interface IWeather {
  cod: number;
  message: number;
  cnt: number;
  unit: boolean;
  city: {
    name: string;
    sunset: number;
    coord: { lat: number; lon: number };
    state: string;
  };
  list: {
    dt_txt: Date;
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
      feels_like: number;
    };
    weather: { icon: string; main: string }[];
    wind: { gust: number };
  }[];
}

export interface ICity {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export interface IDate {
  date: string;
  temp_min: number;
  temp_max: number;
  description: string;
  icon: string;
  city?: string;
  sunset?: string;
  humidity?: number;
  wind?: number;
  unit?: boolean;
  feels_like?: number;
  hourly: { time: string; temp: number; icon: string }[];
}

export interface IPropsWeather {
  weather: IWeather;
}

export interface IPropsDaily {
  daily: IDate;
}

export interface IPropsDates {
  dates: IDate[];
}

export interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  zoom: number;
  center: { lat: number; lng: number };
}
