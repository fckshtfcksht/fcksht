module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("shop", function(collectionApi) {
    return collectionApi.getFilteredByTag("shop");
  });
  return {
    dir: { input: ".", output: "_site" }
  };
};
