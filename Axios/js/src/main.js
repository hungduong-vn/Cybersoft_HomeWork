let service = new Services();

let getUsers = () => {
  service
    .getListUsers()
    .then((result) => renderList(result.data))
    .catch((error) => console.log(error));
};

let renderList = (data) => {
  content = "";
  data.forEach((ele) => {
    content += `
      <div class="team__wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
        <div class="team__member">
          <div class="team__thumb">
            <img src="./images/${ele.hinhAnh}" alt="" />
          </div>
          <div class="team__content">
            <h5 class="team__heading">${ele.ngonNgu}</h5>
            <h3 class="team__title">${ele.hoTen}</h3>
            <p class="team__desc">
              ${ele.moTa}
            </p>
          </div>
        </div>
      </div>
    `;
  });
  getEleId("teamRow").innerHTML = content;
};

getUsers();
