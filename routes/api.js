import express from 'express';
import cc from '../Controller/country';
import tc from '../Controller/timeline';
import sc from '../Controller/spec-country';
import ac from '../Controller/cases';
/** import routes */

const router = express.Router();

/** use router */
router.get('/api/v1/countries', cc.getAllCountry);
router.get('/api/v1/countries/:country', cc.getCountry);

router.get('/api/v1/timeline/global', tc.getAllDate);
router.get('/api/v1/timeline/:country', sc.getSpecifyCountry);

router.get('/api/v1/spec/all', sc.getSpecifyData);

router.get('/api/v1/all', ac.getCases);


// router.post('/api/allTodo', tc.createTodo);
// router.put('/api/allTodo', tc.updateTodo);
// router.delete('/api/allTodo/:id', tc.deleteTodo);
export default router;