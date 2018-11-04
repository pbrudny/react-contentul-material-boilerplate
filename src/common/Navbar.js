import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <h2>
      <Link to={"/"}> Home </Link>|
      <Link to={"/layouts/album"}> Album </Link>|
      <Link to={"/layouts/blog"}> Blog </Link>|
      <Link to={"/layouts/checkout"}> Checkout </Link>|
      <Link to={"/layouts/dashboard"}> Dashboard </Link>|
      <Link to={"/layouts/pricing"}> Pricing </Link>|
      <Link to={"/layouts/sign-in"}> Sign in </Link>
    </h2>
  )
}
