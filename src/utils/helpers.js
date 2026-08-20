/**
 * Utilitas umum helper functions
 */

/**
 * Menggabungkan classNames secara kondisional
 * @param  {...(string|boolean|undefined|null)} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format mata uang Rupiah
 * @param {number} amount 
 * @returns {string}
 */
export function formatRupiah(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}
