const ValidatorLogin = (options) => {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    let selectorRules = {};

    function validate(inputElement, rule) {
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        let errorMessage;

        //Lấy ra các rules của selector
        let rules = selectorRules[rule.selector];

        //Lặp qua các rule để kiểm tra
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
            errorElement.textContent = errorMessage;
        } else {
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
            errorElement.textContent = '';
        }

        return !errorMessage;
    }

    //Lấy element của form cần validate
    let formElement = document.querySelector(options.form);

    if (formElement) {

        formElement.onsubmit = function (e) {
            e.preventDefault();

            let isFormValid = true;

            //Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                let inputElement = formElement.querySelector(rule.selector);
                let isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {

                    let enableInputs = formElement.querySelectorAll('[name]');

                    // eslint-disable-next-line array-callback-return
                    let formValues = Array.from(enableInputs);
                    let user = {
                        email: formValues[0].value,
                        password: formValues[1].value
                    };

                    options.onSubmit(user);
                }
                // Trường hợp submit với mặc định của html
                else {
                    formElement.submit();
                }
            }

        }

        //Lặp qua mỗi rule và xử lý (lắng nghe các sự kiện)
        options.rules.forEach(function (rule) {

            //Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            let inputElement = formElement.querySelectorAll(rule.selector);

            Array.from(inputElement).forEach(function (inputElement) {
                //Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.login-form-message');
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    errorElement.textContent = '';
                }
            });
        });

    }
}

ValidatorLogin.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    };
}

ValidatorLogin.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Mật khẩu có tối thiểu ${min} kí tự`
        }
    };
}

export default ValidatorLogin