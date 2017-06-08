/* eslint-disable */

////////////////////////////////////////////////////////////////////////
// 基础配置

fis.config.set("project.watch.usePolling", true)

// 过滤
fis.set('project.ignore', [
  
  'README.md',// 说明文件
  '.gitignore', '.jshintrc',// git jshint 配置文件
  'fis-conf.js','fis-plus.js', 'gulpfile.js',// 工程化配置文件
  'package.json', 'bower.json', // 包配置文件
  'release/**',// 发布目录
  'plugins/**',// 插件目录
  'doc/**',// 文档目录
  'bower_components/**',// bower包目录
  'node_modules/**'// node包目录

]);
// 配置 hash 合并图 优化图片
fis.match('*', {
  useHash: false,
  useSprite: false,
  optimizer: null
});
// 插件装载
fis.match('::packager', {
  postpackager: fis.plugin('loader')
});

// ejs模板开启
fis.match('**.html', {
    parser: fis.plugin('html-ejs', {
        // options
    })
});

// scss启用
fis.match('**/pages/**/(*.{scss,sass})', {
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  release: '/dist/css/page-$1',
  url: '../css/page-$1'
  // optimizer: fis.plugin('clean-css')
});
fis.match('**/ui-modules/**/(*.{scss,sass})', {
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  release: '/dist/css/widget-$1',
  url: '../css/widget-$1'
  // optimizer: fis.plugin('clean-css')
});

////////////////////////////////////////////////////////////////////////
// 压缩

// js
// fis.match('*.js', {
//   // fis-optimizer-uglify-js 插件进行压缩，已内置
//   optimizer: fis.plugin('uglify-js')
// });
// css
// fis.match('*.css', {
//   // fis-optimizer-clean-css 插件进行压缩，已内置
//   optimizer: fis.plugin('clean-css')
// });
// // png
// fis.match('*.png', {
//   // fis-optimizer-png-compressor 插件进行压缩，已内置
//   optimizer: fis.plugin('png-compressor')
// });


////////////////////////////////////////////////////////////////////////
// 打包顺序
// 值越小打包越靠前。-100比-99靠前。

// js
// fis.match('bower_components/modjs/mod.js', {
//   packOrder: -100
// });
// fis.match('bower_components/jquery/dist/jquery.js', {
//   packOrder: -99
// });
// fis.match('bower_components/bootstrap/dist/js/bootstrap.js', {
//   packOrder: -98
// });
// // css
// fis.match('bower_components/normalize-css/normalize.css', {
//   packOrder: -50
// });
// fis.match('bower_components/bootstrap/dist/css/bootstrap.css', {
//   packOrder: -49
// });


////////////////////////////////////////////////////////////////////////
// commonjs模块化

// // jquery
// fis.match('bower_components/jquery/dist/jquery.js', {
//   isMod: true
// });
// // bootstrap
// fis.match('bower_components/bootstrap/dist/js/bootstrap.js', {
//   isMod: true
// });

// // 模块别名
// fis.hook('commonjs', {
//   paths: {
//     'jquery': 'bower_components/jquery/dist/jquery.js',
//     'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.js'
//   }
// });

// // 标记js模块
// fis.match('({components,pages})/**.js', {
//   isMod: true
// });

// js模块合并
// fis.match('components/js-modules/function/cz*.js', {
//     packTo: 'dist/lib/czFunction.js'
// });
// fis.match('bower_components/**/({jquery.js,js/bootstrap.js})', {
//     packTo: 'dist/lib/czCore.js'
// });
// 修正引用地址
// fis.match('dist/lib/czFunction.js', {
//   url: '../lib/czFunction.js'
// });
// fis.match('dist/lib/czCore.js', {
//   url: '../lib/czCore.js'
// });

// css模块合并
// fis.match('bower_components/**/({normalize.css,dist/css/bootstrap.css})', {
//     packTo: 'dist/lib/czCore.css'
// });
// 修正引用地址
// fis.match('dist/lib/czCore.css', {
//   url: '../lib/czCore.css'
// });


////////////////////////////////////////////////////////////////////////
// 资源目录重定义

// fis.match('/plugins/**', {
//   release: '/dist$0',
// });

// ==================================================
// 图片重定向
// ==================================================
fis.match('/pages/**/(*.{png,jpg})', {
  release: '/dist/img/page-$1',
  url: '../img/page-$1'
});
fis.match('/assets/**/(*.{png,jpg,ico})', {
  release: '/dist/img/asset-$1',
  url: '../img/asset-$1'
});
fis.match('/modules/ui-modules/**/(*.{png,jpg,gif})', {
  release: '/dist/img/widget-$1',
  url: '../img/widget-$1'
});

// ==================================================
// js重定向
// ==================================================
fis.match('/modules/ui-modules/**/(*.{js,jsx})', {// ui组件js
    release: '/dist/js/widget-$1',
    url: '../js/widget-$1'
});
fis.match('/pages/**/(*.{js,jsx})', {
    release: '/dist/js/page-$1',
    url: '../js/page-$1'
});
fis.match('/plugins/**/*.js', {
    url: '..$0'
});

// ==================================================
// css重定向
// ==================================================
fis.match('/modules/ui-modules/**/(*.{css,less})', {// ui组件css
    release: '/dist/css/widget-$1',
    url: '../css/widget-$1'
});
fis.match('/pages/**/(*.{css,less})', {
  release: '/dist/css/page-$1',
  url: '../css/page-$1'
});
fis.match('/plugins/**/*.css', {
    url: '..$0'
});

// ==================================================
// html重定向
// ==================================================
fis.match('/pages/**/(*.{html,htm})', {
  release: '/dist/pages/$1',
  url: '../pages/$1'
});

// ==================================================
// json重定向
// ==================================================
fis.match('/assets/data/(*.{json,txt})', {
  release: '/dist/data/$1',
  url: '../data/$1'
});

// ==================================================
// font重定向
// ==================================================
// fis.match('/plugins/**/(*.{ttf,eot,svg,woff,woff2})', {
//     url: '../fonts/$1'
// });
// fis.match('/assets/fonts/(*.{ttf,eot,svg,woff,woff2})', {
//   release: '/dist/fonts/$1',
//   url: '../fonts/$1'
// });
// fis.match('**/plugins/**/(*.{ttf,eot,svg,woff,woff2})', {
//   release: '/dist/fonts/$1',
//   url: '../fonts/$1'
// });
// fis.match('/bower_components/**/(*.{ttf,eot,svg,woff,woff2})', {
//   release: '/dist/fonts/$1',
//   url: '../fonts/$1'
// });

// ==================================================
// cur重定向
// ==================================================
// fis.match('/plugins/**/(*.{cur,cur2})', {
//     url: './$1'
// });

/* eslint-enable */
