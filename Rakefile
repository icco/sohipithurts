task :update do
  Bundler.with_clean_env do
    system "bundle update"
    system "bower update"
  end
end

task :local => [:update] do
  Kernel.exec 'middleman'
end