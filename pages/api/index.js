import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Authorization header missing')
  }

  const auth = await req.headers.authorization

  try {
    const { token }  = JSON.parse(auth)
    //console.log({ token });
    const url = `http://dev-metaspf401.sunpowercorp.com:8080/api/oasis/${token}`
    //console.log(url);

    const response = await fetch(url)

    console.log(response);

    if (response.ok) {
      const js = await response.json()
      // Need camelcase in the frontend
      const data = Object.assign({}, { avatarUrl: js.avatar_url }, js)
      return res.status(200).json({ data })
    } else {
      // https://github.com/developit/unfetch#caveats
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    const { response } = error
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message })
  }
}