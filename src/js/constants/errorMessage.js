import { LOTTO_CONSTRAINT } from './lottoConstraint.js';

export const ERROR_MESSAGE = {
  INVALID_PRICE_UNIT: `구입 금액의 단위는 ${LOTTO_CONSTRAINT.PRICE_UNIT}원입니다. \n${LOTTO_CONSTRAINT.PRICE_UNIT}원의 단위로 금액을 입력해주세요.`,
  INVALID_OVER_MIN_PRICE: `구입 금액은 ${LOTTO_CONSTRAINT.PRICE_UNIT}원 이상입니다. \n${LOTTO_CONSTRAINT.PRICE_UNIT}원 이상의 금액을 입력해주세요.`,
};
