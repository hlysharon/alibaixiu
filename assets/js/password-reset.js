$('#modifyForm').on('submit', function() {
    $.ajax({
        type: 'post',
        url: '/users/password',
        data: $(this).serialize(),
        success: function() {
            location.href = 'login.html';
        }
    })
})