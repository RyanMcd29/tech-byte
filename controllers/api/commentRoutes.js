const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', async (req, res) => {
    console.log("New comment request received" , req.body.postId, req.session.user_id, req.session.logged_in)

    if (!req.session.logged_in) {
        res.redirect('/login')
    }

    try {

        if (req.body.body && req.session.user_id && req.body.postId) {
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: req.body.postId
        });

        res.status(200).json(newComment)
    }
    } catch (err) {
        res.status(400).json(err);
    }
    
})

module.exports = router