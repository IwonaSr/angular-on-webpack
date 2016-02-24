require("babel-core/register")({
    presets: [
        "es2015"
    ]
});

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver:'node_modules/chromedriver/bin/chromedriver',
  baseUrl: 'http://0.0.0.0:8080',
  specs: ['./e2e/**/*test.js']
}
