async function sendRequest(){
    var fname = document.getElementById('FirstName').value;
    var lname = document.getElementById('LastName').value;
    var organ_type= document.getElementById('organ-type').value;
    if (fname.trim() === '' || lname.trim() === '' || organ_type.trim() === '') {
        document.getElementById('errorMessage').innerText = '*All fields must be filled out';
    } 
    else {
        //add the donate request functionality
    }