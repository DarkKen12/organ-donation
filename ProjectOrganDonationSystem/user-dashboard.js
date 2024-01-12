// user-dashboard.js
let FirstName;
let LastName;
let email;
let mobile;
let address;
let bloodgroup;
let hospitalid;
let statusPerson;
let hdata;

async function getHospitalsDetails(){
    const response= await axios.get("http://127.0.0.1:8000/getHospital");
     hdata=response.data;
   
}
getHospitalsDetails();

async function userDetails(){

    const authToken  = sessionStorage.getItem('authToken');
    if(authToken){
        try{
            const id=authToken;
            const response =  await axios.get(`http://127.0.0.1:8000/getUsersByTokenId?user_id=${id}`);
            FirstName=response.data.first_name;
            LastName=response.data.last_name;
            email=response.data.email;
            mobile=response.data.mobile;
            address=response.data.address;
            bloodgroup=response.data.bloodGroup;
            const hid=response.data.hospital_id;
            const hospitalname=hdata[hid-1].hospital_name;
            if(response.data.isAlive){
                statusPerson="Alive"
            }
            else{
                statusPerson="Dead"
            }
            const container = document.getElementById("profile-section");
    container.innerHTML=`<p id="First-Name"><strong>First Name:</strong> ${FirstName}</p><p id="Last-Name"><strong>Last Name:</strong> ${LastName}</p>  <p id="Email"><strong>Email:</strong> ${email}</p><p id="Mobile"><strong>Mobile:</strong> ${mobile}</p><p id="Address"><strong>Address:</strong> ${address}</p><p id="Blood-Group"><strong>Blood Group:</strong> ${bloodgroup}</p><p id="Hospital-id"><strong>Hospital Name:</strong> ${hospitalname}</p><p id="Status"><strong>Status:</strong> ${statusPerson}</p>`
        }
        catch(err){
            console.log(err);
        }
        }
}
 document.addEventListener('DOMContentLoaded', function () {
    
    userDetails();    
    // Get all tab links and tab content elements
    const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
    // const tabContents = document.querySelectorAll('.tab-content .tab-pane');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log(tabLinks, tabContents);

    // Add click event listeners to the tab links
    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'active' class from all tab links
            tabLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked tab link
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(function (content) {
                content.classList.add('d-none');
            });

            // Show the corresponding tab content based on the clicked link
            const tabId = this.getAttribute('href').substring(1);
            const selectedTabContent = document.getElementById(tabId);

            // Toggle the 'd-none' class to display/hide the tab content
            selectedTabContent.classList.toggle('d-none');
        });
    });
});

 function logout(){
    sessionStorage.clear();
    window.location="index.html";
    console.log('Successfully logged out')

}
