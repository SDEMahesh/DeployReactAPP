
import React from 'react'

export default function testicon() {
     var toastMixin = {
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer)
        //   toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    //   };
    
    const alerticon = ()=>{
      toastMixin.fire({
        animation: true,
        title: 'Signed in Successfully'
      });
    
    };
  return (
    <div>
        <button btn btn-primary onClick={alerticon}>Click Here</button>

    </div>
  )
}
