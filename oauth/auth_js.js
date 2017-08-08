 var OAuth = require("@zalando/oauth2-client-js")

// Determine if authenticated
window.access_token = localStorage.getItem('token')
const expires = localStorage.getItem('expires')
const authenticated = access_token!==null && expires > new Date().getTime()

if (!authenticated) authSetup()

function authSetup() {
	// Setup the provider
	var ibm = new OAuth.Provider({
		id: '',
		authorization_url: ''
	})

	// Create a new request
	var request = new OAuth.Request({
		client_id: '',
		redirect_uri: '',
		scope: 'openid'
	})

	// Idk
	var uri = ibm.requestToken(request)
	ibm.remember(request)


	//grab ID
	uri = uri.replace(/response_type=token/i, 'response_type=token%20id_token') 
	uri = uri+'&nonce='+ new Date().getTime()
	// console.log(uri)

	// Redirect
	window.location.href = uri

}
