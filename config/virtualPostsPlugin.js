const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');

const BLOG_DIR = path.resolve(__dirname, '../statics/posts/');
const CODE_DIR = path.resolve(__dirname, '../statics/code/');
const JOBS_DIR = path.resolve(__dirname, '../statics/jobs/');

const posts = {};
const code = {};
const jobs = {};

fs.readdirSync(BLOG_DIR).forEach((file) => {
  const contents = fs.readFileSync(path.resolve(BLOG_DIR, file));
  posts[file.replace('.md', '')] = matter(contents).data;
});

fs.readdirSync(CODE_DIR).forEach((file) => {
  const contents = fs.readFileSync(path.resolve(CODE_DIR, file));
  code[file.replace('.md', '')] = matter(contents);
});

fs.readdirSync(JOBS_DIR).forEach((file) => {
  const contents = fs.readFileSync(path.resolve(JOBS_DIR, file));
  jobs[file.replace('.md', '')] = matter(contents);
});

const virtualModules = new VirtualModulesPlugin({
  'node_modules/Blog.js': `module.exports = ${JSON.stringify(posts)};`,
  'node_modules/Code.js': `module.exports = ${JSON.stringify(code)};`,
  'node_modules/Jobs.js': `module.exports = ${JSON.stringify(jobs)};`,
});

module.exports = virtualModules;
