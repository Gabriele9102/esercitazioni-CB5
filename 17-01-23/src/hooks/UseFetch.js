
/**
 * Javascript api 
 *
 * DummyJSON comes with different sets of common resources (ENDPOINT):
 * 
 * /users	100 users
 * /posts	150 posts
 *
 * @link   https://dummyjson.com
 * @since  16-01-23
 */

const Url = "https://dummyjson.com"

const GET = async (ENDPOINT) =>{
    const res = await fetch( `${Url}/${ENDPOINT}`);
    const data = await res.json();

    return data;
};


const POST = async (ENDPOINT, body) => {
    const res = await fetch(`${Url}/${ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json()

    return data;
  
  };


    export {GET, POST}