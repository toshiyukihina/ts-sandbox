gulp = require 'gulp'
ts = require 'gulp-typescript'

gulp.task 'ts', ->
  gulp.src './src/**/*.ts'
    .pipe ts
      target: 'ES6'
      removeComments: true
    .js
    .pipe gulp.dest './dist'

gulp.task 'default', ['ts']
