const validateForm = (form) => {

    const firstName = form.elements[0]
    const lastName = form.elements[1]

    const alert = (string) => `<div role="alert" class=validation>${string}</div>`;
    const div = (msg) => new DOMParser().parseFromString(alert(msg), 'text/html').body.childNodes[0];

    const insertDiv = (node, text) => {
        return node.parentNode.insertBefore(div(text), node.nextSibling);
    }

    form.onsubmit = () => {
        if (firstName.value === null || firstName.value === "") {
            insertDiv(firstName, "First Name can't be blank")
            return false;
        } else if (lastName.value === null || lastName.value === '') {
            insertDiv(lastName, "Last Name can't be blank")
            return false;
        } else if (firstName.value.length < 5) {
            insertDiv(firstName, "First Name can't be less than 5 letters")
            return false;
        }
    }
};

export default validateForm;

