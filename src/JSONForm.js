import { Fragment, useState, useEffect } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import { makeStyles } from '@material-ui/core/styles';
import {useParams, useHistory} from "react-router-dom";

const api = "http://localhost:3004";

const useStyles = makeStyles((_theme) => ({
  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto',
    display: 'block',
    marginTop: 20
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
}));


const renderers = [
  ...materialRenderers,
  { tester: ratingControlTester, renderer: RatingControl },
];

const JSONForm = () => {
  const classes = useStyles();
  const [jsonformsData, setJsonformsData] = useState(null);
  const [errors, setErrors] = useState([]);

  const [schema, setSchema] = useState(null);
  const [uischema, setUischema] = useState(null);
  const {id} = useParams();
  const history = useHistory();

  useEffect(()=>{
    getSchemas();
    if(id){
      getDetails(id)
    }
  },[id])

  const getSchemas = ()=>{
    const url = `${api}/schemas`;
    fetch(url).then(res=>res.json())
    .then((schemas)=>{
      setSchema(schemas.fields);
      setUischema(schemas.layout);
    })
  }

  const getDetails = (id)=>{
    const url = `${api}/movies/${id}`;
    fetch(url).then(res=>res.json())
    .then((data)=>{
      setJsonformsData(data)
    })
  }

  const submitData = ()=>{
    const url = id ? `${api}/movies/${id}` : `${api}/movies/`;
    const method = id ? "put" : "post";
    fetch(url, {
      method: method, 
      body: JSON.stringify(jsonformsData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res=>res.json())
    .then((data)=>{
      if(data.id){
        history.push("/")
      }
    })
  }

  const onChange = (e)=>{
    setErrors(e.errors)
    setJsonformsData(e.data)
  }
  
  return (
    <Fragment>
      <div className='App'>
        <header className='App-header'>
          <h2 className='App-title' onClick={()=>history.push("/")}>JSON Forms with React</h2>
        </header>
      </div>

      <Grid
        container
        justify={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={6}>
          <Typography variant={'h3'} className={classes.title}>
            Add
          </Typography>
          <div className={classes.demoform}>
            {schema && uischema && <JsonForms
              schema={schema}
              uischema={uischema}
              data={jsonformsData}
              renderers={renderers}
              cells={materialCells}
              onChange={onChange}
            />}
            <Button
            className={classes.resetButton}
            onClick={submitData}
            color='primary'
            variant='contained'
            disabled={errors.length>0}
          >
            Submit
          </Button>
          </div>
        </Grid>
        
      </Grid>
    </Fragment>
  );
};

export default JSONForm;