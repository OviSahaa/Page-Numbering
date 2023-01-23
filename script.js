
const pagination = document.getElementById('pagination');
const content = document.getElementById("page")
let pageIndex = 0;
let itemsPerPage = 10
loadItems()
function loadItems() {
    content.innerHTML = `
        <div class="page-header cf">
            <h2>Contacts</h2> 
            <h3>Total: ${users.length}</h3>
        </div>`;
    for (let i = pageIndex * itemsPerPage; i < (pageIndex * itemsPerPage) + itemsPerPage; i++) {
        let myDate = new Date(users[i].registered.date);
        const item = document.createElement('ul');
        item.setAttribute("class", "contact-list")
        item.innerHTML += `
            <li class="contact-item cf">
      <div id="contact-details">
                  <img id="avatar" src="${users[i].picture.medium}" alt="">
                  <h3>${users[i].name.first} ${users[i].name.last}</h3>
                  <span class="email">${users[i].email}</span>
                            </div>
              <div id="joined-details">
                  <span id="date">Joined&nbsp${myDate.getFullYear()}/${myDate.getMonth()}/${myDate.getDay()}</span>
              </div>
          </li>`;
        content.append(item);
    }
    loadPageNum()
}
function loadPageNum() {
    pagination.innerHTML = "";
    for (let i=0; i<(users.length/itemsPerPage); i++) {

    const link = document.createElement('li');

    link.innerHTML = `<a>${i+1}</a>`;
            link.addEventListener('click', (e) => {
        pageIndex = e.target.innerHTML-1;
            loadItems();
        });

        pagination.append(link);
        // pagination link
    }
    content.append(pagination)



}