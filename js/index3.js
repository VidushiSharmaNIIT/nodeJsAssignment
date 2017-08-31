 var svg = d3.select("svg"),
     width = +svg.attr("width"),
     height = +svg.attr("height"),
     radius = Math.min(width, height) / 2,
     g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

 var color = d3.scaleOrdinal(["#5FECEC","#D571DC","#CEEC5F", "#DC3D69","#ff8c00" ,"#132AE5"]);

 var pie = d3.pie()
     .sort(null)
     .value(function(d) { return d.count; });

 var path = d3.arc()
     .outerRadius(radius - 10)
     .innerRadius(0);

 var label = d3.arc()
     .outerRadius(radius - 40)
     .innerRadius(radius - 40);

 d3.json("../json/piechart.json", function(error, data) {
     if (error) throw error;

     var arc = g.selectAll(".arc")
         .data(pie(data))
         .enter().append("g")
         .attr("class", "arc");

     arc.append("path")
         .attr("d", path)
         .attr("fill", function(d) { return color(d.data.crimeType); });

     arc.append("text")
         .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
         .attr("dy", "0.35em")
         .text(function(d) { return d.data.crimeType; });
     var padding = 20,
         legx = radius + padding,
         legend = svg.append("g")
         .attr("class", "legend")
         .attr("transform", "translate(" + legx + ", 0)")
         .style("font-size", "12px")
         .call(d3.legend);
 });