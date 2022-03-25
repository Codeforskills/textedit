import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

//   below code will not work as props.alert.type has null as initial value 
//       console.log(props.alert.type);
//        const lower=props.alert.type.toLowerCase();
//         let st= lower.charAt(0).toUpperCase() + lower.slice(1);
    // if we use function then first props.alert && evalutes then function is called
  return (
           props.alert && <div>
                <div  class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}:{props.alert.msg}</strong>
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
            </div>
  )
}
