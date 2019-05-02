/**
 * Calculate the size of a forms data by generating a string that emulates
 * php://input as closely as possible.
 * @param {HTMLFormElement} form The form to use.
 * @returns {int} The length of the rawPostData.
 */
function calculateFormDataSize(form)
{
	var rawPostData = '';

	var inputs = form.querySelectorAll('input[name], textarea[name], select[name]');

	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		var inputName = input.name;
		var isArray = false;

		if (input.disabled) {
			continue;
		}

		if (inputName.substring(inputName.length - 2) == '[]') {
			isArray = true;
		}

		inputName = encodeURIComponent(inputName);

		switch (input.nodeName) {
			case 'INPUT':
				switch (input.type) {
					case 'checkbox':
					case 'radio':
						if (input.checked) {
							rawPostData += inputName + '=' + encodeURIComponent(input.value).replace(/%20/g, '+') + '&';
						}
						break;

					case 'file':
						if (input.files.length > 0) {
							for (var j = 0; j < input.files.length; j++) {
								rawPostData += inputName + '=' + encodeURIComponent(input.files[j].name).replace(/%20/g, '+') + '&';
							}
						} else {
							rawPostData += inputName + '=&';
						}
						break;

					case 'button':
					case 'color':
					case 'date':
					case 'datetime-local':
					case 'email':
					case 'hidden':
					case 'month':
					case 'number':
					case 'password':
					case 'range':
					case 'search':
					case 'submit':
					case 'tel':
					case 'text':
					case 'time':
					case 'url':
					case 'week':
						rawPostData += inputName + '=' + encodeURIComponent(input.value).replace(/%20/g, '+') + '&';
						break;
				}
				break;

			case 'TEXTAREA':
				rawPostData += inputName + '=' + encodeURIComponent(input.value).replace(/%20/g, '+') + '&';
				break;

			case 'SELECT':
				for (var j = 0; j < input.selectedOptions.length; j++) {
					rawPostData += inputName + '=' + encodeURIComponent(input.selectedOptions[j].value).replace(/%20/g, '+') + '&';

					if (!isArray) {
						break;
					}
				}
				break;
		}
	}

	if (rawPostData.length > 0) {
		rawPostData = rawPostData.substring(0, rawPostData.length - 1);
	}

	return rawPostData.length;
}
