import { SCard } from "./Card";

export interface SList {
  id?: number;
  header: string;
  cards: SCard[];
}
