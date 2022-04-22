// progressive web application PWAs
// service worker registered
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
    .then(()=> console.log('service worker registered'))
    .catch(()=> console.log('serive worker not registered'))
  }