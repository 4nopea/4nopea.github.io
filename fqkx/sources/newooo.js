

function ggg()
{
	var cc=document.getElementById("gg1")
	if (cc.innerHTML==""){
	document.getElementById("gg1").innerHTML="<img src='sources/newm.png' onclick='ggg()'><div class='bqy'>v4.3 帮你把淫讳的话发的更隐慧</div>";
	}
	else{
	document.getElementById("gg1").innerHTML="";
	}
}

function zfb() 
{
	if (document.getElementById("qqq").innerHTML==""){
	document.getElementById("qqq").innerHTML ="<a onClick='zfb()'><img src='sources/ttt.png'></a></br>支付宝 govgouvii@gmail.com</br></br><a href='index2.html'>切换到每列5字版</a></br>"
	}
	else
	{
		document.getElementById("qqq").innerHTML =""
		}
}
function zfb2() 
{
	if (document.getElementById("qqq").innerHTML==""){
	document.getElementById("qqq").innerHTML ="<a onClick='zfb()'><img src='sources/ttt.png'></a></br>支付宝 govgouvii@gmail.com</br></br><a href='index.html'>切换回每列4字版</a></br>"
	}
	else
	{
		document.getElementById("qqq").innerHTML =""
		}
}
function cle()
{
	var val=document.getElementById("org").value
	if(val=="点此输入文本")
	{
		document.getElementById("org").value="";
		}
	
}



function jsuan(bqq,hangshu)
{
var bq=bqq;

var texts;
texts=document.getElementById("org").value
texts= texts.replace(/\s/ig,'')/*去空格函数*/
wbcd=texts.length

var hs=hangshu
var ls
var kg

var ys=wbcd%hs
if (ys==0) 
	{
	ls=wbcd/hs;
	kg=0;
	}
 else
	{
	ls=(wbcd-ys)/hs;
	ls+=1;
	kg=(ls*hs)-wbcd;
	}


if (hs==5){
var szwb=new Array()
var szwb1=new Array()
var szwb2=new Array()
var szwb3=new Array()
var szwb4=new Array()
var szwb5=new Array()
szwb=texts.split("")

var i=1
var b=0
while (i<=ls)
	{

		szwb1.push(szwb[b]);
		b+=1;
		szwb2.push(szwb[b]);
		b+=1;
		szwb3.push(szwb[b]);
		b+=1;
		szwb4.push(szwb[b]);
		b+=1;
		szwb5.push(szwb[b]);
		b+=1;
		i+=1;
	}

switch(kg)
{
case 4:
	szwb2.push("〇");
	szwb3.push("〇");
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 3:
	szwb3.push("〇");
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 2:
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 1:
	szwb5.push("〇");
  break;
default:
    break;
}

szwb1.reverse()
szwb2.reverse()
szwb3.reverse()
szwb4.reverse()
szwb5.reverse()

wb1=szwb1.join('')
szwb1=wb1.split('')
wb1=szwb1.join('  ')
wb2=szwb2.join('')
szwb2=wb2.split('')
wb2=szwb2.join('  ')
wb3=szwb3.join('')
szwb3=wb3.split('')
wb3=szwb3.join('  ')
wb4=szwb4.join('')
szwb4=wb4.split('')
wb4=szwb4.join('  ')
wb5=szwb5.join('')
szwb5=wb5.split('')
wb5=szwb5.join('  ')
document.getElementById("nnn").innerHTML="<textarea rows='"+(hs+2)+"' class='bbdd'> "+bq+"\n"+wb1+"\n"+wb2+"\n"+wb3+"\n"+wb4+"\n"+wb5+"</textarea></br>";
document.getElementById("ppp").innerHTML = " ";   
document.getElementById("bqz").innerHTML ="苟利国家生死以 岂因祸福避蛆支";
document.getElementById("gg2").innerHTML= "";
if (kg==0)
{kg="无";}
document.getElementById("gg3").innerHTML="</br>"+hs+"行 "+ls+"列 "+kg+"空位 | 处理了"+wbcd+"个字</br>可随时复制下方结果和切换表情";
}

else{
	hs=4
var szwb=new Array()
var szwb1=new Array()
var szwb2=new Array()
var szwb3=new Array()
var szwb4=new Array()
szwb=texts.split("")

var i=1
var b=0
while (i<=ls)
	{

		szwb1.push(szwb[b]);
		b+=1;
		szwb2.push(szwb[b]);
		b+=1;
		szwb3.push(szwb[b]);
		b+=1;
		szwb4.push(szwb[b]);
		b+=1;
		i+=1;
	}

switch(kg)
{
case 3:
	szwb2.push("〇");
	szwb3.push("〇");
	szwb4.push("〇");
  break;
case 2:
	szwb3.push("〇");
	szwb4.push("〇");
  break;
case 1:
	szwb4.push("〇");
  break;
default:
    break;
}

szwb1.reverse()
szwb2.reverse()
szwb3.reverse()
szwb4.reverse()

wb1=szwb1.join('')
szwb1=wb1.split('')
wb1=szwb1.join('  ')
wb2=szwb2.join('')
szwb2=wb2.split('')
wb2=szwb2.join('  ')
wb3=szwb3.join('')
szwb3=wb3.split('')
wb3=szwb3.join('  ')
wb4=szwb4.join('')
szwb4=wb4.split('')
wb4=szwb4.join('  ')
document.getElementById("nnn").innerHTML="<textarea rows='"+(hs+2)+"' class='bbdd'> "+bq+"\n"+wb1+"\n"+wb2+"\n"+wb3+"\n"+wb4+"</textarea></br>";
document.getElementById("ppp").innerHTML = " ";  
document.getElementById("bqz").innerHTML ="很惭愧 一点微小的工作";
document.getElementById("gg2").innerHTML= "";
if (kg==0)
{kg="无";}
document.getElementById("gg3").innerHTML="</br>"+hs+"行 "+ls+"列 "+kg+"空位 | 处理了"+wbcd+"个字</br>可随时复制下方结果和切换表情";
}
	
}


