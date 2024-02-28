async function getCep(cep) {
  const response = await fetch(
    `https://viacep.com.br/ws/${cep}/json`
  )
  const json = await response.json()

  console.log(json)
}

getCep('89239310')