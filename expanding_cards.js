// Select all the elements with class 'panel'
const panels=document.querySelectorAll('.panel');

// Add click event to each panel
panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active'); // Use 'active' as a string here
    });
});

// Corrected function name
function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    });
}
