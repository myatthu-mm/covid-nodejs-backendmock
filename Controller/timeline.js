var jsonTimeline = require("../Json/timeline.json");

class timeController {

    getAllDate(request, response) {
        return response.status(200).send(jsonTimeline);

    }
}
const tc = new timeController();
export default tc;