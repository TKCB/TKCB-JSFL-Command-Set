// 我也不知道作者是谁，只知道是在群里一个叫做“流连水”的网友上传的

fl.outputPanel.clear();
var lineobj=fl.getDocumentDOM().getTimeline();
var layersobj=lineobj.layers;
var layerlen=layersobj.length;
for(var i=0;i<layerlen;i++){
	var frameobj=layersobj[i].frames;
	var framelen=frameobj.length;
	for(var j=0;j<framelen;j++){
		frameobj[j].actionScript ="";
		var eleobj=frameobj[j].elements;
		var elelen=eleobj.length;
		for(var k=0;k<elelen;k++){
			if(eleobj[k].elementType=="instance"){
				if(eleobj[k].instanceType=="symbol"){
					if(eleobj[k].symbolType=="movie clip"){					
						eleobj[k].actionScript ="";
					}else if(eleobj[k].symbolType=="button"){						
						eleobj[k].actionScript ="";
					}
				}
			}
		}
	}
}

var lib = fl.getDocumentDOM().library;
for(var i in lib){
	for(var j in lib[i]){//遍历所有库元件
		if(lib[i][j].itemType=="movie clip"){
			for(var k in lib[i][j].timeline.layers){//遍历图层
				for(var n in lib[i][j].timeline.layers[k].frames){//遍历所有帧
					lib[i][j].timeline.layers[k].frames[n].actionScript ="";
					for(var m in lib[i][j].timeline.layers[k].frames[n].elements){
						lib[i][j].timeline.layers[k].frames[n].elements[m].actionScript ="";
					}
				}
			}
		}
	}
}
fl.trace("恭喜，代码清除完毕！");