const { io } = require("socket.io-client");

    // connect to the socket​
let socket = io();
socket.on('number', (msg) => {
        console.log('Random number: ' + msg);
    })
     


const cardList= [
    {
    title:"WebDevoloper",
    image:"images/web devp.gif",
    link:"Discription",
    desciption:"The design and development of websites is the responsibility of a    web developer. By ensuring that sites look beautiful, function well, and provide simple access points without loading problems between pages or error messages, the make sure that sites live up to user expectations."
    },
    {
    title:"CSS",
    image:"images/web3.gif",
    link:"Cascading Style Sheets",
    desciption:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts."
    }
    ]

const clickMe= () =>{
    alert("Thanks for clicking me. Hope you have a nice day!")
    }
 const submitForm= () =>{
    let formData= {};
    formData.first_name= $('#first_name').val();
    formData.last_name= $('#last_name').val();
    formData.password= $('#password').val();
    formData.email= $('#email').val();
    console.log("Form Data Submitted: ", formData);
    alert("Details Verified")
    }
 const addCards= (items) =>{
    items.forEach(item=>{
    let itemToAppend= '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
    '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
    '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
    });
    }

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
    submitForm();
    })
addCards(cardList);
$('.modal').modal();
    });
    