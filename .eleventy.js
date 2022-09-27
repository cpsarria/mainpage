module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })
    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}