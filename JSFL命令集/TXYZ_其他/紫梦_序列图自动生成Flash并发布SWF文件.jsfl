// 我（TKCB）只知道是由紫梦这名网友上传的，并不清楚具体是谁制作的这个JSFL

//坐骑上翅膀（上）
var folderURL =  fl.browseForFolderURL("请选择序列图文件夹."); 
if(folderURL != null){
	var actionName = folderURL.split("/").pop();
	folderURL = folderURL + "/";	
	
	var actionInfoMsg = "actionInfoMsg";
	//帧间隔，一张图标一帧就写1，2帧用一个图就用2，类推
	var size = 2;
	//jpg的压缩质量
	var jpgQuality = 100;
	//创建一个fla
	var doc = fl.createDocument();
	//doc.getTimeline().addNewLayer();
	//帧数记录
	var framesObj ={};
	var _frameLen  = 0;
	
	/*************************************************************************************************/
	//创建方向“上”,并导入素材.
	var lib = createGraphic("序列动画图形原件");
	lib.editItem("序列动画图形原件");
	executeImportBitmaps(folderURL+"", size);
	
	
	doc.exitEditMode();
	
		//
	doc.library.addItemToDocument({x:300, y:300}, "序列动画图形原件");
	
	doc.getTimeline().insertBlankKeyframe(_frameLen+1);
	doc.getTimeline().removeFrames(_frameLen);
	doc.getTimeline().removeFrames(_frameLen);
	/*************************************************************************************************/
	fl.saveDocument(doc, folderURL+"/"+actionName+".fla");
	doc.exportSWF(folderURL+"/"+actionName+".swf");
	doc.close();
}


//创建一个影片剪辑
function createMovieClip(libName){
	var lib = fl.getDocumentDOM().library;
	lib.addNewItem('movie clip',libName);	
	if (lib.getItemProperty('linkageImportForRS') == true) {
		lib.setItemProperty('linkageImportForRS', false);
	}
	else {
		lib.setItemProperty('linkageExportForAS', false);
		lib.setItemProperty('linkageExportForRS', false);
	}
	return lib;
}
//创建一个图形
function createGraphic(libName){
	var lib = fl.getDocumentDOM().library;
	lib.addNewItem('graphic',libName);
	if (lib.getItemProperty('linkageImportForRS') == true) {
		lib.setItemProperty('linkageImportForRS', false);
	}
	else {
		lib.setItemProperty('linkageExportForAS', false);
		lib.setItemProperty('linkageExportForRS', false);
	}
	return lib;
}

//var firstImport = true;
//导入位图数据
function executeImportBitmaps(resURL, space)
{
	var list = FLfile.listFolder(resURL);
	if(space == null){
		space = 2;
	}
	_frameLen = 0;
	for(var i in list)
	{
		fileURL = resURL;
		//图片全名
		fileName = String(list[i]);
		var fileNameArr = fileName.split(".");
		//图片格式
		var fileType = String(fileNameArr[1]);
		//图片名
		var folderName = String(fileNameArr[0]);
		fileName = String(fileNameArr[0]);
		
		if(fileType == "png" || fileType == "jpg")
		{			
		
			_frameLen+=space;
			
			doc.importFile(resURL + "/"+list[i], false);
			doc.getTimeline().insertFrames()
			doc.getTimeline().insertBlankKeyframe(_frameLen);		
		}		
	}	
	//总帧队列
	var _frames = doc.getTimeline().layers[0].frames;
	//总帧数
	_frameLen = _frames.length;
	doc.getTimeline().removeFrames(_frameLen -1);	
	_frameLen --;	
}

//植入动作脚本信息
function executeFlushActionInfo()
{
	var lib = doc.library;
	lib.addNewItem('movie clip','bitmapInfo');
	if (lib.getItemProperty('linkageImportForRS') == true) {
		lib.setItemProperty('linkageImportForRS', false);
	}
	lib.setItemProperty('linkageExportForAS', true);
	lib.setItemProperty('linkageExportForRS', false);
	lib.setItemProperty('linkageExportInFirstFrame', true);
	lib.setItemProperty('linkageClassName', 'BitmapInfo');
	doc.library.editItem();	
	fl.actionsPanel.setText(actionInfoMsg);
}
