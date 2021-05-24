import Form from "@rjsf/material-ui";
import { useState} from "react";

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
    const [displayDataAsString, setDisplayDataAsString] = useState('');
    // const [jsonformsData, setJsonformsData] = useState(null);

    const log = (data) => {
        // setJsonformsData(data.formData)
        setDisplayDataAsString(JSON.stringify(data.formData, null, 2));
    } 
    
//   useEffect(() => {
//     setDisplayDataAsString(JSON.stringify(jsonformsData, null, 2));
//   }, [jsonformsData]);

    return(<div style={{padding: 20, display: 'flex', flexDirection: 'row'}}>
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
    )};