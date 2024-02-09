
let containerQrGenerate = document.getElementById('container-qr-generate')
let qrResult = document.getElementById('qr-result')
let qrGenerator = document.getElementById('qr-generator')
let  qrBtn = document.getElementById('qr-btn')
let  qrBtnDownload = document.getElementById('qr-btn-download')
let  qrBtnShare = document.getElementById('qr-btn-share')
let url = document.getElementById('url')
let qrGenerate = null
qrBtn.addEventListener('click',function(){
    if(url.value=='') return
    qrGenerate = new QRCode(containerQrGenerate, {
        text: url,
        width: 120,
        height: 120,
        colorDark: "#101528",
        colorLight: "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    }
    )
    qrResult.classList.remove('hide')
    qrGenerator.classList.add('hide')
})
qrBtnDownload.addEventListener('click',function(){
    let qrCodeURL = document.querySelector("#container-qr-generate img").src;
    let link = document.createElement('a');
    link.href = qrCodeURL;
    link.download = 'qr_code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

qrBtnShare.addEventListener('click',function(){
    let qrCodeURL = document.querySelector("#container-qr-generate img").src;
    navigator.clipboard.writeText(qrCodeURL)
})


