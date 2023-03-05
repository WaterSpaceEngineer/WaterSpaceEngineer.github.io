const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');


// Обработка Videos
const videos = () => {
    return src(path.videos.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Videos",
            message: error.message
        }))
    }))
    .pipe(newer(path.videos.dest))
    .pipe(dest(path.videos.dest));
};

module.exports = videos;