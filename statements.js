
/**
 * The set of statements that are executed in the browser console to try out
 * jQuery selectors
 */

// Get all img elements on the page
$("img");

// Get all elements with a class of `card_image`
$(".card_image");

// Get the footer by its ID
$('#my_footer');

// All paragrapgh elements in the `footer`
$("footer p");

// Get all header elements (h1-h6)
$(":header");

// Get first element on the page
$(":first");

// Get the last `div` on the page
$("div:last")

// Get the last `img` on the page
$("img:last");

// Get all elements that have an attribute of `href`
$("[href]")

/**
 * The set of statements that are executed in the browser console to try out changing html and css in the browser
 * jQuery selectors
 */

// Get the `background-color` of all paragraphs
$("p").css("background-color");

// Get the `font-family` of all paragraphs
$("p").css("font-family");

// Change the color of the text of all list item elements
$("li").css("color", "red");

// Underline all h2 elements
$("h2").css("text-decoration", "underline");

// Add a solid border of 1px and a color of `#ccc` to all unordered lists
$("ul").css("border", "solid 1px #ccc");

// Get the HTML contained within an element with an ID of `my_footer`
$("#my_footer").html();

// Get the HTML contained within an element called `body`
$("body").html();

// Add a h1 to the `body` element
$("body").html("<h1>This is my fancy new content. Thanks jQuery, you're the best!</h1>");

// Add new text to the footer
$("#my_footer").text("This is my fancy new text. Thanks again jQuery");

// Append a new element to the end of all of the elements contained in the
// element that has an ID of `myElement`
$("#myElement").append("<p>This is a new element</p>");

// Append a span containing the copyright to the footer 
$("my_footer").append("<span>&copy; 2017.</span>")



