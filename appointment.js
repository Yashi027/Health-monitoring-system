document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    
    let li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> - ${email} | ${date} at ${time} 
                    <button onclick="removeAppointment(this)">Cancel</button>`;

   
    document.getElementById("appointmentList").appendChild(li);

   
    document.getElementById("appointmentForm").reset();
});


function removeAppointment(button) {
    button.parentElement.remove();
}
