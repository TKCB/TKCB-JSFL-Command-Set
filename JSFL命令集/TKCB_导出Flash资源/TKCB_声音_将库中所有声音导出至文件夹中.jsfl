/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// 将库中所有声音导出至文件夹中

// 获取用户选择的文件夹路径
var folderURI = fl.browseForFolderURL("选择文件夹");
if ( FLfile.exists(folderURI) )
{
	var tItems = fl.getDocumentDOM().library.items;		// 当前文档库中所有元素（图片、元件、声音等等）
	var tItem;						// 元素
	var i;
	var len = tItems.length;
	var num = 1;	// 声音序号
	
	//// 允许使用者自定义声音的导出前缀
	var hintText = "请输入声音的序列前缀名称，并确认，否则默认为“sound_”。（不要写入不允许的字符，否则将出现错误）";
	var str = prompt( hintText, "sound_" );
	if ( str == null )
	{
		str = "sound_";
	}
	
	//// 循环获取声音
	for ( i = 0; i < len; i++ )
	{
        tItem = tItems[ i ];
		if ( tItem.itemType == "sound" )
		{
			libItemExportToFile( tItem );
			num++;
		}
	}
	
	alert( "导出库中所有声音完成！" );
}

/* 将声音导出到文件夹中 */
function libItemExportToFile ( libItem )
{
	//// 创建文件夹
	var strName = folderURI + "/" + fl.getDocumentDOM().name + "（声音）";
	FLfile.createFolder( strName );
	
	var imageFileURL;
	if ( libItem.originalCompressionType == "MP3" )
	{
		imageFileURL = folderURI + "/" + fl.getDocumentDOM().name + "（声音）/" + str + num + ".mp3";
	}
	else if ( libItem.originalCompressionType == "RAW" )
	{
		imageFileURL = folderURI + "/" + fl.getDocumentDOM().name + "（声音）/" + str + num + ".wav";
	}
	libItem.exportToFile( imageFileURL );
}