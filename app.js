let upBtn = document.getElementById('uploadBtn')
let circleImg = document.getElementById('circleImg')

upBtn.addEventListener('change', (e) => {
    circleImg.src = URL.createObjectURL(e.target.files[0])
})