/**
 * Created by Tianbin on 2017/4/11.
 */

process.env.NODE_ENV = 'production';

var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var config = require('../config');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.config');

var spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), function (err) {
    if (err) throw err;
    webpack(webpackConfig, function(err, stats) {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');
    })
});
