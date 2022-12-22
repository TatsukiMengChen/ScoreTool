groups = [
    [
        [1, "肖*进"],
        [26, "余*华"],
        [34, "王*昌"],
        [35, "张*宇"],
        [53, "吴*"],
        [62, "刘*昌"]
    ],
    [
        [3, "周*洋"],
        [25, "胡*珂"],
        [30, "邱*彦"],
        [32, "黄*亮"],
        [36, "廖*胜"],
        [59, "王*"]
    ],
    [
        [5, "赖*"],
        [24, "李*贤"],
        [31, "何*帆"],
        [33, "钟*萍"],
        [38, "邱*方"],
        [58, "邱*毅"]
    ],
    [
        [6, "张*华"],
        [23, "蓝*娜"],
        [28, "刘*军"],
        [40, "谢*花"],
        [49, "陈*涛"],
        [57, "朱*源"]
    ],
    [
        [7, "林*浩"],
        [21, "曹*彤"],
        [22, "吴*杰"],
        [39, "罗*"],
        [46, "刘*玲"],
        [55, "吴*亮"]
    ],
    [
        [10, "林*阳"],
        [19, "刘*龙"],
        [20, "邹*宇"],
        [41, "曾*明"],
        [50, "蓝*方"],
        [54, "刘*宇"]
    ],
    [
        [9, "刘*男"],
        [11, "李*涵"],
        [18, "陈*杰"],
        [42, "杨*才"],
        [52, "王*博"],
        [61, "杨*"]
    ],
    [
        [8, "谢*怡"],
        [12, "李*楠"],
        [17, "刘*忠"],
        [27, "王*燕"],
        [43, "李*泉"],
        [37, "杨*壮"]
    ],
    [
        [4, "刘*红"],
        [13, "李*"],
        [16, "李*龙"],
        [44, "袁*平"],
        [48, "刘*"],
        [56, "邱*惠"]
    ],
    [
        [2, "刘*菲"],
        [14, "赖*涵"],
        [15, "钟*军"],
        [29, "施*君"],
        [45, "施*佩"],
        [47, "黄*基"],
        [51, "王*枝"],
        [60, "赖*如"]
    ]
]

numbers = [
    [1, "肖*进"],
    [2, "刘*菲"],
    [3, "周*洋"],
    [4, "刘*红"],
    [5, "赖*"],
    [6, "张*华"],
    [7, "林*浩"],
    [8, "谢*怡"],
    [9, "刘*男"],
    [10, "林*阳"],
    [11, "李*涵"],
    [12, "李*楠"],
    [13, "李*"],
    [14, "赖*涵"],
    [15, "钟*军"],
    [16, "李*龙"],
    [17, "刘*忠"],
    [18, "陈*杰"],
    [19, "刘*龙"],
    [20, "邹*宇"],
    [21, "曹*彤"],
    [22, "吴*杰"],
    [23, "蓝*娜"],
    [24, "李*贤"],
    [25, "胡*珂"],
    [26, "余*华"],
    [27, "王*燕"],
    [28, "刘*军"],
    [29, "施*君"],
    [30, "邱*彦"],
    [31, "何*帆"],
    [32, "黄*亮"],
    [33, "钟*萍"],
    [34, "王*昌"],
    [35, "张*宇"],
    [36, "廖*胜"],
    [37, "杨*壮"],
    [38, "邱*方"],
    [39, "罗*"],
    [40, "谢*花"],
    [41, "曾*明"],
    [42, "杨*才"],
    [43, "李*泉"],
    [44, "袁*平"],
    [45, "施*佩"],
    [46, "刘*玲"],
    [47, "黄*基"],
    [48, "刘*"],
    [49, "陈*涛"],
    [50, "蓝*方"],
    [51, "王*枝"],
    [52, "王*博"],
    [53, "吴*"],
    [54, "刘*宇"],
    [55, "吴*亮"],
    [56, "邱*惠"],
    [57, "朱*源"],
    [58, "邱*毅"],
    [59, "王*"],
    [60, "赖*如"],
    [61, "杨*"],
    [62, "刘*昌"]
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
    tasks = [{ "number": 1, "name": "肖*进", "task": 0 },
        { "number": 2, "name": "刘*菲", "task": 0 },
        { "number": 3, "name": "周*洋", "task": 0 },
        { "number": 4, "name": "刘*红", "task": 0 },
        { "number": 5, "name": "赖*", "task": 0 },
        { "number": 6, "name": "张*华", "task": 0 },
        { "number": 7, "name": "林*浩", "task": 0 },
        { "number": 8, "name": "谢*怡", "task": 0 },
        { "number": 9, "name": "刘*男", "task": 0 },
        { "number": 10, "name": "林*阳", "task": 0 },
        { "number": 11, "name": "李*涵", "task": 0 },
        { "number": 12, "name": "李*楠", "task": 0 },
        { "number": 13, "name": "李*", "task": 0 },
        { "number": 14, "name": "赖*涵", "task": 0 },
        { "number": 15, "name": "钟*军", "task": 0 },
        { "number": 16, "name": "李*龙", "task": 0 },
        { "number": 17, "name": "刘*忠", "task": 0 },
        { "number": 18, "name": "陈*杰", "task": 0 },
        { "number": 19, "name": "刘*龙", "task": 0 },
        { "number": 20, "name": "邹*宇", "task": 0 },
        { "number": 21, "name": "曹*彤", "task": 0 },
        { "number": 22, "name": "吴*杰", "task": 0 },
        { "number": 23, "name": "蓝*娜", "task": 0 },
        { "number": 24, "name": "李*贤", "task": 0 },
        { "number": 25, "name": "胡*珂", "task": 0 },
        { "number": 26, "name": "余*华", "task": 0 },
        { "number": 27, "name": "王*燕", "task": 0 },
        { "number": 28, "name": "刘*军", "task": 0 },
        { "number": 29, "name": "施*君", "task": 0 },
        { "number": 30, "name": "邱*彦", "task": 0 },
        { "number": 31, "name": "何*帆", "task": 0 },
        { "number": 32, "name": "黄*亮", "task": 0 },
        { "number": 33, "name": "钟*萍", "task": 0 },
        { "number": 34, "name": "王*昌", "task": 0 },
        { "number": 35, "name": "张*宇", "task": 0 },
        { "number": 36, "name": "廖*胜", "task": 0 },
        { "number": 37, "name": "杨*壮", "task": 0 },
        { "number": 38, "name": "邱*方", "task": 0 },
        { "number": 39, "name": "罗*", "task": 0 },
        { "number": 40, "name": "谢*花", "task": 0 },
        { "number": 41, "name": "曾*明", "task": 0 },
        { "number": 42, "name": "杨*才", "task": 0 },
        { "number": 43, "name": "李*泉", "task": 0 },
        { "number": 44, "name": "袁*平", "task": 0 },
        { "number": 45, "name": "施*佩", "task": 0 },
        { "number": 46, "name": "刘*玲", "task": 0 },
        { "number": 47, "name": "黄*基", "task": 0 },
        { "number": 48, "name": "刘*", "task": 0 },
        { "number": 49, "name": "陈*涛", "task": 0 },
        { "number": 50, "name": "蓝*方", "task": 0 },
        { "number": 51, "name": "王*枝", "task": 0 },
        { "number": 52, "name": "王*博", "task": 0 },
        { "number": 53, "name": "吴*", "task": 0 },
        { "number": 54, "name": "刘*宇", "task": 0 },
        { "number": 55, "name": "吴*亮", "task": 0 },
        { "number": 56, "name": "邱*惠", "task": 0 },
        { "number": 57, "name": "朱*源", "task": 0 },
        { "number": 58, "name": "邱*毅", "task": 0 },
        { "number": 59, "name": "王*", "task": 0 },
        { "number": 60, "name": "赖*如", "task": 0 },
        { "number": 61, "name": "杨*", "task": 0 },
        { "number": 62, "name": "刘*昌", "task": 0 }
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
