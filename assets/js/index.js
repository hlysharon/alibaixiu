$.ajax({
    type: 'get',
    url: '/posts/count',
    success: function(res) {
        $('.posts').html(`<strong>${res.postCount}</strong>篇文章（<strong>${res.traftCount}</strong>篇草稿）`)
    }
})