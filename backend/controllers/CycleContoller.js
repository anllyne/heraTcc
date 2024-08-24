const Cycle = require('../models/cycle');

exports.addCycle = async (req, res) => {
  const { uid, dataInico, dataFim, sintomas } = req.body;

  try {
    const cycle = new Cycle(uid, dataInico, dataFim, sintomas);
    await cycle.save();
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

exports.getCycles = async (req, res) => {
  const { uid } = req.params;

  try {
    const cycles = await Cycle.getAllCycles(uid);
    res.status(200).send(cycles);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
