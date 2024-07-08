"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { companyTableData } from "@/utils/companyTableData";

const CompaniesTable = () => {
  const [companyInfos] = useState(companyTableData);

  return (
    <div className="mt-[50px] px-[30px]">
      <DataTable
        value={companyInfos}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          className="rounded-l-[6px]"
          field="company"
          header="Company"
        ></Column>
        <Column align="center" field="ticker" header="Ticker"></Column>
        <Column align="center" field="vertical" header="Vertical"></Column>
        <Column align="center" field="price" header="Price"></Column>
        <Column align="center" field="market" header="Market Cap ($B)"></Column>
        <Column align="center" field="revenue" header="Revenue Growth"></Column>
        <Column align="center" field="gross" header="Gross Margin"></Column>
        <Column align="center" field="ev" header="EV/Revenue"></Column>
        <Column
          className="rounded-r-[6px]"
          align="center"
          field="ytd"
          header="YTD Performance"
        ></Column>
      </DataTable>
    </div>
  );
};

export default CompaniesTable;
