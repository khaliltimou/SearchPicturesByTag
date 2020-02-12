import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorisation: 'bc7aa1fe3769e11d8a7f6f0a801377d9ca6152f80f7994b29999d7ed5f03f588'
    }

});
