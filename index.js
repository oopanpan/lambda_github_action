const _ = require('lodash');

exports.handler = async (event) => {
    const max = 999;
    const val = _.random(max);
    const response = {
		statusCode: 200,
		body: JSON.stringify({'message': `The random value smaller than ${max} is: ${val}`})
    };
    return response;
}