const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const NODE_ENV = 'process.env.NODE_ENV'; // we set the variable (Maybe we will need to get a env var with process.env.ENV_VAR)
let resolve ={alias:{}};

// Here, we define the rules use in modules
const rules = [];
// Here, we define the pluggings to use
const plugins = [];

if (NODE_ENV === 'production') {
    plugins.push(new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: JSON.stringify(NODE_ENV)
        }
    }));
    resolve ={
    alias:{
        lodash: 'lodash/lodash.min.js'
    }
};
    // Do some cool stuff like uglify, minify...
    // We might want to play with rules or plugins
    rules.unshift({
        test:  /\.jsx?$/,
        exclude: /node_modules/,
        use:['uglify-loader']
    });
}

module.exports = {
    // Entry point of you app
    entry: {
        app: ['./app/js/main.js'],
        vendor: ['lodash']
    },
    // Output of webpack
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Bundle name
    },
    // Here, we define the different loader to use on the different type of file
    module: {
        rules: [
      {
        test: /\.jsx?$/, // Specifiy the file extensions on which we want apply the loader
        exclude: /node_modules/, // Specify the directory to exclude (typically the dependencies directory)
        use: {
             loader: 'babel-loader',
             options: {
                presets: ['es2015']
            }
         },     
      
        test: /\.jsx?$/, // Specifiy the file extensions on which we want apply the loader
        enforce :'pre',
        exclude: /node_modules/, // Specify the directory to exclude (typically the dependencies directory)
        use: {
            loader: 'eslint-loader',
            options: {
                failOnWarning:true,
                failOnError:true
            }
       }
    
    }
    ] // This is an ES6 way to write "rules: rules"
    },
    // Here, we specify the pluggins we want to apply
    plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new TransferWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: 'vendor.js',
            minChnks: Infinity
        })
    ]
};