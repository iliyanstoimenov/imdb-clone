import countries from '../../../../../utils/countries'
import './form.css'

const feedbackForm = `
    <div class="form-container">
        <form action="">
            <div>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
            </div>
            <div>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
            </div>
            <div>
                <label for="country">Country</label>
                <select id="country" name="country" class=country>
                    <option>Please Select Country...</option>
                    ${countries.map(item => `<option>${item}</option>`)}
                </select>
            </div>
            <div>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            </div>
            <input type="submit" value="Submit">
        </form>
    </div>
`

function stringToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

export default stringToElement(feedbackForm);