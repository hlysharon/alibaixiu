$.ajax({
    type: 'get',
    url: '/posts',
    success: function(res) {
        var html = tmeplate('postsTpl', res);
        $('#postsBox').html(html);
    }
})

function dateFormat(date) {
    var date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}