const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');


// Обработка Data
const data = () => {
    return src(path.data.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Videos",
            message: error.message
        }))
    }))
    .pipe(newer(path.data.dest))
    .pipe(dest(path.data.dest));
};

module.exports = data;