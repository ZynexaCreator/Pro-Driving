// Ye code Capacitor ke plugins ko pakray ga
const { AdMob } = Capacitor.Plugins;

async function showAds() {
  try {
    // 1. AdMob ko shuru karo
    await AdMob.initialize();

    // 2. Banner ad dikhao (Niche wali screen par)
    await AdMob.showBanner({
      adId: 'ca-app-pub-3940256099942544/6300978111', // Ye Google ki Test ID hai
      position: 'BOTTOM_CENTER',
      margin: 0,
      isTesting: true 
    });
    
    console.log("Ad success!");
  } catch (e) {
    console.log("Ad error: ", e);
  }
}

// Jab game poori load ho jaye, tab ad dikhao
window.onload = showAds;
