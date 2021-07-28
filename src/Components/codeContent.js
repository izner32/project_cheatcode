const content = [
        { webdev: [
            { html: 
`<!-- LESSON 2.2 - PARAGRAPHS -->
<p>creating a paragraph</p>

<!-- LESSON 2.3 - HEADLINES -->
<h1>this ranges from h1-h6</h1>

<!-- LESSON 2.4 - ITALICS AND BOLD -->
<i>visual only italics</i>
<em>emphasis italics</em>

<b>visual only bold</b>
<strong>emphasis bold</strong>

<!-- LESSON 2.5 - LIST -->
<!-- unordered list -->
<ul>
<lh>Unordered List Title</lh>
<li>List Item 1</li>
<li>List Item 2</li>
</ul>

<!-- ordered list -->
<ol>
<lh>Ordered List Title</lh>
<li>List Item 1</li>
<li>List Item 2</li>
</ol>

<!-- list with key-value pair | definition list -->
<dl>
<dt>definition title</dt>
<dd>definition description | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi porro eius neque alias, earum deleniti. Et, similique? Cum qui, impedit repellat, magni reiciendis, nobis atque maxime non cupiditate explicabo assumenda.</dd>
</dl>

<!-- LESSON 2.6 - QUOTES -->
<!-- block quote-->
<blockquote>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat odio vitae dolor nesciunt reiciendis quidem praesentium minus provident, numquam iste sint veritatis magni rem alias consequuntur neque voluptatum possimus inventore!</p>
<cite> - Renz</cite>
</blockquote>

<!-- inline quote -->
<p>Renz said,
<q>automatically adding quotemarks, and italicizing it like a real quote</q> <!-- adding quotemarks and making this a quote -->
</p>

<!-- LESSON 2.7 - DATES AND TIMES -->
<time>May 8 2025</time>
<time datetime = "2025-05-8">May 8, 2025</time> <!-- adding datetime attribute that lets the computer know what date it is-->
<time datetime = "14:15:00">adding time</time> <!-- adding time -->
<time datetime = "2020-11-04 19:00-0500">qwerty</time> <!-- mergin time and date -->

<!-- LESSON 2.8 - CODES,PRE AND BR -->
<p>
We can write this
<code>if (x == 0){</code> <!-- adding inline code-->
or <br> <!-- adding line break, for adding space on elements -->
this but...
</p>

<p>
<pre> <!-- adding pre so html would notice the spaces, line breaks and everything-->
We can write this
                    look how many space <!-- without pre, all of these would be inline and these white spaces wouldn't be noticed -->
or  
this but...
</pre>
</p>

<!-- LESSON 2.9 - SUPERSCRIPTS, SUBSCRIPTS, AND SMALL TEXT -->
<p>adding subscript for this element: H
<sub>2</sub> <!-- adding subscript -->
0
<br>
and adding superscript for this squaring: 5
<sup>2</sup> = 25 <!-- adding superscript -->
</p>

<!-- marking text that has little importance -->
<small>© Renz Carillo 2021</small> <!-- adding small text -->

<!-- LESSON 3.2 - ATTRIBUTE -->
<!-- some of the most common attributes, some attributes are global and some are local to specific elements -->

<!-- four most important global attributes -->
<h1 class = "text-h1">Hello World</h1> <!-- class and id are used to identify this specific element which is to be used in css/javascript -->
<h2 id = "text-id">Hello World</h2> <!-- id must be unique -->
<html lang = "en">Hello World</h3> <!-- used to identify the language of the text -->
<h4 dir = "rtl">Hello World</h4> <!-- dir means direction of the text is from right-to-left-->

<!-- LESSON 3.3 - ARIA ROLE - an attribute used to provide information to people with disabilities -->
<h1 aria-label = "Hello World">Hello World</h1>

<!-- LESSON 3.5 - HTML ENTITITES - weird characters, to add symbol or signs -->
<!-- there are tons of them and i'm only gonna provide a single example -->
<p>Find out more on LinkedIn&nbsp;Learning.</p> <!-- &nbsp; means linkedin learning cannot be seperated from each other -->

<!-- LESSON 4.1 - LINKS -->
<a href = "https://www.google.com">Contact Me</a> <!-- adding anchor(link) | adding https:// is important -->

<!-- LESSON 4.3 - CREATING A NAVIGATION -->
<nav role="navigation" aria-label="main menu"> <!-- adding role means you're saying to the browser that this is the role of this element -->
<ul class = "navbar">
    <li><a href = "about/home">Home</a></li>
    <li><a href = "about/projects">Projects</a></li>
</ul>
</nav>

<!-- LESSON 5.1 - IMAGES -->
<img src = "images/image.jpg" alt = "black dog" width = "400" height = "300"> <!-- primary attributes for an image, width and height are talking about screen size(how many px), ofc you could remove width and height then just modify it using css -->

<!-- LESSON 5.2 - RESPONSIVE IMAGE - choosing images based on different screen resolutions -->
<img src = "images/image.jpg" alt = "black dog" width = "480" height = "360"
srcset = "https://image.com 2x, 
        https://image2.com 3x"> <!-- each screen resolution here has different copy of images being shown -->

<!-- LESSON 5.3 - RESPONSIVE WIDTH - choosing image based on viewport width not screen resolution -->
<img src = "images/image.jpg" alt = "black dog" width = "480" height = "360"
srcset = "https://image.com 480w, 
        https://image2.com 960w"
sizes = "(max-width: 480px) 240px,
        (max-width: 960px) 480px"> <!-- sizes is to know which size images to use at which media query | while srcset allows you to choose which images to use at different media query or screen resolution -->

<!-- LESSON 5.4 - RESPONSIVE PICTURE - changing image based on different viewport width -->
<picture>
<source media = "(min-width:600px)" 
srcset = "https://1stimage.com/about/dog123.jpg">
<source srcset = "https://2ndimage.com/about/dog123.jpg"> <!-- if the minimum width is not 600px then this loads-->
<img src = "images/image.jpg" alt = "black dog" width = "480" height = "360">
</picture>

<!-- LESSON 5.5 - FIGURE AND FIGCAPTION -->
<figure> <!-- altho using div is good enough, using the proper semantics is much better -->
<img src = "images/image.jpg" alt = "black dog" width = "480" height = "360">
<figcaption>This is the caption for the image</figcaption>
</figure>

<!-- LESSON 6.1 - AUDIO -->
<audio>
<source src = "https://listentothisaudiofile.com" type = "audio/ogg">
<source src = "https://listentothisaudiofile.com" type = "audio/mpeg">
Sorry your browser doesn't support this audio. :(
</audio> 

<!-- LESSON 6.2 - VIDEO -->
<video src = "https://playvideofile.com" controls></video> <!-- plain controls attribute means controls is true and add it -->

<video controls>
<source src = "https://playvideofile.com" type = "video/webm">
<source src = "https://playvideofile.com" type = "video/mp4">
<!-- for images we could use different resolutions depending on factors but we can't do it in videos :( except if we use adaptive bitrate streaming in which hbo,netflix uses -->
</video>

<!-- LESSON 6.3 - CAPTIONS AND SUBTITLES -->
<video controls>
<source src = "https://playvideofile.com" type = "video/webm">
<source src = "https://playvideofile.com" type = "video/mp4">
<track src = "subtitles/about/moonwalk.vtt" 
        kind="captions"
        label = "english"
        srclang = "en"
        default> <!-- vtt file is a file for captions -->
<p>This mesasge would appear if the video isn't playing that means ur browser isn't supported</p>
</video>

<!-- LESSON 6.4 - EMBEDDING OTHER MEDIA THRU IFRAMES -->
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XA2YEHn-A8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- LESSON 7.1 - SUPPORTING LANGUAGES -->
<html lang ="en-US"> <!-- example of using different language -->
<p lang = "es-mx"> En 1918, hizo la siguiente</p>
<p lang = "ar" dir = "rtl">asdfasdfdasfdas</p> <!-- dir means direction, read from right to left -->
</html>

<!-- LESSON 7.2 - GENERIC ELEMENTS - DIV AND SPAN - used for dividing structures -->
<!-- to wrap elements in a block use div -->
<div>
<h1>Hello</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, non molestias quia sit eligendi excepturi aperiam, sapiente velit cum, facere perspiciatis ex. Ducimus fuga sed odio earum, vero inventore.</p>
</div>

<!-- to wrap elements in an inline use span -->
<p>Lorem ipsum dolor <span>sit amet consectetur adipisicing</span> elit. Quis, blanditiis a. Similique at doloribus nulla voluptatibus a officia fugiat quis temporibus dignissimos odio? Deleniti ab molestiae quo et unde tenetur?</p>

<!-- Lesson 8.1 - HTML PAGE -->
<!DOCTYPE html>
<html lang="en">
<head> <!-- everything that would not be displayed on the page,place where you download necessary files -->
<meta charset="UTF-8"> <!-- meta conveys metadata about the page, this element is only used in head -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name = "description" content="this is used for seo"> <!-- name="description" is used for when seasrching at google and ur webpage appear the content would be the value of content  -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="main.css" rel="stylesheet"> <!-- linking css file -->
<link href="favicon.ico" rel="icon"> <!-- adding favicon, u could also add font using link -->
<script src = "my-javascript.js"></script> <!-- adding javascript file -->
<title>Document</title> <!-- title for the webpage tab -->
</head>
<body> <!-- contains the information and content of the page -->

</body>
</html>

<!-- LESSON 8.2 - HTML STRUCTURES -->
<main></main> <!-- wraps around the main content of the page -->
<header></header> <!-- header for the content -->
<footer></footer> <!-- footer for the content -->
<article></article> <!-- wrap on article/blogpost -->
<section></section> <!-- wrap around section of content -->
<aside></aside> <!-- marks content that is off to the side or not the main attraction -->

<header> <!-- header -->
<div>Something on the Header</div>
<nav>
    <ul>
        <li>Home</li>
        <li>Contact</li>
    </ul>
</nav>
</header>
<main> <!-- main -->
<h1>Here are some articles</h2>
    <article> <!-- article -->
        <h3>Article One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum ratione sapiente tenetur enim ad quos perspiciatis odio nobis, repudiandae quas rerum molestiae consequatur in provident praesentium ipsa! Aspernatur, neque.</p>
    </article>
    <article>
        <h3>Article Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla molestiae rerum aut, veniam voluptas vero tempore sed delectus nemo commodi accusantium doloremque, perferendis nihil! Officia rerum fuga asperiores voluptates.</p>
    </article>
</main>
<section> <!-- section -->
<h1>Here are some articles</h2>
<article> <!-- article -->
    <h3>Article One</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum ratione sapiente tenetur enim ad quos perspiciatis odio nobis, repudiandae quas rerum molestiae consequatur in provident praesentium ipsa! Aspernatur, neque.</p>
</article>
<article>
    <h3>Article Two</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla molestiae rerum aut, veniam voluptas vero tempore sed delectus nemo commodi accusantium doloremque, perferendis nihil! Officia rerum fuga asperiores voluptates.</p>
</article>
</section>
<aside> <!-- aside/sidebar (mostly optional) -->
<p>Here are some news, this is located at the side</p>
<ol>
    <lh>Here you go</lh>
    <li>News 1</li>
    <li>News 2</li>
</ol>
</aside>
<footer> <!-- footer -->
<ul>
    <li><a href = "">LinkedIn</a></li>
    <li><a href = "">Twitter</a></li>
</ul>
</footer>

<!-- LESSON 9.1 - FORMS -->
<form>
<label>Name</label> <!-- title for each input -->
<input type = "text" 
        required
        placeholder = "name"> <!-- input area -->
<br> <!-- adding space to make it look nice -->

<label>Email</label>
<input type = "email" 
        required 
        placeholder = "me@example.com">
<button type="submit">Sign Up!</button>
<br>

<label>Text Area</label>
<textarea></textarea> <!-- this is kinda different, we're using textarea instead of input for this -->
<br>

<label>Date</label>
<input type = "date" 
        required 
        placeholder = "mm-dd-yy">
<br>

<label>Color</label>
<input type = "color" 
        required 
        placeholder = "me@example.com">
<br>

<label>File</label>
<input type = "file" 
        required 
        placeholder = "me@example.com"
        accept = "image/*"
        multiple> <!-- this says ,yes allow multiple image files -->
<br>

<label>Checkbox</label>
<input type = "checkbox" 
        checked
        placeholder = "me@example.com">
<br>

<label>Dropdown</label>
<select>
    <option>First Option</option>
    <option>Second Option</option>
</select>
<br>

<fieldset> <!-- adding checkboxes that is in a field -->
    <legend>Checkbox in a fieldset</legend> 
    <label>This</label>
    <input name = "checkboxlist" 
            type = "checkbox"
            value = "This"
            checked> <!-- checked means this is initially checked -->
    <label>And/Or</label>
    <input name = "checkboxlist" 
            type = "checkbox"
            value = "And/Or">
</fieldset>    
</form>

<!-- LESSON 10.1 TABLE -->
<!-- tables are not used for email, but that's all we got | main purpose of table is for tabular data -->
<table>
<thead> <!-- table header -->
    <th>First Value</th> <!-- table heading | column 1 -->
    <th>Second Value</th> <!-- table heading | column 2 -->
</thead>
<tbody> <!-- table body -->
<tr> <!-- row 1 -->
    <td>Value 1</td> <!-- column 1 -->
    <td>Value 2</td> <!-- column 2 -->
</tr>
<tr> <!-- row 2 -->
    <td>Value 3</td> <!-- column 1 -->
    <td>Value 4</td> <!-- column 2 -->
</tr>
</tbody>
<tfooter> <!-- table footer -->
</tfooter>
</table>

<!-- LESSON X.1 - INLINE AND BLOCK ELEMENTS -->
<!-- q,strong,b,i,em | cannont adjust the width of these elements, their height and width only occupies those that are needed | unless you change the display value -->
<!-- blockquote,p,ul | can adjust the width, their width occupies the whole span of the screen unless you adjust it, these elements each start on a new block unlike inline -->

<!-- LESSON X.2 - ATTRIBUTE -->
<!-- some attribute work on most elements and some works only on a specific element, check attribute on elements you'll be using on documentation(devdocs.io) -->

<!-- LESSON X.3 - HTML ENTITIES - to add symbol or signs -->
<!-- EXAMPLE: &lt; = LESS THAN SIGN | &gt; = GREATER THAN SIGN -->

<!-- LESSON X.4 - MATHML -->
<!-- if adding equations, use this instead of html, this is a markup langauge for math -->

<!-- LESSON X.5 - DEBUGGIN HTML/CSS -->
<h1 style="border: 1px solid black">a</h1> <!-- you could use this to get the box model -->
<!-- you could download debug css in chrome webstore to identify the box model | hold ctrl while using this to know the class name of the element -->
<!-- check console for error -->

<!-- LESSON X.6 - HTML BOILERPLATE - just type html:5 and this would all appear -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>

</body>
</html>

<!-- LESSON X.7 - MAKING SHORCUT ELEMENT + CLASS NAME DECLARATION -->
<!-- creating div fast, type div.user then a div element with user as a classname would automatically appear -->
<div class="user">

</div>

<!-- LESSON X.8 - LOREM ABBREVIATION -->
<!-- specify how many words by typing loremNo. e.g. lorem80 or 80 words -->

<!-- LESSON X.9 - DATA ATTRIBUTES - adding your own attribute that starts with 'data-' -->
<h1 data-title-id = "1"></h1>
<h2 data-title-id = "2"></h2>` },
            { css: 
`/* LESSON 1 - TYPES OF CSS - INTERNAL,EXTERNAL, INLINE 
INTERNAL - adding <style> </style> inside the html file (NOT RECOMMENDED)
INLINE - adding style as an attribute: <h1 style = color: red>Hello</h1> (NOT RECOMMENDED)
EXTERNAL - adding css file as an external file: go to <head> of html file then add css using - <link rel="stylesheet" href="styles.css">
*/

/* LESSON 2.3 - UNITS
LENGTH ABSOLUTE - px, cm, mm, pt
LENGTH RELATIVE - em, rem, vw, vh, percentage | 1rem or 100% is 16px
UNITLESS VALUES - line-height,...
FUNCTION VALUES - e.g. transform: rotate(90deg) , width: calc(80% - 20px)
NOTE: ELEMENTS HAS DEFAULT BROWSER STYLES
*/

/* LESSON 2.6 - CLASS AND ID | Hierarchy: ID 100 pts, Class 10 pts, Elements 1 pt 
ID - must be unique for each html file | YOU COULD ASSIGN ANY CLASS OR ID TO ANY ELEMENT IN HTML */
#sampleID {
/* calling an id */
color: red;
}
.sampleClass {
/* calling a class */
color: red;
}

body {
/* calling an element */
color: red;
}

/* LESSON 2.13 - PSEUDO-CLASS SELECTORS 
HTML:
<a href = "#">This is a link</a> 
CSS: */
/* unvisited link | you could use all of these on other elements too*/
a:link {
color: red;
}
/* visited link */
a:visited {
color: green;
}
/* mouse over link */
a:hover {
color: hotpink;
}
/* selected link | while pressing the link */
a:active {
color: blue;
}

/* LESSON 3.1 - BOX MODEL - MARGIN, BORDER, PADDING, WIDTH, HEIGHT
TOP, BOTTOM, LEFT, RIGHT - use absolute or relative length unit | e.g. margin-top,border-right,padding-left,... you get what i mean by this
- MARGIN | if 1 value = 4 sides, else if 2 values = top&bottom and left&right , else if 4 values = top,right,bottom, then left | e.g. margin-right: 20%
- BORDER | e.g. border: width(10px), style(solid), color(red) 
- PADDING | 4 values only = top,right,bottom then left | e.g. padding-top: 2rem;
TOP-WIDTH, RIGHT-WIDTH, BOTTOM-WIDTH, LEFT-WIDTH, WIDTH - use absolute or relative length unit or descriptive (solid,thin)| e.g. border-width, border-top-width,... you get what i mean
- BORDER | e.g. border-top-width: 1em; border-width: thin; 
- BORDER-WIDTH: if 1 value = all 4 sides, if 4 values = top,right,bottom then left
MAX, MIN - e.g. max-height, min-width
HEIGHT - as an absolute, a relative, or as auto. | e.g. body { height:15px; } | default is box-sizing:content-box, which refers the height of the content rather than the border, to fix, use border-box
WIDTH - as an absolute, a relative, or as auto. | e.g. div ( width:50%; }
*/

/* LESSON 3.2 - DISPLAY PROPERTY - INLINE, BLOCK, INLINE-BLOCK */
div {
display: inline; /* width and height not adjustable, width just occupies the necessary space it needs */
display: block; /* width and height adjustable, width is spanning across the whole screen */
display: inline-block; /* width and height adjustable, width just occupies the necessary space it needs */
}

/* LESSON 4 - FONT PROPERTIES - FAMILY, STYLE, VARIANT, WEIGHT, SIZE */
p {
font-family: "Courier New", Courier, monospace; /* type of font */
font-style: italic; /* font style, e.g. italic, oblique */
font-variant: small-caps; /* font variant */
font-weight: 700; /* font weight, e.g. bold */
font-size: 1rem; /* font size */
font: italic bold 12pt/14pt Times, serif; /* combination of different font properties */
color: red; /* font color */
}

/* LESSON 4.9 - TEXT PROPERTIES - WORD-SPACING, LETTER-SPACING, TEXT-DECORATION, VERTICAL-ALIGN, TEXT-TRANSFORM, TEXT-ALIGN, TEXT-INDENT, LINE-HEIGHT */
p {
word-spacing: 0.4em; /* additional amount of space between words */
letter-spacing: 0.1em; /* additional amount of space between letters */
text-decoration: none; /* decorate text: underline, overline ,line0-trhough, blink, none */
vertical-align: middle; /* modify the vertical positioning of an inline element, relative to its parent element or to the element's line */
text-transform: capitalize; /* modify if the words or first letter would be small or capitalized/uppercase */
text-align: center; /* justify text applied on parent element*/
text-indent: 5em; /* specify the amount of indentation prior to the first line of text */
line-height: 200%; /* control spacing between baselines of text */
}

/* LESSON 5.1 - LAYOUT: FLOAT (NOT RECOMMENDED) - alter the flow of the element by making a specific element float
HTML
<body>
<figure class = "wrapper">
<img src = "qwerty.jpeg">
<figcaption>lorem ipsum</figcaption>
</figure>
</body>
CSS */
img {
float: left; /* the figcaption would be moved to the right, filling the empty space, following the flow of the layout */
}
figcaption {
float: left; /* if we do this, since img is at the left, figcaption would follow it by sitting next to img ( right side of img ) */
}

/* clear float - push the element below the direction you assigned it into */
figcaption {
clear: left; /* this would make the figcaption below the img */
}

/* LESSON 5.3 - OVERFLOW CONTENT - when content is overflowing due to insufficient amount of size */
/* HTML 
<div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Quisque egestas diam in arcu cursus. In massa tempor nec feugiat nisl pretium fusce id velit. Sed odio morbi quis commodo. Ultrices in iaculis nunc sed augue lacus viverra vitae. Massa eget egestas purus viverra accumsan in. Morbi blandit cursus risus at ultrices mi tempus. Fringilla est ullamcorper eget nulla facilisi. Facilisi cras fermentum odio eu. Potenti nullam ac tortor vitae purus faucibus ornare. Ut tellus elementum sagittis vitae. Aliquam ut porttitor leo a diam. Rutrum tellus pellentesque eu tincidunt. Mauris sit amet massa vitae. Sit amet nisl purus in mollis. Proin nibh nisl condimentum id. Nec sagittis aliquam malesuada bibendum. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.
Egestas integer eget aliquet nibh. Eu ultrices vitae auctor eu augue ut. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Urna molestie at elementum eu facilisis sed odio morbi quis. Sagittis orci a scelerisque purus semper eget duis at. Fermentum leo vel orci porta non pulvinar neque. Mauris pellentesque pulvinar pellentesque habitant morbi. Mattis aliquam faucibus purus in massa tempor nec. Suspendisse ultrices gravida dictum fusce ut. Proin sed libero enim sed faucibus turpis in eu mi. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Quis risus sed vulputate odio ut enim. Facilisis magna etiam tempor orci eu lobortis. Lectus quam id leo in. In eu mi bibendum neque egestas. Lectus sit amet est placerat in. Pharetra sit amet aliquam id diam. Iaculis urna id volutpat lacus. Habitant morbi tristique senectus et netus et malesuada fames.
Ut sem nulla pharetra diam sit amet nisl suscipit. Arcu non odio euismod lacinia at. Amet porttitor eget dolor morbi non arcu. Turpis egestas integer eget aliquet nibh. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Hac habitasse platea dictumst quisque. Tellus rutrum tellus pellentesque eu tincidunt tortor. Facilisis magna etiam tempor orci eu. Morbi blandit cursus risus at. Nullam non nisi est sit amet facilisis magna. Tristique risus nec feugiat in. Consectetur lorem donec massa sapien.
Gravida quis blandit turpis cursus in hac habitasse platea. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Gravida dictum fusce ut placerat orci. Augue mauris augue neque gravida in fermentum. Elementum nisi quis eleifend quam adipiscing vitae proin. Id cursus metus aliquam eleifend. Habitant morbi tristique senectus et. Volutpat commodo sed egestas egestas. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Mattis nunc sed blandit libero volutpat sed cras ornare. Risus quis varius quam quisque id diam vel quam. Mattis nunc sed blandit libero. Venenatis tellus in metus vulputate eu.
Blandit massa enim nec dui nunc mattis enim. Urna nunc id cursus metus aliquam eleifend mi in. Non odio euismod lacinia at quis risus sed vulputate. Id consectetur purus ut faucibus pulvinar elementum. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Velit scelerisque in dictum non. Elementum facilisis leo vel fringilla. Blandit libero volutpat sed cras ornare arcu dui vivamus. Luctus accumsan tortor posuere ac ut consequat. Sit amet nulla facilisi morbi tempus. Non arcu risus quis varius quam. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Id donec ultrices tincidunt arcu non sodales neque.
</p>
</div> */

/* CSS */
div {
width: 50%;
height: 100px;
overflow: hidden; /* hide the overflowing text */
overflow: auto; /* adds scroll bar when there is overflowing content */
overflow: scroll; /* there would always be a scroll bar no matter what */
}

/* IMPORTANT NOTE: PARENT ELEMENT WILL ONLY WRAP AROUND NON-FLOATED ELEMENT | IF ALL THE ELEMENTS INSIDE A PARENT ELEMENT ARE ALL FLOATED, THE HEIGHT OF THE PARENT CONTAINER WILL COLLAPSE TO ZERO
/* FIX FOR IMPORTANT NOTE:
METHOD 1: use - parent { overflow: hidden; }
METHOD 2: use - parent { display: flow-root; }
METHOD 3: add this to the class name of parent element(html) - clearfix, then do this at css .clearfix:after { content: ""; display: table; clear: both; } (RECOMMENDED)
/* LESSON 5.4 - BOX MODEL IN LAYOUT */
/* if box-sizing:content-box; when altering padding and margin the addition is by adding a specified size outward, to fix these post this snippet at the top of the css */
html {
box-sizing: border-box; /*content-box is the default, border-box is referring to the height and width of the border of the box; */
}
*,
*:before,
*:after {
box-sizing: inherit;
}

/* LESSON 5.5 - POSITION - STATIC, RELATIVE, ABSOLUTE, FIXED, STICKY */
div {
position: static; /* default position */

position: relative; /* moving the element relative to its current position, does not affect the flow of other elements, it is still in the normal flow, it's just that it has been offset */
top: 10px; /* moving the element 10px above its current position */

position: absolute; /* moving the element relative to its nearest wrapper that has position beside static, could possibly affect the flow since it's parent element could be static and if it is, this absolute positioned element would be removed from that static parent */
right: 25%;

position: fixed; /* positioned relative at viewport */
top: 0;
right: 0;

position: sticky; /* it stays to its current position until conditions were met, after conditions were met it would remain fixed */
top: 10px; /* after reaching 10px after scrolling down, the element would be fixed */
}

/* LESSON 5.6 - Z-INDEX - elements are sometimes getting stacked/overlapped, to show which one should be displayed, use this */
.block1 {
width: 100px;
height: 100px;
z-index: 100; /* any value will do, since this has higher z-index value than block2, this would appear at the front */
}
.block2 {
width: 100px;
height: 100px;
margin: -50px 0 0 50px;

/* as you can see block2 overlaps block1, to make block1 appear at the front assign a z index for block1 */
}

/* LESSON 6.2 - LAYOUT: FLEXBOX - arranging elements vertically or horizontally (one direction) | flex-items are children inside flexbox */
.flex-container {
display: flex; /* activate flexbox | values:flex, values:inline-flex; | think of inline-flex as inline and flex as block */
flex-direction: column; /* default flex-direction is row, it makes sense tho since default flow is column */
justify-content: center; /* position the content */
align-items: center; /* position the content */
flex-wrap: nowrap; /* if flexwrap is not nowrap, the extra spaces would be cut | default value is nowrap */
}
.flex-item {
flex-basis: 0rem; /* sets the initial size of the flex-items */
flex-grow: inherit; /* determines how items will expand if there is extra space in the container */
flex-shrink: inherit; /* determines how items will shrink if there isn't enough space in the container */
/* shorthand notation for flex:flex-grow,shrink,basis */
flex: 0 1 100px; /* these are applied to flex-items */
}

/* LESSON 6.8 - LAYOUT: GRID - arranging elements vertically and horizontally (prolly the easiest way to layout) | grid container - parent, grid item - child  | divided in evenly spaced of columns and rows */
/* grid line - line from the grid */
/* grid cell - the cell, cmon you know this already */
/* grid track - stretching in one direction, from start to end */
/* gutter - space between grid cell */

.grid-container {
display: grid; /* activate grid | values:grid, values:inline-grid | think of inline-grid as inline and grid as block */
}

/* EXPLICIT GRID | grid-template-columns, grid-template-rows | grid layout you specifically typed*/
.grid-container {
display: grid;
grid-template-columns: 1fr 2fr 1fr; /* creating 3 columns | you could also set this using fr, e.g. 1fr | fr is fractional on available space  */
grid-template-rows: 100px 100px; /* creating 2 rows | could also use repeat(3times, 1 fr) or 50px repeat (2times,1fr) | could also use 1fr minmax(50px, max-content) 1fr - minmax(minimum_width,maximum_width) | minmax is only one column/row*/
gap: 10px 20px; /* gutter - rows | columns */
}

/* IMPLICIT GRID | grid layout that is automatically created for extra elements that don't fit into explicit grid */
/* e.g. you only give grid-template-columns: repeat(4,1fr) but there are 9 divs, 2nd row and 3rd row has been implicitly created since the column is only divided into 4 and only the column was declared
/* GRID PLACEMENT PROPERTIES */
/* grid-column = shorthand for (grid-column-start | grid-columnd-end)
/* grid-row = shorthand for (grid-row-start | grid-row-end)
/* grid-auto-rows/columns */
/* lets say there are 6 divs */
.grid-container {
grid-template-columns: 50px; /* six divs would be all forming in one column since only one column is specified */
grid-auto-rows: 50px; /* size of all the rows would be 50 px */
grid-auto-rows: 50px 75px; /* size of 1st row is 50px, 2nd row is 75px, 3rd row is 50px and so on... */
/* if grid-template-columns and grid-template-rows was explicitly created and there are some implicit grid cells, you use grid-auto-columns/row to assign values on implicit grid */
}

/* creating a grid track using grid-column and grid-column-start/end and grid-row, grid-row-start/end */
/* lets say there are 3 divs */
.grid-container {
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: 50px;
}

.grid-item {
grid-column-start: 1; /* start from grid line 1 */
grid-column-end: 3; /* span until grid line 3 */
/* shorthand notation for this */
grid-column: 1 / 3;
/* shorthand notation for grid-column/row-start/end */
grid-area: ; /*row-start column-start row-end columnb-end */
}

/* USE grid-template-areas as a substitute for grid-column/row-start/end | RECOMMENDED */
.grid-container {
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-rows: 1fr 1fr 1fr 1fr;
grid-template-areas:
"div1 div1 div2"
"div1 div1 div3"
"div4 div5 div6"
"div7 div7 div7";
}

.grid-item1 {
grid-area: div1; /* assigning name div1 which is to be used for grid-template-areas */
}

.grid-item2 {
grid-area: div2; /* and so on for other grid-items you get the pattern */
}

/* how i apply grid layout to my coding, an example:*/
header {
height: 50px;
border: 1px solid #000000;
}

.parent {
height:800px;
border: 1px solid #000000;
display:grid;
grid-template-columns: 1fr 1fr 1fr; /* dividing into 3 columns */
grid-template-rows: 1fr 1fr; /* dividing into 2 rows */
grid-template-areas:
"div1 div1 div2"
"div1 div1 div3";
}

.parent .div1 {
grid-area:div1;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent .div2 {
grid-area:div2;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent .div3 {
grid-area:div3;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent2 {
height:800px;
border: 1px solid #000000;
display:grid;
grid-template-columns: 1fr 1fr 1fr; /* dividing into 3 columns */
grid-template-rows: 1fr 1fr 1fr; /* dividing into 2 rows */
grid-template-areas:
"div1 div1 div2"
"div1 div1 div3"
"div4 div4 div4";
}

.parent2 .div1 {
grid-area:div1;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent2 .div2 {
grid-area:div2;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent2 .div3 {
grid-area:div3;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

.parent2 .div4 {
grid-area:div4;
/* assign width and height at child element */
width:100%;
height:100%;
/* have a quick look at their border */
border: 1px solid #000000; ;
}

footer {
height: 50px;
border: 1px solid #000000;
}

/* LESSON 9.1 - CSS ANIMATION */

/* LESSON 10.1 - MANIPULATING ELEMENT USING TRANSFORM */
div {
width:100px;
height:100px;
margin:200px auto;
border: 1px solid #000000;

transform: rotate(45deg); /* rotating element */
transform: scale(3); /* scaling the element by 3 | you could also scalex or scaling x-axis*/
transform: skew(); /* there is also skewx and skewy() */
transform: translate(50px); /* moving the element, kind of like position | there is also translatex and y */
/* using multiple transform into one line */
transform: matrix([scaleX], [skewY], [skewX], [scaleY], [translateX], [translateY]) /* replace [value] with the value you want */
}

/* LESSON 10.2 - CSS TRANSITION - this requires a trigger */
.div1 {
width:100px;
height:100px;
margin:200px auto;
border: 1px solid #000000;

transition-property:width; /*what property do you want to apply transition | you could use pretty much any property */
transition-delay:1s; /* time before transition starts doing */
transition-duration:.5s; /* how long the transition is */
transition-timing-function: ease-in; /* how transition moves */
/* shorthand notation for transition */
transition: [property], [duration], [timing-function], [delay]

}

.div1:hover { /* this is the effect after the trigger */
width: 250px; /* width becomes 250px after hovering because you applied transition-property into width */
}



/* LESSON X.1 - IMPORTANT WEBSITES AND APPS
https://www.figma.com | creating wireframes, alternative is sketch, but figma is way better
https://www.chrome.google.com/webstore/detail/debug-css/igiofjnckcagmjgdoaakafngegecjnkj | DEBUG CSS - important tool to identify the border of each element
https://www.unsplash.com | free beautiful images
https://www.randoma11y.com | for creating color combinations with good contrast
https://www.coolers.co | generating color palette
https://www.fonts.google.com/ | source of font-family
https://www.favicon.cc/ | create favicon
https://www.flaticon.com/ | free vector icons
https://www.icons8.com/line-awesome | another free vector icons
https://www.loremipsum.io | random words generator
https://www.caniuse.com | find if a property is supported by what browser
https://www.flexboxfroggy.com/ | practice using flexbox
https://www.undraw.co/illustrations | vector illustrations
https://www.giphy.com/ | moving photos or gif
https://www.codegrepper.com/ | instantly find code when you google search for them
https://www.copilot.github.com/ | auto fill suggestion on your code
https://www.developers.google.com/web/tools/lighthouse | automated tool for improving the quality of web pages 
https://www.gist.github.com/jackdomleo7/55659bafe581d19cc341ef775d6a9e6b | global default style for css
https://www.crossbrowsertesting.com | test your website on multiple browsers
https://www.litmus.com | testing diferent email platforms
wave.webaim.org | test the accessibility of your website for visually impaired user
https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en | chrome extension to identify what font does the website is using
gruntjs or gulpjs | for minifying files, linting files to verify syntax
https://www.mockaroo.com | generate mockup data used for backend
https://www.getpostman.com | test api endpoints
EXTENSIONS:
live sass compiler | css extension
live server | spot changes in real time when viewing file
*/

/* LESSON X.2 - CASCADE AND IMPORTANCE - if you wanted a certain property to not get overriden */
p {
font-size: 12px !important; /* this style will take precedence */
font-size: 16px; /* this would normally be more important since it has higher value, but the property above has keyword !important so you would not be able to override it unless you add !important in here too*/
}

/* LESSON X.3 - CENTERING CONTENT */
/* REMEMBER: BROWSER HAS DEFAULT CSS STYLE, IF YOU'RE CENTERING TWO ELEMENT INSIDE A CONTAINER, THEY MIGHT HAVE A MARGIN SO REMOVE THAT
/* centering a block */
div {
/* parent element */
text-align: center; /* content inside the block gets centered */
margin: 0 auto; /* the inline/block/inline-block gets centered */
}

/* centering an inline */
h1 {
/* child element */
margin: 0 auto;
}

/* centering a flexbox (RECOMMENDED) | apply to parent */
div {
display: flex;
justify-content: center;
align-items: center;
}

/* centering a grid | apply to parent */
div {
display: grid;

justify-content: center;
align-items: center;

/* or */
place-items: center;
}

/* centering using position:absolute/fixed(RECOMMENDED) */
position:relative
top:50%;
left:50%;
transform: translate(-50%, -50%);

/* LESSON X.4 - OOCSS(OBJECT ORIENTED CSS), SMACSS(SCALABLE MODULAR ARCHITECTURE FOR CSS), BEM(BLOCK-ELEMENT-MODIFIER) */
/* bem is used for naming convention for oocss/smacss
.{block}__{element}
.{block__{element}--{modifier}
.{block}--{modifier}
BLOCK(think of it as section)/(parent) - card, block
ELEMENT - inside of a block - image, paragraph, desc, item, link
MODIFIER - use them to change the appearance, state or behavior | can be reused - secondary,primary,active | example use case is button--active, what will happen to the button after clicked
HTML:
<body>
<div class = "card"> <!-- card is a block -- >
<img class = "card__picture" src = "#"> <!-- card__picture is an element -->
<h3 class = "card__title">Title</h3> <!-- card_title is an element -->
<button class = "card__button card__button--active">Click Here</button> <!-- card_button--active is a modifier -->
<button class = "card__button">Click Here Too</button> <!-- in here it has no modifier or no applied styles -->
</div>
</body>
CSS:  APPLICATION OF BEM AND SASS | paste this to codepen and it's ugly, but that's not the point, the important thing is we understand the syntax
.card {
box-sizing:border-box;
background-color:red;
flex:display;
&__picture {
background-color:blue;
height:100px;
width:100%;
}
&__title {
font-size:3em;
}
&__button {
background-color:green;
&--active{
color:yellow;
}
}
} */

/* LESSON X.5 - SCSS
/* step 1 - download live sass compiler in extensions and live server */
/* step 2 - create sass file | we would be using scss syntax instead of sass */

/* nesting - best thing in sass */
.parent {
display: flex;
flex-direction: column;

.child {
/* .child is identified as .parent .child { */
background-color: blue;
}

button {
background: yellow;
&:hover {
/* '&' just means and:  .parent button:hover { */
}
}
}

/* using variable  */
$varName: red; /* can take any value | requires dollar sign */
.child {
color: $varName;
}

/* dividing css file into multiple file so you could focus on a single file per structure */
/* at scss main file add:  @import "./header"; | this is the file one structure */

/* combining multiple property:value pair into one like function */
@mixin flexCenter($direction) {
display: flex;
justify-content: center;
align-items: center;
flex-direction: $direction;
}

.parent {
@include flexCenter(row); /* it looks like a function */
}

/* extension - inherit style from a specific scss file */
@import "./header";

.contact {
@extend header;
/* to override styles from header, define your own style here */
background-color: red;
}

/* arithmetic operation - kinda making css like a programming language */
.parent {
font-size: 10px - 5px;
}

/* LESSON X.6 STEP BY STEP BUILDING RESPONSIVE WEBSITE 
STEP 1: SEPERATE HEADER, BODY(CONTENT), FOOTER
STEP 2: ALWAYS USE RELATIVE, ONLY EDIT THE WIDTH FOR RESPONSIVE WEBSITE
/* LESSON X.7 - POINTER EVENTS - used to disable elements from being interacted with by the mouse */
overlay { /* usually used in overlay , clicking any parts become disabled */
pointer-events: none;
}` },
            { javascript: `` },
            { react: `` },
            { node: `` },
            { express: ``},
            { git: 
`// LESSON 2.4 - GIT CONFIGURATION - you type this at bash
// configuring system
git config --system // followed by a modifier

// configuring user
git config --global
// example: git config --global user.name "Renz Carillo" | to view this individually, type: git config user.name
// example: git config --global user.email "renzcarillo32@gmail.com"
// make your ui colorful: git config --global color.ui true
// use vscode as core editor: git config --global core.editor "code --wait" | to active this at vscode, type git config --global -e

// project
git config 

// show list
git config --list

// LESSON 2.5 - GIT AUT-COMPLETION 
https://github.com/git/git/blob/master/contrib/completion/git-completion.bash
step 1: click raw -> then save as 
step 2: move git-completion.bash.txt .git-completion.bash
step 3: okay wtf am i doing, im using windows and auto completion is already there 

// LESSON 2.6 - GIT HELP - uesful tool on how to use git
git help

// LESSON 3.1 - INITIALIZE A REPOSITORY
step 1: go to the project/folder first using cd
step 2: git init // initialize a project to use git, do this only once
step 3: ls -la // see the list 

// LESSON 3.3 - YOUR FIRST COMMIT - commit changes to the repository (github)
// step 1: create changes, what i did is create a file using echo "text" > text1.txt
// step 2: git add . // commit at the folder where you did git init not at the file where you edit
// step 3: git commit -m "Initial Commit" // -m is for message, make the message short, keep each line to less than 72 characters, write them in present tense, not paste tense (ex. fixes a bug not fixed a bug | or better yet just use: 'bugFix:' so we could search it easily)

// LESSON 3.5 - VIEW THE COMMIT LOG
git log // view those who committed
git help log 
git log -n 5 // only show the last 5 commits
git log --since=2021-07-15 // show commits sicne this date, you could also use --until and --author
git log --grep="Init" // grep means globally search for regular expression, in this specific example: it returns any commit that matches "Init"

// LESSON 4.1 - THREE TREES
// repository -> staging index -> working | this is top down

// workflow: you have a file.txt(working) -> you do git add . (staging index) -> you do git commit (repository)

// LESSON 5.1 - ADD FILES
git status // it'll let us know the status of things, if we needed to commit anything or if there are untracked files which isn't at the indexing stage yet
echo "content of text" file2.txt , to move this into idnexing stage specifically this file, type git add file2.txt
// if you have untracked files according to git status, any changes made to that file would not be tracked by the git
// to transfer from indexing stage to repository do git commit 


// LESSON 5.2 - EDIT FILES
// do a git status after editing files, then you could see that changes not staged for commit , this means we need to do a git add on it again, think of git add as the save

// LESSON 5.3 - VIEW CHANGES WITH git diff - only used to know the changes in working directory
// with git status we can know if there is changes in a tracked file, how to know the changes in this file? we use git diff  

// LESSON 5.4 - VIEW ONLY STAGED CHANGES - used to know changes that is in the indexing stage
// to do this type git diff --staged

// LESSON 5.5 - DELETE FILES
// if at working directory 
rm fileName

// if a tracked file (indexing stage)
rm fileName // equivalent to changes
git rm fileName // moving it into indexing stage after changes
git commit -m "" // committing these changes into repository

// LESSON 5.6 - MOVE AND RENAME FILES - these are synonymous 
// working directory 
step 1: rename files - git mv fileName newFileName // if you do git status it would be seperating the rename into two: deleted and added 
step 2: git rm and git add the renamed file to move them into indexing stage 

// tracked file (indexing stage)
step 1: rename files - git mv fileName newFileName

// moving file 
git mv fileName folder/fileName

// USING GIT
step 1: initialize a git with the folder/project you wanted to make a repository from: git init | then git add . to start tracking all of the content with that project
step 2: make some edit like remove,modify,add then stage them with: git rm, git mv, etc. | to know the status if a file is in working or stage, use git status 
step 3(optional) : look at edits or changes, if it's in working directory git diff, if it's in stage git diff --staged
step 4: commit and transfer them from indexing stage to repository: git commit 
step 5: view commits with: git log 

// LESSON 6.4 - STAGE AND COMMIT SHORTCUT - staging and committing in one command 
git commit -am "staging and committing in one go"

// LESSON 6.5 - VIEW A COMMIT 
// viewing a diff, like git diff but with specific commit no.
git show 1c1xasdf912 // this 1c1xa... is the commit no., you could get this in git log

// using color words instead of - and + for looking at the changes 
git show 1c1xas --color-words // this is much better choice if the changes you're looking for is an inline, you coudl also use this in git diff 

// LESSON 6.6 - COMPARING COMMITS 
git diff 1c16945..9dcff // 1c16945 is the first commit and i want to compare its changes with 9dcff
git diff 1c16945..HEAD // comparing 1c16945 with the latest commit 

// LESSON 6.7 - MULTILINE COMMIT MESSAGES
git commit -a // do not add m then click enter, bash would automatically open to your code editor where you could enter multiline comment 

// LESSON 6.8 - MAKE ATOMIC COMMITS - small commits | BEST PRACTICE - ALWAYS DO THIS, COMMIT ON EACH TASK YOU CREATE, EX. OF TASK TO MAKE THIS CLEAR: 1. REMOVE PARAGRAPH FROM GREEN WIDGET, 2. ADD PHOTO IN YELLOW WIDGETM 3. UPDATE PRICES ON GREEN WIDGET
// for example you have a lot files that is for commit, first two file is related to each other and the remaining files is not related, if you'd commit them all together in one it would be weird and confusing when someone came back to this version
// fix for problem above is through atomic commits, first is you only indexed stage those who are related files then commit them afterwards, then move on to the another set of file, index and commit them 

// LESSON 7.1 - UNDO CHANGES ON WORKING DIRECTORY 
git checkout -- fileName.html

// LESSON 7.2 - UNSTAGE FILES, convert them back to working directory 
git reset HEAD fileName.html

// LESSON 7.3 - AMEND COMMITS - only for most recent commit 
// after you have commited but you forgot something that you want to add in that commit / RECOMMIT, GENERATING NEW SHA
git commit --amend -m "amend commit" // you could also change the message with this, but remember only with latest commit

// lesson 7.4 - RETRIEVE OLD VERSION - WAY TO UNDO COMMITS, RETRIEVE THE OLD VERSION THEN MAKE NEW COMMIT (NOT SUGGESTED)
// step 1: git log, this is to know the SHA
// step 2: git show dfasd12, this is like the git diff for commits, look at the changes in that commit 
// step 3: git checkout dfasdfas123 -- explorers.html // retrieving commit with sha dfasd... on the current branch | -- means current branch | this would convert things into staging directory | if you're looking for a specific things , retirieve the sha before it, sha is created after commit
// step 4: you are now at the file before your specific change(one youre looking for) occurs

// LESSON 7.5 - REVERT A COMMIT - UNDO A COMMIT (BEST/ BETTERE VERSION COMPARED ABOVE)
git revert dfasdfas123 // better and easier way compared above | IT IS VERY EASY TO DO ESPECIALLY WHEN YOU DID ATOMIC COMMITS SO MAKE SURE TO DO THAT

// LESSON 7.6 - REMOVE UNTRACKED FILES (FILES THAT HAS NEVER EXPERIENCED GIT ADD. ATLEAST ONCE OR THOSE THAT WAS UNDO FROM WORKING DIRECTORY )
// we can remove it by hand tho but we do everything at command line becuz using mouse is for noobs 
git clean -n // this would just provide warnings on what file would it remove, this does nothing else 
git clean -f // actually removing the untracked file 

// removign file when it's already in indexing stage 
step 1: git reset HEAD fileName.html 
step 2: git clean -f

// LESSON 8.1 - USING .GITIGNORE FILES 
// pattern matching(regex): * ? [aeiou] [0-9]
// negative expressions: *.php // ignore all files that end with .php
// ignore all files in a directory with a trailing slash: assets/videos/

// step 1: create .gitignore file then the content would be the files you'd like to ignore
// step 1 method 2: in bash type touch .gitignore
// example content for .gitignore
.DS_Store
*.zip // everything that ends with .zip
*.gz
assets/photoshop/
assets/videos/
!assets/videos/tour_*.mp4 // ! means except these files, do not ignore these 

// LESSON 8.2 - WHAT TO IGNORE 
- COMPILED SOURCE CODE 
- PACKAGES AND COMPRESSED FILES 
- LOGS AND DATABASES 
- OPERATING SYSTEM GENERATED FILES 
- USER UPLOADED ASSETS (IMAGES, PDFS, VIDEOS)
- try looking at github.com/github/gitignore to get more idea on what to ignore 

// LESSON 8.3 - GLOBALLY IGNORE FILES
git config --global core.excludesfile ~/.gitignore_global

// LESSON 8.4 - IGNORE TRACKED FILES - case where you just recently added to gitignore a file that you have been tracking 
step 1 : git rm --cached fileName.txt // this is the tracked file | cached wil remove it from repository while keeping the local copy safe 
step 2 : git add .gitignore 
step 3: git commit - m "Stop track changes"

// LESSON 9.1 - REFERENCE COMMITS 
tree-ish - directory containing files, or a commit, or a reference 

// show HEAD
git show HEAD

// access ancestor - or the one before it 
git show HEAD^ // access the parent | you could also use master^ , de14621^ or the SHA 
git show HEAD^^ // access the grandparent

// tree listing 
git help ls-tree to read the documentation 
git ls-tree HEAD // blob are files, trees are directory | this is to know what the files and folder there are during this commit 
git ls-tree HEAD assets // show every directory or file that has the word assets 
git ls-tree HEAD assets/ // show every file inside assets 

// LESSON 9.4 - FILTER THE COMMIT LOG 
git log -3 // only return the 3 recent commits 
git log --since=2021-07-16 // return commits starting 07 16
git log --until=2019-07-16 // return commits before 07-16 starts 
git log --author"Renz" // return where author is Renz 
git log --grep="Initial" // use regular expression or pattern matching, return anything that has Initial 
git log b44740..HEAD // start from commit with b44740 sha up to the head or most recent commit 

// LESSON 9.5 - FORMAT THE COMMIT LOG 
git log --stat // stats on changes on each commit 
git log --format=medium // medium is default, there is also short which provides less info,and also oneline,etc.
git log --oneline // reduce the size of SHA (i'm starting to like this one)

// LESSON 10.1 - BRANCHING 
- this is where you try new ideas, instead of doing it in master branch and if there's wrong you have to undo it 
- if good ideas came from branch then you can merge it into master branch (think of master branch as the original branch where everything is working fine)
- HEAD pointer always points the current commit you're in whether it be on master branch or just branch
- you could create a branch from a branch

// LESSON 10.2 - CREATING BRANCHES
git branch // see branch 
git branch new_feature // creating branch 
cat .git/HEAD // know where head poitns to 
git log --oneline // you could also do this to know where head points to 

// LESSON 10.3 - SWITCHING BRANCHES 
step 1: git checkout branch_name 
git branch // try and see that it's now pointing to different branch 

// LESSON 10.4 - CREATE AND SWITCH BRANCHES AT THE SAME TIME 
step 1: figure out first the branches: git branch 
step 2: git log --oneline to figure out where you're at 
step 3: go to the branch where'd you'd like to create a branch: git checkout brancName
step 4: git checkout -b newNew_branch // created and switched 

// LESSON 10.5 - SWITCH BRANCHES WITH UNCOMMITTED CHANGES 
// cannot swithc if changes in working directory conflict with another branch 
// can switch if changes in working directory could be applied without conflict, even though this is fine it is still not a good idea

// solution
1. commit changes to the current branch 
2. remove the changes, checkout the file again 
3. stash the changes 

// LESSON 10.6 - COMPARE BRANCHES - you could also compare remote branch and local branch 
git diff master..newBranch // compare differences with master branch with different branch 
git diff master..newBranch^ // compare master branch with the parent commit of the newBranch 

// find out which branch has been merged 
git branch --merged // it shows all of the commits in current branch is also in another branch
git branch --no-merged // opposite

// LESSON 10.7 - RENAME BRANCHES 
step 1: go to current branch : git checkout branch_name 
step 2: git branch -m new_title_of_branch 

// LESSON 10.8 - DELETE BRANCHES 
git branch -d branch_to_delete

// if there is commit that you're going to lose in a branch because it wasn't merged 
git branch -D branch_to_delete

// LESSON 10.9 - CONFIGURE COMMAND PROMPT
// ours is already configured since we could see what branch are we 

// LESSON 11.1 - RESET BRANCH: RESET TYPES - it's like undoing commits 
// make my project look like it did back then, move head pointer to a specific commit 
soft - moves head pointer, does not change staging index and working directory , git reset --soft <tree-ish>
mixed - moves head pointer, changes staging index to match repository, does not chagne working directory, git reset --mixed <tree-ish> | default choice 
hard - moves head pointer, changes staging to match repository, changes workign directory to match repository, git reset --hard <tree-ish>

Given: - A - B - C (master)
git reset --soft A and you will see B and C's stuff in green (staged and ready to commit) | changes it commits b and c would be left at indexing stage ready to be commited and if you commit it, it owuld be like merging a,b, and c
git reset --mixed A (or git reset A) and you will see B and C's stuff in red (unstaged and ready to be staged (green) and then committed) | almost the same with --soft except it's left in workign directory 
git reset --hard A and you will no longer see B and C's changes anywhere (will be as if they never existed) | 

// LESSON 11.2 - SOFT RESET 
- returns to an old state and leave code changes staged 
- useful for merging one or more commits
- similar to git commit --amend 
- previpous commits will be discarded 

step 1: git checkout -b reset_branch // create a reset branch
step 2: create some edit on some of the files and commit it into the reset_branch
step 3: edit some file again on some of the files and commit again into the reset_branch
step 4(optional): copy the sha of the most recent commit from: git log -2 --oneline
step 5: git reset --soft HEAD^ // reset back to the parent of head, but changes made in most recent commit(head) would not be removed, they would be at the indexing stage 
step 6(optional): git reset --soft e110a2f // this sha is for the most recent commit, if we do this, we just moved the head back to the most recent commit
step 7: after step 5, recommit and it would be like combining 2 commits squashed into one 

// LESSON 11.3 - MIXED RESET
- returns to an old state and leave code changes in working directory
- useful for reorganizing commits 
- previous commits will be discarded 

step 1: git checkout branch_to_work // go to the specific branch youll be working on 
step 2: edit some file and commit changes 
step 3: edit some files again and commit changes again 
step 3: git reset --mixed HEAD^ // changes made in most recent commit would be at the working directory and head would be pointing at head^, the only diff with soft is that here it is left in working directory 

// LESSON 11.4 - HARD RESET - instead of leaving the changes made in working directory/indexing stage, you completely remove them 
- returns to an old stage and leave code changes 
- permanently undo commits 
- previously commits and all changes would be discarded 

step 1: git checkout branch_to_work // go to the specific branch youll be working on 
step 2: edit some file and commit changes 
step 3: edit some files again and commit changes again 
step 3: git reset --hard HEAD^ // most recent commit or head would be completely deleted :(

// LESSON 12.1 - MERGE CODE 
- when everything you've been working on a branch seems all good, you now merge it into master branch (main/original branch)

step 1: git checkout master // go to branch where you want it to merge  
step 2: git merge --no-ff new_branch // merge new_branch into the current branch you're in 
step 3: git log --graph --all --oneline --decorate // you could now see that both new_branch and master points to the same commit 
step 4: git branch -d new_branch // since this new_branch is already merged, it's a good idea to delete them 

// LESSON 12.2 - FAST FORWARD MERGE VS TRUE MERGE 
true merge - merge has been made but the merged branch is still there | --no-ff
fast forward merge - everything has been merged into one line | this is the default, git merge , lesson 12.1 | i think this would cause headaches in the long run since you can't track if a feature has been added by this branch or not 

// undo merge: 
step 1: go to the branch you want 
git reset --hard HEAD^, example you merge it into master, you do this command at master not at any other branch


// LESSON 12.3 - MERGE CONFLICTS 
// merge occurs when there are two changes in the same line or set of lines in two different commits 
ex. 
step 1: branch 1 has: <span> git is great </span>  | note that these are already committed into these branches 
step 2: branch 2 has: <em> git is great </em>
step 3: now you merge them - but it produces error, name would be branch[merging], you could also see something weird on the file you've been merging where conflict occured and these are called conflict markers

3 ways to resolve merge 
1. abort merge 
2. resolve the conflict manually
3. use a merge tool 

1. git merge --abort // stop merging 
2. choose only from 1 branch which one you'll choose | if during merging, type this: git show --color-words to identify the differences between the merging conflict, make sure to remove the markers 
3. the instructor doesn't know how to do this since he do changes manually or he used gui tool

// LESSON 12.4 - STRATEGIES TO REDUCE CONFLICTS 
- keep liens short
- keep commits small and focused (make atomic commits)
- you must have the same preferences with collaborator : spaces,tabs,line returns 
- merge often also called as tracking, this is to reduce merge conflicts ? 

// LESSON 13.1 - SAVE CHANGES IN THE STASH - by default untracked files isn't included in stashes, altho you could include them just search on youtube 
stash is not part of the three trees, it's a special 4th area of git separate from others | think of it as a temporary save 

// example use case: you're modifying something in a specific branch and you're not ready to commit yet but then you wanted to visit to another branch, git will stop you because you haven't committed yet, what the solution? stash those uncommited edits
// stash
git stash save "string string string" // the one you're editing is now saved into string string string. now you can switch branches 

// LESSON 13.2 - VIEW STASHED CHANGES - stashed are uncommited edits 
git stash list // view stashes 
git stash show stash@{0} // view the first stash
git stash show -p stash@{0} // show changes like diff 
note: you could be at any branch and you could still view the stash list 

// LESSON 13.3 - RETRIEVE STASHED CHANGES 
step 1: figure out what branch you're gonna use it, git checkout branch 
step 2: git stash pop,, this would remove a single stash and apply it to the working directory of curent branch
step 2(method 2):  git stash pop stash@{0}, removing a single stash but you wanted something specific 
step 2(method 3): git stash apply, the stash wouldnt be removed but it would still be in working directory, this is useful if you wanted to apply same stash to multiple branches 

// LESSON 13.4 - DELETE STASHED CHANGES 
git stash drop stash@{0} // delete specific stash
git stash clear // delete every stash 

// LESSON 14.1 - LOCAL AND REMOTE REPOSITORIES 
// master (local master) -> origin/master (remote, master branch)
// putting local repository into remote repo is called push 
// master -> origin/master copies it (tracking branch for remote) -> push to remote server (still called master)
// fetch - when changes has been made on remote server but not on local repo and now we want to put those changes in local server/repo, it goes to origin/master but not on master, note that origin/master(think of diz is a branch) is diff from master 

// LESSON 14.2 - GITHUB 
// it is good practice to have the same name for local project and remote repository, github is the remote repository 

// LESSON 14.3 - ADD A REMOTE REPOSITORY 
// push an existing local repository from the command line 
git remote add origin https.github.com/easdfas // this command line can be seen when you create new repo in github, just find it | origin is name of the repo 

git remote // it tells you what remote repo you have, add -v to get more information with this remote 

// delete a remote repo 
git remote rm origin // origin is name of the repo 

// LESSON 14.3 - CREATEA A REMOTE BRANCH - putting your work into github, remember to do the step above first before doing this 
git push -u origin master // push to origin remote, master branch
// github mostly asks for email and password which is cumbersome if this owuld be done every single time, so just search on youtbe the fix for this  

// show remote branch 
git branch -r 

// show all branch including local and remote 
git branch -a 

// LESSON 14.4 - CLONE A REMOTE REPOSITORY 
// go to github, find the clone or download in the repo then copy the link given 
git clone https.github.com/easdfas // just one version is created, creating exact copy of the original file 
git clone https.github.com/easdfas renz_version // this owuld create two files, the file we cloned which contains all of the orignal files and directory and the renz_version which contains only the master branch 

// UNFINISHED - LESSON 14.5 - TRACKIGN REMOTE BRANCH 

// LESSON 15.1 - PUSH CHANGES TO A REMOTE REPOSITORY 
step 1: create some changes yet into local copy | note than origin/master is the tracking branch for the remote branch, it's not the real remote branch 
step 2: git push // you don't need to specify origin master anymore since you have tracking branch, you just need git push  
step 2: git push origin master // this means push to origin(remote repo) the changes made from the master(local repo)

// LESSON 15.2 - FETCH CHANGES FROM A REMOTE REPOSITORY 
git fetch origin // fetch from origin(remote repo)
// note that we still have to merge this fetch into the local repo or master branch if you want | fetch just give you the newly added commits from remote repo, it doesnt merge it automaticalyl to your master branch 

// using fetch - to get information, there's no harm in doing this since it doesn't merge into anything 
fetch before start your day
fetch before you push 
fetch before you go offline 
fetch often 

// LESSON 15.3 - MERGE IN FETCHED CHANGES 
// after git fetch 
git merge origin/master // this is a fast forward merge 

// one command for git fetch + git merge 
git pull // use this cautiously, always remember that this is a two step process combination, git fetch is very useful so don't forget that 

// LESSON 15.4 - CHECKOUT REMOTE BRANCHES 
git branch -r // check only remote branches 
git branch -a // check local and remote branches 

// we can't checkout remote branches, but we can make a branch out of that remote branch, make edits on that new branch and then push it to remote afterwards 
step 1: git branch branch origin/branch // creating the same name of the branch 
step 2: git checkout branch // now make your edits in here 

// LESSON 15.5 - PUSH TO AN UPDATED REMOTE BRANCH
step 1: perform a fetch then merge into it 
step 2: push 

// LESSON 15.6 - DELETE A REMOTE BANCH 
- useful when a feature branch is complete and merged 
git push origin :branch // 1st way to delete the remote branch "branch"
git push origin --delete branch // 2nd way 

// LESSON 15.7 - ENABLE COLLABORATION 
1st - add collaborators to your projects
- go to github website, settings -> collaborators -> add name of collaborator | diff from open source project 

2nd - join an open source project 
- on a repo, click fork 
- look at issues, pull request, make sure someone isn't working on the change you're thinking in mind 

// LESSON 15.8 - COLLABORATION WORKFLOW 
// ongoing project , repo has been set upped, and we'll start working on a feature
- git checkout master 
- git fetch 
- git merge origin/master // merging on your master branch 
- git checkout -b newBranch // create newbranch then switch into it 
- create some edits 
- git add file.html 
- git commit -m "message"
- git fetch // maybe there has been commits that has been made
- git push -u origin newBranch  

// i sent an email to other people, my work is done and now it's her turn, given that she already has the repo set up, this would be her routine: 
- git checkout master
- git fetch 
- git merge origin/master // her master branch is now up to date 
- git checkout -b branch origin/branch // creating a branch out of remote branch, this is tracking the branch that i pushed so she can do some edits on the feature branch i created 
- git log // now she's looking at the changes i made 
- git show 832asdf // 832 is a sha, looking at each commits 
- she made some edits 
- git commit -am " add tour selector on this branch"
- git fetch // she does this to make sure no new edits have been done on new repo 
- git push // everything's good, she pushed her edits 

// my work 
- git fetch 
- git log -p branch..origin/branch // like doing a diff in 2 branch, i wanted to see her edits and compare them to my edit 
- git merge origin/branch // after everythings good i now merge her creation with mine 
- git checkout master // since she already pushed her edits in the remote repo, i'll now pull what she have done into my local repo 
- git fetch // check if anything has come new
- git merge origin/master // i'll only do this if there are something new i got from fetch  
- git merge branch // since everything's already good ill now merge my feature branch into master
- git push // now the new feature is on the remote server 
// now the new feature is on the remote server 


// LESSON X.1 - BASIC COMMAND LINE
ls - list of file and directories
dir - list of directories/folder
cd - change directory
cd .. - change directory backwards
mkdir projectName - create folder
echo "See ya later alligator" > file1.txt - create content with echo then create file
rm - delete file
touch - create file 

// LESSON X.3 - GIT UNINIT
rm -rf .git

// LESSON X.4 - CREATING ALIAS 
git config --global alias.st "status" // now instead of typing status you just type st 
// this would be very useful for log --graph --decorate --oneline --all | create an alias of logg for this 

// CONCLUSION: LESSON X.4 - USING GIT
step 0: udnerstand working directory -> indexing stage -> commit | to start tracking files you need to do git add , this git add is also used to convert working directory to indexing stage | everytime you do edits, you need to put it into indexing stage again 
step 1: initialize a git with the folder/project you wanted to make a repository from: git init | 
step 2: create a gitignore with touch .gitignore | add files you wanted to ignore in .gitignore then after all is done do git add . to start trackign them and now commit them with message "initial commit"
step 3: creating a remote repo in github:  git remote add origin https.github/linkoffile -> git push -u origin master 
step 4: have a look if you're at the correct branch | create branch and switch : git checkout -b new_branch | swithc branch: git checkout master
step 5: make some edit like remove,modify,add then stage them,  git rm, git mv, etc. | to know the status if a file is in working or stage, use git status 
step 6(optional) : look at edits or changes, if it's in working directory git diff, if it's in stage git diff --staged | use --color-words if you're looking only at inline changes
step 7: stage then commit them at the same time with: git commit -am "message" | to do them individually use git add for staging and git commit for committing | make sure to use atomic commits as it is very useful
step 8: view commits with: git log | to compare commits use git diff 1casdfa...1231asdf
step 9(optional) : undo commit: git revert SHA123 | unstage file: git reset HEAD | undo working directory: git checkout -- | remove untracked file: git clean -f 
step 10: push changes to remote repo 

// USING GIT EVERYDAY
- fetch from remote server every single day so you would know what changed 
- before merging, or committing, make it a habit to use git diff to double check differences 

important mention: press q to quit git log, this is very annoying 

// LESSON X.5 - The file will have its original line endings in your working directory. warning: LF will be replaced by CRLF in Gemfile. | you'll most likely encounter this when using node module, to prevent endless warnings type the line below
git config --global core.safecrlf false` }

    ]}, { data_science: [
            { probability_and_statistics: `` },
            { linear_algebra: `` },
            { multivariate_calculus: ``},
            { machine_learning_algorithms: ``},
            { numpy: `` },
            { pandas_and_matplotlib: `` },

    ]}, { programming_languages : [
            { python: 
`#LESSON 3.17 GITBASH COMMANDS

#ls - list
#cd Desktop - change directory to Desktop
#mkdir fileName - make directory/folder
#touch test.py - create py file
#nano test.py - go inside the file and create content for python
#python test.py - running the script

#LESSON 4.26 - COMMENTS
#'#' Use this hashtag for single line comments. Python doesn't support multi line comments :(

#LESSON 4. 27 - DATATYPES - has a lot of differentiation from c++ and java
a = 10 #int, no ';' semicolon at the end, new line means end of statement
b = 10.1 #float, there is no double in python
c = 10j #complex datatype (only used for complex numbers)
d = "sample string" #string datatype
e = True #boolean datatype
f = ["a","b","c"] #list datatype, somehow the equivalent of vector in c++ | changeable values and allows duplicate 
g = ("a","b","c") #tuple datatype | a collection which is ordered and unchangeable
h = range(10) #range, idk if this is datatype | RESEARCH MORE
i = {"name" : "Renz", "age" : 19} #dictionary container | unordered and changeable
j = {1,2,3} #set container | unordered and unindexed and no duplicate members
k = ({1,2,3,4,5}) #frozen set container
l = b"Hello" #byte datatype, idk what this does | RESEARCH MORE
m = bytearray(2) #bytearray, idk what this does | RESEARCH MORE
n = memoryview(bytes(1)) #memoryview, idk again what this does | RESEARCH MORE

#LESSON 4.27 A - LIMITATION OF PRINT FUNCTION
#print(a+b+d) #you can't mix a numerical value and string value when printing

#LESSON 4.27 B - KNOWING A VARIABLES DATATYPE
print(type(a)) #type(variable) is a function to know what datatype the variable is 

#LESSON 4.28 - NUMBERS (TYPECASTING)
aN = int(4.6) #convert 4.6 into an integer
bN = float(2) #convert 2 into a float
cN = complex(a) #convert 3 into a complex number

#LESSON 4.30 - BOOLEANS | ANYTHING WITH A VALUE IS TRUE JUST LIKE IN C++ BUT UNLIKE WITH JAVA
aBool = True
bBool = False
cBool = bool(123213) #since this has a value, this is automatically true
dBool = bool("") #this is 0, or no value, this is false

#application of boolean in if statements
if aBool:
print("abool is true")
else:
print("abool is false")

#LESSON 4.31 - OPERATORS
def operators() :
#arithmetic operators
a = 10
b = 20
result = a + b #addition
result = a - b #subtraction
result = a * b #multiplication
result = a % b #modulus | get the remainder
result = int(a / b) #division
result = int(a ** b) #exponentation
result = int(a // b) #floor division

#assignment operators
#l value = r value
i = 123; #we are assigning the value of 123 to variable 'i'
j = 10; #binary value: 01010
k = 20; #binary value: 10100
l = 30; #binary value: 011110
m = 40; #binary value: 101000
i += 123; #this is equal to i = i + 123
i -= 123; #this is equal to i = i - 123
i *= 123; #this is equal to i = i * 123 (multiply)
j /= 123; #this is equal to j = j / 123 (division)
k %= 123; #this is equal to k = k % 123 (remainder)
i **= 100 #this is equal to i = i ** 100 (exponentation)
l //= 1 # this is eqaul to l = l // 1 (floor division)
    
#reassigning the values back to the default
i = 123; #we are assigning the value of 123 to variable 'i'
j = 10; #binary value: 01010
k = 20; #binary value: 10100
l = 30; #binary value: 011110

#BITWISE ASSIGNMENT OPERATORS & BITWISE OPERATORS
j &= k; #this is equal to i = i & k | & - both binary must be 1 to be 1 | resulting binary: 00000
j ^= k; #this is equal to i = i ^ k | ^ - only 1 of the binary must be 1 to be 1 | resulting binary: 11110
j |= k; #this is equal to i = i | k | | - only 1 of the binary can be 1 and it would be 1 | resulting binary: 11110
l <<= 1; #this is equal to i = i << k | << - shift the binary value right | resulting binary: 111100
m >>= 1; #this is equal to i = i >> k | >> - shift the binary value left | resulting binary: 010100

#COMPARISON OPERATOR
a = 1
b = 2
c = 0
if a > b: #a is greater than b
    c = 1
elif a < b: #a is less than b
    c = 2
elif a == b: #a is equal to b | can also use 'is'
    c = 3

d = 10
e = 20
if d >= e: #d is greater than or equal to e
    c = 4
elif d <= e: #d is less than or equal to e
    c = 5
elif d != e: #d is not equal to e | this would not get executed since d <= e is already true | can also use 'is not'
    c = 6
elif a > b and d > e: #and = both statement must be true 
    c = 7
elif a < b or d < e: #or = one statement must be true
    c = 8
elif not(a == b and d > e): #it reverses the result, if result is true then this becomes false
    c = 9

#MEMBERSHIP OPERATORS
f = {1,2,3}
g = 1
if g in f: #if the value of g is in f then it is true
    c = 10
elif g not in f: #if the value of is is not in f then it is false
    c = 11

#LESSON 4.32 - IF STATEMENTS - NO DIFF WITH C++ AND JAVA EXCEPT FOR ELSE IF, ELIF(FOR PYTHON)
def ifStatements () :
a = 10
b = 30
c = False
if a < b:
    False
elif a > b: 
    True
else:
    b = 5

#LESSON 4.33 - WHILE LOOP | PYTHON ONLY HAS THESE 2 KINDS OF LOOPS (FOR AND WHILE) UNLIKE C++ AND JAVA
def whileLoop() :
boolVar = False
a = 0
while boolVar: #while true, do this
    a += 1
    boolVar = True

#LESSON 4.33A - BREAK AND CONTINUE STATEMENTS
def breakAndContinue () :
a = 1
MAX = 10
while a <= MAX:
    a += 1
    if a == 3:
        continue #stop and go at the start of the loop again
    elif a == 6:
        break #stop the loop when this has been reached
    print(a)
    

#LESSON 4.34 - FOR LOOP
#this is the range based for loop example for python,only used with containers(data structure)
def rangeBasedForLoop () :
a = [1,2,3]
for x in a: #automatically incremets just like any other range based for loops
    print(x)
for i in range(1,5):
    print(i)

#LESSON 4.35 - FUNCTION
#concept has no difference with c++ except you're like passing a template function <typename T> since you do not indicate the datatype which is weird
def sampleFunction (sampleParameter,**kwargs): #
print("this is a sample function with a " + sampleParameter)
sampleArgument = "sample argument"
sampleFunction(sampleArgument) #argument is when passing value, it could be an l/r value
sampleFunction("abcds",sampleArgument = "sampleKeywordArgument") #this is the syntax for a sample keyword argument

def sampleFunctionWithReturn (x):
return x * 5 #this would multiply by 5 whatever the value of x is
sampleFunctionWithReturn(100)

#LESSON 4.35A - MULTIPLE ARGUMENTS
def sampleArgs (*args): #this is not a pointer, this is an args which means you're passing multiple arguments. This is the equivalent of '...' in c++
print(args)
print(args[2]) #since args is a contigous block of memory you could do this just like in c++
sampleArgs("Renz"," Carillo"," is"," myName")

#LESSON 4.35B - MULTIPLE KEYWORD ARGUMENTS
def sampleKwargs (**kwargs): #this is not a pointer to a pointer, the purpose of this is the same for *args but explicitly for keywords
print(kwargs)
sampleKwargs(a=1,b=2,c=3,d=4,e=5)

#LESSON 4.35C - PASSING LISTS AS AN ARGUMENT
#the default for loops is a range based for loops (catered for containers), for loops in python was specifically made for this
def sampleListArg (list): #idk if only the first element is getting passed and it's just getting incremented (list[i]) but i think it is since this is the case for other programming languages
for x in list:
    print(x)

x = [1,2,3,4,5]
sampleListArg(x)

#LESSON 4.35D - PASS STATEMENT | when you're creating a function that's needed to be coded in the future
def funcPass ():
pass

#LESSON 4.35E - RECURSION | same concept with c++
def recursionFunc (x,y):
if x > 0:
    print("recursion[" + str(y) + "] = " + str(x))
    recursionFunc(x-10,y+1)
recursionFunc(100,1)

#LESSON 4.36 - LAMBDA | GENERIC PROGRAMMING
#lambda in python is a one liner function only, it is only useful in a disposable function, it can take many arguments
def funcLambda (x):
return x + x

#var    = lambda var: (do something)
funLambda = lambda x: x + x #this is the equivalent of the function above
funLambda(5) #calling lambda function that was created, it is called like a regular function

#LESSON 4.37 - ARRAYS | there's no array in python, it's called list and it's the equivalent of vector in c++
#in c++ calling the var name of the array means you're referring to the first element thus you cannot change every value it holds on the way you declare them but in python it is somehow possible
arr = [1,2,3] 
#array method, there's a lot but here's a few, just check the documentation
arr.append(4) #add at the end of the list
arr.pop() #remove the last, it could also be pop(0) to remove the first element
print(arr[0]) #dereferencing the first element of the list

#LESSON 4.38 - CLASS 
#python's class is weird, it does not have data members, you declare data members outside the class and it just contains functions, 
#all functions are considered as static method for other languages such as c++ and java since you can call them even without creating an object

class SampleClass:
#syntax for constructor, weird right?
def __init__(self,firstName,lastName,age):#self is the equivalent of 'this' and it is required as parameter when using the functionality of 'this'
    self.firstName = firstName
    self.lastName = lastName
    self.age = age
def print(self): #yeah we still need to pass self here since we would be using it
    print("Hello, " + self.firstName)

#obj = constructor | again, the syntax is really weird compared to c++ and java
obj = SampleClass("Renz","Carillo",19)
print(obj.age) #we're accessing the attribute 'age'
#SampleClass.print(obj) #here we're accessing it like it's a static method in c++

#LESSON 4.39 - INHERITANCE 
class DerivedClass (SampleClass): #this is the syntax for inheritance
pass

#LESSON 4.39A - SUPER KEYWORD
#in java, super can be used to call the base's constructor,overriden method, or instance variable/data members, but in python only calling of base constructor is possible
class DerivedClass1 (SampleClass):
def __init__ (self):
    print("Derived class has this and the one below")
    super().__init__("Markagne","Lazo",11) #in here we called the constructor of the base class using super

obj1 = DerivedClass1()
print(obj1.age)

#LESSON 4.40 - ITERATORS
#iterator is used for container that could be counted, e.g. array,string(technically it is an array of char),vector,stack,deque,etc. | it is like a pointer, when calling the array
nums = [1,2,3] #this is a list, which is a container, this is iterable
it = nums.__iter__() #another syntax for assigning this as an iterator is - it = iter(nums)
print(next(it)) #next(iterator) is the syntax for calling the next element in the array 

#creating your own iterator object class
class MyClass:
def __init__ (self,start,end): #initializing the constructor
    self.start = start
    self.end = end
def __iter__ (self): #this is required when creating ur own iterator
    return self
def __next__ (self): #this is also required
    value = self.start
    self.start += 1
    return value

obj = MyClass(1,10)
print(obj.__next__())

#LESSON 4.41 - SCOPE | this is super ez but im gonna include it anyways since it's part of the learning path
y = 200 #this is a global variable, it could be used at any functions
def func():
x = 100 #this is a local variable, its lifetime ends when the function ends, its scope is only inside this function

#LESSON 4.42 - MODULE | this is a collection of functions in a different file, a collection of module is library
import calcu #this is the equivalent of include <file.h> in c++
#import calcu as alias | 'as alias' means you could call this module as alias
#from calcu import * | do this if you dont want to call the import name everytime, import name in this instance is calcu
#syntax : (name of import).(class name).(method)
calcu.Calcu.add(5,10)
calcu.outsideClassFunction() #this is a function outside the class thus no need to call the class name

#LESSON 4.43 - DATES MODULE | this is a basic module to learn to access datetime
import datetime as dt
obj = dt.date(2021,5,8) #we are assigning this value to the constructor date class
print(obj.year) #access the year
print(obj.month) #access the month
print(obj.day) #access the day
objToday = dt.date.today() #we are assigning this variable to the method today()
print(objToday)
objTime = dt.time(1,2,3,4)
#there are a lot into this just look at the documentation

#LESSON 4.44 - MATH MODULE | basic collection of functions/method for math 
import math 
a = min(1,10) #find the minimum between the given set of number
b = max(10, 20) #opposite of min
c = pow(1,5) #power, seriously i dont need to explain this
d = math.sqrt(100)
#just look at the documentation for additional fucntions

#LESSON 4.45 - JSON MODULE | i dont think id be needing this soon since this requires javascript and probably only used for web development

#LESSON 4.46 - REGEX | Regular Expression, this is the equivalent of ctrl+f in an ide, it is used to find
# ^ - start
# $ - end
# \s - whitespace
# \S - non whitespace
# [abc] - look at the set that has matching letter
# [^abc] - look at the set that is not matching the letter
# . - any character
# * - match one character 0+ time
# + - match one character 1+ time
# ? - non greedy
import re as regex #re is the name of the module regex
sampleString = "my email is renzcarillo32@gmail.com"

#this would all find the matching keyword you specify
result0 = regex.findall("em", sampleString)
if result0:
print(result0)
#this would search for all matching the keyword 'my email'
result = regex.search("^my.^email$", sampleString)
if result: #reminder: anything with a value is true
print("yeah, there's a match")

#this would look at what position does the indicated pattern is from
result1 = regex.search("\s", sampleString)
if result1:
print("first whitespace is located at position: " , result1.start()) #with (,) comma inside print, you explicitly convert int to str so it is much better to use than '+'

#since i specified whitespace, it would split every whitespace in the text sampleString
result2 = regex.split("\s", sampleString)
if result2:
print(result2)

#substitute the indicated pattern with the one you'd like
result3 = regex.sub("s",".",sampleString)
if result3: 
print(result3)

#LESSON 4.47 - PIP | Package manager for python packages and modules, used to install packages
#commands for command line for pip
#pip install pip - this is one time | install pip
#pip --version - check the version of pip
#pip install camelcase - download the 'camelcase' package | you can now use this package on python
#pip uninstall camelcase - uninstall the package 
#pip list -list the packages of pip
import camelcase as cc
c = cc.CamelCase()
txt = "capitalize the first letter of each word"
print(c.hump(txt)) #this method capitalizes the first letter of each word
#you could find more packages and documentation of each package at 'pypi.org'

#LESSON 4.48 - TRY EXCEPT | do this, if error do this
try: #do this
inp = int(input())
#except: | this is not a good practice since it is too broad in every error this would appear, it is better to be specific at error
except ZeroDivisionError as zd: #if this error occured
print(zd)
except: #this is like else if
print("wrong input")
else: #else is if all except wasn't executed
print("yo, it was a success")
finally: #this always execute
print("finally is always present")

#LESSON 4.49 - INPUT | equivalent of std::cin in c++
user = input("Enter your username")
print("Hello ", user)

#LESSON 4.50 - STRING FORMAT | this is to format the string text that is out of your control e.g. they're in database
                                    #0 - element no. | : | .3f - make it decimal to to 3 points
text001 = "here is a sample string no. {0:.3f}" #'{}' is the placeholder used for string formatting
number = 1
print(text001.format(number))
                                #you could also leave '{}' but it is not a good practice
text001 = "here is a sample string no. {} and not {1}"
number = 1
secondNumber = 2

text002 = "print text like this {carname}"
print(text002.format(carname = "Ford")) #you could also define the formatted string inside the argument

#LESSON 5.51 - VARIABLES 
a = 10 #variables cannot be declared in python, only initialized

#LESSON 5.54 - UNPACKING VARIABLES | other programming languages has an equivalent of this one
a,b,c = 1,2,3 #here is a way
d = e = f = 5 #another weird way (im not sure if this is possible in c++ and java)
arrArrArr = [1,2,3,4,5]
g,h,i,j,k = arrArrArr #assigning the values  of arrArrArr to g,h,i,j,k, it's like doing g = arrArrArr[0], h = arrArrArr[1], etc.

#LESSON 5.55 - OUTPUT | equivalent to std::cout << in c++ and System.out.println() in java, but srsly why is this only covered later on the course?
print("just print this")

#LESSON 5.56 - GLOBAL VARIABLES | this is a little feature that differs with c++ since reassigning and initializing has the same syntax in python
x = 10
y = 5
def funcfuncfunc():
global x #we are calling the global variable x
x = 50 #if we do this are we assigning or initializing? we're initializing thus a variable x for global and local scope is created, it is not reassigned and this two x are two different x
#here is an example when the problem arises
#y += 1 #this would produce an error because the python thought you are initializing | this is equal to y = y+1, its only good for reassigning
print(x)

#LESSON 6.58 - STRING
#example of multiline string, use 3 """
strString = """ a b c d
e f g h """ 
string0001 = "access it like this"
print(string0001[0]) #the way you access it is the same with c++ and java

#LESSON 6.58A - USE OF IN AND NOT IN | it is used if an element is inside the container, it returns true or false
if "a" in string0001:
print("a is in stringVar")
if "x" not in string0001:
print("x is not in stringVar")

#LESSON 6.59 - SLICING STRINGS
sampleStringString = "hello hello world"
print(sampleStringString[2:8]) #start the slicing at element 2 which is 'l' and end it with element 8 which is 'l'
print(sampleStringString[:3]) #it could be like this and vice versa, if like this it starts with 'h' and ends with 'l'

#LESSON 6.60 - STRING METHODS
stringtring = "abdDsF"
print(stringtring.upper()) #this means capitalize every letter
print(stringtring.lower()) #lower all of the capital letters
#just look at the documentation for more different methods

#LESSON 6.63 - ESCAPE CHARACTERS
#this is used to use illegal characters inside string literals
print("here is an example use of escape \n character \" ") #use backslash followed by whatever character you want

#LESSON 7.67 - LIST |it is the most flexible among dictionary,set,and tuple, it's like vector in c++ except vector cant hold both numerical and alpha characters at the same time, it is ordered ang changeable
listSample = [1,2,3,4,5,6]

#this is how to access a list
print(listSample[0]) #access first index like an array
print(listSample[-1]) #access last index of the list

#access specific part of the list only
print(listSample[1:3]) #this means start the access at the second index element and end it with the 4th index element

#you could change all items in the list at once, which is impossible to do at c++ and java, you could only select specific part
listSample = [6,5,4,3,2,1] #you are changing the whole list, this is impossible in c++ and java
listSample[1:3] = [20,30,50] #you are changing the 2nd index element up to 4th index element, also impossible in c++ and java

#insert item at list (just like vector)
listSample.insert(0,1231231)

#add items at the end (just like in vector)
listSample.append(9000)

#combine a list into another list
combineThisList = [69,79,89]
combineThisTuple = (70000,80000,60000)
listSample.extend(combineThisList) #congrats, you just combined these two lists
listSample.extend(combineThisTuple) #you could even combine different collections/container
#or you could do this
listSample3 = listSample + combineThisList #in c++ an overloaded operator for '+' shall be used 

#delete,pop,remove,clear | delete and pop are basically the same with different syntax
listSample.remove(70000) #we have removed the 70000 from the list
listSample.pop(0) #we have removed the first index element, leaving the argument blank would mean remove the last item of the list
del listSample[0] #remove the first index element, 'del listSample' means deleting all of the content of the list or the list itself?
listSample.clear() #we removed the content of the list but the list is still there

#looping through list, default range based for loop is the best practice
loopThisList = ["Facebook","YouTube","Google","Instagram"]
for i in loopThisList: #best practice to loop a colleciton/container
print(i)

for i in range(len(loopThisList)): #another weird way to loop
print(loopThisList[i])

i = 0
while i < len(loopThisList): #just a regular while loop
print(loopThisList[i])
i = i + 1

[print(x) for x in loopThisList] #very weird way to loop but it is a one liner, it is also called as list comprehension

#LESSON 7.72 - LIST COMPREHENSION | this is a one liner for loop
listCompre = [1,2,3,4,5,6,7]
[print(x) for x in listCompre] #syntax: content for var in listToLoop | you could also do double for loop just add another for var in listToLoop

#this is the equivalent of the code above
listCompre = [1,2,3,4,5,6,7]
for x in listCompre:
print(x)

#LESSON 7.73 - SORTING LIST
print(listCompre.sort()) #sort them from smallest to biggest
print(listCompre.reverse()) #reverse the order
print(listCompre.sort(reverse = True)) #start from biggest to smallest

#copying list
myCopyList = listCompre.copy() #use the method .copy() to copy and assign list into myCopyList

#LESSON 8.78 - TUPLES | this is basically a list but you cannot modify the values
sampleTuple = ("a","b","c") #the syntax for tuple uses '()' parentheses

#this is how to access a tuple
print(sampleTuple[0]) #access first index like an array
print(sampleTuple[-1]) #access last index of the tuple

#access specific part of the list only
print(sampleTuple[1:3]) #this means start the access at the second index element and end it with the 4th index element

#adding from tuple | this is more of a hack, we first convert it into list then convert it into tuple
convertList = list(sampleTuple)
convertList.append("d") #here i have added a d, i was able to add since this is currently a list
sampleTuple = tuple(convertList) #i have converted it back to tuple, now the collection cannot be modified again

#removing from tuple | just the same with adding
convertList = list(sampleTuple)
convertList.append("d") #here i have added a d, i was able to remove since this is currently a list
sampleTuple = tuple(convertList) #i have converted it back to tuple, now the collection cannot be modified again

#deleting tuple, just the same with deleting list
del sampleTuple

#LESSON 8.81 - UNPACKING TUPLES | its like a dictionary in some way
unpackTuple = ("green","blue","yellow") #here we are creating a tuple
(var1,var2,var3) = unpackTuple #here we are saying var1 = "green", var2 ="blue", var3 = "yellow"
print(var1)

#looping tuples, just the same as looping list
loopThisTuple = ["Facebook","YouTube","Google","Instagram"]
for i in loopThisTuple: #best practice to loop a colleciton/container
print(i)

for i in range(len(loopThisTuple)): #another weird way to loop
print(loopThisTuple[i])

i = 0
while i < len(loopThisTuple): #just a regular while loop
print(loopThisTuple[i])
i = i + 1

#joining tuples, everything is actually just the same with list why am i still doing this
tuples1 = (1,2,3)
tuples2 = ("a","b")
tuples3 = tuples1 + tuples2 #this uses overloaded operator on c++
print(tuples3)
tuples4 = tuples1 * 3 #yeah you could even multiply the content of tuples 1
print(tuples4)

#tuple methods | it has two methods which is count() and index(), a list has alot more
tupleTuple = (1,2,3,5423,23,2353461,4523,536,54,36,34,1345,23)
tupleCount = tupleTuple.count(23) #it counts how many '23' are there in this tuple
tupleIndex = tupleTuple.index(23) #it returns what is the index value of the argument '23'
print(tupleCount)
print(tupleIndex)

#LESSON 9.86 - SETS | the content must be unique only and it is ordered(for numbers only), the numerical characters are automatically ordered while alpha characters aren't, it is also unindexed
sampleSet = {4,2,3,1} #its syntax is like array in c++ and java but it's not and the difference are huge

#access set items, you cannot access it like the way you access list and tuple, you can only access it through for loop using in
for x in sampleSet:
print(x)

#modify set items
sampleSet.add(5) #obviously add a value
addThisSet = {"a","b","c"}
sampleSet.update(addThisSet) #combine two sets, or any other collections such as list,dictionary,tuple

#to remove an item you can use discard or remove
sampleSet.remove(5) #we removed the value of 5 in this set
sampleSet.discard("a") #idk whats the purpose of putting two methods that does the exact same thing
sampleSet.pop() #we are removing the last value index element, this isnt a good idea since set is automatically organized thus we do not know what is getting removed
sampleSet.clear() #remove all of the contents
del sampleSet #completely remove this set
sampleSet = {1,2,3,4}
sampleSet2nd = {5,6,7,8}
sampleSet3rd = sampleSet.union(sampleSet2nd) #combine sampleSet and sampleSet2nd | this is the same with update or idk
#just look at the documentation for more methods

#LESSON 10.94 - DICTIONARY | this is a collection of key value pairs
sampleDictionary = {
#key   : value
"var1" : "abc",
"var2": 123,
"var3": "efg"
}

#access dictionary
print(sampleDictionary["var1"]) #this would print abc, this is the best practice
print(sampleDictionary.get("var1")) #equivalent of the syntax above

#adding item to the dictionary
sampleDictionary["var4"] = "asdgfasdf" #syntax for adding item

#printing values and key:value pair
print(sampleDictionary) #in here we are only printing the values
print(sampleDictionary.keys()) #we are printing the keys with its value pair too!
print(sampleDictionary.items()) #idk really what this does but it seems to convert everything into an item of each on their own including the keys

#modifying dictionary
sampleDictionary["var4"] = 123 #here i have modified the content of var4
sampleDictionary.update(var4 = 321) #it could be like this but this is honestly weird, just use the one above
sampleDictionary.pop("var4") #remove a pair, input the key as an argument
sampleDictionary.popitem() #remove the last pair
sampleDictionary.clear() #clear all of the contents
del sampleDictionary #delete the existence of this sampleDictionary

#looping dictionary
sampleDictionary = {"var1": 123, "var2": "abc", "var3": 321 }

#this would only print the keys
for x in sampleDictionary: #you could do 'in sampleDictionary.keys() and this would do the same thing
print(x)

for x in sampleDictionary.values(): #this would print the values
print(x)

for x,y in sampleDictionary.items(): #this would print both the keys and values
print(x,y)

referenceDictionary = sampleDictionary #this is the syntax for referencing, every changes made in referenceDictionary would affect the sampleDictionary
copyDictionary = sampleDictionary.copy() #this would copy the values of sample Dictionary
copyDictionaryAgain = dict(sampleDictionary) #this would do the same

print(copyDictionaryAgain)

#nested dictionary
progLanguages = {
"java" : {
    "difficulty" : "medium",
    "oop" : True
},
"c++" : {
    "difficulty" : "hard",
    "oop" : True
},
"python" : {
    "difficulty" : "easy",
    "oops" : True
}
}

#-------------------------------------------------------------------------------------------------------------
#LESSON S.1 - DUNDER METHODS | special methods in class
class SampleDunderClass:
def __init__(self): #constructor
    self.x = x
def __repr__(self): ##this is displayed to the end user when an object of this class is called but the display is overriden when u use __str__, this is meant for developers
    return "SampleDunderClass({})".format(self.x)
def __str__(self): #this is displayed to the end user when an object of this class is called
    return "The x of SampleDunderClass is {}".format(self.x)
def __add__(self,other): #this is the equivalent of 'class operator+()'/overloaded operator in c++
    return self.x + other.x


#LESSON S.2 - DECORATORS | modify the functionality of a function without changing the code, only usede when passing a function as argument
def outsideFunc(func):
def insideFunc(): #yes, function inside a function is possible in python but not in c++ and java
    print("Executing Inside Function")
    func()
    print("End Inside Function")
return insideFunc #it's returning the memory address of insideFunc

#instead of doing this thing below we could just write it with decorators --------------------------
#def printer():
#    print("Hello World")

#display = outsideFunc(printer) #this is equivalent to writing display = insideFunc, now if we want to call the inside func we could write this as outsideFunc(printer)()
#display() #this is equivalent to writing outsideFunc(printer)()
#---------------------------------------------------------------------------------------------------
@outsideFunc #this is equivalent to writing outsideFunc(printer), we are like passing printer to outsideFunc
def printer():
print("Hello World")

printer() #we could just do this instead, it is equivalent to outsideFunc(printer)(), since it has a decorator it's like we're calling it's decorator function and passing this function as an argument

#LESSON S.3 - EVERYTHING IS AN OBJECT even functions, functions are first class objects which could be pass around like a variable
def funcFunc():
return 5
def funcFunc000(functionPass):
return functionPass() + 5 #since functionPass is a reference to funcFunc we must add '()' parentheses | if you cannot understand read the text below first | syntax for reference is object = object1, in c++ it is int& object = object1
print(funcFunc000(funcFunc)) #here because we have written functionPass = funcFunc, functionPass becomes a reference to function funcFunc, if we wanted to grab it by value then we must do functionPass = funcFunc()

#LESSON S.4 - ANY AND ALL | any - if one of the iterable is true then it returns true, if empty return false | all - every iterable must be true or empty to return true
any(["abc",False,1]) #this would return true since it has two values that is true
all({}) #it has no value so it must be true
boolVar = any([x == "a" for x in "rango"]) #example usage of any in a list comprehension
print(boolVar)










































    










` },
            { java: `` },
            { cpp: 
`// Syntax + Data Structures.cpp : This file contains the 'main' function. Program execution begins and ends there.

//C++ SYNTAX PRACTICE BY RENZ CARILLO, ROADMAP WAS PULLED OF FROM LINKEDIN LEARNING (C++ ESSENTIAL TRAINING), SIDE LESSON WERE FROM YOUTUBE VIDEOS

#include <iostream>
#include <string>
#include <typeinfo>
#include <stdio.h>

using std::string;

//LESSON 2.4 - IDENTIFIER
int //DATATYPE
a //IDENTIFIER
= 1; //VALUE

//THIS COULD ALSO BE TYPED IN A SINGLE LINE
//int a = 1;

//ASSIGNMENT IS NOT ALLOWED IN GLOBAL, NOTHING IS EXECUTED ON GLOBAL THUS INITIALIZATION ARE THE ONLY ONES ALLOWED
/*int a;
a = 5*/

//LESSON 2.5 - DEFINING VARIABLES
//int bbbbb; //DECLARATION
int b = 2; //INITIALIZATION

//LESSON 2.6 - POINTERS
//IT IS BEST PRACTICE TO ADD p AT THE FRONT OF THE NAME OF POINTER VARIABLE e.g. pVariable
int* c = &b; //c NOW HOLDS THE MEMORY ADDRESS OF b

//THIS COULD ALSO BE TYPED AS:
/* 
int* c;
c = &b; //YOU DON'T HAVE TO TYPE THE POINTER OPERATOR AGAIN AT INITIALIZATION
*/

//*c = 3; //THE POINTER HAS BEEN DEREFERENCED AND NOW THE VALUE OF c AND b IS 3, NO ASSIGNMENT IS ALLOWED ON GLOBAL SCOPE

//LESSON 2.7 - REFERENCES
//YOU WOULD HAVE THE SAME MEMORY ADDRESS WITH REFERENCE
int d = 4;
int& e = d; //e IS NOW AN ALIAS OF D, EVERY CHANGE YOU MADE ON e WOULD ALSO OCCUR TO d

//LESSON 2.8 - PRIMITIVE ARRAYS
//ARRAY COULD BE ANY DATA TYPE, IT COULD BE int, float, double, char, etc.
void sampledArray() {
    int dArray[2]; //ARRAY COULD BE DECLARED IN A MULTI LINE AND ALSO A SINGLE JUST LIKE BELOW
    dArray[0] = 1; //1ST INDEX ELEMENT WOULD ALWAYS START TO 0 WHEN SELECTING IT
    dArray[1] = 2; //2ND INDEX ELEMENT WOULD BE 1 WHEN SELECTING IT
    int nArray[] = { 1,2,3 }; //ARRAY WITH BLANK NUMBER INSIDE '[]' IS POSSIBLE
    int array[4] = { 1,2,3,4 }; //ARRAY COULD ALWAYS BE ACCESSED AS IF IT WERE A POINTER
    *array = 1; //THIS IS EQUAL TO THE SYNTAX BELOW
    array[0] = 1; //THIS IS EQUAL TO THE SYNTAX ABOVE
    int* f = array; //THIS IS A POINTER, YOU DONT NEED '&' WHEN ASSIGNING A POINTER TO AN ARRAY |WHEN SELECTING THE WHOLE ARRAY LIKE THIS, IT WOULD MEAN SELECTING THE 1ST INDEX ELEMENT
        * f = 2; //FIRST ELEMENT OF THE array WOULD CHANGE INTO 2, SINCE THIS POINTER POINTS TO THE 1ST INDEX ELEMENT
    f = f + 1; //IT WILL MOVE TO THE NEXT INDEX OF ARRAY, THIS f POINTER NOW POINTS TO 2ND INDEX
    f = f + 2; //THIS f POINTER NOW POINTS TO THE 3RD INDEX
    *(f + 3) = 5; //WE ARE GETTING THE ADDRES OF 4TH INDEX THEN DEREFERENCING IT THUS ASSIGNING THE 4TH INDEX A VALUE OF 5
}
//LESSON 2.9 - PRIMITIVE STRING
//STRING IS JUST AN ARRAY OF CHARACTERS
char sampleTextString[] = "this is a string"; //THE " ", IS A STRING LITERAL IT AUTOMATICALLY ADDS NULL OPERATOR 
char sampleTextString1[] = { 's','t','r','i','n','g','\0' }; //THIS COULD BY TYPED JUST LIKE A NORMAL ARRAY BUT THEN YOU HAVE TO ADD 0 AT THE END AND IT'S KINDA HASSLE TO DO IT THIS WAY

//LESSON 2.10 - CONDITIONALS
//POSSIBLE COMBINATIONS: IF | IF , ELSE IF | IF, ELSE | IF, ELSE IF, ELSE | IF, ELSE IF, ELSE IF
void sampleConditionals() {
    int a = 1, b = 2, c = 0;
    if (a < b) { //IF CONDITION IS TRUE 
        c = 1;  //THEN DO THIS
    }
    else if (a > b) { //IF ABOVE CONDITION IS NOT TRUE BUT THIS IS TRUE
        c = 2;       //THEN DO THIS
    }
    else {      //IF NOTHING OF THE CONDITION ABOVE IS TRUE
        c = 3;  //THEN DO THIS
    }
}

//LESSON 2.11 - BRANCHING CONDITIONALS (SWITCH STATEMENT)
void sampleSwitch() {
    int number = 0;
    const int equalTo1 = 1; //SWITCH CASES NEEDS TO BE CONSTANT 
    const int equalTo2 = 2;
    const int equalTo3 = 3;

    switch (number) {
    case equalTo1:  //IF number IS EQUAL TO equalTo1 | (number == equalTo1) | THIS IS EQUIVALENT TO WRITING case 1:
        number = 1; //THEN DO THIS 
        std::cout << "value of number is" << number << std::endl; //AND THIS
        break; //ADD BREAK STATEMENT SO IF THE CONDITION ABOVE IS TRUE, IT WILL STOP LOOPING
    case equalTo2:  //IF number IS EQUAL TO equalTo2 | (number == equalTo2)
        number = 2; //THEN DO THIS 
        std::cout << "value of number is" << number << std::endl; //AND THIS
        break; //ADD BREAK STATEMENT SO IF THE CONDITION ABOVE IS TRUE, IT WILL STOP LOOPING
    case equalTo3:  //IF number IS EQUAL TO equalTo2 | (number == equalTo3)
        number = 3; //THEN DO THIS 
        std::cout << "value of number is" << number << std::endl; //AND THIS
        break; //ADD BREAK STATEMENT SO IF THE CONDITION ABOVE IS TRUE, IT WILL STOP LOOPING
    default: //THIS IS THE EQUIVALENCE OF ELSE IN IF STATEMENTS
        number = 4;
        std::cout << "nothing else is true, this is the default response" << std::endl;
    }
}

//LESSON 2.12 - LOOPING WITH WHILE AND DO
void sampleWhileAndDoLoop() { //WHILE LOOP IS WHEN YOU DO NOT CLEARLY KNOW THE LIMITS (FUTURE)
    int a = 0;
    int b = 0;
    int maxCount = 5;

    while (a < maxCount) { //THE LOOP WOULD NEVER STOP UNTIL IT BECOMES FALSE
        if (a == 3) { break; } //IF a ACHIEVED A VALUE OF 3, break THE LOOP
        if (a == 1) { continue; }//IF a ACHIEVED A VALUE OF 1, SKIP THE 1
        std::cout << "value of a is " << a << std::endl;
        a = a + 1; //THIS IS EQUAL TO a++
    }
    //do-while EXECUTES FIRST BEFORE STARTING THE WHILE LOOP, THIS IS THE MAIN DIFF WITH while LOOP
    do {
        b++; //THIS IS EQUAL TO b = b + 1;
        std::cout << "value of b is " << b << std::endl;
    } while (b < maxCount);
}

//LESSON 2.13 - ITERATING WITH FOR
void sampleForLoop() { //FOR LOOP IS USED AS ITERATION WHEN YOU CLEARLY KNOW THE LIMITS (PAST)
    for (int i = 0; i <= 10; i++) { //for ((initialization);(condition);(increment))
        std::cout << "value of i is " << i << std::endl; //DO THIS UNTIL THE CONDITION BECOMES FALSE
    }
    char stringAB[] = "string";
    int maxElements = sizeof(stringAB) / sizeof(*stringAB); //COUNT HOW MANY INDEX ELEMENTS INSIDE THE ARRAY
    for (int i = 0;i <= maxElements; i++) { //LOOP UNTIL NUMBER OF MAX ELEMENTS HAS BEEN REACHED
        std::cout << "value of string is " << stringAB[i] << std::endl; //DO THIS UNTIL CONDITION IS FALSE
    }
}

//LESSON 2.14 - RANGE BASED FOR LOOP - NOT RECOMMENDABLE, NOT GOOD ANYWAYS
void sampleRangeBasedForLoop() {
    const int arraySize = 5;
    double array[arraySize] = { 1.1,2.2,3.3,4.4,5.5 };
    for (int i = 0; i < arraySize; i++) {
        std::cout << array[i] << std::endl;
    }
    //THE SAMPLE FOR LOOP ABOVE WOULD HAVE THE SAME EQUIVALENCE WITH THE RANGE BASED FOR LOOP BELOW
    //RANGE BASED FOR LOOP IS JUST LIKE A SHORTEN WAY TO DO THE SAME THING ABOVE, USE IT RARELY
    for (double f : array) {
        std::cout << f << std::endl;
    }
}

    //LESSON 2.15 - STRUCTURES
    struct sampleStruct { //THIS IS DEFAULT PUBLIC, THIS IS THE ONLY DIFFERENCE IT HAS COMPARED TO CLASS
        int a;
        int b;
        int c;
    }; //YOU COULD NAME THE OBJECT HERE AT THE LAST BRACKET e.g. '}s1;'
    void main0() {
        sampleStruct s1;
        s1.a = 1; //INITIALIZING A VALUE ON STRUCT sampleStruct
        s1.b = 2; //INITIALIZING A VALUE ON STRUCT sampleStruct
        s1.c = 3; //INITIALIZING A VALUE ON STRUCT sampleStruct
    }

    //LESSON 2.16 - FUNCTIONS
    //FUNCTION IS USED TO DO SOMETHING OR RETURN SOMETHING OR BOTH
    void sampleFunctionWithoutParameters() { //FUNCTION COULD STILL HAVE PARAMETERS EVEN IF IT IS VOID
        std::cout << "this is a sample function" << std::endl;
    }
    double sampleFunctionWithParameters(int& a, double* b) {
        double result;
        result = a + (*b); //INCASE YOU'RE WONDERING WHY B HAS '*', IT'S BECAUSE I DEREFERENCED IT SINCE IT IS A POINTER VARIABLE
        return (result);
    }

    //LESSON 2.17 - CLASSES
    class sampleClass { //CLASS IS DEFAULT PRIVATE
        int a = 1; //THIS IS DEFAULT PRIVATE SINCE THIS IS A CLASS, THIS VARIABLE IS ONLY ACCESSIBLE WITHIN THE CLASS
    public: //ANYTHING BELOW THESE WOULD BE ACCESSIBLE TO EVERYONE
        int incrementOne() {
            int result;
            result = a + 1;
            return (result);
        }
    };

    //LESSON 2.18 - USING STDOUT
    void sampleSTDCout() {
        //cout IS BASICALLY USED TO PRINT MESSAGE, IT IS THE SAME WITH printf AND puts
        std::cout << "print" << std::endl; //THIS IS EQUAL TO BELOW
        puts("print"); //THIS IS EQUAL TO ABOVE
        printf("print"); //THIS IS EQUAL TO ABOVE
    }

    //LESSON 2.19 - CHALLENGE (COUNT ELEMENTS) - HERE IS MY ANSWER
    const char string0123[] = "This is a null-terminated string.";

    void main1() {
        int count = 0;
        for (;string0123[count];count++) { //ANY STRING VALUE IS TRUE BEFORE IT REACHES NULL OPERATOR | 0,NULL,FALSE ARE CONSIDERED FALSE
            ; //DO NOTHING
        }
        printf("The number of characters is: %d\n", count); //PRINT THE AMOUNT OF COUNT

        //NOTE: SERIOUSLY, THIS IS NON-SENSE YOU COULD JUST sizeof(string)/sizeof(string[0]) TO COUNT THE NO. OF ELEMENTS INSIDE THE ARRAY, NO NEED FOR LOOP
    }

    //LESSON 3.2 - 3.3 - INTEGER TYPES AND INTEGER SIZES
    void integerTypes() {
        char a = 1; //-128 to 127 or 0 to 255
        short int b = 12; //THIS COULD ALSO BE WRITTEN AS 'short' 
        int c = 123; //-32,768 to 32,767 or -2,147,483,648 to 2,147,483,647
        long int d = 1234; //-9223372036854775808 to 9223372036854775807
        long long int e = 12345;
        //THEY ALSO HAVE UNSIGNED EQUIVALENT | UNSIGNED MEANS POSITIVE DIGITS ONLY
        unsigned char aa = 1; //0 to 255
        unsigned short int bb = 12; //0 to 65,535
        unsigned int cc = 123; //0 to 65,535 or 0 to 4,294,967,295
        unsigned long int dd = 1234; //0 to 18446744073709551615
        unsigned long long int ee = 12345;
    }

    //LESSON 3.5 - FLOATING POINT TYPES
    void sampleFloatAndDouble() {
        //FLOAT AND DOUBLE JUST HAVE DECIMAL POINTS, THAT'S IT
        double f= 1.1;
        double d= 1.2345;
        long double dd= 1.2345678;
        //THESE HAS NO UNSIGNED DATATYPES
    }

    //LESSON 3.6 - CHARACTERS AND STRINGS
    void sampleCharAndStrings() {
        const char* sample = "this is a string"; //THIS IS THE SAME JUST LIKE THE INITIALIZATION FROM BELOW | DON'T USE THIS, IT IS CONFUSING
        const char* sample1 = "this is a string"; //AGAIN THIS IS THE SAME AS ABOVE AND BELOW BUT THIS ONE WOULD PRODUCE SEGMENTATION FAULT WHEN YOU CHANGE THE VALUE OF THE ARRAY | MUST ALWAYS BE A CONST
        char sample2[] = "this is a string1"; //THIS IS THE SAME JUST LIKE THE INITIALIZATION FROM ABOVE | THIS IS THE BEST CHOICE AMONG THE 3, BUT THE BEST USE IS THE ONE BELOW
        //TO USE STRING 
        //STEP 1: ADD '#include<string>' AT THE HEADER
        //STEP 2: ADD 'using std::string;' AT THE HEADER | THIS IS OPTIONAL BUT USE THIS FOR SIMPLICITY
        string sample3 = "this is again a string"; //USE THIS!! DO NOT USE THE INITIALIZATION FROM ABOVE
    }

    //LESSON 3.7 - CHARACTER ESCAPE SEQUENCES
    void sampleCharacterEscapeSequences() {
        std::cout << "\n , \' , \" " << std::endl; //TO USE ' or " JUST ADD A BACKSLASH '\'
    }

    //LESSON 3.8 - QUALIFIERS
    void sampleQualifiers() {
        static int a = 1; //THE QUALIFIER IS STATIC, IT RETAINS THE VALUE LIKE A GLOBAL VARIABLE EXCEPT ITS LOCAL
        const int b = 1; //THE QUALIFIER IS CONST, THE VALUE CANNOT BE CHANGED ANYMORE
        //THERE ARE A LOT MORE BUT THEY'RE NOT IMPORTANT ANYWAYS, ATLEAST FOR NOW
    }

    //LESSON 3.9 - REFERENCES
    //PRACTICAL USE OF REFERENCE BELOW:
    void sampleReferences(int& a) { //THIS IS LIKE int &a = i | VARIABLE a IS NOW AN ALIAS OF i
        a = 2; //EVERY CHANGES MADE IN VARIABLE a WOULD ALSO OCCUR to VARIABLE i SINCE THEY HAVE THE SAME MEMORY ADDRESS
    }
    //THIS samplePointers HAS THE SAME EQUIVALENCE AS ABOVE
    void samplePointers(int* a) {
        *a = 2; //DEREFERENCING IT
    }

    void main2() {
        int i = 1;
        sampleReferences(i); //THIS IS FOR REFERENCES
        samplePointers(&i); //THIS IS FOR POINTERS
        std::cout << "value i is now: " << i << std::endl; //THIS WOULD PRINT 2 SINCE THE VALUE OF i HAS BEEN CHANGED WHEN THE sampleReferences() HAS BEEN CALLED
    }

    //LESSON 3.10 - STRUCTURED DATA
    struct sampleStructCoder { //EVERYTHING INSIDE ARE DEFAULT PUBLIC UNLESS YOU STATE 'private:'
        int age;
        string name;
        double favNumber;

        sampleStructCoder(int a,string b,double c) {
            age = a;
            name = b;
            favNumber = c;
        }
    };

    void main3() {
        //sampleStructCoder Coder; //THIS COULD BE INITIALIZED LIKE THIS OR BELOW
        sampleStructCoder Coder = { 20,
        "EstarabusbuspapaW",
        3.15 }; //THIS COULD BE INITIALIZED LIKE THIS BUT BELOW IS MUCH BETTER, WITH THIS INITIALIZATION WE'RE CALLING THE PARAMETERIZED CONSTRUCTOR
        Coder.age = 19;
        Coder.name = "Estarabusbuspapao";
        Coder.favNumber = 3.14;
        std::cout << Coder.name << " is " << Coder.age << " years old, His favorite number is " << Coder.favNumber << std::endl;

        sampleStructCoder* pointerCoder = &Coder; //POINTER TO ANOTHER STRUCTURE
        pointerCoder->age = 21; //ADD '->' TO DEREFERENCE STRUCT POINTERS
        pointerCoder->name = "Wapapsubsubaratse"; //ADD '->' TO DEREFERENCE STRUCT POINTERS
        pointerCoder->favNumber = 6.9; //ADD '->' TO DEREFERENCE STRUCT POINTERS
        std::cout << pointerCoder->name << " is " << pointerCoder->age << " years old, His favorite number is " << pointerCoder->favNumber << std::endl;

    }

    //LESSON 3.12 - ENUMERATIONS
    //WITH ENUMS,STRUCT,CLASS,UNIONS - YOU ARE LIKE CREATING YOUR OWN DATATYPE
    enum class sampleEnums { //THIS COULD ONLY CONTAIN INTEGERS
        A, //THE VALUE OF THIS IS AUTOMATICALLY ASSIGNED TO 0 IF NOT SPECIFIED
        B, //THE VALUE WOULD BE INCREMENTED FROM THE PREVIOUS VALUE IF IT IS NOT SPECIFIED | VALUE OF THIS IS 1
        C = 5, //VALUE OF THIS IS 5
        D, //THE VALUE WOULD BE INCREMENTED FROM THE PREVIOUS VALUE IF IT IS NOT SPECIFIED | VALUE OF THIS IS 6
        E //VALUE OF THIS IS 7
    };



    void main4() {
        sampleEnums samEnums = sampleEnums::A; //BEST PRACTICE TO USE ENUM CLASS AT ALL TIMES
    }


    //LESSON 3.13 - UNIONS
    //UNIONS WILL STORE EVERY VARIABLE IN THE SAME MEMORY ADDRESS, MUCH LIKE REFERENCE, EXCEPT YOU COULD USE DIFFERENT DATA TYPES
    union sampleUnions {
        int a; //4 BYTES OR 32 BITS
        char b; //1 BYTE OR 8 BITS
        double c; //SINCE THIS HAS THE HIGHEST AMOUNT OF BYTES, EVERYTHING WOULD BE STORED IN HERE | 8 BYTES
    };

    void main5() {
        sampleUnions unionAddress; //ASSIGNING sampleUnions TO AN OBJECT WHICH IS unionAddress
        unionAddress.a = 4; //VARIABLE b, AND c WOULD CHANGE ITS VALUE TO ALSO 4 SINCE THEY FUNCTION LIKE A REFERENCE, ANY CHANGES MADE ON ANY ONE OF THE UNION CHANGED EVERY OTEHR VARIABLE WITHIN THE UNION
    }

    //LESSON 3.14 - DEFINING WITH TYPEDEF
    //THIS IS TO CREATE YOUR OWN NAME FOR THE EXISTING DATATYPE
    void sampleTypedef() {
        typedef int integerger; //I HAVE RENAMED THE int DATATYPE INTO integerger
        integerger a = 1;
        std::cout << "value of a is " << a << std::endl;
    }

    //LESSON 3.15 - VOID TYPE
    //void SIMPLY MEANS TO RETURN NOTHING, int RETURNS INTEGER VALUE
    void sampleVoid(void) { //YOU COULD INPUT void INSIDE A PARAMETER FUNCTION BUT IT'S NOT IMPORTANT THO, IT'S BETTER TO LEAVE IT BLANK BUT I DIDN'T LEAVED IT BLANK TO ILLUSTRATE
        std::cout << "this is a void function" << std::endl;
        //return 3; //THIS IS ILLEGAL, YOU CAN'T DO THIS
    }

    //LESSON 3.16 - AUTO TYPE
    void sampleAuto() {
        auto a = 1; //SINCE THE VALUE IS 1, THE DATATYPE WOULD AUTOMATICALLY BE AN INTEGER
        auto b = 1.23; //SINCE THE VALUE HAS DECIMAL POINTS, THE DATATYPE WOULD AUTOMATICALLY BE FLOAT OR DOUBLE IDK THIS IS NOT IMPORTANT ANYWAYS
        auto c = true; //SINCE THE VALUE HAS TRUE/FALSE, THE DATATYPE WOULD AUTOMATICALLY BE BOOLEAN
    }

    //LESSON 3.17 - UNAMBIGUOUS NULL POINTER CONSTANT
    void sampleNullPointer() {
        //ASSIGNING POINTER WITH NULL VALUES IS A GOOD PRACTICE WHEN YOU STILL DON'T KNOW WHAT TO ASSIGN INTO IT
        int* pointerSample = NULL; //
    }

    //LESSON 3.18 - (CHALLENGE) - A LIBRARY CARD STRUCTURE
    struct catalog {
        string Title;
        //char Title[]; //YOU CAN'T DO THIS, IF YOU'RE GONNA ONLY INITIALIZE IWTHOUT ANY VALUES YOU MUST SET A SIZE OF THE ARRAY
        string Author;
        string Publisher;
        string Subject;
        int ISBN{}; //IF NO CONSTRUCTOR IS GOING TO INITIALIZE IT, ALWAYS ADD '{}'
        double DeweyDecimal{};
        string YearPublished;
        string YearAcquired;
        int QtyInStock{};

    }catalogCard;

    void main6() {
        catalogCard.Title = "C++ The Book";
        catalogCard.Author = "Joe Biden";
        catalogCard.Publisher = "Donald Trump";
        catalogCard.Subject = "C++";
        catalogCard.ISBN = 123456;
        catalogCard.DeweyDecimal = 123.456;
        catalogCard.YearPublished = "January 05 1927";
        catalogCard.YearAcquired = "March 09 1942";
        catalogCard.QtyInStock = 63;
        std::cout << "The Title of the book is " << catalogCard.Title << std::endl;
        std::cout << "The Author of the book is " << catalogCard.Author << std::endl;
        //TINATAMAD NAKONG I-TYPE LAHAT
    }

    //LESSON 4.1 - 4.3 - COMMON OPERATORS | COMPOUND ASSIGNMENT OPERATORS | INCREMENT AND DECREMENT OPERATORS
    void sampleCommonOperators() {
        int a = 12; //THIS ONE USES COPY OPERATOR '=' | THIS IS USE TO ASSIGN VALUES
        int b = 24;
        int c = a + b; //THIS ONE USES ADDITION OPERATOR '+' | THIS IS USED FOR ADDITION
        // - SUBRATRACTION, * MULTIPLICATION, / DIVISION, % REMAINDER
    }

    void sampleCompoundAssignmentOperators() {
        int a = 1;
        int b = 2;
        b += a; //THIS MEANS b = b + a; | THE ANSWER WOULD BE b = 3;
        // YOU COULD ALSO TRY DIFFERENT COMMON OPERATORS e.g. -= , *= , /=, %=
    }

    void sampleIncrementAndDecrementOperators() {
        int a = 1;
        int b = 2;
        // a++ | DO NOTHING YET, BUT ADD + 1 AT NEXT, ++a | ADD THE + 1 NOW
        std::cout << "value of a is " << a++ << std::endl; //THIS WOULD PRINT 1 | THIS MEANS PRINT FIRST BEFORE ADDING 1
        std::cout << "value of a is " << a++ << std::endl; //THIS WOULD PRINT 2 SINCE 1 WAS ALREADY ADDED FROM THE PREVIOUS STATEMENT
        std::cout << "value of b is " << ++b << std::endl; //THIS WOULD PRINT 3 | THIS MEANS PRETTY MUCH THE SAME THINGS EXCEPT IT ADDS 1 FIRST BEFORE IT PRINTS
    }

    //LESSON 4.4 - COMPARISON (RELATIONAL) OPERATORS
    void sampleComparisonOperators() {
        int a = 1;
        int b = 2;
        double c = 1234.56;
        char d = 'a';
        if (a > b) { //THIS IS '>' GREATER THAN OPERATOR | IF a IS GREATER THAN b 
            d = 'a';                                    //THEN EXECUTE THIS LINE
        }
        else if (a < b) { //THIS IS '<' LESS THAN OPERATOR
            d = 'b';
        }
        else if (a == b) { //THIS IS '==' EQUAL TO OPERATOR | IF a IS EQUAL TO b THEN EXECUTE BELOW
            d = 'c';
        }
        else if (a != b) { //THIS IS '!=' NOT EQUAL TO OPERATOR | IF a IS NOT EQUAL TO b THEN EXECUTE BELOW
            d = 'd';
        }
        //YOU COULD ALSO DO <= | LESS THAN OR EQUAL TO, >= | GREATER THAN OR EQUAL TO, etc.
    }

    //LESSON 4.5 - LOGICAL OPERATORS
    void sampleLogicalOperators() {
        int a = 1; //THIS IS EQUALS TO TRUE SINCE IT IS NON ZERO
        bool b = false; //THIS IS OBVIOUSLY A FALSE
        int c = 1;

        if (a && b) { //IF a AND b IS TRUE EXECUTE BELOW | a IS TRUE SINCE IT HAS VALUE, b IS FALSE SO THIS WILL NOT EXECUTE
            c = 2;
        }
        else if (a || b) { //IF a OR b IS TRUE THEN EXECUTE BELOW | THIS WILL EXECUTE SINCE ONE OF THEM IS TRUE
            c = 3;
        }
        else if (a && !b) { //IF a AND not b (OPPOSITE OF B) THEN EXECUTE BELOW | IF ABOVE WEREN'T TRUE THEN THIS WOULD EXECUTE SINCE BOTH STATEMENTS ARE TRUE
            c = 4;
        }
    }

    //LESSON 4.6 - BITWISE OPERATORS 
    void sampleBitwise() {
        unsigned int a = 10; //BINARY VALUE: 01010
        unsigned int b = 20; //BINARY VALUE: 10100
        unsigned long c = a | b; //GET THE BINARY VALUE OF a AND b THEN  | SINCE THIS IS AN OR '|', ITS BINARY VALUE WOULD BE: 11110, WHICH EQUATES TO 30
        //&(AND) - BOTH VALUES HAS TO BE 1 TO GET OUTPUT 1 IN BINARY | e.g. c = a & b | BINARY VALUE IS 00000 WHICH IS 0
        //^(XOR) - ONLY ONE OF THE OUTPUT MUST BE 1 TO GET OUTPUT OF 1 IN BINARY | e.g. c = a ^ b | BINARY VALUE IS 11110 WHICH WOULD EQUATE TO 30
        //!(NOT) - THIS IS ONLY APPLICABLE TO ONE OF THE VALUE, JUST FLIP THE NUMBER TO OPPOSITE, IF 0 THEN MAKE IT 1, VICE VERSA | e.g. '!a & b' | BINARY VALUE WOULD BE 11110 WHICH WOULD EQUATE TO 30

        //RIGHT AND LEFT SHIFT OPERATOR
        int x = 5; //BINARY: 00000101
        int y = 100; //BINARY: 01100100
        x = x << 1; //SHIFT THE VALUES TO THE LEFT WHICH WOULD RESULT BINARY INTO : 00001010 WHICH IS EQUAL TO 10
        x = x << 1; //x HAS BEEN SHIFTED AGAIN WHICH WOULD RESULT BINARY INTO: 00010100 WHICH IS EQUAL TO 20 *DO YOU SEE THE PATTERN?*
        y = y >> 2; //BINARY CODE WOULD SHIFT TO RIGHT: 00011001 WHICH IS EQUAL TO = 25 *AGAIN, DO YOU SEE THE PATTERN?*
    }

    //LESSON 4.7 - TERNARY CONDITIONAL OPERATOR
    //DON'T USE THIS IT'S UNREADABLE FOR SOME, JUST USE IF STATEMENTS
    void sampleTernaryConditional() {
        int a = 1;
        int b = 2;
        int c, d;
        //IF A > B THEN C = 1, ELSE C = 2
        c = a > b ? 1 : 2;
        //HOW TO ADD ELSE IF:
        //IF A > B THEN D = 1, ELSE IF A == B THEN D = 2, ELSE D = 3
        d = a > b ? 1 : (a == b ? 2 : 3);
    }

    //LESSON 4.9 - TYPECASTING
    void sampleTypeCasting() {
        double abc = 1.234;
        int b;
        b = (int)abc; //a IS A DOUBLE BUT WE'RE EXPLICITLY CONVERTING IT INTO INT WITH TYPECASTING
    }

    //LESSON 4.10 - USING SIZEOF
    void sampleSizeOf() {
        //THIS IS TO GET THE NUMBER OF BYTES A CERTAIN DATATYPE HOLDS
        int a[] = { 1,2,3,4,5,6 };
        double b = 1234.545343;
        int c = sizeof(a) / sizeof(a[0]); //WE ARE GETTING THE OVERALL BYTES OF THE ARRAY THEN DIVIDING IT TO 1 OF ITS DATATYPE BYTE VALUE TO GET THE TOTAL AMOUNT OF ELEMENTS INSIDE THE INDEX
        int d = sizeof(b); //
        printf("the byte size of variable b is %d", d);
    }

    //LESSON 4.11 - USING TYPEID
    //USED TO GET THE DATATYPE OF A VARIABLE | USED FOR COMPARING TWO VARIABLES IF THEY HAD THE SAME DATATYPE
    //STEP 1: ADD #include<typeinfo> AT THE HEADER
    void sampleTypeID() {
        int a, b;

        if (typeid(a).name() == typeid(b).name()) { //CHECK IF THEY HAVE THE SAME DATATYPE
            std::cout << "THIS HAS THE SAME DATATYPE" << std::endl;
        }
        else std::cout << "THIS DOESN'T HAVE THE SAME DATATYPE" << std::endl; //NO BRACKETS IS VALID FOR ONE LINER, BUT I DON'T RECOMMEND USING IT
    }

    //LESSON 4.13 - CHALLENGE (PRIME NUMBERS)

    //LESSON 5.2 - 5.3 (PASSING VALUE TO A FUNCTION)
    void printValue(const int a) { //I MADE IT CONST SINCE IT ONLY PRINTS VALUE AND IT MUST NOT BE CHANGED
        std::cout << "the value is " << a << std::endl;
    }

    void main7() {
        int a = 5;
        printValue(a); //I PASSED THE VALUE OF A INSIDE THE FUNCTION
    }

    //LESSON 5.4 - USING AUTOMATIC AND STATIC VARIABLES
    //auto IS THE DEFAULT FOR EVERY DATATYPES, IT'S ALREADY DEPRECATED AND NO POINT IN USING THEM ANYWAYS
    void sampleFunction() {
        for (int i = 0; i < 10; i++) {
            static int a = 1; //IT'S LIKE PUTTING THIS OUTSIDE THE SCOPE AS A GLOBAL VARIABLE, IT ONLY GETS INITIALIZED ONCE
            //int a = 1; //IF IT'S INITIALIZED LIKE THIS THEN THE a VARIABLE GETS INITIALIZED TO 1 AT EVERY REPEAT OF THE LOOP, THUS PRINT 'The value of a is 1' 10 TIMES
            printf("value of a is %d", a++); //THIS PRINTS FROM 1 - 10
        }
    }

    //LESSON 5.5 - RETURNING VALUES FROM A FUNCTION
    int sampleReturnFunction(const int a, const int b) { //THIS FUNCTION RETURNS AN INTEGER
        int c = a + b;
        return (c); //WHEN YOU CALL THIS FUNCTION IT WOULD RETURN THE RESULT OF ADDING INPUT ARGUMENTS
    }

    //LESSON 5.6 - USING FUNCTION POINTERS
    void main8() {
        int (*pFunction)(int, int) = &sampleReturnFunction; //'&' IS OPTIONAL
        //CALLING THE FUNCTION
        (*pFunction)(12, 5); //'*' IS OPTIONAL
    }

    //LESSON 5.7 - FUNCTION OVERLOADING
    int operation(int a, int b, const char* operation) {
        int c = 0;
        if (operation == "addition") {
            c = a + b;
        }
        return (c);
    }

    int operation(int a, int b, int c, const char* operation) {
        int d=0;
        if (operation == "addition") {
            d = a + b + c;
        }
        return (d);
    }

    int operation(int a, int b, int c, int d, const char* operation) {
        int e=0;
        if (operation == "addition") {
            e = a + b + c + d;
        }
        return (e);
    }

    //LESSON 5.8 - VARIADIC ARGUMENTS 
    //STEP 1: ADD #include <stdarg.h>
    #include <stdarg.h>

    int sampleVariadicFunction(const int count, ...) {
        int total = 1;
        va_list vf; //THIS IS TO CREATE AN OBJECT FOR VA
        va_start(vf, count); //THIS IS A REQUIREMENT, va_start(VA_NAME,HOW_MANY_INPUTS)

        for (int i = 0; i < count; ++i) {
            total += va_arg(vf, int); //TO INITIALIZE THE DATATYPE OF VA
        }
        va_end(vf); //THIS IS ALSO A REQUIREMENT
        return (total);
    }

    void main9() {
        int returnThisOne;
        returnThisOne = sampleVariadicFunction(3, 1, 2, 3);
        std::cout << returnThisOne << std::endl;

    }

    //LESSON 6.2 && 6.4 - DEFINING A CLASS && FUNCTION MEMBERS
    class sampleClass1 {
        //THESE ARE DATA MEMBERS
        int a = 0; //THIS WOULD BE PRIVATE UNLESS YOU SPECIFY THE 'public:' AT THE TOP

    public: //EVERYTHING BELOW WOULD BE PUBLIC

    //THESE ARE FUNCTION MEMBERS
    //IT IS BEST PRACTICE TO INITIALIZE FUNCTION OUTSIDE THE CLASS
        void setValue(int value) {
            a = value;
        }
        void getValue(); //DECLARATION OF FUNCTION THEN INITIALIZING OUTSIDE THE CLASS
    };
    //THIS IS THE BEST PRACTICE FOR FUNCTIONS OF A CLASS | GETTING INITIALIZED OUTSIDE THE CLASS
    void sampleClass1::getValue() { //INITIALIZING FUNCTION OUTSIDE THE CLASS ALWAYS REMEMBER TO USE '::'
        std::cout << "The value is " << a << std::endl;
    }

    void main10() {
        sampleClass1 classYeah; //DECLARE AN OBJECT FOR THIS CLASS
        int a = 10;
        classYeah.setValue(10); //CALL THE OBJECT FIRST BEFORE THE METHOD JUST LIKE THIS
        classYeah.getValue();
    }

    //LESSON 6.3 - DATA MEMBERS
    class sampleDataMembers {
    public:
        int a;
        int b;
        int c;
    };

    void main11() {
        sampleDataMembers dataMembers = { 1,2,3 }; //VALUES OF DATA MEMBERS COULD BE INITIALIZED LIKE THIS BUT IF YOU'RE GONNA DO THIS JUST USE STRUCT INSTEAD OF CLASS
        dataMembers.a = 2; //VALUES OF DATA MEMBERS COULD ALSO BE INITIALIZED LIKE THIS
    }

    //LESSON 6.5 - CONSTRUCTORS AND DESTRUCTORS
    class sampleConstructor {
        int x;

    public:
        //WE COULD DO OVERLOAD CONSTRUCTOR JUST LIKE IN FUNCTIONS | THEY ONLY DIFFERENTIATE IN NO. OF ARGUMENTS AND DATATYPE OF ARGUMENTS JUST LIKE IN FUNCTION
        sampleConstructor() {  //THIS IS THE DEFAULT CONSTRUCTOR, THE VALUES WILL AUTOMATICALLY BE 0 IF NOT EXPLICITLY INITIALIZED, THIS IS AUTOMATICALLY CREATED UNLESS OTHER CONSTRUCTOR WAS CREATED
            x = 0;
        }
        //sampleConstructor () { } //IT COULD ALSO LOOK LIKE THIS
        //IF YOU CREATED A PARAMETERIZED CONSTRUCTOR, DEFAULT CONSTRUCTOR WOULD NOT BE AUTOMATICALLY CREATED ANYMORE
        sampleConstructor(int y) { //THIS IS A PARAMETERIZED CONSTRUCTOR
            x = y;
        }
        //COPY CONSTRUCTOR ARE PASSED BY REFERENCE AS TO AVOID INFINITE RECURSION BECAUSE IF IT IS PASSED BY VALUE IT WOULD LOOK LIKE THIS: sampleConstructor sampleCopy = obj1, WITH THIS SYNTAX WE WOULD CALL THE COPY CONSTRUCTOR THUS START OF RECURSION
        sampleConstructor(const sampleConstructor& sampleCopy) { //THIS IS COPY CONSTRUCTOR, THIS IS AUTOMATICALLY CREATED UNLESS EXPLICITLY STATED | PURPOSE OF COPY CONSTRUCTOR IS TO COPY THE VALUE OF ANOTHER OBJECT
            x = sampleCopy.x;
        }
        void showData() {
            std::cout << "value of x is " << x << std::endl;
        }
        //IT IS NOT A GOOD PRACTICE TO CALL DESTRUCTOR EXPLICITLY
        // ~sampleConstructor () { } ; //THIS IS DESTRUCTOR, IT IS AUTOMATICALLY CREATED BY THE COMPILER, IT MUST CONTAIN NO ARGUMENT, ONLY ONE DESTRUCTOR IS REQUIRED.
        ~sampleConstructor() {
            std::cout << "yes, sample constructor could also do this!" << std::endl;
        }
    };

    void main12() {
        //EACH OBJECT CAN ONLY USE 1 TYPE OF CONSTRUCTOR
        sampleConstructor obj1(50); //HERE WE USES PARAMETERIZED CONSTRUCTOR
        sampleConstructor obj4 = sampleConstructor(50); //OBJECT CAN ALSO BE INITIALIZED LIKE THIS

        sampleConstructor obj2(obj1); //HERE WE USES COPY CONSTRUCTOR, WE COPY THE VALUE OF obj1 INTO obj2
        sampleConstructor obj3 = obj1; //COPY CONSTRUCTOR CAN ALSO BE INITIALIZED LIKE THIS
        obj1.showData();
        obj2.showData();
        obj3.showData();
    }

    //LESSON 6.6 - OVERLOADING OPERATORS (UNARY OPERATOR)
    //THIS OPERATOR OVERLOADING IS SPECIFICALLY CATERED FOR CLASS OBJECTS, WITH int c = a + b, WE'VE GOT NO PROBLEM BUT WHEN YOU DO THIS IN AN OBJECT obj3 = obj1 + obj2, THAT'S WHERE WE'LL USE OPERATOR OVERLOAD SINCE OBJECTS IS DIFF FROM VARIABLES
    struct sampleOverloadingOperatorUnary {
        int x{};
        sampleOverloadingOperatorUnary() { }
        sampleOverloadingOperatorUnary(int x) {
            this->x = x;
        }
        void operator++ () { //OPERATOR OVERLOADING IS JUST LIKE A FUNCTION
            x = x + 1;
        }
    };

    void main13() {
        sampleOverloadingOperatorUnary obj1(50);
        ++obj1;
        std::cout << obj1.x << std::endl; //THIS WOULD RESULT TO 51 SINCE WE DEFINE THE '++' OPERATOR TO ADD +1 ON THE SELECTED DATA MEMBER
    }

    //LESSON 6.6 - OVERLOADING OPERATORS (BINARY OPERATOR)
    class sampleOverloadingOperator {
        int x{};
        int y{};
    public:
        sampleOverloadingOperator() { } //OPERATOR FUNCTION CREATED WILL USE THIS CONSTRUCTOR
        sampleOverloadingOperator(int x, int y) {
            this->x = x;
            this->y = y;
        }
        //OVERLOADING OPERATOR IS LIKE GIVING ANOTHER FUNCTION TO AN OPERATOR, YOU PROVIDE ANOTHER MEANING OR ANOTHER THING TO WHAT  SHOULD THE OPERATOR DO
        //THIS IS THE TOP OF THE ABOVE I MENTIONED -------------------------------------
        sampleOverloadingOperator operator+ (sampleOverloadingOperator obj2) { //CONTENT OF ARGUMENT IS DEFINING AN OBJECT FOR ANOTHER
            sampleOverloadingOperator obj1; //DEFINING AN OBJECT FOR THIS CLASS
        //THE ABOVE BASICALLY MEANS obj1 + obj2 -----------------------------------
            obj1.x = this->x + obj2.x; //HERE WE ARE SAYING TO ADD THE VALUES PROVIDED IN obj1 AND obj2
            obj1.y = this->y + obj2.y; //HERE WE ARE SAYING TO ADD THE VALUES PROVIDED IN obj1 AND obj2
            return (obj1); //IT ALSO HAS RETURN TYPE JUST LIKE A FUNCTION
        }

        void showValues() const {
            std::cout << "value of x is " << x << std::endl << "value of y is " << y << std::endl;
        }
    };

    void main14() {
        sampleOverloadingOperator obj1(20, 40);
        sampleOverloadingOperator obj2 = sampleOverloadingOperator(30, 60);
        sampleOverloadingOperator obj3 = obj1 + obj2; //CAN BE TYPED LIKE THIS obj1.operator+(obj2)
        obj3.showValues();
    }


    //LESSON 7.2 - TEMPLATE FUNCTIONS
    //THIS IS FOR GENERIC PROGRAMMING, WHEN YOU'RE UNCERTAIN WHAT DATATYPE TO USE
    template <typename T, typename T1> //ALWAYS ADD THIS BEFORE DEFINING FUNCTION TO USE TEMPLATE
    T sampleTemplateFunction(T a, T1 b) {
        return (a + b);
    }

    template <typename T>
    T sampleTemplateFunction1(T a) {
        return a;
    }

    void main15() {
        double a = 5.1;
        int b = 6;
        std::cout << sampleTemplateFunction<double, int>(a, b) << std::endl; //ADDING '<datatype>' IS OPTIONAL, BUT IT IS PREFFERED TO IDENTIFY THAT YOU'RE USING A TEMPLATE FUNCTION
        // sampleTemplateFunction<int>(5,b); //ARGUMENTS MUST HAVE THE SAME DATATYPE SINCE IT IS DEFINED AS 'T1' IN THE FUNCTION, WE COULD NOT LEAVE '< >' BLANK HERE SINCE THE RETURN TYPE MUST BE DECLARED
        std::cout << sampleTemplateFunction1(a); //SINCE a AND RETURN TYPE OF THE FUNCTION IS THE SAME WHICH IS 'T', WE COULD LEAVE THE '< >' ANGLE BRACKET BLANKS SINCE THE COMPILER CAN DEDUCE THAT IT IS A FLOAT ACCORDING TO THE ARGUMENT
    }

    //LESSON 7.3 - TEMPLATE CLASSES
    //THIS IS SYNTACTICALLY THE SAME WITH CLASSES
    template <typename TN>
    class sampleTemplateClass {
        TN a, b;

    public:
        sampleTemplateClass(int c, int d) {
            a = c;
            b = d;
        }
        //NO NEED TO DECLARE THE template <typename variable> HERE SINCE WE WILL BE DEFINING IT INSIDE THIS CLASS
        void sampleTemplateFunctionForThisClass() {
            std::cout << a << std::endl;
        }
        void sampleTemplateFunctionOutsideTheClass();
    };

    template <typename TN> //WE WILL BE USING THE SAME TEMPLATE VARIABLE TO DEFINE THIS FUNCTION - USING THE SAME TEMPLATE AS THE CLASS TEMPLATE IS OPTIONAL
    void sampleTemplateClass<TN>::sampleTemplateFunctionOutsideTheClass() { //THIS IS HOW YOU DECLARE TEMPLATE OUTSIDE THE CLASS: TAKE NOTE OF THE SYNTAX
        std::cout << b << std::endl;
    }

    void main16() {
        int y = 10;
        int z = 5;
        sampleTemplateClass<int> obj1(y, z); //' < > ' ANGLE BRACKETS ARE REQUIRED WHEN DEFINING TEMPLATE CLASSES UNLIKE TEMPLATE FUNCTIONS
        obj1.sampleTemplateFunctionOutsideTheClass();
    }


    //STUDY WHERE POINTER IS REALLY LOCATED, STACK OR HEAP?
    //*ANSWER: IT IS LOCATED ON STACK BUT YOU COULD CREATE A POINTER THAT POINTS TO THE HEAP

    //STUDY DESTRUCTOR FOR POINTERS 

    //LEARN HOW TO CREATE SOMETHING THAT YOU COULD PASS TO AN OBJECT

    //LEARN HOW TO USE GOODBOLT.ORG OR COMPILER EXPLORER

    //LESSON A.1 - DIFF BETWEEN CONST CHAR* AND CHAR * CONST
    void sampleDifference() {
        char a = 'a';
        char b = 'b';
        char e = 'e';
        const char* c = &a; //THIS IS POINTING TO ADDRESS OF a
        //*c = 'c'; | THIS IS NOT ALLOWED 
        c = &e; //CHANGING ADDRESS ALLOWED, ONLY DEREFERENCING ISN'T SINCE IT IS CONST

        char* const d = &b; //THIS IS POINTING TO ADDRESS OF b
        //d = &e; | THIS IS NOT ALLOWED
            *d = 'd'; //DEREFERENCING IS ALLOWED, ONLY CHANGING ADDRESS ISN'T ALLOWED
    }

    //LESSON A.2 - USE OF 'this->'
    class sampleThis {
        int x;
    public:
        sampleThis(int x) {
            this->x = x; //THIS MEANS THAT this class' x is equals to the parameter x | THIS IS ONLY USED WHEN CLASS AND INPUT PARAMETER HAS THE SAME NAME
            //x = x; //IT WOULDNT MAKE ANY SENSE IF THIS WAS DONE LIKE THIS, RIGHT?
        }
        void showThis() {
            std::cout << x << std::endl;
        }
    };

    void mainA1() {
        sampleThis obj1 = sampleThis(5);
        obj1.showThis();
    }

    //LESSON A.3 - CREATING A POINTER TO THE HEAP
    void mainA2() {
        int* pVariable = new int; //SYNTAX FOR CREATING A NEW MEMORY SPACE FOR THIS POINTER VARIABLE AT THE HEAP
        *pVariable = 20; //DEREFERENCING
        std::cout << *pVariable << std::endl;
        delete pVariable; //MEMORY SPACES PLACED AT THE HEAP IS NOT AUTOMATICALLY REMOVED, WE NEED TO REMOVE IT EXPLICITLY TO AVOID MEMORY LEAK

        //SYNTAX FOR ARRAYS
        int* pArray = new int[10]; //SYNTAX
        for (int i = 0; i < 10; i++) {
            pArray[i] = i;
            }
        delete[] pArray; //DON'T FORGET TO DELETE TO AVOID MEMORY LEAK
    }

    //LESSON A.4 - FIXING CONFUSION ABOUT ARRAYS AND POINTERS
    void passArray(int x[], int y) { //WHEN ARRAYS ARE GETTING PASSED THE PARAMETER ON FUNCTION IT BECOMES A POINTER, int x[] IS NOW EQUIVALENT TO int* x
        //THE ARGUMENT ABOVE IS EQUAL TO int* x = Array123 OR int* x = &Array123[0]
        int z = sizeof(x); //ALTHOUGH THERE IS AN EXCEPTION ON SIZEOF FOR ARRAY, THIS WOULD PRINT 8 NO MATTER WHAT SINCE THE FIXED SIZE OF POINTER IN BYTES IS 8, ALWAYS REMEMBER THAT WHEN ARRAY AS PASSED IN A FUNCTION IT IS INITIALIZED AS A POINTER
        std::cout << "pass array sizeof value is " << z << std::endl;
        for (int i = 0; i < y; i++) {
            std::cout << x[i] << std::endl;
        }
    }

    void mainA3() {
        const char* pA = "abc"; //STRING "abc" IS FIRST CREATED IN A READ ONLY MEMORY, THEN THE pA HOLDS THE MEMORY ADDRESS OF THAT STRING FROM READ ONLY 
        //*pA[0] = 'd'; //THIS IS NOT ALLOWED ALL STRING LITERALS ARE READ ONLY
        pA = "acd"; //WITH THIS WE ARE NOT MODIFYING ANYTHING WITH THE "abc", THE POINTER JUST NOW POINTS TO ANOTHER NEW STRING LITERAL "acd"
        char pB[] = "abc"; //STRING LITERAL "abc" IS FIRST CREATED IN A READ ONLY MEMORY THEN THE ARRAY CREATES A COPY AND STORE EACH CHARACTER INSIDE THE ARRAY + 1 FOR THE NULL TERMINATOR
        *pB = 'c'; //WE COULD NOW MODIFY SINCE THE array pB LITERALLY HOLDS EACH CHARACTER

        int Array123[] = { 1,2,3,4,5 };
        //Array123 IS EQUAL TO &Array[0] | Array123 + 1 IS EQUAL TO &Array[1] - MEMORY ADDRESS, REMEMBER: ONLY POINTERS CAN HOLD MEMORY ADDRESS
        //*Array123 IS EQUAL TO Array[0] | *(Array123 + 1) IS EQUAL TO Array[1] - VALUE
        //WE CANNOT PASS THE WHOLE ARRAY, BUT WE COULD ALWAYS PASS THE FIRST MEMORY ADDRESS OF THE ELEMENTS

        sizeof(Array123); //THERE IS AN EXCEPTION WHERE Array123 ISN'T CONSIDERED AS THE FIRST INDEX MEMORY ADDRESS, WITH SIZEOF OPERATOR IT ACTUALLY CALCUALTES THE WHOLE SIZE OF THE ARRAY 
        //ABOVE IS EQUIVALENT TO LIKE SAYING sizeof(Array123[0]) + sizeof(Array123[1]) + sizeof(Array123[2]) 

        int a = 1;
        int b = 2;
        int* c = &a;
        c[1]; //WE COULD ALSO DO THIS EVEN THO IT IS NOT AN ARRAY, THE '[]' IS JUST USED TO LOOK AT THE NEXT OR CURRENT INDEX VALUE, WE COULD ALWAYS USE '[]' WHEN WORKING WITH POINTERS AND ARRAYS

        int size = sizeof(Array123) / sizeof(Array123[0]);
        passArray(Array123, size); //WE ARE ONLY PASSING THE FIRST INDEX ADDRESS, WE COULD ALSO PASS &Array123[0] BUT THAT WOULD BE WEIRD
    }

    //LESSON A.5 - ARROW OPERATOR
    //THIS IS USED FOR DEREFERENCING OBJECTS
    class sampleArrowUse {
    public:
        int a;
        int b;
        sampleArrowUse(int a, int b) {
            this->a = a;
            this->b = b;
        }
    };

    void mainA4() {
        sampleArrowUse obj1(10, 20);
        sampleArrowUse* obj2 = &obj1;
        //NOW HERE COMES THE PRACTICAL USE OF ARROW OPERATOR
        std::cout << obj2->a << std::endl; //THIS IS EQUIVALENT TO BELOW
        std::cout << (*obj2).b << std::endl;
    }

    //LESSON A.6 - INHERITANCE
    class sampleBaseClass {
        int a = 5;

    public:
    void printData() {
        std::cout << a << std::endl;
    }
};

class sampleDeriveClass1 : public sampleBaseClass {

};

class sampleDeriveClass2 : private sampleBaseClass {
    void setDataDerived() {
        void setData(); //BASE CLASS HAS THIS FUNCTION AS PUBLIC, SO THIS COULD STILL BE USED HERE
    }
};


class sampleDeriveClass3 : protected sampleBaseClass {

};

void mainA5() {
    sampleDeriveClass1 objDer1; //BY USING THIS, WE SIMPLY INHERITED EVERYTHING WITHOUT CHANGING ACCESS SPECIFIER OF THE DATA MEMBERS AND MEMBER FUNCTIONS IN BASE CLASS
    sampleDeriveClass2 objDer2; //PUBLIC AND PROTECTED SPECIFIER OF DATA MEMBERS AND MEMBER FUNCTION OF BASE CLASS IS CONVERTED INTO PRIVATE IN THE DERIVED CLASS
    sampleDeriveClass3 objDer3; //PUBLIC AND PROTECTED SPECIFIER OF DATA MEMBERS AND MEMBER FUNCTION OF BASE CLASS IS CONVERTED INTO PROTECTED IN THE DERIVED CLASS

}

//LESSON A.7 - DEFINING METHODS AND CONSTRUCTOR OUTSIDE THE CLASS
class sampleDefineOutside {
    int a;

public:

    sampleDefineOutside(int b); //DECLARATION OF CONSTRUCTOR

    void sampleMethodPrint(); //DECLARATION OF METHOD

};

sampleDefineOutside::sampleDefineOutside(int b) {
    a = b;
}

void sampleDefineOutside::sampleMethodPrint() {
    std::cout << "value of a is " << a << std::endl;
    return; //VERY OPTIONAL, DEFINITELY NOT REQUIRED SINCE THIS IS A VOID
}

void mainA6() {
    sampleDefineOutside obj1(100);
    obj1.sampleMethodPrint();
}

//LESSON A.8 - MACROS (IF,ENDIF,FUNCTION)
//THIS IS PREPROCESSED, IT IS BEING READ BEFORE COMPILER DOES IT JOB
//#include <AdsProp.h> //IT LITERALLY JUST COPIES THE CONTENT OF THIS HEADER FILE AND PASTE IT IN THIS SOURCE CODE
#define a 10 //THIS IS EQUAL TO a = 10,
//#define INTEGER int //IT COULD ALSO BE USED LIKE A TYPEDEF
#define func(x,y) ((x > y) ? x : y)  //IT COULD ALSO ACT LIKE A FUNCTION
#define sampleIfDef


void mainA7() {
    int b = 20;
    std::cout << func(a, b) << std::endl; //WE'RE APPLYING THE MACRO FUNCTION HERE

#ifdef sampleIfDef  //IF DEFINED THEN DO THIS, IT IS DEFINED LOOK AT ABOVE
    std::cout << "ifdef is defined" << std::endl;
#else
    std::cout << "ifdef isnt defined" << std::endl;
#endif //END

#ifndef sampleIfNDef//IF NOT DEFINED THEN DO THIS
    std::cout << "sample ifndef isn\'nt working" << std::endl;
#endif // END

}

//LESSON - DATA STRUCTURE 
//creator of c++ said to avoid linked list, just use vector https://www.youtube.com/watch?v=YQs6IC-vgmo, vector is always better than the list
//CHECK MO NALANG SA GOOGLE ANONG BEST CONTAINER ANG MAGANDANG GAMITIN AT SPECIFIC SITUATIONS
//STUDY ONLY THE ABSTRACT CONCEPT, WHEN YOU ARE ABOUT TO USE THEM JUST USE STL IMPLEMENTATION, I USED STL FOR VECTOR, DOUBLY LINKED LIST, AND QUEUE(DEQUEUE) TO LEARN HOW TO USE STL'S IMPLEMENTATION

//LESSON D1 | SINGLY LINKED LIST
struct Node {
    int data;
    Node* next;
};

//CREATE A GLOBAL VARIABLE THAT POINTS TO THE HEAD
//Node* ptrToHead = NULL;

void push(const int x, Node** head) { //SINCE NODE IS POINTER TO ANOTHER POINTER THE SYNTAX IS TO ADD ANOTHER '*'
    Node* newNode = new Node; //CREATE A NEW HEAD NODE
    newNode->data = x;
    newNode->next = (*head); //1 * IN A 2 ** MEANS DEREFERENCING head,WHICH HOLDS THE MEMORY ADDRESS OF THE HEAP IN WHICH THE node1 POINTS TO | THIS IS NOW POINTING TO PREVIOUS HEAD NODE
    (*head) = newNode; //DEREFERENCING THE VALUES WITHIN *head TO STORE THE MEMORY ADDRESS THAT THE newNode HOLDS
}

void append(const int x, Node** head) {
    Node* newNode = new Node; //CREATING NEW NODE FOR A PLACE TO ADD NEW DATA
    Node* last = *head;

    newNode->data = x;
    newNode->next = NULL; //SETTING NULL SINCE THIS WOULD BE THE NEW LAST NODE

    /* 4. if list is empty, new node becomes first node */
    if (*head == NULL)
    {
        *head = newNode;
        return;
    }

    /* 5. Else traverse till the last node */
    while (last->next != NULL)
        last = last->next;

    /* 6. Change the next of last node */
    last->next = newNode;
    return;
}

//insert new node after a given node
void insertAfter(int node_data, Node* prev_node)
{
    /*1. check if the given prev_node is NULL */
    if (prev_node == NULL)
    {
        std::cout << "the given previous node is required,cannot be NULL"; return;
    }

    /* 2. create and allocate new node */
    Node* newNode = new Node;

    /* 3. assign data to the node */
    newNode->data = node_data;

    /* 4. Make next of new node as next of prev_node */
    newNode->next = prev_node->next;

    /* 5. move the next of prev_node as new_node */
    prev_node->next = newNode;
}

// display linked list contents
void displayList(struct Node* node)
{
    //traverse the list to display each node
    while (node != NULL)
    {
        std::cout << node->data << "-->";
        node = node->next;
    }

    if (node == NULL)
        std::cout << "null";
}

void mainD1() {

    Node* head = NULL;
    Node* second = NULL;
    Node* third = NULL;

    //ALLOCATE THESE LINKED LIST IN THE HEAP
    head = new Node;
    second = new Node;
    third = new Node;

    //ASSIGNING VALUES
    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    push(10, &head); //INSERT AT BEGINNING
    append(40, &third); //INSERT AT END
    insertAfter(100, head->next);
    push(20, &head);
    displayList(head);

}

//LESSON D2 | DOUBLY LINKED LIST (USING STL TEMPLATE: LIST)
//TO SEE ALL METHODS SUCH AS REVERSE,SORT,INSERT,EMPTY, CHECK THE CPP DOCUMENTATION

#include <list>

using std::list;

void printList(list<int> passList) {
    list<int> ::iterator it; //THIS IS SYNTAX FOR ITERATOR, IT ACTS LIKE A POINTER
    std::cout << "content of list are { ";
    for (it = passList.begin();it != passList.end(); it++) {
        std::cout << *it << " "; //ITERATOR NEEDS TO BE DEREFERENCED JUST LIKE A POINTER
    }
    std::cout << "}\n\n";
}

void mainD2() {
    list<int> objList1;

    objList1.push_front(10); //INSERT OBJECT AT THE FRONT
    objList1.push_back(30); //INSERT OBJECT AT THE BACK
    objList1.push_back(60);
    objList1.push_back(5);
    objList1.push_back(12);
    printList(objList1);

    std::cout << "we would pop the front and back" << std::endl;
    objList1.pop_front(); //REMOVE OBJECT AT THE FRONT
    objList1.pop_back(); //INSERT OBJECT AT THE BACK
    printList(objList1);

    std::cout << "value of first element is: " << objList1.front() << std::endl;
    std::cout << "value of first element is: " << objList1.back() << std::endl;

}

//TIME COMPLEXITY | SPACE COMPLEXITY IS JUST FOR HOW MANY MEMORY SPACE DOES IT OCCUPY, EZ NALANG YON 'DI KO

//NOTE - WHY DO WE ONLY PICK THE ONE WITH THE HIGHEST ORDER FROM AN EQUATION? e.g. T = a(n) + 2, 2 IS CONSTANT AND WOULD BE PLOTTED AS FLAT LINE, WHILE n GROWS AS THE INPUT NUMBER INCREASES, 
//CONTINUATION OF NOTE - REMEMBER THAT WE ONLY GET THE WORST CASE SCENARIO WITH Big O, IF AN INPUT IS 1MILLION, THE CONSTANT WHICH IS 2 WOULD BE IRRELEVANT THUS WE SIMPLIFY IT AND THE FINAL ANSWER WOULD BE O(n)

//LESSON D3 | Big O Notation O(1)
//THE COMPUTATION TIME WOULD ALWAYS BE CONSTANT NO MATTER THE INPUT SIZE OF THE ARRAY, PLOTTED AS FLAT LINE
void sampleBigOConstant(int arr[]) {
    arr[1] = 10;
}

//LESSON D4 | Big O Notation O(n)
//THE COMPUTATION TIME WOULD BE BASED ON THE INPUT SIZE OF THE ARRAY, PLOTTED AS LINEAR, AS THE SIZE INCREASES THE COMPUTATION TIME ALSO INCREASES
void sampleBigOLinear(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << std::endl;
    }
}

//LESSON D5 | Big O Notation O(n(squared))
//THE COMPUTATION TIME WOULD BE BASED ON THE TWO INPUT SIZE OF THE ARRAY, PLOTTED AS CURVE LINE THAT EXPONENTIALLY GROWS
void sampleBigOQuadratic(int **arr, int size1, int size2) { //**arr IS EQUAL TO arr[][10] OR *arr[10] | NUMBER MUST BE CLEARLY SPECIFIED INSIDE '[]'
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            std::cout << arr[i][j] << std::endl;
        }
    }
}

//LESSON D6 | Big O Notation O(logn)

//NOTE FOR ITERATORS - THEY ARE USED TO SELECT THE BEGIN ELEMENT,END,RBEGIN,REND, ETC. WE DON'T USE ITERATORS FOR SIZE,CAPACITY,PUSH,PUSH_BACK, OR INSERTING DATAS, ETC. SYNTAX SAMPLE: list<int> :: iterator it;
//ITERATORS: THEY ARE LIKE POINTERS, SELECTING THE FIRST,LAST ELEMENTS,ETC.

//LESSON D7 | STACK
//LIFO - LAST IN FIRST OUT, A WAY TO ORGANIZE DATA, YOU COULD ALSO USE STL WITH THIS ONE | HAS STATIC SIZE 
#define MAXSIZE 5

class stack {
    int top = -1;

public:
    int arr[MAXSIZE]{};

    bool arrayStackIsEmpty() {
        if (top < 0) return true;
        else return false;
    }

    void arrayStackPush(const int& value) { //YOU COULD ONLY ADD NEW VALUES AT THE TOP,CAN'T PUSH ANYMORE IF FULL SINCE ARRAY HAS STATIC SIZE
        if (top == MAXSIZE - 1) std::cout << "stack is full" << std::endl;
        else {
            top++;
            arr[top] = value;
        }
    }

    void arrayStackPop() { //CAN ONLY REMOVE VALUES FROM TOP| WHEN YOU DO THIS THE DATA ISN'T ACTUALLY REMOVE
        if (arrayStackIsEmpty()) std::cout << "stack is empty, you can't remove anything\n";
        else top--;
    }

    void arrayStackDisplay() {
        if (arrayStackIsEmpty()) {
            std::cout << "stack is empty\n";
        }
        else {
            for (int i = 0; i < top + 1; i++) {
                std::cout << "array[" << i << "]= " << arr[i] << std::endl;
            }
        }
    }
};

void mainD3() {
    stack obj1;

    obj1.arrayStackPush(10);
    obj1.arrayStackPush(20);
    obj1.arrayStackPop();
    obj1.arrayStackDisplay();
}

//LESSON D8 | DEQUEU - WITH DEQUEU YOU COULD INSERT AND REMOVE AT BOTH ENDS
//QUEUE - INSERT AT ONE END AND REMOVE AT ANOTHER END, I WILL NOT BE INCLUDING QUEUE IN THIS PRACTICE
//FIFO - FIRST IN FIRST OUT, OPPOSITE OF STACK
#include <deque>

using std::deque;

void printDeque(deque<int> passDeque) {
    deque<int> ::iterator it; //THIS IS SYNTAX FOR ITERATOR, IT ACTS LIKE A POINTER
    std::cout << "content of deque are { ";
    for (it = passDeque.begin();it != passDeque.end(); it += 1) {
        std::cout << *it << " "; //ITERATOR NEEDS TO BE DEREFERENCED JUST LIKE A POINTER
    }
    std::cout << "}\n\n";
}

void mainD4() {
    deque<int> objDeque1;

    objDeque1.push_front(10); //ASSIGN VALUE TO THE FIRST ELEMENT
    objDeque1.push_back(20);
    objDeque1.push_back(30); //ASSIGN VALUE TO THE LAST ELEMENT
    objDeque1.push_back(40);
    objDeque1.push_back(50);
    printDeque(objDeque1);

    std::cout << "we would pop the front and back" << std::endl;
    objDeque1.pop_front(); //REMOVE VALUE OF THE FIRST ELEMENT
    objDeque1.pop_back(); //REMOVE VALUE OF THE LAST ELEMENT
    printDeque(objDeque1);

}

//LESSON D9 | VECTOR - THIS HAS DYNAMIC SIZE UNLIKE STACK, ALSO CALLED AS DYNAMIC ARRAY, ALMOST THE SAME AS LINKED LIST, 
//LINKED LIST IS GOOD FOR INSERTING AT FRONT AND BACK WHILE VECTOR IS NOT- RESEARCH WHY
#include <vector>

using std::vector;

void printVector(vector<int>& passVector) { //IT IS A GOOD IDEA TO PASS THIS AS REFERENCE AS TO SAVE MEMORY, RATHER THEN MAKING THE COPY CONSTRUCTOR DO THE WORK
    std::cout << "content of vector are { ";
    for (const int& i : passVector) { //AN EXAMPLE OF GOOD USE OF RANGE BASED FOR LOOP
        std::cout << i << " ";
    }
    std::cout << "}\n\n";
}

void mainD5() {
    vector<int> objVector1; //REMEMBER THAT TEMPLATE CLASSES ARE DECLARED LIKE THIS
    int value = 0;
    int count;
    int i = 1;
    int index = 0;

    std::cout << "how many input values do you want to create?" << std::endl;
    std::cin >> count;

    std::cout << "Push Back Values: " << std::endl;
    while (i <= count) {
        std::cout << "enter a value" << std::endl;
        std::cin >> value;
        if (value > 0) {
            objVector1.push_back(value); //INSERTING VALUE AT THE BACK
            i++;
        }
    }
    printVector(objVector1);

    std::cout << "Push Front Values: " << std::endl;
    i = 1;
    while (i <= count) {
        std::cout << "enter a value" << std::endl;
        std::cin >> value;
        if (value >= 0) {
            objVector1.insert(objVector1.begin(), value); //INSERTING VALUES AT THE FRONT
            i++;
        }
    }
    printVector(objVector1);

    //ONLY BE DOING ONCE TOO
    int countInsert = 0;
    std::cout << "Insert Values: " << std::endl;
    while (countInsert <= 0) {
        std::cout << "enter an index" << std::endl;
        std::cin >> index;
        if (index >= 0) {
            std::cout << "enter a value" << std::endl;
            std::cin >> value;
            objVector1.insert(objVector1.begin() + index, value); //INSERTING VALUES AT WHATEVER INDEX YOU WANT
            countInsert++;
        }
    }
    printVector(objVector1);

    //WE'LL ONLY BE DOING THIS ONCE
    countInsert = 0;
    std::cout << "Modify Values: " << std::endl;
    while (countInsert <= 0) {
        std::cout << "enter an index" << std::endl;
        std::cin >> index;
        if (index >= 0) {
            std::cout << "enter a value" << std::endl;
            std::cin >> value;
            objVector1[index] = value; //DEREFERENCING OR MODIFYING THE CONTENT OF THE INDEX
            countInsert++;
        }
    }
    printVector(objVector1);

}

int main() {
    std::cout << "first modified code for git | practice practice" << std::endl;
    main0();
    main1();
    main2();
    main3();
    main4();
    main5();
    main6();
    main7();
    main8();
    main9();
    main10();
    main11();
    main12();
    main13();
    main14();
    main15();
    main16();

    mainA1();
    mainA2();
    mainA3();
    mainA4();
    mainA5();
    mainA6();
    mainA7();

    mainD1();
    mainD2();
    mainD3();
    mainD4();
    mainD5();
    return 0;
}` },
{ mysql: 
`-- CHEATCODE FOR SQL BY RENZ CARILLO
-- I MAINLY USE THIS AS QUICK OVERVIEW WHEN I'M ABOUT TO USE THE LANGUAGE, COMMENTS ARE CREATED BASED ON MY OWN UNDERSTANDING 
-- ROADMAP WAS PULLED FROM LINKEDIN LEARNING | LEARNING PATH: BECOME A DATABASE DEVELOPER-- LESSON 3.1 - CREATING DATABASE

CREATE DATABASE movies; -- make sure to refresh navigator pane for this new schema/database to appear
-- *note: you could do these things easily with wizard

-- LESSON 3.2 - CREATING TABLE
-- (PK) PRIMARY KEY - UNIQUE TO EACH RECORDS
-- (NN) NOT NULL - CANNOT CONTAIN NULL VALUES
-- (UQ) UNIQUE - EACH ROW MUST HAVE A UNIQUE VALUE IN THIS COLUMN
-- (B) BINARY - COLUMN WILL CONTAIN BINARY DATA
-- (UN) UNSIGNED - COLUMN CANNOT CONTAIN ANY NEGATIVE NUMBERS
-- (ZF) ZERO FILL - VALUES WILL BE PADDED TO MAXIMUM COLUMN SIZE WITH ZEROES WHEN DISPLAYED
-- (AI) AUTO INCREMENT - WILL AUTOMATICALLY GENERATE AN UNUSED VALUE FOR THIS COLUMN
-- (G)  GENERATED - COLUMN VALUE WILL BE AUTOMATICALLY GENERATED BASED ON SUPPLIED EXPRESSION

CREATE TABLE movies_basic -- CREATE TABLE table_name
(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, -- these are the keywords from above
title VARCHAR(100), -- field_name datatype(n)
genre VARCHAR(20),
release_year INT,
director VARCHAR(40),
studio VARCHAR(30),
critics_rating DECIMAL(2,1) DEFAULT 0);

-- modifying table
ALTER TABLE movies_basic -- we're saying we're about to modify a table
ADD COLUMN box_office_gross FLOAT, -- add a new field with float as a datatype
RENAME COLUMN critics_rating to critic_rating, -- renaming field_name
CHANGE COLUMN director director VARCHAR(50); -- changing the datatype of a field

-- LESSON 3.3 - PRIMARY KEYS AND FOREIGN KEYS
-- PRIMARY KEYS - UNIQUE TO EACH COLUMN VALUES
-- FOREIGN KEYS - PRIMARY KEYS IN ANOTHER TABLE THAT IS LINKED TO THE CURRENT TABLE

-- LESSON 3.4 - IMPORTING DATA FROM EXCEL
-- NAVIGATOR -> MOVIES(TABLE) -> MOVIES_BASIC(TABLE) -> RIGHT-CLICK, THEN TABLE DATA IMPORT WIZARD -> SELECT CORRECT FILE THEN KEEP ON CLICKING NEXT
SELECT * FROM movies.movies_basic; -- have a look at newly imported data

-- CHALLENGE: CREATE NEW NORMALIZED TABLES, SIMILAR DATA TO MOVIES_BASIC BUT IN FIVE TABLES, EACH TABLES WILL HAVE ONE PRIMARY AND POSSIBLY FOREIGN KEYS, POPULATE EACH TABLE WITH THE DATASETS FROM THE EXERCISE FILES

-- LESSON 4.1 - SELECT - this just means return this that we're selecting, we've already learned this at sql programming go check it out
SELECT genre, title -- SELECT field_name
FROM movies.movies_basic; -- FROM main_table.sub_table

-- LESSON 4.2 - REFINE SELECT QUERIES
-- selecting specific no. of rows
SELECT *
FROM movies.movies_basic
LIMIT 5; -- only select 5 rows(records) of data

SELECT *
FROM movies.movies_basic
LIMIT 5, 10; -- start with 5th row end with 10th row | somehow works like offset in sql programming

-- selecting unique values only
SELECT DISTINCT genre
FROM movies_basic;

-- renaming the field names
SELECT title AS "Title", 
genre AS "Genre"
FROM movies_basic;

-- organizing by ascending or descending order
SELECT * 
FROM movies_basic
ORDER BY genre ASC; -- default order is asc, if i didn't specify asc it would still be in an ascending order

-- organizing the 1st specified field first then organize the 2nd specified field
SELECT * FROM movies_basic ORDER BY genre, release_year; -- i'm just gonna format it this way so our code wouldn't be too long

-- LESSON 4.3 - USING WHERE CLAUSE - it is somehow like an if statement for sql
SELECT * FROM movies_basic
WHERE id >= 10; -- look at your programming language cheatcode to see more logical operators, there are plenty of them, also you could AND, OR, etc. you know them already

-- using like clause to find matching words
SELECT * FROM movies_basic
WHERE genre LIKE "Children"; -- you could also use LIKE "c%" to match everything that starts with letter c | % is pretty much like _ | != is equal to <>

-- using functions in where clause, again, it functions just like an if statement in other programming languages
SELECT * FROM movies_basic
WHERE LENGTH(title) > 20;

-- LESSON 4.4 - DISPLAY DATA WITH CASE, we're somehow adding a new field into table
-- using if function, only used for single conditions
SELECT title AS 'Title',
IF(critic_rating > 6, 'Good', 'Bad') -- wow, if is a function here in sql and the way it works is just like a ternary operator in c++ 'IF(if condition, is true then do this, is false then do this)'
AS 'Score' -- we'll be using this to prettify the field name
FROM movies_basic;

-- using case statement, this is used for multiple conditions
SELECT title AS 'Title',
CASE
WHEN critic_rating < 5 THEN 'Bad'
WHEN critic_rating < 8 THEN 'Decent'
ELSE 'Good' -- if nothing else is true
END AS 'Score' -- name this field as score
FROM movies_basic;

SELECT * FROM movies_basic;
-- CHALLENGE: DESIGN A QUERY TO DISPLAY DATA FROM MOVIES_BASIC IN A SPECIFIC FORMAT, CAPITALIZATION AND PUNCTUATION MATTER, 
-- 1ST COLUMN IS TITLE 2ND COLUMN IS RELEASED WHERE DATA RELEASED <2000S IS 20TH CENTURY AND >2000S IS 21ST CENTURY, 3RD COLUMN IS DIRECTOR, AND 4TH COLUMN IS REVIEWS | <=5 - BAD, 5.1-7 - DECENT, 7.1-8.9 - GOOD, >=9 - AMAZING
SELECT title AS 'Title', 
IF(release_year < 2000, '20th Century','21st Century') AS 'Released',
director AS 'Director',
CASE
WHEN critic_rating <= 5 THEN 'Bad' 
WHEN critic_rating > 5 AND critic_rating <= 7 THEN 'Bad'
WHEN critic_rating > 7 AND critic_rating <= 8.9 THEN 'Good'
ELSE 'Amazing'
END AS 'Reviews'
FROM movies_basic;

-- LESSON 5 - CRUD | CREATE(INSERT INTO, VALUES), READ(SELECT), UPDATE(UPDATE, SET), DELETE(DELETE)
-- LESSON 5.1 - USING INSERT to add data into table | CREATE
INSERT INTO movies_basic (title, genre, release_year, director, studio, critic_rating)
VALUES ('Challenge of the Emperor', 'Adventure', 2010, 'Miley Watson', 'Bix', 7.2); -- this is the equivalent of adding 1 record
SELECT * FROM movies_basic; -- have a look at the changes

-- LESSON 5.2 - USING UPDATE to modify data | UPDATE
-- have a look first at the data you wanted to modify
SELECT * FROM movies_basic WHERE director = 'Miley Watson';

-- this would cause an error, this statement below is saying to change where every director is miley watson, you might wrongly update some data with these and i think that's the reason why sql made this resulting to an error but you could disable the error by unchecking the safe updates
UPDATE movies_basic 
SET director = 'Mike Watson'
WHERE director IS 'Miley Watson'

-- try to update with specifics in mind, always
UPDATE movies_basic 
SET director = 'Mike Watson'
WHERE id IS 43;

-- LESSON 5.3 - USING DELETE to obviously delete data | DELETE
-- if you have a database that is huge, delete is not a good idea, you should use truncate, by using truncate and let's say you remove rows 1-4, truncate would start the autoincrement counting again at 1 unlike delete where if you remove rows 1-4 the 1st value in the table would be 5
DELETE -- syntactically looks like select | note: if you have auto increment id
FROM movies_basic
WHERE release_year < 1927;

-- CHALLENGE: CORRECT MISTAKES IN MOVIES_BASIC TABLE, ADD RENCE PERA'S FILM,  CHANGE GENRE Sci-Fi to SF for all fasltead group films, remove all the films garry scott did for lionel brownstone
-- look at data
SELECT * FROM movies_basic;

-- add
INSERT INTO movies_basic (title, genre, release_year, director, studio, critic_rating)
VALUES ('Run for the Forest', 'Drama', 1946, 'Rence Pera', 'Lionel Brownstone', 7.3),
('Luck of the Night', 'Drama', 1951, 'Rence Pera', 'Lionel Brownstone', 6.8),
('Invader Glory', 'Adventure', 1953, 'Rence Pera', 'Studio 60', 5.5);

-- update
UPDATE movies_basic
SET genre = 'SF'
WHERE genre = 'Sci-Fi' AND studio LIKE 'Falstead%';

-- delete
DELETE 
FROM movies_basic
WHERE director = 'Garry Scott' AND studio = 'Lionel Brownstone';

-- look at the changes
SELECT * FROM movies_basic

-- LESSON 6.1 - BASICS OF JOIN
-- CROSS JOIN - MATCH TABLE1(ROW1) TO ALL ROWS OF TABLE2, MATCH TABLE1(ROW2) TO ALL ROWS OF TABLE2, ... YOU GET THE PATTERN
-- INNER JOIN - JOIN ONLY THOSE WITH MATCHING VALUES FROM TWO TABLES, IF TABLE1 DOESNT MATCH ANYTHING WITH TABLE2 DON'T INCLUDE IT
-- OUTER JOIN - JOIN EVERYTHING FROM ONE TABLE1 AND IF TABLE2 DOESN'T HAVE THE MATCHING VALUES WITH TABLE1 LEAVE THEM AT NULL, THERE ARE VERSIONS OF JOIN, LOOK AT YOUR SQL PROGRAMMING CHEATCODE

-- LESSON 6.2 - USING INNER JOIN
-- JOIN VS INNER JOIN, JOIN ONLY KEEPS ONE COPY OF THE COLUMN WHILE INNER JOIN KEEPS EVERYTHING UNLESS SPECIFIED BUT THE FUNCTIONALITY IS ALMOST THE SAME
-- create a 2nd table first to match with the 1st table
CREATE TABLE studio
(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
studio_name VARCHAR(100),
city VARCHAR(100));

CREATE TABLE titles
(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
title VARCHAR(100),
genre_id INT,
release_year INT,
director_id INT,
studio_id INT);

SELECT titles.title, studio.city
FROM titles -- 1st table
INNER JOIN studio -- 2nd table, the one you're linking
ON titles.studio_id = studio.id -- linking table1 to table2 with a key that has the same value on two table
ORDER BY titles.title;

-- LESSON 6.3 - USING OUTER JOINS
SELECT * 
FROM movies_basic
RIGHT OUTER JOIN studio -- join everything from studio(right) 
ON movies_basic.studio = studio.studio_name -- if there is a value in studio_name that is not in movies_basic.studio, then studio would be null
ORDER BY movies_basic.studio;` },
            { mongodb: `` },
    ]}
]

export default content;

