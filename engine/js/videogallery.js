//////////////////////////////////////////////
// Obfuscated by Javascript Obfuscator 4.0  //
// http://javascript-source.com             //
//////////////////////////////////////////////

// -----------------------------------------------------------------------------------
//
//    VideoLightBox v1.0
//    http://videolightbox.com/
//    Video LightBox JS is a free wizard program that helps you easily add video to website,
//    web page or blog, in a few clicks without writing a single line of code.
//
jQuery(function(){var $=jQuery;if(!document.getElementById("voverlay")){$("#videogallery").append($("<div id='voverlay'></div>"));}$("#videogallery a[rel]").overlay({api:true,onClose:function(){swfobject.removeSWF("video_overlay");this.getBackgroundImage().hide();},onBeforeLoad:function(){var O=document.getElementById("video_overlay");if(!O){var oo=$("<div></div>");oo.attr({id:"video_overlay"});$("#voverlay").append(oo);}var o0="VideoLightBox.com";var Oo="http://videolightbox.com";O=o0?$("<div></div>"):0;if(O){O.css({position:"absolute",left:"38px",top:"-238px",padding:"0 0 0 0"});$("#voverlay").append(O);}if(O&&document.all){var oO=$("<iframe src=\"javascript:false\"></iframe>");oO.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});oO.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});O.append(oO);}var oo=O?$(document.createElement("A")):O;if(oo){oo.css({position:"relative",display:"block",'background-color':"#E4EFEB",color:"#837F80",'font-family':"Lucida Grande,Arial,Verdana,sans-serif",'font-size':"16px",'font-weight':"normal",'font-style':"normal",padding:"1px 5px",opacity:0.7,filter:"alpha(opacity=70)",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});oo.attr({href:Oo});oo.html(o0);oo.bind("contextmenu",function(eventObject){return false;});O.append(oo);}var src=this.getTrigger().attr("href");if(typeof oo!="number"&&(!O||!O.html||!O.html())){return;}swfobject.createSWF({data:src,width:"100%",height:"100%",wmode:"opaque"},{allowScriptAccess:"always",allowFullScreen:true},"video_overlay");}});});