// vite.config.js
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import nodeResolve from "@rollup/plugin-node-resolve";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import gzipPlugin from "rollup-plugin-gzip";
import commonjs from "@rollup/plugin-commonjs";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "NuUtils",
      fileName: "nu-utils"
    },
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        rollupNodePolyFill(),
        gzipPlugin(),
        commonjs()
      ]
    }
  },
  plugins: [dts(), react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbHVjYS9udS1wYWNrYWdlcy9wYWNrYWdlcy9udS11dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2x1Y2EvbnUtcGFja2FnZXMvcGFja2FnZXMvbnUtdXRpbHMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2EvbnUtcGFja2FnZXMvcGFja2FnZXMvbnUtdXRpbHMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgbm9kZVJlc29sdmUgZnJvbSAgIFwiQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlXCI7XG5pbXBvcnQgcm9sbHVwTm9kZVBvbHlGaWxsIGZyb20gXCJyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzXCI7XG5pbXBvcnQgZ3ppcFBsdWdpbiBmcm9tICdyb2xsdXAtcGx1Z2luLWd6aXAnXG5pbXBvcnQgY29tbW9uanMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ051VXRpbHMnLFxuICAgICAgZmlsZU5hbWU6ICdudS11dGlscycsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIG5vZGVSZXNvbHZlKHtcbiAgICAgICAgICBicm93c2VyOiB0cnVlLFxuICAgICAgICAgIHByZWZlckJ1aWx0aW5zOiBmYWxzZSxcbiAgICAgICAgfSksXG4gICAgICAgIHJvbGx1cE5vZGVQb2x5RmlsbCgpLFxuICAgICAgICBnemlwUGx1Z2luKCksXG4gICAgICAgIGNvbW1vbmpzKCksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtkdHMoKSxyZWFjdCgpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLG9CQUFvQjtBQUMxVSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQW1CO0FBQzFCLE9BQU8sd0JBQXdCO0FBQy9CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUVyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1AsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsZ0JBQWdCO0FBQUEsUUFDbEIsQ0FBQztBQUFBLFFBQ0QsbUJBQW1CO0FBQUEsUUFDbkIsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksR0FBRSxNQUFNLENBQUM7QUFDekIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
