(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[17],{1549:function(e,t,o){"use strict";o.r(t);o(353);var r=o(321),s=o(312),n=o(1445),a=o(973),d=o(1431),i=o(1321),c=o(1550),u=o(1297),l=o(689),p=o(651);function h(e,t,o,r,s,n,a){try{var d=e[n](a),i=d.value}catch(e){return void o(e)}d.done?t(i):Promise.resolve(i).then(r,s)}var M,g,v=n.Z.extend({hideSidebar:function(){this.updatePropsModel&&this.updatePropsModel({selected:!1}),n.Z.prototype.hideSidebar.apply(this,arguments)},setupSettingsPanel:(M=regeneratorRuntime.mark((function e(){var t,o,n,h=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.cartWidgetModel=new a.Z(this.cartWidgetData),this.saveModelChanges_debounced=r.Z.debounce(this.saveModelChanges.bind(this),80),RM.constructorRouter&&RM.constructorRouter.mag&&!RM.constructorRouter.mag.get("_id")&&(RM.constructorRouter.isOwner=r.Z.isEmpty(RM.constructorRouter.previewMag.get("shared")),RM.constructorRouter.previewMag.edit_params=new d.Z(RM.constructorRouter.previewMag.get("edit_params"),RM.constructorRouter.previewMag),RM.constructorRouter.previewMag.unset("edit_params"),RM.constructorRouter.previewMag.filterUnusedFonts(),RM.constructorRouter.fonts=new i.ZP(RM.constructorRouter.previewMag.edit_params)),this.updatePropsModel=function(e){h.propsModel&&h.propsModel.set(e)},this.select=function(){h.updatePropsModel({selected:!0,faded:!1})},this.deselect=function(){h.updatePropsModel({selected:!1,faded:!1})},this.removeFade=function(){h.updatePropsModel({faded:!1})},this.propsModel=new Backbone.Model({block:{model:this.cartWidgetModel,saveModelChanges:this.saveModelChanges,saveModelChangesDebounced:this.saveModelChanges_debounced,eCommerceManager:this.mag.eCommerceManager},faded:!1,selected:this.selected||!1,disabled:this.disabled||!1,visible:!0,y:this.y,alt:this.alt,select:this.select,deselect:this.deselect,removeFade:this.removeFade,appearanceAnimation:!1,page:this.page,project:RM.constructorRouter.previewMag,user:RM.constructorRouter.previewMag.user,injectedRefs:{},workspace:null,controlsManager:null,useSharedState:function(){return{}},doesUserHaveAccess:!0}),this.onPropsModelChanged=function(){h.selected=h.propsModel.get("selected"),h.disabled=h.propsModel.get("disabled"),h.faded=h.propsModel.get("faded"),h.visible=h.propsModel.get("visible")},this.propsModel.on("change",this.onPropsModelChanged),t=(0,s.ZP)('<div id="sidebar-settings-panel-container" style="position: fixed; top: 0; right: 0; z-index: 4005; transition: 0.5s all ease-in-out, 0.3s transform ease;">').appendTo(document.body).get(0),o=function(){return(0,p.jsx)(l.CreateContextProvider,{context:u.bZ,model:h.propsModel},(0,p.jsx)(c.Z,{panelPortalElement:t}))},n=(0,s.ZP)("#cart-sidebar .sidebar-settings-container").get(0),(0,l.renderReact)({component:o,domElement:n,model:this.cartWidgetModel});case 14:case"end":return e.stop()}}),e,this)})),g=function(){var e=this,t=arguments;return new Promise((function(o,r){var s=M.apply(e,t);function n(e){h(s,o,r,n,a,"next",e)}function a(e){h(s,o,r,n,a,"throw",e)}n(void 0)}))},function(){return g.apply(this,arguments)})});t.default=v}}]);