function Editor () {
  var $editor = $('<div class="notepad-editor"><textarea spellcheck="false" auto-size="none" wrap="off"></textarea></div>');
  var $textArea= $editor.find('textarea');
  this.setFont=function(e){
    $textArea.css({'font-family': e.family, 'font-size': e.fsize + 'pt'});

    if(e.style === '斜体') {
      $textArea.css({'font-style': 'italic'});
      return;
    }

    if(e.style === '粗体') {
      $textArea.css({'font-weight': 'bold'});
      return;
    }

    if(e.style === '粗偏斜体') {
      $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
      return;
    }
  }
  this.show = function (dom) {
    $(dom).append($editor);
  };
}