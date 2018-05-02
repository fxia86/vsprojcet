(function ($) {
    var bigImg = function (img) {
        var self = this;
        this.img = img;
        this.width = img.width();
        this.height = img.height();
        this.top = img.offset().top;
        this.left = img.offset().left;
        this.pdiv = Math.floor(Math.random() * this.width * this.height);
        this.setting = {
            "pwidth": 300,
            "pheight": 300,
            "scale": 3,
            "margin_top": 00,
            "margin_left": 50,
            "pclass": ""
        }
        $.extend(this.setting, this.getSetting());
        this.imgsrc = this.setting.bigImg ? this.setting.bigImg : img.attr("src");
        this.img.hover(function () {
            self.createPchild(self.pdiv);
            self.imgsrc = $(this).attr("src");
            self.createImg();
        }, function () {
            var pdiv = "#" + self.pdiv;
            $(pdiv).remove();
        });
        this.img.mousemove(function (e) {
            var scrollTop = $(document).scrollTop();
            var scaleX = (e.clientX - self.left) / self.width;
            var scaleY = (e.clientY - self.top + scrollTop) / self.height;
            self.updImg(scaleX, scaleY);
        });
    }
    bigImg.prototype = {
        createPchild: function (id) {
            var ele = document.createElement("div");
            var img = document.createElement("img");
            var scrollTop = $(document).scrollTop();
            $("body").append($(ele));
            $(ele).attr({ 'id': id }).css({
                'z-index': '999999',
                'width': this.setting.pwidth + "px",
                'height': this.setting.pheight + "px",
                'position': 'fixed',
                'top': this.top + this.setting.margin_top - scrollTop,
                'left': this.left + this.width + this.setting.margin_left,
                'overflow': 'hidden'
            }).addClass(this.setting.pclass);
        },
        createImg: function () {
            var img = document.createElement("img");
            $(img).attr("src", this.imgsrc).css({
                'width': this.width * this.setting.scale,
                'height': this.height * this.setting.scale,
                'margin-top': '0px',
                'margin-left': '0px',
                'position': 'relative'
            });
            var pdiv = "#" + this.pdiv;
            $(pdiv).append($(img));
        },
        updImg: function (scaleX, scaleY) {
            var top = (scaleY * this.height * this.setting.scale) - (scaleY * this.setting.pheight);
            var left = (scaleX * this.width * this.setting.scale) - (scaleX * this.setting.pwidth);
            var pdiv = "#" + this.pdiv;
            $(pdiv).find("img").css({ 'top': -top + "px" });
            $(pdiv).find("img").css({ 'left': -left + "px" });
        },
        getSetting: function () {
            var setting = this.img.attr("setting");
            if (setting && setting != "") {
                return $.parseJSON(setting);
            } else {
                return {};
            }
        }
    };
    bigImg.init = function ($ele) {
        var _this_ = this;
        $ele.each(function () {
            new _this_($(this));
        });
    }
    window['bigImg'] = bigImg;
})(jQuery)
