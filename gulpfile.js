/* eslint-disable */

const gulp = require('gulp');
const del = require('del');
const htmlbeautify = require('gulp-html-beautify');


gulp.task('default', function () {
    
    function createErrorHandler(name) {
        return function (err) {
            console.error('Error from ' + name + ' in compress task', err.toString());
        };
    }

    // 输出html美化
    var options = {
        "indent_size": 4,
        "indent_char": " ",
        "eol": "\n",
        "indent_level": 0,
        "indent_with_tabs": false,
        "preserve_newlines": true,
        "max_preserve_newlines": 10,
        "jslint_happy": false,
        "space_after_anon_function": false,
        "brace_style": "collapse",
        "keep_array_indentation": false,
        "keep_function_indentation": false,
        "space_before_conditional": true,
        "break_chained_methods": false,
        "eval_code": false,
        "unescape_strings": false,
        "wrap_line_length": 0,
        "wrap_attributes": "auto",
        "wrap_attributes_indent_size": 4,
        "end_with_newline": false
    };
    gulp.src('./release/dist/pages/*.html')
        .on('error', createErrorHandler('gulp.src'))
        .pipe(htmlbeautify(options))
        .on('error', createErrorHandler('htmlbeautify'))
        .pipe(gulp.dest('./release/dist/pages/'))
        .on('error', createErrorHandler('gulp.dest'));

    // 清理加工数据文件
    del([
            './release/bower_components',
            './release/components',
            './release/assets',
            './release/pages',
            './release/modules',
            './release/plugins',
            './release/pkg'
        ])
        .then(paths => {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        })
        .catch(err =>{
            console.error('Error from Deleted compress task', err.toString());
        });

    // 复制plugins目录
    gulp.src('./plugins/**/*.*')
        .pipe(gulp.dest('./release/dist/plugins'));
});