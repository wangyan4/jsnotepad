$(function(){
  var $editor = new Editor(),
      $statusbar = new StatutsBar();
  $editor.show('body');
  $editor.setFont({
    family:'Arial',
    fontStyle:'常规',
    fsize:'16'
  })
  $statusbar.init({row:1,col:1});
})