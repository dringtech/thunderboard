import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';

const targetDir = 'docs/js';

// Grab the NODE_ENV and store in targetEnv, default to 'production' if undefined 
const { NODE_ENV: targetEnv = 'production' } = process.env;

// Work out if we're targetting development
const isDev = (targetEnv === 'development');

// Define baseline plugins for transformation
const jsPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(targetEnv),
  }),
  babel({
    configFile: false,          // Read config from here, not babel config file
    runtimeHelpers: true,       // Include runtime Helpers
    exclude: 'node_modules/**', // Only transpile our source code
    presets: [                  // Setup presets
      ['@babel/env', {
        modules: false
      }],
    ],
    plugins: [                  // Setup plugins
      '@babel/transform-runtime'
    ],
  }),
  resolve(),
  commonjs(),
  isDev || uglify(),            // Uglify code unless we're targetting 'development'
  copy({                        // Copy modules to the vendor directory
    targets: [
      'node_modules/@fortawesome/fontawesome-free/js/all.min.js'
    ],
    outputFolder: `${targetDir}/vendor`,
  }),
];

export default [
  {
    input: 'src/main.js',
    plugins: jsPlugins,
    external: [],
    output: {
      name: 'index',
      dir: targetDir,
      format: 'iife',
      globals: {},
    },
  },
];
