require 'rake/clean'

task :default => :local

CLEAN.include('build/', 'vendor/')

desc "Update all of the deps."
task :update do
  Bundler.with_clean_env do
    system "bundle update"
    system "bower update"
  end
end

desc "Run locally and update."
task :local => [:update] do
  Kernel.exec 'middleman'
end

desc "PUSH IT LIVE."
task :deploy do
  Kernel.exec 'middleman deploy'
end

desc "Build a static copy."
task :build => [:clean, :update] do
  Kernel.exec 'middleman build'
end
