(function () {

	window.onload = function () {

		///////////////////////
		// DEFS
		//
		var margin = {top: 20, right: 50, bottom: 20, left: 50},
			gRatio = (1+Math.sqrt(5))/2,		
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
				.attr('height', h + margin.top + margin.bottom);
		
		var all = svg.append('g')
				.attr('id', 'all')
				.attr("transform", "translate(" + (margin.left) + "," + margin.top + ")");


			var parseTime = d3.timeParse('%Y-%m-%d');

			var x = d3.scaleTime()
			    .rangeRound([0, w]);

			var y = d3.scaleLinear()
			    .rangeRound([h, 0]);

			var line = d3.line()
			    .x(function(d) { return x(d.date); })
			    .y(function(d) { return y(d.count); });


		d3.csv("data/TWIST2018_slackAnalytics_agg.csv", function(d) {
				d.date = parseTime(d.Date);
			  d.count = +d['Messages in DMs']+(+d['Messages in Private Channels'])+(+d['Messages in Public Channels'])+(+d['Messages in Shared Channels']);

			  return d;
			}, function(error, data) {
			  if (error) throw error;


			  console.log(data);

			  x.domain(d3.extent(data, function(d) { return d.date; }));
			  y.domain(d3.extent(data, function(d) { return d.count; }));

			  all.append("g")
			      .attr("transform", "translate(0," + h + ")")
			      .call(d3.axisBottom(x))
			    .select(".domain")
			      .remove();

			  all.append("g")
			      .call(d3.axisLeft(y))
			    .append("text")
			      .attr("fill", "#000")
			      .attr("transform", "rotate(-90)")
			      .attr("y", 6)
			      .attr("dy", "0.71em")
			      .attr("text-anchor", "end")
			      .text("Messages");

			  all.append("path")
			      .datum(data)
			      .attr("fill", "none")
			      .attr("stroke", "steelblue")
			      .attr("stroke-linejoin", "round")
			      .attr("stroke-linecap", "round")
			      .attr("stroke-width", 1.5)
			      .attr("d", line);
		
		})

	};
}());
