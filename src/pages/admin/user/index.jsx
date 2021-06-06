import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { getUserPagination } from "../../../redux/action/user.action";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";

import Panigation from "../../../components/pagination";
import ChartPie from "../../../components/chartPie";
import Modal from "../../../components/modal";
import Form from "../../../components/form";

const fields = [
  "email",
  "hoTen",
  "maLoaiNguoiDung",
  "matKhau",
  "soDt",
  "taiKhoan",
  "chinhSua",
  "Xoa",
];

const getBadge = (maLoaiNguoiDung) => {
  switch (maLoaiNguoiDung) {
    case "KhachHang":
      return "success";
    case "QuanTri":
      return "warning";
    default:
      return "primary";
  }
};

export default function User() {
  // gọi state từ trên store xuông
  const userPagination = useSelector((state) => state.userPagination);
  const dispatch = useDispatch();

  console.log(userPagination.userList);

  // call api sau đó dispatch lên store
  useEffect(() => {
    dispatch(getUserPagination("GP01", 1));
  }, []);

  //dispatch lên store để thay đổi state khi chuyể qua trang mới
  const handleChangePage = (newPage) => {
    console.log(newPage);
    dispatch(getUserPagination("GP01", newPage));
  };

  // state bật tắt modal
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({});

  // sau khi tắt thì setModal = false
  const setModalClose = () => {
    return setModal(false);
  };

  //edit user
  const handleEditUser = (item) => {
    console.log(item);
    setModal(true);
    setItem(item);
  };

  return (
    <>
      <CRow>
        <CCol xs="6" lg="6">
          <ChartPie totalUsers={1053} manageUsers={1053 - 562} />
        </CCol>
        <CCol xs="6" lg="6">
          <CCard>
            <CCardHeader>Add User</CCardHeader>
            <CCardBody>
              <Form />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol
                  col="1"
                  sm="8"
                  md="8"
                  xs="10"
                  lg="10"
                  className="mb-3 mb-xl-0"
                >
                  User Table
                  {/* <DocsLink name="CModal" /> */}
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={userPagination.userList.items}
                fields={fields}
                itemsPerPage={20}
                scopedSlots={{
                  maLoaiNguoiDung: (item) => (
                    <td>
                      <CBadge color={getBadge(item.maLoaiNguoiDung)}>
                        {item.maLoaiNguoiDung}
                      </CBadge>
                    </td>
                  ),
                  chinhSua: (item) => (
                    <td>
                      <CBadge>
                        <CButton
                          block
                          color="primary"
                          onClick={() => handleEditUser(item)}
                        >
                          Sua
                        </CButton>
                      </CBadge>
                    </td>
                  ),
                  Xoa: () => (
                    <td>
                      <CBadge>
                        <CButton block color="danger">
                          Xoa
                        </CButton>
                      </CBadge>
                    </td>
                  ),
                }}
              />
              <Panigation
                currentPage={userPagination.userList.currentPage}
                pages={userPagination.userList.totalPages}
                changePage={handleChangePage}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <Modal modal={modal} setClose={setModalClose} item={item} />
    </>
  );
}
