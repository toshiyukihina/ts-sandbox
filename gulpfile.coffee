gulp = require 'gulp'
ts = require 'gulp-typescript'
watch = require 'gulp-watch'

gulp.task 'watch', ->
  watch 'src/**/*.ts', ->
    gulp.start ['ts']

gulp.task 'ts', ->
  gulp.src './src/**/*.ts'
    .pipe ts
      target: 'ES6'
      removeComments: true
    .js
    .pipe gulp.dest './dist'

gulp.task 'default', ['ts', 'watch']
