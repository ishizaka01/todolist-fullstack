const validateFieldTitle= (req, resp, next) => {
    const {body} = req;
    if(body.title == undefined){
       return resp.status(400).json({message: 'The field "title" is required'});
    }
    if (body.title == '') {
       return  resp.status(400).json({message: 'title cannot be empty'});
    };

    next()
};

const validateFieldStatus = (req, resp, next) => {
    const {body} = req;
    if(body.status == undefined){
       return resp.status(400).json({message: 'The field "title" is required'});
    }
    if (body.status == '') {
       return  resp.status(400).json({message: 'title cannot be empty'});
    };

    next()
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};