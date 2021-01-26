(this["webpackJsonpgroup-selection-app"]=this["webpackJsonpgroup-selection-app"]||[]).push([[0],{109:function(a,t,i){},110:function(a,t,i){},115:function(a,t,i){"use strict";i.r(t);var o=i(7),r=i(0),e=i.n(r),n=i(12),s=i.n(n),m=(i(109),i(110),i(8)),c=i(16),l=function(a,t,i){var o=0,r=25,e=100,n=110,s=.8*window.screen.width-n-r,m=s/2.5-o-e,l=[],g=function(a){for(var t=[],i=Object.keys(a[0]),o=0;o<a.length;o++)for(var r=1;r<i.length;r++)t.push({group:a[o].User,variable:i[r],value:a[o][i[r]]});return t}(a),u=c.e(t).append("svg").attr("width",s+n+r).attr("height",m+o+e).append("g").attr("transform","translate("+n+","+o+")"),p=c.c(g,(function(a){return a.group})).keys(),C=c.c(g,(function(a){return a.variable})).keys(),d=function(a){return a.replaceAll(" ","_")},h=c.d().range([0,s]).domain(p);u.append("g").style("font-size",12).attr("transform","translate(0,"+m+")").attr("transform","translate(0,"+m+")").call(c.a(h).tickSize(0)).select(".domain").remove(),u.selectAll("text").attr("transform","rotate(-45)").attr("text-anchor","end");var f=c.d().range([m,0]).domain(C);u.append("g").style("font-size",12).call(c.b(f).tickSize(0)).select(".domain").remove();var b=u.selectAll().data(g,(function(a){return a.group+":"+a.variable})).enter().append("g").attr("class",(function(a){return"".concat(d(a.variable)," ").concat(d(a.group))})).on("click",(function(t){var o=t.group,r=l.indexOf(o),e=r>-1;e?l.splice(r,1):l.push(o),c.f(".".concat(d(t.group))).selectAll("rect").style("opacity",e?.25:.9);var n=l.map((function(t){return a.find((function(a){return a.User===t}))}));i(n.length>0?n:a)})).on("mouseover",(function(a){u.selectAll("rect").style("opacity",.25),u.selectAll(".".concat(d(a.variable))).selectAll("rect").style("opacity",.4),u.selectAll(".".concat(d(a.group))).selectAll("rect").style("opacity",.9),u.selectAll(".".concat(d(a.group))).selectAll("text").style("opacity",.9),c.e(this).style("opacity",1),l.forEach((function(a){c.f(".".concat(d(a))).selectAll("rect").style("opacity",.9),c.f(".".concat(d(a))).selectAll("text").style("opacity",1)}))})).on("mouseleave",(function(a){u.selectAll("rect").style("opacity",l.length<1?1:.25),u.selectAll(".".concat(d(a.group))).selectAll("text").style("opacity",0),c.e(this).style("opacity",1),l.forEach((function(a){c.f(".".concat(d(a))).selectAll("rect").style("opacity",.9),c.f(".".concat(d(a))).selectAll("text").style("opacity",1)}))}));b.append("rect").attr("x",(function(a){return h(a.group)})).attr("y",(function(a){return f(a.variable)})).attr("width",h.bandwidth()).attr("height",f.bandwidth()).style("fill",(function(a){return function(a){var t=["#004526","#006E3C","#008C51","#00A263","#00B072","#28C98C","#50DDA4","#78ECBB","#A0F7D1","#C8FEE5","#F0FFF8"];return t[t.length-1-a]}(a.value)})).style("stroke-width",4).style("stroke","none").style("opacity",1),b.append("text").attr("x",(function(a){return h(a.group)+h.bandwidth()/2})).attr("y",(function(a){return f(a.variable)+f.bandwidth()/2})).attr("text-anchor","middle").attr("dy",".35em").style("opacity",0).style("font-size","20px").style("fill","white").text((function(a){return a.value}))},g=function(a){var t=Object(r.useRef)(null),i=Object(r.useCallback)(l,[]);return Object(r.useLayoutEffect)((function(){(null===t||void 0===t?void 0:t.current)&&(0!==c.e(null===t||void 0===t?void 0:t.current).selectAll("svg").size()&&c.e(null===t||void 0===t?void 0:t.current).selectAll("svg").remove(),i(a.userData,t.current,a.setFilteredData))}),[i,a.setFilteredData,a.userData]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{class:"heatmapHead",children:[Object(o.jsxs)("div",{class:"titleBox",children:[Object(o.jsx)("h1",{children:"Student's skills"}),Object(o.jsx)("h3",{children:"Hover over the cells to see the specific skills of the student. Select one cell to add the student to the group list."})]}),Object(o.jsxs)("div",{className:"keyBox",children:[Object(o.jsx)("h5",{children:"Key"}),Object(o.jsx)("div",{className:"keyColor"}),Object(o.jsxs)("div",{className:"keyLegend",children:[Object(o.jsx)("p",{children:"Less skilled"}),Object(o.jsx)("p",{children:"More skilled"})]})]})]}),Object(o.jsx)("div",{ref:t})]})},u=i(62),p=i(51),C=i(77),d=Object(p.a)({table:{minWidth:"700px",backgroundColor:"#21242c",color:"white!important",height:"400px",width:"1300px",marginTop:"50px",marginLeft:"10px"}}),h=function(a){var t=Object.keys(a.userData[0]).map((function(a){return{field:a,headerName:a}})),i=a.userData.map((function(a,t){return Object(u.a)(Object(u.a)({},a),{},{id:t})})),r=d();return Object(o.jsx)("div",{className:r.table,children:Object(o.jsx)(C.a,{rows:i,columns:t})})},f=function(a){var t=Object(r.useState)(a.userData),i=Object(m.a)(t,2),e=i[0],n=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{setFilteredData:n,userData:a.userData}),Object(o.jsx)(h,{userData:e})]})},b=i(80),y=function(a){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{children:"IVIS Group Formation"}),Object(o.jsx)("h5",{children:"A D3-based tool for Information Visualization group formation"})]}),Object(o.jsx)("div",{className:"App-body",children:Object(o.jsx)(f,{userData:b})}),Object(o.jsxs)("div",{className:"App-footer",children:["By ",Object(o.jsx)("a",{href:"https://github.com/guceda",children:"Gonzalo Uceda"})," & ",Object(o.jsx)("a",{href:"https://github.com/dvcarrillo",children:"David Vargas"})," for DH2321"]})]})},v=function(a){a&&a instanceof Function&&i.e(3).then(i.bind(null,166)).then((function(t){var i=t.getCLS,o=t.getFID,r=t.getFCP,e=t.getLCP,n=t.getTTFB;i(a),o(a),r(a),e(a),n(a)}))};s.a.render(Object(o.jsx)(e.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),v()},80:function(a){a.exports=JSON.parse('[{"User":"Monokuma","Information Vis":"3","Statistical":"3","Mathematics":"4","Drawing and artistic":"6","Computer usage":"8","Programming":"6","Computer graphics":"5","HCI programming":"3","UX evaluation":"3","Communication":"5","Collaboration":"5","Code repository":"5"},{"User":"NoobKiz","Information Vis":"7","Statistical":"7","Mathematics":"6","Drawing and artistic":"4","Computer usage":"8","Programming":"8","Computer graphics":"4","HCI programming":"7","UX evaluation":"5","Communication":"7","Collaboration":"7","Code repository":"9"},{"User":"Rella666","Information Vis":"6","Statistical":"5","Mathematics":"6","Drawing and artistic":"7","Computer usage":"6","Programming":"3","Computer graphics":"5","HCI programming":"5","UX evaluation":"3","Communication":"7","Collaboration":"7","Code repository":"2"},{"User":"Kropotkin42","Information Vis":"3","Statistical":"4","Mathematics":"5","Drawing and artistic":"8","Computer usage":"7","Programming":"4","Computer graphics":"4","HCI programming":"1","UX evaluation":"6","Communication":"9","Collaboration":"6","Code repository":"7"},{"User":"Kyrie11","Information Vis":"5","Statistical":"6","Mathematics":"4","Drawing and artistic":"4","Computer usage":"6","Programming":"6","Computer graphics":"3","HCI programming":"5","UX evaluation":"5","Communication":"5","Collaboration":"9","Code repository":"6"},{"User":"chiri","Information Vis":"5","Statistical":"2","Mathematics":"2","Drawing and artistic":"9","Computer usage":"7","Programming":"6","Computer graphics":"3","HCI programming":"6","UX evaluation":"4","Communication":"5","Collaboration":"5","Code repository":"9"},{"User":"Superwoman97","Information Vis":"2","Statistical":"3","Mathematics":"5","Drawing and artistic":"6","Computer usage":"7","Programming":"2","Computer graphics":"1","HCI programming":"3","UX evaluation":"6","Communication":"10","Collaboration":"5","Code repository":"4"},{"User":"cowboy55","Information Vis":"5","Statistical":"3","Mathematics":"5","Drawing and artistic":"5","Computer usage":"8","Programming":"6","Computer graphics":"3","HCI programming":"5","UX evaluation":"5","Communication":"10","Collaboration":"8","Code repository":"6"},{"User":"phips77","Information Vis":"3","Statistical":"6","Mathematics":"3","Drawing and artistic":"4","Computer usage":"5","Programming":"3","Computer graphics":"1","HCI programming":"1","UX evaluation":"6","Communication":"9","Collaboration":"8","Code repository":"6"},{"User":"Vis81","Information Vis":"3","Statistical":"5","Mathematics":"5","Drawing and artistic":"6","Computer usage":"7","Programming":"5","Computer graphics":"2","HCI programming":"4","UX evaluation":"3","Communication":"4","Collaboration":"7","Code repository":"6"},{"User":"Ellakingen","Information Vis":"3","Statistical":"1","Mathematics":"5","Drawing and artistic":"7","Computer usage":"7","Programming":"7","Computer graphics":"2","HCI programming":"2","UX evaluation":"2","Communication":"10","Collaboration":"5","Code repository":"5"},{"User":"Cinnamon-Bun","Information Vis":"3","Statistical":"5","Mathematics":"7","Drawing and artistic":"4","Computer usage":"9","Programming":"6","Computer graphics":"2","HCI programming":"3","UX evaluation":"1","Communication":"8","Collaboration":"7","Code repository":"7"},{"User":"Lapalus ","Information Vis":"6","Statistical":"6","Mathematics":"5","Drawing and artistic":"9","Computer usage":"8","Programming":"8","Computer graphics":"4","HCI programming":"6","UX evaluation":"8","Communication":"7","Collaboration":"8","Code repository":"6"},{"User":"_4LB4","Information Vis":"3","Statistical":"3","Mathematics":"5","Drawing and artistic":"7","Computer usage":"7","Programming":"5","Computer graphics":"2","HCI programming":"5","UX evaluation":"5","Communication":"7","Collaboration":"8","Code repository":"5"},{"User":"Ray Primary","Information Vis":"4","Statistical":"4","Mathematics":"8","Drawing and artistic":"6","Computer usage":"9","Programming":"7","Computer graphics":"5","HCI programming":"3","UX evaluation":"2","Communication":"9","Collaboration":"7","Code repository":"7"},{"User":"papi33","Information Vis":"1","Statistical":"1","Mathematics":"2","Drawing and artistic":"8","Computer usage":"4","Programming":"3","Computer graphics":"1","HCI programming":"1","UX evaluation":"2","Communication":"1","Collaboration":"4","Code repository":"3"},{"User":"Mustang22","Information Vis":"3","Statistical":"4","Mathematics":"6","Drawing and artistic":"7","Computer usage":"7","Programming":"5","Computer graphics":"2","HCI programming":"3","UX evaluation":"5","Communication":"7","Collaboration":"6","Code repository":"3"},{"User":"e4c6","Information Vis":"2","Statistical":"3","Mathematics":"4","Drawing and artistic":"1","Computer usage":"4","Programming":"3","Computer graphics":"3","HCI programming":"2","UX evaluation":"2","Communication":"6","Collaboration":"7","Code repository":"4"},{"User":"DancingTomato2","Information Vis":"2","Statistical":"4","Mathematics":"5","Drawing and artistic":"6","Computer usage":"8","Programming":"7","Computer graphics":"2","HCI programming":"2","UX evaluation":"1","Communication":"10","Collaboration":"8","Code repository":"7"},{"User":"Frogster","Information Vis":"3","Statistical":"1","Mathematics":"5","Drawing and artistic":"7","Computer usage":"7","Programming":"6","Computer graphics":"1","HCI programming":"4","UX evaluation":"4","Communication":"6","Collaboration":"6","Code repository":"6"},{"User":"swoop11","Information Vis":"3","Statistical":"6","Mathematics":"6","Drawing and artistic":"4","Computer usage":"8","Programming":"7","Computer graphics":"2","HCI programming":"4","UX evaluation":"6","Communication":"8","Collaboration":"8","Code repository":"10"},{"User":"Maximillianmus","Information Vis":"1","Statistical":"4","Mathematics":"4","Drawing and artistic":"6","Computer usage":"7","Programming":"6","Computer graphics":"5","HCI programming":"4","UX evaluation":"1","Communication":"4","Collaboration":"5","Code repository":"4"},{"User":"hexachord","Information Vis":"4","Statistical":"6","Mathematics":"7","Drawing and artistic":"4","Computer usage":"8","Programming":"8","Computer graphics":"5","HCI programming":"4","UX evaluation":"4","Communication":"7","Collaboration":"7","Code repository":"8"},{"User":"Mark Hamill","Information Vis":"2","Statistical":"2","Mathematics":"3","Drawing and artistic":"2","Computer usage":"6","Programming":"3","Computer graphics":"3","HCI programming":"4","UX evaluation":"3","Communication":"8","Collaboration":"7","Code repository":"1"},{"User":"Spike123","Information Vis":"5","Statistical":"7","Mathematics":"8","Drawing and artistic":"7","Computer usage":"8","Programming":"7","Computer graphics":"1","HCI programming":"1","UX evaluation":"5","Communication":"7","Collaboration":"7","Code repository":"7"},{"User":"sejfz","Information Vis":"1","Statistical":"3","Mathematics":"6","Drawing and artistic":"10","Computer usage":"9","Programming":"6","Computer graphics":"5","HCI programming":"6","UX evaluation":"7","Communication":"3","Collaboration":"6","Code repository":"6"},{"User":"Lol123","Information Vis":"1","Statistical":"2","Mathematics":"4","Drawing and artistic":"1","Computer usage":"3","Programming":"2","Computer graphics":"1","HCI programming":"1","UX evaluation":"2","Communication":"6","Collaboration":"5","Code repository":"1"},{"User":"Pencil12","Information Vis":"6","Statistical":"5","Mathematics":"6","Drawing and artistic":"7","Computer usage":"8","Programming":"6","Computer graphics":"2","HCI programming":"5","UX evaluation":"4","Communication":"8","Collaboration":"7","Code repository":"6"},{"User":"Jericho","Information Vis":"5","Statistical":"5","Mathematics":"6","Drawing and artistic":"4","Computer usage":"6","Programming":"6","Computer graphics":"5","HCI programming":"3","UX evaluation":"2","Communication":"3","Collaboration":"5","Code repository":"4"},{"User":"no one","Information Vis":"3","Statistical":"6","Mathematics":"8","Drawing and artistic":"1","Computer usage":"8","Programming":"8","Computer graphics":"7","HCI programming":"3","UX evaluation":"1","Communication":"5","Collaboration":"5","Code repository":"5"},{"User":"C3I2","Information Vis":"6","Statistical":"9","Mathematics":"6","Drawing and artistic":"2","Computer usage":"8","Programming":"6","Computer graphics":"5","HCI programming":"6","UX evaluation":"7","Communication":"8","Collaboration":"6","Code repository":"6"},{"User":"Monsterhunter98","Information Vis":"4","Statistical":"4","Mathematics":"6","Drawing and artistic":"4","Computer usage":"7","Programming":"7","Computer graphics":"4","HCI programming":"4","UX evaluation":"4","Communication":"6","Collaboration":"6","Code repository":"6"},{"User":"raspberry666","Information Vis":"1","Statistical":"3","Mathematics":"6","Drawing and artistic":"3","Computer usage":"7","Programming":"6","Computer graphics":"5","HCI programming":"6","UX evaluation":"2","Communication":"8","Collaboration":"7","Code repository":"3"},{"User":"User14","Information Vis":"3","Statistical":"5","Mathematics":"5","Drawing and artistic":"5","Computer usage":"8","Programming":"5","Computer graphics":"3","HCI programming":"6","UX evaluation":"6","Communication":"10","Collaboration":"8","Code repository":"4"},{"User":"solarpunk","Information Vis":"4","Statistical":"3","Mathematics":"5","Drawing and artistic":"9","Computer usage":"9","Programming":"5","Computer graphics":"5","HCI programming":"6","UX evaluation":"6","Communication":"10","Collaboration":"10","Code repository":"4"},{"User":"shuriken","Information Vis":"3","Statistical":"3","Mathematics":"3","Drawing and artistic":"3","Computer usage":"7","Programming":"7","Computer graphics":"3","HCI programming":"3","UX evaluation":"3","Communication":"7","Collaboration":"4","Code repository":"10"},{"User":"seed2","Information Vis":"3","Statistical":"5","Mathematics":"5","Drawing and artistic":"3","Computer usage":"7","Programming":"3","Computer graphics":"1","HCI programming":"3","UX evaluation":"3","Communication":"7","Collaboration":"8","Code repository":"1"},{"User":"Unchain","Information Vis":"1","Statistical":"2","Mathematics":"2","Drawing and artistic":"9","Computer usage":"9","Programming":"9","Computer graphics":"5","HCI programming":"7","UX evaluation":"1","Communication":"9","Collaboration":"9","Code repository":"7"},{"User":"AGreatAlias19","Information Vis":"1","Statistical":"2","Mathematics":"5","Drawing and artistic":"7","Computer usage":"7","Programming":"2","Computer graphics":"1","HCI programming":"3","UX evaluation":"6","Communication":"10","Collaboration":"8","Code repository":"2"},{"User":"ratponto","Information Vis":"6","Statistical":"8","Mathematics":"8","Drawing and artistic":"7","Computer usage":"9","Programming":"7","Computer graphics":"5","HCI programming":"7","UX evaluation":"6","Communication":"6","Collaboration":"7","Code repository":"7"},{"User":"Banana","Information Vis":"2","Statistical":"3","Mathematics":"7","Drawing and artistic":"3","Computer usage":"8","Programming":"5","Computer graphics":"1","HCI programming":"2","UX evaluation":"2","Communication":"10","Collaboration":"9","Code repository":"7"},{"User":"JoHa","Information Vis":"6","Statistical":"9","Mathematics":"9","Drawing and artistic":"8","Computer usage":"9","Programming":"8","Computer graphics":"7","HCI programming":"6","UX evaluation":"6","Communication":"7","Collaboration":"6","Code repository":"9"},{"User":"ginger","Information Vis":"1","Statistical":"5","Mathematics":"8","Drawing and artistic":"5","Computer usage":"6","Programming":"10","Computer graphics":"6","HCI programming":"5","UX evaluation":"1","Communication":"1","Collaboration":"7","Code repository":"9"}]')}},[[115,1,2]]]);
//# sourceMappingURL=main.116ae990.chunk.js.map