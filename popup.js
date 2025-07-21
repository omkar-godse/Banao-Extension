document.getElementById('get-title').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const title = tabs[0].title;
    const container = document.getElementById('title-container');
    container.textContent = title;
    container.style.display = 'block';
    // Remove any existing animation classes
    container.classList.remove('show');
    
    void container.offsetWidth;
   
    container.classList.add('show');
  });
});
