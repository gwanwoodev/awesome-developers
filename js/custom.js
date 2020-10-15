document.addEventListener("DOMContentLoaded", function(event) {

    var form = document.getElementById("customForm")
    var submitButton = document.getElementById("submitButton");
    var name, email, message;
    document.querySelector("#button-addon2").addEventListener("click", function(event) {
        alert("아직 구현되지 않은 기능입니다.");
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        name = document.getElementById("name");
        email = document.getElementById("email");
        message = document.getElementById("message");
        var data = new FormData();
        data.append("name", name.value);
        data.append("_replyto", email.value);
        data.append("message", message.value);
        ajax(form.method, form.action, data, success, error);
    });

    function success() {
        alert("소중한 메일 감사 드립니다. 빠르게 회신 드리겠습니다.");
        form.reset();
    }

    function error() {
        alert("오류로 인해 메일이 전송되지 않았습니다.");
    }

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            }else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
});