document.addEventListener("DOMContentLoaded", start);
function start(){
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const username = this.querySelector("input[type='text']").value;
        const password = this.querySelector("input[type='password']").value;
    
        fetch('https://deca-backend.onrender.com/api/validateUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"username": username, "password": password})
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.valid){
                alert('Valid user')
            }else{
                alert("Invalid username or password.");
            }
        });
    });
}
  