define(function(reguire,exports,module){
    var jQuery = require("jquery");
    var $ = require("jquery");
    var bootstrap = require("bootstrap");
    var datetimepicker=require("datetimepicker");
    var change=require("style");
    var validate=require('jquery.validate.min');

    $('#data1').datetimepicker({
        weekStart: 1,/*一周从哪一天开始 0表示星期天*/
        todayBtn:  1,/*日期时间选择器组件的底部显示一个 "Today" 按钮用以选择当前日期。*/
        autoclose: 1, /*当选择一个日期之后是否立即关闭此日期时间选择器。*/
        todayHighlight: 1,/*如果为true, 高亮当前日期*/
        startView: 2, /*日期时间选择器打开之后首先显示的视图。 2 or 'month' for month view (the default)*/
        forceParse: 0,/*当选择器关闭的时候，是否强制解析输入框中的值。*/
        // showMeridian: 1/*选项里是否有天或小时*/
        minView: 2
    });

    $('.glyphicon-th').click(function(){
        $('#data1').datetimepicker('show');
    })


    $(function () {
        change.test1();
        change.test2();
        $('.bs-example-modal-lg').on('hide.bs.modal', function () {
            alert('嘿，我听说您喜欢模态框...');})

        function closemodel (){
            $('.bs-example-modal-lg').modal('hide');
        }



        $("#loginForm").validate({
            //debug:true ,
            //如果这个参数为true，那么表单不会提交，只进行检查，调试时十分方便

            rules:{
                username:{required:true},
                password:{required:true}
            },
            messages:{
                username:{required:"请输入用户名",email:"邮箱格式错误"},
                password:{required :'请输入密码'}
            },
            errorElement:"p",//用来创建错误提示信息标签(可自定义)
            onkeyup: false,
            ignore: ".ignore",
            focusCleanup:'true',
            validClass:"success",
            errorPlacement:function(error, element){//处理错误信息位置，在下面的复选框用到
                if(element.is(":radio")){
                    error.appendTo(element.parent());
                }else{
                    console.log('yjj');
                    error.insertAfter(element);
                }
            },

            success : function(label){
                //验证成功后执行的回调函数，label指向上面那个错误提 示信息标签em
                label.text( ' ' ).addClass("success")  //添加上自定义的success类
            },
            submitHandler: function(form)
            {
                alert(1);

                $.ajax({
                    url:'check.php',
                    type:'post',
                    dataType:'json',
                    data:$('#loginForm').serialize(),
                    success:function(data){
                        $.each(data,function(i,v){
                            if(v.msg == false){
                                alert("类型已存在！");
                            }else{
                                showTypeList(v.typeData);
                            }

                        });
                    },
                    error:function(){
                        alert('信息错误')
                    }
                });
                return false;//阻止表单提交
            },
            invalidHandler: function(form, validator) {  //不通过回调
                return false;
            }


        });



        $("#registerform").validate({
            //debug:true ,
            //如果这个参数为true，那么表单不会提交，只进行检查，调试时十分方便
            rules:{
                username:{required:true,
                    email:true,
                    remote:{//远程地址只能输出 "true" 或 "false"，不能有其它输出
                        url:"check_username.php",
                        type:"post",//传值方式
                        dataType: "json",//接受数据格式
                        data:{
                            //要传过的值  返回true时表示通过验证，false反
                            username: function() {
                                return $("#username").val();
                            }
                        }

                    }
                },
                password:{required:true,minlength:8},
                rpassword:{required:true,equalTo:"#field"},
                agreement:{required:true}
            },
            messages:{
                username:{required:"请输入用户名",email:"请输入正确的邮箱格式",remote:"用户名已存在"},
                password:{required :'请输入密码',minlength:"请输入不少于8位的密码"},
                rpassword:{required:'请确认密码',equalTo:"输入号码不一致"},
                agreement:{required:'请先选择协议'}

            },
            errorElement:"p",//用来创建错误提示信息标签(可自定义)
            onkeyup: false,
            ignore: ".ignore",
            focusCleanup:'true',
            validClass:"success",
            errorPlacement:function(error, element){//处理错误信息位置，在下面的复选框用到
                //console.log(error);
                //console.log(element);
                if(element.is(":radio")||element.is(":checkbox")){
                    error.appendTo(element.parent());
                }else{
                    console.log('yjj');
                    error.insertAfter(element);
                }

            },
            success : function(label,element){
                //console.log(1);
                //console.log(label);
                //console.log(arguments);
                if($(element).is(":checkbox")){
                    $(label).remove();
                }else{
                    //验证成功后执行的回调函数，label指向上面那个错误提 示信息标签em
                    label.text( ' ' ).addClass("success")  //添加上自定义的success类
                }

            },
            submitHandler: function(form)
            {
                alert(1);
                //$(form).ajaxSubmit();
                $.ajax({
                    url:'check.php',
                    type:'post',
                    dataType:'json',
                    data:$('#registerform').serialize(),
                    success:function(data){
                        $.each(data,function(i,v){
                            if(v.msg == false){
                                alert("类型已存在！");
                            }else{
                                showTypeList(v.typeData);
                            }

                        });
                    },
                    error:function(){
                        alert('信息错误')
                    }
                });
                return false;//阻止表单提交
            },
            invalidHandler: function(form, validator) {  //不通过回调
                return false;
            }
        });


    })

})