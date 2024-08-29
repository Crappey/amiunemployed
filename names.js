function checkName() {
    const dropdown = document.getElementById('namesList');
    const selectedName = dropdown.value;
    const nameToCompare = 'Adam'

    if (selectedName === nameToCompare){
        response.textContent = "You have a job, congrats";
    } else {
        response.textContent = "You have no job and you are worthless; have a blessed day!";
    }

}