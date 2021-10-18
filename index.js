import * as _ from 'lodash';

export const handler = async () => {
    const max = 10;
    const val = _.random(max);
    const response = {
        statusCode: 200,
        body: `The random value (max: ${max}) is: ${val}`,
    }

    return response;
}