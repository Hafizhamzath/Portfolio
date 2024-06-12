const header= document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('navbarDark');
    }
    else
    {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactform');

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('comment');

        nameInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-invalid');
        subjectInput.classList.remove('is-invalid');
        messageInput.classList.remove('is-invalid');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('is-invalid');
            isValid = false;
        }

        if (!isValidEmail(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            subjectInput.classList.add('is-invalid');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageInput.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }
        
    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

document.getElementById('contactform').onsubmit = function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
};



        