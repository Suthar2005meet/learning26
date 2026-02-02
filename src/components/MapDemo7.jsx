
export const MapDemo7 = () => {

    const storyBooks = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", price: 499, stat: 'available' },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", price: 299, stat :'issued' },
    { id: 3, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", genre: "Biography", price: 350, stat:'lost' },
    { id: 4, title: "The Jungle Book", author: "Rudyard Kipling", genre: "Adventure", price: 280, stat: 'available' },
    { id: 5, title: "Panchatantra", author: "Vishnu Sharma", genre: "Moral Stories", price: 220, stat: 'issued' }
    ];

    return (
        <div style={{textAlign:'center'}}>
            <h1>MAP DEMO 7</h1>
            <table className='table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Story Name</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Price (₹)</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {
                    storyBooks.map((book)=>{
                        return <tr>
                            <td style={{color:'red'}}>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td style={{backgroundColor:book.genre=='Biography' && 'greenyellow'}}>{book.genre}</td>
                            <td style={{backgroundColor:book.price>300 && 'grey'}}>{book.price}</td>
                            <td style={{backgroundColor:book.stat=='available' && 'yellow'}}>{book.stat}</td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
