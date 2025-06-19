const axios = require('axios');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { amount, name, email } = JSON.parse(event.body);

  if (!amount || !name || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing parameters' }),
    };
  }

  const payload = {
    CompanyToken: '8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3',
    Request: 'createToken',
    Transaction: {
      PaymentAmount: amount,
      PaymentCurrency: 'USD',
      CompanyRef: `HOUU-${Date.now()}`,
      RedirectURL: 'https://houu.org/donate',
      BackURL: 'https://houu.org/donate',
      CustomerFirstName: name,
      CustomerEmail: email,
      ServiceType: '5525',
      ServiceDescription: 'Donation to Hope Of Unemployed Uganda',
      ServiceDate: new Date().toISOString().split('T')[0],
    },
  };

  try {
    const response = await axios.post(
      'https://secure.3gdirectpay.com/API/v6/',
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('DPO API Error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create payment token' }),
    };
  }
};
