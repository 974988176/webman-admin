import{c as o,fq as r,j as l}from"./index.0d073eaa.js";import{T as n}from"./index.e317a008.js";const{t}=o();function d(){return[{dataIndex:"type",title:t("sys.errorLog.tableColumnType"),width:80,customRender:({text:e})=>{const a=e===r.VUE?"green":e===r.RESOURCE?"cyan":e===r.PROMISE?"blue":r.AJAX?"red":"purple";return l(n,{color:a},{default:()=>e})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:t("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:t("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:t("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:t("sys.errorLog.tableColumnStackMsg")}]}function u(){return d().map(e=>({field:e.dataIndex,label:e.title}))}export{d as getColumns,u as getDescSchema};
