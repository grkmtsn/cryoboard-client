import React, { useState, useEffect, useContext } from "react";
import { DollarSign, Copy, Target } from "@styled-icons/feather";
import { useQuery, gql } from "@apollo/client";

import { GlobalContext } from "../../context/global";
import { changePageTitle } from "../../context/global/action";
import { Alert, Card, Chart, Loader, Space } from "../../components";
import { CardsWrapper } from "./styles";

const CHART = gql`
  query {
    chartData {
      date
      saleCount
      quantity
      equity
    }
  }
`;

const mock = [
  {
    id: 1,
    title: "Sale Count",
    unit: "ETH",
    count: 23.242,
    icon: <DollarSign size={44} color="#fff" />,
    difference: "+ 12.4%",
    lineKey: "saleCount",
  },
  {
    id: 2,
    title: "Equity",
    unit: "BTC",
    count: 1.352,
    icon: <Copy size={44} color="#fff" />,
    difference: "- 2.4%",
    lineKey: "equity",
  },
  {
    id: 3,
    title: "Quantity",
    unit: "LTC",
    count: 380.352,
    icon: <Target size={44} color="#fff" />,
    difference: "+ 39.4%",
    lineKey: "quantity",
  },
];

const Charts = () => {
  const { dispatch } = useContext(GlobalContext);
  const { loading, error, data } = useQuery(CHART);

  const [activeIndex, setActiveIndex] = useState(() => {
    if (localStorage.getItem("activeChart")) {
      const activeChart = JSON.parse(localStorage.getItem("activeChart"));
      return activeChart.id;
    }
    return mock[0].id;
  });
  const [lineKey, setLineKey] = useState(() => {
    if (localStorage.getItem("activeChart")) {
      const activeChart = JSON.parse(localStorage.getItem("activeChart"));
      return activeChart.lineKey;
    }
    return mock[0].lineKey;
  });

  const handleClickCard = (activeItem) => {
    setActiveIndex(activeItem.id);
    setLineKey(activeItem.lineKey);
    localStorage.setItem(
      "activeChart",
      JSON.stringify({ id: activeItem.id, lineKey: activeItem.lineKey })
    );
  };

  useEffect(() => {
    changePageTitle("Charts", dispatch);
  }, []);

  return (
    <div>
      <Loader show={loading} />
      {error && <Alert type="error" message={error.message} />}
      {data && (
        <>
          <CardsWrapper>
            <Space>
              {mock.map((item, idx) => (
                <Card
                  item={item}
                  key={idx}
                  active={activeIndex === item.id}
                  onClick={handleClickCard}
                />
              ))}
            </Space>
          </CardsWrapper>
          <Chart data={data.chartData} lineKey={lineKey} />
        </>
      )}
    </div>
  );
};

export default Charts;
