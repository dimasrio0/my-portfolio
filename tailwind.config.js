/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require("flowbite/plugin")];
