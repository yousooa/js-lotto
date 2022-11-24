import { ERROR_MESSAGE, LOTTO_CONSTRAINT } from './constants/index.js';

const isPriceUnit = (priceInput) => priceInput % LOTTO_CONSTRAINT.PRICE_UNIT === 0;

const isOverMinPrice = (priceInput) => priceInput >= LOTTO_CONSTRAINT.PRICE_UNIT;

export const validatePriceInput = (priceInput) => {
  if (!isOverMinPrice(priceInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_OVER_MIN_PRICE);
  }

  if (!isPriceUnit(priceInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_PRICE_UNIT);
  }
};
