const express = require("express");
const router = new express.Router();

router.get("/", (request, response) => {
  response.render("home.hbs", {
    trees: [
      {
        name: "kiwi",
        latinName: "Actinidia deliciosa",
        production: "25 - 100 kg / plant",
        zoneUSDA: "7-9",
        pollination: "crossed",
        use: "creeping plant",
      },
      {
        name: "Prunier du Japon",
        latinName: "Prunus salicina",
        production: "35 kg / plant",
        zoneUSDA: "6-10",
        pollination: "crossed",
        use: "isolated tree",
      },
    ],
  });
});

router.get("/about", (request, response) => {
  response.render("about.hbs", {
    name: "Antoine",
    age: 24,
    hobbies: ["code", "gardening", "Video Games", "reading", "music"],
    city: "Paris",
  });
});

router.get("/contact", (request, response) => {
  response.render("contact.hbs");
});

module.exports = router;
