function checkName() {
    const selectElement = document.getElementById('namesList');
    const outputElement = document.getElementById('response');
    const selectedName = selectElement.value;
    let outputText = '';

    switch (selectedName) {
        case 'Adam':
            outputText = 'You have a job, congrats!';
            break;
        case 'Fleam':
            outputText = 'You have a job <a href="https://github.com/RaminKav/LostInTime/" target="_blank">and a game!</a> How cool is that??';
            break;
        case 'Joshua':
            outputText = 'Might be cooked';
            break;
        case 'Stephen':
            outputText = 'You finally got a job grats bro!';
            break;
        default:
            outputText = 'Please select an option.';
    }
    outputElement.innerHTML = outputText;

}

function fakeSubmit() {
    alert("Don't got a server bro")
}
