
import "./styles.css";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";


window.onload = homeLoad;

const nav = document.querySelector('nav');
const buttons = nav.querySelectorAll('button');

buttons[0].addEventListener('click', homeLoad);
buttons[1].addEventListener('click', menuLoad);
buttons[2].addEventListener('click', aboutLoad);
