const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    console.log("New comment request received")

    try {
        const newComment = await Comment.create({
            body: req.body.body,
            userId: req.session.userId,
            postId: req.body.postId
        });

        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router