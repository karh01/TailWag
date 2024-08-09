//SWITCHER

function toggleWhySection(index) {
    const cruiseSections = document.querySelectorAll('#switcher1 > section');

    // Hide all sections
    cruiseSections.forEach(section => {
        section.classList.remove('currentItem');
        section.classList.add('hiddenItem');
    });

    // Show the selected section
    cruiseSections[index].classList.remove('hiddenItem');
    cruiseSections[index].classList.add('currentItem');
}
