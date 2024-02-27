export interface Country {
  name: string;
  flags: { png: string };
  population: number;
  region: string;
  capital?: string;
}

export interface CountryCardProps {
  country: {
    name: string;
    flags: { png: string };
    population: number;
    region: string;
    capital?: string;
  };
}

export interface FilterByRagionProps {
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
