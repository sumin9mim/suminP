
// (function ($) {
//     "use strict";

//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');
//     const messageDiv = document.getElementById('message');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }
    
    

// })(jQuery);

(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    // $('.validate-form').on('submit', function(event) {
    //     var check = true;

    //     for(var i = 0; i < input.length; i++) {
    //         if(validate(input[i]) == false) {
    //             showValidate(input[i]);
    //             check = false;
    //         }
    //     }
    $('#loginButton').on('click', function(event) {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (!check) {
            event.preventDefault(); // 유효성 검사 실패 시 폼 제출 방지
        } else {
            event.preventDefault(); // 유효성 검사 성공 시에도 폼 제출 방지하고 로그인 검증 처리
            login();
        }
    });
    $('#registerButton').on('click', function(event) {
        event.preventDefault(); // 기본 폼 제출 방지
        newRegister();
    });

    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if($(input).val().trim() == '') {
                return false;
            }
        }
        return true; // 모든 경우에 대해 반환 값 설정
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    function login() {
        const username = $('#username').val();
        const password = $('#password').val();
        const messageDiv = $('#message');

        if (username === 'admin' && password === '1234') {
            messageDiv.text(`Welcome, ${username}!`).css('color', 'green');
        } else {
            messageDiv.text('Invalid username or password.').css('color', 'red');
        }
    }
    function newRegister() {
        var userName = $("#username").val(); // #username의 값을 가져옴
        var newP = $("<p></p>").text(userName); // 새 <p> 요소를 만들고 텍스트를 설정
        
        $("#nameList").append(newP); // #nameList에 새 <p> 요소를 추가
        $("#username").val(''); // #username 입력 필드를 비움
    };
})(jQuery);
