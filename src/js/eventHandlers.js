import { $ } from './utils/DOM.js';
import { getLottoNumbers } from './purchasedLottoNumbers.js';
import { validatePriceInput } from './validatePrice.js';

import {
  showPurchasedLotto,
  showWinningNumbersForm,
  renderLottoCount,
  renderLottoItems,
  showLottoNumbers,
} from './view.js';

export const handleSubmit = (e) => {
  e.preventDefault();
  try {
    const priceInput = $('[data-cy="lotto-purchase-input"]').valueAsNumber;

    validatePriceInput(priceInput);

    const lottoNumbersList = getLottoNumbers(priceInput);
    const purchasedLottoCount = lottoNumbersList.length;

    showPurchasedLotto();
    showWinningNumbersForm();

    renderLottoCount(purchasedLottoCount);
    renderLottoItems(lottoNumbersList);
  } catch (error) {
    window.alert(error.message);
    console.error(error);
  }
};

export const handleToggleBtn = ({ target }) => showLottoNumbers(target);
