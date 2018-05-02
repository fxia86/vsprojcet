//dataTableID   表格ID
//sAjaxSource   控制器路径
//aoColumns     对象结构
//aoData        排序字段
//component     组件呈现
var AjaxDataTable = function (dataTableID, sAjaxSource, aoColumns, Component, aoDataText) {
    var component = Component || new Object();
    //判断对象属性是否有值,无值采用默认值
    if (typeof (component.bDestroy) == "undefined")
        component.bDestroy = true;     //是否重复覆盖表数据
    if (typeof (component.bFilter) == "undefined")
        component.bFilter = false;      //是否显示模糊查询
    if (typeof (component.bPaginate) == "undefined")
        component.bPaginate = true;     //是否分页
    if (typeof (component.bSort) == "undefined")
        component.bSort = false;         //是否排序
    if (typeof (component.bInfo) == "undefined")
        component.bInfo = true;         //是否显示页脚
    if (typeof (component.bAsync) == "undefined")
        component.bAsync = true;         //设置是同步还是异步。false:同步;true:异步

   var oTableD = $('#' + dataTableID).dataTable({
        "bDestroy": component.bDestroy,
        "sDom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", //default layout without horizontal scroll(remove this setting to enable horizontal scroll for the table)
        "aLengthMenu": [[5, 10, 20, 50], [5, 10, 20, 50]],//修改分页
        "bServerSide": true,//开启服务器模式，使用服务器端处理配置datatable
        "sAjaxSource": sAjaxSource,//获取数据的url
        "iDisplayLength": 10 || component.iDisplayLength,
        "aoColumns": aoColumns,
        "bDeferRender ": true,//延迟渲染
        "bAutoWidth": false,                    //关闭后，表格将不会自动计算表格大小
        "bProcessing": true,                    //加载数据时显示正在加载信息
        "bFilter": component.bFilter,           //是否使用过滤功能
        "bPaginate": component.bPaginate,       //是否分页
        "bSort": component.bSort,               //是否排序
        "bInfo": component.bInfo,               //页脚信息
        "bLengthChange": true,                  //用户可改变每页显示数量
        "fnServerData": function (sSource, aoData, fnCallback) {
            if (aoDataText != null)
                aoData.push(aoDataText);
            $.ajax({
                "dataType": 'json',
                "type": "POST",
                "url": sSource,
                "data": aoData,
                "async": component.bAsync,
                "success": function (resp) {
                    fnCallback(resp);
                }
            });
        },           //获取数据的处理函数  
        "fnDrawCallback": function () {
            bigImg.init($("[for_big='true']"));
        },
        "sPaginationType": "bootstrap_full_number",     //翻页界面类型
        "oLanguage": {                          //汉化
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "没有数据",
            "sInfo": "<span>第 _START_ - _END_ 条；共 _TOTAL_ 条</span>",
            "sInfoEmtpy": "没有数据",
            "sProcessing": "正在加载数据...",
            "sSearch": "搜索：",
            "sInfoEmpty": "当前&nbsp;&nbsp; 0&nbsp;&nbsp;条数据"
        }
    });
    return oTableD;
}

//获取表单数据的json
//id    表单ID
var getFormJson = function (id) {
    var json = "{";
    $("#" + id).find("[data-field]").each(function () {
        var t = $(this);
        var data = t.val() != "undefind" ? $.trim(t.val()) : t.text() != "undefind" ? $.trim(t.text()) : $.trim(t.attr('src')) || "";
        if (!(t.attr("type") == "radio" || t.attr("type") == "checkbox") || t.attr("checked")) {
            json += "\"" + $(this).attr("data-field") + "\":\"" + data + "\",";
        }
    });
    //alert(json);
    json = json.substr(0, json.length - 1) + "}";
    return json;
}

//表单初始化
//objct json对象
var modelFormInit = function (control, objct) {
    //debugger;
    for (attribute in objct) {
        var c = $(control + ' [data-field="' + attribute + '"]');
        if (c.length > 0) {
            var tag = c[0].tagName;
            if (tag == 'INPUT') {
                if (c.attr("type") == "radio" || c.attr("type") == "checkbox") {
                    var n = c.attr("name");
                    $('input[name="' + n + '"]').attr("checked", false).each(function () {
                        $(this).parent().removeClass("checked");
                        if (this.value == $.trim(objct[attribute])) {
                            this.checked = true;
                            $(this).parent().addClass("checked");
                        }
                    });
                }
                else {
                    c.val($.trim(objct[attribute]))
                }
            }
            else if (tag == 'IMG') {
                c.attr('src', $.trim(objct[attribute]));
            }
            else if (tag == "SELECT") {
                c.val($.trim(objct[attribute]));
            }
            else if (tag == "SPAN") {
                c.html($.trim(objct[attribute]));
            }
            else {
                //c.text($.trim(objct[attribute]));
                c.val($.trim(objct[attribute]));
            }
        }
    }
    $("[generated='true']").remove();
}

//清除表单数据
//id    表单ID
var clearForm = function (id) {
    $("#" + id).find("[data-field]").each(function () {
        var t = $(this);
        if (t.attr("type") == "radio" || t.attr("type") == "checkbox") {
            t.attr("checked", false);
        }
        else if (t.attr("src") && t.attr("src") != "") {
            t.attr("src", "");
        }
        else if (t.get(0).tagName == "SELECT") {
            t.val(-1);
        } else if (t.get(0).tagName == "SPAN") {
            t.html("");
        }
        else {
            t.val("");
            //t.text("");
        }
    });
}

//时间格式化
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

