document.getElementById('openModalBtn').addEventListener('click', function() {
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


