//常用切换
function set(name,cursel,n){
  for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById(name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
} 
}

function setsp(name,cursel,n){
  for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  menu.className=i==cursel?"hover":"";
} 
}


//输出指定范围内的随机数的随机整数
function fRandomBy(under, over){
switch(arguments.length){
case 1: return parseInt(Math.random()*under+1);
case 2: return parseInt(Math.random()*(over-under+1) + under);
default: return 0;
}
}

function   formatDate(now,num)   {
	var year=now.getFullYear();  
	var month=now.getMonth()+1;     
	var date=now.getDate()-num;     
	var hour=now.getHours();     
	var minute=now.getMinutes();     
	var second=now.getSeconds();     
	return   year+"-"+month+"-"+date;     
}



$('.con2_1').find('a').mouseover(function()
{
	$('.con2_1').find('a').attr('id','');
	$('.con2_2l').css('display','none');
	$(this).attr('id','active');
	$('.con2_2l').eq($(this).index()).css('display','block');
	$('.con2_1').css('cursor','pointer');
});




$('.yq_t').find('li').mouseover(function()
{
	$('.yq_t').find('li').attr('id','');
	$('.yq_c').css('display','none');
	$(this).attr('id','active');
	$('.yq_c').eq($(this).index()).css('display','block');
	$('.yq_t').css('cursor','pointer');
});











