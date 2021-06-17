const copyBtn = document.getElementById('copyBtn')
const urlText = document.getElementById('shorten-url-str')


copyBtn.addEventListener('click', function copyUrl(e) {
    urlText.select();
    document.execCommand('copy');
    alert("New URL Copied!");
})
