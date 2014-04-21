require 'rake/clean'

task :default => :local

CLEAN.include('build/', 'vendor/')

task :update do
  Bundler.with_clean_env do
    system "bundle update"
    system "bower update"
  end
end

task :local => [:update] do
  Kernel.exec 'middleman'
end

task :deploy => [:clean, :update] do
  Kernel.exec 'middleman deploy'
end

task :build => [:clean, :update] do
  Kernel.exec 'middleman build'
end
