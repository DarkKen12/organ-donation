
async function validatePassword(){
    var password=document.getElementById('password').value;
    var email = document.getElementById('Email').value;

    if(password.length <8 || password.trim() === "" ) 
    document.getElementById('errorMessage').innerText = '*Enter valid Password';
    else if  (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email.trim() === "")
    document.getElementById('errorMessage').innerText = '*Enter valid Username';
    else
    {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/authenticateUser?email=${email}&password=${password}`);
            console.log('Response from server:', response.data);
            const token=response.data.token;
            sessionStorage.setItem('authToken',token);
            window.location.href='user-dashboard.html';
          } catch (err) {
            console.error('Error:', err);
            window.alert('Some error occurred')
          }
    }
}