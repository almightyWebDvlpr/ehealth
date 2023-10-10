function sharePage() {
    const currentURL = window.location.href;
    console.log(currentURL)
    const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`;
    
    // Open a new window/tab with the share URL
    window.open(shareURL, '_blank');
  }