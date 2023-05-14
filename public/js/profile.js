const { application } = require("express");

const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create post')
        }
    }
}


const deleteBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id;')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/posts/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete post')
        }
    }
};


document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler)

document
    .querySelector('.post-list')
    .addEventListener('click', deleteBtnHandler)