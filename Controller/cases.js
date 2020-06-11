var jsonCase = require("../Json/cases.json");
class caseController {

    getCases(request, response) {
        return response.status(200).send(jsonCase);

    }
}
const ac = new caseController();
export default ac;