var valley = require("../models/valley");



// List of all valleys

exports.valley_list = async function (req, res) {

    try {

        thevalley = await valley.find();

        res.send(thevalley);

    } catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};



// for a specific valley. 
exports.valley_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await valley.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 




// Handle valley create on POST.

exports.valley_create_post = async function (req, res) {

    console.log(req.body);

    let document = new valley();

    document.valley_type = req.body.valley_type;

    document.size = req.body.size;

    document.cost = req.body.cost;

    try {

        let result = await document.save();

        res.send(result);

    } catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};
 // Handle building the view for creating a valley. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.valley_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('valleycreate', { title: 'valley Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// Handle a show one view with id specified by query 
exports.valley_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await valley.findById( req.query.id) 
        res.render('valleydetail',  
{ title: 'valley Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle valley delete on DELETE. 
exports.valley_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await valley.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle valley update form on PUT. 
exports.valley_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await valley.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.valley_type)  
               toUpdate.valley_type = req.body.valley_type;         
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.cost) toUpdate.age = req.body.age; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 



// VIEWS

// Handle a show all view

exports.valley_view_all_Page = async function (req, res) {

    try {

        thevalley = await valley.find();

        res.render("valley", { title: "valley Search Results", results: thevalley });

    } catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};
// Handle building the view for updating a valley. 
// query provides the id 
exports.valley_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await valley.findById(req.query.id) 
        res.render('valleyupdate', { title: 'valley Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.valley_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await valley.findById(req.query.id) 
        res.render('valleydelete', { title: 'valley Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 