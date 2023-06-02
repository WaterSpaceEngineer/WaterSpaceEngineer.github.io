const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path.js');
const app = require('./config/app.js');

// Задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const index = require('./task/index.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const instructions = require('./task/instructions.js');
const videos = require('./task/videos.js');
const data = require('./task/data.js');

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
};

// Наблюдатель
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.index.watch, index).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
    watch(path.instructions.watch, instructions).on('all', browserSync.reload);
    watch(path.videos.watch, videos).on('all', browserSync.reload);
    watch(path.data.watch, data).on('all', browserSync.reload);
};

const build = series(
    clear,
    parallel( html, index, scss, js, img, font, instructions, videos, data)
);

const dev = series (
    build,
    parallel(watcher, server) 
);

// Задачи
exports.html = html;
exports.index = index;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.instructions = instructions;
exports.videos = videos;
exports.data = data;

// Сборка
exports.default = app.isProd
    ? build
    : dev;
