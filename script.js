
document.addEventListener("DOMContentLoaded", function() {
    // Select the input elements by their respective IDs
    var nname = document.querySelector("#nname");
    var state = document.querySelector("#state");
    var city = document.querySelector("#city");
   
    // Add event listeners to the input elements
  
    var names = document.querySelector("#names"); // Select the #names element
    var namePattern = /^[a-zA-Z\s]{3,15}$/;

nname.addEventListener("input", function (event) {
    if (event.target.value.trim() === "") {
        names.textContent = "Field cannot be empty";
        nname.style.border = "1px solid red";
        names.style.color = "red";
    } else if (event.target.value.trim().length < 3) {
        names.textContent = "Name must be at least 3 letters";
        nname.style.border = "1px solid red";
        names.style.color = "red";
    } else if (event.target.value.trim().length > 15) {
        names.textContent = "Name must be at most 15 letters";
        nname.style.border = "1px solid red";
        names.style.color = "red";
    } else if (!namePattern.test(event.target.value.trim())) {
        names.textContent = "Name must not contain special characters or digits";
        nname.style.border = "1px solid red";
        names.style.color = "red";
    } else {
        names.textContent = "";
        nname.style.border = "1px solid black";
    }
});

    var email=document.querySelector("#email");
    email.addEventListener("input",function(details){
        
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        
        if( !emailPattern.test(details.target.value)){
            emails.textContent = "Enter valid email: eg: john@gmail.com"; // Set the error message
            email.style.border = "1px solid red"; // Change the border color
            emails.style.color="red";
        }else{
            emails.textContent = ""; // Clear the error message when the input is valid
            email.style.border = "1px solid black"; 
        }
    })
    


    var state = ["Select-state","Maharashtra", "Gujrat", "Uttar-Pradesh", "Tamil-Nadu", "Assam"];

    var select = document.querySelector("#state");
    var cityselect = document.querySelector("#city");
    

    var maha=["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Solapur", "Amravati", "Kolhapur", "Akola"];
    var guj=["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Jamnagar", "Bhavnagar", "Anand", "Bharuch", "Junagadh"];
    var up=["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad", "Ghaziabad", "Meerut", "Noida", "Bareilly", "Aligarh"];
    var tamil=["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Thanjavur"];
    var aasam=["Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Tezpur", "Nagaon", "Tinsukia", "Barpeta", "Dhubri", "Karimganj"];
    

    state.forEach(function (s) {
        var option = document.createElement("option");
        option.value = s;
        option.text = s;
        select.appendChild(option);
    });
    
    select.addEventListener("change", function (event) {
        // Clear the existing city options
        cityselect.innerHTML = "";
    
        var selectedValue = event.target.value; // Get the selected state value
    
        var cities=[]; // Declare a variable to store the city array
    
        // Assign the appropriate city array based on the selected state
        if (selectedValue === "Maharashtra") {
            cities = maha;
        } else if (selectedValue === "Gujrat") {
            cities = guj;
        } else if (selectedValue === "Uttar-Pradesh") {
            cities = up;
        } else if (selectedValue === "Tamil-Nadu") {
            cities = tamil;
        } else if (selectedValue === "Assam") {
            cities = aasam;
        }
    
        // Add the city options to the cityselect dropdown
        if (cities) {
            cities.forEach(function (c) {
                var opt = document.createElement("option");
                opt.value = c;
                opt.text = c;
                cityselect.appendChild(opt);
            });
        }
    });
    var mobile = document.querySelector("#mobile");
    var mobiles = document.querySelector("#mobiles");
    
    mobile.addEventListener("input", function (details) {
        console.log(details);
        var mobilePattern = /^[0-9]+$/;
    
        if (!mobilePattern.test(details.target.value)) {
            mobiles.innerHTML = "Enter digits only";
            mobiles.style.color = "red";
            mobile.style.border = "2px solid red";
        } else if (details.target.value.length !== 10) {
            mobiles.innerHTML = "Enter a 10-digit number";
            mobiles.style.color = "red";
            mobile.style.border = "2px solid red";
        } else {
            mobiles.innerHTML = "";
            mobile.style.border = "2px solid green";
        }
    });

    
    var submit=document.querySelector("#submitt");

    submit.addEventListener("click",function(details){
        console.log(details);
    })
    
    
    
    
});