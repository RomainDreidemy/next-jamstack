import React, { useEffect, useState } from 'react';
import { Trailer } from "../interfaces/trailer.interface";

const useVisit = (trailer: Trailer) => {
  const [ visit, setVisit ] = useState(trailer.jean)

  useEffect(() => {
    (async () => {
      let response = await fetch(`http://localhost:8052/visit/${trailer.id}`)
      response = await response.json()
      // @ts-ignore
      setVisit(response.visit)
    })()
  }, [trailer]);

  return {visit}
};

export default useVisit;
