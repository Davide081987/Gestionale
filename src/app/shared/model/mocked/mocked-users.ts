import { User } from '../interface/user';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Demo',
    email: 'demo@gmail.com',
    password: 'demo',
    telephone: 3385471915,
    referent: 'Davide Trovato',
  },
  {
    id: 2,
    name: 'Pippo',
    email: 'pippo@gmail.com',
    password: 'pippo',
    telephone: 3454561456,
    referent: 'Pippo Rossi',
  },
  {
    id: 3,
    name: 'mario',
    email: 'mario@gmail.com',
    password: 'mario',
    telephone: 332654765756,
    referent: 'Mario Rossi',
  },
  {
    id: 4,
    name: 'Giuseppe',
    email: 'Giuseppe@gmail.com',
    password: 'Giuseppe',
    telephone: 7904356099 /*perchè se inizio il numero per 0 mi da errore*/,
    referent: 'Giuseppe Verdi',
  },
];
