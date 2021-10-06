import React from 'react'
import PersonalData from './PersonalData';
import UserData from './UserData';

function Forms({OnTheSubmit, cpfisValid}) {
    return (
      <>
        <PersonalData 
          OnTheSubmit={OnTheSubmit}
          cpfisValid={cpfisValid}
        />
       <UserData />
      </>
    );
}

export default Forms;