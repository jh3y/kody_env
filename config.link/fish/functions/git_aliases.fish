#A call to this empty function within config.fish will load other aliases in the file.
function git_aliases --description 'load aliases'
end

function gs --description 'git status'
  git status
end

function gau --description 'add upstream to repo'
  git remote add upstream https://github.com/$argv
end

function gfu --description 'fetch upstream'
  git fetch upstream
end

function grb --description 'rebase'
  git rebase -i HEAD~$argv
end

function gpr --description 'pull and rebase upstream given branch'
  git pull --rebase upstream $argv
end

function gaa --description 'add all untracked files'
  git add --all
end

function gpl --description 'make a pull'
    git pull
end

function gcl --description 'clone the provided repo'
  git clone $argv
end

function glg --description 'git log'
  git log
end

function gpu --description 'push changes'
    git push
end

function gca --description 'commit all changes with provided message'
  git commit -a -m $argv
end

function gch --description 'checkout branch'
  git checkout $argv
end

function gcb --description 'checkout and track remote branch'
  git checkout -b $argv origin/$argv
end

function gba --description 'check for available branches'
  git branch -av
end

function gdb --description 'remove branch both locally and remotely'
  git branch -d $argv
  git push origin :$argv
end

function gsu --description 'set up a git repo with a first commit'
  mkdir $argv
  cd $argv
  touch README.md
  git init
  git add README.md
  git commit -m "first commit"
  git remote add origin https://github.com/jh3y/$argv
  git push -u origin master
end

function gfp --description 'first push of new repo after working on files and committing'
  git remote add origin https://github.com/jh3y/$argv
  git push -u origin master
end

function gas --description 'apply stash @'
  git stash apply stash@\{$argv\}
end

function gsl --description 'show stashes'
  git stash list
end

function gsc --description 'clear stashes'
  git stash clear
end

function yolo --description 'force push'
  git push --force
end
