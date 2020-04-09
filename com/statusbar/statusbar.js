/* exported $statusBar */
function StatutsBar() {
  var $barHtml = $(''
   + '<div class="notepad-statusbar">'
    + '<div class="left-panel"></div>'
    + '<div class="right-panel">'
      + '<p class="line"></p>'
    + '</div>'
   + '</div>');

  var $line = $barHtml.find('.line'),
      cfg = {row: 1, col: 1};

  function isShow(isVisable) {
    isVisable ? $barHtml.css('display', 'block'):$barHtml.css('display', 'none');
  }

  function setLine(r, c) {
    $line.html('第&nbsp;'+r+'&nbsp;行，第&nbsp;'+c+'&nbsp;列');
  }

  function init(conf) {
    $.extend(cfg, conf);
    setLine(cfg.row, cfg.col);
    $('body').append($barHtml);
  }

  return {
    init: init, 
    setLine: setLine,
    isShow: isShow
  };
};
