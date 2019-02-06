/*!
	 * jquery.overlaps.js 0.0.2 - https://github.com/yckart/jquery.overlaps.js
	 * Forked by dkline03 - https://github.com/dkline03/jquery.overlaps.js
	 *
	 * Determine if an element overlaps another.
	 * dkline03 - Modified to allow inner/outer height/width calculations, and modification of the dimensions by percentage
	 *
	 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
	 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
	 * 2013/02/09
	 * 2019/02/06 - dkline03
	*/
	(function($){
		if(!$.fn.overlaps){
			$.fn.overlaps = function(obj,options) {
				//set options obj to empty if not sent
				typeof(options) != 'object' ? options = {} : '';
				//if a string with a percent sign was sent (like 50%), convert to decimal
				((/^\d+%$/).test(options.pct)) ? options.pct = parseFloat(options.pct)/100 : '';
				//if pct is not a number, set it to 1 (or 100%)
				(isNaN(options.pct)) ? options.pct = 1 : '';

				var bounds, compare,
					elems = {targets: [], hits:[], overlap: false};
				//go through collection
				this.each(function() {
					//get the bounds of this element
					bounds = $(this).offset();
					//calculate right and bottom
					//-if options.inner is true, use the inner width for the overlap calculation, else use the outer width
					//--then multiply by the percentage in case you want overlap to be true only if the elements overlap by more than just the element bounds
					//---for example, if you want the elements to overlap by 10% of the bounds before being true
					bounds.right = bounds.left + (((!!options.inner) ? $(this).width() : $(this).outerWidth()) * options.pct);
					bounds.bottom = bounds.top + (((!!options.inner) ? $(this).height() : $(this).outerHeight()) * options.pct);
					//obj is the comparison element, make into jq obj
					compare = $(obj).offset();
					//calculate right and bottom using same process as for the bounds
					compare.right = compare.left + (((!!options.inner) ? $(obj).width() : $(obj).outerWidth()) * options.pct);
					compare.bottom = compare.top + (((!!options.inner) ? $(obj).height() : $(obj).outerHeight()) * options.pct);
					//if the calculated positions overlap, set overlap to true and push elements to arrays
					if (!(compare.right < bounds.left ||
						  compare.left > bounds.right ||
						  compare.bottom < bounds.top ||
						  compare.top > bounds.bottom)
					   ) {
						
						elems.overlap = true;
						elems.targets.push(this);
						elems.hits.push(obj);
					}
				});
				//if options.boolean was set to true, return only elems.overlap, else return elems
				return (options.boolean == true) ? elems.overlap : elems;
			};
		}//if
	}(jQuery));