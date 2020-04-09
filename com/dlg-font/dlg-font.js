var $dlgFont=(function(){
  var $dlg = $(''
  + '<div class="notepad-dlg-mask notepad-dlg-font">'
    + '<div class="dialogbox notepad-dlgbox">'
      + '<div class="notepad-dlg-titlebar">'
        + '<p class="title">字体</p>'
        + '<span class="close-btn" title="关闭">✖</span>'
      + '</div>'
      + '<div class="main notepad-dlg-main">'
        + '<div class="font-family">'
        +'<p>字体(F):</p>'
        +'<div class="notepad-com-list">'
          +'<input class="editor" type="text"><br>'
          +'<ul class="list">'
          +'</ul>'
        +'</div>'
        +'</div>'
        + '<div class="font-style">'
        +'<p>字形(Y):</p>'
        +'<div class="notepad-com-list">'
          +'<input class="editor" type="text"><br>'
          +'<ul class="list">'
          +'</ul>'
        +'</div>'
        +'</div>'
        + '<div class="font-size">'
        +'<p>大小(S):</p>'
        +'<div class="notepad-com-list">'
          +'<input class="editor" type="text"><br>'
          +'<ul class="list">'
          +'</ul>'
        +'</div>'
        +'</div>'
        + '<fieldset class="sample">'
          + '<legend>示例</legend>'
          + '<p class="sample-txt">AaBbYyZz</p>'
        + '</fieldset>'
        + '<div class="script">'
          + '<label>'
            + '脚本(R):<br>'
            + '<select>'
              + '<option value="西欧语言">西欧语言</option>'
              + '<option value="中文 GB2312">中文 GB2312</option>'
            + '</select>'
          + '</label>'
        + '</div>'
        + '<input class="btn-ok btn" type="button" value="确定">'
        + '<input class="btn-cancel btn" type="button" value="取消">'
      + '</div>'
    + '</div>'
  + '</div>');
var cfg={
    font:"Arial",
    style:"常规",
    size:"16",
    selectf:2,
    selects:0,
    selectz:6
  },
    $titleBar=$dlg.find('.notepad-dlg-titlebar'),
    $close = $dlg.find('.close-btn'),
    $cancle = $dlg.find('.btn-cancel');
var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
    styles = ['常规', '斜体', '粗体', '粗斜体'],
    sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
var family = $dlg.find('.font-family'),
    style = $dlg.find('.font-style'),
    size = $dlg.find('.font-size ');
function destory(){
  $dlg.remove();
}

function fullList(){
  fullContent(fonts,family,'family');
  fullContent(styles,style,'style');
  fullContent(sizes,size,'size');
}
function setSample(){
  var $family = family.find('.editor').val(),
      $style = style.find('.editor').val(),
      $size = size.find('.editor').val(),
      $sample = $dlg.find('.sample p');
  $sample.css({
    "font-family":$family,
    "font-size":$size+"px"
  });
  if($style=='斜体'){
    $sample.css("font-style","italic")
  }
  if($style=='粗体'){
   $sample.css("font-weight","bold")
 }
 if($style=='粗斜体'){
   $sample.css({"font-style":"italic","font-weight":"bold"})
 }
}
function selectedItem(des,i,type){
  if(type == 'family'){
    $(des.find('.item')[cfg.selectf]).removeClass('selected')
    $(des.find('.item')[i]).addClass('selected');
    cfg.selectf=i;
    des.find('.editor').val(fonts[i]);
  }
  if(type == 'style'){
    $(des.find('.item')[cfg.selects]).removeClass('selected')
    $(des.find('.item')[i]).addClass('selected');
    cfg.selects=i;
    des.find('.editor').val(styles[i]);
  }
  if(type == 'size'){
    $(des.find('.item')[cfg.selectz]).removeClass('selected')
    $(des.find('.item')[i]).addClass('selected');
    cfg.selectz=i;
    des.find('.editor').val(sizes[i]);
  }
  setSample();
}
function fullContent(data,des,type){
  if(type == 'family'){
    for(var i = 0;i<data.length;++i){
      var $li=$('<li class="item"></li>');
      $li.css("font-family",data[i]);
      $li.html(data[i]);
      $li.click(selectedItem.bind(this,des,i,type))
      des.find('.list').append($li);
    }
  }
  if(type == 'style'){
     for(var i = 0;i<data.length;++i){
       var $li = $('<li class="item"></li>');
       if(data[i]=='斜体'){
         $li.css("font-style","italic")
       }
       if(data[i]=='粗体'){
        $li.css("font-weight","bold")
      }
      if(data[i]=='粗斜体'){
        $li.css({"font-style":"italic","font-weight":"bold"})
      }
       $li.html(data[i]);
       $li.click(selectedItem.bind(this,des,i,type))
      des.find('.list').append($li);
     }
  }
  if(type == 'size'){
    for(var i = 0;i<data.length;++i){
      var $li = $('<li class="item"></li>');
      $li.html(data[i]);
      $li.click(selectedItem.bind(this,des,i,type))
      des.find('.list').append($li);
    }
  }
  
}
function startselect(){
  var choice1 = $(family.find('.item')[cfg.selectf]),
      choice2 = $(style.find('.item')[cfg.selects]),
      choice3 = $(size.find('.item')[cfg.selectz]);
  family.find('.editor').val(choice1.html());
  style.find('.editor').val(choice2.html());
  size.find('.editor').val(choice3.html());
  choice1.addClass('selected');
  choice2.addClass('selected');
  choice3.addClass('selected');
  setSample();
}
function show(conf){
  $.extend(cfg,conf);
  $dlg.find('.dialogbox').draggable({handle: $titleBar});
  $close.click(destory);
  $cancle.click(destory);
  fullList();
  startselect();
  $('body').append($dlg);
}
return {
  show:show
}
})()
