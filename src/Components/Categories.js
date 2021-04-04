import React, { useEffect } from 'react'

// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: 'c' })
// };
// fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
//     .then(response => response.json())
//     .then(data => this.setState({ postId: data.id }));


const Categories = () => {

    useEffect(() => {

        const postCategorySearch = async (searchFilter) => {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(searchFilter)
            };

            const categories = await fetch('http://localhost:8000/category/search', requestOptions)
                .then(response => response.json());
            console.log({categories});
        }

        postCategorySearch({ name: '' });
    }, [])

    return (
        <div>
            <h1>Hello from categories list</h1>
        </div>
    )
}

export default Categories
