 <script type="text/javascript">
 <script src="https://apis.google.com/js/platform.js" async defer></script>
 <meta name="google-signin-client_id" content="904226974438-ka2pd77tvh6caa9p7ha4tesmreh5r8f4.apps.googleusercontent.com">
 <div class="g-signin2" data-onsuccess="onSignIn"></div>
 function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}