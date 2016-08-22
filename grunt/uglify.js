module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'views/src/js',
            src: '*.js',
            dest: 'views/dist/js',
            ext: '.min.js'
        }]
    }
};