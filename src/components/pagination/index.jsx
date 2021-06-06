import React from "react";
import { CPagination } from "@coreui/react";

export default function Panigation(props) {
  const { currentPage, pages, changePage } = props;
  const setCurrentPage = (e) => {
    console.log(e);
    changePage(e);
  };
  return (
    <>
      <CPagination
        align="center"
        addListClass="some-class"
        activePage={currentPage}
        pages={pages}
        onActivePageChange={setCurrentPage}
      />
    </>
  );
}
