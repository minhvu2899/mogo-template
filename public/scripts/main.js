"use strict";$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});var headerToggle=document.querySelector(".header-toggle");console.log(headerToggle);var headerMenu=document.querySelector(".header-menu"),headerTop=document.querySelector(".header-top"),headerMenuItem=document.querySelectorAll(".header-menu-link"),btnscrollTop=document.getElementById("scrollTop");console.log(btnscrollTop),console.log(headerMenu);var expanToggle="is-toggle";headerToggle.addEventListener("click",function(){headerMenu.classList.add(expanToggle),console.log("da click")}),window.addEventListener("click",function(e){headerMenu.contains(e.target)||e.target.matches(".header-toggle")||(headerMenu.classList.remove(expanToggle),console.log("da xoas"))}),window.addEventListener("scroll",function(){console.log(window.pageYOffset);var e=headerTop.offsetTop;window.pageYOffset>e?headerTop.classList.add("header-top-fixed"):headerTop.classList.remove("header-top-fixed"),1e3<window.pageYOffset?btnscrollTop.style.display="block":btnscrollTop.style.display="none"}),btnscrollTop.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),console.log(headerMenuItem),headerMenuItem.forEach(function(e){e.addEventListener("click",function(){headerMenuItem.forEach(function(e){e.classList.remove("menu-active")}),e.classList.add("menu-active")})});