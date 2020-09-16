import axios from 'axios';

export const getData = (token, category) => {
  // Sent token to server for Auth0 validation for permission of actions
  const api_server = process.env.REACT_APP_AUTH0_API_SERVER;
  // Options for api request to server for data
  const options = {
    url: api_server + category,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` // Send the token from Auth0
    },
  };

   return axios(options)
          .then(response => response)
          .catch(err => console.log(err))
}

export const postData = async (token, category, data) => {
    // Sent token to server for Auth0 validation for permission of actions
    const api_server = process.env.REACT_APP_AUTH0_API_SERVER;
    // Options for api request to server for data
    const options = {
      url: api_server + category,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}` // Send the token from Auth0
      },
      data: data
    };
    return await axios(options)
              .then(res => res)
              .catch(err => console.log(err))
}