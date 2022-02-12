const getPeople = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      return { count: data.count, results: data.results };
    });
};

const getPeoplePromise = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  return { count: data.count, results: data.results };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
