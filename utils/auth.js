const withAuth = (req, res, next) => {

    if (!req.seesion.logged_in) {
        res.redirect('login');
    } else {
        next()
    }
};

module.exports = withAuth;