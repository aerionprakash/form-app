import React, { useEffect } from 'react';
import { useState } from 'react';
import MaterialTable from "material-table"
import { Fragment } from 'react';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

const api = "http://localhost:3004"

export const List = () => {
    const history = useHistory();
    const [data, setData] = useState([]);
    
    const getList=()=>{
        const url = `${api}/movies`;
        fetch(url).then(res=>res.json())
        .then(movies=>{
            setData(movies)
        })
    }

    useEffect(()=>{
        getList();
    },[])


  return (
    <Fragment>
        <div className='App'>
        <header className='App-header'>
          <h2 className='App-title'>JSON Forms with React</h2>
        </header>
      </div>
      <div style={{flex: 1, marginTop: 30, marginRight: '10%', marginLeft: '10%'}}>
        
        <MaterialTable
            title="Movie List"
            columns={[
                { title: 'Title', field: 'title' },
                { title: 'Description', field: 'description' },
                { title: 'Rating', field: 'rating' },
                { title: 'Genre', field: 'genre' },
            ]}
            data={data}
            actions={[
                {
                icon: EditIcon,
                tooltip: 'Save User',
                onClick: (event, rowData) => history.push("/edit/"+rowData.id)
                },
                {
                    icon: AddIcon,
                    tooltip: 'Save User',
                    isFreeAction: true,
                    onClick: (event) => history.push("/add")
                },
            ]}
            options={{
                actionsColumnIndex: -1,
                search: false,
                paging: false
            }}
            />
            </div>
    </Fragment>
  );
};