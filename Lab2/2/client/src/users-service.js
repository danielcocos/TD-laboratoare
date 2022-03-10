function users() {
  get = function () {
    return axios.get("http://localhost:3001/users");
  };
  post = function (user) {
    return axios.post("http://localhost:3001/users", {
      data: user
    })
  }
  

  return {
    get: get,
    post:post,
  };
}
