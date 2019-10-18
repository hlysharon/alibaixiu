$.ajax({
    type: 'get',
    url: '/slides',
    success: function(res) {
        var html = template('slidesTpl', {data: res});
        $('#slidesBox').html(html);
    }
})

$('#file').on('change', function() {
    var file = this.files[0];
    var fd = new FormData();
    fd.append('image', file);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: fd,
        success: function(res) {
            $('#thumbnail').val(res[0].image);
            $('.thumbnail').attr('src', res[0].image);
        }
    })
})

$('#slidesForm').on('submit', function() {
    $.ajax({
        type: 'post',
        url: '/post',
        data: $(this).serialize(),
        success: function() {
            location.reload();
        }
    })
    return false;
})

$('#slidesBox').on('click', '#delete', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'delete',
        url: '/delete'+id,
        success:function() {
            location.reload();
        }
    })
})