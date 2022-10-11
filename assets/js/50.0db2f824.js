(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{450:function(t,a,e){"use strict";e.r(a);var s=e(2),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-mongo的简单查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mongo的简单查询"}},[t._v("#")]),t._v(" 1. Mongo的简单查询")]),t._v(" "),a("h3",{attrs:{id:"_1-1-find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-find"}},[t._v("#")]),t._v(" 1.1 find")]),t._v(" "),a("blockquote",[a("p",[t._v("查找到所有匹配数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.集合名.find({条件文档})\ndb.student.find({"country":"魏国"})\n')])])]),a("h3",{attrs:{id:"_1-2-findone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-findone"}},[t._v("#")]),t._v(" 1.2 findOne")]),t._v(" "),a("blockquote",[a("p",[t._v("只返回匹配的第一个数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.集合名.findOne({条件文档})\ndb.student.findOne({"country":"魏国"})\n')])])]),a("h2",{attrs:{id:"_2-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-运算符"}},[t._v("#")]),t._v(" 2. 运算符")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("语法")]),t._v(" "),a("th",[t._v("操作")]),t._v(" "),a("th",[t._v("格式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$eq")]),t._v(" "),a("td",[t._v("等于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:<value>}")])])]),t._v(" "),a("tr",[a("td",[t._v("$lt")]),t._v(" "),a("td",[t._v("小于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:{$lt:<value>}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$lte")]),t._v(" "),a("td",[t._v("小于或等于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:{$lte:<value>}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$gt")]),t._v(" "),a("td",[t._v("大于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:{$gt:<value>}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$gte")]),t._v(" "),a("td",[t._v("大于或等于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:{$gte:<value>}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$ne")]),t._v(" "),a("td",[t._v("不等于")]),t._v(" "),a("td",[a("code",[t._v("{<key>:{$ne:<value>}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$or")]),t._v(" "),a("td",[t._v("或")]),t._v(" "),a("td",[a("code",[t._v("{$or:[{},{}]}")])])]),t._v(" "),a("tr",[a("td",[t._v("$in")]),t._v(" "),a("td",[t._v("在范围内")]),t._v(" "),a("td",[a("code",[t._v("{age:{$in:[val1,val2]}}")])])]),t._v(" "),a("tr",[a("td",[t._v("$nin")]),t._v(" "),a("td",[t._v("不在范围内")]),t._v(" "),a("td",[a("code",[t._v("{age:{$nin:[val1,val2]}}")])])])])]),t._v(" "),a("h3",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('db.student.find({age:{$gt:16}})\ndb.student.find({$or:[{name:"曹操"},{country:"蜀国"}]})\ndb.student.find({country:{$in:[\'蜀国\',\'吴国\']}})\ndb.student.find({$or:[{age:{$gte:18}},{name:"zs"}])\n')])])]),a("h2",{attrs:{id:"_3-模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-模糊匹配"}},[t._v("#")]),t._v(" 3. 模糊匹配")]),t._v(" "),a("blockquote",[a("p",[t._v("使用//或$regex编写正则表达式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.student.find({name:/^zs/})\ndb.student.find({name:{$regex:'^zs'}}})\n\n//查找包含 曹 字的\ndb.student.find({name:/曹/})\ndb.student.find({name:{$regex:\"曹\"}})\n")])])]),a("h2",{attrs:{id:"_4-自定义查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义查询"}},[t._v("#")]),t._v(" 4. 自定义查询")]),t._v(" "),a("blockquote",[a("p",[t._v("使用$where后面写一个函数，返回满足条件的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.student.find({$where:function(){return this.age>20}})\ndb.student.find({$where:function(){return this.country == '吴国'}})\n")])])]),a("h2",{attrs:{id:"_5-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-limit"}},[t._v("#")]),t._v(" 5. limit")]),t._v(" "),a("blockquote",[a("p",[t._v("用于读取指定数量的文档")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.集合名称.find().limit(NUMBER)\n")])])]),a("h2",{attrs:{id:"_6-skip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-skip"}},[t._v("#")]),t._v(" 6. skip")]),t._v(" "),a("blockquote",[a("p",[t._v("用于跳过指定数量的文档")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.集合名称.find().skip(2)\n")])])]),a("h2",{attrs:{id:"_7-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-sort"}},[t._v("#")]),t._v(" 7. sort")]),t._v(" "),a("blockquote",[a("p",[t._v("用于对结果集进行排序")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.集合名称.find().sort({字段:1,...})\n")])])]),a("ul",[a("li",[t._v("参数1为升序排列")]),t._v(" "),a("li",[t._v("参数-1为降序排列")])]),t._v(" "),a("h2",{attrs:{id:"_6-count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-count"}},[t._v("#")]),t._v(" 6. count")]),t._v(" "),a("blockquote",[a("p",[t._v("用于统计结果集中文档条数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("db.集合名称.find({条件}).count()\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);