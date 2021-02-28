	/*!
	 * jquery.overlaps.js 0.0.2 - https://github.com/yckart/jquery.overlaps.js
	 * Forked by DKCTC - https://github.com/DKCTC/jquery.overlaps-ext.js
	 *
	 * Determine if an element overlaps another.
	 * DKCTC - Modified to allow inner/outer height/width calculations, and modification of the dimensions by percentage
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
				
				//the bounds of the elements in the loop
				var bounds,
				    //return obj
					elems = { targets: [], hits:[], overlap: false },
				    //calculate right and bottom of the comparison element starting with the offset
					compare = $(obj).offset();
				
				//if options.inner is true, use the inner width for the overlap calculation, else use the outer width
				if(!!options.inner){
					compare.width = $(obj).width();
					compare.height = $(obj).height();
				} else {
					compare.width = $(obj).outerWidth();
					compare.height = $(obj).outerHeight();
				}//if
				
				//calculate right and bottom, multiply by the percentage (default 1) in case you want overlap to be true only if the elements overlap by more than just the element bounds
				//-for example, if you want the elements to overlap by 10% of the bounds before being true
				//TODO: add ability to set the v/h alignment of the desired overlap area when options.pct is used, right now it's left/top only
				compare.right = compare.left + (compare.width * options.pct);
				compare.bottom = compare.top + (compare.height * options.pct);
				
				//go through collection
				this.each(function() {
					//calculate right and bottom bounds using same process as for the comparison element
					bounds = $(this).offset();	
					bounds.right = bounds.left + (((!!options.inner) ? $(this).width() : $(this).outerWidth()) * options.pct);
					bounds.bottom = bounds.top + (((!!options.inner) ? $(this).height() : $(this).outerHeight()) * options.pct);
					
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
