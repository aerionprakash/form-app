import Form from "@rjsf/material-ui";
import { useState} from "react";

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((_theme) => ({
//   container: {
//     padding: '1em',
//     width: '100%',
//   },
//   title: {
//     textAlign: 'center',
//     padding: '0.25em',
//   },
//   dataContent: {
//     display: 'flex',
//     justifyContent: 'center',
//     borderRadius: '0.25em',
//     backgroundColor: '#cecece',
//     marginBottom: '1rem',
//   },
//   resetButton: {
//     margin: 'auto',
//     display: 'block',
//   },
//   demoform: {
//     margin: 'auto',
//     padding: '1rem',
//   },
// }));


const schema = {
    "title": "My title",
    "description": "My description",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "age": {
        "type": "number"
      }
    }
  };

export default function JSONSchemaForm(){
    // const classes = useStyles();
  
    const [displayDataAsString, setDisplayDataAsString] = useState('');
    // const [jsonformsData, setJsonformsData] = useState(null);

    const log = (data) => {
        // setJsonformsData(data.formData)
        setDisplayDataAsString(JSON.stringify(data.formData, null, 2));
    } 
    
//   useEffect(() => {
//     setDisplayDataAsString(JSON.stringify(jsonformsData, null, 2));
//   }, [jsonformsData]);

    return(<div>
        <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>JSON Schema Form</h1>
        </header>
      </div>
    <div style={{padding: 20, display: 'flex', flexDirection: 'row'}}>
        <div>
            <Form
                schema={schema}
                // onChange={log}
                onSubmit={log}
                // onError={log("errors")} 
            />
        </div>
        <div>
            {displayDataAsString}
        </div>
        </div>
    </div>)};