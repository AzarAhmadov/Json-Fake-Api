const tableInput = document.querySelector('.table-input');

function usersList() {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            for (user of data.data) {
                tableInput.innerHTML +=`
        <span><input type="text" class="input-style" placeholder="Adinizi girin..." value="${user.first_name}"></span>
        <span><input type="text" class="input-style" placeholder="Soyadinizi girin..." value="${user.last_name}"></span>
        <span><input type="text" class="input-style" placeholder="Emailinizi girin..." value="${user.email}"></span>
        <span class="text-end">
        <button class="guncelle btn" > Guncelle </button>
        <button class="sil btn"> Sil </button>
        </span>`
            }
        })
};

usersList()

function createUser() {

    let data = {
        first_name:document.querySelector('#first-name').value,
        last_name:document.querySelector('#last-name').value,
        email:document.querySelector('#email').value
    };
    
    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(data=> {
        const tableInput = document.querySelector('.table-input');
        tableInput.innerHTML +=`
        <span><input type="text" class="input-style" placeholder="Adinizi girin..."  value="${data.first_name}"></span>
        <span><input type="text" class="input-style" placeholder="Soyadinizi girin..." value="${data.last_name}"></span>
        <span><input type="text" class="input-style" placeholder="Emailinizi girin..." value="${data.email}"></span>
        <span class="text-end">
        <button class="guncelle btn" onclick="updateUser(${data.id})"> Guncelle </button>
        <button class="sil btn" onclick="deleteUser(${data.id})"> Sil  </button>
        </span>`
    })
};

createUser();

function deleterUser(){
    usersList()
}

function updateUser(){
    setTimeout(() => {
    createUser();
    },500)
}










