(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-566012c7"],{"30ed":function(t,a,i){"use strict";i("fa61")},"6f7c":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",[i("el-tag",{staticClass:"my-tag",attrs:{effect:"dark"}},[i("svg",{staticStyle:{"vertical-align":"-4px"},attrs:{viewBox:"0 0 1024 1024",width:"20",height:"20"}},[i("path",{attrs:{d:"M767.1296 808.6528c16.8448 0 32.9728 2.816 48.0256 8.0384 20.6848 7.1168 43.52 1.0752 57.1904-15.9744a459.91936 459.91936 0 0 0 70.5024-122.88c7.8336-20.48 1.0752-43.264-15.9744-57.088-49.6128-40.192-65.0752-125.3888-31.3856-185.856a146.8928 146.8928 0 0 1 30.3104-37.9904c16.2304-14.5408 22.1696-37.376 13.9264-57.6a461.27104 461.27104 0 0 0-67.5328-114.9952c-13.6192-16.9984-36.4544-22.9376-57.0368-15.8208a146.3296 146.3296 0 0 1-48.0256 8.0384c-70.144 0-132.352-50.8928-145.2032-118.7328-4.096-21.6064-20.736-38.5536-42.4448-41.8304-22.0672-3.2768-44.6464-5.0176-67.6864-5.0176-21.4528 0-42.5472 1.536-63.232 4.4032-22.3232 3.1232-40.2432 20.48-43.52 42.752-6.912 46.6944-36.0448 118.016-145.7152 118.4256-17.3056 0.0512-33.8944-2.9696-49.3056-8.448-21.0432-7.4752-44.3904-1.4848-58.368 15.9232A462.14656 462.14656 0 0 0 80.4864 348.16c-7.6288 20.0192-2.7648 43.008 13.4656 56.9344 55.5008 47.8208 71.7824 122.88 37.0688 185.1392a146.72896 146.72896 0 0 1-31.6416 39.168c-16.8448 14.7456-23.0912 38.1952-14.5408 58.9312 16.896 41.0112 39.5776 79.0016 66.9696 113.0496 13.9264 17.3056 37.2736 23.1936 58.2144 15.7184 15.4112-5.4784 32-8.4992 49.3056-8.4992 71.2704 0 124.7744 49.408 142.1312 121.2928 4.9664 20.48 21.4016 36.0448 42.24 39.168 22.2208 3.328 44.9536 5.0688 68.096 5.0688 23.3984 0 46.4384-1.792 68.864-5.1712 21.3504-3.2256 38.144-19.456 42.7008-40.5504 14.8992-68.8128 73.1648-119.7568 143.7696-119.7568z",fill:"#8C7BFD"}}),i("path",{attrs:{d:"M511.8464 696.3712c-101.3248 0-183.7568-82.432-183.7568-183.7568s82.432-183.7568 183.7568-183.7568 183.7568 82.432 183.7568 183.7568-82.432 183.7568-183.7568 183.7568z m0-265.1648c-44.8512 0-81.3568 36.5056-81.3568 81.3568S466.9952 593.92 511.8464 593.92s81.3568-36.5056 81.3568-81.3568-36.5056-81.3568-81.3568-81.3568z",fill:"#FFE37B"}})]),t._v(" 统计信息 ")]),i("div",[i("div",{staticClass:"history-title"},[t._v("总览")]),i("div",[i("div",{staticStyle:{width:"400px",margin:"0 auto",display:"flex","justify-content":"center"}},[i("div",{staticClass:"history-name",staticStyle:{"line-height":"35px"}},[t._v("总访问量（每个IP每天记一次）:")]),i("div",{staticStyle:{color:"var(--maxLightRed)","font-weight":"bold","font-size":"30px","line-height":"35px"}},[t._v(" "+t._s(t.historyInfo.ip_history_count)+" ")])]),i("div",{staticClass:"history-info",staticStyle:{width:"640px"}},[i("div",{staticStyle:{"margin-right":"40px"}},[i("div",{staticClass:"history-name"},[t._v("省份访问TOP10")]),i("div",[i("el-table",{attrs:{data:t.historyInfo.ip_history_province}},[i("el-table-column",{attrs:{type:"index",align:"center",width:"60"}}),i("el-table-column",{attrs:{prop:"province",align:"center",label:"省份",width:"140"}}),i("el-table-column",{attrs:{prop:"num",align:"center",label:"数量",width:"100"}})],1)],1)]),i("div",[i("div",{staticClass:"history-name"},[t._v("IP访问TOP10")]),i("div",[i("el-table",{attrs:{data:t.historyInfo.ip_history_ip}},[i("el-table-column",{attrs:{type:"index",align:"center",width:"60"}}),i("el-table-column",{attrs:{prop:"ip",align:"center",label:"IP",width:"140"}}),i("el-table-column",{attrs:{prop:"num",align:"center",label:"数量",width:"100"}})],1)],1)])])])]),i("div",[i("div",{staticClass:"history-title"},[t._v("今日访问")]),i("div",[i("div",{staticStyle:{width:"250px",margin:"0 auto",display:"flex","justify-content":"center"}},[i("div",{staticClass:"history-name",staticStyle:{"line-height":"35px"}},[t._v("今日访问量：")]),i("div",{staticStyle:{color:"var(--maxLightRed)","font-weight":"bold","font-size":"30px","line-height":"35px"}},[t._v(" "+t._s(t.historyInfo.ip_count_today)+" ")])]),i("div",{staticClass:"history-info",staticStyle:{width:"640px"}},[i("div",{staticStyle:{"margin-right":"40px"}},[i("div",{staticClass:"history-name"},[t._v("今日访问省份统计")]),i("div",[i("el-table",{attrs:{data:t.historyInfo.province_today}},[i("el-table-column",{attrs:{type:"index",align:"center",width:"60"}}),i("el-table-column",{attrs:{prop:"province",align:"center",label:"省份",width:"140"}}),i("el-table-column",{attrs:{prop:"num",align:"center",label:"数量",width:"100"}})],1)],1)]),i("div",[i("div",{staticClass:"history-name"},[t._v("今日访问用户")]),i("div",{staticClass:"history-avatar"},[i("el-table",{attrs:{data:t.historyInfo.username_today}},[i("el-table-column",{attrs:{align:"center",label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("el-avatar",{staticClass:"user-avatar",attrs:{size:30,src:t.row.avatar}})]}}])}),i("el-table-column",{attrs:{prop:"username",align:"center",label:"用户",width:"200"}})],1)],1)])])])]),i("div",[i("div",{staticClass:"history-title"},[t._v("昨日访问")]),i("div",[i("div",{staticStyle:{width:"250px",margin:"0 auto",display:"flex","justify-content":"center"}},[i("div",{staticClass:"history-name",staticStyle:{"line-height":"35px"}},[t._v("昨日访问量：")]),i("div",{staticStyle:{color:"var(--maxLightRed)","font-weight":"bold","font-size":"30px","line-height":"35px"}},[t._v(" "+t._s(t.historyInfo.ip_count_yest)+" ")])]),i("div",{staticClass:"history-info",staticStyle:{width:"300px"}},[i("div",[i("div",{staticClass:"history-name"},[t._v("昨日访问用户")]),i("div",{staticClass:"history-avatar"},[i("el-table",{attrs:{data:t.historyInfo.username_yest}},[i("el-table-column",{attrs:{align:"center",label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("el-avatar",{staticClass:"user-avatar",attrs:{size:30,src:t.row.avatar}})]}}])}),i("el-table-column",{attrs:{prop:"username",align:"center",label:"用户",width:"200"}})],1)],1)])])])])],1)])},s=[],l={data:function(){return{historyInfo:{}}},computed:{},watch:{},created:function(){this.getHistoryInfo()},mounted:function(){},methods:{getHistoryInfo:function(){var t=this;this.$http.get(this.$constant.baseURL+"/webInfo/getHistoryInfo",{},!0).then((function(a){t.$common.isEmpty(a.data)||(t.historyInfo=a.data)})).catch((function(a){t.$message({message:a.message,type:"error"})}))}}},n=l,r=(i("30ed"),i("2877")),o=Object(r["a"])(n,e,s,!1,null,"10646fb8",null);a["default"]=o.exports},fa61:function(t,a,i){}}]);