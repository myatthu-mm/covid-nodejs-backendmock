var jsonCountry = require("../Json/country.json");
class countryController {

    getAllCountry(request, response) {
        return response.status(200).send(jsonCountry);

    }
    getCountry(request, response) {
        const Icountry = String(request.params.country);
        jsonCountry.map((country) => {
            if (country.country === Icountry) {
                return response.status(200).send({
                    country: country.country,
                    cases: country.cases,
                    todayCases: country.todayCases,
                    deaths: country.deaths,
                    todayDeaths: country.todayCases,
                    recovered: country.recovered,
                    active: country.active,
                    critical: country.critical,
                    casesPerOneMillion: country.casesPerOneMillion,
                    deathsPerOneMillion: country.deathsPerOneMillion,
                    // Success: 'success',
                });
            }
        });
        return response.status(404).send({
            success: 'false',
            message: ` ${country} not found!`,
        });
    }
}

const cc = new countryController();
export default cc;



// createTodo(request, response) {
//     if (!request.body.title) {
//         return response.status(400).send({
//             success: 'false',
//             message: 'title is required',
//         });
//     } else if (!request.body.description) {
//         return response.status(400).send({
//             success: 'false',
//             message: 'description is required',
//         });
//     }
//     const todo = {
//         id: db.length + 1,
//         title: request.body.title,
//         description: request.body.description,
//     };
//     db.push(todo);

//     return response.status(201).send({
//         success: 'true',
//         message: 'todo added successfully',
//         todo,
//     });
// }





// updateTodo(request, response) {
//     const id = Number(request.params.id);
//     let todoFound;
//     let itemIndex;

//     db.map((todo, index) => {
//         if (todo.id === id) {
//             todoFound = todo;
//             itemIndex = index;
//         }
//     });

//     if (!todoFound) {
//         return response.status(404).send({
//             success: 'false',
//             message: 'todo not found',
//         });
//     }

//     if (!request.body.title) {
//         return response.status(400).send({
//             success: 'false',
//             message: 'title is required',
//         });
//     } else if (!request.body.description) {
//         return response.status(400).send({
//             success: 'false',
//             message: 'description is required'
//         });
//     }

//     const updatedTodo = {
//         id: todoFound.id,
//         title: request.body.title || todoFound.title,
//         description: request.body.description || todoFound.descirption
//     };

//     db.splice(itemIndex, 1, updatedTodo);

//     return response.status(201).send({
//         success: 'true',
//         message: 'todo added successfully',
//         updatedTodo
//     });
// }


// deleteTodo(request, response) {
//     const id = Number(request.params.id);
//     let todoFound;
//     let itemIndex;

//     db.map((todo, index) => {
//         if (todo.id === id) {
//             todoFound = todo;
//             itemIndex = index;
//         }

//     });

//     if (!todoFound) {
//         return response.status(404).send({
//             success: 'false',
//             message: 'not found'

//         });
//     }
//     db.splice(index, 1);

//     return response.status(200).send({
//         success: 'true',
//         message: 'todo deleted successfully'
//     });
// }