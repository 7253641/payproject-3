define(['style'],function(){
   var change={};
   change.test1=function(){
  		 //memberlist 二级菜单点击下拉
        $('.tablechange1 a[data-toggle="tab"]').eq(0).tab('show');
        $('.tablechange1 a[data-toggle="tab"]').on('click', function (e) {

            $('.tablechange1 a[data-toggle="tab"]').parent('li').removeClass('active');
            $(this).addClass('active');

        });
  };
   change.test2=function(){
  		 //rechange 二级菜单点击下拉
        $('.tablechange2 a[data-toggle="tab"]').click(function(){

            $('a[data-toggle="tab"]').removeClass('active');
            $(this).addClass('active');
        })
        $('.tablechange2 a[data-toggle="tab"]').eq(0).addClass('active').tab('show');
  };
    return change;
})