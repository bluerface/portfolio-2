export default function flatten (data) {
  return data.reduce((acc, section) => {
    section.projects.reduce((acc, project) => {
      acc[project.slug] = project;
      return acc;
    }, acc);
    return acc;
  }, {});
}
