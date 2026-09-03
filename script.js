const nameTarget = document.getElementById("project-name");
const disciplineTarget = document.getElementById("project-discipline");

fetch("project.json")
  .then((response) => (response.ok ? response.json() : null))
  .then((project) => {
    if (!project) return;
    if (project.name) {
      nameTarget.textContent = project.name;
      document.title = `${project.name} — Portfolio Archive`;
    }
    if (project.discipline) disciplineTarget.textContent = project.discipline;
  })
  .catch(() => {});

document.getElementById("year").textContent = new Date().getFullYear();
