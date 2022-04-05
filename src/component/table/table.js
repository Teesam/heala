import './table.css';
import { useState, useLayoutEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/query';
import Loading from '../loader/loader';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Table = () => {

    const [ tableData, setTableData ] = useState([]);
    const { data, error, loading } = useQuery(GET_LAUNCHES);

    useLayoutEffect( () => {

        setTableData(data?.launches);

    }, [!loading]);

    console.log(tableData)
 

  return (
    <div className = 'Table'>

        {
            
            error ?

            <h2>Ooooops! There's an error</h2>

            :


            <table>
                <thead>
                    <tr className = 'Row-head'>
                        <th>S/N</th>
                        <th>ID</th>
                        <th>MISSION NAME</th>
                        <th>LAUNCH SITE</th>
                        <th>ROCKET NAME</th>
                    </tr>   
                </thead>
                <tbody className = 'Table-body'>
                    {
                        tableData?.length > 0 && tableData.map( (data, i) => {

                            console.log(data)
                            return  <tr 
                                        key = { data.mission_name }
                                        className = 'Row-body'
                                    >
                                        <td id = 's-n'>{ i+1 }</td>
                                        <td>{ data.mission_id.length > 0 ? data.mission_id[0] : 'N/A' }</td>
                                        <td>{ data.mission_name }</td>
                                        <td>{ data.launch_site.site_name }</td>
                                        <td>{ data.rocket.rocket_name }</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>

        }


        {
            loading ?

            <Loading />

            : ''
        }

    </div>
  );
}


export default Table;
