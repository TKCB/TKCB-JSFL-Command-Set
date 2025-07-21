/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336），群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */


//// 批量设置库资源的类绑定（清除所有的类绑定）
// 获取用户选择的文件夹路径
var folderURI = fl.browseForFolderURL("选择文件夹");
if ( FLfile.exists(folderURI) )
{
	//// 使用*通配符列出文件夹中所有的fla文件的名称
	var fileMask = "*.fla";
	var list = FLfile.listFolder( folderURI + "/" + fileMask, "files" );
	
	//// 循环打开找到的fla文件，并使用默认发布设置发布
	for ( var i in list )
	{
		var doc = fl.openDocument( folderURI + "/" + list[i] );
		batchSet( doc );
		doc.save();
		doc.close();
	}
	
	//// 输出发布的文件名称及数量
	for ( var i in list )
	{
		fl.trace( list[i] );
	}
	fl.trace( "————共 " + list.length + " 个fla文件，清除所有的类绑定完成！————" );
}

//// 批量设置函数
function batchSet ( doc )
{
	//// 清除所有的类绑定
	var lib = doc.library;
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
}

