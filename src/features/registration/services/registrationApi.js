/**
 * Service API untuk registrasi pendaftaran
 */

export async function submitRegistration(payload) {
  // Simulasi pengiriman data asinkron ke backend (misal: Laravel / Go / Node.js)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Payload Registrasi Terkirim:', payload);
      resolve({
        success: true,
        message: 'Registrasi berhasil disubmit!',
        data: payload,
      });
    }, 800);
  });
}
