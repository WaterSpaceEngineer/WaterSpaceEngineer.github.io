const pathSrc = "./src";
const pathDest = "./docs";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    scss: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/js/**/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },

    img: {
        src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico,webmanifest}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico,webmanifest}",
        dest: pathDest + "/img"
    },

    videos: {
        src: pathSrc + "/videos/**/*.{png,jpg,jpeg,mp4,webm}",
        watch: pathSrc + "/videos/**/*.{png,jpg,jpeg,mp4,webm}",
        dest: pathDest + "/videos"
    },

    font: {
        src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"
    },

    instructions: {
        src: pathSrc + "/instructions/*.pdf",
        watch: pathSrc + "/instructions/**/*.pdf",
        dest: pathDest + "/instructions"
    },
};