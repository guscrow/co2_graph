var dataP = d3.csv("co2_emition.csv")
dataP.then(function(data)
{
  console.log(data);
  drawChart(data);
},
function(err)
{
  console.log(err);
}
)
var drawChart = function(data)
{
  var width = 600;
  var height = 450;
  var barwidth = width/data.length;
  var svg = d3.select("svg")
              .attr("width",width)
              .attr("height",height);
  svg.selectAll("rect#bar")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
      {
        return i * barwidth + 5;
      })
     .attr("y",function(d)
      {
        return height - (d.num/5);
      })
      .attr("width",barwidth -5)
      .attr("height", function(d)
      {
        return d.num;
      })
      .attr("fill",function(d)
      {
        return d.color
      })
      .attr("id","bar")
      svg.selectAll("rect#label")
         .data(data)
         .enter()
         .append("rect")
         .attr("x",400)
         .attr("y",function(d,i)
          {
            return ((39)*(i+1))-10 ;
          })
          .attr("width",20)
          .attr("height", 20)
          .attr("fill",function(d)
          {
            return d.color;
          })
          .attr("id","label")
      svg.selectAll("text#label")
          .data(data)
          .enter()
          .append("text")
          .text(function(d)
          {
            return d.Source;
          })
          .attr("x",430)
          .attr("y",function(d,i)
          {
            return (40)*(i+1);
          })
          .attr("id","label")
      svg.append("text")
          .text("CO2 Eq")
          .attr("x",200)
          .attr("y",50)
          .attr("font-size",25)

}
