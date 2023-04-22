  // detected when dom changes in .jw-modal class 
  var targetNode = document.querySelector('.jw-modal');
  var config = { attributes: true, childList: true, subtree: true };
  var callback = function(mutationsList, observer) {
      if (mutationsList[1]) {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {}); 
      }
  };
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

