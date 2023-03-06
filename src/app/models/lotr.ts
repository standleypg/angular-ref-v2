export interface Lotr {
  docs: [LotrContent];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
export interface LotrContent {
  _id: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  number: number;
  budgetInMillions: 675;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
}
