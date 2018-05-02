//var Custom = function () {

//    var myFunc = function (text) {
//        alert(text);
//    };



//    //各个页面功能
//    return {

//        Login: function () {
            
//            $(".login_boder").mouseenter(function () {
//                $("#erweima").removeClass("dis-no");
//            });
//            $(".login_boder").mouseleave(function () {
//                $("#erweima").addClass("dis-no");
//            });

//            //登陆验证
//            $("#LoginFrom").validate({
//                //debug: true,      //调试模式（并不会提交）
//                rules: {
//                    username: {
//                        required: true,
//                        maxlength: 15,
//                        sSpecialCharacters: true
//                    },

            
//                    userpass: {
//                        required: true,
//                        sSpecialCharacters: true,
//                        maxlength: 15
//                    }

//                },

//                //自定义提示
//                messages: {

//                    username: {
//                        required: "<span class='mt-15' style='color:red ;  display:block;width:120px;position:absolute;'>用户名不能为空</span>",
//                        maxlength: "<span class='mt-15' style='color:red; display:block;position:absolute;'>最多输入15个字符，请重新输入</span>"
//                    },

//                    userpass: {
//                        required: "<span style='color:red ;display:block;width:120px;position:absolute;'>密码不能为空</span>",
//                        maxlength: "<span style='color:red;display:block;position:absolute;'>最多输入15个字符，请修改输入</span>"
//                    }

//                }
//            });


//        },

//        Register: function () {
//            $("#registerfrom").validate({
//                //debug: true,      //调试模式（并不会提交）
//                rules: {
//                    registerphone: {
//                        required: true,
//                        number:true,
//                        SpecialCharacters: true,
//                        maxlength: 11
//                    },


//                    registervcode: {
//                        required: true,
                       
//                        number: true
                       
//                    },
//                    registerpassword:{
//                        required: true,
//                        SpecialCharacters: true,
//                        maxlength: 15
                     
//                    },
//                    registername: {
//                        required: true,
//                        sSpecialCharacters: true,
//                        maxlength: 15
                      

//                    }

//                },

//                //自定义提示
//                messages: {

//                    registerphone: {
//                        required: "<span  style='color:red; display:block;'>号码不能为空</span>",
                      
//                        number: "<span  style='color:red; display:block;'>号码必须是数字</span>",
//                        maxlength: "<span class='mt-15' style='color:red; display:block;position:absolute;'>最多输入11个字符，请重新输入</span>"
//                    },

//                    registervcode: {
//                        required: "<span style='color:red; display:block;width:105px;position:absolute;'>密码不能为空</span>",
//                        number: "<span  style='color:red; display:block;position:absolute;'>验证码必须是数字</span>"
//                    },

//                    registerpassword: {
//                        required: "<span style='color:red; display:block;'>密码不能为空</span>",
//                        maxlength: "<span class='mt-15' style='color:red; display:block;position:absolute;'>最多输入15个字符，请重新输入</span>"
                       
//                    },

//                    registername: {
//                        required: "<span style='color:red; display:block;'>用户名不能为空</span>",
//                        maxlength: "<span class='mt-15' style='color:red; display:block;position:absolute;'>最多输入15个字符，请重新输入</span>"
                     
//                    }



//                }
//            });




//        },


//        kehu: function () {

//            //modal关闭时即恢复初始化
//            $('#PPCompanyInfo').on('hidden.bs.modal', function () {
//                $("#PPCompanyInfo :input").attr("value", "");
//                $("#PPCompanyInfo :input").removeAttr("readonly");
//                $("[generated='true']").remove();
              
//            });

//            $('#PPCompanyInfo').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'CoustomerAdd') {
//                    modal.find('.modal-title').text('添加客户');
//                }
//                else if (recipient == 'CustomerCare') {
//                    modal.find('.modal-title').text('查看客户');
//                    $("#PPCompanyInfo :input").attr("readonly", "readonly");

//                }
//                else if (recipient == 'CustomerEdit') {
//                    modal.find('.modal-title').text('编辑客户');
//                }
//            });
//            //联系人点击添加即隐藏，点击取消即显示
//            $("#CreatePPContact").click(function () {
//                $("#CreatePPContact").addClass("dis-no");
//                $("[generated='true']").remove();
//            });
//            $("#CancelPPContact").click(function () {
//                $("#CreatePPContact").removeClass("dis-no");
//                $("#PropertyContact :text").attr("value", "");
//                $("#PropertyContact :input").removeAttr("readonly");
//                $("#CreatePPContact").removeClass("dis-no");//添加按钮显示
//                $("#PPContactInfo").attr("class", "").addClass("collapse");//弹窗收起
//                $("#CreatePPContact").attr("class", "").addClass("btn green collapsed");//弹窗收起
//                $("#PropertyContact :radio:first").attr("checked", "checked");
//                $("[generated='true']").remove();
//            });


//            //联系人弹窗初始化
//            $('#PropertyContact').on('hidden.bs.modal', function () {
//                $("#PropertyContact :radio:first").attr("checked", "checked");
//                $("#PropertyContact :text").attr("value", "");
//                $("#PropertyContact :input").removeAttr("readonly");
//                $("#CreatePPContact").removeClass("dis-no");//添加按钮显示
//                $("#PPContactInfo").attr("class", "").addClass("collapse");//弹窗收起
//                $("#CreatePPContact").attr("class", "").addClass("btn green collapsed");//弹窗收起
//                $("[generated='true']").remove();
//            });

//            //添加客户验证

//            $("#PropertyCompany").validate({
//               // debug: true,      调试模式（并不会提交）

//                rules: {
//                    propertyname: {
//                        required: true,
//                        SpecialCharacters: true,
//                        maxlength: 50
//                    },
//                    telephone: {
//                        SpecialCharacters: true,
//                        isTel: true
//                    },
//                    Corporator: {
//                        SpecialCharacters: true,
//                        maxlength: 20
//                    },
//                    registeredcapital: {
//                        maxlength: 13,
//                        SpecialCharacters: true,
//                        min: 30000,
//                        number: true
//                    },
//                    Address: {
//                        maxlength: 150,
//                        SpecialCharacters: true
//                    },
//                    BusinessLicenseCode: {
//                        SpecialCharacters: true,
//                        number: true,
//                        maxlength: 20
//                    },
//                    MainBusiness: {
//                        SpecialCharacters: true,
//                        maxlength: 300
//                    },
//                    Remarks: {
//                        maxlength: 200,
//                        SpecialCharacters: true
//                    }
//                },

//                //自定义提示
//                messages: {
//                    propertyname: {
//                        required: "<span style='color:red;'>公司名称不能为空</span>",
//                        maxlength: "<span style='color:red;position:absolute;z-index:-222;'>最大输入长度50个字符，请修改输入</span>"

//                    },
//                     telephone: {
//                       maxlength: "<span style='color:red'>最大输入长度11个字符，请修改输入</span>"
//                     },
//                     Corporator: {
//                        maxlength: "<span style='color:red'>最大输入长度20个字符，请修改输入</span>"
//                      },

//                     registeredcapital: {

//                        number: "<span style='color:red'>注册资金必须是数字，请重新输入</span>",
//                        min: "<span style='color:red'>注册资金必须大于30000，请重新输入</span>",
//                        maxlength: "<span style='color:red'>最大输入长度13个字符，请修改输入</span>"
//                    },
//                     Address: {
//                        maxlength: "<span style='color:red'>最大输入长度150个字符，请修改输入</span>"
//                    },
//                     businesslicensecode: {
//                        number: "<span style='color:red'>营业执照编号必须是数字，请重新输入</span>",
//                        maxlength: "<span style='color:red'>最大输入长度20个字符，请修改输入</span>"
//                     },

//                    mainbusiness: {

//                        maxlength: "<span style='color:red'>最大输入长度200个字符，请修改输入</span>"
//                    },
//                    Remarks: {
//                        maxlength: "<span style='color:red'>最大输入长度200个字符，请修改输入</span>"
//                    }
                   

//                }
//            });



//            //联系人验证

//            $("#PropertyContactFrom").validate({
//                //debug: true,      //调试模式（并不会提交）
//                rules: {
//                    YName: {
//                        required: true,
//                        maxlength: 30,
//                        SpecialCharacters: true
//                    },

//                    Age: {
//                        number: true,
//                        SpecialCharacters: true,
//                        range: [18, 65]
//                    },
//                    Dept: {
//                        required: true,
//                        SpecialCharacters: true,
//                        maxlength: 15
//                    },
//                    Job: {
//                        SpecialCharacters: true,
//                        maxlength: 15
//                    },
//                    Telephone: {
//                        required: true,
//                        SpecialCharacters: true,
//                        isMobile: true

//                    },
//                    Remarks: {
//                        maxlength: 200,
//                        SpecialCharacters: true
//                    }

//                },

//                //自定义提示
//                messages: {

//                    YName: {
//                        required: "<span style='color:red'>用户名不能为空</span>",
//                        maxlength: "<span style='color:red'>输入最大长度不能超过30，请重新输入</span>"
//                    },

//                    Age: {
//                        number: "<span style='color:red'>年龄必须为数字</span>",

//                        range: "<span style='color:red'>年龄在18至65周岁之间</span>"

//                    },
//                    Dept: {
//                        required: "<span style='color:red'>部门不能为空</span>",
//                        maxlength: "<span style='color:red'>最大输入长度15个字符，请修改输入</span>"
//                    },
//                    Job: {
                      
//                        maxlength: "<span style='color:red'>最大输入长度15个字符，请修改输入</span>"
//                    },
//                    Telephone: {
//                        required: "<span style='color:red'>电话不能为空</span>",
//                        number: "<span style='color:red'>电话必须为数字</span>",
//                        maxlength: "<span style='color:red'>最大输入长度50个字符，请修改输入</span>",

//                    },
//                    Remarks: {
//                        maxlength: "<span style='color:red'>最大输入长度200个字符，请修改输入</span>"
//                    }

//                }
//            });

//        },

//        project: function () {

//            //modal关闭时即恢复初始化
//            $('#AddProjectModal').on('hidden.bs.modal', function () {
//                $(".select2-with-searchbox").css("display", "none");//初始化区域选择插件,关闭下拉框
//                $("#AddProjectModal :input").attr("value", "");
//                $("[generated='true']").remove();
//                $(".SearchUse").val(-1);//多选框恢复
//                $(".select2-choice").addClass("select2-default");//初始化区域选择插件
//                $("#s2id_loc_province,#s2id_loc_city,#s2id_loc_town").removeClass("select2me").removeClass("w90");
//                $("#s2id_loc_province").find(".select2-chosen").text("请选择省");
//                $("#s2id_loc_city").find(".select2-chosen").text("选择市");
//                $("#s2id_loc_town").find(".select2-chosen").text("选择区");
//                $("[generated='true']").remove();

//            });
//            //停止服务弹窗初始化
//            $('#StopProject').on('hidden.bs.modal', function () {
                  
//                $("[name='enddate']").val("");
//                $("[generated='true']").remove();
//                });
//            //添加编辑弹窗头部显示文字

//            $('#AddProjectModal').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'ProjectAdd') {
//                    modal.find('.modal-title').text('添加项目');
//                }
//                else if (recipient == 'ProjectEditor') {
//                    modal.find('.modal-title').text('编辑项目');
//                }
//            });
//            //点击电梯信息时在不同选项卡下电梯信息不同的状态

//            $('#LeftInfo').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'InService') {
//                    $(".J_ProjectInfoMore").removeClass("dis-no");
//                    $("#CreateAddLiftInfo").removeClass("dis-no");
//                }
//                else if (recipient == 'OutService') {
//                    $(".J_ProjectInfoMore").addClass("dis-no");
//                    $("#CreateAddLiftInfo").addClass("dis-no");
//                }
//                else if (recipient == 'WellService') {
//                    $(".J_ProjectInfoMore").removeClass("dis-no");
//                    $("#CreateAddLiftInfo").removeClass("dis-no");
//                }
//            });


//        },


//        LeftInfo: function () {
//            //点击添加
//            $("#CreateAddLiftInfo").click(function () {
//                $(".registrationcode").removeClass("dis-no");//显示注册码
//                $(".panel-body").removeClass("dis-no");//展开填写注册代码
//                $("#CreateAddLiftInfo").addClass("dis-no");//点击添加按钮隐藏
//            });
//            //点击注册代码的取消
//            $(".LeftInfoPrev").click(function () {

//                $(".panel-body").addClass("dis-no");//隐藏填写注册代码
//                $("#CreateAddLiftInfo").removeClass("dis-no")//添加按钮显示
//                $("[name='registrationcode']").attr("value", "");//清空注册代码输入框
//                $("[generated='true']").remove();//清空验证
//                clearForm("LiftInfo");
//                $("#LiftInfoSure").attr("onclick", "LiftAdd()");
//            });
//            //点击最后一步的取消
//            $("#LiftInfoCancel").click(function () {
//                $(".SearchUse").val(-1);//多选框恢复
//                $(".LeftGroup").addClass("dis-no");
//                $("#FLift").addClass("dis-no");
//                $("#ZLift").addClass("dis-no");
//                $("[name='registrationcode']").attr("value", "");//清空注册代码输入框
//                $(".LeftGroup input").attr("value", "");//清除输入框
//                $("#CreateAddLiftInfo").removeClass("dis-no");//点击添加按钮显示
//                $(".panel-body").addClass("dis-no");//消除点击取消后该div撑大空间的bug
//                $("#LeftCopy").show();//显示批量打印机二维码按钮
//                clearForm("LiftInfo");
//                $("#lift_brand").val("");
//                $("#LiftInfoSure").attr("onclick", "LiftAdd()");
//                //品牌选择初始化
//                var n = $("ul.select2-choices>li").size();
//                if (n == 2) {
//                    $("ul.select2-choices ").children("li").get(0).remove();
//                }
//                $("#s2id_autogen1").addClass("select2-default");
//            });


//            //移动模态框清空
//            $('#move').on('hidden.bs.modal', function () {
//                $(".SearchUse").val(-1);//多选框恢复
//                $("[generated='true']").remove();
//            });

//            //modal关闭时即恢复初始化
//            $('#LeftInfo').on('hidden.bs.modal', function () {
//                $(".registrationcode").removeClass("dis-no");
//                $("[name='registrationcode']").attr("value", "");//清空注册代码输入框
//                $(".LeftGroup").addClass("dis-no");
//                $("#FLift").addClass("dis-no");
//                $("#ZLift").addClass("dis-no");
//                $(".panel-body input").attr("value", "");//清除输入框
//                $("#CreateAddLiftInfo").removeClass("dis-no");//点击添加按钮显示
//                $(".panel-body").addClass("dis-no");//消除点击取消后该div撑大空间的bug
//                $("[generated='true']").remove();
//                $(".SearchUse").val(-1);//多选框恢复
//                //品牌选择初始化    select2-default
              
//                var n = $("ul.select2-choices>li").size();
//                if (n == 2) {
//                    $("ul.select2-choices ").children("li").get(0).remove();
//                }
//                $("#s2id_autogen1").addClass("select2-default");

              
//            });

//            //停保时间和原因
//            $('#TimeAndReason').on('hidden.bs.modal', function () {
//                $("#TimeAndReasonform textarea").attr("value", "");//清空日期
//                $("#TimeAndReasonform input").attr("value", "");//清空日期
//                $(".SearchUse").val(-1);//多选框恢复
//                $("[generated='true']").remove();
//            });


//            $("#TimeAndReasonBtn").click(function () {
//                if ($('#TimeAndReasonform').validate().form()) {



//                }
//                return false;
//            });


//            //恢复弹窗初始化以及验证
//            $('#ReProject').on('hidden.bs.modal', function () {
//                $("#formReProject input").attr("value", "");//清空日期
//                $("[generated='true']").remove();
//            });


//            $("#ReSerice").click(function () {
//                if ($('#formReProject').validate().form()) {

//                    //提交内容写在此处

//                }
//                return false;
//            });


//            /*移动JS*/
//            $("[name='Moveinput']").focus(function () {
//                $(".DropDownList").removeClass("dis-no");

//            });

//            $(".ls-n > li").click(function () {

//                var v = $(this).text();

//                $("[name='Moveinput']").val(v);
//            });
//            /*强制降低遮罩层的层高度*/
//            $('#AddProject').on('shown.bs.modal', function () {
//                $(".modal-backdrop").css("z-index", "1  !important");

//            });


//            //电梯信息验证

//            $("#LiftInfoSure").click(function () {
//                if ($('#LiftInfo').validate().form()) {

//                    //提交内容写在此处

//                }
//                return false;
//            });
//        },

//        LM_abnormal: function () {

//            $('#handle').on('show.bs.modal', function () {
//                var cv = $(".J_Cao").attr("class");
//                var x = cv.search(/active/i);
//                if (x > 0) {
//                    $(".overdue").removeClass("dis-no");
//                    $(".Makeup").addClass("dis-no");

//                } else {
//                    $(".overdue").addClass("dis-no");
//                    $(".Makeup").removeClass("dis-no");
//                };

//            });

//            $('#handle').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'ReProcessing') {
//                    $("#Reason").removeAttr("disabled");
//                    $("[name='IsStandard']").removeAttr("disabled");
//                }
//                else if (recipient == 'see') {
//                    $("#Reason").attr("disabled", "disabled");
//                    $("[name='IsStandard']").attr("disabled", "disabled");
//                }
//                else if (recipient == 'handle') {
//                    $("#Reason").removeAttr("disabled");
//                    $("[name='IsStandard']").removeAttr("disabled");
//                }
//            });



//            //重新处理验证


//            $("#handlingForm").validate({
//                 //debug: true,     调试模式（并不会提交）
//                rules: {

//                    reason: {
//                        required: true,
//                        maxlength: 200,
//                        SpecialCharacters: true
//                    }

//                },

//                //自定义提示
//                messages: {

                 
//                    reason: {
//                        required: "<span style='color:red'>原因不能为空</span>",
//                        maxlength: "<span style='color:red'>最大输入长度200个字符，请修改输入</span>"
//                    }

//                }
//            });


//        },
//        InspectionManagement: function () {
//            $('#YearlyEditor').on('show.bs.modal', function () {
//                var jy = $(".J_yearsly").attr("class");
//                var y = jy.search(/active/i);
//                if (y > 0) {
//                    $(".yearslyDate").removeClass("dis-no");
//                    $(".SubmitcerTificate").addClass("dis-no");
//                } else {
//                    $(".yearslyDate").addClass("dis-no");
//                    $(".SubmitcerTificate").removeClass("dis-no");
//                };

//            });
//        },

//        Permission: function () {

//            function settitle() {
//                var i = $(this).parent().prev().text();
//                $("#quanxian").text(i);
//            }

//            $(".queding").click(function () {

//                $("#quxiaowuye").modal("show");
//            });

//            //modal关闭时即恢复初始化
//            $('#quxiaowuye').on('hidden.bs.modal', function () {

//                $("#quanxian").html();
//                $("[generated='true']").remove();
//            });



//        },

//        gonggao: function (CountPage) {
//            $('#FeedbackManagement').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'AnnouncementAdd') {
//                    modal.find('.modal-title').text('发布公告');
//                }
//                else if (recipient == 'AnnouncementEditor') {
//                    modal.find('.modal-title').text('编辑公告');
//                }
//            });


//            $('#demo').bootpag({
//                paginationClass: 'pagination pagination-sm',
//                next: '<i class="fa fa-angle-right"></i>',
//                prev: '<i class="fa fa-angle-left"></i>',
//                total: CountPage,
//                page: 1,
//                maxVisible: 6 //可以不设置
//            }).on('page', function (event, num) {
//                GetAnnouncementList(num);
//            });// 这里可以加载一些ajax内容 


//        },
//        YearlyCheck: function () {

//            $('#YearlyEditor').on('show.bs.modal', function (event) {
//                var button = $(event.relatedTarget);
//                var recipient = button.data('whatever');

//                var modal = $(this);
//                if (recipient == 'SubmitInspectionInfo') {
//                    modal.find('.modal-title').text('提交年检信息');
//                }
//                else if (recipient == 'ModifyInspectionInfo') {
//                    modal.find('.modal-title').text('修改年检时间');
//                }
               
//            });

//            //弹框初始化
//            $('#YearlyEditor').on('hidden.bs.modal', function () {
//                $("#InpectionForm :radio:first").attr("checked", "checked");
    
//                $("#InpectionForm :input").attr("value", "");;
//                $("[generated='true']").remove();
//            });


//            //提交合格证，修改年检时间验证

//            $("#new,#old").click(function () {
//                if ($('#InpectionForm').validate().form()) {

//                    //提交内容写在此处


//                }
//                return false;
//            });


//            $("#InpectionForm").validate({
//                //debug: true,      调试模式（并不会提交）
//                rules: {

//                    ZhiJianP: {
//                        required: true,
//                        SpecialCharacters: true
//                    },
//                    YearsCheckPeople: {
//                        required: true,
//                        SpecialCharacters: true
//                    },
//                    CompletionInspectionTime: {
//                        required: true
//                    },
//                    annualInspectiondate: {
//                        required: true
//                    },
//                    Telephone: {
//                        required: true,
//                        SpecialCharacters: true,
//                        number: true,
//                        isPhon:true
//                    }
//                },

//                //自定义提示
//                messages: {
//                    ZhiJianP: {
//                        required: "<span style='color:red'>质检特检人员不能为空</span>",
//                        maxlength: "<span style='color:red'>最大输入长度260个字符，请修改输入</span>"
//                    },
//                    YearsCheckPeople: {
//                        required: "<span style='color:red'>年检人员不能为空</span>",
//                        maxlength: "<span style='color:red'>最大输入长度260个字符，请修改输入</span>"
//                    },
//                    CompletionInspectionTime: {
//                        required: "<span class='ChangeDatepickStyle ml-230' style='color:red'>时间不能为空</span>"
                        
//                    },
//                    annualInspectiondate: {
//                        required: "<span class='ChangeDatepickStyle ml-230' style='color:red'>时间不能为空</span>",

//                    },
//                    Telephone: {
//                        required: "<span style='color:red'>联系电话不能为空</span>",
//                        number: "<span style='color:red'>联系电话必须是数字</span>"
//                    }
//                }
//            });
//        },

//        Announcement: function () {

//            //发布公告验证

//            $("#AnnouncementInfoForm").validate({
//                 //debug: true,     调试模式（并不会提交）
//                rules: {

//                    Announcementthemetitle: {
//                        required: true,
//                        SpecialCharacters: true
//                    },
//                    Announcementmaincontent: {
//                        required: true,
//                        maxlength: 260,
//                        SpecialCharacters: true
//                    }

//                },

//                //自定义提示
//                messages: {
//                    Announcementthemetitle: {
//                        required: "<span  style='color:red'>主题文字不能为空</span>"
//                    },
//                    Announcementmaincontent: {
//                        required: "<span  style='color:red'>输入内容不能为空</span>",
//                        maxlength: "<span style='color:red'>最大输入长度260个字符，请修改输入</span>"
//                    }

//                }
//            });

//        },
//        ClearTable: function () {
           
//            $('#TemporaryRepairTable,#iTemporaryRepairTable').on('hidden.bs.modal', function () {

//                $(".clearTable").text(" ");

//            });

//        }




//    }

//}();

/***
Usage
***/
//Custom.init();


//验证扩展

//validate验证框架自定义验证

/*数字字母验证*/
jQuery.validator.addMethod("chrnum", function (value, element) {
    var chrnum = /^([a-zA-Z0-9]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "<font color='red'>请输入数字和字母</font>");

/*下拉菜单验证*/

$.validator.addMethod("selectNone", function (value, element) {
    return value == "请选择";
}, "<font color='red'>请选择一项</font>");


jQuery.validator.addMethod("chinese", function (value, element) {
    var chinese = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (chinese.test(value));
}, "<font color='red'>请输入中文</font>");


jQuery.validator.addMethod("string", function (value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
}, " <font color='red'>不允许包含特殊符号!</font>");

jQuery.validator.addMethod("SpecialCharacters", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\/\'\"\?]*$/.test(value);
}, " <font color='red'>不允许包含特殊符号!</font>");


jQuery.validator.addMethod("sSpecialCharacters", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\/\'\"\?]*$/.test(value);
}, " <font style='color:red;display:block;width:150px;position:absolute;'>不允许包含特殊符号!</font>");


jQuery.validator.addMethod("SpecialCharacters1", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\'\"\?]*$/.test(value);
}, " <font color='red'>不允许包含特殊符号!</font>");

jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(value));
}, "<font color='red'>请正确填写您的手机号码。</font>");

jQuery.validator.addMethod("isTel", function (value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/.test(value));
}, "<font color='red'>请正确填写您的座机号码。</font>");

jQuery.validator.addMethod("stringCheck", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
}, "<font color='red'>只能包含中文、英文、数字、下划线等字符</font>");
// 电话号码验证 

jQuery.validator.addMethod("isPhon", function (value, element) {
    var length = value.length;
    var mobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    var tel = /^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/;
    return this.optional(element) || (tel.test(value) || mobile.test(value));

}, "<font color='red'>电话/手机号码格式错误</font>");

//正整数验证
jQuery.validator.addMethod("PositiveInteger", function (value, element) {
    return this.optional(element) || /^[0-9]\d*$/.test(value);
}, "<font color='red'>输入值必须正整数</font>");



//----------------------------------------加红-----------------------------------------------------
var addressUrl = window.location.pathname;

var arrayAddressUrl = addressUrl.split('/');


var leftID = "";
if (arrayAddressUrl.length > 2) {
    leftID = arrayAddressUrl[2];
    sourceID = arrayAddressUrl[1];
    $("#" + sourceID + leftID).addClass("active");
    //$("#" + sourceID + leftID).find("a").append("<span class='selected'></span>");
   
}

if (arrayAddressUrl.length > 3) {
    leftID = arrayAddressUrl[3];
    leftCID = arrayAddressUrl[2];
    sourceID = arrayAddressUrl[1];
    $("#" + sourceID + leftID).addClass("active");
    //$("#" + sourceID + leftID).find("a").append("<span class='selected'></span>");
    $("#" + sourceID + leftCID + leftID).addClass("active");
}
//----------------------------------------End加红-----------------------------------------------------
//

//刷新即清除数据
window.onload = function () {
    $("form").find("[data-field]").each(function () {
        var t = $(this);
        if (t.attr("type") == "radio" || t.attr("type") == "checkbox") {
            if (t.val() == 1)
            {
                t.attr("checked","checked");
            }
        }
        else if (t.attr("src") && t.attr("src") != "") {
            t.attr("src", "");
        }
        else if (t.get(0).tagName == "SELECT") {
          
            t.val("-1");
          
        }
        else if (t.attr("type") == "text") {
            t.val("");
        }
    });
    $("[generated='true']").remove();

}

function ShowModal(VAL) {
    $("#ModalContainer").append("<div class='modal fade '  data-backdrop='static'  id='basic' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-dialog'><div class='modal-content' style='width:400px;'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button><h4 class='modal-title' style='color:red;'  id='myModalLabel'>温馨提示</h4></div> <div class='modal-body'><p id='WriteInfo' style='font-size:20px;word-wrap: break-word;  word-break: normal;  ' > </p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>关闭</button></div></div></div></div>");

    $('#basic').modal({
        keyboard: true
    });

    $('#basic').on('shown.bs.modal', function (e) {
        $("#WriteInfo").html(VAL);
    });
    $('#basic').on('hidden.bs.modal', function (e) {

        $("#basic").remove();
    });

}


/***************************************************************************************************************************************/


/*确认模态框*/



var Modal = (function ($) {
    var $body = $(document.body),
        BackDrop = (function () {
            var $backDrop,
                count = 0,
                create = function () {
                    $backDrop = $('<div class="modal-backdrop fade in"></div>').appendTo($body);
                };

            return {
                show: function () {
                    !$backDrop && create();
                    $backDrop[0].style.display = 'block';
                    count++;
                },
                hide: function () {
                    count--;
                    if (!count) {
                        $backDrop.remove();
                        $backDrop = undefined;
                    }
                }
            }
        })(),
        getTpl = function () {
            return ['<div class="modal fade" data-backdrop="false" data-show="false" data-keyboard="false">',
                '    <div class="modal-dialog">',
                '        <div class="modal-content">',
                '            <div class="modal-header">',
                '                <h4 class="modal-title"></h4>',
                '            </div>',
                '            <div class="modal-body"></div>',
                '            <div class="modal-footer"></div>',
                '        </div>',
                '    </div>',
                '</div>'].join("");
        },
        initModal = function (that, opts) {
            var $modal = createModal(that);
            that.setTitle(opts.title);
            that.setContent(opts.content);
            that.addButtons(opts.buttons);
            that.setWidth(opts.width);
            bindHandler(that, opts);
            $modal.modal();//调用bootstrap的Modal组件
            $modal.trigger('contentReady');
        },
        createModal = function (that) {
            var $modal = that.$modal = $(getTpl()).appendTo($body);
            that.$modalTitle = $modal.find('.modal-title');
            that.$modalBody = $modal.find('.modal-body');
            that.$modalFooter = $modal.find('.modal-footer');
            return $modal;
        },
        bindHandler = function (that, opts) {
            var $modal = that.$modal;
            typeof opts.onContentChange === 'function' && $modal.on('contentChange', $.proxy(opts.onContentChange, that));
            typeof opts.onContentReady === 'function' && $modal.on('contentReady', $.proxy(opts.onContentReady, that));
            typeof opts.onModalShow === 'function' && $modal.on('modalShow', $.proxy(opts.onModalShow, that));
            typeof opts.onModalHide === 'function' && $modal.on('modalHide', $.proxy(opts.onModalHide, that));
            $modal.on('show.bs.modal', function () {
                $modal.trigger('modalShow');
            });
            $modal.on('hidden.bs.modal', function () {
                $modal.trigger('modalHide');
            });
        },
        getDefaultBtnCallbackProxy = function (callbackName) {
            return function () {
                var opts = this.options,
                    callback = opts[callbackName] && typeof opts[callbackName] === 'function' ? opts[callbackName] : '';

                return callback && callback.apply(this, arguments);
            }
        };

    function ModalDialog(options) {
        this.options = this.getOptions(options);
        this.$modal = undefined;
        this.$modalTitle = undefined;
        this.$modalBody = undefined;
        this.$modalFooter = undefined;
        this.state = undefined;
    }

    ModalDialog.defaults = {
        title: '',
        content: '',
        width: 600,
        buttons: [
            {
                html: '<button type="button" class="btn btn-sm btn-primary btn-ok">确定</button>',
                selector: '.btn-ok',
                callback: getDefaultBtnCallbackProxy('onOk')
            },
            {
                html: '<button type="button" class="btn btn-sm btn-default btn-cancel">取消</button>',
                selector: '.btn-cancel',
                callback: getDefaultBtnCallbackProxy('onCancel')
            }
        ],
        onOk: $.noop,
        onCancel: $.noop,
        onContentReady: $.noop,
        onContentChange: $.noop,//content替换之后的回调
        onModalShow: $.noop,
        onModalHide: $.noop//modal关闭之后的回调
    };

    $.extend(ModalDialog.prototype, {
        getOptions: function (options) {
            return $.extend({}, ModalDialog.defaults, options || {});
        },
        setOptions: function (options) {
            return $.extend(this.options, options || {});
        },
        open: function (state) {
            this.state = state;
            !this.$modal && initModal(this, this.options);
            BackDrop.show();
            this.$modal.modal('show');
        },
        hide: function () {
            var $modal = this.$modal;
            $modal.modal('hide');
            $modal.one('hidden.bs.modal', function () {
                BackDrop.hide();
            });
        },
        setTitle: function (title, html) {
            this.$modalTitle[html === true ? 'html' : 'text'](title);
        },
        setContent: (function () {
            var init = true;
            return function (content) {
                this.$modalBody.html(content);
                !init ? this.$modal.trigger('contentChange') : (init = false);
            }
        })(),
        addButtons: function (buttons) {
            var buttons = !$.isArray(buttons) ? [] : buttons,
                that = this,
                htmlS = [];
            buttons.forEach(function (btn) {
                htmlS.push(btn.html);

                btn.selector && that.$modal.on('click', btn.selector, $.proxy(function (e) {

                    var self = this,
                        $btn = $(e.currentTarget);

                    //先禁用按钮
                    $btn[0].disabled = true;

                    var callback = typeof btn.callback === 'function' ? btn.callback : '',
                        ret = callback && callback.apply(self, arguments);

                    if (ret === false) {
                        $btn[0].disabled = false;
                        return;
                    }

                    if (typeof (ret) === 'object' && 'done' in ret && typeof ret['done'] === 'function') {
                        //异步任务只有在成功回调的时候关闭Modal
                        ret.done(function () {
                            that.hide();
                        }).always(function () {
                            $btn[0].disabled = false;
                        });
                    } else {
                        $btn[0].disabled = false;
                        that.hide();
                    }

                }, that));
            });

            this.$modalFooter.prepend($(htmlS.join('')));
        },
        hideButton: function (selector) {
            selector && this.$modalFooter.find(selector).hide();
        },
        showButton: function (selector) {
            selector && this.$modalFooter.find(selector).show();
        },
        setWidth: function (width) {
            this.$modal.find('.modal-dialog').css('width', width);
        }
    });

    //针对这些方法统一加个校验
    ['setTitle', 'setContent', 'addButtons', 'hideButton', 'showButton', 'setWidth'].forEach(function (name) {
        var _old = ModalDialog.prototype[name];
        ModalDialog.prototype[name] = function () {
            if (!arguments.length || !this.$modal) {
                return;
            }
            return _old.apply(this, arguments);
        }
    });

    return ModalDialog;
})(jQuery);

var Alert, Confirm;
(function () {
    var modal,
        Proxy = function (isAlert) {
            return function () {
                if (arguments.length != 1) return;
                var msg = typeof arguments[0] === 'string' && arguments[0] || arguments[0].msg || '',
                    onOk = typeof arguments[0] === 'object' && typeof arguments[0].onOk === 'function' && arguments[0].onOk,
                    onCancel = typeof arguments[0] === 'object' && typeof arguments[0].onCancel === 'function' && arguments[0].onCancel,
                    width = typeof arguments[0] === 'object' && arguments[0].width || 400,
                    _onModalShow = function () {
                        this.setWidth(width);
                        this.setContent(msg);
                        this[(isAlert ? 'hide' : 'show') + 'Button']('.btn-cancel');
                    },
                    _onModalHide = function () {
                        this.setContent('');
                    };

                //延迟初始化modal
                if (!modal) {
                    modal = new Modal({
                        'title': '操作提示',
                        onModalShow: _onModalShow,
                        onModalHide: _onModalHide,
                        onContentReady: function () {
                            this.$modalBody.css({
                                'padding-top': '30px',
                                'padding-bottom': '30px'
                            })
                        }
                    });
                } else {
                    var $modal = modal.$modal;
                    //如果modal已经初始化则需要重新监听事件
                    $modal.off('modalShow modalHide');
                    $modal.off('modalShow modalHide');
                    $modal.on('modalShow', $.proxy(_onModalShow, modal));
                    $modal.on('modalHide', $.proxy(_onModalHide, modal));
                }

                modal.setOptions({
                    onOk: onOk || $.noop,
                    onCancel: onCancel || $.noop
                });

                modal.open();
            }
        };

    Alert = Proxy(true);
    Confirm = Proxy();
})();



