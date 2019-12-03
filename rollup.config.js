import babel from "rollup-plugin-babel";
import path from "path";

export default [{
  input: path.resolve(__dirname, "source/index.js"),
  external: ["@babel/standalone"],
  plugins: [
    babel({
      exclude: /node_modules/
    })
  ],
  output: [
    {
      dir: path.resolve(__dirname, "dist"),
      globals: {
        "@babel/standalone": "Babel"
      },
      format: "es",
      sourcemap: false
    }
  ]
}];
