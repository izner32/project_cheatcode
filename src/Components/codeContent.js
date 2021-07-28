const content = [
        { webdev: [
            { html: `<!-- LESSON 2.2 - PARAGRAPHS -->
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
            { css: `/* LESSON 1 - TYPES OF CSS - INTERNAL,EXTERNAL, INLINE 
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
            { git: `` }

    ]}, { data_science: [
            { probability_and_statistics: `` },
            { linear_algebra: `` },
            { multivariate_calculus: ``},
            { machine_learning_algorithms: ``},
            { numpy: `` },
            { pandas_and_matplotlib: `` },

    ]}, { programming_languages : [
            { python: `` },
            { java: `` },
            { cpp: `` },
            { mysql: `` },
            { mongodb: `` },
    ]}
]

export default content;

