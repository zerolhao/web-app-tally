module.exports = {
  plugins: {
    autoprefixer: { browsers: ['Android >= 4.0', 'iOS >= 7'] },
    // https://www.jianshu.com/p/8350b611e5bb
    'postcss-pxtorem': {
      rootValue: 75, //设计稿尺寸750
      propList: ['*'],
      minPixelValue: 2
    }
  }
}
/*
// 适配vant的话动态修改rootValue的值
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = ({ file }) => {
  let rootValue
  // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    rootValue = 37.5
  } else {
    rootValue = 75
  }
  return {
    plugins: [
      autoprefixer(),
      pxtorem({
        rootValue: rootValue,
        propList: ['*'],
        minPixelValue: 2
      })
    ]
  }
}
*/
