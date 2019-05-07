/**
 * @param {string} currency - Three letter currency code
 * @param {string|number} value - The value to format
 * @param {string} locale - Optional display locale
 * @returns {string}
 */

export const formatPrice = ({ currency, value, locale = 'en-US' }) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

/**
 * @param {string} date - Any valid date input
 * @returns {string}
 */

export const formatDate = date =>
  new Date(date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
