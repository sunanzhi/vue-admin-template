(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bece904"],{"0e0c":function(t,e,n){},"3d2f":function(t,e,n){"use strict";var i=n("e4f4"),a=n.n(i);a.a},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"531f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return r}));var i=n("b775");function a(t){return Object(i["a"])({url:"/cultures/system/qiniuUploadImage",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/cultures/system/qiniuGetTokenAndKey",method:"post",data:t})}function r(t){return Object(i["a"])({url:"https://up.qiniup.com",method:"post",data:t})}},"54fe":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return s}));var i=n("b775");function a(t){return Object(i["a"])({url:"/cultures/culturesWorksPainting/adminList",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/cultures/culturesWorksPainting/get",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/cultures/culturesWorksPainting/add",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/cultures/culturesWorksPainting/edit",method:"post",data:t})}},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",r)}},"61da":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("2b0e"),a=new i["default"]},"6a81":function(t,e,n){},"81af":function(t,e,n){"use strict";var i=n("0e0c"),a=n.n(i);a.a},8256:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},a=[],o=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("\n    upload\n  ")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"http-request":t.myUpload,"show-file-list":!0,"on-remove":t.handleRemove,"before-upload":t.beforeUpload,action:"http://dev.tp6.test/cultures/system/qiniuUploadImage","list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n        Click upload\n      ")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("\n      Confirm\n    ")])],1)],1)}),r=[],s=(n("456d"),n("61da")),c=n("531f"),l={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],category:0,scene:""}},mounted:function(){var t=this;s["a"].$on("setTinymceEditorImageParams",(function(e){var n=e.category,i=e.scene;t.category=n,t.scene=i}))},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,a=n.length;i<a;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise((function(a,o){var r=new Image;r.src=n.createObjectURL(t),r.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)}))},myUpload:function(t){var e=this,n=this,i=new FormData;i.append("file",t.file),i.append("category",this.category),i.append("scene",this.scene),Object(c["b"])(i).then((function(e){n.listObj[t.file.uid].url=e.data.url,n.listObj[t.file.uid].hasSuccess=!0})).catch((function(){e.$message.error("上传失败，请重新上传")}))}}},u=l,d=(n("3d2f"),n("2877")),f=Object(d["a"])(u,o,r,!1,null,"537e1e3b",null),m=f.exports,h=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],p=h,g=["searchreplace bold italic | fontsizeselect fontselect | underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],b=g,y=n("2d63"),v=[];function w(){return window.tinymce}var _=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var a=document.createElement("script");a.src=t,a.id=t,document.body.appendChild(a),v.push(i);var o="onload"in a?r:s;o(a)}function r(e){e.onload=function(){this.onerror=this.onload=null;var t,n=Object(y["a"])(v);try{for(n.s();!(t=n.n()).done;){var i=t.value;i(null,e)}}catch(a){n.e(a)}finally{n.f()}v=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function s(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,n=Object(y["a"])(v);try{for(n.s();!(e=n.n()).done;){var i=e.value;i(null,t)}}catch(a){n.e(a)}finally{n.f()}v=null}}}n&&i&&(w()?i(null,n):v.push(i))},k=_,I="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",j={name:"Tinymce",components:{editorImage:m},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;k(I,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:b,menubar:this.menubar,plugins:p,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",n.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},C=j,O=(n("957f"),Object(d["a"])(C,i,a,!1,null,"53ba6672",null));e["a"]=O.exports},"957f":function(t,e,n){"use strict";var i=n("6a81"),a=n.n(i);a.a},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),o=n("79e5"),r=n("fdef"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(t,e,n){var a={},s=o((function(){return!!r[t]()||c[t]()!=c})),l=a[t]=s?e(f):r[t];n&&(a[n]=l),i(i.P+i.F*s,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),o=n("2d95"),r=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,m="Number",h=i[m],p=h,g=h.prototype,b=o(n("2aeb")(g))==m,y="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():f(e,3);var n,i,a,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>a)return NaN;return parseInt(c,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(b?c((function(){g.valueOf.call(n)})):o(n)!=m)?r(new p(v(e)),n,h):v(e)};for(var w,_=n("9e1e")?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;_.length>k;k++)a(p,w=_[k])&&!a(h,w)&&d(h,w,u(p,w));h.prototype=g,g.constructor=h,n("2aba")(i,m,h)}},c7a1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"绘画作品标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"作者"}},[n("el-input",{model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"作品图片上传"}},[t.showUploadImage?n("el-upload",{attrs:{"http-request":t.myUpload,multiple:!1,"before-upload":t.beforeUpload,action:"https://up.qiniup.com",drag:""}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("\n          将文件拖到此处，或"),n("em",[t._v("点击上传")])])]):t._e(),t._v(" "),t.showUploadImage?t._e():n("div",[n("el-image",{staticStyle:{height:"150px",width:"150px"},attrs:{src:t.form.image,fit:"scale-down"},on:{click:function(e){return t.removeImage(this)}}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"年份"}},[n("el-input",{model:{value:t.form.years,callback:function(e){t.$set(t.form,"years",e)},expression:"form.years"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"作品介绍内容"}},[n("tinymce",{ref:"tinymce",attrs:{height:300},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("添加")])],1)],1)],1)},a=[],o=(n("96cf"),n("3b8d")),r=n("61da"),s=n("8256"),c=n("54fe"),l=n("531f"),u={components:{Tinymce:s["a"]},data:function(){return{form:{title:"",author:"",image:"",years:"",content:""},uploadImageData:{uploadToken:"",uploadKey:"",url:""},contentCategory:1,contentScene:"contentImage",showUploadImage:!0}},mounted:function(){r["a"].$emit("setTinymceEditorImageParams",{category:this.contentCategory,scene:this.contentScene})},methods:{onSubmit:function(){var t=this;Object(c["a"])(this.form).then((function(e){!0===e.data&&t.$message({message:"添加成功",type:"success"}),t.$router.push({path:"/cultures/works/painting/list"})}))},beforeUpload:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["a"])({category:1,scene:"thumbnail"}).then((function(t){e.uploadImageData.uploadKey=t.data.key,e.uploadImageData.uploadToken=t.data.token,e.uploadImageData.url=t.data.url}));case 2:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),myUpload:function(t){var e=this,n=new FormData;n.append("file",t.file),n.append("key",this.uploadImageData.uploadKey),n.append("token",this.uploadImageData.uploadToken),Object(l["c"])(n).then((function(t){e.showUploadImage=!1,e.form.image=e.uploadImageData.url,e.$message({message:"上传成功",type:"success"})}))},removeImage:function(t){var e=this;this.$alert("是否移除此图片","提醒",{confirmButtonText:"确定",callback:function(t){e.form.image="",e.showUploadImage=!0,e.$message({type:"success",message:"移除成功"})}})}}},d=u,f=(n("81af"),n("2877")),m=Object(f["a"])(d,i,a,!1,null,"1c47d8cc",null);e["default"]=m.exports},e4f4:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);