(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bfa4be4"],{"2dbf":function(t,e,a){"use strict";var r=a("88e2"),u=a.n(r);u.a},"531f":function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return o}));var r=a("b775");function u(t){return Object(r["a"])({url:"/cultures/system/qiniuUploadImage",method:"post",data:t})}function n(t){return Object(r["a"])({url:"/cultures/system/qiniuGetTokenAndKey",method:"post",data:t})}function o(t){return Object(r["a"])({url:"https://up.qiniup.com",method:"post",data:t})}},"88e2":function(t,e,a){},"8b40":function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return s}));var r=a("b775");function u(){return Object(r["a"])({url:"/cultures/culturesCategory/adminList",method:"post"})}function n(t){return Object(r["a"])({url:"/cultures/culturesCategory/setStatus",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/cultures/culturesCategory/get",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/cultures/culturesCategory/edit",method:"post",data:t})}function s(){return Object(r["a"])({url:"/cultures/culturesCategory/hotList",method:"post"})}},d058:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"分类标题"}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"分类图上传"}},[a("el-upload",{attrs:{"http-request":t.myUpload,"before-upload":t.beforeUpload,action:"","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"file-list":t.fileList}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1)},u=[],n=(a("ac6a"),a("96cf"),a("3b8d")),o=a("8b40"),i=a("531f"),s={data:function(){return{form:{culturesCategoryId:"",title:"",summary:"",image:""},uploadImageData:{uploadToken:"",uploadKey:"",url:""},dialogImageUrl:"",dialogVisible:!1,imageList:[],fileList:[]}},created:function(){this.form.culturesCategoryId=this.$route.query.id,this.getInfo()},methods:{getInfo:function(){var t=this;Object(o["c"])({culturesCategoryId:this.form.culturesCategoryId}).then((function(e){t.form=e.data,t.imageList.push(t.form.image),t.fileList.push({url:t.form.image})}))},onSubmit:function(){var t=this;this.form.image=this.imageList.pop(),Object(o["b"])(this.form).then((function(e){!0===e.data&&t.$message({message:"修改成功",type:"success"})}))},beforeUpload:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.imageList.length>=1)){t.next=3;break}throw this.$message.error("不能多图上传"),new Error("不能多图上传");case 3:return t.next=5,Object(i["a"])({category:1,scene:"category"}).then((function(t){e.uploadImageData.uploadKey=t.data.key,e.uploadImageData.uploadToken=t.data.token,e.uploadImageData.url=t.data.url}));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),myUpload:function(t){var e=this,a=new FormData;a.append("file",t.file),a.append("key",this.uploadImageData.uploadKey),a.append("token",this.uploadImageData.uploadToken),Object(i["c"])(a).then((function(t){e.imageList.push(e.uploadImageData.url),e.$message({message:"上传成功",type:"success"})}))},handleRemove:function(t,e){var a=[];e.forEach((function(t){a.push(t.url)})),this.imageList=a},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},l=s,c=(a("2dbf"),a("2877")),d=Object(c["a"])(l,r,u,!1,null,"15f3174d",null);e["default"]=d.exports}}]);