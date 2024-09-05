// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    ansIndex: 1,
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    ansIndex: 3,
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    ansIndex: 0,
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    ansIndex: 3,
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    ansIndex: 0,
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  {
    numb: 6,
    question: "What is the correct way to declare the DOCTYPE in HTML5?",
    answer: "&lt;DOCTYPE html&gt;",
    ansIndex: 0,
    options: [
      "&lt;DOCTYPE html&gt;",
      "&lt;DOCTYPE HTML 5&gt;",
      "&lt;DOCTYPE html 5&gt;",
      "&lt;DOCTYPE HTML5&gt;"
    ]
  },
  {
    numb: 7,
    question: "Which HTML element is used to define the head section of an HTML document?",
    answer: "&lt;head&gt;",
    ansIndex: 0,
    options: [
      "&lt;head&gt;",
      "&lt;header&gt;",
      "&lt;body&gt;",
      "&lt;section&gt;"
    ]
  },
  {
    numb: 8,
    question: "Which HTML element is used to define the main content of an HTML document?",
    answer: "&lt;body&gt;",
    ansIndex: 2,
    options: [
      "&lt;head&gt;",
      "&lt;header&gt;",
      "&lt;body&gt;",
      "&lt;section&gt;"
    ]
  },
  {
    numb: 9,
    question: "Which HTML element is used to define a paragraph?",
    answer: "&lt;p&gt;",
    ansIndex: 0,
    options: [
      "&lt;p&gt;",
      "&lt;para&gt;",
      "&lt;paragraph&gt;",
      "&lt;text&gt;"
    ]
  },
  {
    numb: 10,
    question: "Which HTML element is used to define a hyperlink?",
    answer: "&lt;a&gt;",
    ansIndex: 2,
    options: [
      "&lt;link&gt;",
      "&lt;href&gt;",
      "&lt;a&gt;",
      "&lt;url&gt;"
    ]
  },
  {
    numb: 11,
    question: "Which CSS property is used to set the background color of an element?",
    answer: "background-color",
    ansIndex: 2,
    options: [
      "color",
      "background",
      "background-color",
      "style"
    ]
  },
  {
    numb: 12,
    question: "Which CSS property is used to set the font size of an element?",
    answer: "font-size",
    ansIndex: 0,
    options: [
      "font-size",
      "size",
      "text-size",
      "font"
    ]
  },
  {
    numb: 13,
    question: "Which CSS property is used to align text horizontally within an element?",
    answer: "text-align",
    ansIndex: 0,
    options: [
      "text-align",
      "align",
      "horizontal-align",
      "text-position"
    ]
  },
  {
    numb: 14,
    question: "Which CSS property is used to create a floating element?",
    answer: "float",
    ansIndex: 0,
    options: [
      "float",
      "position",
      "display",
      "hover"
    ]
  },
  {
    numb: 15,
    question: "Which CSS property is used to set the position of an element relative to its parent or other elements?",
    answer: "position",
    ansIndex: 0,
    options: [
      "position",
      "place",
      "locate",
      "set"
    ]
  },
  {
    numb: 16,
    question: "Which JavaScript keyword is used to declare a variable?",
    answer: "All of the above",
    ansIndex: 3,
    options: [
      "var",
      "let",
      "const",
      "All of the above"
    ]
  },
  {
    numb: 17,
    question: "Which JavaScript data type is used to represent a sequence of characters?",
    answer: "String",
    ansIndex: 1,
    options: [
      "Number",
      "String",
      "Boolean",
      "Object"
    ]
  },
  {
    numb: 18,
    question: "Which JavaScript operator is used to add two numbers together?",
    answer: "+",
    ansIndex: 0,
    options: [
      "+",
      "-",
      "*",
      "/"
    ]
  },
  {
    numb: 19,
    question: "Which JavaScript method is used to get the length of a string?",
    answer: "length()",
    ansIndex: 0,
    options: [
      "length()",
      "size()",
      "count()",
      "strlen()"
    ]
  },
  {
    numb: 20,
    question: "Which JavaScript keyword is used to define a function?",
    answer: "function",
    ansIndex: 0,
    options: [
      "function",
      "define",
      "create",
      "method"
    ]
  },
  {
    numb: 21,
    question: "Which HTML element is used to define a list item?",
    answer: "&lt;li&gt;",
    ansIndex: 0,
    options: [
      "&lt;li&gt;",
      "&lt;list&gt;",
      "&lt;item&gt;",
      "&lt;list-item&gt;"
    ]
  },
  {
    numb: 22,
    question: "Which HTML attribute is used to specify the target of a hyperlink?",
    answer: "target",
    ansIndex: 1,
    options: [
      "href",
      "target",
      "link",
      "url"
    ]
  },
  {
    numb: 23,
    question: "Which HTML element is used to define a table?",
    answer: "&lt;table&gt;",
    ansIndex: 0,
    options: [
      "&lt;table&gt;",
      "&lt;grid&gt;",
      "&lt;chart&gt;",
      "&lt;data&gt;"
    ]
  },
  {
    numb: 24,
    question: "Which HTML element is used to define a table row?",
    answer: "&lt;tr&gt;",
    ansIndex: 0,
    options: [
      "&lt;tr&gt;",
      "&lt;row&gt;",
      "&lt;table-row&gt;",
      "&lt;trow&gt;"
    ]
  },
  {
    numb: 25,
    question: "Which HTML element is used to define a table cell?",
    answer: "&lt;td&gt;",
    ansIndex: 0,
    options: [
      "&lt;td&gt;",
      "&lt;cell&gt;",
      "&lt;table-cell&gt;",
      "&lt;tdata&gt;"
    ]
  },
  {
    numb: 26,
    question: "Which CSS property is used to set the width of an element?",
    answer: "width",
    ansIndex: 0,
    options: [
      "width",
      "size",
      "dimension",
      "span"
    ]
  },
  {
    numb: 27,
    question: "Which CSS property is used to set the height of an element?",
    answer: "height",
    ansIndex: 0,
    options: [
      "height",
      "size",
      "dimension",
      "span"
    ]
  },
  {
    numb: 28,
    question: "Which CSS property is used to set the margin of an element?",
    answer: "margin",
    ansIndex: 0,
    options: [
      "margin",
      "padding",
      "border",
      "space"
    ]
  },
  {
    numb: 29,
    question: "Which CSS property is used to set the padding of an element?",
    answer: "padding",
    ansIndex: 1,
    options: [
      "margin",
      "padding",
      "border",
      "space"
    ]
  },
  {
    numb: 30,
    question: "Which CSS property is used to set the border of an element?",
    answer: "border",
    ansIndex: 2,
    options: [
      "margin",
      "padding",
      "border",
      "space"
    ]
  },
  {
    numb: 31,
    question: "WWhich JavaScript operator is used to compare two values for equality?",
    answer: "===",
    ansIndex: 2,
    options: [
      "=",
      "==",
      "===",
      "!="
    ]
  },
  {
    numb: 32,
    question: "Which JavaScript operator is used to check if a value is not equal to another value??",
    answer: "!=",
    ansIndex: 3,
    options: [
      "=",
      "==",
      "===",
      "!="
    ]
  },
  {
    numb: 33,
    question: "Which JavaScript keyword is used to create a loop that executes a block of code repeatedly?",
    answer: "for",
    ansIndex: 2,
    options: [
      "loop",
      "repeat",
      "for",
      "while"
    ]
  },
  {
    numb: 34,
    question: "Which JavaScript keyword is used to create a conditional statement?",
    answer: "All of the above",
    ansIndex: 3,
    options: [
      "if",
      "else",
      "switch",
      "All of the above"
    ]
  },
  {
    numb: 35,
    question: "Which JavaScript method is used to convert a string to a number?",
    answer: "parseInt()",
    ansIndex: 0,
    options: [
      "parseInt()",
      "parseFloat()",
      "toNumber()",
      "numeric()"
    ]
  },
  {
    numb: 36,
    question: "Which HTML element is used to define a form?",
    answer: "&lt;form&gt;",
    ansIndex: 0,
    options: [
      "&lt;form&gt;",
      "&lt;input&gt;",
      "&lt;select&gt;",
      "&lt;textarea&gt;"
    ]
  },
  {
    numb: 37,
    question: "Which HTML attribute is used to specify the name of a form?",
    answer: "name",
    ansIndex: 0,
    options: [
      "name",
      "id",
      "class",
      "type"
    ]
  },
  {
    numb: 38,
    question: "Which HTML element is used to define a text input field?",
    answer: "&lt;input&gt;",
    ansIndex: 0,
    options: [
      "&lt;input&gt;",
      "&lt;text&gt;",
      "&lt;textfield&gt;",
      "&lt;textbox&gt;"
    ]
  },
  {
    numb: 39,
    question: "Which HTML attribute is used to specify the type of an input field?",
    answer: "type",
    ansIndex: 3,
    options: [
      "name",
      "id",
      "class",
      "type"
    ]
  },
  {
    numb: 40,
    question: "Which HTML element is used to define a select list?",
    answer: "&lt;select&gt;",
    ansIndex: 0,
    options: [
      "&lt;select&gt;",
      "&lt;list&gt;",
      "&lt;options&gt;",
      "&lt;dropdown&gt;"
    ]
  },
  {
    numb: 41,
    question: "Which CSS property is used to set the color of text?",
    answer: "colour",
    ansIndex: 0,
    options: [
      "colour",
      "text-colour",
      "font-colour",
      "style"
    ]
  },
  {
    numb: 42,
    question: "Which CSS property is used to set the font family of text?",
    answer: "font-family",
    ansIndex: 0,
    options: [
      "font-family",
      "font",
      "text-font",
      "typeface"
    ]
  },
  {
    numb: 43,
    question: "Which CSS property is used to set the font weight of text?",
    answer: "font-weight",
    ansIndex: 0,
    options: [
      "font-weight",
      "bold",
      "weight",
      "thickness"
    ]
  },
  {
    numb: 44,
    question: "Which CSS property is used to set the font style of text?",
    answer: "font-style",
    ansIndex: 0,
    options: [
      "font-style",
      "italic",
      "style",
      "type"
    ]
  },
  {
    numb: 45,
    question: "Which CSS property is used to set the text decoration of text?",
    answer: "text-decoration",
    ansIndex: 0,
    options: [
      "text-decoration",
      "decoration",
      "underline",
      "style"
    ]
  },
  {
    numb: 46,
    question: "Which JavaScript operator is used to check if two values are not equal?",
    answer: "!=",
    ansIndex: 0,
    options: [
      "!=",
      "!==",
      "&lt;&gt;",
      "=/"
    ]
  },
  {
    numb: 47,
    question: "Which JavaScript operator is used to check if two values are strictly not equal?",
    answer: "!==",
    ansIndex: 1,
    options: [
      "!=",
      "!==",
      "&lt;&gt;",
      "=/"
    ]
  },
  {
    numb: 48,
    question: "Which JavaScript keyword is used to exit a loop early?",
    answer: "break",
    ansIndex: 0,
    options: [
      "break",
      "stop",
      "exit",
      "end"
    ]
  },
  {
    numb: 49,
    question: "Which JavaScript method is used to convert a number to a string?",
    answer: "toString()",
    ansIndex: 0,
    options: [
      "toString()",
      "string()",
      "convertToString()",
      "toText()"
    ]
  },
  {
    numb: 50,
    question: "Which JavaScript method is used to get the current date and time?",
    answer: "newDate()",
    ansIndex: 0,
    options: [
      "newDate()",
      "getCurrentTime()",
      "getDate()",
      "getTime()"
    ]
  }
];
