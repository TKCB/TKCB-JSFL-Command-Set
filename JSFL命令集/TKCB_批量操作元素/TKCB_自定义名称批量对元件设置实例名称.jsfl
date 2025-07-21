/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 作者网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */


//// 自定义名称批量对元件设置实例名称
fl.trace( "提示：如果你鼠标选择的元素组中包含非元件的元素，可能导致代码运行错误！" );

// 文档对象
var dom = fl.getDocumentDOM();

// 当前选择元素数组
var selecArr = dom.selection;

// 提示输入框
var slmName = prompt( "请输入实例名前缀", "btn_" );
if ( slmName == null )
{
	alert( "传参失败！！！" );
}
else if ( selecArr.length == 0 )
{
	alert( "请鼠标选择一组元件！！！" );
}
else
{
	setSLM();
}

// 批量设置实例名称
function setSLM()
{
	var i, len = selecArr.length;
	for ( i = 0; i < len; i++ )
	{
		selecArr[i].name = slmName + ((selecArr.length + 1) - (i + 1)).toString();
	}
	
	fl.trace( "批量设置实例名称完成，共 " + selecArr.length + " 个元件被设置实例名称" );
}