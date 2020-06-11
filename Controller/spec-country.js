var jsonSpecify = require("../Json/specific-country.json");
class specifyController {

    getSpecifyData(request, response) {
        return response.status(200).send({
            data: jsonSpecify
        })

    }
    getSpecifyCountry(request, response) {
        const country = String(request.params.country);
        console.log(request.params.country);

        jsonSpecify.map((data) => {
            if (data.country === country) {
                return response.status(200).send({ data: data });
            }
        });
        return response.status(404).send({
            success: 'false',
            message: `${country} not found`,
        });
    }
}
const sc = new specifyController();
export default sc;