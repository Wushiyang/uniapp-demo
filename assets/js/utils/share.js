import Vue from 'vue'
import wx from 'weixin-js-sdk';

Vue.prototype.share = ( share_url, share_title, share_content, share_imgurl ) => {
    let oTitle, oContent, imgUrl, oLink;
    // 设置默认分享图片
    !share_imgurl ? imgUrl = 'http://develop.jiazhuang-wap.fang.dev2.0779365.me:8082/static/images/share.png' : imgUrl = share_imgurl;

    // 设置默认分享标题
    oTitle = !share_title ? '默认标题' : share_title;

    // 设置默认分享内容
    oContent = !share_title ? '' : share_content;

    // 设置默认分享链接
    oLink = share_url || window.location.href;

    // 不要尝试在trigger中使用Ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    wx.ready(function () {
        // “分享给朋友”及“分享到QQ”
        wx.updateAppMessageShareData({
            title: oTitle,
            desc: oContent,
            link: oLink,
            imgUrl: imgUrl,
            trigger: function (res) {
                this.title =  oTitle;
                this.desc = oContent;
                this.link = oLink;
            },
            success: function (res) {
                // 用户确认分享后执行回调函数
            },
            cancel: function (res) {
                // 用户取消分享后执行的回调函数
            }
        })

        // “分享到朋友圈”及“分享到QQ空间”
        wx.updateTimelineShareData({
            title: oTitle,
            link: oLink,
            imgUrl: imgUrl,
            trigger: function (res) {
                this.title =  oTitle;
                this.desc = oContent;
                this.link = oLink;
            },
            success: function (res) {
                // 用户确认分享后执行回调函数
            },
            cancel: function (res) {
                // 用户取消分享后执行的回调函数
            }
        });
    })
}