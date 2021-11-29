import React from "react";
import {FormattedDate} from 'react-intl';
import NumberFormat from 'react-number-format';




const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
   <NumberFormat 
     value={props.offer.salary} 
     displayType={'text'}
     suffix=" million"
     />  
  </td>
      <td>{props.offer.city}</td>
      <td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
    
  />
</td>
      <td>
   <NumberFormat 
     value={props.offer.visits} 
     displayType={'text'}
     thousandSeparator={true}
     />  
  </td>
    </tr>
  );
};

export default Job;
