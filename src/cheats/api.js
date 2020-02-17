const CAT_API_KEY = 'fe6d591f-8fc6-4df8-94e0-8e121f845d2b'

export const get = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?mime_types=png')

    if (response.status === 200) {
        const cats = await response.json()
        console.log(cats[0])
        return cats[0]
    }
}

const postVote = async (image_id, value) => {
    return await fetch('https://api.thecatapi.com/v1/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': CAT_API_KEY,
        },
        body: JSON.stringify({
            image_id,
            value,
        })
    })
}

export const dislike = async cat_id => {
    return await postVote(cat_id, 0)
}

export const like = async cat_id => {
    return await postVote(cat_id, 1)
}
