(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72f5ee85"],{"105d":function(t,e,n){},2984:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.culturesCategoryId)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"标题",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.summary))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-image",{attrs:{src:t.row.image,"preview-src-list":[t.row.image]}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作品数",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.countCultures))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"下架/上架",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},on:{change:function(n){return t.setStatus(n,e.row.culturesCategoryId,e.$index)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"更新时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.updateTime))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.edit(e.row.culturesCategoryId)}}},[t._v("修改")])]}}])})],1)],1)},u=[],r=n("8b40"),s={data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(r["a"])().then((function(e){t.list=e.data,t.listLoading=!1}))},edit:function(t){this.$router.push({path:"/cultures/category/edit",query:{id:t}})},setStatus:function(t,e,n){var a=this;Object(r["d"])({culturesCategoryId:e,status:t}).then((function(e){!0!==e.data?a.list[n].status="1"===t?"0":"1":a.$notify({message:"修改成功",type:"success"})}))}}},l=s,o=(n("81a4"),n("2877")),i=Object(o["a"])(l,a,u,!1,null,"78f9e98f",null);e["default"]=i.exports},"81a4":function(t,e,n){"use strict";var a=n("105d"),u=n.n(a);u.a},"8b40":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return l}));var a=n("b775");function u(){return Object(a["a"])({url:"/cultures/culturesCategory/adminList",method:"post"})}function r(t){return Object(a["a"])({url:"/cultures/culturesCategory/setStatus",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/cultures/culturesCategory/get",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/cultures/culturesCategory/edit",method:"post",data:t})}}}]);