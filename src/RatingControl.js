import { withJsonFormsControlProps } from '@jsonforms/react';
import { Rating } from './Rating';

const RatingControl = ({ data, handleChange, path }) => (
  <Rating
    value={data}
    updateValue={(newValue) => handleChange(path, newValue)}
  />
);

export default withJsonFormsControlProps(RatingControl);