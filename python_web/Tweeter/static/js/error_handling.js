document.getElementById('registration-form').addEventListener('submit', function(event) {
    var formIsValid = true;

    // Check all form fields for errors
    this.querySelectorAll('.form-group').forEach(function(group) {
        var input = group.querySelector('input');
        var errorDiv = group.querySelector('.error-message');

        if (input.value === '' || input.classList.contains('is-invalid')) {
            errorDiv.style.display = 'block';
            formIsValid = false;
        } else {
            errorDiv.style.display = 'none';
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
});
