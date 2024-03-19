
//#region test.js


var question_data = [
    {number:"Câu 1", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"1",user_answer:""},
    {number:"Câu 2", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"2",user_answer:""},
    {number:"Câu 3", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"3",user_answer:""},
    {number:"Câu 4", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"2",user_answer:""},
    {number:"Câu 5", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"3",user_answer:""},
    {number:"Câu 6", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"3",user_answer:""},
    {number:"Câu 7", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"2",user_answer:""},
    {number:"Câu 8", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"1",user_answer:""},
    {number:"Câu 9", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"4",user_answer:""},
    {number:"Câu 10", content:"Bạn nghĩ gì về khái niệm tình yêu đích thực?",answer_choice:["Your only limit is you.","Believe in yourself","It's not about how hard you hit","The only way to achieve the impossible is to believe it is possible"],answer:"1",user_answer:""},

];


// add question

var ele_quizcontainer = document.getElementById("quiz-all");

ele_quizcontainer.innerHTML = '';


for(var i = 0; i < question_data.length; i++){
    ele_quizcontainer.innerHTML += 
    `
    <div class="quiz-1">
        <p class="quiz-number" id="quiz-number${i+1}">${question_data[i].number}:</p>
        <p id="quiz-content">Bạn nghĩ gì về khái niệm tình yêu đích thực?</p>
        <div class="form-box" id="form-box-${i+1}">
            <label>
                <input type="radio" name="${i+1}" value="1" onclick="changeColor('${i+1}')">
                <div class="circle"></div>
                <span>"Your only limit is you."</span>
            </label>
            <label>
                <input type="radio" name="${i+1}" value="2" onclick="changeColor('${i+1}')">
                <div class="circle"></div>
                <span>Believe in yourself</span>
            </label>
            <label>
                <input type="radio" name="${i+1}" value="3" onclick="changeColor('${i+1}')">
                <div class="circle"></div>
                <span>It's not about how hard you hit</span>
            </label>
            <label>
                <input type="radio" name="${i+1}" value="4" onclick="changeColor('${i+1}')">
                <div class="circle"></div>
                <span>The only way to achieve the impossible is to believe it is possible</span>
            </label>
        </div>
    </div>
    `
}

//add button






function changeColor(id){
    var element = document.getElementById(id);
    element.style.backgroundColor = "#99cc99";
}



function countdownTimer() {
    // Lấy phần tử p theo id
    var countdownElement = document.getElementById("time-countdown");

    // Lấy thời gian ban đầu từ nội dung của phần tử
    var initialTime = countdownElement.textContent;
    var timeArray = initialTime.split(":");
    var hours = parseInt(timeArray[0], 10);
    var minutes = parseInt(timeArray[1], 10);
    var seconds = parseInt(timeArray[2], 10);

    // Tính tổng số giây
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Thiết lập chu kỳ đếm ngược
    var countdownInterval = setInterval(function () {
        // Giảm tổng số giây
        totalSeconds--;

        // Tính lại giờ, phút, giây
        var updatedHours = Math.floor(totalSeconds / 3600);
        var updatedMinutes = Math.floor((totalSeconds % 3600) / 60);
        var updatedSeconds = totalSeconds % 60;

        // Hiển thị giá trị mới trong phần tử
        countdownElement.textContent = formatTime(updatedHours) + ":" + formatTime(updatedMinutes) + ":" + formatTime(updatedSeconds);

        // Kiểm tra nếu thời gian đếm ngược đã đạt đến 0
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            alert("Hết giờ Làm Bài");
            window.location.href = "result.html";
        }
    }, 1000);

    // Hàm để định dạng số thành chuỗi có 2 chữ số (thêm 0 phía trước nếu cần)
    function formatTime(value) {
        return value < 10 ? "0" + value : value;
    }
}



countdownTimer();

function scrollToDiv(id) {
    // Lấy vị trí của div mục tiêu
    var targetDiv = document.getElementById(id);
    var targetDivPosition = targetDiv.offsetTop;

    // Di chuyển đến vị trí của div mục tiêu
    window.scrollTo({
        top: targetDivPosition,
        behavior: 'smooth' // Sử dụng 'smooth' để có hiệu ứng cuộn mượt
    });
}

function checkdone(){
    for(var i = 0; i < question_data.length; i++){
        var listanswer = document.getElementsByName((i+1).toString());
        var check = 0;
        for(ele of listanswer){
            if(ele.checked){
                check = 1;
            }
        }
        if (check === 0){
            return i+1;
        }
    }
    return 0
}

function gotoresult(){
    if(checkdone()!=0){
        alert(`Bạn Chưa Trả Lời Câu Hỏi ${checkdone()}`);
    }
    else{
    //window.location.href = "result.html";
        Swal.fire({
        title: '"Xác Nhận Nộp Bài?"',
        showCancelButton: true,
        confirmButtonText: 'Hủy',
        cancelButtonText: 'Đồng ý',
        reverseButtons: true,
        icon: 'warning'
        }).then((result) => {
        if (result.isConfirmed) {
            //
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            var correct_ques = 0;
            var wrong_ques = 0;
            for(var i = 0; i < question_data.length; i++){
                var listanswer = document.getElementsByName((i+1).toString());
                var check = 0;
                for(ele of listanswer){
                    if(ele.checked){
                        check = 1;
                        question_data[i].user_answer = `${ele.value}`;
                        if(ele.value === question_data[i].answer){
                            correct_ques += 1;
                        }
                        else{
                            wrong_ques += 1;
                        }
                    }
                }
                if (check === 0){
                    wrong_ques += 1;
                }
            }
            localStorage.setItem('wrong_cnt',wrong_ques);
            localStorage.setItem('correct_cnt',correct_ques);
            var question_data_string = JSON.stringify(question_data);

            // Lưu chuỗi JSON vào localStorage với key là "question_data"
            localStorage.setItem("question_data", question_data_string);
            window.location.href = 'result.html';
        }
        });
        
    }
    
}



var ele_quizcontainer = document.getElementById("box-question");
console.log(ele_quizcontainer);
ele_quizcontainer.innerHTML = '';
for(var i = 0; i < question_data.length; i++){
    ele_quizcontainer.innerHTML +=`<button id="${i+1}" onclick="scrollToDiv('quiz-number${i+1}')">${i+1}</button>`;
};



