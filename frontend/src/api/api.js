import axios from 'axios';

export const getData = async (token, category) => {
  // Sent token to server for Auth0 validation for permission of actions
  const api_server = process.env.REACT_APP_AUTH0_API_SERVER;
  // Options for api request to server for data
  const options = {
    url: api_server+category,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` // Send the token from Auth0
    },
  };

  await axios(options)
          .then(response => {
            console.log(response);
          })
          .catch(err => console.log(err))
}