//判断数字
function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }

}

//验证邮箱格式
function checkEmail(myemail) {
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

    if (myReg.test(myemail)) {
        return true;
    } else {
        return false;
    }
}


// 验证中文名称
function isChinaName(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
    return pattern.test(name);
}

// 验证手机号
function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

// 验证手机号并返回错误 
function isPhoneOrSendErrMsg(phone) {
    var pattern = /^1[34578]\d{9}$/;
    var bv_flag = pattern.test(phone);
    if (bv_flag == false) {
        $.toast('请输入正确格式的手机号!', 'text');
        return;
    }

}

// 验证身份证 
function isCardNo(card) {
    var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return pattern.test(card);
}
//获取上传文件的拓展名
function suffix(file_name) {
    var result = /\.[^\.]+/.exec(file_name);
    return result;
}

// 获取当前时间
function p(s) {
    return s < 10 ? '0' + s : s;
}

function get_cur_time() {
    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds();

    var now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
    return now;
}
/**
 * [objToStrMap 对象转为 Map]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function objToStrMap(obj) {
    var strMap = new Map();
    for (var k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
/**
 * Map 转为数组
 * @type {Map}
 */
const myMap = new Map()
    .set(true, 7)
    .set({ foo: 3 }, ['abc']);
[...myMap]


/**
 * 数组 转为 Map
 */
new Map([
    [true, 7],
    [{ foo: 3 },
        ['abc']
    ]
]);
/**
 * Map 转为对象
 * @param  {[type]} strMap [description]
 * @return {[type]}        [description]
 */
function strMapToObj(strMap) {
    var obj = Object.create(null);
    for (var [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}
/**
 * 对象转为 Map
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function objToStrMap(obj) {
    var strMap = new Map();
    for (var k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
/**
 * JSON 转为 Map
 * @param  {[type]} jsonStr [description]
 * @return {[type]}         [description]
 */
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

function getShareBg() {
    var html = '<div id="shareBg" style="display: block" onclick="closeShareBg()" class="shareBG ">\n' +
        '        <img src="/Public/Home/marketingTools/img/share.png" style="width: 100%;">\n' +
        '    </div>';
    $("body").append(html);
}

function closeShareBg() {
    $("#shareBg").remove();
}

// 判断是否是图片格式
// function check_Img(suffix_img) {
//     var bv_suffix_img_arr = ['.bmp', '.jpeg', '.gif', '.webp','.psd', '.png', '.tiff', '.tga', '.eps', '.jpg','.tencent'];
//     var bv_suffix_img = suffix_img.toLowerCase();

//     console.log($.inArray(bv_suffix_img, bv_suffix_img_arr));

//     if ($.inArray(bv_suffix_img, bv_suffix_img_arr) != -1) {
//         return true;
//     }
//     return false;
// }
function check_Img(suffix_img) {
    var bv_suffix_img_arr = ['.bmp', '.jpeg', '.gif', '.webp','.psd', '.png', '.tiff', '.tga', '.eps', '.jpg','.tencent'];
    var bv_suffix_img = suffix_img.toLowerCase();
    for(var i=0;i<bv_suffix_img_arr.length;i++)
    {
        if(bv_suffix_img.toString()==bv_suffix_img_arr[i].toString())
        {
            return true;
        }
    }
    return false;
}
// 判断是否是视频格式
function check_video(suffix_video) {
    var bv_suffix_video_arr = ['.rm', '.rmvb', '.mpeg1', '.mpeg2',
        '.mpeg3', '.mpeg4', '.mov', '.mtv',
        '.dat', '.wmv', '.avi', '.3gp',
        '.amv', '.dmv', '.flv', '.mp4'
    ];
    var bv_suffix_video = suffix_video.toLowerCase();
    if ($.inArray(bv_suffix_video, bv_suffix_video_arr) != -1) {
        return true;
    }
    return false;
}

//我也要制作营销活动
function iWantCreateAct() {
    var html = '<div class="attention">\n' +
        '    <div id="attentionBG" onclick="closeSubscribe1()" class="weui-form-preview-BG" style="z-index: 201">\n' +
        '        <div class="relative flexallcenter">\n' +
        '            <img src="https://www.cnghjy.com/Public/Home/marketingTools/img/erweima.png" style="position:absolute;width: 100px;height: 100px;z-index: 200;top: 118px;left: 77px;" alt="">\n' +
        '            <img id="attentionImg" onclick="closeSubscribe2()" style="width: 80%;z-index: 100;" src="/Public/Home/marketingTools/img/guanzhu.png" alt="">\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';

    $("body").prepend(html);
}

function closeIWantCreateAct() {
    $("#attentionBGIWantCreateAct").remove();
}


//关注模态框开始
function getSubscribe(is_must = null, title = '', pic_url = '') {

    var status = is_must == 'Y' ? '' : 'onclick="closeSubscribe1()"';

    //将当前的url写入数据库内
    var url = window.location.href;
    $.ajax({
        url: 'https://www.cnghjy.com/index.php/Home/Marking/insertSubscribeUrl',
        type: 'POST',
        data: {
            url: url,
            title: title,
            pic_url: pic_url
        },
        timeout: 5000, //超时时间
        dataType: 'json', //返回的数据格式：json/xml/html/script/jsonp/text
        success: function(data) {

            console.log(data);
            var html = '<div class="attention">\n' +
                '    <div id="attentionBG" ' + status + ' class="weui-form-preview-BG" style="z-index: 1003">\n' +
                '        <div class="relative flexallcenter">\n' +
                '            <img src="' + data.data + '" style="position:absolute;width: 100px;height: 100px;z-index: 1002;top: 118px;left: 77px;" alt="">\n' +
                '            <img id="attentionImg" onclick="closeSubscribe2()" style="width: 80%;z-index: 1001;" src="/Public/Home/marketingTools/img/guanzhu.png" alt="">\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
            $("body").prepend(html);
        }
    })
}

//关注模态框开始(针对只传场景值id的情况)
function getSubscribeByScene(is_must = null, scene_id='') {

    console.log(1,scene_id);
    var status = is_must == 'Y' ? '' : 'onclick="closeSubscribe1()"';

    if(scene_id == '' || parseInt(scene_id) === 0){
        console.log(2);
        var html = '<div class="attention">\n' +
            '    <div id="attentionBG" ' + status + ' class="weui-form-preview-BG" style="z-index: 1003">\n' +
            '        <div class="relative flexallcenter">\n' +
            '            <img src="/Public/Home/marketingTools/img/erweima.png" style="position:absolute;width: 100px;height: 100px;z-index: 1002;top: 118px;left: 77px;" alt="">\n' +
            '            <img id="attentionImg" onclick="closeSubscribe2()" style="width: 80%;z-index: 1001;" src="/Public/Home/marketingTools/img/guanzhu.png" alt="">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        $("body").prepend(html);
        return;
    }
    console.log(3);

    $.ajax({
        url: 'https://www.cnghjy.com/index.php/Home/Marking/insertSubscribeUrlByScene',
        type: 'POST',
        data: {
            scene_id: scene_id,
        },
        timeout: 5000, //超时时间
        dataType: 'json', //返回的数据格式：json/xml/html/script/jsonp/text
        success: function(data) {
            console.log(data);
            var html = '<div class="attention">\n' +
                '    <div id="attentionBG" ' + status + ' class="weui-form-preview-BG" style="z-index: 1003">\n' +
                '        <div class="relative flexallcenter">\n' +
                '            <img src="' + data.data + '" style="position:absolute;width: 100px;height: 100px;z-index: 1002;top: 118px;left: 77px;" alt="">\n' +
                '            <img id="attentionImg" onclick="closeSubscribe2()" style="width: 80%;z-index: 1001;" src="/Public/Home/marketingTools/img/guanzhu.png" alt="">\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>';
            $("body").prepend(html);
        }
    })
}



function closeSubscribe1() {
    $("#attentionBG").remove();
}

function closeSubscribe2() {
    event.stopPropagation();
}

//关注模态框结束
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

//发送邮箱
function sendEmail(act_id, act_type)
{
    $.get("https://www.cnghjy.com/index.php/Home/Marking/sendEmail",{act_id:act_id, act_type:act_type} , function(result){
        $.showLoading('数据导出中,请耐心等待');
        if(result.code == 0){
            $.hideLoading();
            $.toast("发送成功,请注意查收","text");
        }else{
            $.hideLoading();
            $.toast(result.suc_msg, 'text');
        }
    });

}


//导出到校道云系统
function warmAddXdy(){
    $.alert({
        text: '请到校道云系统(菜单:只用一招)查看或联系客服人员(常见问题->线下客服)',
        onOK: function () {
            //点击确认
            return;
        },
    });
}

// 生成图片
function createWebToImage(selector) {

    var canvasNew = document.createElement("canvas");
    var _canvas = document.querySelector('div'+selector);

    var w = parseInt(window.getComputedStyle(_canvas).width);
    var h = parseInt(window.getComputedStyle(_canvas).height);
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvasNew.width = w * 2;
    canvasNew.height = h * 2;
    canvasNew.style.width = w + "px";
    canvasNew.style.height = h + "px";
    //可以按照自己的需求，对context的参数修改,translate指的是偏移量
    var context = canvasNew.getContext("2d").scale(2, 2);
    // context;
    html2canvas(document.querySelector('div'+selector), { canvas: canvasNew }).then(function(canvas) {
        var dataUrl = canvas.toDataURL("image/png", 1.0);
        var newImg = document.createElement("img");
        newImg.src = dataUrl;
        newImg.width = w / 1;
        newImg.height = h / 1;
        $(selector).html(newImg);
    });

}
/**
 * [checkImg 验证是否图片格式]
 * @param  {[type]} files [description]
 * @return {[type]}       [description]
 */
function checkImg(files){
    if(!/image\/\w+/.test(files.type)){
        return false
    }
    return true;
}

function qrcode(selector,url){
    var element = $(document).find(selector);
    element.qrcode({
        render: "canvas", //也可以替换为table
        width: 100,
        height: 100,
        correctLevel:0,
        text: url
    });
}
/**
 * [num 小数点两位输入限制]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function num(obj){
    if(obj<=0)
    {
        return ;
    }
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
    obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个, 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
}



/*
 * 根据Value格式化为带有换行、空格格式的HTML代码
 *
 * strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
 * strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
 * strContent = strContent.replace(/\s/g, '&nbsp'); //空格处理
 *
 * @param strValue {String} 需要转换的值
 * @return  {String}转换后的HTML代码
 * @example
 * getFormatCode("测\r\n\s试")  =>  “测<br/> 试”
 */
var getFormatCode=function(strValue){
    return strValue.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, ' ');
}


/**
 * 判断某字符串是否在数组中
 * @param stringToSearch
 * @param arrayToSearch
 * @returns {boolean}
 */
function xdyIsInArray(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}

//字符串去除空白字符
function str_trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}