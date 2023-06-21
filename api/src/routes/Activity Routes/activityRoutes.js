const Router = require('express');
const { Country, Activity } = require('../../db');
const { createActivity } = require('../../Controllers/index')

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { countries, name, difficulty, duration, season } = req.body;
        const response = await createActivity(countries, name, difficulty, duration, season);

        res.status(200).send(response)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await Activity.findAll()
        res.send(response)
    } catch (error) {
        res.status(404).send({ error: "error.message" })
    }
});

module.exports = router