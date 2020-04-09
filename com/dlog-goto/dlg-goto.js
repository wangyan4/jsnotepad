var $dlgGoto = (function(){
  var html='<div class="notepad-dlg-goto">'
        +'<div class="dialogbox">'
         +'<div class="titlebar">'
            +'<p class="title">转到指定行</p>'
           + '<span class="close-btn">✖</span>'
          +'</div>'
          +'<div class="main">'
           +'<label for="">行号(L)</label>'
           +'<br>'
           +'<input class="txt-line-num" autofocus type="text">'
           +'<br>'
           +'<input class="btn-goto" type="button" value="转到">'
           +'<input class="btn-cancel" type="button" value="取消">'
          +'</div>'
        +'</div>'
      +'</div>';
  var $dlg=$(html),
    $titleBar=$dlg.find('.titlebar'),
    $cancle = $dlg.find('.btn-cancel'),
    $close = $dlg.find('.close-btn'),
   cfg={
    linenum:0,
    totalline:0,
    container:"body"
  };
  
  function show(conf){
    $.extend(cfg,conf);
    $dlg.find('.txt-line-num').val(cfg.linenum);
    $dlg.find('.dialogbox').draggable({handle: $titleBar});
    $dlg.appendTo($(cfg.container));
    $cancle.click(destory);
    $close.click(destory); 

  }
  function destory(){
    $dlg.remove();
  }
  return ({
    show:show
  })
})();