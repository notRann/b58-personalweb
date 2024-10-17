function sendToMail() {
  event.preventDefault();
  const inputName = document.getElementById("input-name").value;
  const inputEmail = document.getElementById("input-email").value;
  const inputPhone = document.getElementById("input-phone").value;
  const inputSubject = document.getElementById("input-subject").value;
  const inputMessage = document.getElementById("input-message").value;

  if (inputName == "") {
    return alert("Nama tidak boleh kosong");
  } else if (inputEmail == "") {
    return alert("Email tidak boleh kosong");
  } else if (inputPhone == "") {
    return alert("Nomor Hp tidak boleh kosong");
  } else if (inputSubject == "") {
    return alert("subject tidak boleh kosong");
  } else if (inputMessage == "") {
    return alert("Pesan tidak boleh kosong");
    //   } else {
    //     alert("data anda telah disimpan");
  }

  console.log(inputName);
  console.log(inputEmail);
  console.log(inputPhone);
  console.log(inputSubject);
  console.log(inputMessage);

  const a = document.createElement("a");
  a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${encodeURIComponent(
    inputMessage
  )}`;
  a.click();
}
