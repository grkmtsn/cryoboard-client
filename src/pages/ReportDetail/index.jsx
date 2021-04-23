import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import startCase from "lodash/startCase";
import { useQuery, gql } from "@apollo/client";

import { Alert, Description, Loader } from "../../components";
import { GlobalContext } from "../../context/global";
import { changePageTitle } from "../../context/global/action";

const REPORT = gql`
  query reportDetailData($id: ID!) {
    reportDetailData(id: $id) {
      id
      accountId
      accountType
      displayName
      role
      acceptedTradeQuantity
      tradeDate
      price
      volume
      quantity
    }
  }
`;

const ReportDetail = () => {
  const { id } = useParams();
  const { dispatch } = useContext(GlobalContext);
  const { loading, error, data } = useQuery(REPORT, { variables: { id } });
  console.log({ error });
  useEffect(() => {
    changePageTitle(`${id} Report Detail`, dispatch);
  }, []);

  return (
    <>
      <Loader show={loading} />
      {error && <Alert type="error" message={error.message} />}
      {data && (
        <Description>
          {Object.keys(data.reportDetailData).map((key) => (
            <Description.Item
              key={key}
              label={startCase(key)}
              value={data.reportDetailData[key]}
            />
          ))}
        </Description>
      )}
    </>
  );
};

export default ReportDetail;
