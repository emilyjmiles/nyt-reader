const fetchAllData = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=w5xv1NouT0t0kG7pUWSLa5Il5c0E9p1H
  `)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status} `
        );
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { fetchAllData };;;