// Service Worker ကို Install လုပ်ခြင်း
self.addEventListener('install', (e) => {
  self.skipWaiting();
  console.log('SPT Service Worker: Installed');
});

// App ကို Offline ဖြစ်နေချိန်မှာလည်း အလုပ်လုပ်နိုင်အောင် ကူညီပေးခြင်း
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});

// Activate လုပ်ခြင်း
self.addEventListener('activate', (e) => {
  console.log('SPT Service Worker: Activated');
});