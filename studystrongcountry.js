// engines.stopAll()
auto("fast");
setScreenMetrics(720,1280)
let number01=0      // 读选文章分数
let number02=0      //视听学习分数
let dailynumber=0   //每日答题积分
let challengenumber=0       //挑战答题积分
let attitudenumber=0        //发表观点
xuexi=app.getPackageName("学习强国")
app.launchPackage(xuexi)
console.show()
console.setPosition(0,718 )
console.log("正在进入学习强国.")
sleep(3000) 
getGrades()
function getGrades(){

if(id("more_text").exists()){       //若在积分界面，返回主界面
    console.log("返回主界面.")
    back()
    sleep(1000)
}
if(text("学习报表").exists()){       //若在"我的"界面，返回主界面
    console.log("返回主界面.")    
    back()
    sleep(1000)
}
console.log("正在进入'我的'界面")
while(true){
    if(id("comm_head_xuexi_mine").exists()){
    id("comm_head_xuexi_mine").findOne().click()
    break;
    }
}

sleep(2000)
while(true){
    if(className("android.support.v7.widget.RecyclerView").exists()){
    let jifen=className("android.support.v7.widget.RecyclerView").findOnce()
    jifen.child(0).click()
    console.log("进入积分界面")
    break;
    }
}
sleep(2000)
let a=className("android.widget.ListView").findOnce()
let string01=a.child(1).child(2).text()     //读选文章
let length01=a.child(1).child(2).text().length
let string02=a.child(2).child(2).text()     //视听学习
let dailytest=a.child(4).child(2).text()
let challengetest=a.child(7).child(2).text()
let attitude=a.child(12).child(2).text()
//获取读文章分数
if(length01>12){
    number01=Number(string01[2]+string01[3])      
}
else{
    number01=Number(string01[2])
}
//获取视听学习分数
number02=Number(string02[2])
//获取每日答题分数
dailynumber=Number(dailytest[2])
challengenumber=Number(challengetest[2])
attitudenumber=Number(attitude[2])
console.log("阅读文章:"+number01+"\n"+"视听学习:"+number02+"\n"
+"每日答题:"+dailynumber+"\n"+"挑战答题:"+challengenumber+"\n"+"发表观点:"+attitudenumber)
console.log("获取积分成功！")
sleep(1000)                
back();
console.log("正在回到主页")
sleep(700)
back();
console.log("已在主页")
}


let start_x1
let start_y1
let end_x1
let end_y1
let duration1
console.show()
console.log("切至要闻")
sleep(1000)
while(true){
    if(className("android.view.ViewGroup").exists())
        break;
}
className("android.view.ViewGroup").depth(15).findOnce(2).child(1).click() //点击要闻 
sleep(3000)
let turns=1
readjs()
function readjs(){
for(;turns<7;turns++){ 
    className("android.widget.ListView").depth(21).findOnce(1).
    child(turns).click() //点击要闻文章第n篇   
    console.log("正在阅读第"+turns+"篇")
    for(let i=0;i<3;i++){
        start_x1=random(525,651)
        start_y1=random(1050,1130)
        end_x1=random(525,651)
        end_y1=random(540,620)
        duration1=random(900,1000)
        swipe(start_x1,start_y1,end_x1,end_y1,duration1)
        sleep(random(700,800))    //下滑结束
    }
    for(let i=0;i<3;i++){
        start_x1=random(525,651)
        start_y1=random(540,620)
        end_x1=random(525,651)
        end_y1=random(1050,1130)
        duration1=random(900,1000)
        swipe(start_x1,start_y1,end_x1,end_y1,duration1)
        sleep(random(700,800))  //上滑结束
    }
    console.log("第"+turns+"篇结束！")

if(attitudenumber<=1){
    text("欢迎发表你的观点").click()
    sleep(1000)
    let comment=["支持党，支持国家！", "为实现中华民族伟大复兴而不懈奋斗！", "不忘初心，牢记使命"]
    setText(0,comment[random(0,2)])
    sleep(1000)
    click("发布")
    console.log("评论成功！")
    // sleep(3000)
    // textContains("删除").waitFor();
    // click("删除")
    // sleep(2000)
    // click("确认")
    // console.log("删除成功")
    attitudenumber=1
    sleep(1000)
    }
    console.log("返回至要闻界面")
    back()  
    sleep(3000)
    }
    console.log("选读文章部分已结束！")
}






 
