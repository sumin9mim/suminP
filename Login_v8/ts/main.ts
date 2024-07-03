document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    const input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.validate-input .input100') as NodeListOf<HTMLInputElement>;
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const messageDiv = document.getElementById('message') as HTMLDivElement;

    loginForm.addEventListener('submit', function(event: Event) {
        let check = true;

        for (let i = 0; i < input.length; i++) {
            if (validate(input[i]) === false) {
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

    input.forEach(function(element) {
        element.addEventListener('focus', function() {
            hideValidate(this);
        });
    });

    function validate(input: HTMLInputElement): boolean {
        if (input.getAttribute('type') === 'email' || input.getAttribute('name') === 'email') {
            if (input.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if (input.value.trim() === '') {
                return false;
            }
        }
        return true; // 모든 경우에 대해 반환 값 설정
    }

    function showValidate(input: HTMLInputElement) {
        const thisAlert = input.parentElement;
        if (thisAlert) {
            thisAlert.classList.add('alert-validate');
        }
    }

    function hideValidate(input: HTMLInputElement) {
        const thisAlert = input.parentElement;
        if (thisAlert) {
            thisAlert.classList.remove('alert-validate');
        }
    }

    function login() {
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (username === 'admin' && password === '1234') {
            messageDiv.textContent = `Welcome, ${username}!`;
            messageDiv.style.color = 'green';
        } else {
            messageDiv.textContent = 'Invalid username or password.';
            messageDiv.style.color = 'red';
        }
    }
});
