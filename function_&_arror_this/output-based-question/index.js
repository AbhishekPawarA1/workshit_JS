const obj = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
};
const boundGetName = obj.getName.bind(obj);


function executeCallback(callback) {
  console.log(callback());
}

executeCallback(boundGetName); // Output: "JavaScript"
