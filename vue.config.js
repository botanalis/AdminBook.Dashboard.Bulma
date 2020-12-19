
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    filenameHashing: false,
    css:{
        extract: true
    }
};
