// setting what each button has to do
let eatingHome = null;

document.getElementById("yesBtn").addEventListener("click", () =>
{
    eatingHome = "Yes";
});

document.getElementById("noBtn").addEventListener("click", () =>
{
    eatingHome = "No";
});

document.getElementById("confirmBtn").addEventListener("click", () =>
{
    const selectedPerson = document.querySelector('input[name = "miembro"]:checked');

    if(!selectedPerson)
    {
        alert("Please select a person. ");
        return;
    }

    if(!eatingHome)
    {
        alert("Please select Yes or No. ");
        return;
    }

    const person = selectedPerson.value;

    fetch("https://script.google.com/macros/s/AKfycbymIWeoXFhASXZalY2o0Tv2_EqnKcsxdDu4jiSzamt9RDS72uVCytImV7u1koVhMKm8/exec", {
        method: "POST",
        body: JSON.stringify({
            person: person,
            answer: eatingHome
        })
    })
    .then(() => {
        alert("Response saved!");
    })
    .catch((error) => {
        console.log(error);
        alert("Error saving response.");
    });
})

