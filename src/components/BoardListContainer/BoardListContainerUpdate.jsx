// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { format } from 'date-fns';

// //Update of contact form table in page admin ???????
// export default function BoardListContainerUpdate() {
//     const { id } = useParams();

//     const [formContact, setFormContact] = useState([]);
//     const [isLoading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:8000/formContact')
//             .then(res => {
//                 setFormContact(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.log(err);
//                 setLoading(false);
//             });
//     }, []);

//     //for the date dd/mm/yyyy
//     const formatDateFrench = (dateStr) => {
//         const date = new Date(dateStr);
//         return format(date, 'dd/MM/yyyy');
//     };

//     return (
//         <div>
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table>
//                     <caption>Formulaire</caption>
//                     <thead>
//                         <tr>
//                             <th> Prénom</th>
//                             <th> Nom</th>
//                             <th> Email </th>
//                             <th> Tel</th>
//                             <th> Objet</th>
//                             <th> Content </th>
//                             <th> Date </th>
//                             <th> Modification </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr key={i}>
//                             <td>{data.firstname}</td>
//                             <td>{data.lastname}</td>
//                             <td>{data.email}   </td>
//                             <td>{data.tel} </td>
//                             <td>{data.choix} </td>
//                             <td>{data.content} </td>
//                             <td>{formatDateFrench(data.date)}</td>
//                             <td>
//                                 <button>Update</button>
//                                 <button>Delete</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }
