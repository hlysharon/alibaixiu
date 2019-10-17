$.ajax({
    type: 'get',
    url: '/categories',
    success: function(res) {
        var html = template('categoryTpl', { data: res });
        $('#categoryBox').html(html);
    }
})

$('#addCategory').on('submit', function() {
    $.ajax({
        type: 'post',
        url: '/add',
        data: $(this).serialize(),
        success: function() {
            location.reload();
        }
    })
    return false;
})

$('#categoryBox').on('click', '.edit', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'post',
        url: '/categories' + id,
        success: function(res) {
            var html = template('modifyTpl', res);
            $('#modifyBox').html(html);
        }
    })
})

$('#categoryBox').on('submit', "#modifyCategory", function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/modify' + id,
        data: $(this).serialize(),
        success: function() {
            location.reload();
        }
    })
    return false;
})