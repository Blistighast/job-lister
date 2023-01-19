
const careerDetailsLoader = async ({ params }) => {
  const resp = await fetch(`http://localhost:4000/careers/${params.id}`)

  return resp.json()
}

export default careerDetailsLoader;