/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// 将鼠标（框）选的位图导出

// 获取用户选择的文件夹路径
var folderURI = fl.browseForFolderURL("选择文件夹");
if ( FLfile.exists(folderURI) )
{
	var tElements = fl.getDocumentDOM().selection;	// 当前选中的所有元素（图片、元件、线条等等）
	var tElement;					// 元素
	var tLibraryItem;				// 当前元素的库对象
	var i;
	var len = tElements.length;
	for ( i = 0; i < len; i++ )
	{
		tElement = tElements[ i ];
		if ( tElement.elementType == "instance" )
		{
			 if( tElement.instanceType == "bitmap" )
			{
				tLibraryItem = tElement.libraryItem;
				
				libItemExportToFile( tLibraryItem );
			}
		}
	}
	
	fl.trace( "导出选中的位图完成！" );
}


/* 将位图导出到选择的文件夹中 */
function libItemExportToFile ( libItem )
{
	var myDate = new Date();
	var imageFileURL;
	if ( libItem.originalCompressionType == "photo" )
	{
		imageFileURL = folderURI + "/picture_" + myDate.getTime() + Math.round( Math.random() * 100000 ) + ".jpg";
	}
	else if ( libItem.originalCompressionType == "lossless" )
	{
		imageFileURL = folderURI + "/picture_" + myDate.getTime() + Math.round( Math.random() * 100000 )  + ".png";
	}
	libItem.exportToFile( imageFileURL, 100 );
}