const { Datos } = require("../db");

async function getSurveyOrder(req, res) {
    // console.log('llegue');
    try {
        const { id } = req.params;

        let survey;

        if (id === 'all') {
            survey = await Datos.findAll();
        } else {
            survey = await Datos.findAll({
                where: { how_found: id } 
            });
        }

        if (survey.length === 0) {
            
            return res.status(200).json([]);
        }

        return res.status(200).json(survey);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getSurveyOrder
};
