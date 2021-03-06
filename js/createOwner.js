// http://127.0.0.1:5500/createOwner.html 
$("#owners-create-form").on("submit", async (event) => {
    event.preventDefault();
    const firstName = $("#firstName").val();
    if (!firstName) {
      $("#firstName").addClass("is-invalid");
      return;
    } else {
      $("#firstName").removeClass("is-invalid");
    }
    const lastName = $("#lastName").val();
    if (!lastName) {
      $("#lastName").addClass("is-invalid");
      return;
    } else {
      $("#lastName").removeClass("is-invalid");
    }
    const email = $("#email").val();
    if (!email) {
      $("#email").addClass("is-invalid");
      return;
    } else {
      $("#email").removeClass("is-invalid");
    }
    const phone = $("#phone").val();
    if (!phone) {
      $("#phone").addClass("is-invalid");
      return;
    } else {
      $("#phone").removeClass("is-invalid");
    }
    const address = $("#address").val();
    if (!address) {
      $("#address").addClass("is-invalid");
      return;
    } else {
      $("#address").removeClass("is-invalid");
    }
    console.log("submit", firstName, lastName, email, phone, address);
  
    const data = await fetch("http://localhost:8000/api/owners/create/", {
      method: "POST",
      headers: {            Authorization: "Token 7dd11c06a8d8aa9ae4646368220d329ee65a033d",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name:  lastName,
            email,
            phone,
            address, 
        }),
    });
    const json = await data.json();
    console.log(json);
    window.location.href = "/";
})