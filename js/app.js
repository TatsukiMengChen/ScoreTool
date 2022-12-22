groups = [
    [
        [1, "肖泽进"],
        [26, "余名华"],
        [34, "王永昌"],
        [35, "张仕宇"],
        [53, "吴姗"],
        [62, "刘熙昌"]
    ],
    [
        [3, "周飞洋"],
        [25, "胡可珂"],
        [30, "邱宛彦"],
        [32, "黄辉亮"],
        [36, "廖英胜"],
        [59, "王彦"]
    ],
    [
        [5, "赖靖"],
        [24, "李贞贤"],
        [31, "何依帆"],
        [33, "钟晓萍"],
        [38, "邱敬方"],
        [58, "邱泓毅"]
    ],
    [
        [6, "张文华"],
        [23, "蓝琳娜"],
        [28, "刘文军"],
        [40, "谢金花"],
        [49, "陈佳涛"],
        [57, "朱智源"]
    ],
    [
        [7, "林星浩"],
        [21, "曹伊彤"],
        [22, "吴俊杰"],
        [39, "罗干"],
        [46, "刘艳玲"],
        [55, "吴国亮"]
    ],
    [
        [10, "林志阳"],
        [19, "刘赞龙"],
        [20, "邹子宇"],
        [41, "曾瑞明"],
        [50, "蓝易方"],
        [54, "刘欣宇"]
    ],
    [
        [9, "刘胜男"],
        [11, "黎殊涵"],
        [18, "陈鸿杰"],
        [42, "杨国才"],
        [52, "王伟博"],
        [61, "杨璟"]
    ],
    [
        [8, "谢家怡"],
        [12, "李亚楠"],
        [17, "刘玉忠"],
        [27, "王语燕"],
        [43, "李晨泉"],
        [37, "杨文壮"]
    ],
    [
        [4, "刘永红"],
        [13, "李威"],
        [16, "李云龙"],
        [44, "袁若平"],
        [48, "刘鹏"],
        [56, "邱敬惠"]
    ],
    [
        [2, "刘素菲"],
        [14, "赖睿涵"],
        [15, "钟祖军"],
        [29, "施慧君"],
        [45, "施纹佩"],
        [47, "黄景基"],
        [51, "王信枝"],
        [60, "赖彦如"]
    ]
]

numbers = [
    [1, "肖泽进"],
    [2, "刘素菲"],
    [3, "周飞洋"],
    [4, "刘永红"],
    [5, "赖靖"],
    [6, "张文华"],
    [7, "林星浩"],
    [8, "谢家怡"],
    [9, "刘胜男"],
    [10, "林志阳"],
    [11, "黎殊涵"],
    [12, "李亚楠"],
    [13, "李威"],
    [14, "赖睿涵"],
    [15, "钟祖军"],
    [16, "李云龙"],
    [17, "刘玉忠"],
    [18, "陈鸿杰"],
    [19, "刘赞龙"],
    [20, "邹子宇"],
    [21, "曹伊彤"],
    [22, "吴俊杰"],
    [23, "蓝琳娜"],
    [24, "李贞贤"],
    [25, "胡可珂"],
    [26, "余名华"],
    [27, "王语燕"],
    [28, "刘文军"],
    [29, "施慧君"],
    [30, "邱宛彦"],
    [31, "何依帆"],
    [32, "黄辉亮"],
    [33, "钟晓萍"],
    [34, "王永昌"],
    [35, "张仕宇"],
    [36, "廖英胜"],
    [37, "杨文壮"],
    [38, "邱敬方"],
    [39, "罗干"],
    [40, "谢金花"],
    [41, "曾瑞明"],
    [42, "杨国才"],
    [43, "李晨泉"],
    [44, "袁若平"],
    [45, "施纹佩"],
    [46, "刘艳玲"],
    [47, "黄景基"],
    [48, "刘鹏"],
    [49, "陈佳涛"],
    [50, "蓝易方"],
    [51, "王信枝"],
    [52, "王伟博"],
    [53, "吴姗"],
    [54, "刘欣宇"],
    [55, "吴国亮"],
    [56, "邱敬惠"],
    [57, "朱智源"],
    [58, "邱泓毅"],
    [59, "王彦"],
    [60, "赖彦如"],
    [61, "杨璟"],
    [62, "刘熙昌"]
]

types = [
    ["语文", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["数学", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["英语", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["物理", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["化学", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["生物", ["未完成作业", "作业优秀", "课堂加分", "考试第一", "考试倒一"]],
    ["考试", ["考试第一", "考试倒一"]],
    ["读书", ["读书大声", "读书没声音", "听写/默写不配合"]],
    ["贡献"],
    ["违纪", ["迟到", "上课打瞌睡", "打闹"]],
    ["好人好事", []],
    ["其它", ["未抬水"]]
]

type_val = 0
info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
temp_logs = []
logs = JSON.parse(localStorage.getItem("GroupScore.Logs"));
if (logs == null) {
    logs = [{
		"update": "20221222",
		"title": "寒假小组积分",
		"time": 3,
		"group": -1,
		"number": -1,
		"score": 0,
		"type": "",
		"desc": "",
		"date": ""
	}]
}
backup_logs = logs.concat()
tasks = JSON.parse(localStorage.getItem("GroupScore.Tasks"));
if (tasks == null) {
    tasks = [{ "number": 1, "name": "肖泽进", "task": 0 },
        { "number": 2, "name": "刘素菲", "task": 0 },
        { "number": 3, "name": "周飞洋", "task": 0 },
        { "number": 4, "name": "刘永红", "task": 0 },
        { "number": 5, "name": "赖靖", "task": 0 },
        { "number": 6, "name": "张文华", "task": 0 },
        { "number": 7, "name": "林星浩", "task": 0 },
        { "number": 8, "name": "谢家怡", "task": 0 },
        { "number": 9, "name": "刘胜男", "task": 0 },
        { "number": 10, "name": "林志阳", "task": 0 },
        { "number": 11, "name": "黎殊涵", "task": 0 },
        { "number": 12, "name": "李亚楠", "task": 0 },
        { "number": 13, "name": "李威", "task": 0 },
        { "number": 14, "name": "赖睿涵", "task": 0 },
        { "number": 15, "name": "钟祖军", "task": 0 },
        { "number": 16, "name": "李云龙", "task": 0 },
        { "number": 17, "name": "刘玉忠", "task": 0 },
        { "number": 18, "name": "陈鸿杰", "task": 0 },
        { "number": 19, "name": "刘赞龙", "task": 0 },
        { "number": 20, "name": "邹子宇", "task": 0 },
        { "number": 21, "name": "曹伊彤", "task": 0 },
        { "number": 22, "name": "吴俊杰", "task": 0 },
        { "number": 23, "name": "蓝琳娜", "task": 0 },
        { "number": 24, "name": "李贞贤", "task": 0 },
        { "number": 25, "name": "胡可珂", "task": 0 },
        { "number": 26, "name": "余名华", "task": 0 },
        { "number": 27, "name": "王语燕", "task": 0 },
        { "number": 28, "name": "刘文军", "task": 0 },
        { "number": 29, "name": "施慧君", "task": 0 },
        { "number": 30, "name": "邱宛彦", "task": 0 },
        { "number": 31, "name": "何依帆", "task": 0 },
        { "number": 32, "name": "黄辉亮", "task": 0 },
        { "number": 33, "name": "钟晓萍", "task": 0 },
        { "number": 34, "name": "王永昌", "task": 0 },
        { "number": 35, "name": "张仕宇", "task": 0 },
        { "number": 36, "name": "廖英胜", "task": 0 },
        { "number": 37, "name": "杨文壮", "task": 0 },
        { "number": 38, "name": "邱敬方", "task": 0 },
        { "number": 39, "name": "罗干", "task": 0 },
        { "number": 40, "name": "谢金花", "task": 0 },
        { "number": 41, "name": "曾瑞明", "task": 0 },
        { "number": 42, "name": "杨国才", "task": 0 },
        { "number": 43, "name": "李晨泉", "task": 0 },
        { "number": 44, "name": "袁若平", "task": 0 },
        { "number": 45, "name": "施纹佩", "task": 0 },
        { "number": 46, "name": "刘艳玲", "task": 0 },
        { "number": 47, "name": "黄景基", "task": 0 },
        { "number": 48, "name": "刘鹏", "task": 0 },
        { "number": 49, "name": "陈佳涛", "task": 0 },
        { "number": 50, "name": "蓝易方", "task": 0 },
        { "number": 51, "name": "王信枝", "task": 0 },
        { "number": 52, "name": "王伟博", "task": 0 },
        { "number": 53, "name": "吴姗", "task": 0 },
        { "number": 54, "name": "刘欣宇", "task": 0 },
        { "number": 55, "name": "吴国亮", "task": 0 },
        { "number": 56, "name": "邱敬惠", "task": 0 },
        { "number": 57, "name": "朱智源", "task": 0 },
        { "number": 58, "name": "邱泓毅", "task": 0 },
        { "number": 59, "name": "王彦", "task": 0 },
        { "number": 60, "name": "赖彦如", "task": 0 },
        { "number": 61, "name": "杨璟", "task": 0 },
        { "number": 62, "name": "刘熙昌", "task": 0 }
    ]
}

//小组区
//初始化小组UI
function GroupMode() {
    $("#groups").empty()
    $("#analyse").empty()
    $("#fix").empty()
    $("#task").empty()
    $("#analyse").css("display", "none")
    $("#fix").css("display", "none")
    $("#task").css("display", "none")
    $("#groups").css("display", "block")
    $("#fix-submit").css("display", "none")
    $("#task-submit").css("display", "none")
    $("#submit").css("display", "block")
    for (i in groups) {
        n = Number(i) + 1
        $("#groups").append(`<div class="group" group=${n} id="group${n}"></div>`)
        $(`#group${n}`).append(`<div class="group-name ripple" group=${n}><strong>第${n}组</strong></div>`)
        for (j in groups[i]) {
            $(`#group${n}`).append(`<div class="name ripple" group=${n} number=${groups[i][j][0]}>${groups[i][j][1]}</div>`)
        }
    }
}
GroupMode()
$("#score-mode").click(function() {
    GroupMode()
})

//分析区
//初始化分析UI
function AnalyseMode() {
    $("#groups").empty()
    $("#analyse").empty()
    $("#fix").empty()
    $("#task").empty()
    $("#groups").css("display", "none")
    $("#fix").css("display", "none")
    $("#analyse").css("display", "block")
    $("#task").css("display", "none")
    $("#fix-submit").css("display", "none")
    $("#task-submit").css("display", "none")
    $("#submit").css("display", "block")
    for (i in groups) {
        n = Number(i) + 1
        group_score = 0
        for (j in logs) {
            if (logs[j].group == n) {
                if (!logs[j].desc.includes("未完成作业")) {
                    group_score = group_score + logs[j].score
                }
            }
        }
        $("#analyse").append(`<div class="group" group=${n} id="group${n}"></div>`)
        $(`#group${n}`).append(`<div class="group-name ripple" group=${n}><strong>第${n}组</strong> | ${group_score}</div>`)
        for (j in groups[i]) {
            student_score = 0
            for (k in logs) {
                if (logs[k].number == groups[i][j][0]) {
                    student_score = student_score + logs[k].score
                }
            }
            $(`#group${n}`).append(`<div class="name ripple" group=${n} number=${groups[i][j][0]}>${groups[i][j][1]} | ${student_score}</div>`)
        }
    }
}

$("#analyse-mode").click(function() {
    AnalyseMode()
})

//修正UI
function FixMode() {
    $("#groups").empty()
    $("#analyse").empty()
    $("#fix").empty()
    $("#task").empty()
    $("#groups").css("display", "none")
    $("#analyse").css("display", "none")
    $("#fix").css("display", "block")
    $("#task").css("display", "none")
    $("#task-submit").css("display", "none")
    $("#submit").css("display", "none")
    //$("#fix").append('<img style="margin-top:160px;" src="./images/developing.png">')
    for (i in temp_logs) {
        console.log(temp_logs[i].number)
        $("#fix").append(`
        <div class="fix-tab ripple" id="fix-tab${i}" value=${i}>
            <div class="fix-keyword">${temp_logs[i].number}</div>
        </div>
        `)
        if (temp_logs[i].number == 0) {

            $(`#fix-tab${i}`).append(`
            <div class="fix-keyword">第${temp_logs[i].group}组</div>
        `)
        } else {
            $(`#fix-tab${i}`).append(`
            <div class="fix-keyword">${numbers[temp_logs[i].number-1][1]}</div>
        `)
        }
        $(`#fix-tab${i}`).append(`
            <div class="fix-keyword">${temp_logs[i].score}</div>
            <div class="fix-keyword">${temp_logs[i].type}</div>
            <div class="fix-keyword">${temp_logs[i].desc}</div>
            <div class="fix-keyword">${temp_logs[i].date}</div>
            <div class="fix-delete ripple" value=${i}>×</div>
            `)
    }
}

$("#fix-mode").click(function() {
    FixMode()
})

$("#fix").on("click", ".fix-tab", function() {
    $("#fix-submit").css("display", "block")
    n = Number($(this).attr("value"))
    fix_value = Number($(this).attr("value"))
    $("#edit-score").text(temp_logs[n].score)
    $("#edit-type").text(temp_logs[n].type)
    $("#edit-desc").text(temp_logs[n].desc)
    fix_info = {
        group: temp_logs[n].group,
        number: temp_logs[n].number,
    }
    info.group = temp_logs[n].group
    info.number = temp_logs[n].number
    if (temp_logs[n].number == 0) {
        info.name = `第${temp_logs[n].group}组`
    } else {
        info.name = numbers[temp_logs[n].number - 1][1]
    }
    preview()
})

$("#fix").on("click", ".fix-delete", function() {
    event.preventDefault()
    temp_logs.splice(Number($(this).attr("value")), 1)
    logs = []
    logs = logs.concat(backup_logs)
    logs = logs.concat(temp_logs)
    localStorage.setItem("GroupScore.Logs", JSON.stringify(logs));
    $.growl.notice({ title: "", message: "删除成功", size: "small" });
    FixMode()
    preview()
    return false
})

function TaskPreview() {
    info.group_score = 0
    info.score = 0
    info.add = 0
    info.sub = 0
    for (i in logs) {
        if (logs[i].group == info.group) {
            info.group_score = info.group_score + logs[i].score
        }
    }
    $("#table").empty()
    $("#table").append(`<tr>
                    <th>座号</th>
                    <th>姓名</th>
                    <th>积分</th>
                    <th>类型</th>
                    <th>描述</th>
                    <th>日期</th>
                </tr>`)
    if (info.number == 0) {
        for (i in logs) {
            n = logs.length - i - 1
            if (logs[n].group == info.group) {
                info.score = info.score + logs[n].score
                if (logs[n].score >= 0) {
                    info.add = info.add + logs[n].score
                } else {
                    info.sub = info.sub + logs[n].score
                }
                if (logs[n].number == 0) {
                    $("#table").append(`
                <tr>
                    <td class="table-number"></td>
                    <td class="table-name">第${logs[n].group}组</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)

                } else {

                    if (!logs[n].desc.includes("未完成作业")) {
                        $("#table").append(`
                <tr>
                    <td class="table-number">${logs[n].number}</td>
                    <td class="table-name">${numbers[logs[n].number-1][1]}</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)
                    }
                }

            }
        }
    } else {
        for (i in logs) {
            n = logs.length - i - 1
            if (logs[n].number == info.number) {
                info.score = info.score + logs[n].score
                if (logs[n].score >= 0) {
                    info.add = info.add + logs[n].score
                } else {
                    info.sub = info.sub + logs[n].score
                }
                if (logs[i].desc.includes("未完成作业") || logs[i].desc.includes("迟到")) {
                    $("#table").append(`
                <tr>
                    <td class="table-number">${logs[n].number}</td>
                    <td class="table-name">${numbers[logs[n].number-1][1]}</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)
                }
            }
        }
    }

    $("#pre-group-name").text(`第${info.group}组`)
    $("#pre-group-score").text(info.group_score)
    $("#pre-student-name").text(info.name)
    $("#pre-student-number").text(info.number)
    $("#pre-student-score").text(info.score)
    $("#pre-student-add").text(info.add)
    $("#pre-student-sub").text(info.sub)
    $("#tab").height($("#preview").height() - 330)
}

function TaskMode() {
    $("#groups").empty()
    $("#analyse").empty()
    $("#fix").empty()
    $("#task").empty()
    $("#groups").css("display", "none")
    $("#fix").css("display", "none")
    $("#analyse").css("display", "none")
    $("#task").css("display", "block")
    $("#fix-submit").css("display", "none")
    $("#task-submit").css("display", "block")
    $("#submit").css("display", "none")
    for (i in groups) {
        n = Number(i) + 1
        group_score = 0
        $("#task").append(`<div class="group" group=${n} id="group${n}"></div>`)
        $(`#group${n}`).append(`<div class="group-name ripple" group=${n}><strong>第${n}组</strong></div>`)
        for (j in groups[i]) {
            student_score = 0
            for (k in logs) {
                if (logs[k].desc.includes("未完成作业") || logs[k].desc.includes("迟到")) {

                    if (logs[k].number == groups[i][j][0]) {
                        student_score = student_score + logs[k].score
                    }
                }
            }
            student_score = student_score + tasks[groups[i][j][0] - 1].task
            $(`#group${n}`).append(`<div class="name ripple" group=${n} number=${groups[i][j][0]}>${groups[i][j][1]} | ${student_score}</div>`)
        }
    }
}

$("#task-mode").click(function() {
    TaskMode()
})

//选择学生
$("#groups").on("click", ".name", function() {
    info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
    info.group = Number($(this).attr("group"))
    info.number = Number($(this).attr("number"))
    info.name = $(this).text()
    preview()
})
$("#analyse").on("click", ".name", function() {
    info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
    info.group = Number($(this).attr("group"))
    info.number = Number($(this).attr("number"))
    info.name = $(this).text()
    preview()
})
$("#task").on("click", ".name", function() {
    info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
    info.group = Number($(this).attr("group"))
    info.number = Number($(this).attr("number"))
    info.name = $(this).text()
    preview()
})
//选择小组
$("#groups").on("click", ".group-name", function() {
    info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
    info.group = Number($(this).attr("group"))
    info.number = 0
    info.name = $(this).text()
    preview()
})

$("#analyse").on("click", ".group-name", function() {
    info = { group: 0, group_score: 0, name: "张三", number: 0, score: 0, add: 0, sub: 0 }
    info.group = Number($(this).attr("group"))
    info.number = 0
    info.name = $(this).text()
    preview()
})

//预览区
//group,number,score,type,desc,date
function preview() {
    info.group_score = 0
    info.score = 0
    info.add = 0
    info.sub = 0
    for (i in logs) {
        if (logs[i].group == info.group) {
            info.group_score = info.group_score + logs[i].score
        }
    }
    $("#table").empty()
    $("#table").append(`<tr>
                    <th>座号</th>
                    <th>姓名</th>
                    <th>积分</th>
                    <th>类型</th>
                    <th>描述</th>
                    <th>日期</th>
                </tr>`)
    if (info.number == 0) {
        for (i in logs) {
            n = logs.length - i - 1
            if (logs[n].group == info.group) {
                info.score = info.score + logs[n].score
                if (logs[n].score >= 0) {
                    info.add = info.add + logs[n].score
                } else {
                    info.sub = info.sub + logs[n].score
                }
                if (logs[n].number == 0) {
                    $("#table").append(`
                <tr>
                    <td class="table-number"></td>
                    <td class="table-name">第${logs[n].group}组</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)

                } else {

                    if (!logs[n].desc.includes("未完成作业")) {
                        $("#table").append(`
                <tr>
                    <td class="table-number">${logs[n].number}</td>
                    <td class="table-name">${numbers[logs[n].number-1][1]}</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)
                    }
                }

            }
        }
    } else {
        for (i in logs) {
            n = logs.length - i - 1
            if (logs[n].number == info.number) {
                info.score = info.score + logs[n].score
                if (logs[n].score >= 0) {
                    info.add = info.add + logs[n].score
                } else {
                    info.sub = info.sub + logs[n].score
                }

                $("#table").append(`
                <tr>
                    <td class="table-number">${logs[n].number}</td>
                    <td class="table-name">${numbers[logs[n].number-1][1]}</td>
                    <td class="table-score">${logs[n].score}</td>
                    <td class="table-type">${logs[n].type}</td>
                    <td class="table-desc">${logs[n].desc}</td>
                    <td class="table-date">${logs[n].date}</td>
                </tr>`)
            }
        }
    }

    $("#pre-group-name").text(`第${info.group}组`)
    $("#pre-group-score").text(info.group_score)
    $("#pre-student-name").text(info.name)
    $("#pre-student-number").text(info.number)
    $("#pre-student-score").text(info.score)
    $("#pre-student-add").text(info.add)
    $("#pre-student-sub").text(info.sub)
    $("#tab").height($("#preview").height() - 330)
}
preview()


//编辑区
//获取日期
function getDate(long) {
    // 获取当前日期
    var date = new Date();

    // 获取当前月份
    var nowMonth = date.getMonth() + 1;

    // 获取当前是几号
    var strDate = date.getDate();

    var Hour = date.getHours()

    var Minute = date.getMinutes()

    var Second = date.getSeconds()

    // 添加分隔符“-”
    var seperator = ".";

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    if (Hour >= 0 && Hour <= 9) {
        Hour = "0" + Hour;
    }

    if (Minute >= 0 && Minute <= 9) {
        Minute = "0" + Minute;
    }

    if (Second >= 0 && Second <= 9) {
        Second = "0" + Second;
    }

    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    if (long == true) {
        var nowDate = String(date.getFullYear()) + nowMonth + strDate + Hour + Minute + Second;
    } else {
        var nowDate = String(date.getFullYear()) + seperator + nowMonth + seperator + strDate
    }
    return nowDate
}
//校位
function setPos() {
    $("#num-tab").css("left", $("#edit-score").offset().left)
    $("#type-tab").css("left", $("#edit-type").offset().left)
    $("#desc-tab").css("left", $("#edit-desc").offset().left)
}
setPos()
//积分
$("#edit-score").click(function() {
    $("#type-tab").css("display", "none")
    $("#desc-tab").css("display", "none")
    if ($("#num-tab").is(":visible")) {
        $("#num-tab").css("display", "none")
    } else {
        $("#num-tab").css("display", "block")
    }
    setPos()
})
//确定
$("#enter").click(function() {
    $("#num-tab").css("display", "none")
})
//输入
$(".key").click(function() {
    if ($("#edit-score").text() == "0") {
        if ($(this).text() == ".") {

            $("#edit-score").text("0.")
        } else {
            $("#edit-score").text($(this).text())
        }
    } else {
        $("#edit-score").text($("#edit-score").text() + $(this).text())
    }
})
//删除
$("#delete").click(function() {
    $("#edit-score").text("0")
})

//类型
$("#edit-type").click(function() {
    $("#num-tab").css("display", "none")
    $("#desc-tab").css("display", "none")
    if ($("#type-tab").is(":visible")) {
        $("#type-tab").css("display", "none")
    } else {
        $("#type-tab").css("display", "block")
    }
    setPos()
})
//初始化类型表
for (i in types) {
    $("#type-tab").append(`<div class="type ripple" type-val=${i}>${types[i][0]}</div>`)
}
//输入
$(".type").click(function() {
    type_val = $(this).attr("type-val")
    $("#type-tab").css("display", "none")
    $("#edit-type").text($(this).text())
})

//描述
$("#edit-desc").click(function() {
    $("#num-tab").css("display", "none")
    $("#type-tab").css("display", "none")
    if ($("#desc-tab").is(":visible")) {
        $("#desc-tab").css("display", "none")
        if ($("#diy").val() != "") {
            $("#edit-desc").text($("#diy").val())
        }
    } else {
        $("#desc-tab").css("display", "block")
        $("#desc-tab").empty()
        for (i in types[type_val][1]) {
            $("#desc-tab").append(`<div class="desc ripple">${types[type_val][1][i]}</div>`)
        }
        $("#desc-tab").append(`<input id="diy" placeholder="自定义">`)
    }
    setPos()
})
//输入
$("#desc-tab").on("click", ".desc", function() {
    $("#desc-tab").css("display", "none")
    $("#edit-desc").text($(this).text())
})

//提交

function submit(fix_num) {
    if (typeof(fix_num) != "undefined") {
        $("#fix-submit").css("display", "none")
        log = { group: fix_info.group, number: fix_info.number, score: Number($("#edit-score").text()), type: $("#edit-type").text(), desc: $("#edit-desc").text(), date: getDate() }
        temp_logs[fix_num] = JSON.parse(JSON.stringify(log))
        logs = []
        backup_logs[0].update = getDate(true)
        logs = logs.concat(backup_logs)
        logs = logs.concat(temp_logs)
        localStorage.setItem("GroupScore.Logs", JSON.stringify(logs));
        $.growl.notice({ title: "提交成功", message: "<pre>" + JSON.stringify(log, null, '    ') + "</pre>", size: "large" });
        fix_info = {}
        fix_value = {}
        FixMode()

    } else {
        log = { group: info.group, number: info.number, score: Number($("#edit-score").text()), type: $("#edit-type").text(), desc: $("#edit-desc").text(), date: getDate() }
        temp_logs.push(log)
        logs = []
        backup_logs[0].update = getDate(true)
        logs = logs.concat(backup_logs)
        logs = logs.concat(temp_logs)
        localStorage.setItem("GroupScore.Logs", JSON.stringify(logs));
        $.growl.notice({ title: "提交成功", message: "<pre>" + JSON.stringify(log, null, '    ') + "</pre>", size: "large" });

    }
    preview()
    if ($("#analyse").css("display") == "block") {
        AnalyseMode()
    }
}

$("#submit").click(function() {
    submit()
})


$("#fix-submit").click(function() {
    if (typeof(fix_value) != "undefined") {
        if (fix_value != {}) {
            submit(fix_value)
        } else {
            $.growl.warning({ title: "无法修正", message: "请选中要修改的提交！", size: "medium" });
        }
    } else {
        $.growl.warning({ title: "无法修正", message: "请选中要修改的提交！", size: "medium" });
    }
})

$("#task-submit").click(function() {
    tasks[info.number - 1].task = tasks[info.number - 1].task + 1
    localStorage.setItem("GroupScore.Tasks", JSON.stringify(tasks));
    $.growl.notice({ title: "安排成功", message: `已对${tasks[info.number-1].name}安排任务`, size: "medium" });
    TaskMode()

})




$("#export-json").click(function() {
    var blob = new Blob([JSON.stringify(logs, null, '\t')], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "小组积分日志" + getDate(true) + ".json");
    $.growl.notice({ title: "导出成功", message: "小组积分日志" + getDate(true) + ".json", size: "large" });
})

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

$("#export-excle").click(function() {
    Excle = "小组\t座号\t积分\t类型\t描述\t日期\n"
    for (i in logs) {
        Excle = Excle + logs[i].group + "\t"
        Excle = Excle + logs[i].number + "\t"
        Excle = Excle + logs[i].score + "\t"
        Excle = Excle + logs[i].type + "\t"
        Excle = Excle + logs[i].desc + "\t"
        Excle = Excle + logs[i].date + "\n"
    }
    copyToClipboard(Excle)
    $.growl.notice({ title: "导出成功", message: "已复制Excle到剪贴板", size: "medium" });
})

localStorage.setItem("GroupScore.Tasks", JSON.stringify(tasks));
