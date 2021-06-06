import React, { useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
} from "@coreui/react";
import { useDispatch } from "react-redux";

import { addUser } from "../../redux/action/user.action";

export default function Modal(props) {
  const dispatch = useDispatch();
  // props truyền từ user xuống
  const { modal, setClose, item } = props;
  console.log("user truyen xuong: ", item);

  // state user mới
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    const newUser = {
      ...user,
      [name]: value,
    };
    console.log(newUser);

    //set state
    setUser(newUser);
  };

  const handleAddUser = () => {
    dispatch(addUser(user));
    setClose();
  };

  return (
    <>
      <CModal show={modal} onClose={setClose} size="lg">
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="account">Account</CLabel>
                <CInput
                  id="account"
                  placeholder="Enter your account"
                  name="taiKhoan"
                  value={item.taiKhoan}
                  onChange={handleOnChange}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="name">Name</CLabel>
                <CInput
                  id="name"
                  placeholder="Enter your name"
                  name="hoTen"
                  value={item.hoTen}
                  onChange={handleOnChange}
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="password">Password</CLabel>
                <CInput
                  id="password"
                  placeholder="Enter your pass"
                  name="matKhau"
                  value={item.matKhau}
                  type="password"
                  onChange={handleOnChange}
                  required
                />
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={item.email}
                  onChange={handleOnChange}
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="phone">Phone</CLabel>
                <CInput
                  id="phone"
                  placeholder="Enter your phone number"
                  name="soDt"
                  value={item.soDt}
                  onChange={handleOnChange}
                  required
                />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="userCategory">User Category</CLabel>
                <CSelect
                  custom
                  name="maLoaiNguoiDung"
                  id="userCategory"
                  onChange={handleOnChange}
                  value={item.maLoaiNguoiDung}
                >
                  <option>Select</option>
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị</option>
                </CSelect>
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={handleAddUser}>
            Edit
          </CButton>{" "}
          <CButton color="secondary" onClick={setClose}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}
