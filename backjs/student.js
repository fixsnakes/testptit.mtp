var arrays = [
    {name:"Bài Thi Số 1", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 2", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 3", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 4", type_test:"Luyện Tập", type_class:"test train-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 5", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 6", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 7", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 8", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 9", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 10", type_test:"Luyện Tập", type_class:"test train-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 11", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 12", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 13", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 14", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 15", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 16", type_test:"Luyện Tập", type_class:"test train-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 17", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 18", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 19", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 20", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 21", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 22", type_test:"Luyện Tập", type_class:"test train-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 23", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 24", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 25", type_test:"Luyện Tập", type_class:"test train-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 26", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 27", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 28", type_test:"Luyện Tập", type_class:"test train-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 29", type_test:"Giữa Kỳ", type_class:"test sem-type", date:"24/03/2024",status:"Chưa Mở", status_class:"btndo btn-unavailable",result:"--/--"},
    {name:"Bài Thi Số 30", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    {name:"Bài Thi Số 31", type_test:"Cuối Kỳ", type_class:"test final-type", date:"Tự Do",status:"Bắt Đầu", status_class:"btndo btn-available",result:"--/--"},
    

];


for(var i = 0; i < arrays.length; i++){
    table_test = document.getElementById("table-test");
    table_test.innerHTML += `
    <tr>
                            <td><p class="test date">${arrays[i].name}</p></td>
                            <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                            <td><p class="test date">${arrays[i].date}</p></td>
                            <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                            <td>--/--</td>
    </tr>
    `

};





var SelectField = document.getElementById("SelectField");
var SelectText = document.getElementById("SelectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");

SelectField.onclick = function(){
    list.classList.toggle("hide");
}
for(option of options){
    option.onclick = function(){
        if(this.textContent.includes("Luyện Tập")){
            sorttable(this.textContent);
            SelectText.innerHTML = `<i id="train" class="fa-solid fa-circle"></i>`;
            SelectText.innerHTML += `<p>Luyện Tập</p>`;
        }
        else if(this.textContent.includes("Giữa Kỳ")){
            sorttable(this.textContent);
            SelectText.innerHTML = `<i id="sem" class="fa-solid fa-circle"></i>`;
            SelectText.innerHTML += `<p>Giữa Kỳ</p>`;
        }
        else if(this.textContent.includes("Cuối Kỳ")){
            sorttable(this.textContent);
            SelectText.innerHTML = `<i id="final" class="fa-solid fa-circle"></i>`;
            SelectText.innerHTML += `<p>Cuối Kỳ</p>`;
        }
        else{
            sorttable(this.textContent);
            SelectText.innerHTML = `<i id="alltest" class="fa-solid fa-circle"></i>`;
            SelectText.innerHTML += `<p>Tất Cả Bài Thi</p>`;
        }
        list.classList.toggle("hide");
    }
}



var SelectFieldSatus = document.getElementById("SelectFieldSatus");
var selectStatus = document.getElementById("selectStatus");
var optionsstatus = document.getElementsByClassName("options-status");
var liststatus = document.getElementById("list-status");

SelectFieldSatus.onclick = function(){
    liststatus.classList.toggle("hide-status");
}
for(option1 of optionsstatus){
    option1.onclick = function(){
        if(this.textContent.includes("Chưa Mở")){
            sorttable_status("Chưa Mở")
            selectStatus.innerHTML = `<i id="train" class="fa-solid fa-circle"></i>`;
            selectStatus.innerHTML += `<p>Chưa Mở</p>`;
        }
        else if(this.textContent.includes("Tự Do")){
            sorttable_status("Bắt Đầu");
            selectStatus.innerHTML = `<i id="sem" class="fa-solid fa-circle"></i>`;
            selectStatus.innerHTML += `<p>Tự Do</p>`;
        }
        else{
            selectStatus.innerHTML = `<i id="allstatus" class="fa-solid fa-circle"></i>`;
            selectStatus.innerHTML += `<p>Trạng Thái</p>`;
        }
        liststatus.classList.toggle("hide-status");
    }
}

function sorttable(typetest){
    table_test = document.getElementById("table-test");
    table_test.innerHTML = '';
    for(var i = 0; i < arrays.length; i++){
        if(typetest.includes(arrays[i].type_test)){
            table_test = document.getElementById("table-test");
            table_test.innerHTML += `
            <tr>
                                    <td><p class="test date">${arrays[i].name}</p></td>
                                    <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                    <td><p class="test date">${arrays[i].date}</p></td>
                                    <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                    <td>--/--</td>
            </tr>
            `
        }
        if(typetest.includes("Tất Cả Bài Thi")){
            for(var i = 0; i < arrays.length; i++){
                    table_test = document.getElementById("table-test");
                    table_test.innerHTML += `
                    <tr>
                                            <td><p class="test date">${arrays[i].name}</p></td>
                                            <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                            <td><p class="test date">${arrays[i].date}</p></td>
                                            <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                            <td>--/--</td>
                    </tr>
                    `

             }
       
    
        };    
    }
}


function sorttable_status(statustest){
    var selectStatusDiv = document.getElementById("SelectText");

// Lấy phần tử <p> bên trong div
    var pElement = selectStatusDiv.querySelector("p");

// Lấy nội dung văn bản của phần tử <p>
    var statusText = pElement.textContent;
    console.log(statusText);
    table_test = document.getElementById("table-test");
    table_test.innerHTML = '';
    for(var i = 0; i < arrays.length; i++){
        if(statusText.includes(arrays[i].type_test) && statustest.includes(arrays[i].status)){
            table_test = document.getElementById("table-test");
            table_test.innerHTML += `
            <tr>
                                    <td><p class="test date">${arrays[i].name}</p></td>
                                    <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                    <td><p class="test date">${arrays[i].date}</p></td>
                                    <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                    <td>--/--</td>
            </tr>
            `
        };
        if(statusText.includes("Tất Cả Bài Thi") && statustest.includes(arrays[i].status)){
            table_test = document.getElementById("table-test");
            table_test.innerHTML += `
            <tr>
                                    <td><p class="test date">${arrays[i].name}</p></td>
                                    <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                    <td><p class="test date">${arrays[i].date}</p></td>
                                    <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                    <td>--/--</td>
            </tr>
            `
        };
    };
}


document.getElementById("search-tool").addEventListener('input',filterTable);

function filterTable(){
    document.getElementById("table-test").innerHTML = '';
    var searchInput = document.getElementById("search-tool");
    var filter = searchInput.value.toLowerCase();
    var table = document.getElementById("table-test");
    for(var i = 0; i < arrays.length; i++){
        if(arrays[i].name.toLowerCase().includes(filter.toLowerCase())){
            table.innerHTML += `
            <tr>
                                    <td><p class="test date">${arrays[i].name}</p></td>
                                    <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                    <td><p class="test date">${arrays[i].date}</p></td>
                                    <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                    <td>--/--</td>
            </tr>
            `
        }
        if(arrays[i].name.toLowerCase() === (filter.toLowerCase())){
            table.innerHTML = '';
            table.innerHTML += `
            <tr>
                                    <td><p class="test date">${arrays[i].name}</p></td>
                                    <td><p class="${arrays[i].type_class}">${arrays[i].type_test}</p></td>
                                    <td><p class="test date">${arrays[i].date}</p></td>
                                    <td><a href="test.html"><p class="${arrays[i].status_class}">${arrays[i].status}</p></a></td>
                                    <td>--/--</td>
            </tr>
            `
            break;
        }
    }
}