$('#file').on('change', function() {
    var fd = new FormData();
    fd.append('image', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/image',
        data: fd,
        processData: false,
        contentType: false,
        success: function(res) {
            $('#img').attr('src', res[0].image);
            $('#hiddenImg').val(res[0].image);
        }
    })
})

