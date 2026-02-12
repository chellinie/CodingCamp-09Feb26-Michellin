// Welcome name
const userName = prompt("Input your name");
if (userName) {
  document.getElementById("welcome").innerText = `Hi ${userName}, Welcome To Website`;
}

// Form
const form = document.getElementById("messageForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birth = document.getElementById("birth").value;
    const msg = document.getElementById("msg").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name || !birth || !gender || !msg) {
      alert("Please fill all fields!");
      return;
    }

    document.getElementById("time").innerText = new Date();
    document.getElementById("rName").innerText = name;
    document.getElementById("rBirth").innerText = birth;
    document.getElementById("rGender").innerText = gender.value;
    document.getElementById("rMsg").innerText = msg;
  });
}
