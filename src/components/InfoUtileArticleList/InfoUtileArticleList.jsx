import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';
import styles from './InfoUtileArticleList.module.css';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function InfoUtileArticleList() {
    const [viewContent, setViewContent] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // La page actuelle, indexée à partir de 0
    const articlesPerPage = 5;
    const pageCount = Math.ceil(viewContent.length / articlesPerPage);

    useEffect(() => {
        Axios.get('http://localhost:8000/infoarticle').then((response) => {
            setViewContent(response.data);
        });
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    const formatDateFrench = (dateStr) => {
        const date = new Date(dateStr);
        return format(date, 'dd/MM/yyyy'); // Formatage de la date en français
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const renderArticles = () => {
        const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
        const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
        const currentArticles = viewContent.slice(indexOfFirstArticle, indexOfLastArticle);

        return currentArticles.map((element, index) => {
            // Calculer l'index basé sur l'ordre correct des articles
            const trueIndex = indexOfFirstArticle + index + 1;

            return (
                <tr key={element.id}>
                    <td>{trueIndex}</td>
                    <td><img className={styles.img} src={element.url} alt={element.alt} /></td>
                    <td>{element.title}</td>
                    <td>
                        {ReactHtmlParser(truncate(element.content, 100))}
                    </td>
                    <td>{formatDateFrench(element.date)}</td>
                    <td>
                        <Link to={`/infoupdate/${element.id}`}>
                            <button>Update</button>
                        </Link>
                        <button>Delete</button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <h1>Info Utiles</h1>

            <Link to="/addinfoutilearticle">
                <button>Ajouter un article</button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th> Image</th>
                        <th> Title</th>
                        <th> Content </th>
                        <th> Date </th>
                        <th> Modification </th>
                    </tr>
                </thead>
                <tbody>
                    {renderArticles()}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'< previous'}
                nextLabel={'next >'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                previousLinkClassName={styles.paginationLink}
                nextLinkClassName={styles.paginationLink}
                disabledClassName={styles.paginationDisabled}
                activeClassName={styles.paginationActive}
            />
        </div>
    );
}
