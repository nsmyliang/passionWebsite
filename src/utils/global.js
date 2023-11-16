import Vue from 'vue'
import {
  Message,
  Input,
  MessageBox,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Progress,
  Select,
  Option,
  DatePicker,
  Pagination,
  Row,
  Col,
  Upload
} from 'element-ui'
import i18n from "@/lang" // 国际化

// 默认样式太大了，换成small的
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
};

// element 断点隐藏样式
import 'element-ui/lib/theme-chalk/display.css';

const elementArr = [Input, Carousel, CarouselItem, Tabs, TabPane, Progress, Select, Option, DatePicker, Pagination,
  Row, Col, Upload
];
elementArr.forEach(item => Vue.use(item));
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm




// lodash
import _ from 'lodash'
Vue.prototype._ = _

// 全局过滤器
import filters from '@/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


//判断是否是移动端
Vue.prototype.isMobile = function () {
  let mobileArray = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"],
    ua = navigator.userAgent,
    res = mobileArray.filter(function (arr) {
      return ua.indexOf(arr) > 0;
    });
  return res.length > 0;
}


// 数组根据key值合并
Vue.prototype.arrMerge = function (arr1, arr2, key) {
  const combined = arr1.map((item1) => {
    arr2.map((item2) => {
      if (item1[key] === item2[key]) {
        Object.assign(item1, item2)
      }
    })
    return item1
  })
  return combined
}

// 复制
Vue.prototype.copy = function (txt) {
  var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  var t = document.createElement("input");
  t.value = txt
  document.body.appendChild(t)
  if (isiOS) {
    t.position = "absolute";
    t.style.left = "-9999px";
    t.setAttribute("readonly", "");
    var e = document.createRange();
    e.selectNodeContents(t);
    var i = window.getSelection();
    i.removeAllRanges(),
      i.addRange(e),
      t.setSelectionRange(0, txt.length)
  } else
    t.select();
  try {
    document.execCommand("copy", !1, null)
    Message.success(i18n.t('shareholder.shareholder38'))
  } catch (n) {
    Message.error('复制失败,请手动复制!')
  }
  t.remove()
}

// 新开窗口
Vue.prototype.openNewWindow = function (url, query) {
  if (!url) return
  if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {
    let href = url
    window.open(href, '_blank')
  } else {
    let {
      href
    } = this.$router.resolve({
      path: url,
      query: query
    })
    window.open(href, '_blank')
  }
}
