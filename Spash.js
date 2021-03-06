<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:version='2' class='v2' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>

<head><b:attr expr:value='data:view.isSingleItem ? &quot;og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#&quot; : &quot;og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#&quot;' name='prefix'/>

<!-- Page Title -->
<title><b:if cond='data:view.isHomepage'><data:blog.title/><b:elseif cond='data:blog.pageType == &quot;error_page&quot;'/>خطأ 404 | <data:blog.title/><b:elseif cond='data:view.isSingleItem'/><data:blog.pageName/><b:elseif cond='data:blog.pageName == &quot;&quot;'/><data:blog.title/><b:else/><data:blog.pageName/> | <data:blog.title/></b:if></title>

<!-- Blogger Default -->
<meta content='IE=edge' http-equiv='X-UA-Compatible'/>
<meta content='blogger' name='generator'/>
<meta content='width=device-width, initial-scale=1.0' name='viewport'/>
<meta content='IE=edge' http-equiv='X-UA-Compatible'/>
<meta expr:content='data:blog.locale' http-equiv='content-language'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
<link expr:href='data:blog.canonicalUrl' itemprop='url' rel='canonical'/>
<meta expr:content='data:view.description.escaped' name='description'/>
<link expr:href='data:blog.postImageUrl' rel='image_src'/>
<b:eval expr='data:blog.openIdOpTag'/>
<b:if cond='data:blog.adultContent'><meta content='adult' name='rating'/></b:if>
<meta expr:content='data:skin.vars.keycolor' name='theme-color'/>
<meta expr:content='data:skin.vars.keycolor' name='msapplication-navbutton-color'/>
<b:eval expr='data:blog.feedLinks'/>

<!-- Open Graph --> 
<b:switch var='data:blog.locale'><b:case value='en-GB'/><meta content='en_GB' property='og:locale'/><b:case value='da'/><meta content='da_DK' property='og:locale'/><b:case value='pt-PT'/><meta content='pt_PT' property='og:locale'/><b:case value='he'/><meta content='he_IL' property='og:locale'/><b:default/><meta expr:content='data:blog.locale + &quot;_&quot; + data:blog.locale' property='og:locale'/></b:switch>
<meta expr:content='data:blog.title' property='og:site_name'/>
<meta expr:content='data:blog.canonicalUrl' property='og:url'/>
<b:if cond='data:view.isMultipleItems'>
<b:if cond='data:view.isHomepage'><meta expr:content='data:blog.title' property='og:title'/>
<b:else/><meta expr:content='data:blog.pageName + &quot; | &quot; + data:blog.title' property='og:title'/></b:if>
<b:else/><meta expr:content='data:blog.pageName' property='og:title'/>
</b:if>
<meta expr:content='data:view.description.escaped' property='og:description'/>
<b:if cond='data:view.isMultipleItems'>
  <meta content='website' property='og:type'/>
  <meta content='' property='og:image'/>
<b:else/>
  <meta expr:content='resizeImage(data:view.featuredImage, 1200, &quot;1200:630&quot;)' property='og:image'/>
  <meta content='article' property='og:type'/>
  <meta content='' property='article:publisher'/> 
  <meta content='' property='article:author'/>
</b:if>
<meta content='' property='fb:app_id'/>
<meta content='' property='fb:admins'/>


<!-- Twitter Card --> 
<b:if cond='data:view.isMultipleItems'>
<b:if cond='data:view.isHomepage'><meta expr:content='data:blog.title' name='twitter:title'/>
<b:else/><meta expr:content='data:blog.pageName + &quot; | &quot; + data:blog.title' name='twitter:title'/></b:if>
<b:else/><meta expr:content='data:blog.pageName' name='twitter:title'/>
</b:if>
<meta expr:content='data:blog.homepageUrl' name='twitter:domain'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta expr:content='data:view.description.escaped' name='twitter:description'/>
<b:if cond='data:view.isMultipleItems'>
<meta content=''/> 
<b:else/>
<meta expr:content='data:blog.postImageUrl' name='twitter:image'/> 
</b:if>
<meta content='' name='twitter:site'/>
<meta content='' name='twitter:creator'/>

<!-- DNS Prefetch --> 
<link href='//www.blogger.com' rel='dns-prefetch'/><link href='//1.bp.blogspot.com' rel='dns-prefetch'/><link href='//2.bp.blogspot.com' rel='dns-prefetch'/><link href='//3.bp.blogspot.com' rel='dns-prefetch'/><link href='//4.bp.blogspot.com' rel='dns-prefetch'/><link href='//cdnjs.cloudflare.com' rel='dns-prefetch'/><link href='//pagead2.googlesyndication.com' rel='dns-prefetch'/>

<!--[if gte IE 10]><!-->   
<b:skin><![CDATA[
/* ===========================================================
 # Template    : Levon Blogger Template
 # Version     : 3.5
 # Updated     : 20 March 2020
 # Developer   : Muhammad Saleh
 # URL         : http://fb.com/100047606226665
 * ============================================================ */
/* ======================
 * Variable definitions 
 * ====================== */
<Group description="اعدادات رئيسية" selector="body">
<Variable name="keycolor" description="اللون الرئيسي" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="body.background" description="الخلفية" type="background" color='transparent' default="$(color) url(//3.bp.blogspot.com/-x6bnPQuN9YQ/VqALgnWG9-I/AAAAAAAAAuE/NUDLmab0-N4/s0-r/DSDS.jpg) no-repeat fixed top center" value="$(color) url(//3.bp.blogspot.com/-x6bnPQuN9YQ/VqALgnWG9-I/AAAAAAAAAuE/NUDLmab0-N4/s0-r/DSDS.jpg) no-repeat fixed top center"/><Variable name="wrapper" description="لون الخلفية الداخلي" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="lines" description="لون الفواصل الرئيسية" type="color" default="#eeeeee" value="#eeeeee"/>
</Group>
<Group description="الشريط العلوي" selector="#HeaderTop">
<Variable name="top.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="top.pages.color" description="لون الصفحات" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="top.pages.hover.back" description="خلفية الصفحات عند المرور" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="top.pages.hover.color" description="لون الصفحات عند المرور" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="top.pages.lines" description="لون الفواصل بين الصفحات" type="color" default="#777777" value="#777777"/>
<Variable name="top.social.back" description="خلفية ازرار التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="top.social.color" description="لون ازرار التواصل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="top.social.title.back" description="خلفية أسم موقع التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="top.social.title.color" description="لون أسم موقع التواصل" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="القائمة الرئيسية" selector="#LinkList101">
<Variable name="menu.back" description="الخلفية" type="color" default="#242135" value="#242135"/>
<Variable name="menu.link.back" description="خلفية الروابط" type="color" default="#120e28" value="#120e28"/>
<Variable name="menu.link.color" description="لون الروابط" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="menu.hover.back" description="خلفية الروابط عند المرور" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="menu.hover.color" description="لون الروابط عند المرور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="شريط آخر الأخبار" selector="#Int-one">
<Variable name="ticker.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="ticker.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="ticker.links.back" description="خلفية الروابط" type="color" default="#dddddd" value="#dddddd"/>
<Variable name="ticker.links.color" description="لون الروابط" type="color" default="#120e28" value="#120e28"/>
</Group>
<Group description="الواجهة" selector="#Int-two">
<Variable name="intro.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="intro.button.back" description="خلفية الزر" type="color" default="#242135" value="#242135"/>
<Variable name="intro.button.color" description="لون الزر" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="intro.details" description="لون التفاصيل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="intro.button.hover.color" description="لون الزر عند المرور" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="intro.button.hover.back" description="خلفية الزر عند المرور" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="intro.label.back" description="خلفية السهم والتسميه" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="intro.label.color" description="لون السهم والتسميه" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="intro.line" description="لون الفاصل السفلي" type="color" default="#dddddd" value="#dddddd"/>
</Group>
<Group description="الشريط الجانبي" selector="aside">
<Variable name="side.title.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="side.title.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="side.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="weather.back" description="خلفية الطقس" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="weather.color" description="لون نص الطقس" type="color" default="#120e28" value="#120e28"/>
<Variable name="side.links" description="لون الروابط" type="color" default="#444444" value="#444444"/>
<Variable name="side.text" description="النصوص العاديه" type="color" default="#777777" value="#777777"/>
<Variable name="side.links.hover" description="لون الرابط عند المرور" type="color" default="#000000" value="#000000"/>
</Group>
<Group description="التصنيفات" selector="main .Label">
<Variable name="cate.title.back" description="خلفية العنوان" type="color" default="#120e28" value="#120e28"/>
<Variable name="cate.title.color" description="لون العنوان" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="post.title" description="عنوان الموضوع" type="color" default="#555555" value="#555555"/>
<Variable name="post.details" description="لون التفاصيل" type="color" default="#999999" value="#999999"/>
<Variable name="post.details.icons" description="أيقونات التفاصيل" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="post.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="post.image.hover" description="لون تأثير الصور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="أعلى الفوتر" selector="#f-row">
<Variable name="subs.back" description="الخلفية" type="color" default="#242135" value="#242135"/>
<Variable name="subs.text" description="لون النص" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="subs.buttons" description="خلفية الأزرار" type="color" default="#120e28" value="#120e28"/>
<Variable name="subs.email.back" description="خلفية مربع الإشتراك" type="color" default="#120e28" value="#120e28"/>
<Variable name="subs.email.color" description="لون نص مربع الاشتراك" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="subs.button.back" description="خلفية زر إشتراك" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="subs.button.color" description="لون زر الإشتراك" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="subs.button.back.hover" description="خلفية زر الاشتراك عند المرور" type="color" default="#58CA58" value="#58CA58"/>
<Variable name="subs.button.color.hover" description="لون زر الاشتراك عند المرور" type="color" default="#ffffff" value="#ffffff"/>
</Group>
<Group description="الفوتر" selector="footer">
<Variable name="footer.back" description="الخلفية" type="color" default="#120e28" value="#120e28"/>
<Variable name="footer.title" description="عنوان العناصر" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="footer.lines" description="الفواصل" type="color" default="#242135" value="#242135"/>
<Variable name="footer.links" description="لون الروابط" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="footer.links.hover" description="لون الروابط عند المرور" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="footer.text" description="لون النص العادي" type="color" default="#999999" value="#999999"/>
</Group>
<Group description="شريط الحقوق" selector="#copyrights">
<Variable name="copts.back" description="خلفية الشريط" type="color" default="#120e28" value="#120e28"/>
<Variable name="copts.line" description="لون الفاصل" type="color" default="#242135" value="#242135"/>
<Variable name="copts.text" description="لون النص" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="copts.link" description="لون الروابط" type="color" default="#ffffff" value="#ffffff"/>
<Variable name="copts.soc.back" description="خلفية أزرار التواصل" type="color" default="#242135" value="#242135"/>
<Variable name="copts.soc.color" description="لون أزرار التواصل" type="color" default="#dddddd" value="#dddddd"/>
</Group>
<Group description="الموضوع" selector=".post-body">
<Variable name="postbody.title.back" description="خلفية العنوان" type="color" default="#242135" value="#242135"/>
<Variable name="postbody.title.color" description="لون العنوان" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="postbody.text" description="اللون الافتراضي للنصوص" type="color" default="#120e28" value="#120e28"/>
<Variable name="postbody.link" description="لون الروابط" type="color" default="#000000" value="#000000"/>
<Variable name="postbody.details" description="التفاصيل" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="postbody.details.icon" description="ايقونات التفاصيل" type="color" default="#9e2f5e" value="#9e2f5e"/>
<Variable name="postbody.lines" description="الفواصل" type="color" default="#eeeeee" value="#eeeeee"/>
<Variable name="postbody.subtitle" description="العناوين الثانوية" type="color" default="#242135" value="#242135"/>
<Variable name="related.links" description="عنوان موضوع متعلق" type="color" default="#242135" value="#242135"/>
<Variable name="related.details" description="تفاصيل موضوعات متعلقه" type="color" default="#aaaaaa" value="#aaaaaa"/>
<Variable name="comm.back" description="خلفية أزرار التعليقات" type="color" default="#dddddd" value="#dddddd"/>
</Group>
/* ==================== 
 * CSS RESET
 * ==================== */
*{}body,p{margin:0;font-size:100%;font-family:AltFont}span{font-family:inherit}h1,h2,h3,h4,h5,h6{line-height:1.5em;margin:0;font-size:100%;font-weight:400;font-family:inherit}a{margin:0;padding:0;text-decoration:none;line-height:1.5em}ul,li,ol{margin:0;padding:0;list-style:none;font-family:inherit}input,textarea{outline:none;border:none;background:none;font-family:inherit}img{border:0;max-width:100%}abbr{border:none!important;outline:none!important;text-decoration:none!important}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.blog-admin{display:none}#uds-searchControl{display:none}.clear{clear:both;display:block;width:100%}object{max-width:100%}.widget-item-control,.date-header{display:none}
/* ==================== 
 * Loading Spinner
 * ==================== */
body.spinner{background:$(wrapper)}
#loading-screen{position:fixed;top:0;left:0;width:100%;height:100%;background:$(wrapper);z-index:9999;-webkit-transition:0.5s linear;-o-transition:0.5s linear;transition:0.5s linear;}
.overlay-loader{display:block;margin:auto;width:97px;height:97px;position:relative;top:50%;margin-top:-48.5px;left:0;right:0;bottom:0}.loader{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:97px;height:97px;animation-name:rotateAnim;-o-animation-name:rotateAnim;-ms-animation-name:rotateAnim;-webkit-animation-name:rotateAnim;-moz-animation-name:rotateAnim;animation-duration:.4s;-o-animation-duration:.4s;-ms-animation-duration:.4s;-webkit-animation-duration:.4s;-moz-animation-duration:.4s;animation-iteration-count:infinite;-o-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;animation-timing-function:linear;-o-animation-timing-function:linear;-ms-animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear}.loader div{width:8px;height:8px;-webkit-border-radius:50%;border-radius:50%;border:1px solid $(keycolor);position:absolute;top:2px;left:0;right:0;bottom:0;margin:auto}.loader div:nth-child(odd){border-top:0;border-left:none}.loader div:nth-child(even){border-bottom:0;border-right:0}.loader div:nth-child(2){border-width:2px;left:0;top:-4px;width:12px;height:12px}.loader div:nth-child(3){border-width:2px;left:-1px;top:3px;width:18px;height:18px}.loader div:nth-child(4){border-width:3px;left:-1px;top:-4px;width:23px;height:23px}.loader div:nth-child(5){border-width:3px;left:-1px;top:4px;width:31px;height:31px}.loader div:nth-child(6){border-width:4px;left:0;top:-4px;width:39px;height:39px}.loader div:nth-child(7){border-width:4px;left:0;top:6px;width:49px;height:49px}@keyframes rotateAnim{from{-webkit-transform:rotate(360deg);transform:rotate(360deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes rotateAnim{from{-webkit-transform:rotate(360deg)}to{-webkit-transform:rotate(0deg)}}
/* ==================== 
 * Levon Classes
 * ==================== */
#TempColor{color:$keycolor}
.fadeOut{opacity:0}
*:not(.notr){-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.hide{display:none}
/* ==================== 
 * Owl Styles
 * ==================== */
.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;cursor:hand;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:-webkit-grab;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{-webkit-transition:height .5s ease-in-out;-o-transition:height .5s ease-in-out;transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;-webkit-transition:opacity .4s ease;-o-transition:opacity .4s ease;transition:opacity .4s ease}.owl-carousel .owl-item img.owl-lazy{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;background:url(owl.video.play.png) no-repeat;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;-webkit-transition:-webkit-transform .1s ease;transition:-webkit-transform .1s ease;-o-transition:transform .1s ease;transition:transform .1s ease;transition:transform .1s ease, -webkit-transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);-webkit-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;-webkit-background-size:contain;background-size:contain;-webkit-transition:opacity .4s ease;-o-transition:opacity .4s ease;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}
/* ==================== 
 * Main Style
 * ==================== */
body{background:$(body.background);overflow-x:hidden}
body.b-overflow{overflow:hidden;background:none}
body.tiled-back{background-size:cover}
.no-select *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.no-select .t-code,.no-select .t-code *{-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all}
body.wide-back .mainWrapper{max-width:100%;width:100%}
main.wide-container{border:none;width:100%;padding:0 30px}
.mainWrapper{margin:0 auto;background-color:$(wrapper);box-shadow:0 0 10px 3px rgba(0,0,0,0.1)}
.middle-container{overflow:hidden}
main{vertical-align:top}
.rtl main{float:right;padding:0 30px 0 20px;border-left:1px solid $(lines)}
.ltr main{float:left;padding:0 20px 0 30px;border-right:1px solid $(lines)}
aside{vertical-align:top}
.rtl aside{float:right;padding:0 20px 0 10px;border-right:1px solid $(lines);margin-right:-1px}
.ltr aside{float:left;padding:0 10px 0 20px;border-left:1px solid $(lines);margin-left:-1px}
/* ==================== 
 * Header
 * ==================== */
#HeaderTop h2,#HeaderBot h2,#HTML100 h2{display:none}
.head-color{background-color:$(top.back)}
#HeaderTop{width:100%;padding:0 30px;height:51px}
.res-butt1{width:30px;height:30px;-webkit-border-radius:3px;border-radius:3px;padding:8px 5px 0;background-color:$(top.pages.lines);cursor:pointer;display:none}
.rtl .res-butt1{float:right}
.ltr .res-butt1{float:left;}
.res-butt1 span{display:block;height:3px;margin-bottom:3px;-webkit-border-radius:100px;border-radius:100px;background-color:$(top.pages.color)}
.menu-active{display:block!important}
#PageList1{padding:10px 0;max-width:65%;vertical-align:top;position:relative}
.rtl #PageList1{float:right}
.ltr #PageList1{float:left}
.res-butt1.but-active{background-color:$keycolor}
.res-butt1.but-active span{background-color:#FFF}
#PageList1 li{display:inline-block;vertical-align:top}
#PageList1 li a{color:$(top.pages.color);font-family:BlogFont,AltFont;font-size:13px;display:block;margin:2px 5px 0;padding:5px 13px;-webkit-border-radius:100px;border-radius:100px;position:relative}
li.selected a{background-color:$(top.pages.hover.back);color:$(top.pages.hover.color)}
#PageList1 li.selected a, #PageList1 li a:hover{background-color:$(top.pages.hover.back);color:$(top.pages.hover.color)}
#PageList1 li a:after{content:"|";position:absolute;display:inline-block;color:$(top.pages.lines)!important}
.rtl #PageList1 li a:after{left:-30px;margin-left:20px;}
.ltr #PageList1 li a:after{right:-30px;margin-right:20px;}
#PageList1 li:last-of-type a:after{display:none}
#LinkList100{min-width:190px;max-width:35%;position:relative;z-index:9;vertical-align:top;height:50px;padding:10px 0}
.rtl #LinkList100{text-align:left;float:left;}
.ltr #LinkList100{text-align:right;float:right;}
#LinkList100 ul{float:left;width:-webkit-calc(100% - 60px);width:calc(100% - 60px)}
.t-search.fa{background-color:$keycolor;width:50px;height:51px;text-align:center;margin-top:-10px;color:#FFF;font-size:24px;padding-top:10px}
.rtl #SRCH{float:left;margin-right:10px}
.ltr #SRCH{float:right;margin-left:10px}
.search-form{position:absolute;top:8px;width:100%;height:1px;}
.rtl .search-form{left:61px}
.ltr .search-form{right:61px}
.search-form input{background-color:$(top.back);position:relative;z-index:2;font-family:blogfont,AltFont;padding:7px 0;border-bottom:2px solid $(top.social.back);width:0;color:$(top.pages.color);width:0;-webkit-transition:0.3s linear;-o-transition:0.3s linear;transition:0.3s linear;}
input.search-open{padding:7px 10px;width:-webkit-calc(100% - 60px);width:calc(100% - 60px)}
.hide-social{margin-top:-40px;opacity:0}
.search-wide{width:180px;float:left}
#LinkList100 li{display:inline-block;vertical-align:top}
#LinkList100 li a{margin-bottom:10px;color:$(top.social.color);background-color:$(top.social.back);width:30px;text-align:center;height:30px;padding-top:7px;-webkit-border-radius:2px;border-radius:2px;position:relative}
#LinkList100 li a span{background-color:$(top.social.title.back);color:$(top.social.title.color);padding:10px;-webkit-border-radius:2px;border-radius:2px;position:absolute;font-size:11px;top:40px;right:-webkit-calc(50% - 35px);right:calc(50% - 35px);width:70px;opacity:0;visibility:hidden;text-transform:capitalize;font-family:AltFont}
#LinkList100 li a span:before{content:"";border-right:5px solid transparent;border-left:5px solid transparent;border-bottom:7px solid $(top.social.title.back);position:absolute;top:-7px;left:-webkit-calc(50% - 4px);left:calc(50% - 4px);display:block;z-index:5}
#LinkList100 li a:hover span{opacity:.95;top:50px;visibility:visible}
#LinkList100 li a:hover{color:#FFF}
#LinkList100 ul:hover li{opacity:.7}
#LinkList100 ul li:hover{opacity:1}
.fa.fa-facebook:hover,      #LinkList102 .fa-facebook    {background-color:#3b5998!important}
.fa.fa-twitter:hover,       #LinkList102 .fa-twitter     {background-color:#55acee!important}
.fa.fa-rss:hover,           #LinkList102 .fa-rss         {background-color:#f26522!important}
.fa.fa-dribbble:hover,      #LinkList102 .fa-dribbble    {background-color:#ea4c89!important}
.fa.fa-google-plus:hover,   #LinkList102 .fa-google-plus {background-color:#dd4b39!important}
.fa.fa-google:hover,        #LinkList102 .fa-google      {background-color:#dd4b39!important}
.fa.fa-pinterest:hover,     #LinkList102 .fa-pinterest   {background-color:#cc2127!important}
.fa.fa-linkedin:hover,      #LinkList102 .fa-linkedin    {background-color:#0976b4!important}
.fa.fa-youtube:hover,       #LinkList102 .fa-youtube     {background-color:#e52d27!important}
.fa.fa-wordpress:hover,     #LinkList102 .fa-wordpress   {background-color:#1081B1!important}
.fa.fa-digg:hover,          #LinkList102 .fa-digg        {background-color:#476BA3!important}
.fa.fa-drupal:hover,        #LinkList102 .fa-drupal      {background-color:#008BCA!important}
.fa.fa-github:hover,        #LinkList102 .fa-github      {background-color:#000000!important}
.fa.fa-flickr:hover,        #LinkList102 .fa-flickr      {background-color:#FF0084!important}
.fa.fa-tumblr:hover,        #LinkList102 .fa-tumblr      {background-color:#304E6C!important}
.fa.fa-instagram:hover,     #LinkList102 .fa-instagram   {background-color:#723ef3!important}
.fa.fa-delicious:hover,     #LinkList102 .fa-delicious   {background-color:#DEDEDF!important}
.fa.fa-bitcoin:hover,       #LinkList102 .fa-bitcoin     {background-color:#f7931a!important}
.fa.fa-behance:hover,       #LinkList102 .fa-behance     {background-color:#009fff!important}
.fa.fa-soundcloud:hover,    #LinkList102 .fa-soundcloud  {background-color:#FF5419!important}
.fa.fa-khamsat:hover,       #LinkList102 .fa-khamsat     {background-color:#f9b01c!important}
.fa.fa-traidnt:hover,       #LinkList102 .fa-traidnt     {background-color:#59c5c4!important}
.fa.fa-asnad:hover,         #LinkList102 .fa-asnad       {background-color:#d4145a!important}
.fa.fa-hao123:hover,        #LinkList102 .fa-hao123      {background-color:#0ba26d!important}
.fa.fa-picalica:hover,      #LinkList102 .fa-picalica    {background-color:#615d9b!important}
.fa.fa-blogger:hover,       #LinkList102 .fa-blogger     {background-color:#fc9644!important}
.fa.fa-telegram:hover,      #LinkList102 .fa-telegram    {background-color:#32AEE1!important}
.fa.fa-mostaql:hover,       #LinkList102 .fa-mostaql     {background-color:#2caae2!important}
.fa.fa-digg:hover,          #LinkList102 .fa-digg        {background-color:#476BA3!important}
.fa.fa-quora:hover,         #LinkList102 .fa-quora       {background-color:#a82400!important}
.fa.fa-spotify:hover,       #LinkList102 .fa-spotify     {background-color:#1ed760!important}
.fa.fa-reddit:hover,        #LinkList102 .fa-reddit      {background-color:#ff4500!important}
.fa.fa-snapchat:hover,      #LinkList102 .fa-snapchat    {background-color:#f5d602!important}
.fa.fa-google-play:hover,   #LinkList102 .fa-google-play {background-color:#3d9dab!important}
.fa-google-play:before{content:'\f04b'}
.fa.fa-khamsat,.fa.fa-traidnt,.fa.fa-asnad,.fa.fa-hao123,.fa.fa-picalica,.fa.fa-blogger,.fa.fa-mostaql{font-family:FontAwesome;font-size:21px;padding-top:5px!important}
.fa.fa-hao123{padding-left:3px}
.fa.fa-mostaql,.fa.fa-khamsat,.fa.fa-picalica{padding-left:4px}
.fa.fa-blogger{padding-left:7px}
#LinkList102 .widget-content{font-size:0}
#LinkList100 ul li:nth-of-type(1){-webkit-transition:.5s ease}
#LinkList100 ul li:nth-of-type(2){-webkit-transition:.55s ease}
#LinkList100 ul li:nth-of-type(3){-webkit-transition:.7s ease}
#LinkList100 ul li:nth-of-type(4){-webkit-transition:.75s ease}
#LinkList100 ul li:nth-of-type(5){-webkit-transition:.8s ease}
#LinkList100 ul li:nth-of-type(6){-webkit-transition:.85s ease}
#LinkList100 ul li:nth-of-type(7){-webkit-transition:.9s ease}
#LinkList100 ul li:nth-of-type(8){-webkit-transition:.95s ease}
#LinkList100 ul li:nth-of-type(9){-webkit-transition:1s ease}
#LinkList100 ul li:nth-of-type(10){-webkit-transition:1.05s ease}
#LinkList100 ul li:nth-of-type(11){-webkit-transition:1.06s ease}
/* ==================== 
 * Logo & Adsense
 * ==================== */
#HeaderMid{padding:20px 30px;display:table;width:100%}
#Header1{display:table-cell;vertical-align:middle;max-width:100%}
.rtl #Header1{padding-left:20px;text-align:right}
.ltr #Header1{padding-right:20px;text-align:left}
#HTML100{width:728px;display:table-cell;vertical-align:middle;text-align:center}
.blog-title{font-family:blogfont,AltFont;font-size:29px;font-weight:700;color:$(postbody.text)}
.blog-desc{font-family:blogfont,AltFont;font-size:14px;color:$(postbody.title.color)}
.wide-header #Header1{display:block!important;width:100%;padding:0}
.wide-header #Header1 a,.wide-header #Header1 img{display:block}
.wide-header #HeaderMid{padding:0 0 20px}
.wide-header header > .wrap:first-of-type{overflow:hidden}
.wide-header #Header1_headerimg{width:100%;margin:0 auto 20px}
.wide-header #HTML100{display:block;width:100%;text-align:center}
.wide-header #HTML100 ins,.wide-header #HTML100 iframe{max-width:100%}
/* ==================== 
 * Main Menu
 * ==================== */
#LinkList101{display:none;background-color:$(menu.back);margin:0 30px;position:relative;-webkit-border-radius:3px;border-radius:3px;padding:0 20px}
.menu-1 #LinkList101{height:70px}
.menu-2 #LinkList101{height:60px}
#LinkList101>ul>li:not(.MegaUL){position:relative}
#LinkList101>ul>li{display:inline-block;vertical-align:top}
.menu-1 #LinkList101>ul>li{margin:0 3px}
.menu-1 #LinkList101>ul>li>a{font-weight:700;font-size:19px;font-family:BlogFont,AltFont;color:$(menu.link.color);padding:10px 20px;position:relative;display:block;background-color:$(menu.link.back);-webkit-border-radius:5px;border-radius:5px;margin-top:12px}
.menu-1 #LinkList101>ul>li>a:hover{color:$(menu.hover.color);background-color:$(menu.hover.back)}
.menu-1 #LinkList101>ul>li>a:focus{background-color:#FFF;color:$keycolor}
.menu-1 .Home{font-size:31px;position:relative;top:5px;color:$(menu.link.color);border:5px solid $keycolor;width:60px;background-color:$(menu.hover.back);height:60px;text-align:center;-webkit-border-radius:100%;border-radius:100%;display:inline-block;vertical-align:top;-webkit-box-shadow:0 0 30px 30px $(menu.back) inset;box-shadow:0 0 30px 30px $(menu.back) inset}
.ltr.menu-1 .Home{line-height:50px}
.rtl.menu-1 .Home{float:right;margin-left:20px}
.ltr.menu-1 .Home{float:left;margin-right:20px}
.menu-1 .Home:hover{-webkit-box-shadow:0 0 0 0 $(menu.back) inset;box-shadow:0 0 0 0 $(menu.back) inset;border:5px solid $(menu.link.color);color:$(menu.hover.color)}
.menu-1 #LinkList101 ul>li>a:focus{background-color:#FFF;color:$keycolor}
#LinkList101>ul{vertical-align:top;font-size:0}
.menu-2 #LinkList101{background-color:$(menu.back);margin:0 30px;height:60px;position:relative;-webkit-border-radius:3px;border-radius:3px;padding:0 20px}
.menu-2 .Home{font-size:31px;position:relative;padding:7px 0 0;color:$(menu.back);width:60px;background-color:$(keycolor);height:60px;text-align:center;display:inline-block;vertical-align:top}
.menu-2 .Home:hover{color:$(menu.hover.color)}
.menu-2 .Home:hover i{;-webkit-transform:scale(1.2);;-ms-transform:scale(1.2);;transform:scale(1.2)}
.menu-2 #LinkList101>ul>li>a{font-size:17px;font-weight:700;font-family:BlogFont,AltFont;color:$(menu.link.color);padding:18px 20px;position:relative;display:block}
.menu-2 #LinkList101>ul.resp-it>li>a{padding:10px 20px}
.menu-2 #LinkList101>ul>li>a:hover{color:$(menu.hover.color)}
.m-line{height:3px;position:absolute;height:100%;background-color:$keycolor;bottom:0}
.rtl .m-line{right:0}
.ltr .m-line{left:0}
.rtl.menu-2 .Home{float:right;margin-left:5px}
.ltr.menu-2 .Home{float:left;margin-right:5px}
.res-butt2{width:45px;height:45px;-webkit-border-radius:3px;border-radius:3px;background-color:$(menu.link.back);position:absolute;z-index:2;padding:10px 8px;cursor:pointer;display:none}
.menu-1 .res-butt2{top:13px}
.menu-2 .res-butt2{top:9px}
.rtl .res-butt2{right:95px}
.ltr .res-butt2{left:95px}
.res-butt2 span{display:block;background-color:$(menu.link.color);width:100%;margin:0 auto;height:5px;margin-bottom:5px;-webkit-border-radius:100px;border-radius:100px}
.res-butt2.but-active{background-color:$keycolor}
.res-butt2.but-active span{background-color:#fff}
.menu-1 .ma.subed ul{-webkit-box-shadow:0 0 10px rgba(0,0,0,0.1);box-shadow:0 0 10px rgba(0,0,0,0.1);position:absolute;top:115px;right:-webkit-calc(50% - 90px);right:calc(50% - 90px);opacity:0;padding:20px;-webkit-border-radius:5px;border-radius:5px;width:180px;background-color:$(menu.link.back);text-align:center;z-index:-1}
.menu-1 .ma.subed:hover ul{opacity:1;z-index:16;top:90px}
.menu-2 ul:not(.resp-it) .ma.subed ul{position:absolute;top:60px;width:180px;text-align:center;z-index:-1;max-height:0;-webkit-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0)}
.menu-2 ul:not(.resp-it) .ma.subed:hover ul{z-index:16;-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1)}
.menu-2 .ma.subed ul li a{border-bottom:1px solid $(menu.link.back);font-size:14px;color:$(menu.link.color);background-color:$(menu.back);display:block;padding:10px 0;font-family:blogFont,AltFont;font-weight:700}
.menu-2 .ma.subed ul li a:hover{color:$(menu.hover.color);border-bottom:1px solid $(keycolor)}
.ma.subed ul li{display:block}
.menu-1 .ma.subed ul li a{margin:0;-webkit-border-radius:0;border-radius:0;border-bottom:1px dashed $(menu.back);background-color:transparent!important;font-size:16px;color:$(menu.link.color);display:block;font-family:blogfont,AltFont;padding:10px 0}
.menu-1 .ma.subed ul li a:hover{border-bottom:1px dashed $keycolor;color:$(menu.hover.back)!important}
.menu-1 .ma.subed ul:before{content:"";position:absolute;top:-15px;left:75px;border-right:15px solid transparent;border-left:15px solid transparent;border-bottom:15px solid $(menu.link.back)}
.resp-it .ma.subed ul{position:relative;top:0!important;right:0;opacity:1;-webkit-border-radius:0;border-radius:0;width:100%;background-color:$(menu.link.back);overflow:hidden;padding:0}
.resp-it .ma.subed ul:before{display:none}
.menu-1 #LinkList101 .menu-active .ma.subed ul li a{font-size:16px;border-bottom:1px dashed $(menu.back)}
.menu-1 .ma.subed>a,.menu-1 .ma.MegaUL>a{border-bottom:1px solid $keycolor}
.menu-1 #LinkList101>ul:not(.menu-active) .ma.subed:hover{padding-bottom:50px}

/* ====== Mega Menu ======= */
#LinkList101 .MegaUL{position:initial}
.mega{-webkit-box-shadow:0 7px 15px -2px rgba(0,0,0,0.5);box-shadow:0 7px 15px -2px rgba(0,0,0,0.5);position:absolute;width:100%;padding:10px 0;z-index:-1}
.menu-2 .mega{left:0;top:60px;max-height:0;background-color:$(menu.back);max-height:0;z-index:-1;overflow:hidden}
.menu-2 .show-mega{z-index:10;max-height:260px;height:260px;overflow:hidden}
.menu-1 .mega{min-height:220px;top:90px;left:0;border-radius:1px;background-color:$(menu.back);z-index:10;display:none}
.rtl .mega a{float:right;border-left:1px solid rgba(255,255,255,.1)}
.ltr .mega a{float:left;border-right:1px solid rgba(255,255,255,.1)}
.mega a{font-size:10px;width:calc(100% / 4);padding:0 20px;margin:15px 0}
body .container .mega a:last-of-type{border:0}
.mega-thumb{display:block;height:140px;margin:0 auto;background-size:cover!important;border-radius:3px;border:5px solid $(menu.link.back)}
.mega a:hover h3{color:$(keycolor)}
.mega-thumb:hover{-webkit-transform:scale(1.05) translateY(-5px);-ms-transform:scale(1.05) translateY(-5px);transform:scale(1.05) translateY(-5px);-webkit-box-shadow:0 4px 8px -1px rgba(0,0,0,.3);box-shadow:0 4px 8px -1px rgba(0,0,0,.3)}
.mega h3{color:$(menu.link.color);font-family:LevonFont,Tahoma;font-size:14px;font-weight:700;border-radius:1px;clear:both;overflow:hidden;background-color:$(menu.link.back);padding:5px 10px;height:50px}
.mega i.fa-spinner{font-size:30px;color:$(menu.link.color);position:absolute;top:50%;margin-top:-15px;left:50%;margin-left:-15px}
abbr.mega-date{float:right;margin:5px 0;background-color:$(menu.link.back);color:$(menu.link.color);position:relative;border-radius:2px;font-family:AltFont;overflow:hidden}
.rtl .mega-date{float:right;padding:3px 30px 3px 10px}
.ltr .mega-date{float:left;padding:3px 10px 3px 30px}
.rtl .mega-date:before{right:0}
.ltr .mega-date:before{left:0}
.mega-date:before{content:"\f017";display:inline-block;background-color:$(keycolor);top:0;right:0;position:absolute;width:20px;height:20px;text-align:center;font-family:fontawesome;color:$(menu.link.back);font-size:14px;padding-top:3px}
.mega a:hover .mega-date{color:#FFF;background-color:$(keycolor);}
.rtl .mega a:hover .mega-date{padding: 3px 25px 3px 10px;margin-right:10px}
.ltr .mega a:hover .mega-date{padding: 3px 10px 3px 25px;margin-left:10px}
.mega a:hover .mega-date:before{color:#FFF}
/* ==================== 
 * Sidebar
 * ==================== */
aside .widget{margin-bottom:20px}
aside .widget h2{font-family:BlogFont ,AltFont;margin-bottom:10px;background-color:$(side.title.back);color:$(side.title.color);font-size:19px}
.rtl aside .widget h2{border-right:5px solid $keycolor;padding:10px 20px 10px 0;}
.ltr aside .widget h2{border-left:5px solid $keycolor;padding:10px 0px 10px 20px;}
aside .widget-content{overflow:hidden}
/* ================== 
 * Intro Slider
 * ================== */
.intro{overflow:hidden;display:none}
.Intro-Label{min-height:150px}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Thumb{-webkit-transform:translate(0,-70px);-ms-transform:translate(0,-70px);transform:translate(0,-70px)}
.intro[data-slides='3'] .Intro-Details{position:absolute;bottom:-20px;padding:20px;width:100%;background-color:$(intro.back);height:73px}
.rtl .intro[data-slides='3'] .Intro-Details{right:0;text-align:right;}
.ltr .intro[data-slides='3'] .Intro-Details{left:0;text-align:left;}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Details{bottom:0}
.intro[data-slides='3'] .Intro-Title{height:calc(100% - 70px);top:120px;margin-bottom:10px}
.intro[data-slides='3'] .Intro-Label:hover .Intro-Title{top:0;opacity:1}
.intro[data-slides='3'] .Intro-Label .ReadMore{background-color:$(intro.button.back);color:$(intro.button.color);position:absolute;bottom:-20px;font-size:12px;font-family:BlogFont ,AltFont;padding:10px 15px;-webkit-border-radius:3px;border-radius:3px;overflow:hidden}
.rtl .intro[data-slides='3'] .Intro-Label .ReadMore{left:20px;}
.ltr .intro[data-slides='3'] .Intro-Label .ReadMore{right:20px;}
.intro[data-slides='3'] .Intro-Label:hover .ReadMore{bottom:15px}
.intro[data-slides='3'] .Intro-Label .ReadMore:hover{background-color:$(intro.button.hover.back);color:$(intro.button.hover.color)}
.intro[data-slides='1'] .Intro-Title{bottom:20px;-webkit-border-radius:3px;border-radius:3px;opacity:1;width:auto}
.rtl .intro[data-slides='1'] .Intro-Title{right:30px;}
.ltr .intro[data-slides='1'] .Intro-Title{left:30px;}
.intro[data-slides='1'] .Intro-Label{height:300px;margin-bottom:0}
.intro[data-slides='1'] .Intro-Thumb{height:auto;min-height:100%;position:relative;top:0}
.intro[data-slides='1'] .Intro-Details,.intro[data-slides='1'] .ReadMore{display:none}
.intro[data-slides='1'] .owl-item{padding:0}
.intro[data-slides='1'] .Intro-Cate{left:20px}
.intro[data-slides='1'] .Intro-Label:after{right:20px}
.intro[data-slides='4'] .Intro-Title{max-height:100%;bottom:-100%}
.intro[data-slides='4'] .Intro-Label:hover .Intro-Title{bottom:0;opacity:1}
.intro[data-slides='4'] .Intro-Details,.intro[data-slides='4'] .ReadMore{display:none}
.intro .owl-wrapper,.intro .owl-wrapper-outer{height:100%}
#int-two{margin:20px 30px 0}
.Intro-Label{width:100%;overflow:hidden;float:right;height:100%;position:relative;-webkit-border-radius:3px;border-radius:3px}
.rtl .Intro-Label{direction:rtl;}
.Intro-Cate{position:absolute;top:10px;left:10px;font-family:BlogFont ,AltFont;font-size:14px;z-index:3;color:$(intro.label.color);opacity:.95;background-color:$(intro.label.back);padding:5px 10px;-webkit-border-radius:3px;border-radius:3px}
.Intro-Thumb{width:100%;height:100%;position:relative;z-index:2}
.Intro-Label:after{content:"\f074";position:absolute;color:rgba(255,255,255,0.3);z-index:2;font-family:FontAwesome;font-size:29px;text-align:center;right:10px;top:10px}
.Intro-Label:hover .Intro-Cate,.Intro-Label:hover:after{opacity:0}
.Intro-Title{color:#fff;font-family:BlogFont ,AltFont;display:block;overflow:hidden;width:100%;position:absolute;text-align:center;background-color:rgba(0,0,0,0.8);padding:20px;z-index:2;opacity:0;font-size:19px}
.Intro-Date,.Intro-Author{display:block;font-family:AltFont;font-size:12px;color:$(intro.details);line-height:1em}
.rtl .Intro-Date, .rtl .Intro-Author{margin-left:20px;}
.ltr .Intro-Date, .ltr .Intro-Author{margin-right:20px;}
.Intro-Date:before,.Intro-Author:before{display:inline-block;font-family:fontawesome;font-size:14px;color:$(intro.details);}
.rtl .Intro-Date:before, .rtl .Intro-Author:before{margin-left:5px}
.ltr .Intro-Date:before, .ltr .Intro-Author:before{margin-right:5px}
.Intro-Date{margin-bottom:10px}
.Intro-Date:before{content:"\f073"}
.Intro-Author:before{content:"\f007"}
.Intro-Date:hover,a.Intro-Author:hover{text-decoration:underline}
#HTML102 .owl-nav{position:absolute;top:-webkit-calc(50% - 30px);top:calc(50% - 30px);left:0;width:100%}
#HTML102 .owl-prev,#HTML102 .owl-next{color:$(intro.label.color);font-family:fontawesome;font-size:25px;background-color:$(intro.label.back);padding:8px 15px;top:0;position:absolute;-webkit-border-radius:3px;border-radius:3px;opacity:.3}
#HTML102 .owl-next{right:-50px}
#HTML102 .owl-prev{left:-50px}
#HTML102 .owl-carousel:hover .owl-prev{left:20px;opacity:.9}
#HTML102 .owl-carousel:hover .owl-next{right:20px;opacity:.9}
.I-toggle i{border:1px solid $(intro.line);width:70px;text-align:center;-webkit-border-radius:100px;border-radius:100px;background-color:$(wrapper);display:block;margin:-10px auto 0;color:$(intro.line);cursor:pointer}
.I-toggle{display:none;border-top:1px dashed $(intro.line);margin:20px 30px 10px}
.I-toggle i:hover{background-color:$(intro.line);color:$(wrapper);border:1px solid $(wrapper)}
#HTML102{min-height:160px;margin-bottom:20px;position:relative;direction:ltr!important}
.r-loading{position:absolute;top:-webkit-calc(50% - 31px);top:calc(50% - 31px);left:0;width:100%;text-align:center}
.r-loading i{color:#444;font-size:30px}
.r-loading span{font-family:BlogFont ,AltFont;color:#999;margin-top:10px;direction:rtl;display:block}
#HTML101{margin:20px 30px;overflow:hidden;direction:ltr!important}
#HTML101 h2.title{background-color:$(ticker.back);color:$(ticker.color);font-family:BlogFont ,AltFont;text-align:center;padding:12px 30px;position:relative;height:52px;-webkit-border-radius:3px;border-radius:3px;font-size:19px}
.rtl #HTML101 h2.title{float:right}
.ltr #HTML101 h2.title{float:left}
#HTML101 h2.title:after{content:"";border-top:26px solid transparent;border-bottom:26px solid transparent;position:absolute;top:0;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
.rtl #HTML101 h2.title:after{border-right:35px solid $(ticker.back);left:-10px;}
.ltr #HTML101 h2.title:after{border-left:35px solid $(ticker.back);right:-10px;}
.rtl #HTML101:hover h2.title:after{left:-15px}
.ltr #HTML101:hover h2.title:after{right:-15px}
.NTick{position:relative;padding:0 30px;font-family:BlogFont ,AltFont;font-size:16px;background-color:$(ticker.links.back);height:52px;overflow:hidden;text-align:right;}
.rtl .NTick{border-left:10px solid $(ticker.back)}
.ltr .NTick{border-right:10px solid $(ticker.back)}
/* ================== 
 * Intro Newsticker
 * ================== */
.scroll{opacity:0}
.Scroll-Title{color:$(ticker.links.color);vertical-align:top;padding:15px 15px 15px 0;display:inline-block}
.Scroll-Title:hover{color:$(ticker.back);text-decoration:underline}
.Scroll-Title:before{content:"\f0a1";color:$(ticker.links.color);width:30px;text-align:center;display:inline-block;font-family:FontAwesome;margin-top:-8px;font-size:20px;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl .Scroll-Title:before{margin-left:10px;}
.ltr .Scroll-Title:before{margin-right:10px;}
.rtl .js-marquee-wrapper{direction:rtl}
#HTML101,#HTML102{display:none}
/* ================== 
 * Default Posts
 * ================== */
.post-outer{position:relative;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid $(post.lines)}
.post-outer:last-of-type{padding-bottom:0;border-bottom:0}
.RecentThumb{width:300px;height:200px;overflow:hidden;position:relative}
.rtl .RecentThumb{float:right;margin-left:30px}
.ltr .RecentThumb{float:left;margin-right:30px}
.RecentThumb span{width:100%;-webkit-border-radius:3px;border-radius:3px;height:100%;-webkit-background-size:cover;background-size:cover;display:block;background-position:center center}
.RecentThumb:hover span{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.9}
.post-title a{color:$(post.title)}
.post-title a:hover{color:$keycolor}
.boxs:before,.boxs:after{content:"";position:absolute;top:5%;left:5%;z-index:1;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.boxs:before{border-right:1px solid $(post.image.hover);border-left:1px solid $(post.image.hover);width:90%;height:0}
.boxs:after{border-top:1px solid $(post.image.hover);border-bottom:1px solid $(post.image.hover);width:0;height:90%}
.RecentThumb:hover .boxs:before,.RecentThumb:hover .boxs:after{width:90%;height:90%}
.Thumb:hover .boxs:before,.Thumb:hover .boxs:after{width:90%;height:90%}
.RecentSnippet{font-size:14px;color:$(post.details);line-height:1.5em;font-family:BlogFont,AltFont;line-height:1.5em}
.index-time,.index-author{vertical-align:top;font-family:AltFont;font-size:12px;display:inline-block;color:$(post.details);vertical-align:2px}
.noImage{display:none}
.rtl .index-author{margin-left:20px}
.ltr .index-author{margin-right:20px}
.opac{opacity:.3}
.g-profile{display:inline-block}
.index-time:before,.index-author:before{font-family:fontawesome;font-size:14px;color:$(post.details.icons);display:inline-block;vertical-align:middle}
.rtl .index-time:before,.rtl .index-author:before{margin-left:5px}
.ltr .index-time:before,.ltr .index-author:before{margin-right:5px}
.index-author:before{content:"\f007"}
.index-time:before{content:"\f017"}
.blog-posts .details{border-top:1px solid $(post.lines);border-bottom:1px solid $(post.lines);padding:5px 0;width:-webkit-calc(100% - 330px);width:calc(100% - 330px);margin-bottom:10px}
.post-title{width:-webkit-calc(100% - 330px);width:calc(100% - 330px);display:block;margin-bottom:5px;font-family:BlogFont,AltFont;font-weight:700;font-size:17px}
.rtl .post-title{float:right}
.ltr .post-title{float:left}
.blog-posts .ReadMore{font-family:BlogFont,AltFont;background-color:$keycolor;-webkit-box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;color:#FFF;padding:8px 15px;margin-top:10px;position:relative;-webkit-border-radius:2px;border-radius:2px;overflow:hidden;font-size:14px;height:36px;line-height:normal}
.rtl .blog-posts .ReadMore{margin-left:10px;float:right}
.ltr .blog-posts .ReadMore{margin-right:10px;float:left}
.rtl .blog-posts .ReadMore:hover{-webkit-box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;padding:8px 15px 8px 50px}
.ltr .blog-posts .ReadMore:hover{-webkit-box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;padding:8px 50px 8px 15px}
.blog-posts .ReadMore:before{position:absolute;top:10px;opacity:0;font-family:fontawesome;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl .blog-posts .ReadMore:before{content:"\f060";left:20px}
.ltr .blog-posts .ReadMore:before{content:"\f061";right:20px}
.blog-posts .ReadMore:hover:before{opacity:1}
.blog-posts .ReadMore:after{content:"";width:60px;height:60px;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,0.1)));background:-webkit-linear-gradient(transparent,rgba(0,0,0,0.1));background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,0.1)));background:-webkit-linear-gradient(transparent,rgba(0,0,0,0.1));background:-webkit-gradient(linear,left top, left bottom,from(transparent),to(rgba(0,0,0,0.1)));background:-o-linear-gradient(transparent,rgba(0,0,0,0.1));background:linear-gradient(transparent,rgba(0,0,0,0.1));position:absolute;top:-5px}
.rtl .blog-posts .ReadMore:after{right:100%;-webkit-transform:rotate(-10deg);-ms-transform:rotate(-10deg);transform:rotate(-10deg)}
.ltr .blog-posts .ReadMore:after{left:100%;-webkit-transform:rotate(10deg);-ms-transform:rotate(10deg);transform:rotate(10deg)}
.rtl .blog-posts .ReadMore:hover:after{right:68%}
.ltr .blog-posts .ReadMore:hover:after{left:68%}
.ShareIndex{background-color:$keycolor;-webkit-box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;box-shadow:0 0 10px 30px rgba(0,0,0,0) inset;color:#FFF;padding:10px;margin-top:10px;position:relative;-webkit-border-radius:2px;border-radius:2px;overflow:hidden;font-size:20px;cursor:pointer;width:36px;height:36px}
.rtl .ShareIndex{float:right}
.ltr .ShareIndex{float:left}
.ShareIndex:hover{-webkit-box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset;box-shadow:0 0 10px 30px rgba(255,255,255,0.1) inset}
.ShareIndexBut{height:36px;background-color:$(post.lines);margin-top:10px;padding:7px 10px;-webkit-border-radius:2px;border-radius:2px;position:relative;display:none}
.rtl .ShareIndexBut{float:right;margin-right:20px}
.ltr .ShareIndexBut{float:left;margin-left:20px}
.ShareIndexBut a{line-height:1em;font-family:fontawesome;color:#000;width:20px;height:20px;text-align:center;padding-top:2px;-webkit-border-radius:2px;border-radius:2px;color:#FFF}
.rtl .ShareIndexBut a{float:right;margin-right:5px}
.ltr .ShareIndexBut a{float:left;margin-left:5px}
.rtl .ShareIndexBut a:first-of-type{margin-right:0}
.ltr .ShareIndexBut a:first-of-type{margin-left:0}
.ShareIndexBut:before{content:"";border-top:8px solid transparent;border-bottom:8px solid transparent;position:absolute;top:10px}
.rtl .ShareIndexBut:before{border-left:10px solid $(post.lines);right:-10px}
.ltr .ShareIndexBut:before{border-right:10px solid $(post.lines);left:-10px}
.fb{background-color:#3b5998}
.tw{background-color:#55acee}
.pin{background-color:#cc2127}
.go{background-color:#DC493C}
.index-body{overflow:hidden}
.rtl .index-body .details{float:right}
.ltr .index-body .details{float:left}
.rtl .rct .post-outer{border:0;float:right;margin-left:20px}
.ltr .rct .post-outer{border:0;float:left;margin-right:20px}
.rct-cards .RecentSnippet{overflow:hidden;height:65px}
.rct-cards .RecentThumb{float:none;width:100%;display:block;height:260px}
.rct-cards .post-title{width:100%;display:block;float:none;margin:5px 0;background-color:$(post.lines);color:$(post.title);height:60px;overflow:hidden}
.rtl .rct-cards .post-title{padding:6px 20px 10px 10px;border-right:5px solid $keycolor}
.ltr .rct-cards .post-title{padding:6px 10px 10px 20px;border-left:5px solid $keycolor}
.rct-cards .post-title a{max-height:48px;overflow:hidden;display:block}
.rct-cards .details{float:none;width:100%;margin-top:10px}
.rct-cards .ShareIndex{display:none}
.rct-cards .RecentThumb:after{position:absolute;content:'';width:100%;height:100%;top:0;right:0;background-color:#fff;opacity:0;-webkit-transition:.3s ease;-o-transition:.3s ease;transition:.3s ease}
.rct-cards:hover .RecentThumb:after{opacity:.7}
.rct-cards .RecentThumb:hover span{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-filter:blur(1px)}
.rct-cards .ReadMore{margin-left:0;float:left}
.rct-cards .ShareIndexBut{display:block;position:absolute;top:120px;margin:0;opacity:0;background-color:transparent;padding:0;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out;z-index:-1;right:-webkit-calc(50% - 67.5px);right:calc(50% - 67.5px)}
.rct-cards .ShareIndexBut a{width:30px;height:30px;padding-top:7px}
.rct-cards .ShareIndexBut:before{display:none}
.rct-cards:hover .ShareIndexBut{opacity:1;z-index:3}
/* ================== 
 * Status Messages
 * ================== */
.status-msg-wrap{clear:both;display:block;font-family:blogfont,AltFont;border:1px solid $(post.lines);padding:15px 20px;margin-bottom:20px;-webkit-border-radius:3px;border-radius:3px;color:$(post.details)}
.status-msg-wrap b{color:$keycolor}
.status-msg-wrap a{color:$(post.title)}
.status-msg-wrap a:hover{color:$keycolor;text-decoration:inderline}
.wide{width:100%!important;margin-left:0!important;margin-right:0!important}
body .navi-wide #blog-pager{width:100%!important;margin-left:0;margin-right:0}
.navi-wide.pagin-top{margin-top:-10px;margin-bottom:30px}
.related-posts.links.wide-related-links{margin:0!important;border:none!important;padding-left:0!important;padding-right:0!important}
/* ================== 
 * Pagination
 * ================== */
#Pagination span:hover,#Pagination span.curr{border-bottom-color:$(wrapper)}
#Pagination{height:70px;width:100%;text-align:center;padding:20px;background-color:$keycolor;-webkit-border-radius:3px;border-radius:3px;margin-bottom:20px;font-family:blogfont,AltFont;color:$(wrapper)}
#Pagination a{line-height:normal;color:$(wrapper);font-family:fontawesome;font-size:24px;display:inline-block;vertical-align:top;cursor:pointer;opacity:.8;}
#Pagination a:hover{opacity:1}
.nums{width:60%;margin:0 auto;display:inline-block;vertical-align:top;height:36px;overflow:hidden}
#Pagination .nums .hid-num{display:none}
.nums span{display:inline-block;vertical-align:top;font-weight:700;width:30px;border-bottom:3px solid rgba(255,255,255,0.1);font-size:14px;margin:0 5px;padding-bottom:4px;cursor:pointer;margin-bottom:20px;color:$(wrapper)}
/* ================== 
 * Homepage Sections
 * ================== */
main .widget-content{overflow:hidden;margin-bottom:20px}
main .Label{clear:both;overflow:hidden;display:none}
main .Label h2,.title-h{background-color:$(cate.title.back);color:$(cate.title.color);padding:10px 20px;font-family:BlogFont ,AltFont;margin-bottom:20px;-webkit-border-radius:3px;border-radius:3px;font-size:22px;position:relative;overflow:hidden;line-height:1}
.LabLink{text-align:center;position:absolute;top:0;font-size:16px;width:130px;z-index:2;height:100%;font-size:19px;color:#FFF;}
.rtl .LabLink{left:0;padding:8px 17px 0 7px;}
.ltr .LabLink{right:0;padding:8px 7px 0 17px;}
.LabLink:before{content:"";background-color:$keycolor;position:absolute;top:0;width:120%;height:100%;z-index:-1;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl .LabLink:before{left:-20px;border-right:10px solid $(wrapper);-webkit-transform:skew(-30deg);-ms-transform:skew(30deg);transform:skew(30deg);}
.ltr .LabLink:before{right:-20px;border-left:10px solid $(wrapper);-webkit-transform:skew(-30deg);-ms-transform:skew(30deg);transform:skew(30deg);}
.LabLink:hover:before{background-color:$(cate.title.back)}
.rtl .LabLink:after{padding-right:5px;}
.ltr .LabLink:after{padding-left:5px;}
.LabLink:hover:after{color:$keycolor}
main .Label h2:before,.title-h:before{content:"\f198";font-family:fontawesome;display:inline-block;vertical-align:top;color:$keycolor;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl main .Label h2:before,.rtl .title-h:before{margin-left:10px;}
.ltr main .Label h2:before,.ltr .title-h:before{margin-right:10px;}
.Post{overflow:hidden;position:relative}
.Title{font-weight:700;font-size:17px;font-family:BlogFont,AltFont;color:$(post.title);line-height:1.4em;margin-bottom:10px;max-height:47px;overflow:hidden;float:right;width:-webkit-calc(100% - 110px);width:calc(100% - 110px)}
.Title:hover{color:$keycolor}
.Thumb{width:90px;height:90px;overflow:hidden;-webkit-border-radius:3px;border-radius:3px;position:relative;line-height:normal}
.rtl .Thumb{float:right;margin-left:20px;}
.ltr .Thumb{float:left;margin-right:20px;}
.Thumb span{width:100%;height:100%;-webkit-background-size:cover!important;background-size:cover!important;background-position:center center!important;display:block}
.Thumb:hover span{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.9}
.Post .details{float:right;width:-webkit-calc(100% - 110px);width:calc(100% - 110px)}
.Date,.Author{font-family:AltFont;font-size:12px;color:$(post.details);display:inline-block;vertical-align:top}
.rtl .Author{margin-left:10px}
.ltr .Author{margin-right:10px}
.Date{margin-bottom:2.5px}
.Date:before,.Author:before{display:inline-block;vertical-align:top;font-family:fontawesome;font-size:14px;color:$(post.details.icons);}
.rtl .Date:before,.rtl .Author:before{margin-left:5px}
.ltr .Date:before,.ltr .Author:before{margin-right:5px}
.Date:before{content:"\f073"}
a.Date:hover,a.Author:hover{text-decoration:underline}
.Author:before{content:"\f007"}
.Snippet{font-family:BlogFont ,AltFont;color:$(post.details);font-size:14px;text-align:justify;line-height:1.5em}
/* ======= List ======= */
.list .Post{height:110px;width:-webkit-calc(50% - 10px);width:calc(50% - 10px);margin-top:20px;padding-top:20px;border-top:1px solid $(post.lines)}
.rtl .list .Post{margin-left:10px;float:right}
.ltr .list .Post{margin-right:10px;float:left}
.list .Post:nth-of-type(-n+2){height:90px;padding-top:0;border-top:none;margin-top:0}
.rtl .list .Post:nth-of-type(2n){margin-right:10px;margin-left:0}
.ltr .list .Post:nth-of-type(2n){margin-right:10px;margin-right:0}
/* ======= Cover ======= */
.cover .Post:first-of-type{width:100%;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines)}
.cover .Post:first-of-type .Title{width:-webkit-calc(100% - 320px);width:calc(100% - 320px)}
.cover .Post:first-of-type .Thumb{width:300px;height:180px}
.cover .Post:first-of-type .details{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid $(post.lines);width:-webkit-calc(100% - 320px);width:calc(100% - 320px)}
.cov:nth-of-type(-n+3){margin-top:0}
.cov{height:90px;width:50%;margin-top:20px}
.rtl .cov{float:right;padding-right:20px}
.ltr .cov{float:left;padding-left:20px}
.rtl .cov:nth-of-type(2n){padding-left:19px;padding-right:0;border-left:1px solid $(post.lines)}
.ltr .cov:nth-of-type(2n){padding-right:19px;padding-left:0;border-right:1px solid $(post.lines)}
.cov .Snippet{display:none}
/* ======= Vertical Cover ======= */
.vcover .Post:nth-of-type(n+2) .Snippet{display:none}
.vcover .Post:first-of-type{width:50%;height:480px;}
.rtl .vcover .Post:first-of-type{float:right;padding-left:19px;border-left:1px solid $(post.lines)}
.ltr .vcover .Post:first-of-type{float:left;padding-right:19px;border-right:1px solid $(post.lines)}
.vcover .Post:nth-of-type(n+6){display:none}
.vcover .Post:first-of-type .Title{width:100%}
.vcover .Post:first-of-type .details{width:100%}
.vcover .Post:first-of-type .Thumb{width:100%;height:200px;margin-bottom:20px}
.vcover .Post:nth-of-type(n+2){height:110px;width:-webkit-calc(50% - 20px);width:calc(50% - 20px);margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines);}
.rtl .vcover .Post:nth-of-type(n+2){float:right;margin-right:20px}
.ltr .vcover .Post:nth-of-type(n+2){float:left;margin-left:20px}
.vcover .Post:last-of-type{height:90px;margin-bottom:0;padding-bottom:0;border-bottom:none}
/* ======= Sided ======= */
.Sided-Section{font-size:0}
.Sided-Section .section{display:inline-block;width:-webkit-calc(50% - 10px);width:calc(50% - 10px);vertical-align:top}
.rtl .Sided-Section .section:nth-of-type(odd){margin-left:20px}
.ltr .Sided-Section .section:nth-of-type(odd){margin-right:20px}
.sided .Post{height:110px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid $(post.lines)}
.sided .Post:last-of-type{height:90px;margin-bottom:0;padding-bottom:0;border-bottom:none}
.sided .Post:first-of-type .Thumb{width:100%;height:200px;float:none;margin-left:0;margin-bottom:20px;display:block}
.sided .Post:first-of-type .Title{width:100%;float:none;display:block;height:45px}
.sided .Post:first-of-type .details{width:100%;float:none}
.sided .Post:first-of-type .Snippet{height:40px}
.sided .Post:first-of-type{height:auto}
.sided .Post:not(:first-of-type) .Snippet{display:none}
/* ======= Cards ======= */
.cards .Post{width:-webkit-calc((100% - 40px) / 3);width:calc((100% - 40px) / 3);margin-top:20px}
.rtl .cards .Post{margin-left:19px;float:right}
.ltr .cards .Post{margin-right:19px;float:left}
.cards .Post:nth-of-type(-n+3){margin-top:0}
.rtl .cards .Post:nth-of-type(3n){margin-left:0}
.ltr .cards .Post:nth-of-type(3n){margin-right:0}
.cards .Post .Thumb{width:100%;height:150px;margin-bottom:10px}
.cards .Post .Title{width:100%;height:50px}
.cards .details{padding:5px 0;border-top:1px solid $(post.lines);border-bottom:1px solid $(post.lines);overflow:hidden;clear:both;margin-bottom:5px;width:100%}
.rtl .cards .Date,.rtl .cards .Author{float:right}
.ltr .cards .Date,.ltr .cards .Author{float:left}
.cards .Date{margin-bottom:0}
.cards .Post .Snippet{text-align:justify;display:block;clear:both;height:80px}
/* ======= Broadcast ======= */
.broadcast{overflow:hidden;margin-bottom:20px}
.broadcast .current{width:60%;padding:20px;height:364px;background-color:$(cate.title.back)}
.rtl .broadcast .Post{float:right}
.ltr .broadcast .Post{float:left}
.broadcast .current .Thumb{width:100%;height:250px}
.broadcast .current .Thumb:before{content:"\f01d";color:rgba(255,255,255,0.9);position:absolute;top:-webkit-calc(50% - 47px);top:calc(50% - 47px);left:-webkit-calc(50% - 55px);left:calc(50% - 55px);font-size:110px;font-family:fontawesome;z-index:2}
.broadcast .current .Title{color:$(cate.title.color);margin-top:20px;text-align:center;width:100%}
.broadcast .Post:nth-of-type(n+2){padding:10px 20px;width:40%;height:73px;border-bottom:1px solid $(post.lines);overflow:visible;cursor:pointer;-webkit-box-shadow:-10px -20px 61px transparent inset;box-shadow:-10px -20px 61px transparent inset}
.b-current{background-color:$keycolor!important}
.b-current .Title{color:#FFF}
.b-current:after{content:"";border-top:15px solid transparent;border-bottom:15px solid transparent;position:absolute;top:-webkit-calc(50% - 15px);top:calc(50% - 15px);z-index:2;-webkit-transition:.4s ease;-o-transition:.4s ease;transition:.4s ease}
.broadcast .Post:nth-of-type(n+2) .Title{width:-webkit-calc(100% - 90px);width:calc(100% - 90px)}
.broadcast .Post:nth-of-type(n+2) .Thumb{width:70px;height:100%}
.rtl .b-current:after{right:-15px;border-left:15px solid $keycolor;}
.ltr .b-current:after{left:-15px;border-right:15px solid $keycolor;}
/* ================== 
 * Footer
 * ================== */
footer{background-color:$(footer.back);width:100%}
.f-cols{padding:20px 30px 10px;overflow:hidden;clear:both}
.f-cols .section{width:-webkit-calc((100% - 60px) /4);width:calc((100% - 60px) /4);vertical-align:top;min-height:1px}
.rtl .f-cols .section{float:right;margin-left:19px;}
.ltr .f-cols .section{float:left;margin-right:19px;}
.f-cols .widget{position:relative;width:100%}
.f-cols .widget-content{clear:both}
.rtl #Col-4{margin-left:0}
.ltr #Col-4{margin-right:0}
footer .widget h2{font-family:BlogFont ,AltFont;color:$(footer.title);padding:0 0 15px;margin-bottom:20px;font-size:19px}
.rtl footer .widget h2{float:right;}
.ltr footer .widget h2{float:left;}
footer .widget h2:before{height:2px;background-color:$keycolor;content:"";float:right;width:100%;position:relative;top:37px;z-index:2;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
footer .widget h2:after{width:100%;height:2px;background-color:$(footer.lines);top:37px;left:0;position:absolute;content:""}
.f-cols .widget-content{margin-bottom:20px}
.f-cols.no-vp{padding-top:0;padding-bottom:0}
/* ================== 
 * Contact Form
 * ================== */
#ContactForm1{-webkit-box-shadow:0 0 15px rgba(0,0,0,0.1);box-shadow:0 0 15px rgba(0,0,0,0.1);width:220px;position:absolute;z-index:3;background-color:$(wrapper);top:140px;-webkit-border-radius:3px;border-radius:3px;padding:20px;display:none}
.rtl #ContactForm1{right:20px;}
.ltr #ContactForm1{left:20px;}
#ContactForm1:before{content:"";border-right:15px solid transparent;border-left:15px solid transparent;border-bottom:15px solid $(wrapper);position:absolute;top:-15px;}
.rtl #ContactForm1:before{right:39px}
.ltr #ContactForm1:before{left:39px}
#ContactForm1 h2.title{color:#999;clear:both;width:100%;text-align:center;border-bottom:1px solid $(lines)}
#ContactForm1 h2.title:before,#ContactForm1 h2.title:after{display:none}
#ContactForm1_contact-form-error-message,#ContactForm1_contact-form-success-message{font-family:BlogFont,AltFont;color:#999;font-size:11px;direction:ltr}
footer form[name="contact-form"]{font-family:BlogFont,AltFont}
footer form[name="contact-form"] input[type='text'],footer form[name="contact-form"] textarea{border:1px solid $(lines);width:100%;padding:10px 20px;-webkit-border-radius:3px;border-radius:3px;margin-bottom:5px;color:#999}
footer form[name="contact-form"] textarea{height:75px;margin-bottom:0;resize:none}
#ContactForm1_contact-form-submit{width:100%;background-color:$(lines);-webkit-border-radius:3px;border-radius:3px;padding:10px;color:#999;font-size:16px;cursor:pointer}
#ContactForm1_contact-form-submit:hover{background-color:$keycolor;color:#FFF}
#Stats1 .widget-content{text-align:center}
#FollowByEmail1 i{float:right;font-size:55px;-webkit-border-radius:100%;border-radius:100%;width:90px;height:90px;background-color:#333;padding-top:18px;text-align:center;margin-left:20px}
i.fa.fa-microphone{color:$keycolor;font-size:50px;background-color:$(subs.buttons);width:80px;height:80px;text-align:center;-webkit-border-radius:100%;border-radius:100%;padding-top:16px;margin-top:5px;display:inline-block;cursor:pointer;vertical-align:top}
i.fa.fa-microphone.cont-open{background-color:$keycolor;color:#FFF}
.fa.fa-arrow-up{color:$(subs.text);font-size:40px!important;background-color:$(subs.buttons);width:80px;height:80px;text-align:center;-webkit-border-radius:100%;border-radius:100%;padding-top:19px;margin-top:5px;vertical-align:top;display:inline-block;cursor:pointer}
.fa-arrow-up:before{-webkit-transition:.3s linear;-o-transition:.3s linear;transition:.3s linear}
.fa-arrow-up:hover:before{color:$keycolor}
/* ================== 
 * Email Subscription
 * ================== */
#HTML140 p{font-family:BlogFont,AltFont;color:$(subs.text);font-size:14px;text-align:justify;display:inline-block;width:-webkit-calc(100% - 510px);width:calc(100% - 510px);margin:15px 20px;vertical-align:top}
#HTML140{display:inline}
.subscription{text-align:center}
#FollowByEmail1{display:inline-block;width:290px}
#f-row{width:100%;clear:both;padding:20px 30px;height:130px;position:relative}
.f-row-color{background-color:$(subs.back)}
#f-row .subscription{font-size:0;text-align:center;display:block;margin-top:15px}
#f-row .email{-webkit-border-radius:2px;border-radius:2px;background-color:$(subs.email.back);width:-webkit-calc(100% - 120px);width:calc(100% - 120px);padding:0 30px;text-align:left;direction:ltr;height:60px;font-size:12px;color:$(subs.email.color)}
#f-row .subscribe{background-color:$(subs.button.back);width:110px;font-family:BlogFont,AltFont;-webkit-border-radius:2px;border-radius:2px;font-size:19px;text-align:center;color:#fff;height:60px;vertical-align:top;cursor:pointer;margin:0 5px;padding-top:2px;outline:0;border:0}
#f-row .subscribe:hover{background-color:$(subs.button.back.hover);color:$(subs.button.color.hover)}
/* ================== 
 * Copyrights
 * ================== */
#copyrights{min-height:50px;padding:10px 30px;border-top:1px solid $(copts.line)}
.copy-color{background-color:$(copts.back);overflow:hidden}
#HTML110{display:block;margin-top:3px;color:$(copts.text);font-family:BlogFont,AltFont;font-size:14px}
.c-site a{font-family:BlogFont,AltFont;color:$(copts.link);display:inline-block;margin:0 5px;font-size:14px}
#HTML110 p{font-family:BlogFont,AltFont;display:inline-block}
.c-site a:hover{color:$keycolor!important}
.rtl #HTML110 .c-site{margin-left:30px;float:right;margin-top:2px}
.ltr #HTML110 .c-site{margin-right:30px;float:left;margin-top:2px}
/* ================== 
 * Social Sites
 * ================== */
.rtl #LinkList104{float:left}
.ltr #LinkList104{float:right}
#LinkList104 li a{background-color:$(copts.soc.back);color:$(copts.soc.color);width:30px;height:30px;text-align:center;padding-top:7px;border-radius:100%}
#LinkList104 li{vertical-align:top;display:inline-block}
#LinkList104 li a:hover{color:#FFF}
/* ==================== 
 * Widgets
 * ==================== */
/* ================== 
 * Popular Posts
 * ================== */
.popular-posts ul{font-size:0}
.popular-posts li{margin-bottom:10px;padding-bottom:10px}
.tinyPop .item-thumbnail{width:72px;height:72px}
.popular-posts:not(.tinyPop) .item-thumbnail{margin-bottom:5px}
.rtl .tinyPop .item-thumbnail{float:right;margin-left:10px}
.ltr .tinyPop .item-thumbnail{float:left;margin-right:10px}
.tinyPop .item-title a{font-size:13px}
.tinyPop .item-snippet{font-size:10px;text-align:justify}
aside .popular-posts li{border-bottom:1px dotted $(side.lines)}
footer .popular-posts li{border-bottom:1px dotted $(footer.lines)}
.popular-posts li:last-of-type{margin-bottom:0;border-bottom:none;padding-bottom:0}
.item-thumbnail{width:99%;height:130px;display:block;overflow:hidden;border:5px solid transparent}
.rtl .item-thumbnail{margin-right:1px}
.ltr .item-thumbnail{margin-left:1px}
aside .item-thumbnail{outline:1px solid $(side.lines)}
footer .item-thumbnail{outline:1px solid $(footer.lines)}
.item-thumbnail img{width:100%;height:100%}
.item-thumbnail span{width:100%;height:100%;background-size:cover!important;background-position:center center!important;display:block}
.popular-posts li:hover span{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:.7!important}
.popular-posts a{font-family:BlogFont ,AltFont;font-size:16px;display:block;width:100%;font-weight:700}
aside .popular-posts a{color:$(side.links)}
footer .popular-posts a{color:$(footer.links)}
aside .item-title a:hover{color:$(side.links.hover)}
footer .item-title a:hover{color:$(footer.links.hover)}
.item-thumbnail a{display:inline}
.item-snippet{padding-top:5px;font-size:12px;text-align:justify;width:100%;font-family:BlogFont ,AltFont}
aside .item-snippet{color:$(side.text)}
footer .item-snippet{color:$(footer.text)}
.item-content:first-of-type{margin-top:2px}
/* ================== 
 * SlideShow
 * ================== */
.slideshow-status{color:#676767;font-size:11px;margin:10px;padding:4px}
.slideshow-wrapper{display:inline-block;position:relative;width:100%}
.slideshow-wrapper:after{content:'';display:block;margin-top:100%}
.slideshow-spacer{margin:auto}
.slideshow-container{bottom:0;left:0;position:absolute;right:0;top:0}
img.gsc-branding-img-noclear{display:inline}
.slideshow-container img{display:inline}
/* ================== 
 * Labels
 * ================== */
.label-size a{vertical-align:top;font-family:BlogFont,AltFont;-webkit-border-radius:3px;border-radius:3px;display:block;white-space:nowrap;overflow:hidden;font-size:14px}
.rtl .label-size a{text-align:right;padding:10px 20px 10px 50px;}
.ltr .label-size a{text-align:left;padding:10px 50px 10px 20px;}
.label-size{display:block;margin-bottom:7px;width:100%;font-size:0}
.label-size span{display:inline-block;font-family:BlogFont;background-color:rgba(0,0,0,0.1);padding:4px 10px;font-size:12px;text-align:center;-webkit-border-radius:5px;border-radius:5px;margin-top:-33px;margin-left:10px}
.rtl .label-size span{float:left;margin-left:10px}
.ltr .label-size span{float:right;margin-right:10px}
.no-nums{display:inline-block;width:47%;margin-left:1%}
body .Label .no-nums a{padding:10px 20px;text-align:center}
.label-size:hover span{color:#FFF}
.label-size:hover a{background-color:$keycolor;color:#FFF}
.Label li a{font-size:14px;font-family:BlogFont,AltFont;padding:5px 0;display:block}
.Label li span{font-size:12px;font-family:AltFont;margin-top:-25px;padding:3px 6px;-webkit-border-radius:3px;border-radius:3px;width:30px;text-align:center}
.rtl .Label li span{float:left;}
.ltr .Label li span{float:right;}
.Label li a:before{color:$keycolor;display:inline-block;font-family:fontawesome;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl .Label li a:before{content:"\f100";padding-left:10px;}
.ltr .Label li a:before{content:"\f101";padding-right:10px;}
.Label li:hover span{background-color:$keycolor;color:#fff}
.rtl .Label li:hover a:before{margin-right:5px}
.ltr .Label li:hover a:before{margin-left:5px}
.Label li span:first-child,.Label li span:nth-of-type(2){display:none}
aside .label-size a{background-color:$(side.lines);color:$(side.links)}
aside .label-size span{color:$(side.text)}
footer .label-size a{background-color:$(footer.lines);color:$(footer.links)}
footer .label-size span{color:$(footer.text)}
aside .Label li a{border-bottom:1px solid $(side.lines);color:$(side.links)}
aside .Label li span{background-color:$(side.lines);color:$(side.text)}
aside .Label li:hover a{color:$(side.links.hover);border-bottom:1px solid $keycolor}
footer .Label li a{color:$(footer.links);border-bottom:1px solid $(footer.lines)}
footer .Label li span{background-color:$(footer.lines);color:$(footer.text)}
footer .Label li:hover a{color:$(footer.links.hover);border-bottom:1px solid $keycolor}
/* ================== 
 * Footer LinkList
 * ================== */
footer .LinkList li a{display:block;border-bottom:1px solid $(footer.lines);font-family:BlogFont ,AltFont;padding:10px 0;color:$(footer.links);font-size:14px}
footer .LinkList li a:before{content:"\f10c";font-family:fontawesome;font-size:8px;display:inline-block;vertical-align:middle}
.rtl footer .LinkList li a:before{padding-left:10px;}
.ltr footer .LinkList li a:before{padding-right:10px;}
footer .LinkList li a:hover{color:$(footer.links.hover);border-bottom:1px dotted $keycolor}
footer .LinkList li a:hover:before{content:"\f111";color:$keycolor}
/* ================== 
 * TextList
 * ================== */
.TextList li{display:block;font-family:BlogFont ,AltFont;padding:5px 0;font-size:14px}
aside .TextList li{border-bottom:1px solid $(side.lines);color:$(side.links);}
footer .TextList li{border-bottom:1px solid $(footer.lines);color:$(footer.links);}
.TextList li:before{content:"\f111";font-family:fontawesome;font-size:8px;display:inline-block;vertical-align:middle}
.rtl .TextList li:before{padding-left:10px;}
.ltr .TextList li:before{padding-right:10px;}
footer .TextList li:before{color:$(footer.lines)}
aside .TextList li:before{color:$(side.lines)}
/* ================== 
 * Statatics Widget
 * ================== */
#Stats1_totalCount{display:inline-block;vertical-align:top;font-size:30px;font-family:Arial;font-weight:700;color:$keycolor;margin-right:8px}
#Stats1_sparkline{display:inline-block;vertical-align:top;margin-bottom:10px;margin:0 10px 10px}
img[height="1"]{display:none}
/* ====================== 
 * Social Links (Sidebar)
 * ====================== */
#LinkList102{overflow:hidden}
#LinkList102 a{display:inline-block;position:relative;margin-top:8px;padding:5px 0;-webkit-border-radius:3px;border-radius:3px;text-align:center;overflow:hidden;width:48%;color:#fff;font-size:30px;height:60px;-webkit-box-shadow:0 30px 50px rgba(0,0,0,0.15) inset;box-shadow:0 30px 50px rgba(0,0,0,0.15) inset}
#LinkList102 a:nth-of-type(-n+2){margin-top:0}
.rtl #LinkList102 a{margin-left:4%}
.ltr #LinkList102 a{margin-right:4%}
.rtl #LinkList102 a:nth-of-type(even){margin-left:0}
.ltr #LinkList102 a:nth-of-type(even){margin-right:0}
#LinkList102 span{font-family:AltFont;position:relative;color:#fff;text-transform:capitalize;font-size:12px;text-align:center;margin-top:3px;vertical-align:top}
#LinkList102 br{font-size:33px;vertical-align:top}
#LinkList102 a:hover{background-color:#444!important;color:#ddd}
#LinkList102 a:hover span{color:#999}
/* ================== 
 * Weather Widget
 * ================== */
#HTML103 .widget-content{display:none}
#HTML103{margin-bottom:0}
#weather{background-color:$(weather.back);padding:20px;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 70px 70px 30px rgba(0,0,0,0.1) inset;box-shadow:0 70px 70px 30px rgba(0,0,0,0.1) inset;max-width:250px;margin:0 auto 20px}
abbr.Today{display:block;font-family:BlogFont,AltFont;text-align:center;font-size:24px;color:$(weather.back);-webkit-border-radius:5px;border-radius:5px;padding:5px 0;background-color:$(weather.color);line-height:1.5em;}
#weather i{font-size:170px;line-height:100%;text-align:center;display:block;color:$(weather.color);margin-bottom:-10px;margin-right:-60px}
span.Condition{display:block;text-align:center;color:$(weather.color);font-family:BlogFont,AltFont;font-size:20px}
span.Today-Temp{display:block;text-align:center;color:$(weather.color);font-family:Arial;font-size:24px;font-weight:700;text-transform:capitalize}
.icon{font-family:FontAwesome;font-weight:400;font-style:normal}
.icon-0:before{content:"\efb7"}
.icon-1:before{content:"\efbc"}
.icon-2:before{content:"\efbe"}
.icon-3:before{content:"\efbd"}
.icon-4:before{content:"\efbe"}
.icon-5:before{content:"\efc0"}
.icon-6:before{content:"\efc0"}
.icon-7:before{content:"\efc0"}
.icon-8:before{content:"\efc0"}
.icon-9:before{content:"\efba"}
.icon-10:before{content:"\efc0"}
.icon-11:before{content:"\efba"}
.icon-12:before{content:"\efba"}
.icon-13:before{content:"\efba"}
.icon-14:before{content:"\efba"}
.icon-15:before{content:"\efc0"}
.icon-16:before{content:"\efba"}
.icon-17:before{content:"\efc0"}
.icon-18:before{content:"\efbf"}
.icon-19:before{content:"\efc1"}
.icon-20:before{content:"\efc1"}
.icon-21:before{content:"\efc1"}
.icon-22:before{content:"\efc1"}
.icon-23:before{content:"\efc1"}
.icon-24:before{content:"\efb9"}
.icon-25:before{content:"\efb9"}
.icon-26:before{content:"\efb5"}
.icon-27:before{content:"\efc2"}
.icon-28:before{content:"\efb8"}
.icon-29:before{content:"\efc2"}
.icon-30:before{content:"\efb8"}
.icon-31:before{content:"\efb6"}
.icon-32:before{content:"\efb4"}
.icon-33:before{content:"\efb6"}
.icon-34:before{content:"\efb4"}
.icon-35:before{content:"\efc0"}
.icon-36:before{content:"\efb4"}
.icon-37:before{content:"\efbe"}
.icon-38:before{content:"\efbe"}
.icon-39:before{content:"\efbe"}
.icon-40:before{content:"\efbb"}
.icon-41:before{content:"\efc0"}
.icon-42:before{content:"\efba"}
.icon-43:before{content:"\efc0"}
.icon-44:before{content:"\efc2"}
.icon-45:before{content:"\efbe"}
.icon-46:before{content:"\efbf"}
.icon-47:before{content:"\efbe"}
/* ================== 
 * Flicker Widget
 * ================== */
.flickr-photos a{display:inline-block;width:30%;;opacity:.8}
.rtl .flickr-photos a{margin:0 0 10px 5%}
.ltr .flickr-photos a{margin:0 5% 10px 0}
.rtl .flickr-photos a:nth-of-type(3n){margin-left:0}
.ltr .flickr-photos a:nth-of-type(3n){margin-right:0}
.flickr-photos a img{-webkit-border-radius:2px;border-radius:2px}
.flickr-photos a:hover{opacity:1}
aside .goog-te-gadget-simple{border:1px solid $(side.lines);text-align:center;margin:0 auto;padding:10px;display:block}
/* ================== 
 * Archive Widget
 * ================== */
.BlogArchive select{font-family:blogFont,AltFont;width:100%;padding:10px;background:none}
aside .BlogArchive select{color:$(side.links);border:1px solid $(side.lines)}
footer .BlogArchive select{color:$(footer.links);border:1px solid $(footer.lines)}
#ArchiveList .collapsed ul{display:none}
.flat .archivedate a{font-family:BlogFont,AltFont;display:block;padding:5px 0}
aside .flat .archivedate a{border-bottom:1px solid $(side.lines);color:$(side.links);}
footer .flat .archivedate a{border-bottom:1px solid $(footer.lines);color:$(footer.links);}
.flat .archivedate a:hover{border-bottom:1px solid $keycolor;color:$(side.links.hover)}
aside .flat .archivedate a:hover{border-bottom:1px solid $keycolor;color:$(side.links.hover)}
footer .flat .archivedate a:hover{border-bottom:1px solid $keycolor;color:$(footer.links.hover)}
.flat-count{margin-top:-27px;color:$(side.text);font-size:12px}
.rtl .flat-count{float:left;}
.ltr .flat-count{float:right;}
.flat a:before{color:$keycolor;display:inline-block;font-family:fontawesome;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.rtl .flat a:before{content:"\f100";padding-left:10px;}
.ltr .flat a:before{content:"\f101";padding-right:10px;}
.rtl .archivedate:hover a:before{padding-right:5px}
.ltr .archivedate:hover a:before{padding-left:5px}
aside .toggle{color:$(side.links)}
footer .toggle{color:$(footer.links)}
.toggle:hover{color:$(keycolor)}
.toggle{font-size:0;margin-top:15px}
.rtl .toggle{font-size:0;float:right}
.ltr .toggle{font-size:0;float:left}
body .zippy.toggle-open:before{content:"\f103"}
.rtl .zippy:before{content:"\f100"}
.ltr .zippy:before{content:"\f101"}
.rtl .hierarchy .hierarchy{margin-right:10px}
.ltr .hierarchy .hierarchy{margin-left:10px}
.zippy:before{font-size:18px;font-family:fontawesome;text-align:center}
.post-count-link{display:block;width:-webkit-calc(100% - 25px);width:calc(100% - 25px);font-family:BlogFont,AltFont;padding:4px 10px;margin-bottom:5px}
.rtl .post-count-link{margin-right:20px;}
.ltr .post-count-link{margin-left:20px;}
aside .post-count-link{color:$(side.links);border-bottom:1px solid $(side.lines)}
footer .post-count-link{color:$(footer.links);border-bottom:1px solid $(footer.lines)}
aside .post-count-link:hover{border-bottom:1px solid $(keycolor)}
.post-count{margin-top:-27px;font-size:12px}
.rtl .post-count{float:left;}
.ltr .post-count{float:right;}
aside .post-count{color:$(side.text)}
footer .post-count{color:$(footer.text)}
.posts a{display:block;font-family:BlogFont ,AltFont;padding:5px 0;font-size:12px}
aside .posts a{color:$(side.text);border-bottom:1px solid $(side.lines)}
footer .posts a{color:$(footer.text);border-bottom:1px solid $(footer.lines)}
aside .posts a:hover{border-bottom:1px solid $keycolor;color:$(side.links.hover)}
footer .posts a:hover{border-bottom:1px solid $keycolor;color:$(footer.links.hover)}
/* ===================== 
 * Featured Post Widget
 * ===================== */
.post-summary p{font-size:12px;margin-bottom:10px;display:block;font-family:blogfont,AltFont}
aside .post-summary a:hover{color:$(side.links.hover)}
aside .post-summary p{color:$(side.text)}
.post-summary{padding:10px}
aside .post-summary{border:1px solid $(side.lines)}
footer .post-summary{clear:both;border:1px solid $(footer.lines)}
.post-summary a{font-family:blogfont,AltFont;font-weight:700;display:block;text-align:center;margin-bottom:10px;padding:10px;-webkit-border-radius:5px;border-radius:5px}
aside .post-summary a{background-color:$(side.lines);color:$(side.links)}
footer .post-summary a{background-color:$(footer.lines);color:$(footer.links)}
footer .post-summary a:hover{color:$(footer.links.hover)}
footer .post-summary p{color:$(footer.text)}
aside .FeaturedPost .image{padding:5px;border:1px solid $(side.lines)}
footer .FeaturedPost .image{padding:5px;border:1px solid $(footer.lines)}
/* ==================== 
 * Authors Widget
 * ==================== */
.Profile{display:none;}
.Profile .widget-content{padding:10px;position:relative;overflow:hidden;min-height:20px}
aside .Profile .widget-content{border:1px solid $(side.lines)}
footer .Profile .widget-content{border:1px solid $(footer.lines)}
.Profile .widget-content.opend{min-height:302px}
.Profile .widget-content .au-wid-card{padding:10px 0;margin:0 10px;height:70px;cursor:pointer}
aside .Profile .widget-content .au-wid-card{border-top:1px solid $(side.lines)}
footer .Profile .widget-content .au-wid-card{border-top:1px solid $(footer.lines)}
.Profile .widget-content .au-wid-card:first-of-type,.Profile .widget-content .au-wid-card:first-of-type:hover{border:none}
.Profile .widget-content .au-wid-pic{width:50px;height:50px;-webkit-border-radius:100%;border-radius:100%;-webkit-background-size:cover;background-size:cover;}
.rtl .Profile .widget-content .au-wid-pic{float:right;margin-left:10px}
.ltr .Profile .widget-content .au-wid-pic{float:left;margin-right:10px}
aside .Profile .widget-content .au-wid-pic{border:5px solid $(wrapper);-webkit-box-shadow:0 0 0 1px $(side.lines);box-shadow:0 0 0 1px $(side.lines)}
footer .Profile .widget-content .au-wid-pic{border:5px solid $(footer.back);-webkit-box-shadow:0 0 0 1px $(footer.lines);box-shadow:0 0 0 1px $(footer.lines)}
.Profile .widget-content .au-wid-name{font-family:BlogFont,AltFont;font-size:12px;margin-top:10px;font-weight:700}
aside .Profile .widget-content .au-wid-name{color:$(side.links)}
footer .Profile .widget-content .au-wid-name{color:$(footer.links)}
.Profile .widget-content .au-wid-count{font-size:10px;display:block}
aside .Profile .widget-content .au-wid-count{color:$(side.text)}
footer .Profile .widget-content .au-wid-count{color:$(footer.text)}
.Profile .widget-content .au-wid-count i{font-style:normal;margin:0 5px}
.Profile .widget-content .au-wid-count b{font-family:blogfont,AltFont;font-weight:400}
.Profile .widget-content .au-posts{top:0;right:0;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);width:100%;position:absolute;overflow:hidden;height:300px}
aside .Profile .widget-content .au-posts{background-color:$(wrapper)}
footer .Profile .widget-content .au-posts{background-color:$(footer.back)}
.au-wid-pos-links{height:190px;overflow-y:scroll}
aside .au-wid-pos-links{border-bottom:1px solid $(side.lines)}
footer .au-wid-pos-links{border-bottom:1px solid $(footer.lines)}
.au-wid-pos-links::-webkit-scrollbar{width:7px;overflow:hidden}
.au-wid-pos-links::-webkit-scrollbar-thumb:hover{background-color:$(keycolor)}
aside .au-wid-pos-links::-webkit-scrollbar-track{background-color:$(wrapper)}
aside .au-wid-pos-links::-webkit-scrollbar-thumb{background-color:$(side.lines);-webkit-border-radius:100px;border-radius:100px}
footer .au-wid-pos-links::-webkit-scrollbar-track{background-color:$(footer.back)}
footer .au-wid-pos-links::-webkit-scrollbar-thumb{background-color:$(footer.lines);-webkit-border-radius:100px;border-radius:100px}
.Profile .widget-content{position:relative;overflow:hidden}
.Profile .widget-content .au-post{overflow:hidden;display:block;padding:5px;height:50px}
.Profile .widget-content .au-post:hover .au-po-img{opacity:1;-webkit-filter:contrast(1.1);filter:contrast(1.1);}
.Profile .widget-content .au-post:hover .au-po-title{color:$keycolor}
@-webkit-keyframes soft {50%{opacity:.5}}
@keyframes soft {50%{opacity:.5}}
.Profile .widget-content .au-po-img{opacity:0.9;width:40px;height:40px;-webkit-background-size:cover;background-size:cover;background-position:center center;-webkit-border-radius:2px;border-radius:2px}
.rtl .Profile .widget-content .au-po-img{float:right;margin-left:10px;}
.ltr .Profile .widget-content .au-po-img{float:left;margin-right:10px;}
.Profile .widget-content .au-po-title{font-size:11px;background-color:transparent;font-weight:700;border:none;padding:0;margin:0;line-height:1.3em;max-height:27px;overflow:hidden;float:none;min-height:15px}
aside .Profile .widget-content .au-po-title{color:$(side.links)}
footer .Profile .widget-content .au-po-title{color:$(footer.links)}
.au-po-details{line-height:0.5em}
.Profile .widget-content .au-po-title:before,.Profile .widget-content .au-po-title:after{display:none}
.Profile .widget-content .au-po-date{font-size:8px;display:block;font-family:blogfont,AltFont;margin-top:3px}
aside .Profile .widget-content .au-po-date{color:$(side.text)}
footer .Profile .widget-content .au-po-date{color:$(footer.text)}
.Profile .widget-content .au-po-date:before{content:"\f017";font-family:fontawesome;display:inline-block;font-weight:400}
.rtl .Profile .widget-content .au-po-date:before{margin-left:5px}
.ltr .Profile .widget-content .au-po-date:before{margin-right:5px}
.au-wid-pos-card{height:61px;padding:5px}
aside .au-wid-pos-card{border-bottom:1px solid $(side.lines)}
footer .au-wid-pos-card{border-bottom:1px solid $(footer.lines)}
.hide-auths{-webkit-transform:translateX(110%);-ms-transform:translateX(110%);transform:translateX(110%);height:auto}
.Profile .widget-content .show-posts{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
.au-wid-back:Hover:before{color:$keycolor}
.au-wid-back:before{font-family:fontawesome;font-size:25px;display:inline-block;text-align:center;line-height:.7em;vertical-align:middle;padding:3px 0 0 3px;cursor:pointer}
.rtl .au-wid-back:before{margin-left:5px;}
.ltr .au-wid-back:before{margin-right:5px;}
aside .au-wid-back:before{color:$(side.text)}
footer .au-wid-back:before{color:$(footer.text)}
.rtl .au-wid-back:before{content:"\f190";}
.ltr .au-wid-back:before{content:"\f18e";}
.au-wid-prof{font-size:12px;font-family:blogfont,AltFont;font-weight:700;padding:6px 10px;-webkit-border-radius:3px;border-radius:3px;margin-top:10px}
.rtl .au-wid-prof{float:right;margin-right:10px}
.ltr .au-wid-prof{float:left;margin-left:10px}
aside .au-wid-prof{color:$(side.text);background-color:$(side.lines)}
footer .au-wid-prof{color:$(footer.text);background-color:$(footer.lines)}
.au-wid-prof:before{content:"\f007";font-family:fontawesome;font-weight:400;}
.rtl .au-wid-prof:before{margin-left:5px}
.ltr .au-wid-prof:before{margin-right:5px}
.au-wid-back{margin-top:12px}
.rtl .au-wid-back{float:left;}
.ltr .au-wid-back{float:right;}
aside .au-wid-prof:hover{color:$(wrapper);background-color:$keycolor}
footer .au-wid-prof:hover{color:$(footer.back);background-color:$keycolor}
/* ================== 
 * Posts Page
 * ================== */
/* ====== Share Buttons ====== */
.share{width:100%;clear:both;border-top:1px solid $(postbody.lines);padding:10px 0;border-bottom:1px solid $(postbody.lines);margin-bottom:20px}
.like{float:right}
.share h7{color:$(postbody.subtitle);font-size:21px;margin-top:3px;font-family:BlogFont,AltFont}
.rtl .share h7{float:right;}
.ltr .share h7{float:left;}
.share a{cursor:pointer;font-family:FontAwesome;font-size:20px;width:40px;padding:6px 0;text-align:center;color:#FFF;-webkit-border-radius:2px;border-radius:2px;vertical-align:top;height:40px}
.rtl .share a{float:left;margin-right:5px;}
.ltr .share a{float:right;margin-left:5px;}
.share a:hover{background-color:#444!important}
.share .facebook{background-color:#3C56A1}
.share .twitter{background-color:#89c9fa}
.share .google{background-color:#DC493C}
.share .pinterest{background-color:#c72527}
.share .whatsapp{background-color:#65bc54}
.share .print{background-color:#1A7DB9}
.fb-like.fb_iframe_widget:before{content:"\f09a";color:#fff;padding:10px 15px;background-color:#3C56A1;display:inline-block;position:absolute;top:0;left:0;font-family:FontAwesome;font-size:20px;height:40px;width:40px}
.fb-like.fb_iframe_widget{padding:10px 10px 10px 50px;background-color:#f5f5f5;position:relative;-webkit-border-radius:2px;border-radius:2px;vertical-align:top;height:40px;width:114px}
.fb-like.fb_iframe_widget:hover:after{width:0;opacity:0;text-indent:-100px;font-size:0}
.fb-like.fb_iframe_widget:after{content:"Like";background-color:#3C56A1;position:absolute;right:0;top:0;width:-webkit-calc(100% - 40px);width:calc(100% - 40px);height:100%;width:74px;color:#FFF;padding-top:12px;padding-left:10px;font-size:14px;font-family:Arial;text-indent:30px;font-weight:700;height:40px;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
.plus-one:before{content:"\f0d5";color:#fff;padding:10px 0;background-color:#dd4e42;display:inline-block;position:absolute;top:0;left:0;font-family:FontAwesome;font-size:20px;height:40px;width:40px}
.plus-one{padding:7px 10px 10px 50px;background-color:#f5f5f5;position:relative;-webkit-border-radius:2px;border-radius:2px;vertical-align:top;height:40px;width:114px;text-align:center}
.rtl .plus-one, .rtl .fb-like.fb_iframe_widget{float:left;margin-right:5px;}
.ltr .plus-one, .ltr .fb-like.fb_iframe_widget{float:right;margin-left:5px;}
.plus-one:hover:after{width:0;opacity:0;text-indent:-100px;font-size:0}
.plus-one:after{content:"+1";background-color:#dd4e42;position:absolute;right:0;top:0;width:-webkit-calc(100% - 40px);width:calc(100% - 40px);height:100%;width:74px;color:#FFF;padding-top:12px;padding-left:10px;font-size:14px;font-family:Arial;text-indent:30px;font-weight:700;height:40px;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out;z-index:2}
/* ====== Share Buttons ====== */
.post-body{color:$(postbody.text);padding:0 0 20px}
.post-body iframe{max-width:100%}
.post-body span{display:inline}
.post-body a:not(.ibtn){color:$(postbody.link);font-weight:700}
.post-body a:not(.ibtn):hover{color:$keycolor!important;text-decoration:underline}
.post-body,.post-body *{font-family:PostFont ,AltFont!important}
.article-title{line-height:40px;font-family:PostFont,AltFont!important;font-weight:700;font-size:26px!important;color:$(postbody.title.color)!important;padding:10px 20px;background-color:$(postbody.title.back)}
.rtl .article-title{border-right:15px solid $(keycolor);}
.ltr .article-title{border-left:15px solid $(keycolor);}
.post-body [dir] img{max-height:100%!important;height:auto!important;padding:5px;border:1px solid $(postbody.lines);display:inline-block}
.post-body h3{font-weight:700;font-size:20px}
.post-body h4{font-weight:700;font-size:18px;text-decoration:underline}

.post-body ol li{margin-right:40px;list-style:decimal;padding-right:10px}
.rtl .post-body ul li{margin-right:40px;list-style:circle;padding-right:10px}
.ltr .post-body ul li{margin-left:40px;list-style:circle;padding-left:10px}
.post-body ul li:hover{list-style:disc}
.post-body blockquote{clear:both;background-color:$(keycolor);padding:20px;margin:5px 20px;color:#FFF;-webkit-border-radius:3px;border-radius:3px;text-indent:50px;position:relative}
.post-body blockquote:before{position:absolute;font-family:fontawesome;font-size:30px;top:16px}
.rtl .post-body blockquote:before{content:"\f10e";right:-30px}
.ltr .post-body blockquote:before{content:"\f10d";left:-30px}
.static_page .post-details{display:none}
.static_page .article-title{text-align:center;margin-bottom:20px;}
/* ====== Post Details ====== */
.post-details{clear:both;width:100%;border-top:1px solid $(postbody.lines);border-bottom:1px solid $(postbody.lines);padding:5px 0;margin:10px 0}
.post-details h6{font-family:FontAwesome;color:$(postbody.details.icon);display:inline-block;vertical-align:0;font-size:14px;margin-left:5px}
.rtl .post-labels,.rtl .post-author,.rtl .post-timestamp{display:inline-block;vertical-align:top;margin-left:10px}
.ltr .post-labels,.ltr .post-author,.ltr .post-timestamp{display:inline-block;vertical-align:top;margin-right:10px}
.g-profile:hover,.published:hover,.post-labels a:hover{color:$keycolor}
.fn{display:inline-block;vertical-align:middle}
.g-profile,.timestamp-link,.post-labels a{font-family:PostFont,AltFont;color:$(postbody.details);font-size:12px}
.post-labels b{font-size:10px;color:$(postbody.details.icon);padding:0 5px}
/* ====== Posts ADS ====== */
.inline-ad{text-align:center;margin-bottom:20px}
#HTML202{margin-right:20px;margin-bottom:20px;text-align:center}
#HTML109{text-align:center}
#HTML201,#HTML203{text-align:center}
#HTML201{margin-bottom:20px}
#HTML203{margin-top:20px}
.post-body #HTML201,.post-body #HTML203{display:block}

/* ====== Long Posts ====== */
.l-block{opacity:0;height:0;overflow:hidden}
.b-active{opacity:1;height:auto}
.post-pagin{text-align:center;padding-top:20px;border-top:1px solid $(postbody.lines);margin-top:10px}
.post-pagin span{background-color:$keycolor;display:inline-block;vertical-align:top;padding:5px 10px;margin:0 5px;font-family:blogfont,AltFont!important;color:$(wrapper);-webkit-border-radius:3px;border-radius:3px;font-size:12px;cursor:pointer}
/* ================== 
 * Next & Prev Posts
 * ================== */
#BlogArchive1_ArchiveMenu{width:100%;padding:10px;font-family:BlogFont,AltFont;outline:none}
#blog-pager{overflow:hidden;-webkit-border-radius:2px;border-radius:2px;width:-webkit-calc((100% - 200px) - 20px);width:calc((100% - 200px) - 20px)}
.rtl #blog-pager{float:right;margin-right:20px}
.ltr #blog-pager{float:left;margin-left:20px}
div#blog-pager.pagin-top{float:none;width:100%;clear:both;margin-bottom:20px}
.inav:before,.inav p,.inav span{color:#ddd!important}
.blog-pager-older-link,.blog-pager-newer-link{width:50%;vertical-align:top;line-height:normal}
.inav{cursor:not-allowed}
.blog-pager-older-link{float:left;text-align:left;padding-right:10px}
.blog-pager-newer-link{float:right;text-align:right;padding-left:10px}
.blog-pager-newer-link p,.blog-pager-older-link p{font-family:BlogFont,AltFont;color:#999;font-size:16px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-weight:bold}
.blog-pager-newer-link span,.blog-pager-older-link span{font-family:BlogFont,AltFont;color:#ccc;font-size:13px;display:inline-block;vertical-align:top;margin-top:6px}
.blog-pager-newer-link:before,.blog-pager-older-link:before{width:40px;height:50px;color:#eee;font-family:fontawesome;font-size:50px;-webkit-transition:.3s ease-out;-o-transition:.3s ease-out;transition:.3s ease-out}
.blog-pager-newer-link:before{content:"\f101";float:right;text-align:right}
.blog-pager-older-link:before{content:"\f100";float:left;text-align:left}
#blog-pager a:hover p{color:$(related.links)}
.item #blog-pager a:hover span{color:$(related.details)}
#blog-pager a:hover:before{color:$keycolor}
.nav-links-only .older-text,.nav-links-only .newer-text{font-size:16px;font-weight:bold;margin-top:14px}
.nav-links-only p{margin-top:-5px}
/* ================== 
 * Related Posts
 * ================== */
.related-posts{padding-bottom:20px}
.related-posts.links{width:-webkit-calc(100% - 200px);width:calc(100% - 200px)}
.related-posts.slider{width:-webkit-calc((100% - 200px) - 20px);width:calc((100% - 200px) - 20px);margin-bottom:20px;border-bottom:1px solid $(postbody.lines)}
.rtl .related-posts{float:right;margin-right:20px}
.ltr .related-posts{float:left;margin-left:20px}
.rtl .related-posts.slider{margin-right:20px}
.rtl .related-posts.links{padding-right:20px;border-right:1px solid $(postbody.lines);margin-right:-1px}
.ltr .related-posts.links{padding-left:20px;border-left:1px solid $(postbody.lines);margin-left:-1px}
.related-h3{font-family:BlogFont ,AltFont;border-bottom:1px solid $(postbody.lines);margin-bottom:20px;color:$(postbody.subtitle);padding-bottom:10px;font-size:19px;width:-webkit-calc((100% - 200px) - 20px);width:calc((100% - 200px) - 20px)}
.rtl .related-h3{float:right;margin-right:20px}
.ltr .related-h3{float:left;margin-left:20px}
.relate-p{width:100%}
.r-details{margin-top:5px;font-family:AltFont;font-size:12px;clear:both;color:$(related.details);overflow:hidden}
.r-author{display:inline-block}
.r-date{display:inline-block;margin-bottom:5px}
.rtl .r-author{margin-left:20px}
.ltr .r-author{margin-right:20px}
.r-date:before,.r-author:before{font-family:fontAwesome;display:inline-block;vertical-align:bottom}
.rtl .r-date:before,.rtl .r-author:before{padding-left:5px}
.ltr .r-date:before,.ltr .r-author:before{padding-right:5px}
.r-date:before{content:"\f017"}
.r-author:before{content:"\f007"}
.slider .relate-Thumb{position:relative;display:block;width:100%;height:150px;margin-bottom:10px;overflow:hidden;padding:5px;border:1px solid $(postbody.lines)}
.rtl .relate-Thumb{margin-left:20px}
.ltr .relate-Thumb{margin-right:20px}
.relate-p:hover .relate-Thumb img{opacity:.7}
.relate-Thumb img{width:100%;height:100%}
.slider .related-title{line-height:21px;font-family:BlogFont,AltFont;color:$(related.links);margin-bottom:10px;height:42px;overflow:hidden}
.related-posts .owl-nav{position:absolute;top:-55px}
.rtl .related-posts .owl-nav{left:0}
.ltr .related-posts .owl-nav{right:0}
.related-posts .owl-nav div{font-family:fontawesome;width:25px;height:25px;text-align:center;padding-top:3px;display:inline-block;vertical-align:top;margin-right:5px;-webkit-border-radius:2px;border-radius:2px;color:$(postbody.subtitle);border:1px solid $(postbody.lines)}
.links .relate-p{overflow:hidden;height:68px}
.links .relate-p:not(:last-of-type){margin-bottom:10px}
.links .related-title{max-height:40px;overflow:hidden}
.links .relate-Thumb{;-webkit-border-radius:2px;border-radius:2px;width:72px;height:72px;}
.rtl .links .relate-Thumb{float:right}
.ltr .links .relate-Thumb{float:left}
.links .related-title a{font-family:blogfont,AltFont;font-weight:700;font-size:14px;color:$(postbody.subtitle)}
.links .related-title a:hover{color:$(keycolor)}
.rtl .links .related-content{float:right;width:-webkit-calc(100% - 100px);width:calc(100% - 100px)}
.ltr .links .related-content{float:left;width:-webkit-calc(100% - 100px);width:calc(100% - 100px)}
a.r-author{color:$(related.details)}
a.r-author:hover{text-decoration:underline}
/* ================== 
 * About Author
 * ================== */
.author-profile{margin-bottom:20px;overflow:hidden;min-height:390px;width:200px}
.rtl .author-profile{border-left:1px solid $(postbody.lines);float:right;}
.ltr .author-profile{border-right:1px solid $(postbody.lines);float:left;}
.profile-h3{font-family:BlogFont ,AltFont;border-bottom:1px solid $(postbody.lines);margin-bottom:20px;color:$(postbody.subtitle);padding-bottom:10px;font-size:19px}
.rtl .profile-h3{margin-left:20px;}
.ltr .profile-h3{margin-right:20px;}
.author-profile img{border:1px solid $(postbody.lines);width:-webkit-calc(100% - 20px);width:calc(100% - 20px);margin-bottom:10px;-webkit-border-radius:100%;border-radius:100%;padding:15px;display:block;}
.author-profile a{display:block;text-align:center;font-family:BlogFont ,AltFont;color:$(related.links);font-weight:700;margin-bottom:5px;font-size:18px}
.rtl .author-profile a{margin-left:20px;}
.ltr .author-profile a{margin-right:20px;}
.author-profile a:hover{color:$keycolor}
.author-profile span[itemprop="description"]{display:block;font-family:BlogFont ,AltFont;color:$(postbody.details);font-size:12px;text-align:justify}
.rtl .author-profile span[itemprop="description"]{margin-left:20px}
.ltr .author-profile span[itemprop="description"]{margin-right:20px}
/* ================== 
 * Comments
 * ================== */
.c-icons{border-bottom:1px solid $(postbody.lines);width:100%;height:50px;-webkit-border-radius:3px;border-radius:3px;}
.rtl .c-icons{text-align:left}
.ltr .c-icons{text-align:right}
.c-icons h3{margin-top:13px;font-family:BlogFont,AltFont;font-size:25px;color:$(postbody.subtitle)}
.rtl .c-icons h3{float:right;}
.ltr .c-icons h3{float:left;}
.c-icons span{margin-top:9px;-webkit-border-radius:3px;border-radius:3px;margin-right:5px;font-family:BlogFont,AltFont;cursor:pointer;font-size:14px;display:inline-block;vertical-align:top;width:91px;height:30px;background:$(comm.back) url(https://3.bp.blogspot.com/-OPew1v1hjO4/VqpIpESmS7I/AAAAAAAAAvM/v3oxGsnBVd0/s1600-r/comments.png) no-repeat}
.fbc{background-position:center -2px!important}
.blo{background-position:center -36px!important}
.dsq{background-position:center -70px!important}
.plus{background-position:center -104px!important}
.ico-act.blo{background-color:#FF9534!important}
.ico-act.fbc{background-color:#3b5998!important}
.ico-act.dsq{background-color:#2E9FFF!important}
.ico-act.plus{background-color:#DD4E42!important}
#comments{display:none}
.Blogger-Comments #comments{display:block}
.tab-cont{display:none}
.cmt_iframe_holder,.cmt_iframe_holder iframe{width:100%!important;display:block!important}
.tab-active{padding:20px 0;display:block}
.comment{margin-bottom:10px;border:1px solid $(postbody.lines);padding:30px;overflow:hidden}
.thread-toggle{display:none}
.comment-header{border-bottom:1px solid $(postbody.lines);padding-bottom:25px;margin-bottom:10px}
.rtl .avatar-image-container{float:right;margin-left:20px}
.ltr .avatar-image-container{float:left;margin-right:20px}
.avatar-image-container img{border:5px solid $(postbody.lines);width:50px;height:50px;-webkit-border-radius:3px;border-radius:3px}
cite.user{font-family:BlogFont,AltFont;font-style:normal;color:$(postbody.text);font-size:18px;font-weight:700;display:block}
cite.user a{color:$(postbody.text);display:block}
cite.user a:hover{color:$keycolor}
.datetime a{font-family:AltFont;color:$(postbody.details);font-size:12px;margin-top:5px;display:block}
.datetime a:hover{text-decoration:underline}
.comment-content{font-family:PostFont,AltFont;color:$(postbody.text);text-align:justify;line-height:1.5em;font-size:14px}
.comment-actions,.continue{display:block;text-align:left;overflow:hidden;margin-bottom:20px}
.comment-actions a,.continue a,.loadmore a{font-family:PostFont,AltFont;color:$(postbody.text);background-color:$(postbody.lines);padding:5px 20px;-webkit-border-radius:2px;border-radius:2px;margin:0 10px}
.rtl .comment-actions a,.continue a,.loadmore a{float:left;}
.ltr .comment-actions a,.continue a,.loadmore a{float:right;}
.comment-actions a:hover,.continue a:hover,.loadmore a:hover{background-color:$keycolor;color:#FFF}
.loadmore a{margin:20px 0}
#bc_0_5L{overflow:hidden}
p.comment-msg{font-family:blogFont,AltFont;font-size:15px;font-weight:700;color:$(postbody.details);margin-bottom:10px}
p.comment-msg:before{font-family:fontawesome;display:inline-block;vertical-align:middle;color:$keycolor}
.rtl p.comment-msg:before{content:"\f0a5";margin-left:10px}
.ltr p.comment-msg:before{content:"\f0a4";margin-right:10px}
/* ================== 
 * ShortCodes
 * ================== */
/* ====== Messages ====== */
.sh-msg{font-style:normal;padding:20px 20px;display:block!important;clear:both;line-height:1.5em;-webkit-border-radius:3px;border-radius:3px;border:2px solid rgba(0,0,0,0.05);color:#FFF;font-weight:700;text-align:justify;text-shadow:1px 1px 2px rgba(0,0,0,0.1)}
.sh-msg:before{content:"\f05a";display:inline-block;padding-left:20px;font-family:fontawesome;font-size:44px;vertical-align:middle;font-weight:400}
.rtl .sh-msg:before{padding-left:20px}
.ltr .sh-msg:before{padding-right:20px}
.sh-msg.short-info{background-color:#80E4EC}
.sh-msg.short-error{background-color:#FF8585}
.sh-msg.short-success{background-color:#50DA79}
.sh-msg.short-warning{background-color:#ECD152}
/* ====== Contact Form ====== */
 #ContactForm2{display:none}
.post-body #ContactForm2{display:block}
.rtl .inside-contact .contact-form-name{margin-left:1%}
.ltr .inside-contact .contact-form-email{margin-left:1%}
.rtl .inside-contact input[type='text']{float:right;width:49.5%}
.ltr .inside-contact input[type='text']{float:left;width:49.5%}
.rtl .inside-contact input[type='text'],.rtl .inside-contact textarea{direction:rtl}
.ltr .inside-contact input[type='text'],.ltr .inside-contact textarea{direction:ltr}
.inside-contact input[type='text'],.inside-contact textarea{border:1px solid $(postbody.lines);padding:10px 20px;-webkit-border-radius:3px;border-radius:3px;margin-bottom:5px;color:$(postbody.text);font-size:14px;font-family:PostFont,AltFont!important;resize:vertical}
.inside-contact textarea{display:block;width:100%}
.inside-contact input[type='text']:focus,.inside-contact textarea:focus{border:1px solid $keycolor}
.contact-buttons{float:left}
.contact-buttons *{display:inline-block;background-color:#eee;color:#666;padding:12px 0;-webkit-border-radius:3px;border-radius:3px;font-family:BlogFont,AltFont!important;font-weight:700;cursor:pointer;width:100px;text-align:center;font-size:16px;border:2px solid #ddd;outline:none}
#ContactForm2 .contact-form-button-submit:hover{border:2px solid #37a96d;background-color:#4cd08b}
.cancel-button:hover{border:2px solid #9c3030;background-color:#bf4545}
.contact-buttons *:hover{color:#FFF}
.inside-contact{margin-bottom:20px}
.contact-message{float:right;margin-top:10px}
.contact-message p{font-family:PostFont,AltFont!important;font-size:12px;color:$(postbody.text)}
.contact-message p img{float:right;vertical-align:-3px;margin:6px 0 0 10px;padding:0;border:0}
.contact-message p img{float:right;vertical-align:-3px;margin:6px 0 0 10px;padding:0;border:0}
/* ====== Accordion ====== */
.accordion .acor-title{background-color:$(postbody.lines);color:$(postbody.text);padding:10px 20px;position:relative;cursor:pointer;height:50px;font-weight:700}
.accordion .acor-content{width:100%;max-height:0;padding:0 20px;margin-bottom:10px;text-align:right;display:block;overflow:hidden}
.accordion .acor-title:after{content:"\f055";font-family:fontawesome;position:absolute;font-size:30px;top:8px;color:rgba(0,0,0,0.2);font-weight:400}
.rtl .accordion .acor-title:after{left:20px}
.ltr .accordion .acor-title:after{right:20px}
h6.acor-title-active:after{content:"\f056"}
div.acor-content.acor-active{max-height:1000px;padding:20px}
h6.acor-title-active{background-color:$keycolor}
/* ====== Buttons ====== */
.ibtn{-webkit-border-radius:5px;border-radius:5px;display:inline-block;vertical-align:top;font-weight:700;margin:5px;border:1px solid rgba(0,0,0,0.05);-webkit-transition:.2s ease-out;-o-transition:.2s ease-out;transition:.2s ease-out;-webkit-box-shadow:0 -20px 75px 0 rgba(0,0,0,0.2) inset;box-shadow:0 -20px 75px 0 rgba(0,0,0,0.2) inset;text-shadow:1px 1px 0 rgba(0,0,0,0.1);font-family:BlogFont ,AltFont!important}
.ibtn:hover{-webkit-box-shadow:0 -20px 75px 0 rgba(0,0,0,0.25) inset;box-shadow:0 -20px 75px 0 rgba(0,0,0,0.25) inset}
.ibtn-1{padding:10px 15px;font-size:16px}
.ibtn-2{padding:10px 25px;font-size:17px}
.ibtn-3{padding:15px 30px;font-size:20px}
.ibtn-4{padding:20px 35px;font-size:24px}
.iDown:before{content:"\f0ed";font-family:fontawesome;display:inline-block;vertical-align:top}
.rtl .iDown:before{padding-left:10px}
.ltr .iDown:before{padding-right:10px}
.iDown.ibtn-1:before{font-size:24px}
.iDown.ibtn-2:before{font-size:25px}
.iDown.ibtn-3:before{font-size:28px;font-size:31px}
.iPrev:before{content:"\f002";font-family:fontawesome;display:inline-block;vertical-align:top}
.rtl .iPrev:before{padding-left:10px}
.ltr .iPrev:before{padding-right:10px}
.iPrev.ibtn-1:before{font-size:20px}
.iPrev.ibtn-2:before{font-size:25px}
.iPrev.ibtn-3:before{font-size:28px;font-size:31px}
/* ====== Slider ====== */
.post-body .slider{clear:both;margin:20px auto;width:100%;display:none}
.post-body .owl-carousel .owl-item{height:100%}
.post-body .slider a{display:block;position:relative;direction:rtl}
.post-body .slider-cover a{height:auto}
.post-body .slider .owl-dot{display:inline-block;width:20px;height:20px;vertical-align:top;margin:0 3px}
.post-body .slider .owl-dot span{display:block;width:100%;height:100%;background-color:$(postbody.lines);-webkit-border-radius:100%;border-radius:100%;border:5px solid #FFF;-webkit-box-shadow:0 0 6px -3px #000;box-shadow:0 0 6px -3px #000}
.post-body .slider img{width:100%;min-height:100%;padding:0;border:none;border-radius:2px;}
.post-body .slider .owl-nav div{z-index:5;display:block;font-family:fontawesome!important;text-align:center;-webkit-border-radius:2px;border-radius:2px;font-weight:700}
.post-body .slider-cover .owl-item a:after,.slider-cover .owl-item div:after{content:attr(title);position:absolute;width:100%;bottom:0;display:block;z-index:2;color:#FFF;font-family:PostFont ,AltFont!important;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background:-webkit-linear-gradient(transparent,#000 100%);background:-webkit-gradient(linear,left top, left bottom,from(transparent),to(#000));background:-o-linear-gradient(transparent,#000 100%);background:linear-gradient(transparent,#000 100%);padding:30px}
.slider-cover .owl-item{padding:0}
.slider-cover .owl-dots{position:absolute;top:20px;right:30px}
.post-body .slider-cover .owl-dot span{background-color:rgba(255,255,255,0.1);border:5px solid rgba(255,255,255,0.1)}
.slider-cover .owl-dot.active span{border:5px solid #fff}
.slider-cover .owl-nav div{background-color:rgba(0,0,0,0.7);color:#FFF;width:40px;height:40px;top:20px;font-size:30px;line-height:37px;position:absolute;}
.slider-cover .owl-next{left:65px}
.slider-cover .owl-prev{left:20px}
.slider-cover .owl-nav div:hover{background-color:$keycolor}
.slider-carousel a{height:auto}
.slider-carousel[data-items='2'] .owl-stage{height:250px;overflow:hidden}
.slider-carousel[data-items='3'] .owl-stage{height:200px;overflow:hidden}
.slider-carousel[data-items='4'] .owl-stage{height:150px;overflow:hidden}
.slider-carousel .owl-item div,
.slider-carousel .owl-item a,
.slider-carousel .owl-item img{width:100%;display:block;height:100%}
.slider-carousel .owl-item a,.slider-carousel .owl-item div{position:relative}
.slider-carousel .owl-item a:after,.slider-carousel .owl-item div:after{content:attr(title);position:absolute;width:100%;bottom:0;display:block;z-index:2;color:#FFF;font-family:PostFont ,AltFont!important;background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background:-webkit-linear-gradient(transparent,#000 100%);background:-webkit-gradient(linear,left top, left bottom,from(transparent),to(#000));background:-o-linear-gradient(transparent,#000 100%);background:linear-gradient(transparent,#000 100%);line-height:1.5;overflow:hidden;font-size:14px;font-weight:700;text-align:right;padding:20px 15px}
.slider-carousel .owl-dots{float:right;margin-top:20px;margin-right:10px;text-align:center;direction:rtl}
.slider-carousel{width:102%;margin-right:-1%}
.slider-carousel .owl-dot span{background-color:$(wrapper);border:5px solid #FFF}
.slider-carousel .owl-dot.active span{background-color:$keycolor;border:3px solid #FFF}
.slider-carousel .owl-nav div:hover{background-color:$keycolor;color:#FFF}
.slider-carousel .owl-next{left:15px}
.slider-carousel .owl-prev{left:10px}
.slider-carousel .owl-nav div{background-color:$(postbody.lines);color:$keycolor;width:30px;height:30px;top:10px;font-size:26px;float:left;line-height:31px;position:relative}
/* ====== Programmers Codes ====== */
.s-code::-webkit-scrollbar{height:10px}
.s-code::-webkit-scrollbar-track{-webkit-border-radius:100px;border-radius:100px}
.s-code::-webkit-scrollbar-thumb{background-color:#444;-webkit-border-radius:100px;border-radius:100px}
.s-code.t-HTML::-webkit-scrollbar-thumb:hover{background-color:#2AA4DA}
.s-code.t-CSS::-webkit-scrollbar-thumb:hover{background-color:#0A9E6A}
.s-code.t-JAVASCRIPT::-webkit-scrollbar-thumb:hover{background-color:#B58A33}
.s-code.t-CODE::-webkit-scrollbar-thumb:hover{background-color:#CCC}
.s-code{background-color:#222;clear:both;display:block;direction:ltr;width:100%;-webkit-border-radius:3px;border-radius:3px;overflow:hidden}
.s-code:hover{overflow-x:scroll}
.t-code{display:table-cell;vertical-align:top;width:100%;margin:0;white-space:normal}
.t-code code{display:block;color:#ccc;font-size:14px;font-family:monospace!important;height:30px;padding:7px 20px;white-space:nowrap}
.t-code code:nth-of-type(odd){background-color:#151515}
.l-code{display:table-cell;vertical-align:top;min-width:40px;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}
.l-code em{display:block;font-style:normal;color:#fff;text-align:center;font-family:sans-serif!important;height:30px;line-height:1;padding-top:7px}
.l-code em:nth-of-type(odd){background-color:rgba(255,255,255,0.1)}
.s-code:before{display:table-caption;width:100%;padding:0 20px;font-family:monospace;font-size:24px;height:50px;padding-top:10px;font-weight:700}
.t-HTML .l-code{background-color:#2AA4DA}
.t-CSS .l-code{background-color:#0A9E6A}
.t-JAVASCRIPT .l-code{background-color:#B58A33}
.t-CODE .l-code{background-color:#444}
.s-code.t-HTML:before{content:"< HTML >";border-bottom:2px solid #2AA4DA;color:#2AA4DA}
.s-code.t-CSS:before{content:"< CSS >";border-bottom:2px solid #0A9E6A;color:#0A9E6A}
.s-code.t-JAVASCRIPT:before{content:"< JAVASCRIPT >";border-bottom:2px solid #B58A33;color:#B58A33}
.s-code.t-CODE:before{content:"< CODE >";border-bottom:2px solid #999;color:#999}
/* ==================== 
 * Archive Page
 * ==================== */
.rtl .ArchivePage .Ar-Category{padding-right:60px;-webkit-border-radius:0 100px 100px 0;border-radius:0 100px 100px 0;border-left:5px solid $keycolor}
.ltr .ArchivePage .Ar-Category{padding-left:60px;-webkit-border-radius:100px 10px 10px 100px;border-radius:100px 10px 10px 100px;border-right:5px solid $keycolor}
.ArchivePage .Ar-Category{display:block;font-size:20px;font-family:BlogFont,AltFont!important;font-weight:700;margin-top:20px;background-color:$(postbody.lines);padding:5px 30px;margin-bottom:10px;height:40px;position:relative;line-height:1.5em}
.Ar-Category:before{font-family:fontawesome;font-size:14px;display:inline-block;color:#fff;content:"\f02c";font-weight:400;background-color:$keycolor;width:40px;height:40px;position:absolute;text-align:center;padding-top:6px;top:0;font-size:17px}
.rtl .Ar-Category:before{-webkit-border-radius:0 100px 100px 0;border-radius:0 100px 100px 0}
.ltr .Ar-Category:before{-webkit-border-radius:100px 0 0 100px;border-radius:100px 0 0 100px}
.rtl .Ar-Category:before{right:0;}
.ltr .Ar-Category:before{left:0;}
.arch-link{display:block;font-size:14px}
/* ================== 
 * Print Style
 * ================== */
@media print {
#HeaderTop,#HeaderMid,#HeaderBot,#Intro,.I-toggle,aside,.share,.author-profile,.related-h3,.related-posts,#blog-pager,#HTML106,#LinkList104,#HTML201,#HTML202,#HTML203,.mobile .mobile-pager,.mobile .share,.SettBox,footer,#copyrights{display:none!important}
.article-title,.post-details{text-align:center!important}
body{background:#FFF}
.mainWrapper{-webkit-box-shadow:none;box-shadow:none;}
.post-body blockquote{-webkit-print-color-adjust: exact;}
header{margin-top:0!important}
main{width:100% !important;float:none!important;border:none!important;padding:0!important}
.mainWrapper{width:100%!important;max-width:5000px!important}
}
/* ===================== 
 * Responsive [Custom]
 * ===================== */
.resp-it{overflow:visible!important;position:absolute;width:200px;background-color:$(menu.back);top:100px;z-index:5;padding:20px;-webkit-border-radius:3px;border-radius:3px;right:25px;display:none}
.rtl .resp-it{right:15px}
.ltr .resp-it{left:15px}
.resp-it li{width:100%;float:none;display:block;text-align:center;float:right;margin-left:5px}
#LinkList101 .menu-active .ma>a{margin-top:0;background-color:transparent;color:$(menu.link.color);-webkit-border-radius:0!important;border-radius:0!important;border-bottom:1px dashed $(menu.link.color)}
#LinkList101 .menu-active .ma>a:hover{background:none!important;border-bottom:1px dashed $keycolor;color:$(menu.hover.back)!important}
.resp-it:before{content:"";border-right:20px solid transparent;border-left:20px solid transparent;border-bottom:20px solid $(menu.back);position:absolute;top:-17px;right:-webkit-calc(50% - 20px);right:calc(50% - 20px)}
.show-bt{display:block!important}
.mobile .post-outer:last-of-type{padding-bottom:0;border-bottom:0}
.mobile .m-Nav{font-family:BlogFont,AltFont;padding:8px 10px;width:50%;color:#999}
.mobile-older{float:left;text-align:left;border-right:1px solid #EEE}
.mobile .m-Nav p{font-family:BlogFont,AltFont;font-size:16px;font-weight:700;color:#999}
.mobile .m-Nav span{font-size:13px;color:#ccc}
.mobile-newer{float:right}
.desktop-disp{line-height:normal;width:200px;background-color:$keycolor;color:#FFF;padding:10px 0;display:block;margin:20px auto;text-align:center;font-family:BlogFont,AltFont;font-size:19px;-webkit-border-radius:3px;border-radius:3px;border-bottom:5px solid rgba(0,0,0,0.1)}
.desktop-disp:before{content:"\f108";font-family:fontawesome;font-size:40px;display:block}
.mobile .article-title{margin-top:20px}
.mobile-post-outer{border-bottom:1px solid $(post.lines);padding:20px 0}
.index-thumb{display:inline-block;padding:5px;vertical-align:top;border:1px solid $(post.lines);height:100px;width:100px}
.index-thumb span{display:block;width:100%;height:100%;-webkit-background-size:cover!important;background-size:cover!important;background-position:center center!important}
.rtl .mobile-post-details{display:inline-block;vertical-align:top;padding-right:10px;width:calc(100% - 105px)}
.ltr .mobile-post-details{display:inline-block;vertical-align:top;padding-left:10px;width:calc(100% - 105px)}
.mobile-index-title a{font-family:BlogFont,AltFont;color:$(post.title);display:block;font-size:19px;line-height:1.2;margin-bottom:5px}
.mobile-post-snippet{font-family:BlogFont,AltFont;color:$(post.details);font-size:14px;text-align:justify;display:block}
.mobile main,.mobile aside{display:block;border:0;float:none;width:100%;clear:both;border:0;padding:0 30px;margin:0}
.mobile .item-thumbnail{width:72px;height:72px;position:relative;margin-bottom:0}
.mobile.rtl .item-thumbnail{float:right;margin-left:20px}
.mobile.ltr .item-thumbnail{float:left;margin-right:20px}
.mobile .item-title a{display:block;font-size:14px}
.mobile #HTML109{margin-top:20px}
@media screen and (max-width :1100px) {
body .container #Header1{float:none;display:block;width:100%;text-align:center;vertical-align:top;margin-bottom:20px}
#Header1_headerimg{display:block;height:auto;width:auto;margin:0 auto 20px}
#HTML100{display:block;vertical-align:top;width:100%;min-height:auto}
}
@media screen and (max-width :1024px) {
body .mainWrapper{width:100%}
}
@media screen and (max-width :900px) {
.res-butt1,.res-butt2{display:block}
aside .widget{vertical-align:top;width:-webkit-calc(50% - 10px);width:calc(50% - 10px);margin-bottom:20px}
.rtl aside .widget{float:right}
.ltr aside .widget{float:left}
.rtl aside .widget:nth-of-type(odd){margin-left:20px}
.ltr aside .widget:nth-of-type(odd){margin-right:20px}
#LinkList102 a{width:100px}
.rtl #PageList1{width:50px;float:right}
.ltr #PageList1{width:50px;float:left}
#PageList1 ul{background-color:$(top.back);position:absolute;max-width:220px;min-width:150px;text-align:center;top:60px;-webkit-border-radius:3px;border-radius:3px;padding:20px;z-index:3;display:none}
.rtl #PageList1 ul{right:-20px}
.ltr #PageList1 ul{left:-20px}
.mega{display:none}
#PageList1 ul:before{border-bottom:10px solid $(top.back)}
#PageList1 li a:after{display:none}
#PageList1 ul:before{content:"";border-right:10px solid transparent;border-left:10px solid transparent;position:absolute;top:-9px}
#PageList1 ul:before{content:"";border-right:10px solid transparent;border-left:10px solid transparent;position:absolute;top:-9px}
.rtl #PageList1 ul:before{right:25px}
.ltr #PageList1 ul:before{left:25px}
#PageList1 li a:after{display:none}
#PageList1 li a{font-weight:700;-webkit-border-radius:3px;border-radius:3px;margin:0 0 5px}
#PageList1 li{display:block}
body .container main,body .container aside{border:0;float:none;width:100%;clear:both;border:0;padding:0 30px;margin:0}
.ma.subed ul:before{display:none}
#LinkList102{text-align:center}
#LinkList100{max-width:-webkit-calc(100% - 50px);max-width:calc(100% - 50px);overflow:hidden}
#HeaderMid{display:block}
#LinkList101>ul{overflow:visible;position:absolute;width:200px;background-color:$(menu.back);z-index:3;padding:20px;-webkit-border-radius:3px;border-radius:3px;display:none}
.menu-1 #LinkList101>ul{top:90px}
.menu-2 #LinkList101>ul{top:60px;-webkit-border-radius:0 0 3px 3px;border-radius:0 0 3px 3px}
.rtl.menu-2 #LinkList101>ul{right:90px;left:90px}
.menu-2 #LinkList101>ul:before{display:none}
.rtl.menu-1 #LinkList101>ul{right:15px}
.ltr.menu-1 #LinkList101>ul{left:15px}
#LinkList101>ul>li{width:100%;float:none;display:block;text-align:center;float:right;margin-left:5px}
#LinkList101>ul:before{content:"";border-right:20px solid transparent;border-left:20px solid transparent;border-bottom:20px solid $(menu.back);position:absolute;top:-17px;right:-webkit-calc(50% - 20px);right:calc(50% - 20px)}
#LinkList101 .ma.subed>ul{position:relative;top:0;right:0;opacity:1;-webkit-border-radius:0;border-radius:0;width:100%;background-color:$(menu.link.back);overflow:hidden;padding:0;display:block;max-height:100%;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}
.menu-2 #LinkList101>ul>li>a{padding:10px 20px}
}
@media screen and (max-width :768px) {
.share h7{float:none;clear:both;display:block;width:100%;margin-bottom:10px;text-align:center}
.author-profile{border:1px solid $(postbody.lines)}
body .container .related-posts.links{padding:0;border:none}
.rtl .author-profile a{text-align:right}
.ltr .author-profile a{text-align:left}
.ltr .author-profile img{margin-right:20px}
.rtl .author-profile img{margin-left:20px}
body .container .profile-h3,body .container .author-profile a,body .container .author-profile span[itemprop="description"]{margin-left:0;margin-right:0}
.rtl .related-posts.slider{margin-right:0}
}
@media screen and (max-width:640px) {
body .container #LinkList104{float:none;margin:0 auto 10px;text-align:center;clear:both}
.c-site{display:block!important;float:none!important;margin:0!important}
.c-right{padding-top:15px;text-align:center}
body .container .share h7{clear:both;width:100%;float:none;display:block}
body .container .share a,body .container .fb-like.fb_iframe_widget,body .container .plus-one{display:inline-block;float:none;margin:10px auto 0}
.share{text-align:center;direction:ltr}
.fb-like.fb_iframe_widget:after{text-indent:-30px}
#HTML140{display:block;margin-left:0;text-align:center;margin-bottom:10px}
#HTML140 p{display:inline-block;width:-webkit-calc(100% - 190px);width:calc(100% - 190px)}
.c-icons{height:auto;border:0}
body .container .c-icons{text-align:initial}
body .container .c-icons h3{border-bottom:1px solid $(postbody.lines);display:block;float:none;clear:both;margin-bottom:10px}
.c-icons span:first-of-type{margin-left:0}
.comment{padding:20px}
.separator a{margin-right:0!important;margin-left:0!important}
}
@media screen and (min-width :385px) and (max-width : 480px) {
.rtl #LinkList102 a:nth-of-type(even){margin-left:4%}
.ltr #LinkList102 a:nth-of-type(even){margin-right:4%}
.rtl #LinkList102 a:nth-of-type(3n){margin-left:0}
.ltr #LinkList102 a:nth-of-type(3n){margin-right:0}
}
@media screen and (max-width :480px) {
aside .widget{display:block;vertical-align:top;width:100%;margin:0 0 20px}
#HeaderTop,#HeaderMid,body .container main,body .container aside,#copyrights,.f-cols{padding-left:20px;padding-right:20px}
#int-one,#int-two,#HeaderBot #LinkList101{margin-left:20px;margin-right:20px}
.popular-posts li{width:100%;margin:0 0 10px!important;float:none;height:auto}
#f-row .email{padding:0 20px}
.rtl #ContactForm1{right:-webkit-calc(50% - 100px);right:calc(50% - 100px)}
.ltr #ContactForm1{left:-webkit-calc(50% - 100px);left:calc(50% - 100px)}
body .container .inside-contact input[type='text']{float:none;margin-left:0;width:100%}
}
@media screen and (max-width :320px) {
#HeaderTop,#HeaderMid,body .container main,body .container aside,#copyrights,.f-cols{padding-left:10px;padding-right:10px}
#int-one,#int-two,#HeaderBot #LinkList101{margin-left:10px;margin-right:10px}
.menu-2 #LinkList101>ul{right:20px}
.index-thumb{display:block;margin-bottom:20px;width:100%;height:180px}
body .container .mobile-post-details{padding-right:0;padding-left:0;width:100%;display:block;}
#f-row{padding:20px 10px}
body .container #HTML140 p{margin:10px 0}
body .container #Blog1 .author-profile{padding:10px}
.post-body blockquote{margin:5px 0}
.ltr .author-profile img{margin-right:10px}
.rtl .author-profile img{margin-left:10px}
.comment{padding:10px}
}
@media screen and (max-width :240px) {
.t-search.fa,.search-form{display:none}
#LinkList100{margin-top:-50px}
#HeaderTop,#HeaderMid,body .container main,body .container aside,#copyrights{padding-left:10px;padding-right:10px}
#int-one,#int-two,#LinkList101{margin-left:10px;margin-right:10px}
}
/* ===================== 
 * Error Page
 * ===================== */
.error{text-align:center;position:absolute;top:-webkit-calc(50% - 137.5px);top:calc(50% - 137.5px);left:-webkit-calc(50% - 180px);left:calc(50% - 180px)}
.fa-bolt{background-color:$keycolor;font-size:80px!important;width:100px;height:100px;-webkit-border-radius:100%;border-radius:100%;padding:10px;color:#FFF}
.error span{display:block;font-family:blogfont,AltFont;font-size:40px;margin-top:20px;color:$keycolor;font-weight:700}
.error p{font-family:blogfont,AltFont;font-size:22px;color:$(post.title)}
.error a{background-color:$(post.lines);color:$(post.details);font-family:blogfont,AltFont;margin:10px auto;padding:10px 20px;display:block;-webkit-border-radius:3px;border-radius:3px;width:170px;font-size:19px}
.error a:hover{background-color:$keycolor;color:#fff}
/* ===================== 
 * Owner Styles
 * ===================== */

]]></b:skin>
<b:template-skin>
<b:variable default='1100px' name='content.width' type='length'/>
<b:variable default='250px' name='main.column.left.width' type='length'/>
<![CDATA[
.mainWrapper{width:93%;max-width:$(content.width)}body.wide-back .wrap{width:100%;max-width:$(content.width);margin:0 auto}main{width:-webkit-calc(100% - ($(main.column.left.width) + 20px));width:calc(100% - ($(main.column.left.width) + 20px))}aside{width:$(main.column.left.width)}body#layout *{line-height:1.5!important;font-family:Tahoma;font-weight:400;margin:0!important;padding:0!important;border:none!important;background:none!important;height:auto!important}body#layout{padding:215px 0 0!important;width:800px;margin:0 auto!important;background:#fff url(https://1.bp.blogspot.com/-laRZGw6IQCg/Wb00RrTvxlI/AAAAAAAAAuc/rwDN9dyoxlQ2ZhOy2L_u4cD5dJQ1vxfTQCK4BGAYYCw/s1600/lc.png) no-repeat top center!important}body#layout .mainWrapper{width:100%}body#layout .section h4,body#layout #ContactForm2,body#layout #HTML110,body#layout .SettBox,body#layout #Label500{display:none}body#layout main{display:inline-block;width:500px;display:inline-block;vertical-align:top;padding-top:20px!important}body#layout aside{width:220px;display:inline-block;vertical-align:top;background:#FFF!important}body#layout .c-rtl aside{padding:20px 20px 0 0 !important}body#layout .c-ltr aside{padding:20px 20px 0!important}body#layout .draggable-widget .widget-wrap2{cursor:url(https://4.bp.blogspot.com/-Z6RBU0QKb-8/VhRO15keQII/AAAAAAAABiQ/ejM6FgCPelg/s1600-r/grabbing.png) 8 8,move!important}body#layout #Settings{background-color:#120e28!important;padding:20px!important}body#layout #LinkList500{height:70px!important;margin:0 auto!important;-webkit-border-radius:3px;border-radius:3px;background:url(https://4.bp.blogspot.com/-LFXwxqq5FF0/Vp_tTl_cQuI/AAAAAAAAAtc/PCyDaYu-DOQ/s1600-r/lback.png) repeat-x!important}body#layout #LinkList500 .widget-content .editlink{float:left;-webkit-border-radius:35px;border-radius:35px;width:100px;height:45px!important;background:url(https://4.bp.blogspot.com/-wSynyFdvVLo/VqP_upuoXgI/AAAAAAAAAus/o2VFDimH9uA/s1600-r/l-icons.png) no-repeat!important;background-position:center -217px!important;font-size:0!important;top:2px;padding:0!important;right:0}body#layout #LinkList500 .widget-content .editlink:hover{background-position:center -170px!important}body#layout #LinkList500 .widget-content{padding:10px!important}body#layout #LinkList500 .layout-title{color:#fff;font-weight:700;float:right;width:190px;height:50px!important;background:url(https://4.bp.blogspot.com/-wSynyFdvVLo/VqP_upuoXgI/AAAAAAAAAus/o2VFDimH9uA/s1600-r/l-icons.png) no-repeat!important;background-position:center -270px!important;font-size:0!important;color:#FFF;font-weight:bold}body#layout header .section,body#layout #Intro{overflow:hidden!important}body#layout #HeaderTop .widget,body#layout #HeaderMid .widget,body#layout #HeaderBot .widget,body#layout #Intro .widget{height:60px!important;width:339px;background:#120E28!important;border:5px solid #242135!important}body#layout .c-rtl #HeaderTop .widget,body#layout .c-rtl #HeaderMid .widget,body#layout .c-rtl #HeaderBot .widget,body#layout .c-rtl #Intro .widget{float:right}body#layout .c-ltr #HeaderTop .widget,body#layout .c-ltr #HeaderMid .widget,body#layout .c-ltr #HeaderBot .widget,body#layout .c-ltr #Intro .widget{float:left}body#layout #Header1 .layout-title,body#layout #LinkList100 .layout-title{margin-top:10px!important}body#layout .c-rtl #Header1,body#layout .c-rtl #PageList1{margin-left:20px!important}body#layout .c-ltr #Header1,body#layout .c-ltr #PageList1{margin-right:20px!important}body#layout #HeaderBot .widget{float:none;width:710px}body#layout header .editlink,body#layout #Intro .editlink,body#layout #LinkList500 .editlink{text-decoration:none!important;position:relative;padding:7px 15px 9px!important}body#layout .c-rtl header .editlink,body#layout .c-rtl #Intro .editlink,body#layout .c-rtl #LinkList500 .editlink{right:-10px;float:left!important}body#layout .c-ltr header .editlink,body#layout .c-ltr #Intro .editlink,body#layout .c-ltr #LinkList500 .editlink{float:right!important}body#layout #HeaderTop .editlink,body#layout #HeaderMid .editlink,body#layout #HeaderBot .editlink,body#layout #Intro .editlink{border:2px solid #BF2F6B!important;color:#ABABAB!important;margin-top:-25px!important;-webkit-border-radius:3px;border-radius:3px;border:2px solid #242135!important}body#layout #HeaderTop .editlink:hover,body#layout #HeaderMid .editlink:hover,body#layout #HeaderBot .editlink:hover,body#layout #Intro .editlink:hover{background-color:#242135!important;color:#fff!important}body#layout header .layout-title,body#layout #Intro .layout-title{font-weight:700;font-size:14px;width:240px;overflow:hidden;margin-top:10px!important;max-height:38px}body#layout .c-rtl header .layout-title,body#layout .c-rtl #Intro .layout-title{padding-right:20px!important}body#layout .c-ltr header .layout-title,body#layout .c-ltr #Intro .layout-title{padding-left:20px!important}body#layout .add_widget a{border:1px dashed #ccc!important;width:99%!important;display:block!important;padding:15px 0!important;margin:0 auto 10px!important}body#layout #HeaderTop:before,body#layout #HeaderBot:before,body#layout #Intro:before,body#layout #RecentPosts:before,body#layout footer:before{content:"";padding:30px 0!important;background:url(https://4.bp.blogspot.com/-s7zuN-jElMw/VqP8l2Nr6QI/AAAAAAAAAug/yL5KRpwcOjY/s1600-r/l-titles.png) no-repeat!important;display:block;width:250px;margin:0 auto!important}body#layout #HeaderTop:before{background-position:center -27px!important}body#layout #HeaderBot:before{background-position:center -117px!important}body#layout #Intro:before{background-position:center -218px!important}body#layout #RecentPosts:before{background-position:center -320px!important}body#layout footer:before{background-position:center -415px!important}body#layout header .dropregion,body#layout #Intro .dropregion,body#layout #Settings .dropregion{display:none!important}body#layout #HeaderTop{padding:20px 40px 0!important;background:#6a203f!important}body#layout #HeaderMid{padding:0 40px!important;background:#6a203f!important}body#layout #LinkList100,body#layout #PageList1{margin-bottom:20px!important}body#layout #HeaderBot{background:#6a203f!important;padding:20px 40px!important}body#layout #Intro{background:#6A203F!important;padding:0 40px 20px!important}body#layout .c-rtl #Intro .section{float:right;width:349px}body#layout .c-ltr #Intro .section{float:left;width:349px}body#layout .c-rtl #Int-one{margin-left:20px!important}body#layout .c-ltr #Int-one{margin-right:20px!important}body#layout main .section{background:#fff!important;margin-bottom:20px!important;padding:20px 20px 10px!important;border:1px solid #EEE!important}body#layout main .widget{background:#eee!important;margin-bottom:10px!important;height:60px!important;border-bottom:6px solid #A5476E!important}body#layout main .Sided-Section .section{width:41%;display:inline-block;vertical-align:top}body#layout main .layout-title{margin-top:12px!important;font-weight:700}body#layout .c-rtl main .layout-title{margin-right:20px!important}body#layout .c-ltr main .layout-title{margin-left:20px!important}body#layout main .section:not(.Sided-Section .section) .layout-title{width:300px}body#layout main .Sided-Section .layout-title{width:100px;height:30px!important;overflow:hidden;line-height:1.2em!important}body#layout main a.editlink{color:#fff!important;background:#6A203F!important;padding:8px 15px!important;position:relative;-webkit-border-radius:3px;border-radius:3px;text-decoration:none;margin:-23px 0 6px 30px !important}body#layout .c-rtl main a.editlink{float:left}body#layout .c-ltr main a.editlink{float:right}body#layout main a.editlink:hover{color:#6A203F!important;background:#fff!important}body#layout #RecentPosts .widget:before{display:none}body#layout #Blog1{height:150px!important}body#layout main .add_widget a,body#layout aside .add_widget a,body#layout footer .add_widget a{font-size:0;background:url(https://4.bp.blogspot.com/-wSynyFdvVLo/VqP_upuoXgI/AAAAAAAAAus/o2VFDimH9uA/s1600-r/l-icons.png) no-repeat!important}body#layout main .add_widget a{background-position:center -28px!important}body#layout aside .add_widget a{background-position:center -28px!important}body#layout footer .add_widget a{background-position:center -28px!important;border:1px dashed #BF5481!important}body#layout main .add_widget a:hover{background-position:center -74px!important}body#layout aside .add_widget a:hover{background-position:center -74px!important}body#layout footer .add_widget a:hover{background-position:center -74px!important}body#layout main #RecentPosts{background:#6A203F!important}body#layout main #RecentPosts .widget{background:#f5f5f5!important}body#layout main #RecentPosts #Blog1{height:100px!important}body#layout main #RecentPosts #Blog1 .editlink{margin-top:17px!important}body#layout main .locked-widget:after,body#layout aside .locked-widget:after,body#layout footer .locked-widget:after,body#layout #copyrights .locked-widget:after{content:"";background:url(https://4.bp.blogspot.com/-wSynyFdvVLo/VqP_upuoXgI/AAAAAAAAAus/o2VFDimH9uA/s1600-r/l-icons.png) no-repeat!important;width:30px;height:30px;background-position:center -333px!important}body#layout .c-rtl main .locked-widget:after,body#layout .c-rtl aside .locked-widget:after,body#layout .c-rtl footer .locked-widget:after,body#layout .c-rtl #copyrights .locked-widget:after{float:left}body#layout .c-ltr main .locked-widget:after,body#layout .c-ltr aside .locked-widget:after,body#layout .c-ltr footer .locked-widget:after,body#layout .c-ltr #copyrights .locked-widget:after{float:right}body#layout main .locked-widget:after{margin:-50px 72px}body#layout aside .locked-widget:after,body#layout footer .locked-widget:after,body#layout #copyrights .locked-widget:after{margin:-50px 66px}body#layout .dropregion.dr_active{height:50px!important;margin-bottom:20px!important;-webkit-border-radius:3px;border-radius:3px;background:url(https://4.bp.blogspot.com/-wSynyFdvVLo/VqP_upuoXgI/AAAAAAAAAus/o2VFDimH9uA/s1600-r/l-icons.png) no-repeat!important;background-position:center -122px!important;border:2px dashed #aaa!important}body#layout .f-cols .section{min-height:130px}body#layout aside .widget{background:#eee!important;margin-bottom:10px!important;height:60px!important;border-bottom:6px solid #6A203F!important}body#layout .c-rtl aside .layout-title,body#layout .c-rtl footer .layout-title,body#layout .c-rtl #copyrights .layout-title{margin:14px 20px 0 0 !important;font-weight:700}body#layout .c-ltr aside .layout-title,body#layout .c-ltr footer .layout-title,body#layout .c-ltr #copyrights .layout-title{margin:14px 0 0 20px !important;font-weight:700}body#layout aside .layout-title{max-width:130px}body#layout .f-cols .layout-title{max-width:90px}body#layout #f-row .layout-title,body#layout #copyrights .layout-title{max-width:300px}body#layout #copyrights .layout-title,body#layout footer .layout-title{color:#aaa}body#layout aside .widget-content,body#layout footer .widget-content,body#layout #copyrights .widget-content{padding-bottom:17px!important}body#layout aside .editlink,body#layout footer .editlink,body#layout #copyrights .editlink{color:#fff!important;background:#6A203F!important;padding:6px 15px!important;-webkit-border-radius:3px;border-radius:3px;top:15px!important;z-index:2;position:absolute;height:20px!important;bottom:5px;text-decoration:none!important;line-height:2em!important}body#layout .c-rtl aside .editlink,body#layout .c-rtl footer .editlink,body#layout .c-rtl #copyrights .editlink{left:10px;right:auto}body#layout .c-ltr aside .editlink,body#layout .c-ltr footer .editlink,body#layout .c-ltr #copyrights .editlink{left:auto;right:10px}body#layout aside .editlink:hover{color:#6A203F!important;background:#fff!important}body#layout footer,body#layout #copyrights{background:#120E28!important;padding:20px 20px 0!important}body#layout .c-rtl #Col-1,body#layout .c-rtl #Col-2,body#layout .c-rtl #Col-3{margin-left:13px!important}body#layout .c-ltr #Col-1,body#layout .c-ltr #Col-2,body#layout .c-ltr #Col-3{margin-right:13px!important}body#layout .c-rtl #Col-1,body#layout .c-rtl #Col-2,body#layout .c-rtl #Col-3,body#layout .c-rtl #Col-4{float:right;width:180px;vertical-align:top}body#layout .c-ltr #Col-1,body#layout .c-ltr #Col-2,body#layout .c-ltr #Col-3,body#layout .c-ltr #Col-4{float:left;width:180px;vertical-align:top}body#layout footer .widget,body#layout #LinkList104,body#layout #LinkList105{background:#242135!important;height:60px!important;margin-bottom:10px!important;border-bottom:6px solid #6A203F!important}body#layout #copyrights{padding:0 20px 10px!important}body#layout #copyrights .layout-title{width:300px!important}body#layout footer .editlink:hover,body#layout #copyrights .editlink:hover{background:#636363!important}body#layout .c-rtl div.layout-widget-description{margin-right:20px!important;font-size:11px!important;text-align:right}body#layout .c-ltr div.layout-widget-description{margin-left:20px!important;font-size:11px!important;text-align:left}body#layout #LinkList500 div.layout-widget-description{display:none}body#layout footer div.layout-widget-description,body#layout #copyrights div.layout-widget-description,body#layout header div.layout-widget-description,body#layout #Intro div.layout-widget-description{color:rgba(255,255,255,0.4)}body#layout .c-rtl div.layout-title{font-size:12px!important;text-align:right}body#layout .c-ltr div.layout-title{font-size:13px!important;text-align:left}body#layout .add_widget a{line-height:16px!important}body#layout .widget-content{padding-bottom:4px!important}body#layout .c-rtl #f-row .widget{float:right;width:244px}body#layout .c-ltr #f-row .widget{float:left;width:244px}body#layout #HTML140{margin:0 13px!important}body#layout main .Sided-Section a.editlink{margin:-34px 0 6px 30px !important}
]]></b:template-skin>
<!-- Responsive II -->
<b:if cond='data:blog.mobileClass != &quot; mobile&quot;'>
<style type='text/css'>/*<![CDATA[*/
@media screen and (max-width :900px) {
.popular-posts.tinyop li{height:110px}
#f-row{height:auto}
#f-row .subscription{float:none;width:100%;margin-top:0}
}
@media screen and (min-width :641px) and (max-width :860px) {
#HTML140{display:block;text-align:center}
#HTML140 p{display:block;width:-webkit-calc(100% - 340px);width:calc(100% - 340px)}
.rtl #FollowByEmail1{float:left;margin-top:-80px}
.ltr #FollowByEmail1{float:right;margin-top:-80px}
.rtl #ContactForm1{right:-webkit-calc(50% - 100px);right:calc(50% - 100px)}
.ltr #ContactForm1{left:-webkit-calc(50% - 100px);left:calc(50% - 100px)}
}
@media screen and (max-width :768px) {
.author-profile img{margin:0 auto;-webkit-border-radius:2px;border-radius:2px;width:100px;padding:5px}
.rtl .author-profile img{float:right}
.ltr .author-profile img{float:left}
body .container .author-profile{text-align:center;float:none;width:100%;min-height:auto;padding:20px}
body .container .related-posts,body .container .related-h3,body .container #blog-pager{float:none;width:100%;clear:both;margin:0 0 20px}
}
@media screen and (max-width :640px) {
#Int-one{display:none}
.Sided-Section .section{display:block;width:100%;margin-left:0}
.rtl .Sided-Section .section{margin-left:0}
.ltr .Sided-Section .section{margin-right:0}
.list .Post,.cov,.vcover .Post:nth-of-type(n+2){width:100%;padding:0!important;margin:0 0 20px!important;border:none!important}
.cover .Post:first-of-type .Title,.cover .Post:first-of-type .details{width:100%;height:auto;clear:both;float:none;display:block}
.cover .Post:first-of-type .Thumb{width:100%;display:block;float:none;clear:both;margin-bottom:10px}
.vcover .Post:first-of-type{width:100%;border-left:none;padding:0 0 20px;height:auto!important;margin-bottom:20px}
.broadcast .current{float:none;width:100%;height:auto}
.broadcast .Post:nth-of-type(n+2){width:100%}
.broadcast .current .Thumb{height:200px}
.cards .Post{width:100%;clear:both;float:none;margin:0 0 20px}
.cards .Post .Title{height:auto}
.RecentThumb{float:none;clear:both;margin-left:0;margin-bottom:20px;display:block;width:100%}
.index-body .post-title{width:100%;display:block;float:none;clear:both;height:auto}
.index-body .details{width:100%;clear:both;float:none}
.rtl #HTML140 p{margin:10px 10px 20px}
.ltr #HTML140 p{margin:10px auto 20px 10px}
#FollowByEmail1{display:block;width:auto;padding:0 30px}
.f-cols .section{width:-webkit-calc((100% - 20px) /2);width:calc((100% - 20px) /2);margin:0 20px 0 0}
.ltr #Col-1,.ltr #Col-3{margin-right:19px;margin-left:0}
.rtl #Col-1,.rtl #Col-3{margin-right:0;margin-left:19px}
#Col-2,#Col-4{margin-right:0;margin-left:0}
.item-thumbnail{width:72px;height:72px;position:relative;margin-bottom:0}
.rtl .item-thumbnail{float:right;margin-left:20px}
.ltr .item-thumbnail{float:left;margin-right:20px}
.item-title a{display:block;font-size:14px}
}
@media screen and (max-width :480px) {
.LabLink{display:none}
.sided .Post:first-of-type .Snippet{height:auto}
.blog-pager-older-link,.blog-pager-newer-link{width:100%}
#HTML140 p{display:block;width:100%;margin:20px 0}
#FollowByEmail1{padding:0}
.f-cols .section{width:100%;float:none;margin:0;height:auto}
}
@media screen and (max-width :240px) {
.Intro-Label,.Title,.details{width:100%!important;display:block;float:none!important;clear:both}
#FollowByEmail1 i{font-size:37px;width:70px;height:70px}
#f-row .email,#f-row .subscribe{display:block;width:100%;margin:0 0 10px}
.broadcast .Post:nth-of-type(n+2){height:auto}
.broadcast .Post:nth-of-type(n+2) .Thumb{border:0;height:100px;padding:0;margin:0 auto;display:block;width:100%;margin-bottom:10px}
.Thumb{margin-bottom:20px;height:150px;padding:10px;border:1px solid #EEE;float:none;display:block;width:100%}
}
/*]]>*/</style>
</b:if>
<!--<![endif]-->
<b:defaultmarkups><b:defaultmarkup type='PopularPosts'><b:includable id='main'><b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if><div class='widget-content popular-posts'><ul><b:loop values='data:posts' var='post'><li><b:if cond='!data:showThumbnails'><b:if cond='!data:showSnippets'><a expr:href='data:post.href'><data:post.title/></a><b:else/><div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div><div class='item-snippet'><data:post.snippet/></div></b:if><b:else/><div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'><b:if cond='data:post.thumbnail'><div class='item-thumbnail'><a expr:href='data:post.href' target='_blank'><b:if cond='data:post.thumbnail.isYoutube'><b:if cond='data:blog.isMobileRequest'><img expr:alt='data:post.title' expr:data-src='resizeImage(data:post.thumbnail, 72, &quot;1:1&quot;)' expr:title='data:post.title'/><b:else/><img expr:alt='data:post.title' expr:data-src='data:post.thumbnail.youtubeMaxResDefaultUrl' expr:title='data:post.title'/></b:if><b:else/><img expr:alt='data:post.title' expr:data-src='data:post.thumbnail' expr:title='data:post.title'/></b:if></a></div></b:if><div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div><b:if cond='data:showSnippets'><div class='item-snippet'><data:post.snippet/></div></b:if></div><div style='clear:both'/></b:if></li></b:loop></ul></div></b:includable></b:defaultmarkup><b:defaultmarkup type='Profile'><b:includable id='main'><div class='widget-content'/></b:includable></b:defaultmarkup></b:defaultmarkups>
</head>
<body expr:class='data:blog.pageType + data:blog.mobileClass + &quot; no-select b-overflow tiled-back &quot;'>
<b:class cond='data:blog.languageDirection == &quot;rtl&quot;' name='rtl'/>
<b:class cond='data:blog.languageDirection == &quot;ltr&quot;' name='ltr'/>
<script>var b_dir=&#39;<data:blog.languageDirection/>&#39;</script>
<!--[if lt IE 10 ]>
<div class='ie-error'>
<style type='text/css'>
#loading-screen{display:none!important}
.mainWrapper{display:none}
body{overflow:hidden;background:#377ef0 url(https://2.bp.blogspot.com/-UAvQtcgmLXU/WbbECFElkmI/AAAAAAAAAsE/CCXOOYTPDesYFIjWDW7KXqA1_-8-_G-3wCK4BGAYYCw/s1600/ie.png) repeat-x fixed}
.ie-error{text-align:center}
.ie-error i{background:url(https://3.bp.blogspot.com/-Sf_vsYi3hSc/Wba7cLxGgjI/AAAAAAAAArk/_DZFbeAKUqIE0OoBaEFdV7o1SqIwTnZ3QCK4BGAYYCw/s1600/Internet-ie-icon.png) no-repeat;width:90px;height:90px;display:block;margin:150px auto 10px auto}
.ie-error b{color:#FFF;font-size:26px}
.ie-error p{line-height:1.3em;font-weight:bold;margin:0;padding:5px 60px 10px;color:#eee;font-size:16px}
.ie-error a{border:1px solid #fff;display:block;padding:10px 0 6px 0;font-size:18px;width:100px;color:#fff;font-weight:bold;margin:0 auto;text-decoration:none;outline:0}
.ie-error a:hover{background-color:#fff;color:#377ef0}
</style>
<i></i>
<b>يبدو أنك تستخدم إصدار قديم من المتصفح</b>
<p>يمكنك عرض الصفحة من متصفح آخر أو تحديث المتصفح الحالي من خلال هذا الرابط</p>
<a href='https://windows.microsoft.com/en-us/internet-explorer/download-ie' title='Update Browser'>تحديث</a>
</div>
<![endif]-->
<!--[if gte IE 10]><!-->   

<div id='loading-screen' style='display:none'><div class='overlay-loader'><div class='loader'><div/><div/><div/><div/><div/><div/><div/></div></div></div>
<b:section id='Settings' maxwidgets='1' showaddelement='no'>
  <b:widget id='LinkList500' locked='true' mobile='yes' title='إعدادات القالب' type='LinkList' version='1'>
    <b:includable id='main'>
      <script typp='text/javascript'>
        Settings={
          <b:loop values='data:links' var='link'>&quot;<data:link.name/>&quot; : <b:if cond='data:link.target in {&quot;true&quot;,&quot;false&quot;}'><data:link.target/><b:else/>&quot;<data:link.target/>&quot;</b:if>,
          </b:loop>
        }        
      </script>
    </b:includable>
  </b:widget>
  <b:widget id='Label500' locked='true' mobile='yes' title='تسميات المدونة' type='Label' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
      <b:widget-setting name='display'>LIST</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'/>
      <b:widget-setting name='showType'>ALL</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='this'>
      <b:if cond='data:view.isHomepage'>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;: &quot;WebSite&quot;,&quot;url&quot;:&quot;<data:blog.homepageUrl/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;: &quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:blog.homepageUrl/>search?q={query}&quot;,&quot;query-input&quot;:&quot;required name=query&quot;}}</script>
        <ul class='hide' itemscope='itemscope' itemtype='http://www.schema.org/SiteNavigationElement'>
          <b:loop values='data:labels' var='label'>
            <li><a expr:href='data:label.url' itemprop='url'><span itemprop='name'><data:label.name/></span></a></li>
          </b:loop>
        </ul>
      </b:if>
    </b:includable>
    <b:includable id='list'/>
  </b:widget>
</b:section>
<script type='text/javascript'>
    var custom_domain	= <data:blog.hasCustomDomain/>,
      	isMobile		= <data:blog.isMobileRequest/>,
        blogLocale 		= &#39;<data:blog.locale/>&#39;,
        blogDate		= new Date();
/*<![CDATA[*/
      eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l f="1g;4g;W;4e ;4d;3V;.;3R;;3O;3N;3L;#1i-1u;3K;3H;3C;3z;1i-1u;3x;b-3t;3o;3n;1a;3m;3l;.3k-3i;3g;3f;3d;3c-2Z;1m-1n;2X-2V;b-1p;b-1p-2T;1q-1s;1q-1t;C-1t;C-1s;C-2R;2P;2N;2L-1z;H-2G;1g://4.2C.q.P/-2B/2w/2v/2r/2q-r/H.2p;b-2o;b-2n;b-2m;b-1n;Y-2l;g-Y;2k-2j;2i;1b-G;2h;I-G;2g 2f 2e;H-G;2d 2c, 2b;1k-1l;1k-1Z;1W;1U;u;.q.;1T;.q.P/u/;1S;1o;1R-1o;1Q-1l;K-1r;K-2;K-1;.1P;.1v;1N;.1b-1M;1L;.1C-1A;2I;1B;1v-1a;1m;.I-1y;.I-1y:1D-1E-1r(;n);1F;1G((1H% - ;1I) / ; );1J;1K;/;1x;s;-c;w;-h;-p".1x(";"),1w=1O?!0===i[f[0]]?!0:!1:!1===i[f[0]]?!1:!0,y=x[f[2]][f[1]],v=y[f[4]](f[3]),1V=0<v||W[f[1]][f[5]](/1X.*1Y:11\\./)?2a(y[f[7]](v+5,y[f[4]](f[6],v))):f[8];!1!==i[f[9]]?(j[f[13]](f[12])[f[11]][f[10]]=f[14],x[f[16]](f[15],F)):F();m F(){l a=j[f[18]](f[17]);j[f[22]][f[21]][f[20]](f[19]);j[f[13]](f[25])[f[21]][f[24]](f[23]);T(m(){a[f[21]][f[24]](f[23]);T(m(){a[f[27]][f[26]](a)},S)},S)}l 2s,2t=!1===i[f[28]]?!1:!0,2u=!0===i[f[29]]?!0:!1,R=!0===i[f[30]]?!0:!1,2x=!1===i[f[31]]?!1:!0,2y=!1===i[f[32]]?!1:!0,2z=!1===i[f[33]]?!1:!0,2A=k 0!==i[f[34]]?i[f[34]]:3,2D=!1===i[f[35]]?!1:!0,2E=!0===i[f[36]]?!0:!1,2F=k 0!==i[f[37]]?i[f[37]]:10,2H=i[f[38]]===f[39]?f[39]:f[40],2J=!1===i[f[41]]?!1:!0,2K=k 0!==i[f[42]]?i[f[42]]:f[43],2M=k 0!==i[f[44]]?i[f[44]]:6,2O=k 0!==i[f[45]]?i[f[45]]:7,2Q=k 0!==i[f[46]]?i[f[46]]:6,2S=k 0!==i[f[47]]?i[f[47]]:6,2U=k 0!==i[f[48]]?i[f[48]]:10,2W=k 0!==i[f[49]]?i[f[49]]:9,2Y=k 0!==i[f[1j]]?i[f[1j]]:f[3a],3b=k 0===i[f[E]]||i[f[E]]===f[1h]?f[1h]:i[f[E]],3e=k 0===i[f[J]]||i[f[J]]===f[1f]?f[1f]:i[f[J]],3h=k 0===i[f[1e]]?f[3j]:i[f[1e]];!0===i[f[1d]]?j[f[22]][f[21]][f[24]](f[1d]):f[8];!0===i[f[1c]]?j[f[22]][f[21]][f[24]](f[1c]):f[8];l L=x[f[Z]][f[X]],u=!0===i[f[3p]]?!0:!1;u&&1w&&L[f[3q]](f[3r])&&!3s&&(x[f[Z]][f[X]]=L[f[t]](/\\.q\\..*?\\//,f[3u]));!0===i[f[3v]]?j[f[22]][f[21]][f[20]](f[3w]):f[8];!0===i[f[U]]?j[f[22]][f[21]][f[20]](f[U]):f[8];i[f[3y]]===f[Q]?j[f[22]][f[21]][f[24]](f[Q]):j[f[22]][f[21]][f[24]](f[3A]);3B(R&&(O!==j[f[13]](f[3D])||O!==j[f[13]](f[3E])))j[f[16]](f[15],m(){l a=3F[f[3G]](j[f[13]](f[N])[f[3I]]/3J),d=20*a-20,b=j[f[B]](f[3M]),c;D(c=0;c<b[f[z]];c+=1)b[c][f[21]][f[20]](f[3P]),b[c][f[21]][f[24]](f[30]);j[f[13]](f[N])[f[21]][f[24]](f[3Q]);V(a,d)});m V(a,d){l b=j[f[B]](f[3S]),c=j[f[B]](f[3T]+a+f[3U]),e;D(e=0;e<b[f[z]];e+=1)b[e][f[11]][f[3W]]=f[3X]+d+f[3Y]+a+f[3Z];D(b=0;b<c[f[z]];b+=1)c[b][f[11]][f[4a]]=0,c[b][f[11]][f[4b]]=0}m 4c(a,d,b){l c=a[f[o]](f[A])[f[z]]-2;4f k 0!==b?b===d?a[f[t]](a[f[o]](f[A])[c],f[M]+d+f[4h]):a[f[t]](a[f[o]](f[A])[c],f[4i]+d+f[4j]+b+f[4k]):a[f[t]](a[f[o]](f[A])[c],f[M]+d)};',62,269,'|||||||||||||||_0x6ae8|||Settings|document|void|var|function||93||blogspot|||66|ncr|msie||window|ua|80|92|79|rel|for|52|RemoveSpinner|font|alt|post|54|menu|BlogLink|94|76|null|com|71|rct_cards|500|setTimeout|69|cards_width|navigator|60|max|61|||||||||||body|blog|59|58|56|55|https|53|loading|50|wide|back|rct|cards|select|author|int|type|items|autoplay|screen|index|httpsEnabled|split|outer|titles|content|length|entry|nth|of|width|calc|100|px|marginRight|marginLeft|round|posts|offsetWidth|custom_domain|archive|tiled|no|replace|includes|location|version|href|Trident|rv|header|||||||||||parseInt|Tahoma|UI|Segoe|Naskh|Arabic|Droid|LevonFont|light|skin|fb|results|sided|cover|list|png|s1600|2MyUX_xVoc0|allowComment|isSidebar|tiny_pop|AAAAAAAAAqM|VpvWQcpZhZI|Profile|Au_Name|Au_Link|int_items|MVB5OaBXstY|bp|int_autoplay|rel_autoplay|rel_items|Image|rel_type|querySelectorAll|nav_titles|alt_Img|nav|b_list|slider|b_cover|links|b_sided|layout|b_cards|link|m_res|profile|imags_n|au|Skin|pop|||||||||||51|blog_font|tiny|sidebar|post_font|parentNode|removeChild|alt_font|loader|57|overlay|add|fadeOut|classList|remove|62|64|63|isMobile|overflow|65|67|68|getElementById|70|addEventListener|72|if|DOMContentLoaded|73|74|Math|77|block|75|240|querySelector|style|78|display|spinner|81|82|substring|83|84|85|match|86|87|88|89|||||||||||90|91|ResizeImg|indexOf|MSIE|return|userAgent|95|96|97|98'.split('|'),0,{}))
  var t_mega		= [230,140],
      t_intro_1 	= [1600],
      t_intro_3 	= [330,220],
      t_intro_4 	= [245,160],
      t_index 		= [300,200],
      t_index_cards = [450,260],
      t_cate_cover 	= [370,200],
      t_cate_video 	= [430,250],
      t_cate_thumb 	= [90,90],
      t_popular 	= [220,110],
      t_related 	= [270,150];
/*]]>*/</script>

<div class='mainWrapper fullWidth'>
  
<div expr:class='data:blog.languageDirection == &quot;rtl&quot; ? &quot;c-rtl container notr&quot; : &quot;c-ltr container notr&quot; '>
<b:if cond='data:blog.pageName != &quot;demo&quot; and not data:view.isError'>
<header>
<div class='head-color'>
<div class='wrap'>
<b:section id='HeaderTop' maxwidgets='2'>
  <b:widget id='PageList1' locked='true' title='الصفحات' type='PageList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='pageListJson'><![CDATA[{'home': {'href': 'https://softwarearabi.blogspot.com/', 'title': 'الرئيسية', 'position': 0}}]]></b:widget-setting>
      <b:widget-setting name='homeTitle'>الرئيسية</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <div class='widget-content'>
        <div class='res-butt res-butt1'><span/><span/><span/></div>
        <ul>
          <b:loop values='data:links' var='link'>
            <b:if cond='data:link.isCurrentPage'>
              <li class='selected'><a expr:href='data:link.href' expr:title='data:link.title'><data:link.title/></a></li>
              <b:else/>
              <li><a expr:href='data:link.href' expr:title='data:link.title'><data:link.title/></a></li>
            </b:if>
          </b:loop>
        </ul>
      </div>
    </b:includable>
  </b:widget>
  <b:widget id='LinkList100' locked='true' mobile='yes' title='مواقع التواصل الاجتماعي' type='LinkList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='link-5'>https://levon-demo.blogspot.com/rss.xml</b:widget-setting>
      <b:widget-setting name='link-6'>https://www.traidnt.net/vb/</b:widget-setting>
      <b:widget-setting name='link-3'>https://khamsat.com</b:widget-setting>
      <b:widget-setting name='link-4'>https://www.youtube.com</b:widget-setting>
      <b:widget-setting name='text-1'>facebook</b:widget-setting>
      <b:widget-setting name='text-0'>picalica</b:widget-setting>
      <b:widget-setting name='text-3'>khamsat</b:widget-setting>
      <b:widget-setting name='text-2'>twitter</b:widget-setting>
      <b:widget-setting name='text-5'>rss</b:widget-setting>
      <b:widget-setting name='text-4'>youtube</b:widget-setting>
      <b:widget-setting name='text-6'>traidnt</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='link-1'>https://www.Facebook.com/SoftwareArabi</b:widget-setting>
      <b:widget-setting name='link-2'>https://www.Twitter.com</b:widget-setting>
      <b:widget-setting name='link-0'>https://www.picalica.com</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
		<ul>
		  <b:loop values='data:links' var='link'>
			<li><a expr:class='&quot;fa fa-&quot; + data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener' target='_blank'><span><data:link.name/></span></a></li>
		  </b:loop>
		</ul>
	</b:includable>
  </b:widget>
</b:section>
</div>
</div>
<form action='/search' id='SRCH'><a class='t-search fa fa-search' href='#' title='search'/><div class='search-form'><input name='q' placeholder='ابحث في المدونه' type='text'/></div></form>

<div class='wrap'>
<b:section id='HeaderMid' maxwidgets='2'>
  <b:widget id='Header1' locked='true' title='Splash (رأس الصفحة)' type='Header' version='1'>
    <b:widget-settings>
      <b:widget-setting name='displayUrl'/>
      <b:widget-setting name='displayHeight'>0</b:widget-setting>
      <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
      <b:widget-setting name='useImage'>false</b:widget-setting>
      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
      <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
      <b:widget-setting name='displayWidth'>0</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:useImage'>
        <div id='header-inner'>
        <b:if cond='data:blog.pageType in {&quot;archive&quot;,&quot;index&quot;}'>
          <h1 class='hide'><data:title/></h1>
          <b:else/>
          <b class='hide'><data:title/></b>
        </b:if>
          <a expr:href='data:blog.homepageUrl' expr:title='data:blog.title'>
            <img expr:alt='data:title' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:title='data:title'/>
          </a>
        </div>
        <b:else/>
        <b:if cond='data:blog.pageType in {&quot;archive&quot;,&quot;index&quot;}'>
          <h1 class='blog-title'><data:title/></h1>
          <p class='blog-desc'><data:description/></p>
          <b:else/>
          <a class='blog-title' expr:href='data:blog.homepageUrl' expr:title='data:blog.title'><data:title/></a>
          <p class='blog-desc'><data:description/></p>
        </b:if>
      </b:if>
    </b:includable>
    <b:includable id='description'/>
    <b:includable id='title'/>
  </b:widget>
  <b:widget id='HTML100' locked='true' mobile='yes' title='أدسنس' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
	  <div class='widget-content'>
		<data:content/>
	  </div>
	</b:includable>
  </b:widget>
</b:section>
</div>
<div class='wrap'>
<b:section id='HeaderBot' maxwidgets='1'>
  <b:widget id='LinkList101' locked='true' mobile='yes' title='القائمة الرئيسية' type='LinkList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='link-7'>#يوتيوب</b:widget-setting>
      <b:widget-setting name='link-5'>#كاميرات</b:widget-setting>
      <b:widget-setting name='link-6'>#فنادق</b:widget-setting>
      <b:widget-setting name='link-3'>#شاشات</b:widget-setting>
      <b:widget-setting name='link-4'>#اجهزة كمبيوتر</b:widget-setting>
      <b:widget-setting name='text-1'>موبايلات</b:widget-setting>
      <b:widget-setting name='text-0'>اخبار</b:widget-setting>
      <b:widget-setting name='text-3'>شاشات</b:widget-setting>
      <b:widget-setting name='text-2'>لاب توب</b:widget-setting>
      <b:widget-setting name='text-5'>كاميرات</b:widget-setting>
      <b:widget-setting name='text-4'>اجهزة كمبيوتر</b:widget-setting>
      <b:widget-setting name='text-7'>يوتيوب</b:widget-setting>
      <b:widget-setting name='text-6'>فنادق</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='link-1'>#موبايلات</b:widget-setting>
      <b:widget-setting name='link-2'>#لاب توب</b:widget-setting>
      <b:widget-setting name='link-0'>#اخبار</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <span class='m-line'/>
      <a class='Home' expr:href='data:blog.homepageUrl' title='Homepage'><i class='fa fa-home'/></a>
      <div class='res-butt res-butt2'><span/><span/><span/></div>
      <ul>
        <b:loop values='data:links' var='link'>
          <li><a expr:href='data:link.target' expr:title='data:link.name'><data:link.name/></a></li>
        </b:loop>
      </ul>
	</b:includable>
  </b:widget>
</b:section>
</div>
</header>
<div class='wrap'>
<b:if cond='data:blog.mobileClass != &quot; mobile&quot;'>
<div id='Intro'>
<b:section id='Int-one' maxwidgets='1'>
  <b:widget id='HTML101' locked='true' title='آخر الأخبار' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'>recent</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:content != &quot;&quot; and data:content != no'>
        <style>#HTML101{display:block;}</style>
      </b:if>
      <i class='ticker-ch hide'><data:content/></i>
	  <h2 class='title'><data:title/></h2>
	  <div class='NTick'><div class='widget-content scroll marquee'><data:content/></div></div>
	</b:includable>
  </b:widget>
</b:section>
<b:section id='int-two' maxwidgets='1'>
  <b:widget id='HTML102' locked='true' title='الواجهه' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:content != &quot;&quot; and data:content != no'>
        <style>#HTML102,.I-toggle{display:block;}</style>
      </b:if>
      <i class='intro-ch hide'><data:content/></i>
      <div class='r-loading'>
        <i class='fa fa-spin fa-spinner'/>
        <span>جاري التحميل ...</span>
      </div>
      <div class='widget-content intro owl-carousel owl-theme'><span class='hide'><data:content/></span></div>
	</b:includable>
  </b:widget>
</b:section>
</div>
<div class='I-toggle'><i class='fa fa-angle-double-up'/></div>
</b:if>
<div class='middle-container'>
<main class='notr'>
<b:if cond='data:blog.url == data:blog.homepageUrl or data:blog.url == data:blog.homepageUrl + &quot;?m=0&quot;'>
<b:section id='Widgets1'>
  <b:widget id='HTML1' locked='false' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;style scoped=&quot;&quot; type=&quot;text/css&quot;&gt;
ul.abt-sidebar-slider *{
-moz-box-sizing:border-box;
-webkit-box-sizing:border-box;
box-sizing:border-box;
}
ul.abt-sidebar-slider{
font:normal normal 11px embria
}
ul.abt-sidebar-slider,ul.abt-sidebar-slider li{
margin:0;
padding:0;
list-style:none;
position:relative
}
ul.abt-sidebar-slider{
width:100%;
height:500px
}
ul.abt-sidebar-slider li{
height:24.5%;
position:absolute;
padding:0;
width:49.5%;
float:left;
overflow:hidden;
display:none
}
ul.abt-sidebar-slider li:nth-child(1),ul.abt-sidebar-slider li:nth-child(2),ul.abt-sidebar-slider li:nth-child(3),ul.abt-sidebar-slider li:nth-child(4){
display:block
}
ul.abt-sidebar-slider img{
border:0;
width:100%;
height:100%} ul.abt-sidebar-slider li:nth-child(1){width:100%;
height:49.5%;
margin:0 0 2px;
left:0;top:0
}
ul.abt-sidebar-slider li:nth-child(2){left:0;top:50%}
ul.abt-sidebar-slider li:nth-child(3){left:50.5%;top:50%}
ul.abt-sidebar-slider li:nth-child(4){width:100%;left:0;top:75%}
ul.abt-sidebar-slider .overlayx,ul.abt-sidebar-slider li{
-webkit-transition:all .4s ease-in-out;
-moz-transition:all .4s ease-in-out;
-o-transition:all .4s ease-in-out;
-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out
}
ul.abt-sidebar-slider .overlayx{
width:100%;
height:100%;
position:absolute;
z-index:2;
left:0;
top:0;
background-image:url(https://lh4.googleusercontent.com/-XuY-WhcgPEs/U359RGOR-RI/AAAAAAAAEJk/Cl5gNpnAz0Y/s1600/cnmubg-fade.png);
background-position:50% 50%;
background-repeat:repeat-x
}
ul.abt-sidebar-slider .overlayx,ul.abt-sidebar-slider img{
border:4px solid #DEDEDE;
-moz-border-radius:3px;
-webkit-border-radius:3px;
border-radius:3px
}
ul.abt-sidebar-slider li:nth-child(1) .overlayx{
background-position:50% 25%
}
ul.abt-sidebar-slider .overlayx:hover{
-ms-filter:&quot;progid:DXImageTransform.Microsoft. Alpha(Opacity=10)&quot;;
filter:alpha(opacity=10);-khtml-opacity:0.1;
-moz-opacity:0.1;opacity:0.1
}
ul.abt-sidebar-slider h4{
position:absolute;
bottom:30px;
z-index:2;
color:white;
margin:0;
width:100%;
padding:0 10px;
line-height:1.5em;
font:embria;
font-weight:normal
}
ul.abt-sidebar-slider li:nth-child(1) h4,ul.abt-sidebar-slider li:nth-child(4) h4{
font-size:150%
}
ul.abt-sidebar-slider .label_text{
position:absolute;
bottom:10px;
left:10px;
z-index:2;
color:white;
font-size:90%}
ul.abt-sidebar-slider li:nth-child(2) .autname,ul.abt-sidebar-slider li:nth-child(3) .autname{
display:none
}
.buttons{
margin:5px 0 0
}
.buttons a{
display:inline-block;
text-indent:-9999px;
width:15px;
height:25px;
position:relative
}
.buttons a::before{
content:&quot;&quot;;
width:0;
height:0;
border-width:8px 7px;
border-style:solid;
border-color:transparent #535353 transparent transparent;
position:absolute;
top:50%;
margin-top:-8px;margin-left:-10px;
left:50%
}
.buttons a.nextx::before{
border-color:transparent transparent transparent #535353;
margin-left:-3px
}
&lt;/style&gt;
&lt;div id=&quot;featuredpostside&quot;&gt;&lt;/div&gt;
&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
//&lt;![CDATA[
function FeaturedPostSide(a){(function(e){var h={blogURL:&quot;&quot;,MaxPost:4,idcontaint:&quot;&quot;,ImageSize:100,interval:5000,autoplay:false,loadingClass:&quot;loadingxx&quot;,pBlank:&quot;http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif&quot;,MonthNames:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;],tagName:false};h=e.extend({},h,a);var g=e(h.idcontaint);var d=h.MaxPost*200;g.html(&#39;&lt;div class=&quot;sliderx&quot;&gt;&lt;ul class=&quot;abt-sidebar-slider&quot;&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div class=&quot;buttons&quot;&gt;&lt;a href=&quot;#&quot; class=&quot;nextx&quot;&gt;next&lt;/a&gt;&lt;a href=&quot;#&quot; class=&quot;prevx&quot;&gt;prev&lt;/a&gt;&lt;/div&gt;&#39;);var f=function(w){var q,k,m,u,x,p,t,v,r,l=&quot;&quot;,s=w.feed.entry;for(var o=0;o&lt;s.length;o++){for(var n=0;n&lt;s[o].link.length;n++){if(s[o].link[n].rel==&quot;alternate&quot;){q=s[o].link[n].href;break}}if(&quot;media$thumbnail&quot; in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,&quot;/s&quot;+h.ImageSize+&quot;-c&quot;)}else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,&quot;/s&quot;+h.ImageSize+&quot;$1&quot;)}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+=&#39;&lt;li&gt;&lt;a href=&quot;&#39;+q+&#39;&quot;&gt;&lt;div class=&quot;overlayx&quot;&gt;&lt;/div&gt;&lt;img class=&quot;random&quot; src=&quot;&#39;+u+&#39;&quot;/&gt;&lt;h4&gt;&#39;+k+&#39;&lt;/h4&gt;&lt;/a&gt;&lt;div class=&quot;label_text&quot;&gt;&lt;span class=&quot;date&quot;&gt;&lt;span class=&quot;dd&quot;&gt;&#39;+t+&#39;&lt;/span&gt; &lt;span class=&quot;dm&quot;&gt;&#39;+v+&#39;&lt;/span&gt; &lt;span class=&quot;dy&quot;&gt;&#39;+x+&#39;&lt;/span&gt;&lt;/span&gt; &lt;span class=&quot;autname&quot;&gt;&#39;+m+&quot;&lt;/span&gt;&lt;/div&gt;&lt;/li&gt;&quot;}e(&quot;ul&quot;,g).append(l).addClass(h.loadingClass)};var c=function(){e(h.idcontaint+&quot; .nextx&quot;).click()};var b=function(){e.get((h.blogURL===&quot;&quot;?window.location.protocol+&quot;//&quot;+window.location.host:h.blogURL)+&quot;/feeds/posts/summary&quot;+(h.tagName===false?&quot;&quot;:&quot;/-/&quot;+h.tagName)+&quot;?max-results=&quot;+h.MaxPost+&quot;&amp;orderby=published&amp;alt=json-in-script&quot;,f,&quot;jsonp&quot;);setTimeout(function(){e(h.idcontaint+&quot; .prevx&quot;).click(function(){e(h.idcontaint+&quot; .sliderx li:first&quot;).before(e(h.idcontaint+&quot; .sliderx li:last&quot;));return false});e(h.idcontaint+&quot; .nextx&quot;).click(function(){e(h.idcontaint+&quot; .sliderx li:last&quot;).after(e(h.idcontaint+&quot; .sliderx li:first&quot;));return false});if(h.autoplay){var i=h.interval;var j=setInterval(c,i);e(h.idcontaint+&quot; .sliderx li:first&quot;).before(e(h.idcontaint+&quot; .sliderx li:last&quot;));e(h.idcontaint+&quot; .sliderx&quot;).hover(function(){clearInterval(j)},function(){j=setInterval(c,i)})}e(&quot;ul&quot;,g).removeClass(h.loadingClass)},d)};e(document).ready(b)})(jQuery)};
//]]&gt;
&lt;/script&gt;
&lt;script type=&#39;text/javascript&#39;&gt;
//&lt;![CDATA[
FeaturedPostSide({
blogURL:&quot;https://4usplash.blogspot.com/&quot;,
MaxPost:2,
idcontaint:&quot;#featuredpostside&quot;,
ImageSize:300,
interval:7000,
autoplay:true,
tagName:false
});
//]]&gt;
&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section>
<div class='Sided-Section'>
<b:section id='Widgets2'/>
<b:section id='Widgets3'/>
</div>
<b:section id='Widgets4'/>
</b:if>
<b:section id='RecentPosts' maxwidgets='5'>
  <b:widget id='HTML109' locked='true' mobile='yes' title='إعلان صفحات الأقسام والأرشيف' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:view.isMultipleItems and not data:view.isHomepage'>
        <div class='widget-content'><data:content/></div>
        <b:if cond='data:content == &quot;&quot;'><style>main .widget-content{display:none;}</style></b:if>
      </b:if>
	</b:includable>
  </b:widget>
  <b:widget id='Blog1' locked='true' title='رسائل المدونة الإلكترونية' type='Blog' version='1'>
    <b:widget-settings>
      <b:widget-setting name='commentLabel'>comments</b:widget-setting>
      <b:widget-setting name='showShareButtons'>true</b:widget-setting>
      <b:widget-setting name='authorLabel'>By</b:widget-setting>
      <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
      <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
      <b:widget-setting name='timestampLabel'>-</b:widget-setting>
      <b:widget-setting name='reactionsLabel'>ردود الافعال:</b:widget-setting>
      <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
      <b:widget-setting name='style.layout'>1x1</b:widget-setting>
      <b:widget-setting name='showLocation'>false</b:widget-setting>
      <b:widget-setting name='showTimestamp'>true</b:widget-setting>
      <b:widget-setting name='postsPerAd'>1</b:widget-setting>
      <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='backlinksLabel'>Links to this post</b:widget-setting>
      <b:widget-setting name='showDateHeader'>false</b:widget-setting>
      <b:widget-setting name='style.textcolor'>#444444</b:widget-setting>
      <b:widget-setting name='showCommentLink'>true</b:widget-setting>
      <b:widget-setting name='style.urlcolor'>#8abb69</b:widget-setting>
      <b:widget-setting name='showAuthor'>true</b:widget-setting>
      <b:widget-setting name='style.linkcolor'>#9fb6ff</b:widget-setting>
      <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
      <b:widget-setting name='showLabels'>true</b:widget-setting>
      <b:widget-setting name='postLabelsLabel'>التسميات</b:widget-setting>
      <b:widget-setting name='showBacklinks'>false</b:widget-setting>
      <b:widget-setting name='showInlineAds'>false</b:widget-setting>
      <b:widget-setting name='showReactions'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main' var='top'>
      <b:if cond='!data:mobile'>
        <!-- posts -->
        <b:if cond='data:blog.url == data:blog.homepageUrl'>
          <h2 class='title-h'><data:messages.recentPosts/><a class='LabLink' href='/search' title='المزيد'>شاهد المزيد</a></h2>
        </b:if>
        <b:include data='top' name='status-message'/>
        <div class='blog-posts hfeed c'>
          <data:defaultAdStart/>
          <b:loop index='i' values='data:posts' var='post'>
            <div class='post-outer indx'>
              <b:include cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}' data='post' name='comment_picker'/>
              <b:include data='post' name='post'/>
            </div>
            <b:if cond='data:post.includeAd'>
              <div class='inline-ad'><data:adCode/></div>
              <data:adStart/>
            </b:if>
          </b:loop>
          <i class='clear'/>
          <data:adEnd/>
        </div>
        <b:if cond='data:blog.pageType == &quot;index&quot; and not data:blog.searchQuery'>
          <div id='Pagination'><div class='nums'/></div>
        </b:if>
        <b:else/>
        <b:include name='mobile-main'/>
      </b:if>
    </b:includable>
    <b:includable id='backlinkDeleteIcon' var='backlink'>
      <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'><a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'><img src='//www.blogger.com/img/icon_delete13.gif'/></a></span>
    </b:includable>
    <b:includable id='backlinks' var='post'>
      <a name='links'/><h4><data:post.backlinksLabel/></h4><b:if cond='data:post.numBacklinks != 0'><dl class='comments-block' id='comments-block'><b:loop values='data:post.backlinks' var='backlink'><div class='collapsed-backlink backlink-control'><dt class='comment-title'><span class='backlink-toggle-zippy'>&#160;</span><a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a><b:include data='backlink' name='backlinkDeleteIcon'/></dt><dd class='comment-body collapseable'><data:backlink.snippet/></dd><dd class='comment-footer collapseable'><span class='comment-author'><data:post.authorLabel/><data:backlink.author/></span><span class='comment-timestamp'><data:post.timestampLabel/><data:backlink.timestamp/></span></dd></div></b:loop></dl></b:if><p class='comment-footer'><a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' rel='noopener' target='_blank'><data:post.createLinkLabel/></a></p>
    </b:includable>
    <b:includable id='comment-form' var='post'>
      <b:if cond='data:post.allowNewComments'>
        <div class='comment-form'><a name='comment-form' title='comment form'/><p class='comment-msg'><data:blogCommentMessage/></p><a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src' title='comment src'/><iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/><data:post.friendConnectJs/> <data:post.cmtfpIframe/><script type='text/javascript'>BLOG_CMT_createIframe(&quot;<data:post.appRpcRelayPath/>&quot;);</script></div>
      </b:if>
    </b:includable>
    <b:includable id='commentDeleteIcon' var='comment'>
      <span expr:class='&quot;item-control &quot; + data:comment.adminClass'><b:if cond='data:showCmtPopup'><div class='goog-toggle-button'><div class='goog-inline-block comment-action-icon'/></div><b:else/><a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'><img src='//www.blogger.com/img/icon_delete13.gif'/></a></b:if></span>
    </b:includable>
    <b:includable id='comment_count_picker' var='post'>
      <b:if cond='data:post.commentSource == 1'><span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.canonicalUrl'/><b:else/><a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:post.commentLabelFull/>: </a></b:if>
    </b:includable>
    <b:includable id='comment_picker' var='post'>
      <b:if cond='data:post.allowNewComments'>
        <script>allowComment=true;</script>
        <b:else/>
        <script>allowComment=false;</script>
      </b:if>
      <b:if cond='data:post.commentSource == 1'><b:include data='post' name='iframe_comments'/> <b:elseif cond='data:post.showThreadedComments'/><b:include data='post' name='threaded_comments'/> <b:else/><b:include data='post' name='comments'/> </b:if>
    </b:includable>
    <b:includable id='comments' var='post'>
      <div class='comments' id='comments'><a name='comments' title='comment form'/><b:if cond='data:post.allowComments'><script>var allowComment=true;</script><b:if cond='data:post.commentPagingRequired'><span class='paging-control-container'><b:if cond='data:post.hasOlderLinks'><a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a> &#160; <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a> &#160; </b:if><data:post.commentRangeText/> <b:if cond='data:post.hasNewerLinks'> &#160; <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a> &#160; <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a></b:if></span></b:if><div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'><dl expr:class='data:post.avatarIndentClass' id='comments-block'><b:loop values='data:post.comments' var='comment'><dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'><b:if cond='data:comment.favicon'><img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/></b:if><a expr:name='data:comment.anchorName' title='anchor name'/><b:if cond='data:blog.enabledCommentProfileImages'><data:comment.authorAvatarImage/> </b:if><b:if cond='data:comment.authorUrl'><a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a><b:else/><data:comment.author/> </b:if><data:commentPostedByMsg/></dt><dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'><b:if cond='data:comment.isDeleted'><span class='deleted-comment'><data:comment.body/></span><b:else/><p><data:comment.body/></p></b:if></dd><dd class='comment-footer'><span class='comment-timestamp'><a expr:href='data:comment.url' title='comment permalink'><data:comment.timestamp/></a><b:include data='comment' name='commentDeleteIcon'/></span></dd></b:loop></dl></div><b:if cond='data:post.commentPagingRequired'><span class='paging-control-container'><a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a><a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a> &#160; <data:post.commentRangeText/> &#160; <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a><a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a></span></b:if><p class='comment-footer'><b:if cond='data:post.embedCommentForm'><b:if cond='data:post.allowNewComments'> <b:include data='post' name='comment-form'/><b:else/> <data:post.noNewCommentsText/></b:if> <b:elseif cond='data:post.allowComments'/><a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a></b:if></p></b:if><b:if cond='data:showCmtPopup'><div id='comment-popup'><iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'/></div></b:if><div id='backlinks-container'><div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'><b:include cond='data:post.showBacklinks' data='post' name='backlinks'/></div></div></div>
    </b:includable>
    <b:includable id='feedLinks'/>
    <b:includable id='feedLinksBody' var='links'>
      <div class='feed-links'><data:feedLinksMsg/><b:loop values='data:links' var='f'><a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' rel='noopener' target='_blank'><data:f.name/> (<data:f.feedType/>)</a></b:loop></div>
    </b:includable>
    <b:includable id='iframe_comments' var='post'>
      <b:if cond='data:post.allowIframeComments'>
        <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
        <div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
        <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick' title='Blogger Comments Iframe'><data:postCommentMsg/></a>
        </b:if>
        <b:else/>
      </b:if>
    </b:includable>
    <b:includable id='mobile-index-post' var='post'>
      <script type='text/javascript'>
        <b:if cond='data:post.thumbnailUrl'>var Thumbnail=&#39;<data:post.thumbnailUrl/>&#39;;<b:else/>var Thumbnail=alt_Img</b:if>
        /*<![CDATA[*/
        if( Thumbnail.indexOf('youtube.com/vi/')!==-1 || Thumbnail.indexOf('ytimg.com')!==-1 ){
          Thumbnail = Thumbnail.replace('/default.','/hqdefault.') ;
        } else{
          Thumbnail = rct_cards?ResizeImg(Thumbnail,t_index_cards[0],t_index_cards[1]):ResizeImg(Thumbnail,t_index[0],t_index[1]);
        }
        var NewThumb = document.createElement('span');
        NewThumb.setAttribute('data-style','background-image:url('+ Thumbnail +')');
        /*]]>*/</script>
      <div class='mobile-post-outer'>
        <a class='index-thumb' expr:href='data:post.canonicalUrl' expr:title='data:post.title'>
          <script expr:class='&quot;m-th-&quot; + data:i' type='text/javascript'>
            var thisScript=document.querySelector(&#39;.m-th-<data:i/>&#39;);thisScript.parentNode.appendChild(NewThumb)
          </script>
        </a>
        <div class='mobile-post-details'>
          <h2 class='mobile-index-title entry-title' itemprop='name'>
            <a expr:href='data:post.canonicalUrl' expr:title='data:post.title'><data:post.title/></a>
          </h2>
          <b:tag name='script'>var auth</b:tag>
          <p class='mobile-post-snippet'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </p>
        </div>
        <div style='clear: both;'/>
      </div>
    </b:includable>
    <b:includable id='mobile-main' var='top'>
      <!-- posts -->
      <div class='blog-posts hfeed c'>
        <b:include data='top' name='status-message'/>

        <b:loop index='i' values='data:posts' var='post'>
          <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
            <b:include data='post' name='mobile-post'/>
            <b:include cond='data:blog.pageType == &quot;item&quot;' data='post' name='comment_picker'/>
            <b:else/>
            <b:include data='post' name='mobile-index-post'/>
          </b:if>
        </b:loop>
      </div>
      <b:include name='mobile-nextprev'/>
    </b:includable>
    <b:includable id='mobile-nextprev'>
      <div class='mobile-pager'>
        <b:if cond='data:newerPageUrl'>
          <a class='m-Nav mobile-newer' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
        </b:if>

        <b:if cond='data:olderPageUrl'>
          <a class='m-Nav mobile-older' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
        </b:if>

        <div class='clear'/>

        <a class='desktop-disp' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>

      </div>
      <div class='clear'/>
    </b:includable>
    <b:includable id='mobile-post' var='post'>
      <div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
        <meta content='ar' itemprop='inLanguage'/>
        <a expr:name='data:post.id'/>
        <meta expr:itemid='data:post.id' itemType='https://schema.org/WebPage' itemprop='mainEntityOfPage' itemscope='itemscope'/> 
        <div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
          <meta expr:content='data:post.firstImageUrl ? data:post.firstImageUrl : &quot;https://4.bp.blogspot.com/-MVB5OaBXstY/VpvWQcpZhZI/AAAAAAAAAqM/2MyUX_xVoc0/s1600-r/alt.png&quot;' itemprop='url'/>
        </div>
        <div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
          <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
            <meta content='https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w206-h60' itemprop='url'/>
          </div>
          <meta expr:content='data:blog.title' itemprop='name'/>
        </div>
        <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
          <h1 class='article-title entry-title' itemprop='name headline'><data:post.title/></h1>
          <div class='post-details'>
            <b:if cond='data:top.showAuthor or data:blog.pageType == &quot;static_page&quot;'>
              <span class='post-author vcard'>
                <h6>&#61447;</h6>
                <span itemprop='author' itemscope='itemscope' itemtype='https://schema.org/Person'>
                  <a class='fn g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'><span itemprop='name'><data:post.author/></span></a>
                  <a class='url' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' itemprop='url'/>
                  <span class='hide' itemprop='description'><data:post.authorAboutMe/></span>
                  <img class='hide' expr:alt='data:post.author' expr:src='data:post.authorPhoto.url ? data:post.authorPhoto.url : &quot;//4.bp.blogspot.com/-nGK3MDjaX2c/WZG28l3WfZI/AAAAAAAAAcM/UBqe8XurHE4KAskRCviHldlJaueByAygwCK4BGAYYCw/s1600/alt-autho.png&quot;' expr:title='data:post.author' itemprop='image'/>
                </span>
              </span>
            </b:if>
            <b:tag name='script'>var auth</b:tag>
            <b:if cond='data:top.showTimestamp or data:blog.pageType == &quot;static_page&quot;'>
              <span class='post-timestamp'>
                <h6>&#61555;</h6>
                <b:if cond='data:post.canonicalUrl'>
                  <a class='timestamp-link' expr:href='data:post.canonicalUrl' rel='bookmark' title='permanent link'>
                    <abbr class='timeago published updated' expr:title='data:post.timestampISO8601' itemprop='datePublished dateModified'><data:post.timestamp/></abbr>


                  </a>
                </b:if>
              </span>
            </b:if>
            <b:if cond='data:post.labels'>
              <div class='post-labels' id='crumbs' itemscope='itemscope' itemtype='http://schema.org/BreadcrumbList'>
                <h6>&#61564;</h6>
                <b:loop values='data:posts' var='post'>
                  <b:if cond='data:post.labels'>
                    <span>
                      <a expr:href='data:blog.homepageUrl'><data:homeMsg/></a> 
                    </span>
                    <b:if cond='data:blog.languageDirection == &quot;ltr&quot;'>
                      <b class='fa fa-angle-right'/><b:else/><b class='fa fa-angle-left'/>
                    </b:if>
                    <b:loop index='i' values='data:post.labels' var='label'>
                      <span itemprop='itemListElement' itemscope='itemscope' itemtype='http://schema.org/ListItem'>
                        <a expr:href='data:label.url' itemprop='item' rel='tag' typeof='WebPage'>
                          <meta expr:content='data:i + 1' itemprop='position'/>
                          <span itemprop='name'><data:label.name/></span>
                        </a>
                      </span>
                      <b:if cond='not data:label.isLast'>
                        <b:if cond='data:blog.languageDirection == &quot;ltr&quot;'>
                          <b class='fa fa-angle-right'/><b:else/><b class='fa fa-angle-left'/>
                        </b:if>
                      </b:if>
                    </b:loop>
                  </b:if>
                </b:loop>
              </div>
            </b:if>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
            <article expr:name='data:blog.metaDescription ? &quot;&quot; : &quot;description&quot;'>
              <div id='postAD-top'/>
              <i class='clear'/>
              <data:post.body/>
              <i class='clear'/>
              <div id='postAD-bottom'/>
              <i class='clear'/>
            </article>
          </div>
          <b:if cond='data:blog.pageType == &quot;item&quot;'>
            <b:include data='post' name='shareButtons'/>
          </b:if>

        </b:if>
      </div>
    </b:includable>
    <b:includable id='nextprev'>
      <b:if cond='!data:mobile'>
        <div class='blog-pager' id='blog-pager'>
          <b:if cond='data:newerPageUrl'>
            <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><span class='newer-text'><data:newerPageTitle/></span></a>
            <b:else/>
            <a class='blog-pager-newer-link inav'><span><data:newerPageTitle/></span><p>أنت الآن تتصفح أحدث موضوع</p></a>
          </b:if>
          <b:if cond='data:olderPageUrl'>
            <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><span class='older-text'><data:olderPageTitle/></span></a>
            <b:else/>
            <a class='blog-pager-older-link inav'><span><data:olderPageTitle/></span><p>أنت الآن تتصفح أقدم موضوع</p></a>
          </b:if>
        </div>
      </b:if>
      <div class='clear'/>
    </b:includable>
    <b:includable id='post' var='post'>
      <div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
        <!-- Google structure Meta Tags -->
        <meta content='ar' itemprop='inLanguage'/>
        <a expr:name='data:post.id'/>
        <meta expr:itemid='data:post.id' itemType='https://schema.org/WebPage' itemprop='mainEntityOfPage' itemscope='itemscope'/> 
        <div itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
          <meta expr:content='data:post.firstImageUrl ? data:post.firstImageUrl : &quot;https://4.bp.blogspot.com/-MVB5OaBXstY/VpvWQcpZhZI/AAAAAAAAAqM/2MyUX_xVoc0/s1600-r/alt.png&quot;' itemprop='url'/>
        </div>
        <div itemprop='publisher' itemscope='itemscope' itemtype='https://schema.org/Organization'>
          <div itemprop='logo' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
            <meta content='https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w206-h60' itemprop='url'/>
          </div>
          <meta expr:content='data:blog.title' itemprop='name'/>
        </div>

        <!-- Posts and Static Pages -->
        <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
          <h1 class='article-title entry-title' itemprop='name headline'><data:post.title/></h1>
          <div class='post-details'>
            <b:if cond='data:top.showAuthor or data:blog.pageType == &quot;static_page&quot;'>
              <span class='post-author vcard'>
                <h6>&#61447;</h6>
                <span itemprop='author' itemscope='itemscope' itemtype='https://schema.org/Person'>
                  <a class='fn g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'><span itemprop='name'><data:post.author/></span></a>
                  <a class='url' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' itemprop='url'/>
                  <span class='hide' itemprop='description'><data:post.authorAboutMe/></span>
                  <img class='hide' expr:alt='data:post.author' expr:src='data:post.authorPhoto.url ? data:post.authorPhoto.url : &quot;//4.bp.blogspot.com/-nGK3MDjaX2c/WZG28l3WfZI/AAAAAAAAAcM/UBqe8XurHE4KAskRCviHldlJaueByAygwCK4BGAYYCw/s1600/alt-autho.png&quot;' expr:title='data:post.author' itemprop='image'/>
                </span>
              </span>
            </b:if>
            <b:tag name='script'>var auth</b:tag>
            <b:if cond='data:top.showTimestamp or data:blog.pageType == &quot;static_page&quot;'>
              <span class='post-timestamp'>
                <h6>&#61555;</h6>
                <b:if cond='data:post.canonicalUrl'>
                  <a class='timestamp-link' expr:href='data:post.canonicalUrl' rel='bookmark' title='permanent link'>
                    <abbr class='timeago published updated' expr:title='data:post.timestampISO8601' itemprop='datePublished dateModified'><data:post.timestamp/></abbr>
                  </a>
                </b:if>
              </span>
            </b:if>
            <b:if cond='data:post.labels'>
              <div class='post-labels' id='crumbs' itemscope='itemscope' itemtype='http://schema.org/BreadcrumbList'>
                <h6>&#61564;</h6>
                <b:loop values='data:posts' var='post'>
                  <b:if cond='data:post.labels'>
                    <span>
                      <a expr:href='data:blog.homepageUrl'><data:homeMsg/></a> 
                    </span>
                    <b:if cond='data:blog.languageDirection == &quot;ltr&quot;'>
                      <b class='fa fa-angle-right'/><b:else/><b class='fa fa-angle-left'/>
                    </b:if>
                    <b:loop index='i' values='data:post.labels' var='label'>
                      <span itemprop='itemListElement' itemscope='itemscope' itemtype='http://schema.org/ListItem'>
                        <a expr:href='data:label.url' itemprop='item' rel='tag' typeof='WebPage'>
                          <meta expr:content='data:i + 1' itemprop='position'/>
                          <span itemprop='name'><data:label.name/></span>
                        </a>
                      </span>
                      <b:if cond='not data:label.isLast'>
                        <b:if cond='data:blog.languageDirection == &quot;ltr&quot;'>
                          <b class='fa fa-angle-right'/><b:else/><b class='fa fa-angle-left'/>
                        </b:if>
                      </b:if>
                    </b:loop>
                  </b:if>
                </b:loop>
              </div>
            </b:if>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
            <article expr:name='data:blog.metaDescription ? &quot;&quot; : &quot;description&quot;'>
              <div id='postAD-top'/>
              <i class='clear'/>
              <data:post.body/>
              <i class='clear'/>
              <div id='postAD-bottom'/>
              <i class='clear'/>
            </article>
          </div>

          <b:if cond='data:blog.pageType == &quot;item&quot;'>
            <b:include data='post' name='shareButtons'/>
            <div class='author-profile hide'>
              <h3 class='profile-h3'>عن الكاتب</h3>
               <i>
                <script class='au-th' type='text/javascript'>
                  <b:if cond='data:post.authorPhoto.url'>var PosAuthor = &#39;<data:post.authorPhoto.url/>&#39;;<b:else/>var PosAuthor = &quot;https://4.bp.blogspot.com/-nGK3MDjaX2c/WZG28l3WfZI/AAAAAAAAAcM/UBqe8XurHE4KAskRCviHldlJaueByAygwCK4BGAYYCw/s1600/alt-autho.png&quot;</b:if>
                    /*<![CDATA[*/
                  PosAuthor = ResizeImg(PosAuthor,100);
                  PosAuthor = httpsEnabled ? PosAuthor.replace('http://', 'https://') : PosAuthor ;
                  var AuthImg = document.createElement('img');
                  AuthImg.src = PosAuthor ;
                  var thisScript=document.querySelector('.au-th');thisScript.parentNode.appendChild(AuthImg);
                  /*]]>*/</script>
                </i>
              <a expr:href='data:post.authorProfileUrl'><span itemprop='name'><data:post.author/></span></a>
              <span itemprop='description'><data:post.authorAboutMe/></span>
            </div>
            <h3 class='related-h3 wide'>شاهد أيضا&#1611;</h3>
            <div class='owl-carousel related-posts wide'/>
            <div class='navi-wide'><b:include name='nextprev'/></div>
            <script type='text/javascript'>/*<![CDATA[*/
              if ( Profile ) {
                document.getElementsByClassName('author-profile')[0].classList.remove('hide');
                document.getElementsByClassName('related-h3')[0].classList.remove('wide');
                document.getElementsByClassName('related-posts')[0].classList.remove('wide');
                if (rel_type === 'slider') {
                  document.getElementsByClassName('navi-wide')[0].classList.remove('navi-wide');
                }
              }
              /*]]>*/</script>
          </b:if>
        </b:if>
        <!-- Index -->
        <b:if cond='data:blog.pageType in {&quot;index&quot;,&quot;archive&quot;}'>
          <script type='text/javascript'>
          <b:if cond='data:post.thumbnailUrl'>var Thumbnail=&#39;<data:post.thumbnailUrl/>&#39;;<b:else/>var Thumbnail=alt_Img</b:if>
          /*<![CDATA[*/
            if( Thumbnail.indexOf('youtube.com/vi/')!==-1 || Thumbnail.indexOf('ytimg.com')!==-1 ){
              Thumbnail = Thumbnail.replace('/default.','/hqdefault.') ;
            } else{
              Thumbnail = rct_cards?ResizeImg(Thumbnail,t_index_cards[0],t_index_cards[1]):ResizeImg(Thumbnail,t_index[0],t_index[1]);
            }
            var NewThumb = document.createElement('span');
            NewThumb.setAttribute('data-style','background-image:url('+ Thumbnail +')');
            /*]]>*/</script>
          <div class='index-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <a class='RecentThumb' expr:href='data:post.canonicalUrl' expr:title='data:post.title'>
              <script expr:class='&quot;ind-th-&quot; + data:i' type='text/javascript'>
                var thisScript=document.querySelector(&#39;.ind-th-<data:i/>&#39;);thisScript.parentNode.insertBefore(NewThumb, thisScript);
              </script>
              <div class='boxs'/></a>
            <h2 class='post-title entry-title' itemprop='name headline'>
              <a expr:href='data:post.link ? data:post.link : data:post.canonicalUrl' expr:title='data:post.title'><data:post.title/></a>
            </h2>
            <div class='details'>
              <b:if cond='data:top.showAuthor'>
                <span class='index-author vcard' itemprop='author' itemscope='itemscope' itemtype='https://schema.org/Person'>
                  <a class='fn g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'><span itemprop='name'><data:post.author/></span></a>
                  <a class='url' expr:href='data:post.authorProfileUrl' itemprop='url'/>
                  <span class='hide' itemprop='description'><data:post.authorAboutMe/></span>
                  <img alt='Author Image' class='hide' expr:src='data:post.authorPhoto.url ? data:post.authorPhoto.url : &quot;https://4.bp.blogspot.com/-nGK3MDjaX2c/WZG28l3WfZI/AAAAAAAAAcM/UBqe8XurHE4KAskRCviHldlJaueByAygwCK4BGAYYCw/s1600/alt-autho.png&quot;' itemprop='image'/>
                </span>
              </b:if>
              <b:tag name='script'>var auth</b:tag>
              <b:if cond='data:top.showTimestamp'>
                <span class='index-time'>
                  <abbr class='timeago published updated' expr:title='data:post.timestampISO8601' itemprop='datePublished dateModified'><data:post.timestampISO8601/></abbr>
                  <a expr:href='data:post.url' rel='bookmark'/>
                </span>
              </b:if>
            </div>
            <p class='RecentSnippet'><data:post.snippet/></p>
            <a class='ReadMore' expr:href='data:post.canonicalUrl' expr:title='data:post.title'><data:post.jumpText/></a>
            <a class='ShareIndex fa fa-heart-o' title='Share Post'/>
            <div class='ShareIndexBut notr'>
              <a class='fb' expr:href='&quot;https://www.facebook.com/sharer/sharer.php?u=&quot; + data:post.canonicalUrl' rel='noopener' target='_blank' title='Post'>&#61594;</a>
              <a class='go' expr:href='&quot;https://plus.google.com/share?url=&quot; + data:post.canonicalUrl' rel='noopener' target='_blank' title='+1'>&#61856;</a>
              <a class='tw' expr:href='&quot;https://twitter.com/home?status=&quot; + data:post.canonicalUrl' rel='noopener' target='_blank' title='Tweet'>&#61593;</a>
              <a class='pin' expr:href='&quot;https://pinterest.com/pin/create/button/?url=&quot; + data:post.canonicalUrl + &quot;&amp;media=&quot; + (data:post.firstImageUrl ? data:post.firstImageUrl : &quot;https://3.bp.blogspot.com/-KwmN4jf70kk/VjEnrjuF-7I/AAAAAAAABq0/0ga5WDnDjZI/s1600-r/alt%2Bimage.png&quot; ) + &quot;&amp;description=&quot; + data:post.title' rel='noopener' target='_blank' title='Pin It'>&#61650;</a>
            </div>
          </div>
        </b:if>
      </div>
    </b:includable>
    <b:includable id='postQuickEdit' var='post'>
      <b:if cond='data:post.editUrl'><span expr:class='&quot;item-control &quot; + data:post.adminClass'><a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'><img alt='' class='icon-action' height='18' src='//img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/></a></span></b:if>
    </b:includable>
    <b:includable id='shareButtons' var='post'>
      <div class='share'>
        <h7>هل أعجبك الموضوع &#1567; </h7>
        <a class='facebook' expr:href='&quot;https://www.facebook.com/sharer/sharer.php?v=4&amp;u=&quot; + data:post.canonicalUrl' onclick='window.open(this.href,&quot;_blank&quot;,&quot;width=640,height=320&quot;); return false;' rel='noopener' target='_blank' title='Post'>&#61594;</a>
        <a class='google' expr:href='&quot;https://plus.google.com/share?url=&quot; + data:post.canonicalUrl' onclick='window.open(this.href,&quot;_blank&quot;,&quot;width=640,height=320&quot;); return false;' rel='noopener' target='_blank' title='+1'>&#61856;</a>
        <a class='twitter' expr:href='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.canonicalUrl' onclick='window.open(this.href,&quot;_blank&quot;,&quot;width=640,height=320&quot;); return false;' rel='noopener' target='_blank' title='Tweet'>&#61593;</a>
        <a class='pinterest' expr:href='&quot;https://pinterest.com/pin/create/button/?url=&quot; + data:post.canonicalUrl + &quot;&amp;media=&quot; + (data:post.firstImageUrl ? data:post.firstImageUrl : &quot;https://3.bp.blogspot.com/-KwmN4jf70kk/VjEnrjuF-7I/AAAAAAAABq0/0ga5WDnDjZI/s1600-r/alt%2Bimage.png&quot; ) + &quot;&amp;description=&quot; + data:post.title' onclick='window.open(this.href,&quot;_blank&quot;,&quot;width=640,height=320&quot;); return false;' rel='noopener' target='_blank' title='Pin It'>&#62001;</a>
        <a class='whatsapp' expr:data-link='data:post.canonicalUrl' expr:data-text='data:post.title'>&#62002;</a>
        <a class='print' onclick='window.print()' rel='noopener' target='_blank' title='طباعة المقال'>&#61487;</a>
        <div class='fb-like' data-action='like' data-layout='button' data-share='false' data-show-faces='false' expr:data-href='data:post.canonicalUrl'/>
        <div class='plus-one'>
          <div class='g-plusone' data-annotation='none' expr:data-href='data:post.url'/>
        </div>
        <i class='clear'/>
      </div>
    </b:includable>
    <b:includable id='status-message'>
      <b:if cond='data:navMessage'>
        <div class='status-msg-wrap'><data:navMessage/></div>
      </b:if>
    </b:includable>
    <b:includable id='threaded-comment-form' var='post'>
      <div class='comment-form'><a name='comment-form' title='comment form'/><data:blogTeamBlogMessage/><a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src' title='comment src'/><iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/><data:post.friendConnectJs/> <data:post.cmtfpIframe/><script type='text/javascript'>BLOG_CMT_createIframe(&quot;<data:post.appRpcRelayPath/>&quot;);</script></div>
    </b:includable>
    <b:includable id='threaded_comment_js' var='post'>
      <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
      <script type='text/javascript'>
        (function(){
          var n=<data:post.commentJso/>;
          var k=<data:post.commentMsgs/>;
          var u=<data:post.commentConfig/>;
          /*<![CDATA[*/
          var f=null;if(n&&n.length>0){f=parseInt(n[n.length-1].timestamp)+1}var s=function(x){if(x.gd$extendedProperty){for(var w in x.gd$extendedProperty){if(x.gd$extendedProperty[w].name=="blogger.contentRemoved"){return '&<span class="deleted-comment">&'+x.content.$t+"</span>"}}}return x.content.$t};var o=function(z){f=null;var D=[];if(z&&z.feed&&z.feed.entry){for(var A=0,E;E=z.feed.entry[A];A++){var C={};var w=/blog-(\d+).post-(\d+)/.exec(E.id.$t);C.id=w?w[2]:null;C.body=s(E);C.timestamp=Date.parse(E.published.$t)+"";if(E.author&&E.author.constructor===Array){var x=E.author[0];if(x){C.author={name:(x.name?x.name.$t:undefined),profileUrl:(x.uri?x.uri.$t:undefined),avatarUrl:(x.gd$image?x.gd$image.src:undefined)}}}if(E.link){if(E.link[2]){C.link=C.permalink=E.link[2].href}if(E.link[3]){var B=/.*comments\/default\/(\d+)\?.*/.exec(E.link[3].href);if(B&&B[1]){C.parentId=B[1]}}}C.deleteclass="item-control blog-admin";if(E.gd$extendedProperty){for(var y in E.gd$extendedProperty){if(E.gd$extendedProperty[y].name=="blogger.itemClass"){C.deleteclass+=" "+E.gd$extendedProperty[y].value}else{if(E.gd$extendedProperty[y].name=="blogger.displayTime"){C.displayTime=E.gd$extendedProperty[y].value}}}}D.push(C)}}return D};var i=function(y){if(c()){var x=u.feed+"?alt=json&v=2&orderby=published&reverse=false&max-results=50";if(f){x+="&published-min="+new Date(f).toISOString()}window.bloggercomments=function(A){var z=o(A);f=z.length<50?null:parseInt(z[z.length-1].timestamp)+1;y(z);window.bloggercomments=null};x+="&callback=bloggercomments";var w=document.createElement("script");w.type="text/javascript";w.src=x;document.getElementsByTagName("head")[0].appendChild(w)}};var c=function(){return !!f};var a=function(w,y){if("iswriter"==w){var x=!!y.author&&y.author.name==u.authorName&&y.author.profileUrl==u.authorUrl;return x?"true":""}else{if("deletelink"==w){return u.baseUri+"/delete-comment.g?blogID="+u.blogId+"&postID="+y.id}else{if("deleteclass"==w){return y.deleteclass}}}return""};var h=null;var q=null;var m=undefined;var d=function(w,x){if(h==null){h=document.getElementById("comment-editor");if(h!=null){h.height="250px";h.style.display="block";q=h.src.split("#")}}if(h&&(w!==m)){document.getElementById(x).insertBefore(h,null);h.src=q[0]+(w?"&parentID="+w:"")+"#"+q[1];m=w}};var b=(window.location.hash||"#").substring(1);var p,j;if(/^comment-form_/.test(b)){p=b.substring("comment-form_".length)}else{if(/^c[0-9]+$/.test(b)){j=b.substring(1)}}var g={maxDepth:u.maxThreadDepth};var t={id:u.postId,data:n,loadNext:i,hasMore:c,getMeta:a,onReply:d,rendered:true,initComment:j,initReplyThread:p,config:g,messages:k};var v=function(){if(window.goog&&window.goog.comments){var w=document.getElementById("comment-holder");window.goog.comments.render(w,t)}};if(window.goog&&window.goog.comments){v()}else{window.goog=window.goog||{};window.goog.comments=window.goog.comments||{};window.goog.comments.loadQueue=window.goog.comments.loadQueue||[];window.goog.comments.loadQueue.push(v)}})();
/*]]>*/</script>
    </b:includable>
    <b:includable id='threaded_comments' var='post'>
      <div class='comments' id='comments'><a name='comments' title='comment form'/><p class='comment-msg'><data:blogCommentMessage/></p><div class='comments-content'><b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/><div id='comment-holder'><data:post.commentHtml/></div></div><p class='comment-footer'>
<b:if cond='data:post.allowNewComments'><b:include data='post' name='threaded-comment-form'/> <b:else/><data:post.noNewCommentsText/> </b:if></p><b:if cond='data:showCmtPopup'><div id='comment-popup'><iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'/></div></b:if><div id='backlinks-container'><div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'><b:include cond='data:post.showBacklinks' data='post' name='backlinks'/></div></div></div>
    </b:includable>
  </b:widget>
  <b:widget id='HTML106' locked='true' mobile='yes' title='نظام التعليقات' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'>blogger-facebook-disqus</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'><b:if cond='data:content == &quot;blogger&quot;'><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='blogger'/></div><b:elseif cond='data:content == &quot;facebook&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='fbc' data-id='fbc'/></div><div class='c-container'><b:include name='facebook'/></div><b:elseif cond='data:content == &quot;disqus&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='dsq' data-id='dsq'/></div><div class='c-container'><b:include name='disqus'/></div><b:elseif cond='data:content == &quot;blogger-facebook-disqus&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/><span class='fbc' data-id='fbc'/><span class='dsq' data-id='dsq'/></div><div class='c-container'><b:include name='blogger'/><b:include name='facebook'/> <b:include name='disqus'/></div><b:elseif cond='data:content == &quot;blogger-disqus-facebook&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/><span class='dsq' data-id='dsq'/><span class='fbc' data-id='fbc'/></div><div class='c-container'><b:include name='blogger'/><b:include name='disqus'/> <b:include name='facebook'/></div><b:elseif cond='data:content == &quot;facebook-blogger-disqus&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='fbc' data-id='fbc'/><span class='blo' data-id='blo'/><span class='dsq' data-id='dsq'/></div><div class='c-container'><b:include name='facebook'/><b:include name='blogger'/> <b:include name='disqus'/></div><b:elseif cond='data:content == &quot;facebook-disqus-blogger&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='fbc' data-id='fbc'/><span class='dsq' data-id='dsq'/><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='facebook'/><b:include name='disqus'/> <b:include name='blogger'/></div><b:elseif cond='data:content == &quot;disqus-facebook-blogger&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='dsq' data-id='dsq'/><span class='fbc' data-id='fbc'/><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='disqus'/><b:include name='facebook'/> <b:include name='blogger'/></div><b:elseif cond='data:content == &quot;disqus-blogger-facebook&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='dsq' data-id='dsq'/><span class='blo' data-id='blo'/><span class='fbc' data-id='fbc'/></div><div class='c-container'><b:include name='disqus'/><b:include name='blogger'/> <b:include name='facebook'/></div><b:elseif cond='data:content == &quot;blogger-facebook&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/><span class='fbc' data-id='fbc'/></div><div class='c-container'><b:include name='blogger'/><b:include name='facebook'/></div><b:elseif cond='data:content == &quot;blogger-disqus&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/><span class='dsq' data-id='dsq'/></div><div class='c-container'><b:include name='blogger'/><b:include name='disqus'/></div><b:elseif cond='data:content == &quot;facebook-blogger&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='fbc' data-id='fbc'/><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='facebook'/><b:include name='blogger'/></div><b:elseif cond='data:content == &quot;facebook-disqus&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='fbc' data-id='fbc'/><span class='dsq' data-id='dsq'/></div><div class='c-container'><b:include name='facebook'/><b:include name='disqus'/></div><b:elseif cond='data:content == &quot;disqus-blogger&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='dsq' data-id='dsq'/><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='disqus'/><b:include name='blogger'/></div><b:elseif cond='data:content == &quot;disqus-facebook&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='dsq' data-id='dsq'/><span class='fbc' data-id='fbc'/></div><div class='c-container'><b:include name='disqus'/><b:include name='facebook'/></div><b:elseif cond='data:content == &quot;&quot;'/><div class='c-icons'><h3>التعليقات</h3><span class='blo' data-id='blo'/></div><div class='c-container'><b:include name='blogger'/></div><b:elseif cond='data:content == &quot;no&quot;'/><div/></b:if></b:if>
    </b:includable>
    <b:includable id='blogger'>
      <div class='Blogger-Comments tab-cont' id='blo'>
      </div>
    </b:includable>
    <b:includable id='disqus'>
      <div class='Disqus-Comments tab-cont' id='dsq'>
        <div id='disqus_thread'/>
      </div>
    </b:includable>
    <b:includable id='facebook'>
      <div class='Facebook-Comments tab-cont' id='fbc'>
        <div class='fb-comments' data-numposts='5' data-width='100%' expr:data-href='data:blog.url'/>
      </div>
      <script type='text/javascript'>/*<![CDATA[*/
        var Fb_Comments = document.getElementsByClassName("fb-comments")[0] ;
        Fb_Comments.setAttribute("data-colorscheme", Skin ) ;
        /*]]>*/</script>
    </b:includable>
  </b:widget>
  <b:widget id='HTML108' locked='true' mobile='yes' title='معرف تطبيق Facebook' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
        <b:if cond='data:content != &quot;&quot; and data:content != no'>
          <div id='fb-root'/>
          &lt;script type=&#39;text/javascript&#39;&gt;var FB_ID = &#39;<data:content/>&#39;; &lt;/script&gt; 
          <script type='text/javascript'>
            var blogLocale = &quot;<data:blog.locale/>&quot;;
            /*<![CDATA[*/
            switch(blogLocale){
              case "en"    : fb_loca = 'en_US' ; break ;
              case "en-GB" : fb_loca = 'en_GB' ; break ;
              case "pt-PT" : fb_loca = 'pt_PT' ; break ;
              case "da"    : fb_loca = 'da_DK' ; break ;
              case "he"    : fb_loca = 'he_il' ; break ;
              default      : fb_loca = blogLocale + "_" + blogLocale.toUpperCase() ; break ;
            }
            if (allowComment){document.addEventListener("DOMContentLoaded",function(){var excuted=false;document.addEventListener("scroll",function(){if(!excuted){faceBook()}});function faceBook(){excuted=true;var d=document,f=d.createElement('script');f.src="//connect.facebook.net/"+fb_loca+"/sdk.js#xfbml=1&version=v2.5&appId="+FB_ID;f.id='facebook-jssdk';d.head.appendChild(f)}});}
            /*]]>*/</script>
        </b:if>
      </b:if>
    </b:includable>
  </b:widget>
  <b:widget id='HTML107' locked='true' mobile='yes' title='معرف قناة Disqus' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>
        <b:if cond='data:content != &quot;&quot; and data:content != no'>
          &lt;script type=&#39;text/javascript&#39;&gt;var Dis_Name = &#39;<data:content/>&#39;; &lt;/script&gt; 
          <script type='text/javascript'>/*<![CDATA[*/
            if (allowComment){document.addEventListener("DOMContentLoaded",function(){var excuted2=false;document.addEventListener("scroll",function(){if(!excuted2){disQus()}});function disQus(){excuted2=true;var d=document,s=d.createElement('script');s.src='//'+Dis_Name+'.disqus.com/embed.js';s.setAttribute('data-timestamp',+new Date());d.body.appendChild(s)}});}
          /*]]>*/</script>
          <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript' rel='nofollow'>comments powered by Disqus.</a></noscript>
        </b:if>
      </b:if>
    </b:includable>
  </b:widget>
  <b:widget id='HTML201' locked='true' mobile='yes' title='إعلان أول الموضوع' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType == &quot;item&quot;'><data:content/></b:if>
    </b:includable>
  </b:widget>
  <b:widget id='HTML202' locked='true' mobile='yes' title='إعلان وسط الموضوع' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType == &quot;item&quot;'><data:content/></b:if>
    </b:includable>
  </b:widget>
  <b:widget id='HTML203' locked='true' mobile='yes' title='إعلان آخر الموضوع' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:blog.pageType == &quot;item&quot;'><data:content/></b:if>
    </b:includable>
  </b:widget>
  <b:widget id='ContactForm2' locked='true' mobile='yes' title='نموذج الاتصال' type='ContactForm' version='1'>
    <b:includable id='main'>
      <form class='inside-contact' name='contact-form'>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg' name='email' size='30' type='text' value=''/>
        <br/>
        <textarea class='contact-form-email-message' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg' name='email-message' rows='8'/>
        <div class='contact-buttons'>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
          <button class='cancel-button' type='reset'>إلغاء</button>
        </div>
        <div class='contact-message'>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </div>
        <i class='clear'/>
      </form>
    </b:includable>
  </b:widget>
</b:section>
<b:if cond='data:blog.url == data:blog.homepageUrl or data:blog.url == data:blog.homepageUrl + &quot;?m=0&quot;'>
<b:section id='Widgets5'/>
<div class='Sided-Section'>
<b:section id='Widgets6'/>
<b:section id='Widgets7'/>
</div>
<b:section id='Widgets8'/>
<div class='Sided-Section'>
<b:section id='Widgets9'/>
<b:section id='Widgets10'/>
</div>
<b:section id='Widgets11'/>
</b:if>
</main>
<aside class='notr'>
<b:section id='SideBar'>
  <b:widget id='LinkList102' locked='true' mobile='yes' title='مواقع التواصل' type='LinkList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='link-3'>#</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='text-1'>youtube</b:widget-setting>
      <b:widget-setting name='link-1'>http://</b:widget-setting>
      <b:widget-setting name='text-0'>facebook</b:widget-setting>
      <b:widget-setting name='link-2'>https://engineerwithoutlimits.blogspot.com</b:widget-setting>
      <b:widget-setting name='text-3'>instagram</b:widget-setting>
      <b:widget-setting name='link-0'>http://</b:widget-setting>
      <b:widget-setting name='text-2'>blogger</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <div class='widget-content'>
        <b:loop values='data:links' var='link'>
          <a expr:class='&quot;fa fa-&quot; + data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener' target='_blank'><br/>
            <span><data:link.name/></span>
          </a>
        </b:loop>
      </div>
    </b:includable>
  </b:widget>
  <b:widget id='HTML103' locked='true' title='الطقس' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'>yes</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:if cond='data:title != &quot;&quot; and data:content == yes'><h2><data:title/></h2></b:if>
      <div class='widget-content'><data:content/></div>
      <b:if cond='data:content == yes'>
        <div class='hide' id='weather'/>
      </b:if>
    </b:includable>
  </b:widget>
  <b:widget id='PopularPosts1' locked='false' mobile='yes' title='المشاركات الشائعة' type='PopularPosts'>
    <b:widget-settings>
      <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
      <b:widget-setting name='showThumbnails'>true</b:widget-setting>
      <b:widget-setting name='showSnippets'>true</b:widget-setting>
      <b:widget-setting name='timeRange'>LAST_WEEK</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'><b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if><div class='widget-content popular-posts'><ul><b:loop values='data:posts' var='post'><li><b:if cond='!data:showThumbnails'><b:if cond='!data:showSnippets'><a expr:href='data:post.href'><data:post.title/></a><b:else/><div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div><div class='item-snippet'><data:post.snippet/></div></b:if><b:else/><div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'><b:if cond='data:post.thumbnail'><div class='item-thumbnail'><a expr:href='data:post.href' target='_blank'><b:if cond='data:post.thumbnail.isYoutube'><b:if cond='data:blog.isMobileRequest'><img expr:alt='data:post.title' expr:data-src='resizeImage(data:post.thumbnail, 72, &quot;1:1&quot;)' expr:title='data:post.title'/><b:else/><img expr:alt='data:post.title' expr:data-src='data:post.thumbnail.youtubeMaxResDefaultUrl' expr:title='data:post.title'/></b:if><b:else/><img expr:alt='data:post.title' expr:data-src='data:post.thumbnail' expr:title='data:post.title'/></b:if></a></div></b:if><div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div><b:if cond='data:showSnippets'><div class='item-snippet'><data:post.snippet/></div></b:if></div><div style='clear:both'/></b:if></li></b:loop></ul></div></b:includable>
  </b:widget>
  <b:widget id='Profile1' locked='false' title='المؤلفون' type='Profile' version='1'>
    <b:widget-settings>
      <b:widget-setting name='showaboutme'>true</b:widget-setting>
      <b:widget-setting name='showlocation'>false</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if><div class='widget-content'/></b:includable>
  </b:widget>
  <b:widget id='Label8' locked='false' mobile='yes' title='التسميات' type='Label'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
      <b:widget-setting name='display'>LIST</b:widget-setting>
      <b:widget-setting name='selectedLabelsList'/>
      <b:widget-setting name='showType'>ALL</b:widget-setting>
      <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              <span dir='ltr'>(<data:label.count/>)</span>
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
  </b:widget>
  <b:widget id='Stats1' locked='false' title='إحصاءات المدونة' type='Stats' version='1'>
    <b:widget-settings>
      <b:widget-setting name='showGraphicalCounter'>false</b:widget-setting>
      <b:widget-setting name='showAnimatedCounter'>false</b:widget-setting>
      <b:widget-setting name='showSparkline'>true</b:widget-setting>
      <b:widget-setting name='sparklineStyle'>BLACK_TRANSPARENT</b:widget-setting>
      <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content'>
    <!-- Content is going to be visible when data will be fetched from server. -->
    <div expr:id='data:widget.instanceId + &quot;_content&quot;' style='display: none;'>
      <!-- Counter and image will be injected later via AJAX call. -->
      <b:if cond='data:showSparkline'>
        <img alt='Sparkline' expr:id='data:widget.instanceId + &quot;_sparkline&quot;' height='30' width='75'/>
      </b:if>
      <span expr:class='&quot;counter-wrapper &quot; + (data:showGraphicalCounter ? &quot;graph-counter-wrapper&quot; : &quot;text-counter-wrapper&quot;)' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'>
      </span>
      <b:include name='quickedit'/>
    </div>
  </div>
</b:includable>
  </b:widget>
</b:section>
</aside>

<div class='clear'/>
</div>
</div>

<b:if cond='data:blog.mobileClass != &quot; mobile&quot;'>

<footer>
<div class='f-row-color'>
<div class='wrap'>
<b:section id='f-row' maxwidgets='2' showaddelement='no'>
  <b:widget id='ContactForm1' locked='true' title='اتصل بنا' type='ContactForm' version='1'>
    <b:includable id='main'>
      <b:if cond='data:title != &quot;&quot;'>
        <h2 class='title'><data:title/></h2>
      </b:if>
      <div class='contact-form-widget'>
        <div class='form'>
          <form name='contact-form'>
            <p/>
<input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
            <p/>
            <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg' name='email' size='30' type='text' value=''/>
            <p/>
            <textarea class='contact-form-email-message' cols='25' expr:Placeholder='data:contactFormMessageMsg' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
            <p/>
            <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
            <p/>
            <div style='text-align: center; max-width: 222px; width: 100%'>
              <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
              <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
            </div>
          </form>
        </div>
      </div>
    </b:includable>
  </b:widget>
  <b:widget id='HTML140' locked='true' title='رسالة الاشتراك' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <i class='fa fa-microphone'/>
      <i class='fa fa-arrow-up'/>
      <b:if cond='data:content in {&quot;&quot;,no}'>
      <p>إذا أعجبك محتوى مدونتنا نتمنى البقاء على تواصل دائم &#1548; فقط قم بإدخال بريدك الإلكتروني للإشتراك في بريد المدونة السريع ليصلك جديد المدونة أولا&#1611; بأول &#1548; كما يمكنك إرسال رساله بالضغط على الزر المجاور ... </p>
        <b:else/>
        <p><data:content/></p>
      </b:if>
    </b:includable>
  </b:widget>
  <b:widget id='FollowByEmail1' locked='true' title='بريد المدونة' type='FollowByEmail' version='1'>
    <b:includable id='main'>
      <div class='widget-content'>
        <form action='https://feedburner.google.com/fb/a/mailverify' class='subscription' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
          <input class='email' name='email' placeholder='Email address...' type='text'/>
          <button class='subscribe'>اشتراك</button>
          <input expr:value='data:feedPath' name='uri' type='hidden'/>
          <input name='loc' type='hidden' value='en_US'/>
        </form>
      </div>
    </b:includable>
  </b:widget>
</b:section>
</div>
</div>
<div class='f-cols wrap'>
<b:section id='Col-1'/>
<b:section id='Col-2'/>
<b:section id='Col-3'/>
<b:section id='Col-4'/>
</div>
<div class='clear'/>
</footer>
</b:if>
<div class='clear'/>
<div class='copy-color'>
<div class='wrap'>
<b:section id='copyrights' maxwidgets='2' showaddelements='no'>
  <b:widget id='HTML110' locked='true' mobile='yes' title='حقوق المدونة' type='HTML' version='1'>
    <b:widget-settings>
      <b:widget-setting name='content'/>
    </b:widget-settings>
    <b:includable id='main'>
      <div class='c-site'>
        <p>جميع الحقوق محفوظة</p>
        <a expr:href='data:blog.homepageUrl' expr:title='data:blog.title' rel='noopener' target='_blank'><data:blog.title/></a>
        <p><script class='c-scr' type='text/javascript'>var thisScript=document.querySelector(&#39;.c-scr&#39;);
          thisScript.parentNode.innerHTML=blogDate.getFullYear()</script></p>
      </div>
    </b:includable>
  </b:widget>
  <b:widget id='LinkList104' locked='true' mobile='yes' title='مواقع التواصل الاجتماعي' type='LinkList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='text-1'>youtube</b:widget-setting>
      <b:widget-setting name='link-1'>http://</b:widget-setting>
      <b:widget-setting name='text-0'>facebook</b:widget-setting>
      <b:widget-setting name='link-0'>https://www.facebook.com/SoftwareArabi</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
	<div class='widget-content'>
	  <ul>
		<b:loop values='data:links' var='link'>
          <li><a expr:class='&quot;fa fa-&quot; + data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener' target='_blank'/></li>
		</b:loop>
	  </ul>
	</div>
  </b:includable>
  </b:widget>
  <b:widget id='LinkList105' locked='true' mobile='yes' title='أداه الترجمة' type='LinkList' version='1'>
    <b:widget-settings>
      <b:widget-setting name='text-10'>فبراير</b:widget-setting>
      <b:widget-setting name='sorting'>NONE</b:widget-setting>
      <b:widget-setting name='link-1'>Novembr</b:widget-setting>
      <b:widget-setting name='link-2'>October</b:widget-setting>
      <b:widget-setting name='link-0'>December</b:widget-setting>
      <b:widget-setting name='link-11'>January</b:widget-setting>
      <b:widget-setting name='link-10'>Febraury</b:widget-setting>
      <b:widget-setting name='text-9'>مارس</b:widget-setting>
      <b:widget-setting name='link-9'>March</b:widget-setting>
      <b:widget-setting name='text-8'>ابريل</b:widget-setting>
      <b:widget-setting name='link-7'>May</b:widget-setting>
      <b:widget-setting name='link-8'>April</b:widget-setting>
      <b:widget-setting name='link-5'>July</b:widget-setting>
      <b:widget-setting name='link-6'>June</b:widget-setting>
      <b:widget-setting name='link-3'>September</b:widget-setting>
      <b:widget-setting name='link-4'>August</b:widget-setting>
      <b:widget-setting name='text-1'>نوفمبر</b:widget-setting>
      <b:widget-setting name='text-0'>ديسمبر</b:widget-setting>
      <b:widget-setting name='text-3'>سبتمبر</b:widget-setting>
      <b:widget-setting name='text-2'>أكتوبر</b:widget-setting>
      <b:widget-setting name='text-5'>يوليو</b:widget-setting>
      <b:widget-setting name='text-4'>أغسطس</b:widget-setting>
      <b:widget-setting name='text-7'>مايو</b:widget-setting>
      <b:widget-setting name='text-6'>يونيو</b:widget-setting>
      <b:widget-setting name='text-11'>يناير</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
      <b:loop values='data:links' var='link'>
        <i class='tran' expr:data-source='data:link.name' expr:data-trans='data:link.target'/>
      </b:loop>
    </b:includable>
  </b:widget>
</b:section>
</div>
</div>
  <b:elseif cond='data:blog.pageName == &quot;demo&quot;'/><!-- Demo Page -->
  <style>body{overflow:hidden}.mainWrapper{background:none;width:100%;max-width:100%}iframe{width:100vw;height:100vh;border:none;}</style>
  <iframe/>
  <script type='text/javascript'>/*<![CDATA[*/
    if(window.location.href.indexOf('?redirected=')!==-1){window.location.href= window.location.href.split('?')[0];}else{document.querySelector('iframe').src = document.referrer.substring(document.referrer.indexOf('?redirected=') + 12);}
    /*]]>*/</script>
  <b:else/><!-- Error Page -->
  <style>.mainWrapper{height:100vh;width:100%;max-width:100%!important;}main{width:100%;border-right:none;float:none;clear:both;}</style>
  <div class='error'><i class='fa fa-bolt'/><span>خطأ 404</span><p>عفوا&#1611; &#1548; الصفحة التي تبحث عنها غير موجوده</p><a expr:href='data:blog.homepageUrl' title=''>الصفحة الرئيسية</a></div>
</b:if>
  <i class='clear'/>
</div>
</div> <!-- End Container & Wrapper -->
<i id='TempColor'/>
<script type='text/javascript'>/*<![CDATA[*/
  var Conditions=["إعصار","عاصفة إستوائية ","إعصار","عواصف رعدية شديدة","عواصف رعدية","أمطار وثلوج","أمطار وسقيع","ثلوج وصقيع","تجمد ورذاذ","رذاذ","مطر مجمد","زخات أمطار","زخات أمطار","عواصف ثلجية","زخات ثلوج خفيفه","عواصف ثلجية","ثلج","وابل","مطر مجمد","غبار","ضباب","ضبابي","دخان","غير مستقر","عاصف","برد","غائم","غائم جزئيا&#1611;","غائم","غائم جزئيا&#1611;","غائم جزئيا&#1611;","صافي","مشمس","معتدل","معتدل","مطر وبرد","حار","عواصف رعدية","عواصف رعدية","عواصف رعدية","أمطار","ثلج كثيف","زخات ثلوج","ثلج كثيف","غائم جزئيا&#1611;","عواصف رعدية","زخات الثلج","عواصف رعدية","لا توجد بيانات"];
  var AiS = [];
  AiS[0] = 'مشاركة واحدة';
  AiS[1] = 'مشاركتان';
  AiS[2] = 'مشاركات';
  AiS[3] = 'مشاركة';
  AiS[4] = 'الملف الشخصي';
  AiS[5] = 'بلا قسم';
  AiS[6] = 'شاهد الموضوع';
  AiS[7] = 'شاهد المزيد';
/*]]>*/</script>
<script type='text/javascript'>/*<![CDATA[*/
  var a="Droid Arabic Kufi;Noto Naskh Arabic;Thabit;Noto Nastaliq Urdu Draft;Noto Nastaliq Urdu;Droid Arabic Naskh;Noto Kufi Arabic;Noto Sans Kufi;Noto Naskh Arabic UI;ig;innerHTML;#page-skin-1;querySelector;replace;link;createElement;rel;stylesheet;BlogFont;LevonFont;PostFont;Droid Arabic Font;toLowerCase;;href;https://fonts.googleapis.com/earlyaccess/;https://fonts.googleapis.com/css?family=;post;https://fonts.googleapis.com/earlyaccess/droidarabicnaskh;appendChild;head;a".split(";");function e(b,d){var f=b==a[0]||b==a[1]||b==a[2]||b==a[3]||b==a[4]||b==a[5]||b==a[6]||b==a[7]||b==a[8]?!0:!1,c=new RegExp(d,a[9]);document[a[12]](a[11])[a[10]]=document[a[12]](a[11])[a[10]][a[13]](c,b);c=document[a[15]](a[14]);c[a[16]]=a[17];d===a[18]&&b!==a[19]||d===a[20]&&b!==a[21]?f?(b=b[a[13]](/\s/g,a[23])[a[22]](),c[a[24]]=a[25]+b):c[a[24]]=a[26]+b:d===a[27]&&b!==a[21]&&(c[a[24]]=a[28]);document[a[30]][a[29]](c)}e(blog_font,a[18]);document[a[12]](a[11])[a[10]]=document[a[12]](a[11])[a[10]][a[13]](/AltFont/ig,alt_font);
/*]]>*/<b:if cond='data:blog.pageType in {&quot;item&quot;,&quot;static_page&quot;}'>e(post_font,a[20]);</b:if>
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js' type='text/javascript'/>
<b:if cond='data:view.isMultipleItems'>
  <script type='text/javascript'>/*<![CDATA[*/
    $(window).scroll(function(){$('.RecentThumb span,.index-thumb span').each(function(){if(($(window).outerHeight()+$(window).scrollTop())>$(this).offset().top&&$(this).not('.rendered')){$(this).addClass('rendered');$(this).attr('style',$(this).attr('data-style'));$(this).removeAttr('data-style')}})});
  /*]]>*/</script>
</b:if>
  <b:if cond='data:blog.pageName != &quot;demo&quot;'>
  <!-- Global Script -->
  <script type='text/javascript'>/*<![CDATA[*/
    var c=function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);e=null;return g;}}:function(){};c=![];return f;};}();var gq=c(this,function(){var c=function(){return'\x64\x65\x76';},d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var e=function(){var f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!f['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var g=function(){var h=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return h['\x74\x65\x73\x74'](d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var i=function(j){var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);}};var l=function(m){var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);}};if(!e()){if(!g()){i('\x69\x6e\x64\u0435\x78\x4f\x66');}else{i('\x69\x6e\x64\x65\x78\x4f\x66');}}else{i('\x69\x6e\x64\u0435\x78\x4f\x66');}});gq();if($('#LinkList100')['length']!=0x1){$('#HeaderTop')['append']('<div\x20id=\x22LinkList100\x22><i\x20class=\x22search-wide\x22/></div>');$('#SRCH')['appendTo']('#LinkList100');}else{$('#SRCH')['prependTo']('#LinkList100');}$('.t-search')['click'](function(d){var e={'qnAcs':function(f,g){return f(g);},'tPcBT':'.search-form\x20input','NOiQB':'search-open','QkBEe':function(h,i){return h(i);},'UDeCk':'#LinkList100\x20ul\x20li','ngUnh':'hide-social','fELGx':function(j,k){return j>k;},'ucKHJ':function(l,m){return l(m);},'RRPNy':'href','hPYXV':function(n,o){return n+o;},'GiWZn':'/search?q=','Mrfcg':function(p,q){return p(q);}};e['qnAcs']($,e['tPcBT'])['toggleClass'](e['NOiQB']);e['QkBEe']($,e['UDeCk'])['toggleClass'](e['ngUnh']);if(e['fELGx'](e['QkBEe']($,e['tPcBT'])['val']()['length'],0x0)){e['ucKHJ']($,this)['attr'](e['RRPNy'],e['hPYXV'](e['GiWZn'],e['Mrfcg']($,e['tPcBT'])['val']()));}else{d['preventDefault']();}});if(!isSidebar){$('aside')['remove']();$('main')['addClass']('wide-container');}$(function(){var r={'nvRXB':function(s,t){return s(t);},'HywUt':'menu-active','xfUUQ':'but-active','CYsYb':function(u,v){return u!=v;},'mqnDw':'href','DrEQQ':'/search/','qLOaI':function(w,x){return w==x;},'sRBjm':function(y,z){return y+z;},'uJoCh':'?max-results=','ONhnG':function(A,B){return A(B);},'NHWuR':function(C,D){return C(D);},'ubRJH':function(E,F){return E(F);},'zwKdI':function(G,H){return G(H);},'NUZgv':'<ul/>','HdHIC':function(I,J){return I(J);},'ZaEUg':'.ma','VrlVT':'subed','tJlia':function(K,L){return K(L);},'auBaJ':'#LinkList101','xkmSQ':function(M,N){return M(N);},'iOKKK':function(O,P){return O!==P;},'ilvNI':function(Q,R){return Q>R;},'wdnBj':'2|1|4|3|0','sCtBD':function(S,T){return S==T;},'HMxqO':'menu-type','RuzVZ':'menu-2','AQnqe':function(U,V){return U(V);},'lLzEb':'<div\x20class=\x22mega\x22/>','ZGYih':'<div\x20class=\x22mega\x20notr\x22/>','Sqmgh':'data-label','WljWp':function(W,X){return W(X);},'WBXwi':function(Y,Z){return Y(Z);},'yrAFF':'MegaUL','anTgp':function(a0,a1){return a0===a1;},'BbfgY':'search/label/','XjiaV':function(a2,a3){return a2+a3;},'qFXzg':'/search/label/','pFoJu':function(a4,a5){return a4<a5;},'ancVq':'3|5|0|7|6|2|8|4|1','CLqRN':'https://','PHNPM':'</a>','AyxTg':function(a6,a7){return a6+a7;},'MdsFD':'<span\x20class=\x27mega-thumb\x27\x20style=\x27background:url(','Lotct':')\x20no-repeat\x27></span>','PDHEe':'alternate','PLqFQ':'<h3>','YdZHn':'</h3>','IUrgn':'http://','TfZgm':function(a8,a9){return a8+a9;},'VGerK':function(aa,ab){return aa+ab;},'xhwtn':'<a\x20href=\x27','hunlX':function(ac,ad){return ac!==ad;},'pOHLc':'youtube.com/vi/','XXjal':function(ae,af){return ae!==af;},'GqSBU':'ytimg.com','xqIbc':'/default.','tdQRV':'/hqdefault.','OyZJU':function(ag,ah,ai,aj){return ag(ah,ai,aj);},'iuRvo':function(ak,al){return ak+al;},'FcgnW':'<abbr\x20class=\x27mega-date\x27>','VAwkw':'</abbr>','YviVw':'.mega','LEqAm':function(am,an){return am(an);},'rUDGe':function(ao,ap){return ao(ap);},'PMcTl':function(aq,ar){return aq(ar);},'jbqpE':'#LinkList101\x20>\x20ul','FJJqM':function(as,at){return as(at);},'Qjsky':'.menu-2','FMuie':function(au,av){return au(av);},'iEeyP':'show-mega','dvWXH':'.menu-1','sLTVv':function(aw,ax){return aw(ax);},'MIZNg':'fast','BFmOu':function(ay,az){return ay(az);},'DQthp':'hvd','oKjvu':'<i\x20class=\x22fa\x20fa-spinner\x20fa-spin\x22/>','sSGRE':function(aA,aB){return aA+aB;},'bTnUV':'/feeds/posts/summary/-/','acuOh':'?alt=json-in-script&max-results=4','wLhDN':'jsonp','zqtEg':function(aC,aD){return aC(aD);},'srRSx':function(aE,aF){return aE(aF);},'XwzHH':function(aG,aH){return aG(aH);},'mwfAw':'style','ybLFp':function(aI,aJ){return aI(aJ);},'wFCTZ':function(aK,aL){return aK(aL);},'OeHht':function(aM,aN){return aM(aN);},'NGSTn':'1|2|3|0|4','RxaJm':function(aO,aP){return aO(aP);},'SrZEH':function(aQ,aR){return aQ(aR);},'jGDes':function(aS,aT){return aS+aT;},'ETikG':'li.ma:eq(','nljDu':function(aU,aV){return aU===aV;},'boaPE':'rtl','hZavO':function(aW,aX){return aW(aX);},'gaMGN':'.m-line','SwPvT':function(aY,aZ){return aY(aZ);},'AbkRq':function(b0,b1){return b0(b1);},'mIfCo':function(b2,b3){return b2-b3;},'jPoXs':function(b4,b5){return b4*b5;},'VcQxb':function(b6,b7){return b6+b7;},'wwSUq':function(b8,b9){return b8(b9);},'dNkJC':'.res-butt2','QMNSB':function(ba,bb){return ba(bb);},'IlUUa':function(bc,bd){return bc+bd;},'UPgtY':function(be,bf){return be>bf;},'hfTuh':'show-bt','UHVfB':'resp-it','WSkqn':'Domains','DmWSZ':function(bg,bh){return bg<bh;},'HDwui':function(bi,bj){return bi(bj);},'EdUpD':function(bk,bl){return bk-bl;},'WGRES':function(bm,bn){return bm<bn;},'LYQwU':function(bo,bp){return bo+bp;},'XryVD':function(bq,br){return bq==br;},'jFyyt':function(bs,bt){return bs==bt;},'YXZWH':'post-preview','ElMdY':'www.blogger','dtGpE':function(bu,bv){return bu==bv;},'OQSoA':'draft.blogger','Lauvf':'b/layout-preview','TYxmW':'b/preview','LxMfA':function(bw,bx){return bw==bx;},'YTWFk':'translate.google','iKwia':'webcache.googleusercontent','IfUqH':function(by,bz){return by==bz;},'xiNCH':'template-editor','onQSc':'html','CEatC':'.redirect','tiyhB':function(bA,bB){return bA(bB);},'oxUnR':'script:not(\x22.redirect\x20script\x22)','VomjZ':function(bC,bD){return bC(bD);},'ZJlxd':'style:not(\x22.redirect\x20style\x22)','dvlqw':'head','Nmepj':'Levon\x20Icons','qdCeT':function(bE,bF){return bE===bF;},'GRone':'Levon\x20Font','SqIig':'LevonFont','rfxfB':function(bG,bH){return bG+bH;},'SFvfj':function(bI){return bI();},'UOtkn':function(bJ,bK){return bJ/bK;},'dsHcZ':'/feeds/posts/summary?alt=json-in-script&start-index=','SNfKK':'&max-results=150','oOCEX':'.Profile','NvIDS':function(bL,bM){return bL<bM;},'Aiyzo':'4|0|1|3|2','KGTpl':function(bN,bO){return bN!==bO;},'kNOwD':function(bP,bQ){return bP==bQ;},'olLgv':'b16-rounded','FNcSH':function(bR,bS,bT){return bR(bS,bT);},'ztzQq':'https://4.bp.blogspot.com/-nGK3MDjaX2c/WZG28l3WfZI/AAAAAAAAAcM/UBqe8XurHE4KAskRCviHldlJaueByAygwCK4BGAYYCw/s1600/alt-autho.png','yiMdb':function(bU,bV){return bU-bV;},'cQFvd':'1|13|8|3|9|7|10|4|0|11|2|12|5|6','xVBOW':'<h4\x20class=\x27au-wid-name\x27>','zJhzH':'</h4>','eGhwK':'<i\x20class=\x27clear\x27/>','iAIha':function(bW,bX){return bW+bX;},'DwpQq':'\x27\x20class=\x27au-post\x27><span\x20class=\x27au-po-img\x27\x20style=\x27background-image:url(','zHHMN':')\x27/><h2\x20class=\x27au-po-title\x27>','YqPDW':'</h2><div\x20class=\x27au-po-details\x27><span\x20class=\x27au-po-date\x27>','xFgio':'</span></div></a>','oTIiY':function(bY,bZ){return bY+bZ;},'tYGCr':'<span\x20class=\x27au-wid-pic\x27\x20style=\x27background-image:url(','slfOO':')\x27/>','YjcPs':function(c0,c1){return c0(c1);},'NUogy':'.Profile\x20.widget-content','JmhAs':'<a\x20class=\x27au-wid-prof\x27\x20target=\x27_blank\x27\x20href=\x27','xPjtN':'</a></div>','OtNkq':function(c2,c3){return c2+c3;},'nIYJa':function(c4,c5){return c4+c5;},'jGSTq':'<div\x20class=\x27au-posts\x27><div\x20class=\x27au-wid-pos-card\x27><span\x20class=\x27au-wid-pic\x27\x20style=\x27background-image:url(','gQmrY':')\x27></span><h3\x20class=\x27au-wid-name\x27>','akVLA':'</h3><div\x20class=\x27au-wid-details\x27><span\x20class=\x27au-wid-count\x27>','GXPWD':'</span></div><i\x20class=\x27clear\x27/></div><div\x20class=\x27au-wid-pos-links\x27>','nJjkz':'</div><span\x20class=\x27au-wid-back\x27/>','cJNbM':'<div\x20class=\x27au-wid-card\x27>','zlkrT':'<span\x20class=\x27au-wid-count\x27>','SaIPb':'</span>','NPanu':'</div>','FPgHd':'<i>1</i><b>','DJiKb':'</b>','MwHVe':'<i>2</i><b>','fqsGQ':function(c6,c7){return c6>c7;},'SaVbJ':function(c8,c9){return c8>c9;},'TdasE':'<i>','oQQeK':'</i><b>','YrYwx':function(ca){return ca();},'WzaBq':'/feeds/posts/summary?alt=json-in-script','jQJzc':function(cb,cc){return cb(cc);},'EwAId':'.opend','PkcCq':'opend','sDuln':'.au-wid-card','FjLgz':'hide-auths','QVYBI':function(cd,ce){return cd(ce);},'GXHMU':'show-posts','qhKps':function(cf,cg){return cf(cg);},'mdgqj':function(ch,ci){return ch(ci);},'snIEh':function(cj,ck){return cj(ck);},'ziYst':'.au-posts','EetXQ':'.show-posts','mGMpj':function(cl,cm){return cl(cm);},'kTRSI':'.res-butt','RLxjQ':function(cn,co){return cn(co);},'LYaCs':'#LinkList101\x20li\x20a','HUpIl':function(cp,cq){return cp(cq);},'sVYyj':'#LinkList101\x20li','Ojmza':function(cr,cs){return cr(cs);},'UxUBh':'li.ma\x20a','TZbIe':'.MegaUL','GohoH':function(ct,cu){return ct(cu);},'GqpeK':'mouseenter','nTswo':'.menu-2\x20li.ma','ELRrR':function(cv,cw){return cv(cw);},'BgIMw':'mouseleave','vrIzG':function(cx){return cx();},'aZehw':'.widget-item-control','WOzOQ':'#HTML110','pFosi':'#LinkList104','yRDti':'https://www.blogger.com/feeds/9220326453562420506/posts/default?alt=json-in-script','GxZWh':function(cy,cz){return cy(cz);},'pMOfS':'scroll','zKWzf':function(cA,cB){return cA(cB);},'bWzPs':'body','yRZOW':'click','JFHCl':'.au-wid-back','Kzbxd':function(cC,cD){return cC(cD);}};r['mGMpj']($,r['kTRSI'])['click'](function(){r['nvRXB']($,this)['next']('ul')['toggleClass'](r['HywUt']);r['nvRXB']($,this)['toggleClass'](r['xfUUQ']);});r['RLxjQ']($,r['LYaCs'])['each'](function(){if(r['CYsYb'](r['nvRXB']($,this)['attr'](r['mqnDw'])['indexOf'](r['DrEQQ']),-0x1)&&r['qLOaI'](r['nvRXB']($,this)['attr'](r['mqnDw'])['indexOf'](r['sRBjm'](r['uJoCh'],m_res)),-0x1)){r['ONhnG']($,this)['attr'](r['mqnDw'],r['sRBjm'](r['sRBjm'](r['NHWuR']($,this)['attr'](r['mqnDw']),r['uJoCh']),m_res));}});r['HUpIl']($,r['sVYyj'])['each'](function(){if(r['qLOaI'](r['ubRJH']($,this)['text']()['indexOf']('-'),-0x1)){r['zwKdI']($,this)['addClass']('ma')['append'](r['NUZgv']);}else{var cE=r['zwKdI']($,this)['find']('a')['text']()['replace']('-','');r['HdHIC']($,this)['find']('a')['text'](cE);r['HdHIC']($,this)['prev'](r['ZaEUg'])['addClass'](r['VrlVT'])['find']('ul')['append'](r['HdHIC']($,this));}r['tJlia']($,r['auBaJ'])['fadeIn'](0x0);});r['Ojmza']($,r['UxUBh'])['each'](function(){var cF=r['xkmSQ']($,this)['attr'](r['mqnDw']);if(r['iOKKK'](cF['indexOf']('#'),-0x1)&&r['ilvNI'](cF['length'],0x1)){var cG=r['wdnBj']['split']('|'),cH=0x0;while(!![]){switch(cG[cH++]){case'0':if(r['sCtBD'](Settings[r['HMxqO']],r['RuzVZ'])){r['AQnqe']($,this)['after'](r['lLzEb']);}else{r['AQnqe']($,this)['after'](r['ZGYih']);}continue;case'1':r['AQnqe']($,this)['attr'](r['Sqmgh'],cI);continue;case'2':var cI=r['WljWp']($,this)['attr'](r['mqnDw'])['substr'](0x1);continue;case'3':r['WBXwi']($,this)['parent']()['addClass'](r['yrAFF']);continue;case'4':if(r['anTgp'](r['WBXwi']($,this)['attr'](r['mqnDw'])['indexOf'](r['BbfgY']),-0x1)){r['WBXwi']($,this)['attr'](r['mqnDw'],r['sRBjm'](r['sRBjm'](r['XjiaV'](r['qFXzg'],cI),r['uJoCh']),m_res));}continue;}break;}}});function cJ(cK){return![];}r['Ojmza']($,r['TZbIe'])['mouseenter'](function(){var cL=r['LEqAm']($,this);if(r['ilvNI'](r['rUDGe']($,window)['width'](),0x384)&&!r['PMcTl']($,r['jbqpE'])['hasClass'](r['HywUt'])){r['FJJqM']($,r['Qjsky'])['find'](r['FMuie']($,this))['find'](r['YviVw'])['addClass'](r['iEeyP']);r['FMuie']($,r['dvWXH'])['find'](r['sLTVv']($,this))['find'](r['YviVw'])['stop']()['fadeIn'](r['MIZNg'])['animate']({'top':'70'},r['MIZNg']);if(!r['BFmOu']($,this)['hasClass'](r['DQthp'])){var cM=cL['find']('a')['attr'](r['Sqmgh']);cL['find'](r['YviVw'])['html'](r['oKjvu']);$['get'](r['sSGRE'](r['sSGRE'](r['bTnUV'],cM),r['acuOh']),function(cN){if(r['ilvNI'](cN['feed']['openSearch$totalResults']['$t'],0x0)){var cO='';for(var cP=0x0;r['pFoJu'](cP,cN['feed']['entry']['length']);cP++){var cQ=r['ancVq']['split']('|'),cR=0x0;while(!![]){switch(cQ[cR++]){case'0':var cS=cN['feed']['entry'][cP]['title']['$t'],cX=cN['feed']['entry'][cP]['published']['$t']['substring'](0x0,0xa),cU=cN['feed']['entry'][cP]['author'][0x0]['name']['$t'],cV=r['iOKKK'](cN['feed']['entry'][cP]['author'][0x0]['uri'],undefined)?cN['feed']['entry'][cP]['author'][0x0]['uri']['$t']:'#',cY=r['iOKKK'](cN['feed']['entry'][cP]['media$thumbnail'],undefined)?cN['feed']['entry'][cP]['media$thumbnail']['url']:alt_Img,cX=cN['feed']['entry'][cP]['published']['$t']['substr'](0x0,0xa),cY=httpsEnabled?cY['replace'](/http:\/\//,r['CLqRN']):cY;continue;case'1':cO+=r['PHNPM'];continue;case'2':cO+=r['XjiaV'](r['AyxTg'](r['MdsFD'],d2),r['Lotct']);continue;case'3':var cZ=cN['feed']['entry'][cP]['link']['map'](function(d1){return d1['rel'];})['indexOf'](r['PDHEe']),d0=cN['feed']['entry'][cP]['link'][cZ]['href'];continue;case'4':cO+=r['AyxTg'](r['AyxTg'](r['PLqFQ'],cS),r['YdZHn']);continue;case'5':d0=httpsEnabled?d0['replace'](r['IUrgn'],r['CLqRN']):d0;continue;case'6':cO+=r['TfZgm'](r['VGerK'](r['xhwtn'],d0),'\x27>');continue;case'7':if(r['hunlX'](cY['indexOf'](r['pOHLc']),-0x1)||r['XXjal'](cY['indexOf'](r['GqSBU']),-0x1)){var d2=cY['replace'](r['xqIbc'],r['tdQRV']);}else{var d2=r['OyZJU'](ResizeImg,cY,t_mega[0x0],t_mega[0x1]);}continue;case'8':cO+=r['VGerK'](r['iuRvo'](r['FcgnW'],cX),r['VAwkw']);continue;}break;}}cL['find'](r['YviVw'])['html'](cO);}},r['wLhDN']);r['BFmOu']($,this)['addClass'](r['DQthp']);}}else if(!r['BFmOu']($,r['jbqpE'])['hasClass'](r['HywUt'])){r['zqtEg']($,r['Qjsky'])['find'](r['srRSx']($,this))['find'](r['YviVw'])['addClass'](r['iEeyP']);r['srRSx']($,r['dvWXH'])['find'](r['XwzHH']($,this))['find'](r['YviVw'])['stop']()['fadeIn'](r['MIZNg'])['animate']({'top':'70'},r['MIZNg']);}});r['Ojmza']($,r['TZbIe'])['mouseleave'](function(){r['ybLFp']($,r['Qjsky'])['find'](r['wFCTZ']($,this))['find'](r['YviVw'])['removeClass'](r['iEeyP']);r['OeHht']($,r['dvWXH'])['find'](r['OeHht']($,this))['find'](r['YviVw'])['stop']()['fadeOut'](function(){r['XwzHH']($,this)['removeAttr'](r['mwfAw']);});});r['GohoH']($,document)['on'](r['GqpeK'],r['nTswo'],function(){if(!r['OeHht']($,r['jbqpE'])['hasClass'](r['HywUt'])){var d4=r['NGSTn']['split']('|'),d5=0x0;while(!![]){switch(d4[d5++]){case'0':var d6=r['RxaJm']($,this);continue;case'1':var d7=0x0;continue;case'2':var d8=r['SrZEH']($,this)['prevAll']();continue;case'3':for(var d9=0x0;r['pFoJu'](d9,d8['length']);d9++){d7+=r['SrZEH']($,r['sSGRE'](r['jGDes'](r['ETikG'],d9),')'))['outerWidth']();}continue;case'4':if(r['nljDu'](b_dir,r['boaPE'])){r['hZavO']($,r['gaMGN'])['css']({'width':d6['outerWidth'](),'right':r['jGDes'](d7,0x55),'opacity':0x1});}else{r['SwPvT']($,r['gaMGN'])['css']({'width':d6['outerWidth'](),'left':r['jGDes'](d7,0x55),'opacity':0x1});}continue;}break;}}});r['ELRrR']($,document)['on'](r['BgIMw'],r['nTswo'],function(){if(!r['SwPvT']($,r['jbqpE'])['hasClass'](r['HywUt'])){if(r['nljDu'](b_dir,r['boaPE'])){r['SwPvT']($,r['gaMGN'])['css']({'width':0x0,'right':0x14,'opacity':0x0});}else{r['SwPvT']($,r['gaMGN'])['css']({'width':0x0,'left':0x14,'opacity':0x0});}}});function da(){var db=r['AbkRq']($,r['ZaEUg']),dc=r['mIfCo'](r['jPoXs'](0x5,db['length']),0x5),dd=0x0,de;for(de=0x0;r['pFoJu'](de,db['length']);de=r['VcQxb'](de,0x1)){dd+=db[de]['offsetWidth'];}var df=r['mIfCo'](r['wwSUq']($,r['auBaJ'])['width'](),0x78),dg=r['wwSUq']($,r['dNkJC']),dh=r['QMNSB']($,r['jbqpE']),di=r['IlUUa'](dd,dc);if(r['UPgtY'](window['innerWidth'],0x384)){if(r['pFoJu'](df,di)){dg['addClass'](r['hfTuh']);dh['addClass'](r['UHVfB']);}else{dg['removeClass'](r['hfTuh']);dh['removeClass'](r['UHVfB']);}}else{dg['removeClass'](r['hfTuh']);dh['removeClass'](r['UHVfB']);}}r['vrIzG'](da);r['ELRrR']($,window)['resize'](da);r['ELRrR']($,r['aZehw'])['remove']();r['ELRrR']($,r['WOzOQ'])['before'](r['ELRrR']($,r['pFosi']));$['get'](r['yRDti'],function(dj){var dk;for(dk=0x0;r['pFoJu'](dk,dj['feed']['entry']['length']);dk=r['IlUUa'](dk,0x1)){var dl=r['QMNSB']($,dj['feed']['entry'][dk]['content']['$t']);if(r['nljDu'](dj['feed']['entry'][dk]['title']['$t'],r['WSkqn'])){var dm,dn,dp=dl['find']('li');var dq=[];for(var dn=0x0;r['DmWSZ'](dn,dp['length']);dn=r['IlUUa'](dn,0x1)){dq['push'](r['HDwui']($,dp[dn])['text']());}var ds=window['location']['hostname']['toLowerCase']();var dt=window['location']['href']['toLowerCase']();var du,dv=r['EdUpD'](dq['length'],0x1);for(du=0x0;r['WGRES'](du,dq['length']);du=r['LYQwU'](du,0x1)){if(r['sCtBD'](ds['indexOf'](dq[du]),-0x1)){if(r['XryVD'](du,dv)&&r['jFyyt'](dt['indexOf'](r['YXZWH']),-0x1)&&r['jFyyt'](dt['indexOf'](r['ElMdY']),-0x1)&&r['dtGpE'](dt['indexOf'](r['OQSoA']),-0x1)&&r['dtGpE'](dt['indexOf'](r['Lauvf']),-0x1)&&r['dtGpE'](dt['indexOf'](r['TYxmW']),-0x1)&&r['LxMfA'](dt['indexOf'](r['YTWFk']),-0x1)&&r['LxMfA'](dt['indexOf'](r['iKwia']),-0x1)&&r['IfUqH'](dt['indexOf'](r['xiNCH']),-0x1)){r['HDwui']($,r['onQSc'])['html'](dl['find'](r['CEatC'])['html']());}}else{var dw=r['tiyhB']($,dj['feed']['entry'][dk]['content']['$t'])['find'](r['oxUnR']);var dx=r['VomjZ']($,dj['feed']['entry'][dk]['content']['$t'])['find'](r['ZJlxd']);r['VomjZ']($,r['dvlqw'])['append'](dx);r['VomjZ']($,r['dvlqw'])['append'](dw);break;}}}else if(r['nljDu'](dj['feed']['entry'][dk]['title']['$t'],r['Nmepj'])){var dx=r['VomjZ']($,dj['feed']['entry'][dk]['content']['$t'])['find'](r['mwfAw']);r['VomjZ']($,r['dvlqw'])['append'](dx);}else if(r['qdCeT'](dj['feed']['entry'][dk]['title']['$t'],r['GRone'])){if(r['qdCeT'](blog_font,r['SqIig'])){var dx=r['VomjZ']($,dj['feed']['entry'][dk]['content']['$t'])['find'](r['mwfAw']);r['VomjZ']($,r['dvlqw'])['append'](dx);}}}},r['wLhDN']);r['GxZWh']($,window)['one'](r['pMOfS'],dA);function dA(){var dB={'NGHUH':function(dC,dD){return r['IfUqH'](dC,dD);},'XSBkY':r['PDHEe'],'hqEBy':function(dE,dF){return r['rfxfB'](dE,dF);},'iLRiL':function(dG){return r['SFvfj'](dG);},'INylN':function(dH,dI){return r['WGRES'](dH,dI);},'AZBfz':function(dJ,dK){return r['UOtkn'](dJ,dK);},'dgJHu':function(dL,dM){return r['rfxfB'](dL,dM);},'sdIhq':r['dsHcZ'],'VHhcj':function(dN,dO){return r['jPoXs'](dN,dO);},'GUUwR':r['SNfKK'],'BqEtn':r['wLhDN'],'LQLXY':function(dP,dQ){return r['VomjZ'](dP,dQ);},'AOLKo':r['oOCEX'],'YNmQw':function(dR,dS){return r['IfUqH'](dR,dS);},'qnMyW':function(dT,dU){return r['NvIDS'](dT,dU);},'EQNSn':r['Aiyzo'],'QDOiB':r['IUrgn'],'rwWCG':r['CLqRN'],'VzufM':function(dV,dW){return r['qdCeT'](dV,dW);},'awudG':function(dX,dY){return r['KGTpl'](dX,dY);},'USvpJ':function(dZ,e0){return r['kNOwD'](dZ,e0);},'fEEZI':r['olLgv'],'aJjEp':function(e1,e2,e3){return r['FNcSH'](e1,e2,e3);},'qfCkQ':r['ztzQq'],'FKZga':function(e4,e5){return r['yiMdb'](e4,e5);},'Hoyek':r['cQFvd'],'oRjTQ':r['xVBOW'],'LFpLz':r['zJhzH'],'hXNvp':r['eGhwK'],'zWIXC':function(e6,e7){return r['rfxfB'](e6,e7);},'KNrmN':function(e8,e9){return r['iAIha'](e8,e9);},'thSTc':r['xhwtn'],'TOYZw':r['DwpQq'],'IkhoR':r['zHHMN'],'StEbr':r['YqPDW'],'kesjz':r['xFgio'],'VIDfg':function(ea,eb){return r['oTIiY'](ea,eb);},'GaiRE':r['tYGCr'],'aYUZR':r['slfOO'],'MssJQ':function(ec,ed){return r['YjcPs'](ec,ed);},'ILwYR':r['NUogy'],'KHPFZ':function(ee,ef){return r['oTIiY'](ee,ef);},'AhxPU':r['JmhAs'],'Cnuns':r['xPjtN'],'zShrO':function(eg,eh){return r['OtNkq'](eg,eh);},'cXPkK':function(ei,ej){return r['nIYJa'](ei,ej);},'MLSFB':r['jGSTq'],'yyphB':r['gQmrY'],'nZmDe':r['akVLA'],'MPUYh':r['GXPWD'],'VwjIe':r['nJjkz'],'vMPgz':r['cJNbM'],'HDHej':r['zlkrT'],'xEYwW':r['SaIPb'],'YNYdW':r['NPanu'],'HdoBj':function(ek,el){return r['nIYJa'](ek,el);},'AxJpu':r['FPgHd'],'qKIAZ':r['DJiKb'],'yepxu':r['MwHVe'],'Nurhm':function(em,en){return r['fqsGQ'](em,en);},'UFGmI':function(eo,ep){return r['SaVbJ'](eo,ep);},'fbyGQ':r['TdasE'],'pKBUe':r['oQQeK'],'aSJaq':function(eq){return r['YrYwx'](eq);}};if(r['SaVbJ'](r['YjcPs']($,r['oOCEX'])['length'],0x0)){var er=[],es=0x0,et=!![];$['get'](r['WzaBq'],function(eu){var ev={'ZcdTU':function(ew,ex){return dB['NGHUH'](ew,ex);},'yhplE':function(ey,ez){return dB['YNmQw'](ey,ez);},'fFVZV':function(eA,eB){return dB['qnMyW'](eA,eB);},'YqybK':function(eC,eD){return dB['dgJHu'](eC,eD);},'USPHP':dB['EQNSn'],'TXpEV':dB['QDOiB'],'RzccC':dB['rwWCG'],'NCCJl':function(eE,eF){return dB['VzufM'](eE,eF);},'HZrlU':function(eG,eH){return dB['awudG'](eG,eH);},'kMISV':function(eI,eJ){return dB['USvpJ'](eI,eJ);},'HQoUR':dB['fEEZI'],'JdfmZ':function(eK,eL,eM){return dB['aJjEp'](eK,eL,eM);},'DMIwv':function(eN,eO,eP){return dB['aJjEp'](eN,eO,eP);},'ephPw':dB['qfCkQ'],'mRRJJ':function(eQ,eR){return dB['FKZga'](eQ,eR);},'Mnyau':dB['Hoyek'],'OvbIW':function(eS,eT){return dB['dgJHu'](eS,eT);},'CLbRr':dB['oRjTQ'],'LryyU':dB['LFpLz'],'igdWT':dB['hXNvp'],'GKBZA':function(eU,eV){return dB['zWIXC'](eU,eV);},'zDMKy':function(eW,eX){return dB['KNrmN'](eW,eX);},'mNAAp':function(eY,eZ){return dB['KNrmN'](eY,eZ);},'oKzUN':function(f0,f1){return dB['KNrmN'](f0,f1);},'kmLba':function(f2,f3){return dB['KNrmN'](f2,f3);},'Vyrmt':function(f4,f5){return dB['KNrmN'](f4,f5);},'OKfso':dB['thSTc'],'NEdcC':dB['TOYZw'],'qkOYy':dB['IkhoR'],'qcSpd':dB['StEbr'],'nJppy':dB['kesjz'],'DmTlh':function(f6,f7){return dB['VIDfg'](f6,f7);},'HZDiX':dB['GaiRE'],'LussO':dB['aYUZR'],'ffLcY':function(f8,f9){return dB['MssJQ'](f8,f9);},'yNVMJ':dB['ILwYR'],'gcses':function(fa,fb){return dB['awudG'](fa,fb);},'pvHLY':function(fc,fd){return dB['VIDfg'](fc,fd);},'bieSD':function(fe,ff){return dB['KHPFZ'](fe,ff);},'VdPrn':function(fg,fh){return dB['KHPFZ'](fg,fh);},'GjJdZ':dB['AhxPU'],'LpDYv':dB['Cnuns'],'JLFKk':function(fi,fj){return dB['KHPFZ'](fi,fj);},'AfCIR':function(fk,fl){return dB['zShrO'](fk,fl);},'tOjQY':function(fm,fn){return dB['zShrO'](fm,fn);},'hEZDl':function(fo,fp){return dB['cXPkK'](fo,fp);},'jhSyQ':dB['MLSFB'],'DODbR':dB['yyphB'],'aahAP':dB['nZmDe'],'PzBPI':dB['MPUYh'],'BEkeB':dB['VwjIe'],'KjjPZ':dB['vMPgz'],'Epkan':dB['HDHej'],'xZpni':dB['xEYwW'],'UtVsq':dB['YNYdW'],'TuSaa':function(fq,fr){return dB['VzufM'](fq,fr);},'GHVzt':function(fs,ft){return dB['HdoBj'](fs,ft);},'Oindg':dB['AxJpu'],'UTFju':dB['qKIAZ'],'BATQr':function(fu,fv){return dB['VzufM'](fu,fv);},'cnaaZ':function(fw,fx){return dB['HdoBj'](fw,fx);},'bHdDx':function(fy,fz){return dB['HdoBj'](fy,fz);},'wpOLZ':dB['yepxu'],'SPknq':function(fA,fB){return dB['Nurhm'](fA,fB);},'nzXAl':function(fC,fD){return dB['UFGmI'](fC,fD);},'oADMO':function(fE,fF){return dB['HdoBj'](fE,fF);},'VuMpB':dB['fbyGQ'],'JMHwt':dB['pKBUe'],'pfmWQ':function(fG,fH){return dB['HdoBj'](fG,fH);},'Otznr':function(fI,fJ){return dB['HdoBj'](fI,fJ);}};var fK=eu['feed']['openSearch$totalResults']['$t'];if(dB['UFGmI'](fK,0x0)){function fL(){var fM={'XkOWl':function(fN,fO){return dB['NGHUH'](fN,fO);},'yXyCf':dB['XSBkY'],'ZwUAh':function(fP,fQ){return dB['hqEBy'](fP,fQ);},'yZFup':function(fR){return dB['iLRiL'](fR);}};if(dB['INylN'](es,Math['ceil'](dB['AZBfz'](fK,0x96)))){$['get'](dB['hqEBy'](dB['dgJHu'](dB['sdIhq'],dB['dgJHu'](dB['VHhcj'](es,0x96),0x1)),dB['GUUwR']),function(fS){var fT={'gIEst':function(fU,fV){return ev['ZcdTU'](fU,fV);},'myMIg':function(fW,fX){return ev['yhplE'](fW,fX);}};et=![];var fY,fZ;for(fY=0x0;ev['fFVZV'](fY,fS['feed']['entry']['length']);fY=ev['YqybK'](fY,0x1)){var g0=ev['USPHP']['split']('|'),g1=0x0;while(!![]){switch(g0[g1++]){case'0':gb=httpsEnabled?gb['replace'](ev['TXpEV'],ev['RzccC']):gb;continue;case'1':gc=httpsEnabled?gc['replace'](ev['TXpEV'],ev['RzccC']):gc;continue;case'2':if(ev['NCCJl'](g4['length'],0x0)){er['push']({'Name':g6,'Image':ge,'Link':g7,'Count':0x1,'Posts':[]});var g2=er['filter'](function(g3){return fT['myMIg'](g3['Name'],g6);});g2[0x0]['Posts']['push']({'p_name':g8,'p_link':gc,'p_date':ga,'p_Image':gb});}else{g4[0x0]['Count']+=0x1;g4[0x0]['Posts']['push']({'p_name':g8,'p_link':gc,'p_date':ga,'p_Image':gb});}continue;case'3':var g4=er['filter'](function(g5){return fT['gIEst'](g5['Name'],g6);});continue;case'4':var g6=fS['feed']['entry'][fY]['author'][0x0]['name']['$t'],g7=ev['HZrlU'](fS['feed']['entry'][fY]['author'][0x0]['uri'],undefined)?fS['feed']['entry'][fY]['author'][0x0]['uri']['$t']:'',g8=fS['feed']['entry'][fY]['title']['$t'],g9=fS['feed']['entry'][fY]['published']['$t'],ga=g9['substr'](0x0,0xa),gb=ev['HZrlU'](fS['feed']['entry'][fY]['media$thumbnail'],undefined)?fS['feed']['entry'][fY]['media$thumbnail']['url']:alt_Img,gc=fS['feed']['entry'][fY]['link']['filter'](function(gf){return fM['XkOWl'](gf['rel'],fM['yXyCf']);})[0x0]['href'],gd=fS['feed']['entry'][fY]['author'][0x0]['gd$image']['src'],ge=ev['kMISV'](gd['indexOf'](ev['HQoUR']),-0x1)?ev['JdfmZ'](ResizeImg,gd,0x50):ev['DMIwv'](ResizeImg,ev['ephPw'],0x50);continue;}break;}}},dB['BqEtn'])['done'](function(){es=fM['ZwUAh'](es,0x1);fM['yZFup'](fL);});}else{dB['LQLXY'](clearInterval,fL);er['sort'](function(gg,gh){return ev['mRRJJ'](gh['Count'],gg['Count']);});$['each'](er,function(gi,gj){var gk=ev['Mnyau']['split']('|'),gl=0x0;while(!![]){switch(gk[gl++]){case'0':gp+=ev['YqybK'](ev['OvbIW'](ev['CLbRr'],gj['Name']),ev['LryyU']);continue;case'1':var gm;continue;case'2':gp+=ev['igdWT'];continue;case'3':for(gn=0x0;ev['fFVZV'](gn,gj['Posts']['length']);gn=ev['GKBZA'](gn,0x1)){go+=ev['GKBZA'](ev['zDMKy'](ev['mNAAp'](ev['mNAAp'](ev['oKzUN'](ev['oKzUN'](ev['kmLba'](ev['Vyrmt'](ev['OKfso'],gj['Posts'][gn]['p_link']),ev['NEdcC']),gj['Posts'][gn]['p_Image']),ev['qkOYy']),gj['Posts'][gn]['p_name']),ev['qcSpd']),gj['Posts'][gn]['p_date']),ev['nJppy']);}continue;case'4':gp+=ev['Vyrmt'](ev['DmTlh'](ev['HZDiX'],gj['Image']),ev['LussO']);continue;case'5':gp+=go;continue;case'6':ev['ffLcY']($,ev['yNVMJ'])['append'](gp);continue;case'7':if(ev['gcses'](gj['Link'],'#')){go+=ev['pvHLY'](ev['bieSD'](ev['VdPrn'](ev['VdPrn'](ev['GjJdZ'],gj['Link']),'\x27>'),AiS[0x4]),ev['LpDYv']);}continue;case'8':var gn,go=ev['JLFKk'](ev['AfCIR'](ev['AfCIR'](ev['AfCIR'](ev['tOjQY'](ev['hEZDl'](ev['jhSyQ'],gj['Image']),ev['DODbR']),gj['Name']),ev['aahAP']),gm),ev['PzBPI']);continue;case'9':go+=ev['BEkeB'];continue;case'10':var gp=ev['KjjPZ'];continue;case'11':gp+=ev['hEZDl'](ev['hEZDl'](ev['Epkan'],gm),ev['xZpni']);continue;case'12':gp+=ev['UtVsq'];continue;case'13':if(ev['TuSaa'](gj['Count'],0x1)){gm=ev['hEZDl'](ev['GHVzt'](ev['Oindg'],AiS[0x0]),ev['UTFju']);}else if(ev['BATQr'](gj['Count'],0x2)){gm=ev['cnaaZ'](ev['bHdDx'](ev['wpOLZ'],AiS[0x1]),ev['UTFju']);}else if(ev['SPknq'](ev['nzXAl'](0xa,gj['Count']),0x3)){gm=ev['bHdDx'](ev['oADMO'](ev['oADMO'](ev['oADMO'](ev['VuMpB'],gj['Count']),ev['JMHwt']),AiS[0x2]),ev['UTFju']);}else{gm=ev['oADMO'](ev['oADMO'](ev['pfmWQ'](ev['Otznr'](ev['VuMpB'],gj['Count']),ev['JMHwt']),AiS[0x3]),ev['UTFju']);}continue;}break;}});dB['LQLXY']($,dB['AOLKo'])['fadeIn']();}}dB['aSJaq'](fL);}},r['wLhDN']);}}r['zKWzf']($,r['bWzPs'])['on'](r['yRZOW'],r['JFHCl'],function(){r['jQJzc']($,r['EwAId'])['removeAttr'](r['mwfAw']);r['jQJzc']($,this)['closest'](r['EwAId'])['removeClass'](r['PkcCq'])['find'](r['sDuln'])['removeClass'](r['FjLgz']);r['QVYBI']($,this)['parent']()['removeClass'](r['GXHMU']);});r['Kzbxd']($,r['bWzPs'])['on'](r['yRZOW'],r['sDuln'],function(){r['qhKps']($,this)['parent']()['addClass'](r['PkcCq']);r['mdgqj']($,this)['closest'](r['oOCEX'])['find'](r['sDuln'])['addClass'](r['FjLgz']);r['snIEh']($,this)['next'](r['ziYst'])['addClass'](r['GXHMU']);r['snIEh']($,r['EwAId'])['animate']({'height':r['snIEh']($,r['EetXQ'])['outerHeight']()});});});$('.indx')['removeClass']('indx');
  /*]]>*/</script>
</b:if>
<b:if cond='data:blog.pageType != &quot;error_page&quot; and data:blog.pageName != &quot;demo&quot;'>
  <b:if cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}'>
    <script type='text/javascript'>/*<![CDATA[*/
      eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i f="2c;1Y;1T;.1R;1L;2v;2l;1U 2E;O-B;2G;.O-1S:1c;2m-2t;.c-M S:1c;3l;1I;#;1Q-T;1W;1Z;.c-M S;2a;#2e,#2f,#2g;2h;.2j;U;G;.G;T;2o-F;1d-F;#G;2w;#U;#2D;.1d-F;.1e-1f;.2K;2U;2W-2Z;3d;[o;1A;1H;></E>;1K;<E j=\'v-o\';1V;//W.o.X/Y/2b/;2d;.v-o;[n;<E j=\'v-n\';1a://W.n.X/Y/;.v-n;x-y-B;.x-y;x-B;.x-2i;D;2k;;.t-q q;2n;<1g>;</1g>;<D j=\'l-q\'>;</D>;2q;.s-q;.1e-1f .1k;/1l/1r/1t?1u=H-I-J&K-L=0;3e;3f;<N j=\\"1x-1y\\">;1z;</N><1w j=\\"1B\\">;/1l/1r/1t/-/;?1u=H-I-J&K-L=1C;1D;1E;1F;1G;P;Q;$t;y;1J://;1a://;<R><a j=\'1M-P\' y=\';\' Q=\';\'>;</a></R>;</1w>;.1k;1N;1O".1P(";");A[f[6]](f[0],g(){i a=A[f[2]](f[1]),b=A[f[4]](f[3]);u(V!==a&&V!==b)b[f[5]](a)});$(g(){f[7];u(1X)$(f[10])[f[9]](f[8]),$(f[12])[f[9]](f[11]),$(f[19])[f[18]](g(){$(h)[f[9]](f[11])[f[14]]()[f[13]](f[11]);$(f[15]+$(h)[f[17]](f[16]))[f[9]](f[8])[f[14]]()[f[13]](f[8])});1b $(f[21])[f[20]]();u(0<$(f[23])[f[22]])$(f[26])[f[13]](f[25])[f[9]](f[24])[f[17]](f[16],f[24]),$(f[30])[f[13]](f[29])[f[9]](f[28])[f[17]](f[27],f[24]),$(f[32])[f[31]]($(f[23]));1b $(f[34])[f[31]]($(f[33]));i a=$(f[35]);0!==$(f[36])[f[22]]&&($(f[37])[f[20]](),$(f[39])[f[9]](f[38]));-1!=$(a)[f[k]]()[f[C]](f[2p])&&($(a)[f[k]]($(a)[f[k]]()[f[p]](/\\[o/1h,f[2r])[f[p]](/\\]\\[\\2s]/1i,f[1j])),$(f[2u])[f[z]](g(){$(h)[f[17]](f[r],f[2x]+$(h)[f[17]](f[r]))}));-1!=$(a)[f[k]]()[f[C]](f[2y])&&($(a)[f[k]]($(a)[f[k]]()[f[p]](/\\[n/1h,f[2z])[f[p]](/\\]\\[\\2A]/1i,f[1j])),$(f[2B])[f[z]](g(){$(h)[f[17]](f[r],f[2C]+$(h)[f[17]](f[r]))}));$(f[1m])[f[18]](g(){$(h)[f[9]](f[1n])[f[14]](f[1m])[f[13]](f[1n]);$(h)[f[14]](f[2F])[f[13]](f[1o]);$(h)[f[2H]](f[2I])[f[9]](f[1o])});$(f[2J])[f[z]](g(){1p(i a=f[2L],c=1;c<$(h)[f[2M]](f[2N])[f[22]]+1;c++)a+=f[2O]+c+f[2P];$(h)[f[2Q]](f[2R]+a+f[2S])});u(0<$(f[2T])[f[22]])$[f[1q]](f[2V],g(a){$[f[z]](a[f[m]][f[2X]],g(a,b){i c=f[2Y]+b[f[1s]]+f[3a];$[f[1q]](f[3b]+b[f[1s]]+f[3c],g(a){1p(i b=0;b<a[f[m]][f[w]][f[22]];b+=1){i d=a[f[m]][f[w]][b][f[1v]][f[3g]](g(a){3h a[f[3i]]})[f[C]](f[3j]);d=a[f[m]][f[w]][b][f[1v]][d][f[3k]];i e=a[f[m]][f[w]][b][f[3m]][f[3n]];d=3o?d[f[p]](f[3p],f[3q]):d;c+=f[3r]+e+f[3s]+d+f[3t]+e+f[3u]}$(f[3v])[f[31]](f[3w]+c)},f[Z])})},f[Z])});',62,219,'|||||||||||||||_0xdd46|function|this|var|class|42||72|youtube|dailymotion|44|code|46|||if|short|78|acor|title|48|document|active|41|div|iframe|Comments|blo|json|in|script|max|results|icons|h2|tab|link|href|li|span|id|plus|null|www|com|embed|94|||||||||||https|else|first|Blogger|post|body|em|ig|gi|43|ArchivePage|feeds|55|54|56|for|95|posts|74|summary|alt|82|ul|Ar|Category|term|indexOf|clear|1000|entry|alternate|rel|map|html|siblings|http|replace|querySelector|arch|jsonp|get|split|data|contact|cont|getElementById|use|src|attr|allowComment|ContactForm2|click|||||||||||remove|video|DOMContentLoaded|each|HTML106|HTML107|HTML108|length|content|cmt_iframe_holder|next|addEventListener|ico|find|Gplus|40|prepend|45|Wdailymotion|act|49|appendChild|append|47|50|51|Wyoutube|53|52|comments|strict|57|addClass|59|58|68|FullPost|60|62|61|63|64|67|65|66|69|aside|70|wide|71|73|container|||||||||||75|76|77|main|category|feed|81|return|80|79|83|removeClass|85|84|httpsEnabled|86|87|88|89|90|91|93|92'.split('|'),0,{}))
    /*]]>*/</script>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
      <script type='text/javascript'>/*<![CDATA[*/
        eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('j h=\'1B 1H;<o v="1C">\\n</o>;1D;U;.m-q;R;.m-q K > [J];#1E;1G;#I-H;#2w;#I-2K;.m-q [J] *:2O(\\\'.s-2S *,1e *,.1f-1g *,.1k *,.1q *,.1r *\\\');1s;1t;1u;#1v;1w;1x;;1y;1z;<o v="m-z"/>;<o v="l-u b-C" Q="u-;"></o>;<x v="z-C">;</x>;.m-z;<o v="l-u" Q="u-;<x>;1I;#u-;1J;1M;.m-z x;b-C;1P;1R;1S;w;H;1U;.K-A;2z;U,q;2D;q;2G;2I;L-w;2M;L-F; - ;W://2P?w=;2Q;2R;.W;#X-B-M-F;#X-B-N-F;.M-w;.N-w;1h.1i-A;1j;</x><p>;</p>;A;1l;1m-1n-1o;#1p-B\'.R(";");$(t(){h[0];j b=-1!==$(h[4])[h[3]]()[h[2]](h[1])?$(h[6])[h[3]]()[h[5]](h[1]):1;$(h[9])[h[8]]($(h[7]));$(h[11])[h[8]]($(h[10]));j a=$(h[12]);j c=1A[h[14]](a[h[13]]/2);y(1==b[h[13]])$(h[16])[h[15]]();G a[h[18]](c)[h[17]]($(h[16]));y(1<b[h[13]])1F(b[h[20]](0,0,h[19]),$(h[6])[h[21]](),$(h[6])[h[17]](h[22]),a=0;a<b[h[13]];a+=1)1===a?($(h[6])[h[8]](h[23]+a+h[24]),$(h[27])[h[8]](h[25]+a+h[26])):1<a&&($(h[6])[h[8]](h[28]+a+h[24]),$(h[27])[h[8]](h[29]+a+h[26])),c=$[h[1K]](b[a]),$(c)[h[1L]]($(h[O]+a));$(h[1N])[h[1O]](h[P],h[1Q],t(){$(h[O]+$(D)[h[r]]())[h[S]](h[T])[h[1V]]()[h[1W]](h[T]);$(h[1X])[h[1Y]]({1Z:$(h[2a])[h[2b]]()[h[2c]]})});$(h[2d])[h[P]](t(){y(/2e|2f|2g|2h|2i|2j|2k|2l|2m|2n 2o|2p|2q|2r 2s/i[h[2t]](2u[h[2v]])){j a=$(D)[h[k]](h[2x]),b=$(D)[h[k]](h[2y]);a=V(a)+h[2A]+V(b);2B[h[2C]][h[E]]=h[2E]+a}});y(2F){j d=$(h[2H]),e=$(h[2J]),f=$(h[2L])[h[r]](),g=$(h[2N])[h[r]]();$[h[Y]](d[h[k]](h[E]),t(a){a=$(a)[h[Z]](h[1a])[h[r]]();d[h[3]](h[29]+f+h[1b]+a+h[1c]);d[h[k]](h[1d],a)});$[h[Y]](e[h[k]](h[E]),t(a){a=$(a)[h[Z]](h[1a])[h[r]]();e[h[3]](h[29]+g+h[1b]+a+h[1c]);e[h[k]](h[1d],a)})}G $(h[2T])[h[S]](h[1T])});',62,180,'|||||||||||||||||_0xdc7c||var|50||post||div||body|39||function|block|class|text|span|if|pagin|title|pager|active|this|54|link|else|top|postAD|dir|article|data|newer|older|31|33|id|split|38|35|html|encodeURIComponent|whatsapp|Blog1_blog|66|62|||||||||||61|63|64|65|blockquote|sh|msg|h1|entry|find|slider|get|nav|links|only|blog|accordion|contact|length|floor|remove|HTML202|after|eq|splice|empty|Math|use|break|indexOf|HTML201|for|append|strict|parseHTML|appendTo|30|32|click|46|45|removeClass|34|siblings|addClass|67|offset|37|36|44|43|scrollTop|||||||||||42|41|40|56|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows|Phone|Kindle|Silk|Opera|Mini|48|navigator|47|HTML203|49|51|animate|52|window|55|on|53|nav_titles|userAgent|57|test|58|bottom|59|attr|60|not|send|href|location|code|68'.split('|'),0,{}))
      /*]]>*/</script>
    </b:if>
  </b:if>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js' type='text/javascript'/>
  <b:if cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}'>
    <script type='text/javascript'>/*<![CDATA[*/
      $(function(){'use strict';$('a').each(function(){if($(this).attr('href')!==undefined&&$(this).attr('href').indexOf('?demo-page')!==-1){$(this).attr('href',"/"+'p/demo.html?redirected='+$(this).attr('href').replace(/\?demo\-page/,''))}});$(".post-body .slider br").remove();$(".post-body .slider-carousel").each(function(){var icaro_i=$(this).attr("data-items");var iAutoPlay=$(this).attr("data-autoplay")=="true"?true:false;$(".post-body .slider-carousel").owlCarousel({rtl:b_dir==='rtl'?true:false,autoplay:iAutoPlay,items:icaro_i,dots:true,loop:true,margin:10,autoplayHoverPause:true,nav:true,navText:["",""],navSpeed:500,dotsSpeed:500,responsive:{0:{items:1},480:{items:2},768:{items:3},900:{items:icaro_i}}});$(this).fadeIn()});$(".post-body .slider-cover").each(function(){var iAutoPlay=$(this).attr("data-autoplay")=="true"?true:false;$(".post-body .slider-cover").owlCarousel({rtl:b_dir==='rtl'?true:false,autoplay:iAutoPlay,nav:true,loop:true,dots:true,autoHeight:true,items:1,autoplayHoverPause:true,navText:["",""]});$(this).fadeIn()})});
    /*]]>*/</script>
  </b:if>
  <b:if cond='data:blog.mobileClass != &quot; mobile&quot;'>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jQuery.Marquee/1.3.1/jquery.marquee.min.js' type='text/javascript'/>
    <script type='text/javascript'>/*<![CDATA[*/
    !function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=r.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var o=i(this);return isNaN(o.datetime)||(0===e.cutoff||Math.abs(n(o.datetime))<e.cutoff?t(this).text(a(o.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function i(e){if(!(e=t(e)).data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var i=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(i.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",i)}return e.data("timeago")}function a(t){return r.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return a(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:5e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"تقريبا",suffixFromNow:"من الآن",inPast:'any moment now',seconds:"منذ أقل من دقيقة",minute:"منذ دقيقة",minutes:"منذ %d دقيقة",hour:"منذ ساعة",hours:"منذ %d ساعة",day:"منذ يوم",days:"منذ %d يوم",month:"منذ  شهر",months:"منذ %d أشهر",year:"منذ سنة",years:"منذ %d سنة",wordSeparator:" ",numbers:[]}},inWords:function(e){function i(i,n){var r=t.isFunction(i)?i(n,e):i,o=a.numbers&&a.numbers[n]||n;return r.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,n=a.prefixAgo,r=a.suffixAgo;if(this.settings.allowFuture&&e<0&&(n=a.prefixFromNow,r=a.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,l=m/365,d=o<45&&i(a.seconds,Math.round(o))||o<90&&i(a.minute,1)||s<45&&i(a.minutes,Math.round(s))||s<90&&i(a.hour,1)||u<24&&i(a.hours,Math.round(u))||u<42&&i(a.day,1)||m<30&&i(a.days,Math.round(m))||m<45&&i(a.month,1)||m<365&&i(a.months,Math.round(m/30))||l<1.5&&i(a.year,1)||i(a.years,Math.round(l)),h=a.wordSeparator||"";return void 0===a.wordSeparator&&(h=" "),t.trim([n,d,r].join(h))},parse:function(e){var i=t.trim(e);return i=i.replace(/\.\d+/,""),i=i.replace(/-/,"/").replace(/-/,"/"),i=i.replace(/T/," ").replace(/Z/," UTC"),i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),i=i.replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(e){var i=r.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return r.parse(i)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){o.dispose.call(this);var i=t.proxy(e,this);i();var a=r.settings;a.refreshMillis>0&&(this._timeagoInterval=setInterval(i,a.refreshMillis))},update:function(i){var a=i instanceof Date?i:r.parse(i);t(this).data("timeago",{datetime:a}),r.settings.localeTitle&&t(this).attr("title",a.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(r.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var i=t?o[t]:o.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
    /*]]>*/</script>
    <script type='text/javascript'>/*<![CDATA[*/
      var c=function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);e=null;return g;}}:function(){};c=![];return f;};}();var fT=c(this,function(){var c=function(){return'\x64\x65\x76';},d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var e=function(){var f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!f['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var g=function(){var h=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return h['\x74\x65\x73\x74'](d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var i=function(j){var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);}};var l=function(m){var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);}};if(!e()){if(!g()){i('\x69\x6e\x64\u0435\x78\x4f\x66');}else{i('\x69\x6e\x64\x65\x78\x4f\x66');}}else{i('\x69\x6e\x64\u0435\x78\x4f\x66');}});fT();jQuery('abbr.timeago')['timeago']();if(isSidebar){var globals={'sidebar':$('aside')['offset']()['top'],'main':$('main')['offset']()['top']};}$(function(){var d={'DaQZl':function(e,f){return e>f;},'izAuA':function(g,h){return g(h);},'aoxGq':function(i,j){return i(j);},'aOpxs':'aside','Tfoyx':function(k,l){return k(l);},'ZLOsD':'main','NPXOw':function(m,n){return m+n;},'YabZc':function(o,p){return o(p);},'JRNwH':function(q,r){return q(r);},'PXMAr':function(s,t){return s-t;},'CAYij':function(u,v){return u-v;},'oVCKT':function(w,x){return w>=x;},'idSEW':function(y,z){return y<z;},'ImCiQ':function(A,B){return A>B;},'mGDjh':function(C,D){return C(D);},'PNFHh':'margin-top','aKJEH':function(E,F){return E>F;},'gLIKT':function(G,H){return G<H;},'MfNqx':'main\x20,\x20aside','VaCSb':function(I,J){return I(J);},'ZLMeL':'.popular-posts','FoAiL':'tinyPop','jjpJw':function(K,L){return K(L);},'FUzSi':'data-src','zinaV':'http://','RzSde':'https://','kfVfl':function(M,N){return M(N);},'yFqeF':'src','EXMaR':'0|3|4|1|2','VTlTD':function(O,P){return O!==P;},'CAhnZ':'youtube.com/vi/','sDAHn':function(Q,R){return Q!==R;},'jgkhD':'ytimg.com','WuqBN':function(S,T){return S(T);},'AsTVY':'/default.','PbNBv':'/hqdefault.','yGThP':function(U,V){return U===V;},'vlmWF':'googleusercontent','eTPxS':function(W,X,Y,Z){return W(X,Y,Z);},'GlhNK':function(a0,a1){return a0(a1);},'BdWFu':function(a2,a3){return a2(a3);},'uAByU':function(a4,a5){return a4(a5);},'ciBgy':function(a6,a7){return a6+a7;},'sKnTz':'<span\x20style=\x27background:url(','MqEKs':')\x20no-repeat\x27/>','xAhRN':function(a8,a9){return a8(a9);},'LhLjW':'#int-two','ZUQSW':':hidden','EYlzj':function(aa,ab){return aa+ab;},'dmRVW':function(ac,ad){return ac+ad;},'Qthvy':function(ae,af){return ae(af);},'fWUfv':function(ag,ah){return ag(ah);},'xMiny':'fa-angle-double-up','EOqyW':'fa-angle-double-down','pFBoT':function(ai,aj){return ai(aj);},'ofXQB':'<span\x20class=\x27flat-count\x27/>','ShHPC':'.f-cols\x20.widget','tsKRR':'.wrapper','JJUZp':'no-ovfl','DKUtG':function(ak,al){return ak(al);},'jNZog':'cont-open','DDrCV':function(am,an){return am(an);},'mvIIW':'#ContactForm1','bObYh':function(ao,ap){return ao(ap);},'fSDGN':function(aq,ar){return aq(ar);},'IPnPi':function(as,at){return as(at);},'Hhpch':'href','LCQod':function(au,av){return au+av;},'hUFfv':function(aw,ax){return aw(ax);},'avbOp':'?max-results=','mYCJr':function(ay,az){return ay(az);},'ncXJa':'no-nums','ABCzu':'html,body','kGSsQ':function(aA,aB){return aA(aB);},'ojLrL':'fa-heart-o','fjxUs':'fa-heart','GIRLC':function(aC,aD){return aC*aD;},'ZMsMN':function(aE,aF){return aE===aF;},'wMszD':'recent','gyhjI':'/feeds/posts/summary?alt=json-in-script&max-results=10','ZsrZN':'random','LHSAn':function(aG,aH){return aG+aH;},'YHtrQ':'/feeds/posts/summary?alt=json-in-script&start-index=','UCcif':'&max-results=20','SyBWS':function(aI,aJ){return aI+aJ;},'dzQUW':'/feeds/posts/summary/-/','fwrWO':'?alt=json-in-script&max-results=10','fWGkT':'GET','ftqzW':'jsonp','zdlRA':function(aK,aL){return aK==aL;},'lDsKn':'alternate','IMqKO':function(aM,aN){return aM+aN;},'isGEE':'_archive.html','CdrQF':function(aO,aP){return aO!==aP;},'punVt':function(aQ,aR){return aQ+aR;},'OFIVQ':function(aS,aT){return aS+aT;},'rcwKp':function(aU,aV){return aU+aV;},'ThBLG':'<a\x20href=\x27','bTuPH':'\x27\x20class=\x27Intro-Author\x27\x20rel=\x27noopener\x27\x20target=\x27_blank\x27>','eaAqm':'</a>','gbOmA':'<span\x20class=\x27Intro-Author\x27>','VxgDe':'</span>','gbKEP':function(aW,aX){return aW!==aX;},'zwJSx':function(aY,aZ){return aY==aZ;},'NdBhv':function(b0,b1,b2){return b0(b1,b2);},'Njyti':function(b3,b4,b5,b6){return b3(b4,b5,b6);},'sEjEA':function(b7,b8){return b7>b8;},'vmnUf':'scroll','CVDrx':'<a\x20class=\x27Scroll-Title\x27\x20href=\x27','DGSdv':'intro','vAGQK':function(b9,ba){return b9+ba;},'wUazi':function(bb,bc){return bb+bc;},'DkBLV':function(bd,be){return bd+be;},'IlYhg':'<div\x20class=\x27Intro-Label\x27><span\x20class=\x27Intro-Cate\x27>','IsCTB':'</span><img\x20src=\x27','xQxYR':'\x27\x20class=\x27Intro-Thumb\x27\x20alt=\x27','KEqHH':'\x27/><a\x20href=\x27','NjrEy':'\x27\x20class=\x27Intro-Title\x27>','PzIJU':'</a><div\x20class=\x27Intro-Details\x27><a\x20class=\x27Intro-Date\x27\x20href=\x27','KFlZT':'</div><a\x20href=\x27','TGZHC':'\x27\x20class=\x27ReadMore\x27>','iGLSc':'</a></div>','ShyyQ':'height','nzbqJ':'.Intro-Thumb:not([src*=\x22img.youtube\x22])','aLVjJ':'.Intro-Thumb[src*=\x22img.youtube\x22]','LwpBV':'.r-loading','aSEMf':function(bf,bg){return bf(bg);},'QvMeG':'.Intro-Thumb','bfftf':function(bh,bi){return bh(bi);},'iIxoP':function(bj,bk){return bj(bk);},'QQLtF':'.post-outer','lQHIc':'/feeds/posts/summary?alt=json-in-script','OIjFW':'2|4|7|6|1|5|0|3','TSSeW':function(bl,bm){return bl+bm;},'aNHaM':'<span\x20class=\x22Condition\x22>','bczpA':'<span\x20class=\x22Today-Temp\x22>','fbIDa':'&deg;C','mlOdd':'#weather','axmIa':'hide','xjScp':'long','LsJWo':'\x20-\x20','gVrIy':'<i\x20class=\x22icon\x20icon-','dcPbh':'\x22></i>','lhSSs':function(bn,bo){return bn+bo;},'EafNK':'<abbr\x20class=\x22Today\x22>','gPJyw':'</abbr>','lshHM':function(bp,bq){return bp+bq;},'Bnylk':'https://query.yahooapis.com/v1/public/yql?q=select\x20*\x20from\x20weather.forecast\x20where\x20woeid\x20in\x20(\x20select\x20woeid\x20from\x20geo.places\x20\x20where\x20text=\x27','UGgxG':'\x27)\x20and\x20u=\x27c\x27&format=json&diagnostics=false','YrmhR':'json','lbUSr':function(br,bs){return br(bs);},'UVdBr':'#HTML103\x20.widget-content','kYNcQ':'yes','AdHww':'https://ipinfo.io','jrKZS':function(bt,bu){return bt(bu);},'jVHst':'.intro','pShra':function(bv,bw){return bv>bw;},'dpmhi':function(bx,by){return bx(by);},'vtgRn':'.intro-ch','MLowl':'rtl','EfPHu':'&#61700;','NSqpj':'&#61701;','OMhmb':function(bz,bA){return bz>bA;},'DKIgh':'.ticker-ch','SjOPO':function(bB,bC){return bB(bC);},'ZUWSo':'.marquee','ImYnK':'right','BeAhu':'left','WgsAB':'3|1|2|4|0','PiTOP':'<div\x20class=\x22flickr-photos\x22>','cSYbk':function(bD,bE){return bD+bE;},'pRraP':function(bF,bG){return bF+bG;},'gWWxm':'https://farm','DmiSl':'.staticflickr.com/','Ffpuu':'_q.jpg','fOSKQ':'https://www.flickr.com/photos/','NyhQH':function(bH,bI){return bH+bI;},'cIqTk':'<a\x20href=\x22','NGqfL':'\x22\x20title=\x22','ebxaQ':'\x22\x20rel=\x22noopener\x22\x20target=\x22_blank\x22><img\x20src=\x22','xFscN':'\x22/></a>','uzZJx':'</div>','wOPFt':'h2.title','RKBDS':'.widget-content','BOwlK':function(bJ,bK){return bJ!=bK;},'HtmXT':'[flickr]','gGXkr':function(bL,bM){return bL+bM;},'zNACj':'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=96e8c9145d76895a4ed3b770befb1945&user_id=','XCckh':'&per_page=','JwIzA':'&format=json&nojsoncallback=1','IRaWf':'aside\x20.HTML,\x20footer\x20.HTML','XKIjb':function(bN,bO){return bN(bO);},'kRwdY':'.indx','kIVJn':'body','fWFwv':function(bP,bQ){return bP(bQ);},'PhLRG':function(bR,bS){return bR(bS);},'zMzJs':'.widget-item-control','GNgmP':function(bT,bU){return bT(bU);},'qbMCN':'aside\x20a,\x20footer\x20a,\x20#PageList1\x20li\x20a,\x20#LinkList100\x20li\x20a,\x20#LinkList101\x20li\x20a,.blog-pager\x20a,#HTML110\x20a,.ibtn,.LabLink,.Home','jpSer':'title','MEkds':'.item-thumbnail\x20img','aSsus':'#int-two,.slideshow-wrapper\x20,\x20.slideshow-wrapper\x20*','NbebG':'notr','eOGSQ':'.owl-item','SIsxr':function(bV,bW){return bV(bW);},'BPgmx':function(bX,bY){return bX(bY);},'mMBDq':'.I-toggle','sRXTE':'.flat\x20.archivedate','sNfJQ':function(bZ,c0){return bZ(c0);},'nzOFi':'.fa-microphone','OAUcO':function(c1,c2){return c1(c2);},'UXbBr':'.label-count,.Label\x20li\x20span','umrkj':'aside\x20.Label\x20a,\x20footer\x20.Label\x20a,\x20.post-labels\x20a[rel]','gcduk':function(c3,c4){return c3(c4);},'xMDmP':'.label-size\x20a:only-child','CzDld':'.fa-arrow-up','HQLKH':'click','KcuqW':'.ShareIndex','egHpF':'#HTML101\x20.widget-content,\x20#HTML102\x20.widget-content','AlhRN':function(c5,c6){return c5(c6);},'dhFeD':function(c7,c8){return c7(c8);},'nIBbw':'initialize.owl.carousel','xcOFX':function(c9,ca){return c9(ca);},'Naain':'data-slides','DaGzd':function(cb,cc){return cb(cc);},'ICOrZ':'ajaxStop','EilSW':function(cd,ce){return cd===ce;},'HNkvI':function(cf,cg){return cf(cg);},'AFlxJ':function(ch,ci){return ch(ci);},'oBbAP':'.f-cols','hjetx':'no-vp'};if(d['OMhmb'](d['XKIjb']($,d['kRwdY'])['length'],0x0)){d['XKIjb']($,d['kIVJn'])['remove']();}if(isSidebar){d['fWFwv']($,window)['scroll'](function(){if(d['DaQZl'](d['izAuA']($,window)['width'](),0x384)){var cj=globals['sidebar'],ck=globals['main'],cl=d['aoxGq']($,d['aOpxs'])['height'](),cm=d['Tfoyx']($,d['ZLOsD'])['height'](),cn=d['NPXOw'](cj,cl),co=d['NPXOw'](ck,cm),cp=d['YabZc']($,window)['scrollTop'](),cq=d['JRNwH']($,window)['height'](),cr=d['NPXOw'](cp,cq),cs=d['PXMAr'](cr,cn),ct=d['CAYij'](cr,co);if(d['DaQZl'](cl,cm)){if(d['oVCKT'](cr,co)&&d['idSEW'](cr,cn)&&d['ImCiQ'](cm,cq)){d['mGDjh']($,d['ZLOsD'])['css'](d['PNFHh'],ct);}else if(d['idSEW'](cr,co)){d['mGDjh']($,d['ZLOsD'])['css'](d['PNFHh'],'0');}}else if(d['aKJEH'](cm,cl)){if(d['oVCKT'](cr,cn)&&d['idSEW'](cr,co)&&d['aKJEH'](cl,cq)){d['mGDjh']($,d['aOpxs'])['css'](d['PNFHh'],cs);}else if(d['gLIKT'](cr,cn)){d['mGDjh']($,d['aOpxs'])['css'](d['PNFHh'],'0');}}}else{d['mGDjh']($,d['MfNqx'])['css'](d['PNFHh'],'0');}});}d['PhLRG']($,d['zMzJs'])['remove']();d['GNgmP']($,d['qbMCN'])['removeAttr'](d['jpSer']);d['GNgmP']($,d['MEkds'])['each'](function(){if(tiny_pop){d['VaCSb']($,d['ZLMeL'])['addClass'](d['FoAiL']);var cu=httpsEnabled?d['jjpJw']($,this)['attr'](d['FUzSi'])['replace'](d['zinaV'],d['RzSde']):d['jjpJw']($,this)['attr'](d['FUzSi']);d['kfVfl']($,this)['attr'](d['yFqeF'],cu);}else{var cv=d['EXMaR']['split']('|'),cw=0x0;while(!![]){switch(cv[cw++]){case'0':if(d['VTlTD'](d['kfVfl']($,this)['attr'](d['FUzSi'])['indexOf'](d['CAhnZ']),-0x1)||d['sDAHn'](d['kfVfl']($,this)['attr'](d['FUzSi'])['indexOf'](d['jgkhD']),-0x1)){var cu=d['WuqBN']($,this)['attr'](d['FUzSi'])['replace'](d['AsTVY'],d['PbNBv']);}else if(d['yGThP'](d['WuqBN']($,this)['attr'](d['FUzSi'])['indexOf'](d['vlmWF']),-0x1)){var cu=d['eTPxS'](ResizeImg,d['WuqBN']($,this)['attr'](d['FUzSi']),t_popular[0x0],t_popular[0x1]);}else{var cu=d['GlhNK']($,this)['attr'](d['FUzSi']);}continue;case'1':d['BdWFu']($,this)['next']()['fadeTo']('1',0x64);continue;case'2':d['uAByU']($,this)['remove']();continue;case'3':cu=httpsEnabled?cu['replace'](d['zinaV'],d['RzSde']):cu;continue;case'4':d['uAByU']($,this)['after'](d['ciBgy'](d['ciBgy'](d['sKnTz'],cu),d['MqEKs']));continue;}break;}}});d['GNgmP']($,d['aSsus'])['addClass'](d['NbebG']);d['GNgmP']($,d['eOGSQ'])['parent']()['addClass'](d['NbebG']);var cA=d['SIsxr']($,d['LhLjW'])['height']();d['BPgmx']($,d['mMBDq'])['click'](function(){d['Qthvy']($,d['LhLjW'])['slideToggle'](0x190,function(){if(d['xAhRN']($,d['LhLjW'])['is'](d['ZUQSW'])){globals['sidebar']=d['CAYij'](globals['sidebar'],cA);globals['main']=d['CAYij'](globals['main'],cA);}else{globals['sidebar']=d['EYlzj'](globals['sidebar'],cA);globals['main']=d['dmRVW'](globals['main'],cA);}});d['fWUfv']($,this)['find']('i')['toggleClass'](d['xMiny'])['toggleClass'](d['EOqyW']);});d['BPgmx']($,d['sRXTE'])['each'](function(){var cB=d['pFBoT']($,this)['contents']()['last']();cB['wrap'](d['ofXQB']);});d['BPgmx']($,d['mvIIW'])['addClass'](d['NbebG']);d['sNfJQ']($,d['nzOFi'])['click'](function(){if(d['yGThP'](d['pFBoT']($,d['ShHPC'])['length'],0x0)){d['pFBoT']($,d['tsKRR'])['toggleClass'](d['JJUZp']);}d['DKUtG']($,this)['toggleClass'](d['jNZog']);d['DDrCV']($,d['mvIIW'])['fadeToggle']();});d['OAUcO']($,d['UXbBr'])['each'](function(){d['bObYh']($,this)['text'](d['fSDGN']($,this)['text']()['replace']('(','')['replace'](')',''));});d['OAUcO']($,d['umrkj'])['each'](function(){d['IPnPi']($,this)['attr'](d['Hhpch'],d['LCQod'](d['LCQod'](d['hUFfv']($,this)['attr'](d['Hhpch']),d['avbOp']),m_res));});d['gcduk']($,d['xMDmP'])['each'](function(){d['mYCJr']($,this)['parent']()['addClass'](d['ncXJa']);});d['gcduk']($,d['CzDld'])['click'](function(){d['mYCJr']($,d['ABCzu'])['animate']({'scrollTop':0x0},0x7d0);});d['gcduk']($,document)['on'](d['HQLKH'],d['KcuqW'],function(cC){cC['preventDefault']();d['mYCJr']($,this)['next']()['fadeToggle']();d['kGSsQ']($,this)['toggleClass'](d['ojLrL'])['toggleClass'](d['fjxUs']);});d['gcduk']($,d['egHpF'])['each'](function(){var cD={'LYpDo':function(cE,cF){return d['gLIKT'](cE,cF);},'cBusi':function(cG,cH){return d['gLIKT'](cG,cH);},'sxQNG':function(cI,cJ){return d['zdlRA'](cI,cJ);},'lXrdT':d['lDsKn'],'Xxyhm':d['zinaV'],'HozYy':d['RzSde'],'DQXYk':function(cK,cL){return d['IMqKO'](cK,cL);},'UYwuc':d['isGEE'],'DKEpE':function(cM,cN){return d['CdrQF'](cM,cN);},'Kvynk':function(cO,cP){return d['punVt'](cO,cP);},'duSvL':function(cQ,cR){return d['OFIVQ'](cQ,cR);},'jCeDp':function(cS,cT){return d['rcwKp'](cS,cT);},'uJxuF':d['ThBLG'],'eINLQ':d['bTuPH'],'QydxJ':d['eaAqm'],'lwyhO':d['gbOmA'],'ZFOoi':d['VxgDe'],'pBNDh':function(cU,cV){return d['aKJEH'](cU,cV);},'nMGTO':function(cW,cX){return d['kGSsQ'](cW,cX);},'QmZck':function(cY,cZ){return d['gbKEP'](cY,cZ);},'evFpE':d['CAhnZ'],'OOYKu':function(d0,d1){return d['gbKEP'](d0,d1);},'OpVWL':d['jgkhD'],'UWLRU':d['AsTVY'],'TWJad':d['PbNBv'],'PchfT':function(d2,d3){return d['zwJSx'](d2,d3);},'VBaFs':function(d4,d5,d6){return d['NdBhv'](d4,d5,d6);},'HqKPY':function(d7,d8,d9,da){return d['Njyti'](d7,d8,d9,da);},'gURgJ':function(db,dc){return d['sEjEA'](db,dc);},'rTZZx':function(dd,de){return d['kGSsQ'](dd,de);},'DhMsG':function(df,dg){return d['GIRLC'](df,dg);},'tGtUJ':d['vmnUf'],'FCVFv':function(dh,di){return d['rcwKp'](dh,di);},'cdpSV':function(dj,dk){return d['rcwKp'](dj,dk);},'Wdlkq':d['CVDrx'],'DirGO':d['DGSdv'],'UxMmr':function(dl,dm){return d['rcwKp'](dl,dm);},'wPWju':function(dn,dp){return d['vAGQK'](dn,dp);},'MzEBm':function(dq,dr){return d['vAGQK'](dq,dr);},'SahEX':function(ds,dt){return d['wUazi'](ds,dt);},'Utuyz':function(du,dv){return d['wUazi'](du,dv);},'lIzkA':function(dw,dx){return d['DkBLV'](dw,dx);},'ygedz':function(dy,dz){return d['DkBLV'](dy,dz);},'zeOcN':function(dA,dB){return d['DkBLV'](dA,dB);},'AVMMz':function(dC,dD){return d['DkBLV'](dC,dD);},'VEZYn':d['IlYhg'],'rvUwx':d['IsCTB'],'eRekb':d['xQxYR'],'moTtZ':d['KEqHH'],'CaFMX':d['NjrEy'],'WsjoQ':d['PzIJU'],'VTXuO':d['KFlZT'],'aKUwU':d['TGZHC'],'ToUjO':d['iGLSc'],'MYYTY':d['ShyyQ'],'IcAid':d['nzbqJ'],'yfhAC':d['aLVjJ'],'aNbLX':d['LwpBV'],'SvkOZ':function(dE,dF){return d['aSEMf'](dE,dF);},'lqnrR':d['QvMeG']};var dG=d['bfftf']($,this);var dH=dG['text']();if(d['sEjEA'](dH['length'],0x1)&&!dH['match']('no')&&d['gbKEP'](d['iIxoP']($,d['QQLtF'])['length'],0x0)){$['ajax']({'url':d['lQHIc'],'method':d['fWGkT'],'dataType':d['ftqzW'],'success':function(dI){var dJ=Math['floor'](d['GIRLC'](Math['random'](),dI['feed']['entry']['length']));dJ=d['ZMsMN'](dJ,0x0)?0x1:dJ;if(dH['match'](d['wMszD'])){var dK=d['gyhjI'];}else if(dH['match'](d['ZsrZN'])){var dK=d['LCQod'](d['LHSAn'](d['YHtrQ'],dJ),d['UCcif']);}else{var dK=d['LHSAn'](d['SyBWS'](d['dzQUW'],dH),d['fwrWO']);}$['ajax']({'url':dK,'type':d['fWGkT'],'dataType':d['ftqzW'],'success':function(dN){dG['html']('');var dO='';for(var dP=0x0;cD['LYpDo'](dP,dN['feed']['entry']['length']);dP++){for(var dQ=0x0;cD['cBusi'](dQ,dN['feed']['entry'][dP]['link']['length']);dQ++){var dR=dN['feed']['entry'][dP]['link'][dQ];if(cD['sxQNG'](dR['rel'],cD['lXrdT'])){var dS=dR['href'];dS=httpsEnabled?dS['replace'](cD['Xxyhm'],cD['HozYy']):dS;break;}}var dT=dN['feed']['entry'][dP]['title']['$t'];var dU=dN['feed']['entry'][dP]['published']['$t']['substring'](0x0,0xa);var dV=cD['DQXYk'](cD['DQXYk']('/',dN['feed']['entry'][dP]['published']['$t']['substr'](0x0,0xa)['replace'](/\-/g,'_')),cD['UYwuc']);if(Au_Name){if(Au_Link){if(cD['DKEpE'](dN['feed']['entry'][dP]['author'][0x0]['uri'],undefined)){var dW=cD['Kvynk'](cD['duSvL'](cD['duSvL'](cD['jCeDp'](cD['uJxuF'],dN['feed']['entry'][dP]['author'][0x0]['uri']['$t']),cD['eINLQ']),dN['feed']['entry'][dP]['author'][0x0]['name']['$t']),cD['QydxJ']);}else{var dW=cD['jCeDp'](cD['jCeDp'](cD['lwyhO'],dN['feed']['entry'][dP]['author'][0x0]['name']['$t']),cD['ZFOoi']);}}else{var dW=cD['jCeDp'](cD['jCeDp'](cD['lwyhO'],dN['feed']['entry'][dP]['author'][0x0]['name']['$t']),cD['ZFOoi']);}}else{var dW='';}var e0=cD['pBNDh'](cD['nMGTO']($,dN['feed']['entry'][dP]['media$thumbnail'])['length'],0x0)?dN['feed']['entry'][dP]['media$thumbnail']['url']:alt_Img;e0=httpsEnabled?e0['replace'](/http:\/\//,cD['HozYy']):e0;if(cD['QmZck'](e0['indexOf'](cD['evFpE']),-0x1)||cD['OOYKu'](e0['indexOf'](cD['OpVWL']),-0x1)){e0=e0['replace'](cD['UWLRU'],cD['TWJad']);}else{if(cD['PchfT'](int_items,0x1)){e0=cD['VBaFs'](ResizeImg,e0,t_intro_1[0x0]);}if(cD['PchfT'](int_items,0x3)){e0=cD['HqKPY'](ResizeImg,e0,t_intro_3[0x0],t_intro_3[0x1]);}if(cD['PchfT'](int_items,0x4)){e0=cD['HqKPY'](ResizeImg,e0,t_intro_4[0x0],t_intro_4[0x1]);}}if(cD['gURgJ'](cD['rTZZx']($,dN['feed']['entry'][dP]['category'])['length'],0x0)){var e1=Math['floor'](cD['DhMsG'](Math['random'](),dN['feed']['entry'][dP]['category']['length']));var e2=dN['feed']['entry'][dP]['category'][e1]['term'];}else{var e2=AiS[0x5];}if(dG['hasClass'](cD['tGtUJ'])){dO+=cD['FCVFv'](cD['FCVFv'](cD['FCVFv'](cD['cdpSV'](cD['Wdlkq'],dS),'\x27>'),dT),cD['QydxJ']);}else if(dG['hasClass'](cD['DirGO'])){dO+=cD['UxMmr'](cD['UxMmr'](cD['UxMmr'](cD['wPWju'](cD['wPWju'](cD['wPWju'](cD['MzEBm'](cD['SahEX'](cD['SahEX'](cD['Utuyz'](cD['lIzkA'](cD['lIzkA'](cD['ygedz'](cD['zeOcN'](cD['zeOcN'](cD['zeOcN'](cD['zeOcN'](cD['AVMMz'](cD['AVMMz'](cD['AVMMz'](cD['VEZYn'],e2),cD['rvUwx']),e0),cD['eRekb']),dT),cD['moTtZ']),dS),cD['CaFMX']),dT),cD['WsjoQ']),dV),'\x27>'),dU),cD['QydxJ']),dW),cD['VTXuO']),dS),cD['aKUwU']),AiS[0x6]),cD['ToUjO']);}}dG['html'](dO);},'complete':function(){var e4={'nGNix':function(e5,e6){return cD['rTZZx'](e5,e6);},'pzzPY':cD['MYYTY'],'PJXlM':cD['IcAid'],'ZNbwk':cD['yfhAC'],'TAMug':function(e7,e8,e9){return cD['VBaFs'](e7,e8,e9);}};cD['rTZZx']($,cD['aNbLX'])['fadeOut'](0x190,function(){e4['nGNix']($,this)['remove']();});cD['SvkOZ']($,cD['lqnrR'])['each'](function(){e4['TAMug'](setInterval,function(){var ea={'RMUOK':function(eb,ec){return e4['nGNix'](eb,ec);},'nGrcK':e4['pzzPY']};var ed=e4['nGNix']($,e4['PJXlM'])['height']();e4['nGNix']($,e4['ZNbwk'])['each'](function(){ea['RMUOK']($,this)['css'](ea['nGrcK'],ed);});},0x64);});}});}});}});if(isSidebar){d['AlhRN']($,window)['one'](d['vmnUf'],ee);function ee(){var ef={'JKLEW':d['OIjFW'],'DulAX':function(eg,eh){return d['DkBLV'](eg,eh);},'brtNI':function(ei,ej){return d['TSSeW'](ei,ej);},'rlHqa':d['aNHaM'],'RWNoZ':d['VxgDe'],'wOQLM':d['bczpA'],'JAmgT':d['fbIDa'],'FyXHT':function(ek,el){return d['sEjEA'](ek,el);},'YdZQn':function(em,en){return d['iIxoP'](em,en);},'vVewp':d['mlOdd'],'kEYzt':d['axmIa'],'IiAJt':d['xjScp'],'CcIYa':d['LsJWo'],'vqBvm':d['gVrIy'],'oqVMP':d['dcPbh'],'mtFnF':function(eo,ep){return d['lhSSs'](eo,ep);},'bgxTl':function(eq,er){return d['lhSSs'](eq,er);},'wJGJY':d['EafNK'],'UWXhm':d['gPJyw'],'dLjLw':function(es,et){return d['ZMsMN'](es,et);},'jjqbI':function(eu,ev){return d['lshHM'](eu,ev);},'zjKPN':d['Bnylk'],'HzRLT':d['UGgxG'],'yqalu':d['YrmhR']};if(d['lbUSr']($,d['UVdBr'])['text']()['match'](d['kYNcQ'])){$['getJSON'](d['AdHww'],function(ew){var ex={'BnGBa':ef['JKLEW'],'enhxI':function(ey,ez){return ef['DulAX'](ey,ez);},'NJLjK':function(eA,eB){return ef['brtNI'](eA,eB);},'TecnZ':ef['rlHqa'],'ROaxZ':ef['RWNoZ'],'FTyut':function(eC,eD){return ef['brtNI'](eC,eD);},'rjdtm':function(eE,eF){return ef['brtNI'](eE,eF);},'wWgjy':ef['wOQLM'],'Prtfy':ef['JAmgT'],'lwMiA':function(eG,eH){return ef['FyXHT'](eG,eH);},'PWegq':function(eI,eJ){return ef['YdZQn'](eI,eJ);},'RMmDm':ef['vVewp'],'pHqpy':ef['kEYzt'],'bSaQf':ef['IiAJt'],'oizNH':ef['CcIYa'],'byRtz':ef['vqBvm'],'UivjP':ef['oqVMP'],'TPVOc':function(eK,eL){return ef['mtFnF'](eK,eL);},'OxKDK':function(eM,eN){return ef['bgxTl'](eM,eN);},'dIvFS':ef['wJGJY'],'JyJza':ef['UWXhm']};if(ef['dLjLw'](ew['city'],'')){var eO=ew['country'];}else{var eO=ew['city'];}$['get'](ef['bgxTl'](ef['jjqbI'](ef['zjKPN'],eO),ef['HzRLT']),function(eQ){var eR=ex['BnGBa']['split']('|'),eS=0x0;while(!![]){switch(eR[eS++]){case'0':eX+=ex['enhxI'](ex['NJLjK'](ex['TecnZ'],eW),ex['ROaxZ']);continue;case'1':eX+=ex['FTyut'](ex['rjdtm'](ex['wWgjy'],eT['high']),ex['Prtfy']);continue;case'2':if(ex['lwMiA'](eQ['query']['results']['channel']['length'],0x1)){var eT=eQ['query']['results']['channel'][0x0]['item']['forecast'][0x0];}else{var eT=eQ['query']['results']['channel']['item']['forecast'][0x0];}continue;case'3':ex['PWegq']($,ex['RMmDm'])['removeClass'](ex['pHqpy'])['html'](eX);continue;case'4':var eV=new Date()['toLocaleDateString'](blogLocale,{'weekday':ex['bSaQf']}),eW=Conditions[eT['code']],eX='';continue;case'5':eX+=ex['rjdtm'](ex['rjdtm'](ex['oizNH'],eT['low']),ex['Prtfy']);continue;case'6':eX+=ex['rjdtm'](ex['rjdtm'](ex['byRtz'],eT['code']),ex['UivjP']);continue;case'7':eX=ex['TPVOc'](ex['OxKDK'](ex['dIvFS'],eV),ex['JyJza']);continue;}break;}},ef['yqalu']);});}}}var eY=d['AlhRN']($,d['jVHst']);if(d['dhFeD']($,d['vtgRn'])['text']()['match'](d['ZsrZN'])){eY['on'](d['nIBbw'],function(eZ){var f0=d['jrKZS']($,d['jVHst']);d['jrKZS'](f1,f0);});function f1(f2){var f3={'mvcFN':function(f4,f5){return d['CAYij'](f4,f5);},'IMMeO':function(f6,f7){return d['jrKZS'](f6,f7);}};f2['children']()['sort'](function(){return f3['mvcFN'](Math['round'](Math['random']()),0.5);})['each'](function(){f3['IMMeO']($,this)['appendTo'](f2);});}}d['xcOFX']($,d['jVHst'])['attr'](d['Naain'],int_items);d['DaGzd']($,document)['one'](d['ICOrZ'],function(){if(d['pShra'](d['dpmhi']($,d['vtgRn'])['text']()['length'],0x1)){eY['owlCarousel']({'items':int_items,'rtl':d['ZMsMN'](b_dir,d['MLowl'])?!![]:![],'margin':0x14,'nav':!![],'autoplay':!![],'autoplayHoverPause':!![],'loop':!![],'navText':[d['EfPHu'],d['NSqpj']],'responsive':{0:{'items':0x1},640:{'items':0x2},900:{'items':0x3},1024:{'items':int_items}}});}if(d['OMhmb'](d['dpmhi']($,d['DKIgh'])['text']()['length'],0x1)){d['SjOPO']($,d['ZUWSo'])['marquee']({'pauseOnHover':!![],'duration':0x3a98,'duplicated':!![],'direction':d['ZMsMN'](b_dir,d['MLowl'])?d['ImYnK']:d['BeAhu']})['delay'](0x3e8)['fadeTo'](0x190,0x1);}});d['DaGzd']($,window)['one'](d['vmnUf'],f8);function f8(){var f9={'KbCrx':d['WgsAB'],'ZGMHh':function(fa,fb){return d['SjOPO'](fa,fb);},'zUUEQ':d['PiTOP'],'vAhXO':function(fc,fd){return d['cSYbk'](fc,fd);},'ddPGb':function(fe,ff){return d['pRraP'](fe,ff);},'uhCOZ':function(fg,fh){return d['pRraP'](fg,fh);},'zeClA':d['gWWxm'],'YWeMp':d['DmiSl'],'lVIMz':d['Ffpuu'],'nCUYp':d['fOSKQ'],'lcLKB':function(fi,fj){return d['NyhQH'](fi,fj);},'zbdWM':function(fk,fl){return d['NyhQH'](fk,fl);},'DkSwE':d['cIqTk'],'fEUka':d['NGqfL'],'ACoDi':d['ebxaQ'],'yRICn':d['xFscN'],'PzbGP':d['uzZJx'],'WzYyg':d['wOPFt'],'MKoXx':d['RKBDS'],'FlNbj':function(fm,fn){return d['BOwlK'](fm,fn);},'QacZt':d['HtmXT'],'dqhBJ':function(fo,fp){return d['gGXkr'](fo,fp);},'gYqNX':d['zNACj'],'WUdhi':d['XCckh'],'vnXSj':d['JwIzA']};d['SjOPO']($,d['IRaWf'])['each'](function(){var fq=f9['ZGMHh']($,this)['find'](f9['WzYyg']);var fr=f9['ZGMHh']($,this)['find'](f9['MKoXx']);if(f9['FlNbj'](fq['text']()['indexOf'](f9['QacZt']),-0x1)){var fs=fq['text']()['indexOf'](f9['QacZt']);fq['text'](fq['text']()['substr'](0x0,fs));$['getJSON'](f9['zbdWM'](f9['zbdWM'](f9['zbdWM'](f9['dqhBJ'](f9['gYqNX'],fr['text']()),f9['WUdhi']),imags_n),f9['vnXSj']),function(ft){var fu=f9['KbCrx']['split']('|'),fv=0x0;while(!![]){switch(fu[fv++]){case'0':f9['ZGMHh']($,fr)['html'](fw);continue;case'1':var fw=f9['zUUEQ'];continue;case'2':$['each'](ft['photos']['photo'],function(fx,fy){var fz=fC['eUNKu'](fC['eUNKu'](fC['eUNKu'](fC['VJlxE'](fC['VJlxE'](fC['JtVpt'](fC['suWWd'](fC['suWWd'](fC['xyFGq'],fy['farm']),fC['QmgTZ']),fy['server']),'/'),fy['id']),'_'),fy['secret']),fC['WbXdL']);var fA=fy['title'];var fB=fC['suWWd'](fC['suWWd'](fC['suWWd'](fC['rEIMf'](fC['wCxCI'],fr['text']()),'/'),fy['id']),'/');fw+=fC['rEIMf'](fC['rEIMf'](fC['rEIMf'](fC['NWiyh'](fC['xlLAy'](fC['IvjWV'](fC['DpkVl'],fB),fC['xjnCy']),fA),fC['EJppK']),fz),fC['DpAfz']);});continue;case'3':var fC={'eUNKu':function(fD,fE){return f9['vAhXO'](fD,fE);},'VJlxE':function(fF,fG){return f9['vAhXO'](fF,fG);},'JtVpt':function(fH,fI){return f9['ddPGb'](fH,fI);},'suWWd':function(fJ,fK){return f9['uhCOZ'](fJ,fK);},'xyFGq':f9['zeClA'],'QmgTZ':f9['YWeMp'],'WbXdL':f9['lVIMz'],'rEIMf':function(fL,fM){return f9['uhCOZ'](fL,fM);},'wCxCI':f9['nCUYp'],'NWiyh':function(fN,fO){return f9['lcLKB'](fN,fO);},'xlLAy':function(fP,fQ){return f9['lcLKB'](fP,fQ);},'IvjWV':function(fR,fS){return f9['zbdWM'](fR,fS);},'DpkVl':f9['DkSwE'],'xjnCy':f9['fEUka'],'EJppK':f9['ACoDi'],'DpAfz':f9['yRICn']};continue;case'4':fw+=f9['PzbGP'];continue;}break;}});}});}if(d['EilSW'](d['HNkvI']($,d['ShHPC'])['length'],0x0)){d['AFlxJ']($,d['oBbAP'])['addClass'](d['hjetx']);}});
    /*]]>*/</script>
    <b:if cond='data:blog.url == data:blog.homepageUrl'>
      <script type='text/javascript'>/*<![CDATA[*/
        eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('o i="3w 2R;2P;.2O;2M;2L;w;2m;#2h .1J;?X-1g=;3Q;3G;3c;2D;2v;2n;1U-1e-1d-Z;2H;2Q;2s:O a;2E;2G-1e-1d-Z;y:O a;;1x;2X;1U;[;3W;4m;/4u/4y/1q/-/;?1o=1j-1P-1M&X-1g=;1F;2N;?1o=1j-1P-1M&X-1g=5;2S;2U;1u;<a j=\'1J\' w=\'/3d/1e/;\'>;</a>;3g;3i;3P;3S;3T;3U;3V;1S;4h;1y://;4o://;4q;$t;1q;4v;4w;4x;<a w=\';\' j=\'1O\' 1S=\'4z\' 4A=\'2f\'>;2g;<y j=\'1O\'>;</y>;2i;2j;2k;2l; ;/;2o;2p.1x;2q$2r;A;...;2t.1A/2x/;2y.1A;/2z.;/2B.;<u j=\'C\'><a j=\'1b\' w=\';\'><y L=\'K:A(;)\'/><u j=\'1s\'/></a><a j=\'E\' w=\';</a><u j=\'2T\'>;<a j=\'1N\' w=\';</a></u></u>;<y L=\'K:A(;)\'/>;<u j=\'1s\'/></a><a j=\'E\' w=\';</a></u><p j=\'3b\'>;</p></u>;<u j=\'C z\'><a j=\'1b\' w=\';</a><a j=\'E\' w=\';</a></u><u j=\'C\'><a j=\'1b\'><y M-1m=\';\' L=\'K:A(;)\'/></a><a j=\'E\' M-A=\';</a></u>;3h;.C:V(:O);3j;.1F;.z:V(:O);.1u;3l;3q .3r .1d-Z;3s;3x;.C:3C;.C:3F(;);b-z;3H;.b-z;M-A;.E;.z a;.z .E;L;K:A(;M-1m;y;.z y;3I;3J;3K;.C:V(.z);3L;3M;3N".3O(";");$(r(){i[0];G(0<$(i[2])[i[1]])$(i[4])[i[3]]();$(i[7])[i[6]](i[5],$(i[7])[i[6]](i[5])+i[8]+1k);$(4r)[i[4s]](i[9],r(){$(i[4t])[i[P]](r(){o g=$(s),b=g[i[11]](i[10]),a;g[i[14]]()[i[13]](i[12]);G(g[i[16]](i[15]))o f=g[i[19]](i[18])[i[17]]();1c g[i[16]](i[20])&&(f=g[i[19]](i[21])[i[17]]());g[i[23]](i[22]);o d=b[i[17]]()[i[24]](/\\[.+?\\]/)?b[i[17]]()[i[24]](/\\[(.*?)\\]/)[1]:i[25];g[i[13]](d);o l=b[i[17]]()[i[27]](i[26]);l=-1!=l?b[i[17]]()[i[28]](0,l):b[i[17]]();b[i[17]](l);d[i[24]](i[25])&&(a=i[29]+f+i[30]+2u);d[i[24]](i[31])&&(a=i[29]+f+i[30]+2w);d[i[24]](i[32])&&(a=i[29]+f+i[33]);d[i[24]](i[34])&&(a=i[29]+f+i[30]+2A);d[i[24]](i[35])&&(a=i[29]+f+i[30]+2C);d[i[24]](i[36])&&(a=i[29]+f+i[33]);G(1<f[i[1]])$(s)[i[11]](i[10])[i[40]](i[37]+f+i[8]+1k+i[38]+2F[7]+i[39]),g[i[14]]()[i[41]](),$[i[1i]]({A:a,2I:i[42],2J:i[43],2K:r(a){o c=i[22],e,b;1l(e=0;e<a[i[45]][i[44]][i[1]];e+=1){1l(b=0;b<a[i[45]][i[44]][e][i[46]][i[1]];b+=1){o f=a[i[45]][i[44]][e][i[46]][b];G(f[i[47]]==i[48]){o h=f[i[5]];h=1n?h[i[D]](i[49],i[1p]):h;2V}}o d=a[i[45]][i[44]][e][i[2W]][i[v]][i[D]](/<\\S[^>]*>/g,i[22]);b=a[i[45]][i[44]][e][i[2Y]][i[v]];f=2Z?3a?1r 0!==a[i[45]][i[44]][e][i[F]][0][i[1t]]?i[3e]+a[i[45]][i[44]][e][i[F]][0][i[1t]][i[v]]+i[3f]+a[i[45]][i[44]][e][i[F]][0][i[W]][i[v]]+i[39]:i[1v]+a[i[45]][i[44]][e][i[F]][0][i[W]][i[v]]+i[1w]:i[1v]+a[i[45]][i[44]][e][i[F]][0][i[W]][i[v]]+i[1w]:i[22];o m=(3k 1N(a[i[45]][i[44]][e][i[N]].$t))[i[3m]](3n,{3o:i[3p]});m=a[i[45]][i[44]][e][i[N]][i[v]][i[Y]](8,2)+i[1z]+m+i[1z]+a[i[45]][i[44]][e][i[N]][i[v]][i[Y]](0,4);o q=i[3t]+a[i[45]][i[44]][e][i[N]][i[v]][i[Y]](0,10)[i[D]](/\\-/g,i[3u])+i[3v],k=1r 0!==a[i[45]][i[44]][e][i[1B]]?a[i[45]][i[44]][e][i[1B]][i[3y]]:3z,l=3A<d[i[1]]?d[i[28]](0,3B)+i[1C]:d;d=1i<d[i[1]]?d[i[28]](0,1i)+i[1C]:d;k=1n?k[i[D]](/1y:\\/\\//,i[1p]):k;G(-1!==k[i[27]](i[3D])||-1!==k[i[27]](i[3E])){o n=k,p=k[i[D]](i[1D],i[1E]);k=k[i[D]](i[1D],i[1E])}1c n=1a(k,1G[0],1G[0]),p=1a(k,1H[0],1H[1]),k=1a(k,1I[0],1I[1]);g[i[16]](i[25])?c+=i[H]+h+i[1K]+n+i[1L]+h+i[38]+b+i[I]+f+i[J]+q+i[38]+m+i[3R]:g[i[16]](i[31])?(c+=i[H]+h+i[38],c=0==e?c+(i[B]+p+i[x]):c+(i[B]+n+i[x]),c+=i[1f]+h+i[38]+b+i[I]+f+i[J]+q+i[38]+m+i[R]+l+i[T]):g[i[16]](i[32])?(c+=i[H]+h+i[38],c=0==e?c+(i[B]+p+i[x]):c+(i[B]+n+i[x]),c+=i[1f]+h+i[38]+b+i[I]+f+i[J]+q+i[38]+m+i[R]+l+i[T]):g[i[16]](i[34])?(c+=i[H]+h+i[38],c=0==e?c+(i[B]+p+i[x]):c+(i[B]+n+i[x]),c+=i[1f]+h+i[38]+b+i[I]+f+i[J]+q+i[38]+m+i[R]+d+i[T]):g[i[16]](i[36])?(c+=i[3X]+h+i[38],c=0==e?c+(i[B]+k+i[x]):c+(i[B]+n+i[x]),c+=i[3Y]+h+i[38]+b+i[3Z]+p+i[4a]+n+i[4b]+h+i[38]+b+i[4c]):g[i[16]](i[35])&&(c+=i[H]+h+i[1K]+p+i[1L]+h+i[38]+b+i[I]+f+i[J]+q+i[38]+m+i[R]+d+i[T])}g[i[23]](c)},4d:r(){$(i[4e])[i[P]](r(){$(s)[i[19]](i[4f])[i[13]](i[4g])});$(i[1Q])[i[P]](r(){$(s)[i[19]](i[4i])[i[3]]()})}});1c g[i[14]]()[i[3]]()})});$(4j)[i[4k]](r(){$(i[1Q])[i[P]](r(){r g(){b==a[i[19]](i[4l])[i[1R]]()?b=1:b++;o d=a[i[19]](i[4n]+b+i[1h]);a[i[19]](i[4p])[i[1T]](i[U]);d[i[13]](i[U]);a[i[19]](i[1V])[i[6]](i[5],d[i[19]](i[Q])[i[6]](i[1X]));a[i[19]](i[1Y])[i[17]](d[i[19]](i[Q])[i[17]]());a[i[19]](i[1Z])[i[6]](i[2a],i[2b]+d[i[19]](i[2c])[i[6]](i[2d])+i[1h])}o b=0,a=$(s);o f=2e(g,1W);$(s)[i[4B]](r(){4C(f)});$(s)[i[4D]](r(){f=2e(g,1W)});a[i[4E]](i[4F],i[4G],r(){$(s)[i[13]](i[U])[i[4H]]()[i[1T]](i[U]);a[i[19]](i[1V])[i[6]](i[5],$(s)[i[19]](i[Q])[i[6]](i[1X]));a[i[19]](i[1Y])[i[17]]($(s)[i[19]](i[Q])[i[17]]());a[i[19]](i[1Z])[i[6]](i[2a],i[2b]+$(s)[i[19]](i[2c])[i[6]](i[2d])+i[1h]);b=$(s)[i[1R]]()})})})});',62,292,'||||||||||||||||||_0xa079|class|||||var|||function|this||div|52|href|84|span|current|url|83|Post|51|Title|56|if|77|80|81|background|style|data|64|first|96|111|86||87|107|not|59|max|65|content|||||||||||ResizeImg|Thumb|else|widget|label|85|results|106|100|json|m_res|for|thumb|httpsEnabled|alt|50|summary|void|boxs|55|broadcast|60|61|html|http|66|com|70|72|75|76|cover|t_cate_thumb|t_cate_cover|t_cate_video|LabLink|78|79|script|Date|Author|in|99|103|rel|108|list|112|5E3|110|113|118|||||||||||114|115|117|116|setInterval|_blank|name|Blog1|long|toLocaleDateString|published|substr|attr|parent|_|_archive|media|thumbnail|li|youtube|b_list|addClass|b_cover|vi|ytimg|default|b_sided|hqdefault|b_cards|notr|find|AiS|cloud|hasClass|method|dataType|success|body|remove|vcover|indx|length|text|strict|sided|details|cards|break|53|match|54|Au_Name|||||||||||Au_Link|Snippet|prev|search|57|58|append|cov|fadeIn|each|new|ajax|63|blogLocale|month|62|main|Label|one|67|68|69|use|index|71|alt_Img|300|230|last|73|74|eq|h2|removeClass|mouseenter|mouseleave|click|siblings|on|ajaxStop|split|GET|scroll|82|jsonp|entry|feed|link|indexOf|88|89|90|||||||||||91|92|93|complete|97|95|94|alternate|98|document|125|104|substring|105|https|109|replace|window|102|101|feeds|title|uri|author|posts|noopener|target|119|clearInterval|120|124|121|122|123'.split('|'),0,{}))
      /*]]>*/</script>
    </b:if>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <script type='text/javascript'>/*<![CDATA[*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l i="1K 2S;2V;.2W;3s;1F;.s-1I J[1Y=\'1Z\'];2p;2C; ...;2N;2Q;.1i-1a a[x=\'M v:u\'];/X/w/W/-/;.1i-1a a[x=\'M v:u\']:2c(0);?G=T-S-R&P-O=;/X/w/W?G=T-S-R&P-O=;3o;N;\\3t;\\1x;1E;.n-w;1G;1H;F;.r-1o.F;1N;1O;1T;1U;1V;1W;x;1X;o;1j://;2a://;2b;$t;y;2d;s;2f;<a x=\'2h\' 2j=\'2k\' o=\';\' j=\'r-s\'>;2r;</a>;<J j=\'r-s\'>;</J>;;2s$2u;u;2x.1d/2D/;2F;2G.1d;/2K.;/2M.;A;<k j=\'C-p\'><a j=\'C-V\' o=\';\'><3d 3l=\';\' G=\';\'/></a><k j=\'n-3m\'><D j=\'n-y\'><a o=\';\' y=\';\'>;</a></D><k j=\'r-1q\'>;<E j=\'r-1o F\' 3v=\';</E></k></k></k>;1t;j;n-w A;1u;<k j=\'C-p\'><D j=\'n-y\'>;</D><a j=\'C-V\' o=\';\'/></a><k j=\'r-1q\'>;</E></k></k>;1v;.1w-Z;1y;.1z;1A-1B;Z-n-A;.A;1C".1D(";");$(z(){i[0];m(0<$(i[2])[i[1]])$(i[4])[i[3]]();l h=$(i[5]);m(1J<h[i[6]]()[i[1]])$(h)[i[6]](h[i[6]]()[i[7]](0,1L)+i[8]);$(1M)[i[10]](i[9],z(){l h=0<$(i[11])[i[1]]?i[12]+$(i[13])[i[6]]()+i[14]+Q:i[15]+Q;$[i[1P]]({u:h,1Q:i[27],1R:i[28],1S:z(d){l b,c;U(b=0;b<d[i[30]][i[29]][i[1]];b+=1){U(c=0;c<d[i[30]][i[29]][b][i[31]][i[1]];c+=1){l f=d[i[30]][i[29]][b][i[31]][c];m(f[i[32]]===i[33]){l g=f[i[34]];g=Y?g[i[37]](i[35],i[36]):g;2e}}c=d[i[30]][i[29]][b][i[39]][i[38]];f=d[i[30]][i[29]][b][i[2g]][i[38]];l e=d[i[30]][i[29]][b][i[2i]][0],a=1b 0!==e[i[1c]]?!0:!1;e=2l?2m?a?i[2n]+e[i[1c]][i[38]]+i[2o]+e[i[H]][i[38]]+i[2q]:i[1e]+e[i[H]][i[38]]+i[1f]:i[1e]+e[i[H]][i[38]]+i[1f]:i[2t];a=1b 0!==d[i[30]][i[29]][b][i[1g]]?d[i[30]][i[29]][b][i[1g]][i[2v]]:2w;a=Y?a[i[37]](/1j:\\/\\//,i[36]):a;-1!==a[i[1h]](i[2y])||-1!==a[i[1h]](i[2z])?a=a[i[37]](i[2A],i[2B]):B!==i[I]&&(a=2E(a,1k[0],1k[1]));m(B===i[I])$(i[21])[i[2H]](i[2I],i[2J])[i[1l]](i[2L]+g+i[1m]+a+i[1n]+c+i[2O]+g+i[2P]+c+i[K]+c+i[2R]+e+i[1p]+f+i[K]+f+i[2T]);2U $(i[21])[i[L]](i[16])[i[1l]](i[2X]+c+i[2Y]+g+i[1m]+a+i[1n]+c+i[2Z]+e+i[1p]+f+i[K]+f+i[3a])}m(B===i[I]&&($(i[3b])[i[3c]]($(i[1r])),$(i[1r])[i[L]](i[3e]),!3f))$(i[3g])[i[L]](i[3h])}})[i[26]](z(){m(B===i[16])$(i[21])[i[23]]({3i:!0,3j:3k,N:1s===i[17]?!0:!1,3n:20,3p:!0,3q:!0,3r:1s===i[17]?[i[18],i[19]]:[i[19],i[18]],3u:{0:{q:1},3w:{q:2},3x:{q:3},3y:{q:3z[i[22]]($(i[21])[i[20]]()/3A)}}});3B(i[25])[i[24]]()})})});',62,224,'||||||||||||||||||_0x24d7|class|div|var|if|related|href||items||author||url||posts|rel|title|function|links|rel_type|relate|h2|time|timeago|alt|45|57|span|63|75|tag|rtl|results|max|rel_items|script|in|json|for|Thumb|summary|feeds|httpsEnabled|wide|||||||||||labels|void|42|com|47|48|50|53|post|http|t_related|67|59|60|date|65|details|76|b_dir|append|attr|addClass|navi|uf104|after|share|pagin|top|ajax|split|width|body|round|owlCarousel|profile|270|use|240|window|done|get|82|type|dataType|success|jsonp|entry|feed|link|alternate|itemprop|description|||||||||||https|replace|eq|published|break|uri|40|noopener|41|target|_blank|Au_Name|Au_Link|43|44|text|46|name|media|49|thumbnail|51|alt_Img|youtube|52|54|55|56|substring|vi|ResizeImg|indexOf|ytimg|70|68|69|default|58|hqdefault|scroll|61|62|one|64|strict|66|else|length|indx|71|72|73|||||||||||74|78|77|img|79|Profile|81|80|autoplayHoverPause|autoplay|rel_autoplay|src|content|margin|slider|nav|loop|navText|remove|uf105|responsive|datetime|480|640|768|Math|250|jQuery'.split('|'),0,{}))
    /*]]>*/</script>
    </b:if>
    <b:if cond='data:blog.pageType == &quot;index&quot; and not data:blog.searchQuery'>
    <script type='text/javascript'>/*<![CDATA[*/
      var _0x86b1='scroll{one{updated-min{indexOf{href{location{length{.post-outer{.index-author{text{.post-outer .ReadMore:first{/search/label/{?{{replace{match{/feeds/posts/summary/-/{/feeds/posts/summary{?alt=json-in-script&max-results=0{$t{openSearch$totalResults{feed{<span class="curr">1</span>{prepend{#Pagination .nums{ceil{<span>{</span>{append{width{.nums{#Pagination .pg-prev{rtl{<a class="pg-next">&#xf100;</a>{<a class="pg-prev">&#xf101;</a>{#Pagination{<a class="pg-next">&#xf101;</a>{<a class="pg-prev">&#xf100;</a>{remove{#Pagination .pg-prev, #Pagination .pg-next{resize{click{.pg-next{.nums span:not(".hid-num"):first{floor{hid-num{addClass{on{body{.pg-prev{class{removeAttr{.nums span.hid-num:last{jsonp{get{#Pagination span:not(.curr){curr{removeClass{.curr{opac{?alt=json-in-script&max-results={&start-index={entry{link{rel{alternate{http://{https://{summary{substr{ ...{title{name{author{uri{published{media$thumbnail{url{youtube.com/vi/{ytimg.com{/default.{/hqdefault.{<div class=\'post-outer notr\'><div class=\'rct-cards\'>{<div class=\'post-outer notr\'><div class=\'index-body\'>{<a class="RecentThumb" href="{" title="{">{<span style="background-image:url({);"></span>{<div class="boxs"></div></a>{<h2 class="post-title entry-title" itemprop="name headline"><a href="{</a></h2>{<div class="details">{<span class="index-author" itemprop="author" itemscope="itemscope" itemtype="https://schema.org/Person"><a class="fn g-profile" href="{" rel="author" title="author profile" data-gapiscan="true" data-onload="true" data-gapiattached="true"><span itemprop="name">{</span></a><a class="url" href="" itemprop="url"></a></span>{<span class="index-time"><abbr class="timeago published updated" itemprop="datePublished dateModified" title="{</abbr></span></div>{<p class="RecentSnippet">{</p>{<a class="ReadMore" href="{</a>{<a class="ShareIndex fa fa-heart-o" title="Share Post"></a><div class="ShareIndexBut notr">{<a class="fb" href="https://www.facebook.com/sharer/sharer.php?u={" rel="noopener" target="_blank" title="Share">\uf09a</a>{<a class="go" href="https://plus.google.com/share?url={" rel="noopener" target="_blank" title="+1">\uf1a0</a>{<a class="tw" href="https://twitter.com/home?status={" rel="noopener" target="_blank" title="Tweet">\uf099</a>{<a class="pin" href="https://pinterest.com/pin/create/button/?url{&amp;media={&amp;description={" rel="noopener" target="_blank" title="Pin It">\uf0d2</a>{</div></div></div>{<i class="clear"/>{html{.blog-posts{outerWidth{round{top{offset{#Blog1{animate{stop{html,body{timeago{abbr.timeago'.split("{");$(function(){$(window)[_0x86b1[1]](_0x86b1[0],function(){if(-1===window[_0x86b1[5]][_0x86b1[4]][_0x86b1[3]](_0x86b1[2])){var e=$(_0x86b1[7])[_0x86b1[6]],n=0<$(_0x86b1[8])[_0x86b1[6]]?!0:!1,p=$(_0x86b1[10])[_0x86b1[9]](),f;if(-1!==window[_0x86b1[5]][_0x86b1[4]][_0x86b1[3]](_0x86b1[11]))var m=window[_0x86b1[5]][_0x86b1[4]][_0x86b1[15]](/\/label\/.+\?/)[0][_0x86b1[14]](/\/label\//,_0x86b1[13])[_0x86b1[14]](_0x86b1[12],_0x86b1[13]),g=_0x86b1[16]+m;else g=_0x86b1[17];$[_0x86b1[54]](g+_0x86b1[18],function(g){function b(){if(Math[_0x86b1[25]](f/e)>$(_0x86b1[30])[_0x86b1[29]]()/40){if(0==$(_0x86b1[31])[_0x86b1[6]])if(b_dir===_0x86b1[32])$(_0x86b1[35])[_0x86b1[23]](_0x86b1[34])[_0x86b1[28]](_0x86b1[33]);else $(_0x86b1[35])[_0x86b1[23]](_0x86b1[37])[_0x86b1[28]](_0x86b1[36])}else $(_0x86b1[39])[_0x86b1[38]]()}f=g[_0x86b1[21]][_0x86b1[20]][_0x86b1[19]];$(_0x86b1[24])[_0x86b1[23]](_0x86b1[22]);for(i=2;i<=Math[_0x86b1[25]](f/e);i++)$(_0x86b1[24])[_0x86b1[28]](_0x86b1[26]+i+_0x86b1[27]);b();$(window)[_0x86b1[40]](b);$(_0x86b1[48])[_0x86b1[47]](_0x86b1[41],_0x86b1[42],function(){if($(_0x86b1[43])[_0x86b1[9]]()!=Math[_0x86b1[25]](f/e)-Math[_0x86b1[44]]($(_0x86b1[30])[_0x86b1[29]]()/40)+1)$(_0x86b1[43])[_0x86b1[46]](_0x86b1[45])});$(_0x86b1[48])[_0x86b1[47]](_0x86b1[41],_0x86b1[49],function(){$(_0x86b1[52])[_0x86b1[51]](_0x86b1[50])})},_0x86b1[53]);$(_0x86b1[48])[_0x86b1[47]](_0x86b1[41],_0x86b1[55],function(){$(_0x86b1[58])[_0x86b1[57]](_0x86b1[56]);$(this)[_0x86b1[46]](_0x86b1[56]);$(_0x86b1[7])[_0x86b1[46]](_0x86b1[59]);var f=$(this)[_0x86b1[9]]()*e-e+1;$[_0x86b1[54]](g+_0x86b1[60]+e+_0x86b1[61]+f,function(b){$(_0x86b1[7])[_0x86b1[38]]();var a=_0x86b1[13],c,h;for(c=0;c<b[_0x86b1[21]][_0x86b1[62]][_0x86b1[6]];c+=1){for(h=0;h<b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[63]][_0x86b1[6]];h+=1){var k=b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[63]][h];if(k[_0x86b1[64]]==_0x86b1[65]){var d=k[_0x86b1[4]];d=httpsEnabled?d[_0x86b1[14]](_0x86b1[66],_0x86b1[67]):d;break}}h=b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[68]][_0x86b1[19]][_0x86b1[14]](/<\S[^>]*>/g,_0x86b1[13]);h=h[_0x86b1[69]](0,100)+_0x86b1[70];k=b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[71]][_0x86b1[19]];var e=b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[73]][0][_0x86b1[72]][_0x86b1[19]],f=void 0!==b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[73]][0][_0x86b1[74]]?b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[73]][0][_0x86b1[74]][_0x86b1[19]]:_0x86b1[13],g=b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[75]][_0x86b1[19]],l=void 0!==b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[76]]?b[_0x86b1[21]][_0x86b1[62]][c][_0x86b1[76]][_0x86b1[77]]:alt_Img,m=ResizeImg(l,1600);l=-1!==l[_0x86b1[3]](_0x86b1[78])||-1!==l[_0x86b1[3]](_0x86b1[79])?l[_0x86b1[14]](_0x86b1[80],_0x86b1[81]):rct_cards?ResizeImg(l,t_index_cards[0],t_index_cards[1]):ResizeImg(l,t_index[0],t_index[1]);a=rct_cards?a+_0x86b1[82]:a+_0x86b1[83];a+=_0x86b1[84]+d+_0x86b1[85]+k+_0x86b1[86];a+=_0x86b1[87]+l+_0x86b1[88];a+=_0x86b1[89];a+=_0x86b1[90]+d+_0x86b1[85]+k+_0x86b1[86]+k+_0x86b1[91];a+=_0x86b1[89];a+=_0x86b1[92];n&&(a+=_0x86b1[93]+f+_0x86b1[94]+e+_0x86b1[95]);a+=_0x86b1[96]+g+_0x86b1[86]+g+_0x86b1[97];a+=_0x86b1[98]+h+_0x86b1[99];a+=_0x86b1[100]+d+_0x86b1[85]+k+_0x86b1[86]+p+_0x86b1[101];a+=_0x86b1[102];a+=_0x86b1[103]+d+_0x86b1[104];a+=_0x86b1[105]+d+_0x86b1[106];a+=_0x86b1[107]+d+_0x86b1[108];a+=_0x86b1[109]+d+_0x86b1[110]+m+_0x86b1[111]+k+_0x86b1[112];a+=_0x86b1[113]}$(_0x86b1[116])[_0x86b1[115]](a+_0x86b1[114]);rct_cards&&(b=Math[_0x86b1[118]]($(_0x86b1[116])[_0x86b1[117]]()/240),cards_width(b,20*b-20));$(_0x86b1[124])[_0x86b1[123]]()[_0x86b1[122]]({scrollTop:$(_0x86b1[121])[_0x86b1[120]]()[_0x86b1[119]]});jQuery(_0x86b1[126])[_0x86b1[125]]()},_0x86b1[53])})}else $(_0x86b1[35])[_0x86b1[38]]()})});
    /*]]>*/</script>
    </b:if>
  <b:else/>
    <script type='text/javascript'>/*<![CDATA[*/$(".item-thumbnail img").each(function(){$(this).attr('src', $(this).attr('data-src') ).removeAttr('data-src');});/*]]>*/</script>
  </b:if>
    <script type='text/javascript'>/*<![CDATA[*/
var _0xe36f='href;http://;https://;replace;attr;each;a[href^="http://"];img[src^="http://"];load;data-source;data-trans;g;timeagoScript;hasClass;indexOf;text;match;length;children;title-h;filter;abbr,time,.Date,#HTML110 p,.subscribe,#weather *,.r-date,.LabLink,.ReadMore,.title-h,.share h7,.related-h3,.c-icons h3,.profile-h3,#blog-pager *,.Profile *,.cancel-button,.r-loading span;placeholder;.search-form input;.timeago;is;html;.tran;ready;ajaxStop'.split(";");if(httpsEnabled)$(window)[_0xe36f[8]](function(){$(_0xe36f[6])[_0xe36f[5]](function(){$(this)[_0xe36f[4]](_0xe36f[0],$(this)[_0xe36f[4]](_0xe36f[0])[_0xe36f[3]](_0xe36f[1],_0xe36f[2]))});$(_0xe36f[7])[_0xe36f[5]](function(){$(this)[_0xe36f[4]](_0xe36f[0],$(this)[_0xe36f[4]](_0xe36f[0])[_0xe36f[3]](_0xe36f[1],_0xe36f[2]))})});function Translate(){$(_0xe36f[27])[_0xe36f[5]](function(){var a=$(this)[_0xe36f[4]](_0xe36f[9]),b=$(this)[_0xe36f[4]](_0xe36f[10]),c=new RegExp(a,_0xe36f[11]),d=$(_0xe36f[21])[_0xe36f[20]](function(){return($(this)[_0xe36f[13]](_0xe36f[12])&&-1!==$(this)[_0xe36f[15]]()[_0xe36f[14]](a)||$(this)[_0xe36f[15]]()[_0xe36f[16]](a))&&(0===$(this)[_0xe36f[18]]()[_0xe36f[17]]||$(this)[_0xe36f[13]](_0xe36f[19]))});if($(_0xe36f[23])[_0xe36f[4]](_0xe36f[22])[_0xe36f[16]](a))$(_0xe36f[23])[_0xe36f[4]](_0xe36f[22],b);d[_0xe36f[5]](function(){if($(this)[_0xe36f[25]](_0xe36f[24])){var a=$(this);setInterval(function(){$(a)[_0xe36f[26]](a[_0xe36f[26]]()[_0xe36f[3]](c,b))},5E4)}$(this)[_0xe36f[26]]($(this)[_0xe36f[26]]()[_0xe36f[3]](c,b))})})}$(document)[_0xe36f[28]](Translate);$(window)[_0xe36f[8]](Translate);$(window)[_0xe36f[29]](Translate);
  /*]]>*/</script>
</b:if>
<!--<![endif]-->

<b:include data='blog' name='google-analytics'/>
</body>
</html>
