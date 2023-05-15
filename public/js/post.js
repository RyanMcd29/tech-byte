const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log('saving new comment')

    try {
        const body = document.querySelector('#comment-body').value.trim();
        const postId = event.target.getAttribute('data-id')

        console.log(postId)

        if (body) {
            const response = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({ body, postId }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                document.location.replace(`/post/${postId}`)
            }
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler)