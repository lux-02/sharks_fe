document.getElementById('openModalBtn1').addEventListener('click', function() {
    console.log('Button 1 clicked'); // 이 메시지가 콘솔에 표시되는지 확인
    document.getElementById('myModal').classList.add('show');
});

document.getElementById('openModalBtn2').addEventListener('click', function() {
    console.log('Button 2 clicked'); // 이 메시지가 콘솔에 표시되는지 확인
    document.getElementById('myModal').classList.add('show');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.remove('show');
});

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}


