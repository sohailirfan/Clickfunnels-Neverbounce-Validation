<script>
$(document).ready(function() {
  $('[href="#submit-form"]').attr("href", "#");
});
  
$('[name="email"]').blur(function(){
  var email = $('[name="email"]').val();
  var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email_regex.test(email) == false) {
    $('[name="email"]').css({"border-color": "rgb(185, 21, 23)", "border-width":"3px", "border-style":"solid", "border-radius":"5px"});   
  } else {
      $.ajax({
          type: 'POST',
          crossDomain: true,
          url: 'https://domain.com/filename.php?email='+email, // Update path to PHP file
          success: function(jsondata){ 
            if (jsondata=="valid") {
            	$('[name="email"]').css({"border-color": "rgb(74, 137, 32)", "border-width":"3px", "border-style":"solid", "border-radius":"5px"});  
              	$('[href="#"]').attr("href", "#submit-form");
            } else {
				$('[name="email"]').css({"border-color": "rgb(185, 21, 23)", "border-width":"3px", "border-style":"solid", "border-radius":"5px"});   
            	$('[href="#submit-form"]').attr("href", "#");
            }
          }
      })
  }
});
</script>
