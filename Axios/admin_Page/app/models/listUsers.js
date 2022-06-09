export class ListUsers {
  arr = [];
  getUsers() {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/users",
      method: "GET",
    });
  }
  addUser(user) {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/users",
      method: "POST",
      data: user,
    });
  }
  removeUser(id) {
    return axios({
      url: `https://628b995c667aea3a3e32d139.mockapi.io/api/users/${id}`,
      method: "DELETE",
    });
  }
  updateUser(user) {
    return axios({
      url: `https://628b995c667aea3a3e32d139.mockapi.io/api/users/${user.id}`,
      method: "PUT",
      data: user,
    });
  }
  getUser(id) {
    return axios({
      url: `https://628b995c667aea3a3e32d139.mockapi.io/api/users/${id}`,
      method: "GET",
    });
  }
}
