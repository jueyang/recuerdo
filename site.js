d3.select(".curiosidad")
  .selectAll("div")
  .data(d3.range(13))
  .enter()
  .append("div")
  .append("img")
  	.attr("class",function(d,i){ return i % 2 === 0 ? "left" : "right"; })
  	.attr("src",function(d,i){ return "images/curiosidad/" + i + ".jpg"; })
  	.style("opacity",function(d,i){ return i === 0 ? 1 : 0; })

// setup scroll functionality
var scroll = scroller()
	.container(d3.select('.curiosidad'));

// pass in .step selection as the steps
scroll(d3.selectAll('img'));

// setup event handling
scroll.on('active', function (index) {
// highlight current step text
d3.selectAll('img')
  .transition()
  .duration(1000)
    .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });
});