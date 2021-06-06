import axios from "axios";

import { startLoading, stopLoading } from "./common.action";

// lấy user phân trang
export const getUserPagination = (groupId, pageNumber) => {
  return (dispatch) => {
    dispatch(startLoading());

    //call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${groupId}&soTrang=${pageNumber}&soPhanTuTrenTrang=20`,
      data: null,
    })
      .then((response) => {
        // console.log("data tra ve tu api: ", response.data);
        dispatch(stopLoading);

        dispatch(getUserPaginationSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoading);
        dispatch(getUserPaginationFail(error));
      });
  };
};

const getUserPaginationSuccess = (data) => {
  const action = {
    type: "GET_USER_PAGINATION_SUCCESS",
    payload: data,
  };

  return action;
};

const getUserPaginationFail = (err) => {
  const action = {
    type: "GET_USER_PAGINATION_FAIL",
    payload: err,
  };

  return action;
};

// thêm user

export const addUser = (user) => {
  return (dispatch) => {
    const userAdmin = JSON.parse(localStorage.getItem("userAdminLogin"));
    const token = userAdmin.accessToken;
    dispatch(startLoading);

    axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);

        dispatch(stopLoading);
        dispatch(addUserReducerSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading);
        dispatch(addUserReducerFail(err));
      });
  };
};

const addUserReducerSuccess = (data) => {
  const action = {
    type: "ADD_USER_SUCCESS",
    payload: data,
  };

  return action;
};

const addUserReducerFail = (err) => {
  const action = {
    type: "ADD_USER_FAIL",
    payload: err,
  };

  return action;
};

// Login

export const postLogin = (taiKhoan, matKhau) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log("login data: ", res.data);
        // gửi lên store
        dispatch(postLoginSuccess(res.data));

        //lưu data xuông localStorage
        localStorage.setItem("userAdminLogin", JSON.stringify(res.data));
        // trở lại trang trước đó
        // history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(postLoginFailed(err));
      });
  };
};

const postLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const postLoginFailed = (err) => {
  return {
    type: "LOGIN_FAILED",
    payload: err,
  };
};

// xóa user
