
const careerDetailsLoader = async ({ params }) => {
  const resp = await fetch(`http://localhost:4000/careers/${params.id}`)

  if (!resp.ok) {
    throw Error('Could not find that career')
  }

  return resp.json()
}

export default careerDetailsLoader;