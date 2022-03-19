// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
// https://headsigned.com/posts/importing-and-using-css-frameworks-with-vue/
// Warning: Do not import the whole framework here! 
// CSS Loader is supposed to only include code that doesn’t generate CSS directly. 
// If you do, every time you use a scoped style in a component, a copy of the whole framework will be appended to the output.

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/specificity-graph/': '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/abstract.scss";`
      }
    }
  }
}