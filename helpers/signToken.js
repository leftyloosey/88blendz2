import jwt from 'jsonwebtoken'
// import express from 'express'

const signToken = (payload) => {
  const secret = 'mysecretssshhhhhhh'
  const expiration = '2h'
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
}

export default signToken
