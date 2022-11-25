import parser from "body-parser";

const jsonParser = parser.json();
const urlencodedParser = parser.urlencoded({ extended: true });
const bodyParser = [jsonParser, urlencodedParser];

export default bodyParser;
