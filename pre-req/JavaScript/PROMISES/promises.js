//if code tooks long time then the below code needs to wait for the current execution.
//asnyc execution

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const input = "ABC";
    if (input) {
      resolve(input);
    } else {
      reject(new Error("no data"));
    }
  }, 5000);
});

promise
  .then((input) => {
    console.log(input);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(Test);
  });

//using API call
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    if (!response.ok) throw new Error(response.status);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise success");
  });
