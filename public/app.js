var msg = "Hello World";
console.log(msg);

fetch("https://xwu6-duwo-frcu.n7.xano.io/api:YOmsVTXu/project").then(
  (response) =>
    response.json().then((data) => {
      console.log(data);
      let projects = data.projects;
      console.log(projects);
      for (const project of projects) {
        console.log(project.Name);
        document.createElement("div");
        document.getElementById("mainPage").innerHTML +=
          `<div class="projectContainer">
          <div class ="projectTitle">` +
          project.Name + '</div>' +
          project.Description +
          `</div>`;
      }
    })
);
