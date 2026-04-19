// Ye code ads ko control karega
async function startAds() {
  try {
    const { AdMob } = Capacitor.Plugins;
    
    // AdMob ko shuru karo
    await AdMob.initialize();

    // Banner ad dikhao (Niche wali side par)
    await AdMob.showBanner({
      adId: 'ca-app-pub-3940256099942544/6300978111', // Test ID hai
      position: 'BOTTOM_CENTER',
      margin: 0,
      isTesting: true 
    });
    
    console.log("Ads ready and showing!");
  } catch (e) {
    console.log("Ads error: ", e);
  }
}

// Jab puri game load ho jaye tab ad dikhao
window.onload = startAds;
