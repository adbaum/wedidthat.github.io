(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[41],{1368:function(t,e,i){"use strict";var n=i(312),r=i(336),s=i.n(r),o=i(321),a=i(1369),c=i.n(a),d=i(339),l=i(308),h=i(340),u=i(1277),m=i(1370),p=i.n(m);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var g={},b={findPlugin:function(t){var e=p()(t.code,t);return o.Z.find(g,(function(t,i){return i.toLowerCase()===e}))}},w=s().View.extend({embed_type:null,containerSelector:null,resizable:!0,proportional:!1,forceFrameSize:!1,initialize:function(t){this.block=t.block,this.widget=t.widget,o.Z.bindAll(this),this.isInViewer=RM.viewerRouter||RM.constructorRouter&&RM.constructorRouter.preview},parse:function(t,e){return e(t)},sanitize:function(t){return(0,n.ZP)(t)},draw:function(t){t()}});function y(t,e){if(t){var i=["allow-top-navigation","allow-top-navigation-by-user-activation","allow-modals","allow-popups","allow-popups-to-escape-sandbox"],n=e&&Array.isArray(e)?e.filter((function(t){return!o.Z.contains(i,t.toLowerCase())})):["allow-scripts","allow-forms","allow-same-origin"];t.attr("sandbox",n.join(" "))}}b.instagramEmbedCallbacks=[],b.initInstagram=function(t){if(window.instgrm&&window.instgrm.Embeds&&o.Z.isFunction(window.instgrm.Embeds.process))return instgrm.Embeds.process(),t();b.instagramEmbedCallbacks.push(t),b.instagramInitXhr&&b.instagramInitXhr.abort(),(0,n.ZP)('body > script[src^="//platform.instagram.com"]').remove(),b.instagramInitXhr=n.ZP.ajax({url:d.default.selectProtocol("//platform.instagram.com/en_US/embeds.js"),dataType:"script",cache:!0,success:function(){o.Z.each(b.instagramEmbedCallbacks,(function(t){o.Z.isFunction(t)&&t()}))}})},g.Instagram=w.extend({embed_type:"instagram",containerSelector:"iframe",resizable:!0,initialize:function(){w.prototype.initialize.apply(this,arguments),this.block&&o.Z.extend(this.block.frame,{minwidth:164,minheight:264})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){var n,r,s,o,a,c=0,d=!1;e.html(t),b.initInstagram(function(){a=setInterval(function(){if(c++,n=e.children(this.containerSelector),(r=n.height())||c>20){if(r||c>50)return r&&"constructor"===RM.common.mode&&(s=n.width(),o=n.height()),clearInterval(a),void i(s,o);if(d)return;d=!0,i()}}.bind(this),100)}.bind(this))},customResizeHandler:function(t){return t}}),b.pinterestEmbedCallbacks=[],b.initPinterest=function(t){var e,i=0;if(o.Z.isFunction(window.parsePinBtns))return t();b.pinterestEmbedCallbacks.push(t),(0,n.ZP)('body > script[src^="assets.pinterest.com/js/pinit.js"]').remove(),(0,n.ZP)("body").prepend((0,n.ZP)('<script defer src="//assets.pinterest.com/js/pinit.js" data-pin-build="parsePinBtns"><\/script>')),e=setInterval((function(){i++,(o.Z.isFunction(window.parsePinBtns)||i>20)&&(clearInterval(e),t())}),100)},g.Pinterest=w.extend({embed_type:"pinterest",containerSelector:"a",resizable:!1,forceFrameSize:!0,containerSelectors:{buttonPin:"span",buttonFollow:"span",embedPin:"span",embedUser:"span",embedBoard:"span"},parse:function(t,e){var i=t.match(/data-pin-do=\"(\S+)\"/);return o.Z.isArray(i)&&i[1]&&(this.pinterestType=i[1],this.containerSelector=this.containerSelectors[this.pinterestType]||this.containerSelector),e&&e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){b.initPinterest(function(){var n,r,s,o,a,c,d=0,l=!1;e.html(t),this.pinterestType||this.parse(t[0].outerHTML),this.pinterestType&&e.addClass(this.pinterestType),window.parsePinBtns(e.get(0)),a=setInterval(function(){if(d++,n=e.children(this.containerSelector).filter((function(){return/PIN_\d+/.test(this.className)})),(r=n.height())||d>20){if(r||d>50)return r&&"constructor"===RM.common.mode&&(s=n.outerWidth(!0),o=n.outerHeight(!0),"buttonFollow"==this.pinterestType&&(c=n.children("i")).length&&(s+=(c.outerWidth()||1)-1)),clearInterval(a),void i(s,o);if(l)return;l=!0,i()}}.bind(this),100)}.bind(this))}}),g.FacebookVideo=w.extend({embed_type:"fbvideo",containerSelector:"iframe",resizable:!0,proportional:!0,forceFrameSize:!0,initialize:function(){w.prototype.initialize.apply(this,arguments),this.block&&o.Z.extend(this.block.frame,{minwidth:220,minheight:124})},parse:function(t,e){return e(t.replace(/<script.*script>/gi,"").replace(/<div\s+id=(\'|\")fb-root(\'|\")><\/div>/gi,""))},draw:function(t,e,i){var n,r,s;e.html(t),h.Z.initFacebookAPI(function(){window.FB.XFBML.parse(e.get(0),function(){n=e.find(this.containerSelector),r=n.width(),s=n.height(),i(r,s)}.bind(this))}.bind(this))}}),b.readymagEmbedCallbacks=[],b.initReadymag=function(t){if(RM.common.isReadymagEmbedInited&&o.Z.isFunction(window.RM_EMBED_parse))return t();b.readymagEmbedCallbacks.push(t),window.RM_EMBED_initAsync=function(){RM.common.isReadymagEmbedInited=!0,o.Z.each(b.readymagEmbedCallbacks,(function(t){o.Z.isFunction(t)&&t()})),b.readymagEmbedCallbacks=[]},b.readymagInitXhr||((0,n.ZP)('body > script[src~="RM_EMBED_"]').remove(),b.readymagInitXhr=n.ZP.ajax({url:l.Z.EMBED_SCRIPT_MAIN,dataType:"script"}))},g.Readymag=w.extend({embed_type:"readymag",containerSelector:"iframe",resizable:!0,initialize:function(){w.prototype.initialize.apply(this,arguments),this.block&&this.block.frame&&o.Z.extend(this.block.frame,{minwidth:288,minheight:236,maxwidth:512,maxheight:383})},parse:function(t,e){return e(t.replace(/<script.*script>/i,""))},draw:function(t,e,i){e.html(t),b.initReadymag(function(){window.RM_EMBED_parse(function(){var t=e.find(this.containerSelector),n=t.width(),r=t.height();i(n+2,r)}.bind(this))}.bind(this))}}),g.IFrame=w.extend({embed_type:"simple-iframe",containerSelector:"iframe",resizable:!0,parse:function(t,e){var i;return(i=t.match(/[\s\S]*?(\<iframe[\s\S]*?\>)[\s\S]*?(\<\/iframe\>)[\s\S]*?/i))&&i[1]&&i[2]?e(i[1]+i[2]):e(null)},sanitize:function(t){var e=(0,n.ZP)(t);if("object"!==f(e)||!e.length)return e;var i,r=(0,n.ZP)("<iframe></iframe>"),s=e.get(0).attributes,a=["allowtransparency","allowfullscreen","height","name","sandbox","scrolling","seamless","src","width","allow"];return(0,o.Z)(s).each((function(t){if("object"===f(t)&&t.specified&&o.Z.contains(a,t.name.toLowerCase())){var e=t.name.toLowerCase(),n=t.value;"src"==e&&"https:"==window.location.protocol&&(n=n.replace(/^http(s?):\/\//i,"//")),"sandbox"===e&&(i=n.split(" ")),r.attr(e,n)}})),this.isInViewer||y(r,i),r},draw:function(t,e,i){var n=t[0].src;if(n&&n.trim())if(RM.screenshot&&u.Z.getVideoProvider(n))this.setPosterInsteadOfVideo(n,e,i);else{e.html(t);var r,s,o,a,c,d=0,l=!1;c=setInterval(function(){if(d++,r=e.children(this.containerSelector),(s=r.height())||d>20){if(s||d>50)return s&&"constructor"===RM.common.mode&&(o=r.width(),a=r.height()),clearInterval(c),void i(o,a);if(l)return;l=!0,i()}}.bind(this),100)}else i()},setPosterInsteadOfVideo:function(t,e,i){var r=u.Z.getVideoProvider(t),s=(0,n.ZP)("<img/>");u.Z.getEmbedData(t,(function(t){u.Z.getHighResVideoThumbnail({provider:r,thumbnail_url:t.thumbnail_url}).then(o.Z.bind((function(t){!function(t){s[0].src=t,e.css({"background-color":"#000"}),s.css({position:"absolute",top:0,bottom:0,margin:"auto",width:"100%",height:"auto"}),e.append(s)}(t)}),this))}),(function(){"function"==typeof i&&i()}))}}),g.CodeInjection=w.extend({embed_type:"code-injection",containerSelector:"rm-code-injection",resizable:!0,HEAD_PASSTHROUGH_SELECTOR:"",parse:function(t,e){return e(t)},sanitize:function(t){return n.ZP.parseHTML(t,document,!0)},draw:function(t,e,i){var r=(0,n.ZP)(document).find("head"),s="<head>",o='<body style="padding:0; margin: 0; width: 100%; height: 100%; min-width: initial; min-height: auto;">',a=r.find(this.HEAD_PASSTHROUGH_SELECTOR),d=(0,n.ZP)('<iframe seamless style="width: 100%; height: 100%;"></iframe>'),l=(0,n.ZP)("<div></div>");if(!this.isInViewer||this.block&&this.block.model.get("use_iframe")||this.widget&&this.widget.use_iframe){this.isInViewer||y(d),a.each((function(){s+=this.outerHTML})),s+='<script src="https://unpkg.com/jquery@2.2.3/dist/jquery.min.js"><\/script>',s+="</head>",l.html(t),o+=l[0].innerHTML+"</body>";var h='<!DOCTYPE html><html style="width: 100%; height: 100%; min-width: initial; min-height: auto;">'+s+o+"</html>";return e.html(d),d[0].contentWindow.document.open(),d[0].contentWindow.document.write(h),d[0].contentWindow.document.close(),i(d.width(),d.height())}t=(0,n.ZP)(t),l.html(t),l.find("script").each((function(){var t,e=this;e.src&&e.text&&((t=document.createElement("script")).text=e.text,e.text="",(0,n.ZP)(t).insertAfter((0,n.ZP)(e)))})),c()(e,l[0].innerHTML,{done:function(){return i(null,null)}}),e.css({"font-family":"initial","font-weight":"initial"})},loadNodeWithScripts:function(t,e,i){var r,s=(0,n.ZP)('<div id="fake"></div>'),a=[];s.html(e),(r=s.find("script")).each((function(){this.src&&this.text?(a.push({src:this.src}),a.push({text:this.text})):a.push({src:this.src,text:this.text})}));var c=o.Z.find(a,(function(t){return!!t.src}));if(!a.length||!c||a<2)t.html(s[0].innerHTML);else{r.remove();var d=0;t.html(s[0].innerHTML),function e(){var n,r,s,o=a[d];if(!o)return i();d++,n=document.createElement("script"),o.src&&(n.src=o.src);o.text&&(n.text=o.text);if(!o.src)return t[0].appendChild(n),e();o.src&&(n.onload=function(){clearInterval(r),e()},s=0,r=setInterval((function(){++s>10&&(n.onload=null,e())}),1e3),t[0].appendChild(n))}()}}}),g.Ecommerce=g.CodeInjection.extend({embed_type:"ecommerce"}),g.Gdpr=g.CodeInjection.extend({embed_type:"gdpr"}),g.Video=g.CodeInjection.extend({embed_type:"html5-video"}),e.Z=b},1367:function(t,e,i){"use strict";i.r(e);var n=i(1340),r=i(321),s=i(1368),o=n.Z.extend({render:function(){this.makeBox("widget-iframe"),this.rendered=!0;var t=this.getPluginClass();return t?(this.plugin=new t({widget:this}),this.$el.addClass(this.plugin.embed_type),this.started?this.drawPlugin():(this.contentCleared=!0,!RM.screenshot&&!this.drawInProgress&&this.widgetIsLoaded()),this.trigger("rendered"),this):(this.widgetIsLoaded(),this)},drawPlugin:function(){this.$el.empty(),this.contentCleared=!1,this.drawInProgress=!0,this.plugin.parse(this.code,function(t){if(this.$data=this.plugin.sanitize(t),RM.screenshot&&setTimeout(r.Z.bind((function(){this.widgetIsLoaded()}),this),5e3),this.plugin.draw(this.$data,this.$el,function(){var t=RM.screenshot?5e3:2e3;this.loadTimeout=setTimeout(function(){this.drawInProgress=!1,this.destroyed||(this.widgetIsLoaded(),this.$data.off&&this.$data.off("load"),this.started||this.clearContent())}.bind(this),t)}.bind(this)),!RM.screenshot){if(!r.Z.isFunction(this.$data.one))return;this.$data.one("load",function(){this.drawInProgress=!1,!this.destroyed&&this.started&&(this.widgetIsLoaded(),clearTimeout(this.loadTimeout))}.bind(this))}}.bind(this))},widgetIsLoaded:function(){this.loaded||this.destroyed||(this.loaded=!0,this.trigger("loaded"))},isValid:function(){return this.code&&this.getPluginClass()},start:function(){return n.Z.prototype.start.call(this),this.destroyed||!this.rendered||this.contentCleared&&this.drawPlugin(),this},stop:function(){return n.Z.prototype.stop.call(this),this.plugin?(this.widgetIsLoaded(),this.drawInProgress?void 0:(this.clearContent(),this)):this},clearContent:function(){this.clear_content&&(this.$el.empty(),this.contentCleared=!0)},getPluginClass:function(){return s.Z.findPlugin(this)},destroy:function(){return this.clearContent(),this.plugin&&this.plugin.remove(),n.Z.prototype.destroy.apply(this,arguments)}});e.default=o}}]);