const newCommentHandler = async (event) => {
    event.preventDefault();
    try {
        const body = document.querySelector('#comment-body').value.trim();
        const postId = event.target.getAttribute('data-id')

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