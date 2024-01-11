async function sendOtp(){
    var eml = document.getElementById('Email').value;
     if  (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(eml) || eml.trim() === "")
    window.alert("Enter valid email Id")
    else
    {
      var email = encodeURIComponent(eml);
        try {
            const response = await axios.put(`http://127.0.0.1:8000/forgotPassword?email=${email}`);            
            console.log(response);
            var otp=response.data.temporaryPassword;
            window.alert(`Here's your temporary password, please use it to reset your password: ${otp}`);
			window.location = "./reset.html";
          } catch (err) {
            alert('Some error occured')
          }
    }
}