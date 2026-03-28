import { createTheme, type MantineColorsTuple } from '@mantine/core';

const navy: MantineColorsTuple = [
  '#eef1f7',
  '#d5dbe9',
  '#a8b4d0',
  '#788bb7',
  '#5069a2',
  '#3a5694',
  '#2d4a8a',
  '#243878',
  '#1a2d6b',
  '#1a2744',
];

const gold: MantineColorsTuple = [
  '#fdf8ee',
  '#f5edcc',
  '#ecd99c',
  '#e3c468',
  '#dbb43d',
  '#d6a821',
  '#c9a014',
  '#b28a0c',
  '#9a7708',
  '#c9a84c',
];

export const theme = createTheme({
  colors: { navy, gold },
  primaryColor: 'navy',
  primaryShade: 9,
  fontFamily: 'Lato, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
});
