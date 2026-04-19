async function startAds() {
  try {
    // Check karen ke kya hum mobile app ke andar hain
    if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
      const { AdMob } = Capacitor.Plugins;
      await AdMob.initialize();
      await AdMob.showBanner({
        adId: 'ca-app-pub-3940256099942544/6300978111',
        position: 'BOTTOM_CENTER',
        margin: 0,
        isTesting: true 
      });
    }
  } catch (e) {
    console.log("AdMob skipped or error");
  }
}

// Foran chalane ki bajaye 2 second baad chalayen taake game load ho jaye
setTimeout(startAds, 2000);
