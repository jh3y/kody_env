#A call to this empty function within config.fish will load other aliases in the file.
function project_utils --description 'load project utils'
end

function gen_gulp_project --description 'generate gulp project'
  mkdir $argv[1]
  cd $argv[1]
  git init
  git clone https://github.com/jh3y/gulp-boilerplate
  cp -a gulp-boilerplate/. ./
  rm -rf gulp-boilerplate
  rm -rf .git/
  npm install
  git init
  git add --all
  sed -i.bak "s/gulp-boilerplate/$argv[1]/g" package.json; and rm package.json.bak
  if test (count $argv) -gt 1
    sed -i.bak "s/a starting point for using gulp/$argv[2]/g" package.json; and rm package.json.bak
  end
end


function open_project --description 'Open a workspace project in atom'
  cd ~/Documents/Workspace/$argv
  atom .
end

function start_dev --description 'Open project and run gulp'
  atom .; and gulp
end
