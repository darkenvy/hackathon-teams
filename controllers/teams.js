var express = require('express');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

// DELETE entry
router.delete('/:name', function(req, res) {
  teamService.deleteTeam(req.params.name);
  res.send({ msg: 'deleted'});
});

// GET /teams/:name/edit
router.get('/:name/edit', function(req, res) {
  var teamToEdit = teamService.getTeam(req.params.name);

  res.render('teams/edit.ejs', { team: teamToEdit });

})

// PUT /teams/:name route
router.put('/:name', function(req, res) {
  teamService.editTeam( req.params.name, req.body);
  res.send({ msg: 'edited'});
});

module.exports = router;
