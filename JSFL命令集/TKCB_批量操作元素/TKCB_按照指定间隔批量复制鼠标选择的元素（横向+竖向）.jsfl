/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 作者网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */


//// 按照指定间隔批量复制鼠标选择的元素（横向）

// 当前选择对象
var rect = fl.getDocumentDOM().getSelectionRect();

// 按照规则传入参数
var hintText = "参数（以空格进行分隔）：横向数量 间隔像素 竖向数量 间隔像素";
var paramStr = prompt( hintText, "5      50      3      30" );
if ( paramStr == null )
{
	alert( "传参失败！！！" );
}
else if ( rect == 0 )
{
	alert( "请鼠标选择一个复制元素！！！" );
}
else
{
	// 获取用户传入的参数
	paramStr = paramStr.replace( /(^\s*)|(\s*$)/g, "" );		// 去除首尾空格
	paramStr = paramStr.replace( /\s+/g, " " );				// 多个空格处理成一个空格
	var paramStrArr = paramStr.split( " " );					// 以空格进行分隔，获取参数数组
	var copyNumW = Number( paramStrArr[ 0 ] );
	var intervalNumW = Number( paramStrArr[ 1 ] );
	var copyNumH = Number( paramStrArr[ 2 ] );
	var intervalNumH = Number( paramStrArr[ 3 ] );
	//fl.trace( copyNumW );
	//fl.trace( intervalNumW );
	//fl.trace( copyNumH );
	//fl.trace( intervalNumH );
	
	// 数字异常情况处理
	if ( copyNumW < 2 )
	{
		copyNumW = 2;
	}
	else if ( copyNumW > 1000 )
	{
		copyNumW = 1000;
	}
	if ( intervalNumW > 1000 )
	{
		intervalNumW = 1000;
	}
	if ( copyNumH < 2 )
	{
		copyNumH = 2;
	}
	else if ( copyNumH > 1000 )
	{
		copyNumH = 1000;
	}
	if ( intervalNumH > 1000 )
	{
		intervalNumH = 1000;
	}
	
	// 获取选择对象宽度和高度
	var rectWidth = rect.right - rect.left;
	var rectHeight = rect.bottom - rect.top;
	
	// 循环进行复制操作（横向）
	var i, len = copyNumW;
	for ( i = 1; i < len; i++ )
	{
		fl.getDocumentDOM().clipCopy();
		fl.getDocumentDOM().clipPaste( true );
		fl.getDocumentDOM().moveSelectionBy({ x:rectWidth + intervalNumW, y:0 });
	}
	
	// 根据两个 rect 选择从第一个复制对象开始到最后一个复制对象结束的所有元素（相当于鼠标矩形框选）
	var rect2 = fl.getDocumentDOM().getSelectionRect();
	fl.getDocumentDOM().setSelectionRect({ left:rect.left, top:rect.top, right:rect2.right, bottom:rect2.bottom }, true, true );
	
	// 循环进行复制操作（横向）
	var i, len = copyNumH;
	for ( i = 1; i < len; i++ )
	{
		fl.getDocumentDOM().clipCopy();
		fl.getDocumentDOM().clipPaste( true );
		fl.getDocumentDOM().moveSelectionBy({ x:0, y:rectHeight + intervalNumH });
	}
	
	fl.trace( "批量复制完成（横向+竖向）。" );
}

