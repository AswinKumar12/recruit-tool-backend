const { models: { candidates } } = require('./../models');
const { head } = require('lodash');

exports.getAllCandidates = (req, res) => {
  candidates.findAll()
    .then((data) => {
      res.status(200).send({ success: true, data });
    })
    .catch((error) => {
      console.log(error, 'error')
      res.status(200).send({
        success: false,
        error: 'Some error occurred while retrieving',
      });
    });
};

exports.getCandidateDetailsById = (req, res) => {
  const { id } = req.params;
  candidates.findOne({ where: { candidate_id: id } })
    .then((data) => {
      res.status(200).send({ success: true, data });
    })
    .catch((error) => {
      console.log(error, 'error')
      res.status(200).send({
        success: false,
        error: 'Some error occurred while retrieving',
      });
    });
};

exports.addCandidate = (req, res) => {
  candidates.create(req.body)
    .then((data) => {
      res
        .status(200)
        .send({ success: true, data, message: 'Successfully Created' });
    })
    .catch((err) => {
      res.status(200).send({
        success: false,
        error: err,
      });
    });
};

exports.updateCandidate = (req, res) => {
  const { id } = req.params;
  candidates.update(req.body, { where: { candidate_id: id } })
    .then((data) => {
      res.status(200).send({
        success: true,
        updateId: data,
        message: 'Updated Successfully',
      });
    })
    .catch((err) => {
      res.status(200).send({
        success: false,
        error: err,
      });
    });
};

exports.deleteCandidate = (req, res) => {
  const { id } = req.params;
  candidates.destroy({ where: { candidate_id: id } })
    .then((data) => {
      res.status(200).send({
        success: true,
        message: 'Deleted Successfully',
      });
    })
    .catch((err) => {
      res.status(200).send({
        success: false,
        error: err,
      });
    });
};
