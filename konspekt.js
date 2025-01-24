// Backend bilan ishlash
// Request - so'rov
// Response - javob

// Request types
// Get - mahsulotlar ro'yxatini olish uchun
// Post - mahsulotga mahsulot qo'shish uchun
// Patch - yaratilgan mahsulotni yangilash
// Put - ma'lum qismi emas hammasini o'zgartirganda
// Delate - o'xhirish uchun

// fetch("") sorov yuboriladigan joy

// Asosiy Tushunchalar
// HTTP (Hypertext Transfer Protocol) - bu ma'lumotlarni Internet orqali uzatish uchun ishlatiladigan protokol.
// Endpoint - Bu serverdagi ma'lum bir manzil (URL) bo'lib, ma'lum bir maqsadga xizmat qiladi, masalan, ma'lumotlarni olish yoki yangilash.
// HTTP Metodlari (So'rov Turlari):
// GET - Serverdan ma'lumot olish uchun ishlatiladi. Bu so'rov ma'lumotlarni o'zgartirmaydi.
// POST - Yangi ma'lumotlarni serverga yuborish uchun ishlatiladi, masalan yangi foydalanuvchi yoki ma'lumot qo'shish.
// PUT - Mavjud ma'lumotni to'liq yangilash uchun ishlatiladi. PUT metodi nishonga olingan resursning to'liq yangi versiyasini taqdim etadi.
// PATCH - Mavjud ma'lumotning faqat bir qismini yangilash uchun ishlatiladi.
// DELETE - Serverdagi ma'lumotni o'chirish uchun ishlatiladi.

// Status Kodlari - Javob sifatida qaytadigan kodlar bo'lib, so'rovning muvaffaqiyatli yoki muvaffaqiyatsizligi haqida ma'lumot beradi. Masalan, 200 OK muvaffaqiyatli so'rovni, 404 Not Found esa mavjud bo'lmagan resursga qilingan so'rovni bildiradi.

// 1xx: Ma'lumotli
// 100 Continue: Mijoz davom ettirishi mumkin, server so'rovni qabul qilishni boshlagan.
// 101 Switching Protocols: Server mijozning protokolni o'zgartirish so'rovini qabul qilgan.
// 2xx: Muvaffaqiyat
// 200 OK: So'rov muvaffaqiyatli bajarildi va javob ma'lumotlari qaytarildi.
// 201 Created: POST yoki PUT so'rovi orqali yangi resurs muvaffaqiyatli yaratildi.
// 202 Accepted: So'rov qabul qilindi, lekin hali bajarilmagan.
// 204 No Content: So'rov muvaffaqiyatli bajarildi, lekin javobda hech qanday ma'lumot yo'q.
// 3xx: Yo'naltirish
// 301 Moved Permanently: So'rov qilingan resurs doimiy ravishda yangi URLga ko'chirilgan.
// 302 Found: Bu vaqtincha yo'naltirish, so'rov qilingan resurs boshqa joyda.
// 304 Not Modified: Keshlangan nusxa hali ham yaroqli, yangilash talab qilinmaydi.
// 4xx: Mijoz xatosi
// 400 Bad Request: Server so'rovni tushunmadi qandaydir xato tufayli.
// 401 Unauthorized: Autentifikatsiya talab qilinadi yoki muvaffaqiyatsiz bo'lgan.
// 403 Forbidden: Server so'rovni tushundi, lekin uni bajarishga ruxsat bermaydi.
// 404 Not Found: So'rov qilingan resurs topilmadi.
// 405 Method Not Allowed: So'rov qilingan metod ushbu resurs uchun ruxsat etilmagan.
// 5xx: Server xatosi
// 500 Internal Server Error: Serverda kutilmagan holat ro'y berdi va so'rovni bajarish mumkin emas.
// 501 Not Implemented: Server so'rov qilingan funksiyani qo'llab-quvvatlamaydi yoki uni amalga oshira olmaydi.
// 502 Bad Gateway: Server boshqa serverdan noto'g'ri javob oldi.
// 503 Service Unavailable: Server hozircha mavjud emas (masalan, ortiqcha yuk tufayli yoki texnik ta'mirlash ishlari sababli).
// 504 Gateway Timeout: Server boshqa serverdan vaqtida javob ololmadi.

// JavaScript-da fetch() API orqali Backend bilan Ishlash
// JavaScript-da fetch() funksiyasi orqali backendga so'rovlar yuboriladi va javoblar qabul qilinadi. fetch() asinxron operatsiya bo'lib, Promise qaytaradi.  GET va POST metodlari bilan ishlash misollari :
// fetch('https://api.mysite.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// fetch('https://api.mysite.com/products', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: 'Yangi Mahsulot',
//       price: 100
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
