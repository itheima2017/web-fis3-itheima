# 开发说明

## 前言

项目名称：爱游网
项目描述：爱游网，旅游产品、游记功率、注册登录、订单管理、收藏管理、游记管理

## git版本控制

```bash
mkdir travel-pc-fis3
cd travel-pc-fis3
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://git.oschina.net/docafe/travel-pc-fis3.git
git push -u origin master

or

git clone https://docafe:1qasde32w@git.oschina.net/docafe/travel-pc-fis3.git
```

## 安装

```bash
npm i
bower i
```

## 运行

```bash
npm start 自动更新www目录
npm run open 打开预览www目录
npm run release 手动更新www目录
npm run dist 发布release 到目录./release
```

> 注：npm start后，刷新下打开的浏览器，下次修改浏览器会自动刷新

## .gitignore

```bash
*.DS_Store
*.log
*.zip
.idea
.sass-cache/
node_modules/
bower_components/
release/
```

## UI参考

http://www.ly.com/dujia/

## 页面和组件规则

- 每个页面/组件为单位，创建独立目录，所有用到的资源都放在这个目录下
- 组件间不要存在复用关系、不互相依赖

## 页面page（28）

页面名称 | 说明
-------------------------------------------|--------------
travel-index.html                          | 旅游-首页
travel-list.html                           | 旅游-列表
travel-info.html                           | 旅游-详情
travel-preorder.html                       | 旅游-预定
travel-pay.html                            | 旅游-支付
travel-login.html                          | 用户-登录
travel-signup-step1.html                   | 用户-注册-第一步
travel-signup-step2.html                   | 用户-注册-第二步
travel-signup-step3.html                   | 用户-注册-第三步
travel-forget-step1.htm                    | 用户-忘记密码-第一步
travel-forget-step2.html                   | 用户-忘记密码-第二步
travel-forget-step3.html                   | 用户-忘记密码-第三步
travel-feedback.html                       | 用户-意见反馈
travel-help.html                           | 帮助中心
travel-note-index.html                     | 游记-首页
travel-note-list.html                      | 游记-列表
travel-note-info.html                      | 游记-详情
travel-note-authorindex.html               | 游记-作者首页
travel-personal-homephonechange1.html      | 游记-修改手机号-第一步
travel-personal-homephonechange2.html      | 游记-修改手机号-第二步
travel-personal-homedata.html              | 游记-个人中心-个人资料
travel-personal-homecontacts.html          | 游记-个人中心-常用联系人
travel-personal-homepassword.html          | 游记-个人中心-修改密码
travel-personal-ordermanage.html           | 游记-个人中心-订单管理
travel-personal-collectmanage.html         | 游记-个人中心-收藏管理
travel-personal-notemanage.html            | 游记-个人中心-游记管理
travel-personal-noterelease.html           | 游记-个人中心-游记发布
travel-personal-notecollect.html           | 游记-个人中心-游记收藏

## 组件widget（41）

- widget列表

页面名称 | 说明
-----------------------------------------------|--------------
modules/ui-modules/header/top-header.html      | 整站顶部
modules/ui-modules/header/header.html          | 整站头部导航
modules/ui-modules/footer/footer.html          | 整站页尾
modules/ui-modules/travel-index-nav/travel-index-nav.html                  | 旅行首页-首屏左侧导航
modules/ui-modules/travel-index-imgroll/travel-index-imgroll.html          | 旅行首页-首页banner图
modules/ui-modules/travel-index-recommend/travel-index-recommend1.html     | 旅行首页-推荐1
modules/ui-modules/travel-index-recommend/travel-index-recommend2.html     | 旅行首页-推荐2
modules/ui-modules/travel-index-recommend/travel-index-recommend3.html     | 旅行首页-推荐3

modules/ui-modules/travel-list-old-scan/travel-list-old-scan.html              | 旅行列表-最近浏览面板
modules/ui-modules/travel-list-city-btn/travel-list-city-btn.html              | 旅行列表-城市选择按钮(出发城市)
modules/ui-modules/travel-list-search-bar/travel-list-search-bar.html          | 旅行列表-搜索框
modules/ui-modules/travel-list-typeselect-bar/travel-list-typeselect-bar.html  | 旅行列表-分类选择
modules/ui-modules/travel-list-product-list/travel-list-product-list.html      | 旅行列表-旅游产品列表

modules/ui-modules/travel-info-breadcrumb/travel-info-breadcrumb.html            | 旅游详情-面包屑导航
modules/ui-modules/travel-info-imgroll/travel-info-imgroll.html                  | 旅游详情-滚动图片
modules/ui-modules/travel-tab-index/travel-tab-index.html                        | 旅游详情-标签选择
modules/ui-modules/travel-info-detail/travel-info-detail.html                    | 旅游详情-详细介绍

modules/ui-modules/travel-search-imgscroll/travel-search-imgscroll.html          | 游记首页-含有搜索框banner
modules/ui-modules/travel-tab-lists/travel-tab-lists.html                        | 游记首页-种类标签切换及内容列表
modules/ui-modules/travel-note-authors/travel-note-authors.html                  | 游记首页-推荐旅行家面板
modules/ui-modules/travel-note-citybanner/travel-note-citybanner.html            | 游记列表-城市头部展示
modules/ui-modules/travel-note-lists/travel-note-lists.html                      | 游记列表-推荐游记列表
modules/ui-modules/travel-note-personlists/travel-note-personlists.html          | 游记列表-作者游记列表
modules/ui-modules/travel-note-citylist/travel-note-citylist.html                | 游记列表-城市搜索列表
modules/ui-modules/travel-author-home/travel-author-home.html                    | 游记详情-作者头像简介
modules/ui-modules/travel-note-infohead/travel-note-infohead.html                | 游记详情-作者主页头部
modules/ui-modules/travel-note-other/travel-note-other.html                      | 游记详情-作者其他游记
modules/ui-modules/travel-note-comment/travel-note-comment.html                  | 游记详情-发表评论

modules/ui-modules/travel-login-tab/travel-login-tab.html                        | 旅游-登录标签切换
modules/ui-modules/travel-feedback-form/travel-feedback-form.html                | 旅游-意见反馈表单
modules/ui-modules/travel-tab-vertical/travel-tab-vertical.html                  | 旅游-竖向标签切换

modules/ui-modules/travel-tab-ajax/travel-tab-ajax.html                                    | 个人中心-左侧导航
modules/ui-modules/travel-person-homedata/travel-person-homedata.html                      | 个人中心-个人资料
modules/ui-modules/travel-person-homecontacts/travel-person-homecontacts.html              | 个人中心-常用联系人
modules/ui-modules/travel-person-homepassword/travel-person-homepassword.html              | 个人中心-修改密码
modules/ui-modules/travel-order-manage/travel-order-manage.html                            | 个人中心-订单管理
modules/ui-modules/travel-order-detail/travel-order-detail.html                            | 个人中心-订单详情
modules/ui-modules/travel-collect-manage/travel-collect-manage.html                        | 个人中心-收藏管理
modules/ui-modules/travel-note-release/travel-note-release.html                            | 个人中心-游记发布
modules/ui-modules/travel-note-manage/travel-note-manage.html                              | 个人中心-游记管理
modules/ui-modules/travel-note-collect/travel-note-collect.html                            | 个人中心-游记收藏


- 调用方式

```html
<link rel="import" href="../../modules/ui-modules/header/header.html?__inline">
```

> 以内容嵌入的方式, 在文件名后面添加 `?__inline`


