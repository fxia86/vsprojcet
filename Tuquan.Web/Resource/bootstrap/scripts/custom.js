var Custom = function () {

    //各个页面功能
    return {

        MerchantService: function () {
            $('#serviceDetailModal').on('hidden.bs.modal', function () {
                clearForm("serviceDetailForm");
            });

            $("#serviceDetailForm").validate({
                //debug: true,      //调试模式（并不会提交）
                rules: {
                    Name: {
                        required: true,
                        stringCheck: true
                    },
                    Classify: {
                        required: true,
                        stringCheck: true
                    },
                    Price: {
                        required: true,
                        money: true
                    },
                    Description: {
                        required: true,
                        string: true
                    }
                },

                messages: {
                    Name: {
                        required: "<span style='color:red'>名称不能为空</span>",
                    },
                    Classify: {
                        required: "<span style='color:red'>类别不能为空</span>",
                    },
                    Price: {
                        required: "<span style='color:red'>价格不能为空</span>",
                    },
                    Description: {
                        required: "<span style='color:red'>描述不能为空</span>",
                    }
                }
            });
        }


    }

}();

/***
Usage
***/


//验证扩展

//validate验证框架自定义验证

/*数字字母验证*/
jQuery.validator.addMethod("chrnum", function (value, element) {
    var chrnum = /^([a-zA-Z0-9]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "<font color='red'>只能输入数字和字母</font>");

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
    return this.optional(element) || /^[^\<\>\\\/\"\;\!\@%,?]*$/.test(value);
}, " <font color='red'>不允许包含特殊符号!</font>");


jQuery.validator.addMethod("sSpecialCharacters", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\/\"\?]*$/.test(value);
}, " <font style='color:red;display:block;width:150px;position:absolute;'>不允许包含特殊符号!</font>");


jQuery.validator.addMethod("SpecialCharacter2", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\"\?]*$/.test(value);
}, " <font color='red'  style=' position:absolute; width:135px;;margin-top:-10px;'>不允许包含特殊符号!</font>");



jQuery.validator.addMethod("SpecialCharacters1", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\"\?]*$/.test(value);
}, " <font color='red' style='width:135px; margin-top:-10px;margin-left:-50px;'>不允许包含特殊符号!</font>");

jQuery.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(value));
}, "<font color='red'>请正确填写您的手机号码。</font>");

jQuery.validator.addMethod("isTel", function (value, element) {
    var length = value.length;
    return this.optional(element) || /^[0-9/-]+$/.test(value);
}, "<font color='red'>请正确填写您的联系电话。</font>");

jQuery.validator.addMethod("stringCheck", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
}, "<font color='red'>只能包含中文、英文、数字、下划线等字符</font>");

jQuery.validator.addMethod("isPhone", function (value, element) {
    var length = value.length;
    var mobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    var tel = /^((\d{3,4}\-)|)\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/;
    return this.optional(element) || (tel.test(value) || mobile.test(value));
}, "<font color='red'>电话/手机号码格式错误</font>");

jQuery.validator.addMethod("Phone2", function (value, element) {
    return this.optional(element) || /^[0-9/-]+$/.test(value);
}, " <font color='red'  style=' position:absolute; width:170px;;margin-top:-10px;'>请输入正确格式的电话号码</font>");

jQuery.validator.addMethod("ProjectName", function (value, element) {
    return this.optional(element) || /^[^\<\>\\\'\"\;\%\@\!\.\&\$\#\*\?]*$/.test(value);
}, " <font color='red'  style='  width:170px;'>项目名称不允许有特殊字符</font>");

jQuery.validator.addMethod("PositiveInteger", function (value, element) {
    return this.optional(element) || /^[0-9]\d*$/.test(value);
}, "<font color='red'>输入值必须正整数</font>");

jQuery.validator.addMethod("ccmanphone", function (value, element) {
    return this.optional(element) || /^\d{3,4}-\d{7,8}|1[3,4,5,7,8]\d{9}$/.test(value);
}, "<font color='red'>甲方联系人联系电话格式不正确</font>");



jQuery.validator.addMethod("RegistrationCodeCheak", function (value, element) {
    return this.optional(element) || /^([\d]{16})([\d\w]{4})$/.test(value);
}, " <font color='red'>格式错误请重新输入!</font>");

//正数负数两位小数
jQuery.validator.addMethod("PlusMinusCount", function (value, element) {
    return this.optional(element) || /^[+-]?\d*\.?\d{0,2}$/.test(value);
}, " <font color='red'>只能输入两位小数或正负整数!</font>");
jQuery.validator.addMethod("money", function (value, element) {
    return this.optional(element) || /^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$/.test(value);
}, " <font color='red'>只能输入金额!</font>");



//----------------------------------------加红-----------------------------------------------------

var path = window.location.pathname;
if (path.indexOf("Home") > 0) {
    path = path.substr(path.substr("/"));
}
$('.page-sidebar-menu a[href="' + path + '"]').parents('li').addClass('active').find('span.arrow');


//----------------------------------------End加红-----------------------------------------------------
//

//刷新即清除数据
window.onload = function () {

    $("form").find("[data-field]").each(function () {
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
//屏幕尺寸过大时填充屏幕防止底部黑边过大

function Liulanqi() {
    var DocWidth = $(window).width();
    var Full = $("<div class='J_Full' > <br /><br /><br /><br /><br /><br /><br /><br /><br /></div>");

    if (DocWidth > 1400 && $(".J_Full").length == 0) {


        $(".page-content").append(Full);


    } else {
        $(".J_Full").remove();

    }

}

window.onload = function () {
    window.onresize = Liulanqi;
    Liulanqi();
}



$.prototype.ChooseBlockVal = "0";

$.prototype.initChooseBlock = function (fn) {
    var that = this;

    $(this).on("click", ".itemBlock", function () {
        $(this).siblings().removeClass("changeBorder");
        $(this).addClass("changeBorder")

        //获取当前选中的值
        var val = $(this).attr("value");

        //是否添加事件
        if (fn != null && val != that.ChooseBlockVal) {
            fn(val);
        }
        that.ChooseBlockVal = val;
    });

    return this;
};
