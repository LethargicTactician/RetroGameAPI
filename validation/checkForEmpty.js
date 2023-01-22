//functions that checks if the fields are empty or null

const ifEmpty = field => {
    try{
        let result = false;

        if(
            field === undefined ||
            field === null||
            (typeof field === "stirng" && field.trim().length ===0)||
            (typeof field === "object" && Object.keys(field).length === 0)
        )
        result = true;
        return result;
    } catch(err){
        return(err);
    }

};
module.exports = ifEmpty;