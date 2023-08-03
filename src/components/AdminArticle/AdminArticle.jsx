// import React, { useMemo } from 'react'
// import { BsPencilFill } from 'react-icons/bs';
// import styles from './AdminArticle.module.css';
// import { Link } from 'react-router-dom';
// import { useTable } from 'react-table';



// export default function AdminArticle() {

//     const data = [
//         { name: "Anom", age: 19, gender: "Male" },
//         { name: "Megha", age: 19, gender: "Female" },
//         { name: "Subham", age: 25, gender: "Male" },
//     ]

//     return (
//         <div className="App">
//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Gender</th>
//                 </tr>
//                 {data.map((val, key) => {
//                     return (
//                         <tr key={key}>
//                             <td>{val.name}</td>
//                             <td>{val.age}</td>
//                             <td>{val.gender}</td>
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>
//     );
// }

//     // return (
//     //     <div className={styles.center}>
//     //         <button><Link to="/"></Link>Ajouter un article</button>
//     //         <table >
//     //             <caption>Article</caption>
//     //             <thead>
//     //                 <th>Date</th>
//     //                 <th>Title</th>
//     //                 <th>Description </th>
//     //                 <th>Category</th>
//     //                 <th>Author</th>
//     //                 <th>Modification </th>
//     //             </thead>
//     //             <tbody>
//     //                 {`for(let i = 0; i < posts.length; i++) {`}
//     //                 <tr data-id="posts[i].id">
//     //                     <td>
//     //                         <a href="/article/{posts[i].id}"> {posts[i].title}</a>
//     //                     </td>
//     //                     <td> {posts[i].description.substring(0, 30)}...</td>

//     //                     <td>{posts[i].Category_Name}</td>
//     //                     <td>
//     //                         <a href="edit_post/posts[i].id"><i class="fa fa-pencil"></i></a>
//     //                         <button class="remove js-remove-post-button" data-id={posts[i].id}><i class="fa fa-remove"></i></button>
//     //                     </td>
//     //                 </tr>
//     //                 }
//     //                 <tr>
//     //                     <td>
//     //                     </td>
//     //                     <td>

//     //                     </td>
//     //                     <td>

//     //                     </td>
//     //                     <td>

//     //                     </td>
//     //                     <td>

//     //                     </td>
//     //                     <td>

//     //                         <button><BsPencilFill /></button>
//     //                     </td>
//     //                 </tr>

//     //             </tbody>
//     //         </table>
//     //     </div>
//     // )

