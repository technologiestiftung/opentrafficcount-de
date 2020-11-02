module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/css/*.css");
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "liquid",
  };
};
