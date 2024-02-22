
//sets current date and time to the main page

import { format } from 'date-fns';
var clockElement = document.getElementById('clock');
const now = new Date();

const formattedDate = format(now, 'MMMM dd, yyyy, h:mm a');
clockElement.textContent = formattedDate;

document.getElementById('hamburger-btn').addEventListener('click', function() {
    var menu = document.getElementById('hamburger-menu');
        menu.style.display = 'block';
    
    document.getElementById('closeMenu').addEventListener('click', function(){
        menu.style.display = 'none';
    })
})
