import axios from "axios";

const URL = process.env.EXPO_PUBLIC_API_URL;

if (!URL) {
  console.error("Missing EXPO_PUBLIC_API_URL environment variable");
}

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

export async function postRegister(registerCustomer) {
  try {
    const request = await instance.post("/register", registerCustomer);

    return request.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function postLogin(loginCustomer) {
  try {
    const request = await instance.post("/login", loginCustomer);

    return request.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getRooms() {
  try {
    const request = await instance.get("/rooms");

    return request.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function postReservation(reservation) {
  try {
    const request = await instance.post("/reservation", reservation);

    return request.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function postCheckIn(reservationId) {
  try {
    const request = await instance.post(`/checkin/${reservationId}`);

    return request.status;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function postCheckOut(reservationId) {
  try {
    const request = await instance.post(`/checkout/${reservationId}`);

    return request.status;
  } catch (err) {
    console.error(err);
    return null;
  }
}
