const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const webpHtml = require('gulp-webp-html');

// Обработка INDEX
const index = () => {
    return src(path.index.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "INDEX",
            message: error.message
        }))
    }))
    .pipe(webpHtml())
    .pipe(fileInclude())
    .pipe(htmlmin(app.htmlmin)) // плагин минификации
    .pipe(dest(path.index.dest));
};

module.exports = index;