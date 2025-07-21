/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// 以序列方式重命名所有（图片）
var tlibrary = fl.getDocumentDOM().library;			// 当前文档库
var tItems = fl.getDocumentDOM().library.items;		// 当前文档库中所有元素（图片、元件、声音等等）
var tItem;									// 元素
var i;
var len = tItems.length;
var num = 1;	// 资源序号

//// 允许使用者自定义资源的导出前缀
var hintText = "请输入资源的序列前缀名称，并确认，否则默认为“TKCB_”。（不要写入不允许的字符，否则将出现错误）";
var str = prompt( hintText, "TKCB_" );
if ( str == null )
{
	str = "TKCB_";
}

//// 为了在重命名时候，名称不冲突，故先将所有名称随机命名一次
len = tItems.length;
for ( i = 0; i < len; i++ )
{
	var myDate = new Date();
	tItem = tItems[ i ];
	if ( tItem.itemType == "bitmap" )
	{
		tItem.name = "TKCB" + myDate.getTime() + Math.round( Math.random() * 100000000 );
	}
}

//// 循环重命名资源
var strPrefix;	// 重命名资源的前缀数字（000或者00或者0或者""）
len = tItems.length;
for ( i = 0; i < len; i++ )
{
	tItem = tItems[ i ];
	if ( tItem.itemType == "bitmap" )
	{
		strPrefix = "";
		//// 如果资源数量为千位数（相信不会用上万的资源吧！！哈哈）
		if ( len >= 1000 )
		{
			if ( num < 10 )
			{
				strPrefix = "000";
			}
			else if ( num < 100 )
			{
				strPrefix = "00";
			}
			else if ( num < 1000 )
			{
				strPrefix = "0";
			}
		}
		//// 如果资源数量为百位数
		else if ( len >= 100 )
		{
			if ( num < 10 )
			{
				strPrefix = "00";
			}
			else if ( num < 100 )
			{
				strPrefix = "0";
			}
		}
		//// 如果资源数量为十位数
		else if ( len >= 10 )
		{
			if ( num < 10 )
			{
				strPrefix = "0";
			}
		}
		
		tItem.name = str + strPrefix + num;
		
		num++;
	}
}

alert( "重命名所有图片完成！" );