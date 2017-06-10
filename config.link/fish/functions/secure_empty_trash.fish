function secure_empty_trash --description 'Secure empty the trash'
  srm -rfv ~/.Trash/*
end
