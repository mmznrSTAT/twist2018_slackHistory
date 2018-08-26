(function () {

	window.onload = function () {

		///////////////////////
		// DEFS
		//
		var margin = {top: 10, right: 20, bottom: 20, left: 10},
			gRatio = (1+Math.sqrt(5))/2,		
			ch1903 = {'x1':669625, 'x2':716125, 'y1':224725, 'y2': 283325},
			pi = Math.PI,
			legendeLeft = 15,
			legendeTop = 0,
			//w = 532,
			w=1200 - margin.left - margin.right,
			h=600 - margin.top - margin.bottom,
			hChart=150;

		//add svg-container for vis+legende
		var svg = d3.select('#visDiv')
			.append('svg')
				.attr('id', 'svg')
				.attr('width', w + margin.left + margin.right)
				.attr('height', h + margin.top + margin.bottom)
			.append('g')
				.attr('id', 'all')
				.attr("transform", "translate(" + (margin.left) + "," + margin.top + ")");



	};
}());
