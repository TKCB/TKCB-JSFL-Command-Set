/*
 * 作　　者：TKCB
 * 作者信息：身高（0.00167公里+）；体重（0.06吨±）；年龄（公元1990后）；籍贯（有兵马俑的地方）；星座（最后一个星座）；血型（万能型）；人生格言（The king come back.）。
 * 交流学习：加QQ群[AS3殿堂之路]（96759336）,群里有无数主城、架构、妹子、LOL战友，欢迎交流讨论。
 * 联系方式：QQ（2414268040）；E-mail（tkcb@qq.com）；手机（15029932353)。
 * 个人网站：www.tkcb.cc（来这里关注我吧，这里有我所有的作品，分享的资料，我的介绍和动态，还有更多你想不到的）
 */

//// 以随机方式重命名所有资源（乱）
var tItems = fl.getDocumentDOM().library.items;		// 当前文档库中所有元素（图片、元件、声音等等）
var tItem;									// 元素
var i;
var j;
var len = tItems.length;
var strLetter = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_12345678900987654321_";
var strRandom;

//// 循环随机命名所有资源
for ( i = 0; i < len; i++ )
{
	strRandom = strLetter.charAt( Math.floor( Math.random() * 51 + 1 ) );
	var ran = Math.floor( Math.random() * 3 ) + 1;
	for ( j = 0; j < ran; j++ )
	{
		strRandom += strLetter.charAt( Math.floor( Math.random() * 73 + 1 ) );
		strRandom += strLetter.charAt( Math.floor( Math.random() * 36 + 1 ) );
		strRandom += strLetter.charAt( Math.floor( Math.random() * 0 + 1 ) );
	}
	
	//// 是否进行大小写转换
	if ( Math.random() < 0.33 )
	{
		strRandom = strRandom.toLowerCase();
	}
	else if ( Math.random() < 0.66 )
	{
		strRandom = strRandom.toUpperCase();
	}
	var myDate = new Date();
	var dateStr = myDate.getTime().toString();
	var dateStrNum = dateStr.length - 4;
	strRandom += dateStr.slice( dateStrNum );
	
	tItem = tItems[ i ];
	tItem.name = strRandom;
}

alert( "随机重命名所有资源完成！" );