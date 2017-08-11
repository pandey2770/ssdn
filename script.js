function contactus (){
      document.getElementById('feedback').style.display="block";
      document.getElementById('body').style.backgroundColor="#242528";
      document.getElementById('home-content').style.display="none";
    }
    function home(){
      document.getElementById('feedback').style.display="none";
      document.getElementById('home-content').style.display="block";
      document.getElementById('body').style.backgroundColor="#645e55";
    }
    function sendbutton() {
      document.getElementById('error').style.display = 'none';
      document.getElementById('thanku').style.display = 'none';
      document.getElementById('error').innerHTML = '';
      var error;
      ['name', 'email', 'subject', 'message'].forEach(field => {
        if (document.getElementById(field).value === '') {
          error = true;
          document.getElementById(field).style.border = '1px solid red';
          document.getElementById('error').style.display = 'block';
          document.getElementById('error').innerHTML = 'All fields are mandatory. <br/>';
        }
      });
      if (document.getElementById('email').value &&
        !validateEmail(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML =
          document.getElementById('error').innerHTML + 'Email entered is not valid.';
      }
      if (!error) {
        $.ajax({
          url:'https://formspree.io/pandey.abhishek2770@gmail.com',
          type:'post',
          data:$('#contactus-form').serialize(),
          dataType: "json",
          success:function(){
            document.getElementById('thanku').style.display = 'block';
          },
          error:function(){
            document.getElementById('error').style.display = 'block';
          }
        });
      }
    }

   function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    var see = 

    function Share(){
      for( var i = onclick;onclick>=3 ; ) {(
      function ( name,place,message) {
            this.name = document.getElementById('name-home').value;
            this.place = document.getElementById('place-home').value;
            this.message = document.getElementById('message-home').value; 
            var output =['Name : '+this.name +'\n'+ 'Place : '+ this.place+ '\n'+ 'Message : ' + this.message];
           
         var result =
            document.getElementById('pagediv').style.display = 'block';
            document.getElementById('page').innerHTML=output;
            output = '  ' ; 
          }
            )
               }
                   } 