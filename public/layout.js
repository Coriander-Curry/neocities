// Everything in here is executed once the DOM (the HTML content of your website) has finished loading.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (document.body.classList.contains("no-layout")) return;

//   // Inserting your header and footer:
//   document.body.insertAdjacentHTML("afterbegin", headerEl);
//   document.body.insertAdjacentHTML("beforeend", footerEl);
  // Inserting your header and footer:
  const layoutEl = document.querySelector(".layout");
  layoutEl.insertAdjacentHTML("afterbegin", headerEl);
  layoutEl.insertAdjacentHTML("beforeend", footerEl);

  // To insert something inside another element, e.g. for sidebars:
  const wrapperEl = document.querySelector(".my-wrapper"); // <- your selector here
  if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
  if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

  // Give class 'active' to links to the current page:
  initActiveLinks();

  // add your own JavaScript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
    <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <header> element, but I recommend it.
const headerEl = `
 <header>
  <div class="header-content">
	        <div class="header-title">Coriander Curry</div>
	        
	        <!-- NAVIGATION -->
	        <nav>
	          <ul>
              <li><a href="index.html">Home</a></li>
	            <li><a href="about-me.html">About</a></li>
	            <li><a href="tutorials.html">Tutorials</a></li>
              <li><a href="projects.html">Projects</a></li>
	            <li><a href="blog.html">Blog</a></li>
	            <li>
	                <strong>Gallery</strong>
	                <ul>
	                  <li><a href="/page-a">Costumes</a></li>
	                  <li><a href="/page-b">Quilts</a></li>
	                  <li><a href="/page-c">Clothes</a></li>
	                  <li><a href="/page-d">Dolls</a></li>
	            
	                </ul>
	            </li>
	          </ul>
	        </nav>
        	
        </div>
      </header>

            <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">Guestbook placeholder</div>
          <p>Leave a note</p>
          <p>and don't be a jerk :p</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Currently</div>
          <blockquote>
            <p>calculating cost per square inch of muslin</p>
            <p>rehoming spiders to the great outdoors</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Meet the cats =^.^=</div>
          <ul>
            <li><a href="/">Dominic</a></li>
            <li><a href="/">Cameo</a></li>
          </ul>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Dominic</div>
            <img class="full-width-image" src="images/dominic.jpg">
        </div>

        <dif class="sidebar-section">
          <div class="sidebar-title">Cameo</div>
            <img class="full-width-image" src="images/cameo.jpg">
        </dif>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Following tutorials by:</div>
          <marquee>
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          
          </marquee>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">You scrolled to the bottom</div>
        </div>
      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">
	  
        
        <div class="sidebar-section">
          <div class="sidebar-title">Snippets</div>
          <p>and scraps of thread from the cutting room floor</p>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Recently completed media</div>
          <blockquote>
            <p>Pete and Pete</p>
            <p>Apothecary Diaries</p>
          </blockquote>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Current Projects</div>
          <ul>
            <li><a href="/">Murder in the Alps MQAL</a></li>
            <li><a href="/">Tee Shirt Scraps</a></li>
            <li><a href="/">Big HST from FQs</a></li>
            <li><a href="/">Butterfly Effect</a></li>
          </ul>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Surfing the net</div>
          <img class="full-width-image" src="https://picsum.photos/id/37/1000/400">
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">Layout by</div>
          <div class="site-button">
          	<a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/public/img/linkback.gif" alt="petrapixel"></a>
          </div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Listening to~</div>
          <iframe src="https://petracoding.github.io/neocities/widgets/lastfm?center=0&marquee=1&font-family=Times New Roman&font-size=16px&color=#c85acb&username=Coriander-Curry&swapPositions=0&delimiter=by&underline="  frameborder="0" title="Last.Fm Status"></iframe>
        </div>
      </aside>
    
`;

// Insert your footer HTML inside these ``. You can use HTML as usual. 
// You don't need to use the <footer> element, but I recommend it.
const footerEl = `

`;