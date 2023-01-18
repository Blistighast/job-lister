

//can be used instead of useEffect
// loader function
const careersLoader = async () => {
  const resp = await fetch("http://localhost:4000/careers")

  return resp.json()
}

export default careersLoader