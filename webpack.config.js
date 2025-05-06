module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|svg|cur|woff|woff2|ttf|otf)(\?\S*)?$/,
        type: "asset/resource",
      },
    ],
  },
};
