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

    alert(person + " answered: " + eatingHome);
})

