export type CommercialPriceRow = readonly [cabins: string, price: string]

export const ACTIVATION_PRICES: readonly CommercialPriceRow[] = [
  ["1 a 3", "$99.000"],
  ["4 a 7", "$150.000"],
  ["8 a 10", "$250.000"],
  ["Más de 11", "A cotizar"],
]

export const ANNUAL_PRICES: readonly CommercialPriceRow[] = [
  ["1 a 3", "$250.000"],
  ["4 a 7", "$370.000"],
  ["8 a 10", "$550.000"],
  ["Más de 11", "A cotizar"],
]

export const LOW_SEASON_MESSAGE = "De abril a noviembre no paga nada."

export const ACTIVATION_SUMMARY =
  "La activación se paga una sola vez: $99.000 para 1 a 3 cabañas, $150.000 para 4 a 7, $250.000 para 8 a 10 y, si tienes más de 11, preparamos una cotización."

export const ANNUAL_SUMMARY =
  "La anualidad cuesta $250.000 para 1 a 3 cabañas, $370.000 para 4 a 7 y $550.000 para 8 a 10; para más de 11, el valor es a cotizar. Se cobra solo entre diciembre y marzo."
