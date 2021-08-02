// 总的倒计时时间（totalTime），倒计时刷新间隔（intelvalTime），刷新时调用的函数（f）
const TimerUtil = function Timer(totalT, intervalT, f){
    let interT = intervalT * 1000;
    let restT = totalT;
    let startT = new Date();
    f(restT);
    const timer = setInterval(function(){
      //timeN = timeN - 1;
      function getRemainT() {
        let timeN = new Date();
        let RemainT = (timeN - startT) / 1000;
        return Number.parseInt(RemainT);
      };
      restT = totalT - getRemainT();
      restT = (restT < 0) ? 0 : restT;
      f(restT);
      if (restT === 0) timer && clearInterval(timer);
    }, interT)
    return timer
}

export default TimerUtil;