var dataforgraph=[
    {"class": "Computer Science", "popularity": 75 },
    { "class": "Psychology", "popularity": 65 },
    { "class": "Biology", "popularity": 60 },
    { "class": "Sport", "popularity": 50 },
    { "class": "Chemistry", "popularity": 45 },
    { "class": "Physics", "popularity": 40 },
    { "class": "Theater", "popularity": 35 },
    { "class": "Music", "popularity": 32 },
    { "class": "Arabic", "popularity": 30 }
  ]
  //let dataforgraphArray=[["Computer Science",75],
  //["Psychology",65],
  //["Biology",60],
  //["Sport",50],
  //["Chemistry",45],
  //["Physics",40],
  //["Theater",35],
  //["Music",32],
  //["Arabic",30]];
  //ClassesNanes=["Computer Science","Psychology","Biology","Sport","Chemistry","Physics","Theater","Music","Arabic"];
  //popularity=[75,65,60,50,45,40,35,32,30];
  const ctx = document.createElement('canvas');
  document.body.appendChild(ctx);
  async function ourcanves(params) {
    const response=await fetch("dataForgraph");
    const data=await response.text();
    Papa.parse(data, {
        complete: function(results) {
        console.log(results.data);
    }});
    const ctx = document.createElement('canvas');
    document.body.appendChild(ctx);
X = dataforgraph.map(row => row[2])
Y = dataforgraph.map(row => row[3])
    const dataForGraph =  {
        labels :X,
        datasets: [{
            label: 'classes by popularity', // the title of the graph
            data: Y,
        }],
        
    };

}
  new Chart(ctx, {
    type: 'bar',
    data: dataforgraph
});