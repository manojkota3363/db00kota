var express = require('express');
const valley_controllers= require('../controllers/valley');  
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var valley_controller = require('../controllers/valley');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
router.get('/', valley_controllers.valley_view_all_Page );  
/// COSTUME ROUTES ///
// POST request for creating a Costume.  
router.post('/valley', valley_controller.valley_create_post);
// DELETE request to delete valley.
router.delete('/valley/:id', valley_controllers.valley_delete);
// PUT request to update valley.
router.put('/valley/:id',
valley_controllers.valley_update_put);
// GET request for one Costume.
router.get('/valley/:id', valley_controllers.valley_detail);
// GET request for list of all Costume items.
router.get('/valley', valley_controllers.valley_list);

module.exports = router;