document.getElementById('myModal').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('openModalBtn').addEventListener('click', function () {
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


document.getElementById('signin_btn').addEventListener('click', function () {
    event.preventDefault()
    
    const username = document.getElementById('user_name').value;
    const password = document.getElementById('user_pw').value;
    const csrfToken = document.querySelector('[name="csrfmiddlewaretoken"]').value;

    fetch('/submit_signin/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({user_name: username, user_pw: password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login Successful !') {
            alert("Welcome, " + data.user_name + "!");
        } else {
            alert("User Not Found");
        }
    })
    .catch(() => {
        alert("Error");
    });
});
