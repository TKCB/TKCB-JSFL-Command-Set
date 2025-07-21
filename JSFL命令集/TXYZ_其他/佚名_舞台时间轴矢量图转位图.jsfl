// 先清除输出面板
fl.outputPanel.clear();
// 获取时间线
var timeline = document.getTimeline();
// 获取帧数
var len = timeline.frameCount;
fl.trace('by leonxiao.');
fl.trace('当前时间:' + new Date());
fl.trace('-------------------- 华丽的分割线 -----------------------');
fl.trace('****   共: '+ len + ' 帧');
fl.trace('****   转换ing...');
// 循环帧
for(var i = 0; i < len; i++){
   document.selectNone();
   timeline.setSelectedFrames(i,i);
   document.selectAll();
   // 把选中的元素转成位图
   fl.getDocumentDOM().convertSelectionToBitmap();
};
fl.trace('****   恭喜! 转换完成!');
fl.trace('------------------------ end ---------------------------');
