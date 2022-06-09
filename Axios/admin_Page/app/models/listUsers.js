export class ListUsers {
  arr = [];
  getUsers() {
    return axios({
      url: "https://628b995c667aea3a3e32d139.mockapi.io/api/users",
      method: "GET",
    });
  }
}
