//ajax数据
$.ajax({
    type: 'get',
    url: '/users',
    success: function(res) {
        console.log(res)
        var html = template('usersTpl', { data: res });
        console.log(html);
        $('#usersBox').html(html)
    }
})

$('#userForm').on('submit', function() {
    //jq提供的方法，可以自动把当前表单所有的表单数据序列化 自动收集
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function(res) {
            location.reload() //刷新当前页面
                //如果不这样写，还可以自己拼接一个tr,然后追加到tbody的最后一行，这样写有点麻烦，但是好处是当前页面没有刷新
        }
    })
    console.log(formData)
    return false; //兼容性最强的
})


//上传用户头像
//原生代码
// document.getElementById('avatar').onchange = function(){
//     var fd = new FormData()
//     fd.append('avatar',this.files[0]);
//     var xhr = new XMLHttpRequest();
//     xhr.open('post','/upload');
//     xhr.send(fd)
//     xhr.onload = function(){
//         console.log(xhr.responseText)
//     }
// }

$('#avatar').on('change', function() {
    var fd = new FormData();
    fd.append('avatar', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        //固定写法
        //jq默认我们传的是一个对象，它会帮我们转换成key=value&key=value的形式
        //但是我们现在数据文件上传 multipart/form-data 数据分开传
        processData: false,
        //jq默认会添加一行代码 xhr.setRequestHeader('content-type',')
        contentType: false,
        data: fd,
        success: function(res) {
            console.log(res);
        }
    })
})

$('#checkAll').on('change', function() {
    var bool = $(this).prop('checked');
    var checkList = $('#usersBox input[type="checkbox"]');
    console.log(checkList);
    checkList.prop('checked', bool); //隐式迭代
    if (bool) {
        $('#deleteMany').show();
    } else {
        $('#deleteMany').hide();
    }
})

$('#usersBox').on('change', '#userStatus', function() {
    var checkList = $('#usersBox').find('input');
    if (checkList.length == checkList.filter(':checked').length) {
        $('#checkAll').prop('checked', true);
    } else {
        $('#checkAll').prop('checked', false);
    }
    if (checkList.filter(':checked').length > 0) {
        $('#deleteMany').show();
    } else {
        $('#deleteMany').hide();
    }
})

$('#deleteMany').on('click', function() {
    var str = '';
    $('#usersBox').find('input').filter(':checked').each((index, item) => {
        str += $(item).attr('data-id') + '-';
    })
    str = str.substr(0, str.length - 1);
    $.ajax({
        type: 'delete',
        url: '/users/'
    })
})