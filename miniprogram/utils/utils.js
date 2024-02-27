//封装消息请提示
const utils = {
  toast(title = '消息加载成功', icon = 'none') {
    wx.showToast({
      title,
      mask: true,
      icon,
    })
  },
}

//方式1导出
// export default utils
//使用的时候就在想要使用的页面直接导入   通过utils.toast()
//方式2
wx.utils = utils
//在全局中导入
