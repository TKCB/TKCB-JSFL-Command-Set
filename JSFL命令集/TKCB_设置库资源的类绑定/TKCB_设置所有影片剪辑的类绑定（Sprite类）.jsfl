/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */


//// 设置所有影片剪辑的类绑定（Sprite类）
var tItems = fl.getDocumentDOM().library.items;
var tItem;

//// 循环设置每一个影片剪辑的类绑定（Sprite类）
var i;
var len = tItems.length;
for ( i = 0; i < len; i++ )
{
        tItem = tItems[ i ];
        
	// 判断确定这个影片剪辑没有被绑定基类
        if( tItem.itemType == "movie clip" && tItem.linkageBaseClass == undefined && tItem.linkageExportForAS == false && tItem.linkageExportInFirstFrame == undefined )
        {
		// 判断是否只有一帧
		if ( tItem.timeline.frameCount == 1 )
		{
			var isSprite = true;	//  确定影片剪辑是否可以设置为Sprite
			//// 循环判断所有帧代码是否为空
			var j;
			var jlen = tItem.timeline.layers.length;
			for ( j = 0; j < jlen; j++ )
			{
				if ( tItem.timeline.layers[ j ].frames[ 0 ].actionScript != "" )
				{
					isSprite = false;
				}
			}
			if ( isSprite )
			{
				tItem.linkageExportForAS = true;
				tItem.linkageExportInFirstFrame = true;
				tItem.linkageBaseClass = "flash.display.Sprite";
			}
		}
        }
}

alert( "设置所有影片剪辑的类绑定（Sprite）完成！" );