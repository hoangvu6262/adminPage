import React, { useState } from "react";
import {
  CButton,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CForm,
} from "@coreui/react";
import { useDispatch } from "react-redux";

import { addUser } from "../../redux/action/user.action";

export default function Form() {
  const dispatch = useDispatch();

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

    // setUser
    setUser(newUser);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    setUser({
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
    });
  };

  const handleSubmit = (e) => {
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleAddUser}>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="account">Account</CLabel>
              <CInput
                id="account"
                placeholder="Enter your account"
                name="taiKhoan"
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
                onChange={handleOnChange}
                required
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="userCategory">User Category</CLabel>
              <CSelect
                custom
                name="maLoaiNguoiDung"
                id="userCategory"
                onChange={handleOnChange}
              >
                <option>Select</option>
                <option value="KhachHang">Khách Hàng</option>
                <option value="QuanTri">Quản Trị</option>
              </CSelect>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="2">
            <CButton block color="primary">
              ADD
            </CButton>
          </CCol>
        </CRow>
      </form>
    </>
  );
}
