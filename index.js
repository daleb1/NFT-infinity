const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.use(expressLayouts);
app.use(express.static("public"));

app.set("layout", "./layouts/master");
app.set("view engine", "ejs");

// ROOT DIRECTORY ----------------------------------------------------------------
app.get("/404-error", function (req, res) {
  res.render("pages/root/404-error");
});

app.get("/activity", function (req, res) {
  res.render("pages/root/activity");
});

app.get("/", function (req, res) {
  res.render("pages/root/dashboard");
});

app.get("/faq", function (req, res) {
  res.render("pages/root/faq");
});

app.get("/no-result", function (req, res) {
  res.render("pages/root/no-result");
});

app.get("/rank", function (req, res) {
  res.render("pages/root/rank");
});

// PROFILE -----------------------------------------------------------------------
app.get("/create-item", function (req, res) {
  res.render("pages/profile/create-item");
});

app.get("/profile-info", function (req, res) {
  res.render("pages/profile/profile-info");
});

app.get("/wallet", function (req, res) {
  res.render("pages/profile/wallet");
});

// MARKET PAGE -------------------------------------------------------------------
app.get("/auction", function (req, res) {
  res.render("pages/market-page/auction");
});

app.get("/explore", function (req, res) {
  res.render("pages/market-page/explore");
});

app.get("/item-details", function (req, res) {
  res.render("pages/market-page/item-details");
});

// FORMS -------------------------------------------------------------------------
app.get("/login", function (req, res) {
  res.render("pages/forms/login");
});

app.get("/sign-up", function (req, res) {
  res.render("pages/forms/sign-up");
});

// BLOG --------------------------------------------------------------------------
app.get("/blog-details", function (req, res) {
  res.render("pages/blog/blog-details");
});

app.get("/blog", function (req, res) {
  res.render("pages/blog/blog");
});

// AUTHORS -----------------------------------------------------------------------
app.get("/authors-details", function (req, res) {
  res.render("pages/authors/authors-details");
});

app.get("/authors", function (req, res) {
  res.render("pages/authors/authors");
});

// ABOUT -------------------------------------------------------------------------
app.get("/contact", function (req, res) {
  res.render("pages/about/contact");
});

app.get("/help-center", function (req, res) {
  res.render("pages/about/help-center");
});

app.listen(3000);
console.log("Server is running");
