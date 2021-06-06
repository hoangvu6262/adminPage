import React from "react";

import { CCard, CCardHeader, CCardBody } from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";

export default function ChartPie(props) {
  const { totalUsers, manageUsers } = props;
  const guestUsers = totalUsers - manageUsers;
  return (
    <>
      <CCard>
        <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: ["#fdd835", "#43a047"],
                data: [manageUsers, guestUsers],
              },
            ]}
            labels={["Quan Tri", "Khach Hang"]}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
}
