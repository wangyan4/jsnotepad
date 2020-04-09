function MenuBar(){
  var $bar = $('<div class="notepad-menubar"></div>');
  var menuData,
      menus=[],
      active=-1;
  function showMenu(idx,e){
    e.stopPropagation();
    if(active === -1) {
      menus[idx].css({ display: 'inline-block' });
      active = idx;
    } else if(active !== idx) {
      menus[active].css({ display: 'none' });
      menus[idx].css({ display: 'inline-block' });
      active = idx;
    } else {
      menus[active].css({ display: 'none' });
      active = -1;
    }
  }
  function hoverMenu(idx){
    if(active !== -1) {
      menus[active].css({ display: 'none' });
      menus[idx].css({ display: 'inline-block' });
      active = idx;
    }
  }
  function hideMenu() {
    if(active === -1) return;
    menus[active].css({display: 'none'});
    active = -1;
  }
  function init(data){
    //添加title
    var $titles = $('<ul class="menu-title"></ul>');
    for (var i = 0; i < data.length; i++) {
      var $title = $('<li class="title"></li>');
      $title.html(data[i].title);
      $title.appendTo($titles);
      $title.click(showMenu.bind(this,i));
      $title.mouseover(hoverMenu.bind(this,i));
    }
    $bar.append($titles);

    // 添加menus
    for(var i = 0;i<data.length;++i){
      var $menus = $('<ul class="menus"></ul>'),
          items = data[i].menuItems;
      for(var j = 0;j<items.length;++j){
        if(items[j].title === 'hr') {
          var $hr = $('<li class="menu-hr"></li>');
          $menus.append($hr);
          continue;
        }
        var $menu = $('<li class="menu-item"></li>');
        $menu.html(items[j].title);
        if(items[j].shortcut != ''){
          var $shortcut = $('<span class="shortcut"></span>')
          $shortcut.html(items[j].shortcut);
          $menu.append($shortcut);
        }
        var that = items[j].handler;
        $menu.bind('click',{handle:items[j].handler},function(e){
          hideMenu();
          e.data.handle();
        });
        $menus.append($menu);
      }
      $menus.css({
        width: data[i].width,
        left: 54*i+"px",
        display: 'none'
      });
      $bar.append($menus);
      menus.push($menus);
    }
    $('body').append($bar);
  };
  return {
    init:init
  }
}