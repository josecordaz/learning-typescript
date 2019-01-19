module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};
