import{u as o}from"./useECharts.2ee81223.js";import{aP as l,a as s,r,H as i,o as n,h as f,bc as c}from"./index.0d073eaa.js";const h=s({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=r(null),{setOptions:u}=o(e),t=[389,259,262,324,232,176,196,214,133,370],a=["\u539F\u56E01","\u539F\u56E02","\u539F\u56E03","\u539F\u56E04","\u539F\u56E05","\u539F\u56E06","\u539F\u56E07","\u539F\u56E08","\u539F\u56E09","\u539F\u56E010"];return i(()=>{u({backgroundColor:"#0f375f",title:[{text:"\u5404\u6E20\u9053\u6295\u8BC9\u5360\u6BD4",left:"2%",top:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"\u6295\u8BC9\u539F\u56E0TOP10",left:"40%",top:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"\u5404\u7EA7\u522B\u6295\u8BC9\u5360\u6BD4",left:"2%",top:"50%",textStyle:{color:"#fff",fontSize:14}}],grid:[{left:"50%",top:"7%",width:"45%",height:"90%"}],tooltip:{formatter:"{b} ({c})"},xAxis:[{gridIndex:0,axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisLine:{show:!1}}],yAxis:[{gridIndex:0,interval:0,data:a.reverse(),axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#6173a3"}}}],series:[{name:"\u5404\u6E20\u9053\u6295\u8BC9\u5360\u6BD4",type:"pie",radius:"30%",center:["22%","25%"],data:[{value:335,name:"\u5BA2\u670D\u7535\u8BDD"},{value:310,name:"\u5965\u8FEA\u5B98\u7F51"},{value:234,name:"\u5A92\u4F53\u66DD\u5149"},{value:135,name:"\u8D28\u68C0\u603B\u5C40"},{value:105,name:"\u5176\u4ED6"}],labelLine:{show:!1},label:{show:!0,formatter:`{b} 
 ({d}%)`,color:"#B1B9D3"}},{name:"\u5404\u7EA7\u522B\u6295\u8BC9\u5360\u6BD4",type:"pie",radius:"30%",center:["22%","75%"],labelLine:{show:!1},data:[{value:335,name:"A\u7EA7"},{value:310,name:"B\u7EA7"},{value:234,name:"C\u7EA7"},{value:135,name:"D\u7EA7"}],label:{show:!0,formatter:`{b} 
 ({d}%)`,color:"#B1B9D3"}},{name:"\u6295\u8BC9\u539F\u56E0TOP10",type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth:"45%",itemStyle:{color:"#86c9f4"},label:{show:!0,position:"right",color:"#9EA7C4"},data:t.sort()}]})}),{chartRef:e}}});function d(e,u,t,a,p,x){return n(),f("div",{ref:"chartRef",style:c({height:e.height,width:e.width})},null,4)}var B=l(h,[["render",d]]);export{B as default};
