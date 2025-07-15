import React from 'react';
import CreateCountry from './CreateCountry';
import GetCountry from './GetCountry';
import UpdateCountry from './UpdateCountry';
import DeleteCountry from './DeleteCountry';

function CountryManager() {
  return (
    <div>
      <CreateCountry />
      <GetCountry />
      <UpdateCountry />
      <DeleteCountry />
    </div>
  );
}

export default CountryManager;
