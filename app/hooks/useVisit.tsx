import React, { useEffect, useState } from 'react';
import { Trailer } from "../interfaces/trailer.interface";
import { TrailerApi } from "../api/trailer-api";
import Api from "../drivers/Api";

const useVisit = (trailer: Trailer) => {
  const [ visit, setVisit ] = useState(trailer.jean)

  useEffect(() => {
    (async () => {
      const data = await TrailerApi.read(Api.clientSideDriver(), trailer.id)
      TrailerApi.update(Api.clientSideDriver(), trailer.id, { jean: data.jean + 1 })
      setVisit(data.jean + 1)
    })()
  }, [trailer]);

  return {visit}
};

export default useVisit;
