$.ajax({
    type: 'get',
    url: '/comment',
    success: function(res) {
        var html = template('commentsTpl', res);
        $('#commentsBox').html(html);
        var page = template('pageTpl', res)
        $('.pagination').html(page);
    }
})

function dateFormat(date) {
    var date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function changePage(page) {
    $.ajax({
        type: 'get',
        url: '/comment',
        data: {page},
        success: function(res) {
            var html = template('commentsTpl', res);
            $('#commentsBox').html(html);
            var page = template('pageTpl', res)
            $('.pagination').html(page);
        }
    })
}


$('#commentsBox').on('click', '.status', function() {
    var id = $(this).parent().attr('data-id');
    var status = $(this).parent().attr('data-status');
    $.ajax({
        type: 'put',
        url: `/comments/${id}`,
        data: {status:status == 0 ? 1 : 0},
        success: function() {
            location.reload();
        }
    })
})

$('#commentsBox').on('click', '.delete', function() {
    if (confirm('确认要删除吗?')) {
        var id = $(this).parent().attr('data-id');
        $.ajax({
            type: 'delete',
            url: `/delete/${id}`,
            success: function() {
                location.reload();
            }
        })
    }
})