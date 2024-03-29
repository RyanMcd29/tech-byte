const router = require('express').Router()
const { User, Post, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {

        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }   
            ]
        })

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return;
    }

    res.render('login')
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return;
    }

    res.render('signup')
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Post }]
        });

        const user = userData.get({ plain: true });

        console.log("user", user)
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['body', 'user_id', 'time_created'],
                    include: [ 
                        {
                            model: User,
                            attributes: ['name']
                        }
                    ]
                },
            ],
        })

        const post = postData.get({ plain: true });
        console.log(post.comments[0])
        res.render("post", {
            ...post,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;