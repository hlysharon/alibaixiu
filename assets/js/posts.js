$.ajax({
    type: 'get',
    url: '/posts',
    success: function(res) {
        var html = tmeplate('postsTpl', res);
        $('#postsBox').html(html);
        var page = template('pageTpl', res);
        $('.pagination').html(page);
    }
})

function dateFormat(date) {
    var date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function changePage(pageNum) {
    $.ajax({
        type: 'get',
        url: '/posts',
        data: {
            page: pageNum
        },
        success: function(res) {
            var html = tmeplate('postsTpl', res);
            $('#postsBox').html(html);
            var page = template('pageTpl', res);
            $('.pagination').html(page);
        }
    })
}

$.ajax({
    type: 'get',
    url: '/category',
    success: function(res) {
        var html = template('categoriesTpl', {data: res});
        $('#categoryBox').html(html);
    }
})

$('#selectBtn').on('submit', function() {
    var formData = $(this).serialize();
    $.ajax({
        type: 'get',
        url: '/posts',
        data: formData,
        success: function(res) {
            var html = tmeplate('postsTpl', res);
            $('#postsBox').html(html);
            var page = template('pageTpl', res);
            $('.pagination').html(page);
        }
    })
    return false;
})