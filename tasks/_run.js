module.exports = (task, ...args) => {
  const time = new Date().getTime();
  return Promise.resolve()
    .then(() => {
      console.log(`started ${task.name}...`);
    })
    .then(() => {
      return task.run(...args);
    })
    .then((result) => {
      console.log(`finished ${task.name}, ${new Date().getTime() - time} ms`);
      return result;
    })
    .catch((error) => {
      console.log(`failed ${task.name}, ${new Date().getTime() - time} ms`);
      console.log(error.stack);
    });
};
