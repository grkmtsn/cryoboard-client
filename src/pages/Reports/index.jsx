import { Tool } from "@styled-icons/feather";
import React, { useEffect, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { Alert, Loader, Table } from "../../components";
import { GlobalContext } from "../../context/global";
import { changePageTitle } from "../../context/global/action";

const REPORTS = gql`
  query {
    reportData {
      id
      accountId
      accountType
      displayName
      role
    }
  }
`;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Account ID",
    dataIndex: "accountId",
    key: "accountId",
  },
  {
    title: "Account Type",
    dataIndex: "accountType",
    key: "accountType",
  },
  {
    title: "Display Name",
    dataIndex: "displayName",
    key: "displayName",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "",
    dataIndex: "id",
    key: "action",
    width: 40,
    render: (text) => (
      <Link to={`/reports/${text}`} title="Details">
        <Tool size={24} color="#fff" />
      </Link>
    ),
  },
];

const Reports = () => {
  const { dispatch } = useContext(GlobalContext);
  const { loading, error, data } = useQuery(REPORTS);

  useEffect(() => {
    changePageTitle("Reports", dispatch);
  }, []);

  return (
    <>
      <Loader show={loading} />
      {error && <Alert type="error" message={error.message} />}
      {data && <Table dataSource={data.reportData} columns={columns} />}
    </>
  );
};

export default Reports;
