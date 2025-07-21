/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// TKCB_文本_将鼠标（框）选的文本两端对齐

/*
原理说明：给每个字符之间加一个空格，这样才能实现两端对齐的效果，因为英文的两端对齐是靠拉伸字母之间不可见的空格符实现两端对齐。
         而中文的字符之间没有空格，中文字符是一个字一个字的，所以通过手动加空格，然后缩短字符间距值，来实现两端对齐。
         参考资料网址：http://www.zhangxinxu.com/wordpress/2015/08/chinese-english-same-padding-text-justify/
*/
/*
BUG说明：对于纯粹的中文支持的比较好，如果是中英混合则有一些小问题，右边的英文字母可能会有部分显示不出来。
*/

var tElements = fl.getDocumentDOM().selection;	// 当前选中的所有元素（图片、元件、线条等等）
var tElement;					// 元素
var i;
var len = tElements.length;
for ( i = 0; i < len; i++ )
{
	tElement = tElements[ i ];
	if ( tElement.elementType == "text" )
	{
		setTextAlign( tElement );
	}
	alert( "设置文本两端对齐完成！" );
}


/**
 * 设置文本两端对齐，原理为：字符之间加空格，然后减少字符间距。
 */
function setTextAlign ( textElement )
{
	//// 对文本进行加空格处理
	// 新的文本
	var str = textElement.getTextString();
	
	// 加空格
	str = str.split("").join(" ");
	
	// 去掉回车符两侧的空格
	pattern = /[ ]\n[ ]/g;					// 这里有一个知识点，有网友提到，空格分为中文空格和英文空格
	str = str.replace( pattern, "\n" );
	
	// 去掉回车符两侧的空格
	pattern = /[ ][ ][ ]/g;
	str = str.replace( pattern, "  " );
	
	// 文本设置为新的文本
	textElement.setTextString( str );
	
	
	
	//// 设置新文本的间距
	// 获取文本大小（以第一个字符为准，默认为所有文本的字符大小应该是一致的）
	var sizeNum = textElement.getTextAttr( "size", 0 );
	
	// 获取大小（以第一个字符为准，默认为所有文本的字符间距应该是一致的）
	var letterSpacingNum = textElement.getTextAttr( "letterSpacing", 0 );
	
	// 计算新的间距值
	var newLetterSpacing = letterSpacingNum - (sizeNum / 4);
	fl.trace( newLetterSpacing );
	
	// 设置新文本的间距
	textElement.setTextAttr( "letterSpacing", newLetterSpacing );
	
	
	
	//// 将静态文本转换为动态文本，并设置一些属性
	// 强制转换为动态文本
	textElement.textType = "dynamic";
	
	// 文本对齐方式，两端对齐
	textElement.setTextAttr( "alignment", "justify" );
	
	// 文本不可选择
	textElement.setTextAttr( "selectable", false );
	
	// 文本禁止滚动
	textElement.scrollable = false;
}