import { StaticImageData } from "next/image";

export interface Planet {
  name: string;
  color: string;
  width: number;
  height: number;
  overview: Overview;
  structure: Structure;
  geology: Geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

export interface Overview {
  content: string;
  source: string;
}

export interface Structure {
  content: string;
  source: string;
}

export interface Geology {
  content: string;
  source: string;
}

export interface Images {
  planet: string;
  internal: string;
  geology: StaticImageData;
}
