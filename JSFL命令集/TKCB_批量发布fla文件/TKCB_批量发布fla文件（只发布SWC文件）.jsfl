/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// 批量发布fla文件（只发布SWC文件）
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
		setPublishProfile();
		doc.publish();
		fl.getDocumentDOM().deletePublishProfile();		// 删除新的XML配置文件
		doc.close( false );
	}
	
	//// 输出发布的文件名称及数量
	for ( var i in list )
	{
		fl.trace( list[i] );
	}
	fl.trace( "————共 " + list.length + " 个fla文件，发布完成！————" );
}

/* 设置当前发布配置XML为只发布SWF格式的XML配置文件（只是临时的配置文件，之后会删除的） */
function setPublishProfile ()
{
	var doc = fl.getDocumentDOM();

	//// 创建新的XML发布配置文件
	var newPPName = "newPublishProfileTKCB" + new Date().getTime();
	var newPPNum = doc.duplicatePublishProfile(newPPName);
	var newPPXML = doc.exportPublishProfileString(newPPName);

	//// 修改新的XML发布配置文件，使其只发布swf格式
	var re;
	// SWF格式
	re = /\<flash\>1\<\/flash\>/i;
	newPPXML = newPPXML.replace(re, "<flash>0</flash>");

	// HTML格式
	re = /\<html\>1\<\/html\>/i;
	newPPXML = newPPXML.replace(re, "<html>0</html>");

	// GIF格式
	re = /\<gif\>1\<\/gif\>/i;
	newPPXML = newPPXML.replace(re, "<gif>0</gif>");

	// JPEG格式
	re = /\<jpeg\>1\<\/jpeg\>/i;
	newPPXML = newPPXML.replace(re, "<jpeg>0</jpeg>");

	// PNG格式
	re = /\<png\>1\<\/png\>/i;
	newPPXML = newPPXML.replace(re, "<png>0</png>");

	// SWC格式
	re = /\<swc\>0\<\/swc\>/i;
	newPPXML = newPPXML.replace(re, "<swc>1</swc>");
	re = /\<ExportSwc\>0\<\/ExportSwc\>/i;
	newPPXML = newPPXML.replace(re, "<ExportSwc>1</ExportSwc>");

	// EXE格式
	re = /\<projectorWin\>1\<\/projectorWin\>/i;
	newPPXML = newPPXML.replace(re, "<projectorWin>0</projectorWin>");

	// APP格式
	re = /\<projectorMac\>1\<\/projectorMac\>/i;
	newPPXML = newPPXML.replace(re, "<projectorMac>0</projectorMac>");

	// SVG格式
	re = /\>1\<\/publishFormat\>/i;
	newPPXML = newPPXML.replace(re, ">0</publishFormat>");

	// 设置当前XML发布配置文件为新的XML
	doc.importPublishProfileString(newPPXML);
}