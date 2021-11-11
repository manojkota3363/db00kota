var valley = require("../models/valley");



// List of all Costumes

exports.valley_list = async function (req, res) {

    try {

        thevalley = await valley.find();

        res.send(thevalley);

    } catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};



// for a specific Costume.

exports.valley_detail = function (req, res) {

    res.send("NOT IMPLEMENTED: fan detail: " + req.params.id);

};



// Handle Costume create on POST.

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



// Handle Costume delete form on DELETE.

exports.valley_delete = function (req, res) {

    res.send("NOT IMPLEMENTED: fan delete DELETE " + req.params.id);

};



// Handle Costume update form on PUT.

exports.valley_update_put = function (req, res) {

    res.send("NOT IMPLEMENTED: valley update PUT" + req.params.id);

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