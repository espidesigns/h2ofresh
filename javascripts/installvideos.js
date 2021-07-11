var aq4000install = new Object();

aq4000install.prepareaq4000overlay = function() {
  var aq4000container = $("overlay");
  
  if (aq4000container) {
    aq4000container.anim = new fx.Opacity(aq4000container, {duration: 300});
	aq4000container.anim.hide();
  }
}

aq4000install.aq4000overlay = function() {
  var arrayPageSize = getPageSize();
  var arrayPageScroll = getPageScroll();
  
  var aq4000container = $("overlay");
  aq4000container.style.height = (arrayPageSize[1] + "px");
  aq4000container.anim.custom(0,.8);
}

aq4000install.showaq4000dialog = function(aq4000element) {
  var theaq4000element = $(aq4000element);
  
  var aq4000dialog = document.getElementsByClassName('videoDialog',theaq4000element);
  $A(aq4000dialog).each(function(aq4000node) {
    // node is the individual element
    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

   	aq4000node.style.display = "block";
    aq4000node.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - aq4000node.clientHeight) / 2) + 'px');
    aq4000node.style.left = (((arrayPageSize[2] - aq4000node.clientWidth) / 2) + 'px');

  });
}
aq4000install.closevideo = function(aq4000close){
  var theaq4000close = $(aq4000close);
  
  var aq4000dialog = document.getElementsByClassName('videoDialog',theaq4000close);
  $A(aq4000dialog).each(function(aq4000node) {
    // node is the individual element
	$('overlay').anim.custom(.8, 0);
	aq4000node.style.display = 'none';
  });
}


var aq4100install = new Object();

aq4100install.prepareaq4100overlay = function() {
  var aq4100container = $("overlay");
  
  if (aq4100container) {
    aq4100container.anim = new fx.Opacity(aq4100container, {duration: 300});
	aq4100container.anim.hide();
  }
}

aq4100install.aq4100overlay = function() {
  var arrayPageSize = getPageSize();
  var arrayPageScroll = getPageScroll();
  
  var aq4100container = $("overlay");
  aq4100container.style.height = (arrayPageSize[1] + "px");
  aq4100container.anim.custom(0,.8);
}

aq4100install.showaq4100dialog = function(aq4100element) {
  var theaq4100element = $(aq4100element);
  
  var aq4100dialog = document.getElementsByClassName('videoDialog',theaq4100element);
  $A(aq4100dialog).each(function(aq4100node) {
    // node is the individual element
    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

   	aq4100node.style.display = "block";
    aq4100node.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - aq4100node.clientHeight) / 2) + 'px');
    aq4100node.style.left = (((arrayPageSize[2] - aq4100node.clientWidth) / 2) + 'px');

  });
}
aq4100install.closevideo = function(aq4100close){
  var theaq4100close = $(aq4100close);
  
  var aq4100dialog = document.getElementsByClassName('videoDialog',theaq4100close);
  $A(aq4100dialog).each(function(aq4100node) {
    // node is the individual element
	$('overlay').anim.custom(.8, 0);
	aq4100node.style.display = 'none';
  });
}


var aq4056install = new Object();

aq4056install.prepareaq4056overlay = function() {
  var aq4056container = $("overlay");
  
  if (aq4056container) {
    aq4056container.anim = new fx.Opacity(aq4056container, {duration: 300});
	aq4056container.anim.hide();
  }
}

aq4056install.aq4056overlay = function() {
  var arrayPageSize = getPageSize();
  var arrayPageScroll = getPageScroll();
  
  var aq4056container = $("overlay");
  aq4056container.style.height = (arrayPageSize[1] + "px");
  aq4056container.anim.custom(0,.8);
}

aq4056install.showaq4056dialog = function(aq4056element) {
  var theaq4056element = $(aq4056element);
  
  var aq4056dialog = document.getElementsByClassName('videoDialog',theaq4056element);
  $A(aq4056dialog).each(function(aq4056node) {
    // node is the individual element
    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

   	aq4056node.style.display = "block";
    aq4056node.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - aq4056node.clientHeight) / 2) + 'px');
    aq4056node.style.left = (((arrayPageSize[2] - aq4056node.clientWidth) / 2) + 'px');

  });
}
aq4056install.closevideo = function(aq4056close){
  var theaq4056close = $(aq4056close);
  
  var aq4056dialog = document.getElementsByClassName('videoDialog',theaq4056close);
  $A(aq4056dialog).each(function(aq4056node) {
    // node is the individual element
	$('overlay').anim.custom(.8, 0);
	aq4056node.style.display = 'none';
  });
}

var aq4105install = new Object();

aq4105install.prepareaq4105overlay = function() {
  var aq4105container = $("overlay");
  
  if (aq4105container) {
    aq4105container.anim = new fx.Opacity(aq4105container, {duration: 300});
	aq4105container.anim.hide();
  }
}

aq4105install.aq4105overlay = function() {
  var arrayPageSize = getPageSize();
  var arrayPageScroll = getPageScroll();
  
  var aq4105container = $("overlay");
  aq4105container.style.height = (arrayPageSize[1] + "px");
  aq4105container.anim.custom(0,.8);
}

aq4105install.showaq4105dialog = function(aq4105element) {
  var theaq4105element = $(aq4105element);
  
  var aq4105dialog = document.getElementsByClassName('videoDialog',theaq4105element);
  $A(aq4105dialog).each(function(aq4105node) {
    // node is the individual element
    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

   	aq4105node.style.display = "block";
    aq4105node.style.top = (arrayPageScroll[1] + ((arrayPageSize[3] - aq4105node.clientHeight) / 2) + 'px');
    aq4105node.style.left = (((arrayPageSize[2] - aq4105node.clientWidth) / 2) + 'px');

  });
}
aq4105install.closevideo = function(aq4105close){
  var theaq4105close = $(aq4105close);
  
  var aq4105dialog = document.getElementsByClassName('videoDialog',theaq4105close);
  $A(aq4105dialog).each(function(aq4105node) {
    // node is the individual element
	$('overlay').anim.custom(.8, 0);
	aq4105node.style.display = 'none';
  });
}

function getPageScroll() {
  var yScroll;
  
  if (self.pageYOffset) {
    yScroll = self.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) { // IE Strict
    // in standard compliant mode, some properties of document.body are reassigned
    // to document.documentElement
    // in IE 5 though, the properties still belong to document.body
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) { // all other IE
    yScroll = document.body.scrollTop;
  }
  
  arrayPageScroll = new Array('', yScroll);
  
  return arrayPageScroll;
}

function getPageSize() {
  var xScroll, yScroll;
  
  if (window.innerHeight && window.scrollMaxY) {
    xScroll = document.body.scrollWidth;
    yScroll = window.innerHeight + window.scrollMaxY;
  } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but IE Mac
    xScroll = document.body.scrollWidth;
    yScroll = document.body.scrollHeight;
  } else { // IE Mac...would also work in IE 6 Strict, FF, Safari
    xScroll = document.body.offsetWidth;
    yScroll = document.body.offsetHeight;
  }
  
  var windowWidth, windowHeight;
  
  if (self.innerHeight) { // all except IE
    windowWidth = self.innerWidth;
    windowHeight = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientHeight) { // IE Strict
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  } else if (document.body) { // other IE
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
  }
  
  // for small pages with total height less than height of the viewport
  if (yScroll < windowHeight) {
    pageHeight = windowHeight;
  } else {
    pageHeight = yScroll;
  }
  
  // for small pages with total width less than width of the viewport
  if (xScroll < windowWidth) {
    pageWidth = windowWidth
  } else {
    pageWidth = xScroll;
  }
  
  arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
  
  return arrayPageSize;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}