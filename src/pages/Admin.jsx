import React from 'react';
import { BsPencilFill } from 'react-icons/bs';


export default function Admin() {


    return (
        <div>
            <div>
                <h1>Admin </h1>
                <img src="img/Coree_palas_petit.jpg" alt="Palas de Corée" />
                <div class="admin_center">
                    <button onclick="location.href='/add_post';">Ajouter un article</button>
                    <table class='admin_table'>
                        <caption>Article</caption>
                        <thead>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Description </th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Modification </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                </td>
                                <td>

                                </td>
                                <td>
                                    <a href="/articles/<%=articles[i].id%>">

                                    </a>
                                </td>
                                <td>

                                </td>
                                <td>

                                </td>
                                <td>
                                    <a class="edit" href="edit_post/<%=articles[i].id%>"></a>
                                    <button><BsPencilFill /></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


            <div>
                <table class='admin_table'>
                    <caption>Formulaire</caption>
                    <thead>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email </th>
                        <th>Tel</th>
                        <th>Objet</th>
                        <th>Content </th>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>

                            </td>

                            <td>

                            </td>
                            <td>

                            </td>

                            <td>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div >


















        </div >
    )
}
