/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */


//// 清除所有的类绑定
var lib = fl.getDocumentDOM().library;
var tItem;
var i;
var len = lib.items.length;
for ( var i = 0; i < len; i++ )
{
	tItem = lib.items[i];
	var nameStr = lib.items[i].linkageBaseClass;
	if ( nameStr )
	{
		tItem.linkageExportForAS = false;
		tItem.linkageExportInFirstFrame = false;
		tItem.linkageBaseClass = "";
	}
}

alert( "清除所有的类绑定，完成！" );