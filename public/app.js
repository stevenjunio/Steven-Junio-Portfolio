var msg = "Hello World";
console.log(msg);

let checkImage = (image) => {
  if (image != null) {
    console.log(image.path + "image");
    return `<img class ="projectImage" height ="${image.meta.height}" width="${image.meta.width}" src ="https://xwu6-duwo-frcu.n7.xano.io` + `${image.path}"></img>`;
    } else {
      return "";
    }
  }


fetch("https://xwu6-duwo-frcu.n7.xano.io/api:YOmsVTXu/project").then(
  (response) =>
    response.json().then((data) => {
      console.log(data);
      let projects = data.projects;
      console.log(projects);
      for (const project of projects) {
        console.log(project.Name);

        document.getElementById("mainPage").innerHTML +=
          `<div class="projectContainer">` +
          checkImage(project.Image) +
           
          `<div class="projectTitle" > ` +
          project.Name +
          "</div>" + '<div class="projectDescription">' +
          project.Description
         
      }
    })
);
