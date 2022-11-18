import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

export default function Pagination({ setPageNumber, pageNumber }) {
    const location = useLocation();
    const [totalRepos, setTotalRepos] = useState(0);
    const [selectedBtn, setSelectedBtn] = useState('1');

    useEffect(() => {
        // const fetchTotalRepos = async () => {
        //     try {
        //         const response = await axios.get(`${location.state.url}/repos`);
        //         setTotalRepos(response.data.length);
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // }
        // console.log('pagination', location.state)
        // fetchTotalRepos()
        setTotalRepos(location.state.totalRepos);
    } , [location.state]);


    const handlePageNumber = (pageSign, index) => {
        setSelectedBtn(pageSign)

        if(pageSign === '<') {
            setPageNumber(pageNumber - 1 === 0 ? Math.ceil(totalRepos / 10) : pageNumber - 1)
        }
        else if(pageSign === '>') {
            setPageNumber(pageNumber + 1 > Math.ceil(totalRepos / 10) ? 1 : pageNumber + 1)
        }
        else {
            setPageNumber(index)
        }
    }


    console.log(
        'totalRepos', totalRepos,
    )
    return (
        <div>
            <div className="pagination-row">
                <button 
                    className={`pagination-button ${selectedBtn === '<' ? 'clicked' : ''}`} 
                    onClick={() => handlePageNumber('<')}>
                    &lt;- 
                </button>
                {
                    [...Array(Math.ceil(totalRepos / 10))].map((_, i) => (
                        <button 
                            key={i}     
                            className={`pagination-button ${selectedBtn === `${i + 1}` ? 'clicked' : ''}`} 
                            onClick={() => handlePageNumber(`${i + 1}`, i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))
                }
                <button         
                    className={`pagination-button ${selectedBtn === '>' ? 'clicked' : ''}`} 
                    onClick={() => handlePageNumber('>')}>
                     -&gt; 
                </button>
            </div>
            {/* <h4>Page - {" "} {pageNumber}</h4> */}
        </div>
    )
}