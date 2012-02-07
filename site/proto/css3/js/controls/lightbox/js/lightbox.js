function Lightbox(params) {

  var lightbox;
  lightbox = document.getElementById("lightbox");
  if (!lightbox) {
	lightbox = document.createElement("section");
	lightbox.setAttribute("id", "lightbox");
	document.body.appendChild(lightbox);
  }

  var image = document.createElement("img");
  image.setAttribute("id", "image");
  image.setAttribute("src", params.image);
  image.setAttribute("alt", "Click to Play Video");
  image.setAttribute("title", "Click to Play Video");
  image.setAttribute("tabIndex", 1);
  image.onclick = function(e) {
	open(e);
  };

  var menuItem = document.getElementById("watch");
  if (menuItem) {
	menuItem.onclick = function(e) {
	  open(e);
	};
  }
  
  var cross = document.createElement("img");
  cross.setAttribute("id", "cross");
  cross.setAttribute("src", params.cross);
  cross.setAttribute("alt", "Click to Stop Video");
  cross.setAttribute("title", "Click to Stop Video");
  cross.onclick = function(e) {
	close(e);
  };
  
  document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {
	  close(e);
	}
  }, false);
  
  var overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  
  var box = document.createElement("div");
  box.setAttribute("id", "box");
  box.appendChild(cross);
  
  lightbox.appendChild(image);
  lightbox.appendChild(overlay);
  lightbox.appendChild(box);
  
  var iframe = document.getElementsByTagName("iframe");
  
  function open(e) {
	e.preventDefault();
	overlay.style.height = "100%";
	overlay.style.opacity = "0.9";
	iframe[0].style.display = "block";
	box.style.top = "25%";
	box.style.left = "25%";
	box.style.height = params.height;
	box.style.width = params.width;
	box.style.opacity = "1";
	params.imageFunc();
  };
  
  function close(e) {
	e.preventDefault();
	overlay.style.opacity = "0";
	overlay.style.height = "0%";
	iframe[0].style.display = "none";
	box.style.opacity = "0";
	box.style.top = "0";
	box.style.left = "0";
	box.style.height = "0";
	box.style.width = "0";
	params.closeFunc();
  };
};
