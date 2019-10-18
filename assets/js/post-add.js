$.ajax({
    type: 'get',
    url: '/categories',
    success: function(res) {
        var html = template('addTpl', {data: res});
        $('#category').html(html);
    }
})

$('#feature').on('change', function() {
    var fd = new FormData();
    fd.append('thum', this.files[0]);
    $.ajax({
        type: 'get',
        url: '/post',
        data: fd,
        processData: false,
        contentType: false,
        success: function(res) {

        }
    })
    $('.thumbnail').attr('src', res[0].avatar).show();
    $('#thum').val(res[0].avatar);
})

$('#addForm').on('submit', function() {
    $.ajax({
        type: 'post',
        url: '/posts',
        data: $(this).serialize(),
        success: function(res) {
            location.href = 'posts.html';
        }
    })
    return false;
})