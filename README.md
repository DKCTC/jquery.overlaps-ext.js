
## Arguments

element1.overlaps(element2,{ inner: true, pct: 5, boolean: true });

element1 (jq collection) - the source element
element2 (jq collection, node, or selector) - the target element
inner (boolean) - use the inner width for comparison instead of the outer width
pct - percentage of tolerance before elements are considered to be overlapping
boolean (boolean) - return a boolean value indicating that at least one element overlaps instead of returning the default object

## Return value

{ targets: [raw][array of matching targets from the element1], hits: [raw][array of matching hits from the element2], overlap: [raw](true/false) }

## Usage

Compare element1 to element2 using the outer width (default) and return the default object with target and hits arrays, and a boolean overlap value:

element1.overlaps(element2);


Compare element1 to element2 using the inner width, and only set to true if the element overlaps by 5% of its bounds:

element1.overlaps(element2,{ inner: true, pct: 5 });


Compare element1 to element2 and return only the boolean overlap value:

element1.overlaps(element2, { boolean: true });

## Download

Get the [raw](https://raw.github.com/yckart/jquery.overlaps.js/master/jquery.overlaps.js) script, download the complete [package](https://github.com/yckart/jquery.overlaps.js/zipball/master) or fork it on [GitHub](https://github.com/yckart/jquery.overlaps.js/).

Updated dkline03 fork with extra functions:
[GitHub](https://github.com/dkline03/jquery.overlaps.js/)

## Support

 [@yckart](http://twitter.com/yckart) #jquery #overlaps
 [http://yckart.com](http://yckart.com/)


###License
Copyright (c) 2013 Yannick Albert ([http://yckart.com/](http://yckart.com/))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
