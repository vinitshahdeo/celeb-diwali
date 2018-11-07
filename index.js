var arr = require('./data/data.json');

function randomInt(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports.getRandomWish = function () { 
    var index = randomInt(0,99);
    return arr[index].wish;
};


module.exports.sendRandomWish = function (name) { 
    var index = randomInt(0,99);
    return arr[index].wish + '\nFrom - '+ name;
};

module.exports.sendDiwaliWish = function(to,from){
    var index = randomInt(0,99);
    var message = 'Hey '+to+',\n'+arr[index].wish+'\nLove Always, '+from;
    return message;
}