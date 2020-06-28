const BASE_URL='localhost:8080'
var cdidx=''
let fontSize=Number.parseInt(((document.body.clientWidth)*16)/1920)+'px'
$("html").css({'font-size':fontSize})

function getTime() {
    let date=new Date()
    let str=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()
    let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    $(".current-time").text(str+' '+weeks[date.getDay()])

}
getTime()
/*******基本信息查询********/
function baseInfo() {
      $.ajax({
      type:'POST',
      url:BASE_URL+'DTCGCW/zhxxtServer/zhxxtServerBean/findIpAndCd.action',
      dataType:'json',
      data:{},
      success:function (res) {
          console.log(res)
          if(res.status==200&&res.data){
            $(".today-weather").text(res.data.tq)//天气
            $(".bzdj").text(res.data.bzdj)//保障等级
            $(".Yxth").text(res.data.yxth)//运行图
              cdidx=res.data.idx
          }
      },
      error:function (error) {
          console.log(error)
      }
  })
}
