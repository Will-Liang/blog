(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{483:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入"}},[t._v("#")]),t._v(" 1. 引入")]),t._v(" "),s("blockquote",[s("p",[t._v("我们之前写的爬虫都是单个线程的？这怎么够？一旦一个地方卡到不动了，那不就永远等待下去了？为此我们可以使用多线程或者多进程来处理。")])]),t._v(" "),s("blockquote",[s("p",[t._v("不建议你用这个，不过还是介绍下了，如果想看可以看看下面，不想浪费时间直接看")])]),t._v(" "),s("h2",{attrs:{id:"_2-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用"}},[t._v("#")]),t._v(" 2. 如何使用")]),t._v(" "),s("blockquote",[s("p",[t._v("爬虫使用多线程来处理网络请求，使用线程来处理URL队列中的url，然后将url返回的结果保存在另一个队列中，其它线程在读取这个队列中的数据，然后写到文件中去")])]),t._v(" "),s("h2",{attrs:{id:"_3-主要组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-主要组成部分"}},[t._v("#")]),t._v(" 3. 主要组成部分")]),t._v(" "),s("h3",{attrs:{id:"_3-1-url队列和结果队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-url队列和结果队列"}},[t._v("#")]),t._v(" 3.1 URL队列和结果队列")]),t._v(" "),s("p",[t._v("将将要爬去的url放在一个队列中，这里使用标准库Queue。访问url后的结果保存在结果队列中")]),t._v(" "),s("p",[t._v("初始化一个URL队列")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" queue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Queue\nurls_queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nout_queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-请求线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-请求线程"}},[t._v("#")]),t._v(" 3.2 请求线程")]),t._v(" "),s("p",[t._v("使用多个线程，不停的取URL队列中的url，并进行处理：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadCrawl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" out_queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_queue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" out_queue\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果队列为空，线程就会被阻塞，直到队列不为空。处理队列中的一条数据后，就需要通知队列已经处理完该条数据")]),t._v(" "),s("h3",{attrs:{id:"_3-3-处理线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-处理线程"}},[t._v("#")]),t._v(" 3.3 处理线程")]),t._v(" "),s("p",[t._v("处理结果队列中的数据，并保存到文件中。如果使用多个线程的话，必须要给文件加上锁")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("lock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" codecs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'out.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("当线程需要写入文件的时候，可以这样处理：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-queue模块中的常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-queue模块中的常用方法"}},[t._v("#")]),t._v(" 4. Queue模块中的常用方法")]),t._v(" "),s("p",[t._v("Python的Queue模块中提供了同步的、线程安全的队列类，包括FIFO（先入先出)队列Queue，LIFO（后入先出）队列LifoQueue，和优先级队列PriorityQueue。这些队列都实现了锁原语，能够在多线程中直接使用。可以使用队列来实现线程间的同步")]),t._v(" "),s("ul",[s("li",[t._v("Queue.qsize() 返回队列的大小")]),t._v(" "),s("li",[t._v("Queue.empty() 如果队列为空，返回True,反之False")]),t._v(" "),s("li",[t._v("Queue.full() 如果队列满了，返回True,反之False")]),t._v(" "),s("li",[t._v("Queue.full 与 maxsize 大小对应")]),t._v(" "),s("li",[t._v("Queue.get([block[, timeout]])获取队列，timeout等待时间")]),t._v(" "),s("li",[t._v("Queue.get_nowait() 相当Queue.get(False)")]),t._v(" "),s("li",[t._v("Queue.put(item) 写入队列，timeout等待时间")]),t._v(" "),s("li",[t._v("Queue.put_nowait(item) 相当Queue.put(item, False)")]),t._v(" "),s("li",[t._v("Queue.task_done() 在完成一项工作之后，Queue.task_done()函数向任务已经完成的队列发送一个信号")]),t._v(" "),s("li",[t._v("Queue.join() 实际上意味着等到队列为空，再执行别的操作")])])])}),[],!1,null,null,null);s.default=n.exports}}]);