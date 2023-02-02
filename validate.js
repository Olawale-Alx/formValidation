'use strict';

const handleSubmit = (e) => {
    e.preventDefault()

    var nameRegex = /[a-zA-Z]{2,}/i;
    var emailRegex = /[\w]{2,}\@[\w]{2,}\.[a-z]{2,}/i;
    var passwordRegex = /([a-zA-Z0-9\W]){8,}/;

    fname = document.getElementById('firstname').value;
    lname = document.getElementById('lastname').value;
    email = document.getElementById('email').value;
    pwd = document.getElementById('passwd').value;
    confirm_pwd = document.getElementById('confirm_pwd').value;
    // alert(fname)

    if (!(nameRegex.test(fname)) || (!nameRegex.test(lname))) {
        document.getElementById('hidden-name').style.display = 'block'
        document.getElementById('hidden-email').style.display = 'none'
        document.getElementById('pass-no-match').style.display = 'none'
        document.getElementById('hidden-password').style.display = 'none'

    }

    else if (!(emailRegex.test(email))) {
        document.getElementById('hidden-email').style.display = 'block'
        document.getElementById('hidden-name').style.display = 'none'
        document.getElementById('pass-no-match').style.display = 'none'
        document.getElementById('hidden-password').style.display = 'none'
    }

    else if (!(passwordRegex.test(pwd))) {
        document.getElementById('hidden-password').style.display = 'block'
        document.getElementById('hidden-name').style.display = 'none'
        document.getElementById('hidden-email').style.display = 'none'
        document.getElementById('pass-no-match').style.display = 'none'
    }

    else if (pwd !== confirm_pwd) {
        document.getElementById('pass-no-match').style.display = 'block'
        document.getElementById('hidden-name').style.display = 'none'
        document.getElementById('hidden-email').style.display = 'none'
        document.getElementById('hidden-password').style.display = 'none'
    }

    else {
        document.getElementById('hidden-name').style.display = 'none'
        document.getElementById('hidden-email').style.display = 'none'
        document.getElementById('pass-no-match').style.display = 'none'
        document.getElementById('hidden-password').style.display = 'none'
        document.getElementById('succ').style.display = 'inline'
    }
}

document.getElementById('register-btn').addEventListener('click', handleSubmit)

$(document).ready(function(){

    $('#submitForm').submit(function(e) {
        e.preventDefault()
    
        var Name = $('#Name').val()
        var Mail = $('#mail').val()
        var Password = $('#pastword').val()
        var url = $(this).attr('action')
    
        $.post(url, {'name':Name, 'mail':Mail, 'pass':Password}).done(function(data) {
            console.log(data)
            console.log(Name)
            $('#success-container').append(`<h2>${url}, ${Mail}</h2>`)

        })
    })
})
